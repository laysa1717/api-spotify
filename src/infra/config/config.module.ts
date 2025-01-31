import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import configuration from './config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      load: [configuration],
      isGlobal: true,
    }),
  ],
})
export class EnvConfigModule {}
