module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'tabtracker',
        username: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || 'kamal',
        options: {
            dialect: 'mysql',
            host: '0.0.0.0',
            port: '3306'
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}