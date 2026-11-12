import { auth } from "src/utils/auth";

import { Injectable } from "@nestjs/common";

export interface SignUpDTO {
  email: string;
  password: string;
  name: string;
}

@Injectable()
export class DevelopmentService {
  async testSignUp(data: SignUpDTO) {
    const context = await auth.$context;
    const test = context.test;
    const user = test.createUser({ ...data });
    return await test.saveUser(user);
  }
}
