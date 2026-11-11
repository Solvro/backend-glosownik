# Głosownik

![Baner KN Solvro](https://github.com/Solvro/web-solvro.pwr.edu.pl/raw/main/public/logo/solvro.png)

Głosownik to projekt aplikacji webowej do przeprowadzania różnego rodzaju głosowań podczas Walnych Zgromadzeń Członków czy to innego typu wyborów. Aplikacja ma zastąpić dotychczasowe papierowe rozwiązania. Każde głosowanie ma pozwolić na stwierdzenie kworum oraz późniejsze anonimowe oddawanie głosów przez uczestników.

Celem aplikacji jest zapewnić anonimowość głosujących na każdym etapie głosowania, pozwalając jednocześnie na ich autentykację tuż przed rozpoczęciem głosowania. 

Korzyści jakie przyniesie aplikacja to możliwość sprawdzenia obecności członków, przeprowadzania sprawnych, bezpiecznych i anonimowych głosowań w różnych rodzajach (głosowanie TAK/NIE, wybór pojedynczej opcji np. nazwiska kandydata na przewodniczącego).

Grupą docelową mają być organizacje studenckie, które mają potrzebę przeprowadzania głosowań (m.in koła naukowe podczas Walnych Zgromadzeń Członków, czy samorząd studencki podczas wewnętrznych głosowań).

Głosownik to projekt aplikacji webowej, co pozwoli na łatwy i szybki dostęp z każdego urządzenia z dostępem do internetu i przeglądarką internetową, bez konieczności instalowania aplikacji.

## Stack technologiczny (Backend)

<p align="center">
  <img src="https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white"/>
   &nbsp;
  <img src="https://img.shields.io/badge/Better%20Auth-000000?style=for-the-badge&logo=betterauth&logoColor=white"/>
   &nbsp;
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white"/>
   &nbsp;
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
</p>

# Development

## Setup projektu

Po sklonowaniu repo, zacznij od instalacji zależności: 

```bash
$ pnpm install
```

Następnie, musisz wygenerować klienta Prismy (Prisma Client), ponieważ ta biblioteka generowana jest dynamicznie


```bash
$ npx prisma generate
```

lub

```bash
$ pnpm dlx prisma generate
```

**Uwaga**
Polecenia ``` prisma generate ``` musisz używać **ZA KAŻDYM RAZEM** kiedy dokonujesz zmian w schema.prisma

Pamiętajcie o uzupełnieniu pliku .env zgodnie z wzorcem w pliku .env.example: 

```bash
DATABASE_URL=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
```

## Uruchamianie projektu

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```
Klepaczy kodu interesuje przede wszystkim :dev



## Licencja

Licencja projektu to GNU GPL v3.0. Więcej o licencji dowiesz się [TUTAJ](LICENSE).
