module.exports = {
  api:{
    port: process.env.API_PORT || 3000
  },
  jwt:{
    secret: process.env.JWT_SECRET || 'notasecret'
  },
  mysql:{
    host: process.env.MYSQL_HOST || 'sql5.freemysqlhosting.net',
    user: process.env.MYSQL_USER || 'sql5677425',
    password: process.env.MYSQL_PASSWORD || '3Dsk3Gc2s1',
    database: process.env.MYSQL_DATABASE || 'sql5677425',
  },
  mysqlService: {
    host: process.env.MYSQL_SRV_HOST || 'localhost',
    port: process.env.MYSQL_SRV_PORT || 3001
  },
  post: {
    port: process.env.POST_PORT || 3002,
  }
}
