This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-typescript-app`](https://www.npmjs.com/package/create-next-typescript-app).

## Environment Configuration

The following values will need to be set in your repo's `.env.local`

```
NEXT_PUBLIC_HOMEPAGE_URL=http://localhost:3000/
NEXT_PUBLIC_REALM_NAME=awko
NEXT_PUBLIC_TINA_CLIENT_ID=e0a42c05-26b6-41d4-9c80-f62c829aabd7
```

`NEXT_PUBLIC_REALM_NAME` & `NEXT_PUBLIC_TINA_CLIENT_ID` can be retrieved by creating a realm/app within
[Tina.io](https://auth.tinajs.dev/signin)

## Getting Started

First, install the dependencies:

```bash
yarn install
```

then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Tina.io

To enter edit-mode on this site, you can login through [/login](http://localhost:3000/login). Once you are logged in, any content from the [site root](http://localhost:3000/)'s content will be loaded from Tina.io.
The tina sidebar will also be visible. Any changes that are saved will go through Tina.io's API and create a new commit.

## What's happening under the hood?

`yarn dev` is starting a graphql server, which is loading its content from the filesystem.
When the user logs in to tina.io, it switches the site to [Preview-mode](https://nextjs.org/docs/advanced-features/preview-mode). This switches `getStaticProps` to load the data from tina.io's Content API.

## Issues to be aware of

### Auth

The auth-token is currently stored on the backend as an http-only cookie within NextJS's preview data.
Another copy is stored by the frontend in a non-http-only cookie, which is accessed by the frontend.
This duplicate cookie causes production concerns around XSS, and can also lead to out-of-sync auth issues.

### Private npm packages

This repo uses private npm packages. If you don't have access locally, let me know and i can grant access within npm.
If you do have access and want to push to Vercel, you will need to an a `NPM_TOKEN` as an environment variable within Vercel.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
