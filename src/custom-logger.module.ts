import { DynamicModule, Module } from '@nestjs/common';
import { CustomLogger } from './custom-logger.service';

interface LoggerModuleOptions {
  appName: string;
}

@Module({})
export class LoggerModule {
  static forRoot(options: LoggerModuleOptions): DynamicModule {
    const { appName } = options;
    return {
      module: LoggerModule,
      exports: [CustomLogger],
      providers: [{ provide: 'APP_NAME', useValue: appName }, CustomLogger],
      global: true,
    };
  }
}
