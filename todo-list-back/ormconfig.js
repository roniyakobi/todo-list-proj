const connections = [
  {
    name: 'default',
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    entities: [`${__dirname}/src/entities/*.ts`, `${__dirname}/src/entities/**/*.ts`],
    subscribers: [`${__dirname}/src/subscribers/**/*.ts`],
    cli: {
      entitiesDir: `${__dirname}/src/entities`,
      subscribersDir: `${__dirname}/src/subscribers`,
    },
  },
];

module.exports = connections;
