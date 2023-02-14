import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'amira',
  password: 'Amiratilouch.30',
  database: 'dbfilms',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
