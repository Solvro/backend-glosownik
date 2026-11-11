import { AuthModule } from "@thallesp/nestjs-better-auth";
import * as express from "express";

import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaModule } from "./prisma/prisma.module";
import { auth } from "./utils/auth";

@Module({
  imports: [PrismaModule, AuthModule.forRoot({ auth })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(express.json(), express.urlencoded({ extended: true }))
      .exclude({ path: "api/auth/*path", method: RequestMethod.ALL })
      .forRoutes("*");
  }
}
