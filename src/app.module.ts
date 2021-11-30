import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { LoggerModule } from './custom-logger.module';

@Module({
  imports: [
    LoggerModule.forRoot({
      appName: 'MyApp',
    }),
  ],
  providers: [AppService],
})
export class AppModule {}
