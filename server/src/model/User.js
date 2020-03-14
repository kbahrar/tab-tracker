const Promis = require('bluebird');
const bcrypt = Promis.promisifyAll(require('bcrypt-nodejs'));

function hashPassword (user, options) {
    const SALT_FACTOR = 8;
    if (!user.changed('password')) {
        return ;
    }

    return bcrypt
        .genSaltAsync(SALT_FACTOR)
        .then(salt => bcrypt.hashSync(user.password, salt, null))
        .then(hash => {
            user.setDataValue('password', hash)
        });
}
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    },
    {
        hooks: {
            beforeCreate: hashPassword,
            beforeUpdate: hashPassword,
            beforeSave: hashPassword
        }
    }
    )

    User.prototype.comparePassword = function (pass){
        return bcrypt.compareSync(pass, this.password);
    }
    return User;
}