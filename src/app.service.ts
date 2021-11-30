import { Injectable, OnModuleInit } from '@nestjs/common';
import { interval } from 'rxjs';

@Injectable()
export class AppService implements OnModuleInit {
  onModuleInit() {
    interval(1000).subscribe();
  }
  getHello(): string {
    return 'Hello World!';
  }
}
