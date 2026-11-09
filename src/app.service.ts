import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return `
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Głosownik</title>
        </head>
        <body
          style="
            font-family: Arial, Helvetica, sans-serif;
            background-color: rgb(32, 32, 32);
            color: rgb(224, 224, 224);
          "
        >
          <h1 style="text-align: center">Głosownik-backend</h1>
          <h3 style="text-align: center; margin-top: 30px">
            Jeśli widzisz tą stronę, to znaczy że twój backend działa :))
          </h3>
        </body>
      </html>
    `;
  }
}
