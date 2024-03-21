import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

const ormconfig = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Password@@1234',
  database: 'relationship',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
});

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig.options), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}