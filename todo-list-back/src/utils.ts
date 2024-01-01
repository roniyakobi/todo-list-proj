import { getConnection } from 'typeorm';

export const getTodoId = () =>
  getConnection()
    .query('SELECT cpr.TODO_ID_SEQ.nextval FROM dual')
    .then(data => data[0].NEXTVAL);
