# <a href="https://bestmods.io/" target="_blank"><img src="https://github.com/Yell0wflash/bestmods/blob/main/gitimages/bestmods.png" data-canonical-src="https://github.com/Yell0wflash/bestmods/blob/main/gitimages/bestmods.png" /></a>
Browse the best mods in gaming from many sources on the Internet!

<a href="https://bestmods.io/" target="_blank"><img src="https://github.com/Yell0wflash/bestmods/blob/main/gitimages/preview.jpeg" data-canonical-src="https://github.com/bestmods/bestmods/blob/main/gitimages/preview.jpeg" /></a>

## Contributing
Any help from the open source community is highly appreciated on this project! We utilize the following.

* [Create T3 App](https://create.t3.gg/) (TypeScript).
* [Next.JS](https://nextjs.org/).
* [React](https://reactjs.org/).
* [tRPC](https://trpc.io/).
* [Prisma](https://www.prisma.io/).
* [Tailwind CSS](https://tailwindcss.com/).

## Installation & Deployment
### Requirements
* PostgreSQL (unless you choose SQLite; See below)
* Node ^14
* NPM

### Using SQLite
To use a local SQLite database, perform the following steps.
1. In `prisma/schema.prisma`, replace `provider = "postgresql"` with `provider = "sqlite"`.
1. In `prisma/schema.prisma`, remove all instances of `@db.Text` because PostgreSQL and SQLite have different column definitions for string.
1. In `.env`, set `DATABASE_URL` to `file:./db.sqlite`.

### Installation & Running Dev Server
You may perform the following commands to run the dev web server.

```bash
# Clone respository.
git clone https://github.com/Yell0wflash/bestmods.git

# Change directory.
cd bestmods

# Update and install NPM packages.
npm update
npm install

# Migrate database.
npx prisma db push

# Run dev server.
npm run dev
```

### Production
To run in production, you can use the `npx next build` command to build the web application. Make sure to add `output: "standalone"` to the config variable in `next.config.mjs`.

With that said, you may then run `node server.js`.

## Showcase
<a href="https://bestmods.io/view/mc-jurassicraft" target="_blank"><img src="https://github.com/Yell0wflash/bestmods/blob/main/gitimages/preview2.jpeg" data-canonical-src="https://github.com/Yell0wflash/bestmods/blob/main/gitimages/preview2.jpeg" /></a>
<a href="https://bestmods.io/view/mc-jurassicraft/sources" target="_blank"><img src="https://github.com/Yell0wflash/bestmods/blob/main/gitimages/preview3.jpeg" data-canonical-src="https://github.com/Yell0wflash/bestmods/blob/main/gitimages/preview3.jpeg" /></a>
<a href="https://bestmods.io/view/mc-jurassicraft/downloads" target="_blank"><img src="https://github.com/Yell0wflash/bestmods/blob/main/gitimages/preview4.jpeg" data-canonical-src="https://github.com/Yell0wflash/bestmods/blob/main/gitimages/preview4.jpeg" /></a>

## Permissions
While this project is open source, if you use this full project publicly, please add a link back to Best Mods' [website](https://bestmods.io/) that is visible to the public user. You don't need to do this if you're using *<30%* of the project's code. This is to attempt to mitigate people blatantly copying the project for their own use publicly.
