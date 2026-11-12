import { AllowAnonymous } from "@thallesp/nestjs-better-auth";

import { Body, Controller, HttpCode, Post } from "@nestjs/common";

import { DevelopmentService } from "./development.service";
import type { SignUpDTO } from "./development.service";

@AllowAnonymous()
@Controller("development")
export class DevelopmentController {
  constructor(private readonly developmentService: DevelopmentService) {}

  @Post("/signUpTestUser")
  @HttpCode(201)
  async signUp(@Body() signUpDto: SignUpDTO) {
    return (process.env.BETTER_AUTH_URL?.includes("localhost") ?? false)
      ? await this.developmentService.testSignUp(signUpDto)
      : null;
  }
}
