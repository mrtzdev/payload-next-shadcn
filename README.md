# Payload next shadcn/ui template

Payload Docs: [https://payloadcms.com/docs/getting-started/what-is-payload](https://payloadcms.com/docs/getting-started/what-is-payload).

Core features:

- [Pre-configured Payload Config](#setup)
- [Pages Collection with Layout Blocks](#pages)
- [Layout Blocks made with shadcn/ui](#layout-block)
- [Media Coolection](#media)
- Draft Preview
- Live Preview
- Globals: Header and Footer
- Navigation Menus: Header, Footer, Mobile
- [Customization](#customization)

## Setup

Fork this repo to your namespace and clone it to your local machine.

Clone:

```
git clone https://github.com/<YOUR NAME>/payload-next-shadcn.git
```

cd my-project

install dependencies:‚

```
npm install
```

Setup a compatible database (MongoDB or Postgres).

When the database is created, add the access data to the env file of the project:

DATABASE_URI=

run the app in dev mode

```
npm run dev
```

Open localhost:3000 in your browser: http://localhost:3000/

Now go to: http://localhost:3000/admin

Create the first Admin User and login.
