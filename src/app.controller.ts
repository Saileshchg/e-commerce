import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { USERS_REPOSITORY } from './constants';
import { User } from './sql-database/models/user.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, @Inject(USERS_REPOSITORY) private userRepository: typeof User) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/health-check')
  async getHealthCheck(){
    try{
      const users = await this.userRepository.findOne()
    } catch(error) {
      console.log(error);
    }
    return { message: "server is healthy" };
  }
}
