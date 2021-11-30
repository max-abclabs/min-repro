import { ConsoleLogger, Inject, Injectable } from '@nestjs/common';
@Injectable()
export class CustomLogger extends ConsoleLogger {
  constructor(@Inject('APP_NAME') readonly appName: string) {
    super(appName);
    this.appName = appName;
  }

  public async warn(message: string, stack?: string) {
    console.log(
      JSON.stringify({
        message,
        stack,
        logLevel: 'warn',
        appName: this.appName,
      }),
    );
  }

  public async error(message: string, stack?: string) {
    console.log(
      JSON.stringify({
        message,
        stack,
        logLevel: 'error',
        appName: this.appName,
      }),
    );
  }

  public async log(message: string) {
    console.log(
      JSON.stringify({ message, logLevel: 'log', appName: this.appName }),
    );
  }
}
