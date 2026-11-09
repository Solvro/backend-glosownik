import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: false, //required for better auth
    //bodyParser functionality is restored in app.module.ts file
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
