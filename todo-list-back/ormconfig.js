const connections = [
  {
    name: 'default',
    type: 'oracle',
    connectString: process.env.DB_TNSNAME,
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
