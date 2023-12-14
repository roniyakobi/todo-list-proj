const connections = [
  {
    name: 'default',
    type: 'postgres',
    connectString: process.env.DB_TNSNAME,
    host: 'localhost',
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    logging: ['error'],
    synchronize: false,
    entities: [`${__dirname}/src/entities/*.ts`, `${__dirname}/src/entities/**/*.ts`],
    subscribers: [`${__dirname}/src/subscribers/**/*.ts`],
    cli: {
      entitiesDir: `${__dirname}/src/entities`,
      subscribersDir: `${__dirname}/src/subscribers`,
    },
    extra: {
      poolMax: 1,
    },
  },
];

module.exports = connections;
