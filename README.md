# Payload Next Shadcn/ui Template

This template includes a beautifully designed, production-ready front-end built with the [Next.js App Router](https://nextjs.org/docs/app/building-your-application/routing), served right alongside your Payload app in a instance.

Payload Docs: [https://payloadcms.com/docs/getting-started/what-is-payload](https://payloadcms.com/docs/getting-started/what-is-payload).

![preview](./preview.png)

Core features:

- Pre-configured Payload Config
- [Pages Collection with Layout Blocks](#pages-collection)
- [Layout Blocks made with shadcn/ui](#layout-blocks)
- [Media Collection](#media-collection)
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

install dependencies:

```
npm install
```

Setup a MongoDB database. The Payload Config uses mongooseAdapter. If you want to use a different compatible database, change this in the payload.config.ts. Docs: https://payloadcms.com/docs/database/overview

Copy the .env.example and rename it to .env

When the database is created, add the access data to the .env file of the project:

DATABASE_URI=

PAYLOAD_SECRET=YOUR_SECRET_HERE

PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3000

PAYLOAD_PUBLIC_SITE_URL=http://localhost:3000

PAYLOAD_PUBLIC_PREVIEW_SECRET=YOUR_PREVIEW_SECRET_HERE
NEXT_PREVIEW_SECRET=YOUR_PREVIEW_SECRET_HERE

PAYLOAD_PUBLIC_PREVIEW_SECRET and NEXT_PREVIEW_SECRET must have the same value !

run the app in dev mode

```
npm run dev
```

Open localhost:3000 in your browser: http://localhost:3000/

Now go to: http://localhost:3000/admin

Create the first Admin User and login.

## Pages Collection

All pages are layout builder enabled so you can generate unique layouts for each page using layout-building blocks, see Layout Blocks for more details. Pages are also draft-enabled so you can live preview them before publishing them to your website.

Config Pages: [/src/collections/Pages.ts](https://github.com/mrtzdev/payload-next-shadcn/blob/main/src/collections/Pages.ts)

**Page Slug:** The Slug Field is used for the dynamic routes in src/app/(frontend)/[slug] ( Next.js App router frontend ).
The slug field is required and has to be unique ( Payload CMS Backend > Page ). A simple hook function generates a valid slug on save. For example: "My Page Title" saved as "my-page-title".

**Home Page:** Use the slug "home" for the start page of your website.

## Layout Blocks

This template comes pre-configured with the following layout blocks:

- Call To Action
- FAQ
- Features
- Grid Cards
- Hero
- Logos
- Quote
- Rich Text

Layout Blocks: [/src/components/blocks](https://github.com/mrtzdev/payload-next-shadcn/tree/main/src/components/blocks)

The Block Components are made with [TailwindCSS styling](https://tailwindcss.com/) and [shadcn/ui components](https://ui.shadcn.com/)

## Media Collection

Config Media: [/src/collections/Media.ts](https://github.com/mrtzdev/payload-next-shadcn/blob/main/src/collections/Media.ts)

Media Docs: [https://payloadcms.com/docs/upload/overview](https://payloadcms.com/docs/upload/overview)

## Customization

### Styles

You can use css variables for theming: [global.css](<https://github.com/mrtzdev/payload-next-shadcn/blob/main/src/app/(frontend)/globals.css>) ( src/app/(frontend)/globals.css )

shadcn/ui themes: [https://ui.shadcn.com/themes](https://ui.shadcn.com/themes)

### Add new Layout Blocks

New layout blocks can easily be added:

1. Add a file to /src/collections/blocks ( for Payload Admin Backend ) and add the fields.
   See Payload Docs: [https://payloadcms.com/docs/fields/overview](https://payloadcms.com/docs/fields/overview)
2. Import it to Pages.ts and add it to CollectionConfig "layout" blocks
3. Create a new file for your Block: /src/components/blocks and add your component code for next.js frontend
4. Import it to /src/components/blocks/blocks.tsx

Now you can use your new block for the page layouts.
