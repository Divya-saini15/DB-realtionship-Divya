import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Password@@1234',
  database: 'USE relationship',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
});