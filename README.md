# Głosownik

![Głosownik](docs/images/glosownik.svg)

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

### Kod źrodłówy

Po sklonowaniu repo, zacznij od instalacji zależności:

```bash
$ pnpm install
```

### Baza danych

Niestety MongoDB nie ułatwia życia w tym temacie, ale w package.json czekają skrypty które ułatwią robotę

Najpierw uruchom kontener dockerowy z bazą danych:

```bash
$ pnpm db:up
```

Następnie zainicjalizuj repliki za pomocą tego polecenia:

```bash
$ pnpm db:init-rs
```

Potem dodaj nowego użytkownika do bazy danych

```bash
$ pnpm db:create-user
```

### .env

Pamiętajcie o uzupełnieniu pliku .env zgodnie z wzorcem w pliku .env.example

```bash
DATABASE_URL=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
```

### Prisma

Następnie, musisz wygenerować klienta Prismy (Prisma Client), ponieważ ta biblioteka generowana jest dynamicznie

```bash
$ npx prisma generate
```

lub

```bash
$ pnpm prisma generate
```

Na końcu zaktualizuj bazę danych o nowy schemat:

```bash
$ pnpm prisma db push
```

**Uwaga**
Polecenia `prisma generate` oraz `prisma db push` musisz używać **ZA KAŻDYM RAZEM** kiedy dokonujesz zmian w schema.prisma

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

Licencja projektu to GNU AGPL v3.0. Więcej o licencji dowiesz się [TUTAJ](LICENSE).
