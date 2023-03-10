import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Erc20 } from './erc20/entities/erc20.entity';
import { password } from '../security';
import { Erc20Module } from './erc20/erc20.module';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { AccountModule } from './account/account.module';
import { Account } from './account/entities/account.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '118.31.188.117',
      port: 3306,
      username: 'root',
      password,
      database: 'test',
      entities: [Erc20, User, Account],
      synchronize: true,
      // timezone: '+08:00',
      dateStrings: true,
      // driver: require('mysql2'),
    }),
    Erc20Module,
    UsersModule,
    AuthModule,
    AccountModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
