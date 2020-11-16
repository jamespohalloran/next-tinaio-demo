This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-typescript-app`](https://www.npmjs.com/package/create-next-typescript-app).

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

To enter edit-mode on this site, you can login through /login. Once you are logged in, any content from the site root will be loaded from tina.io. 
The tina sidebar will also be visible. Any changes that are saved will go through Tina.io's API and create a new commit.

## What's happening under the hood?

`yarn dev` is starting a graphql server, which is loading its content from the filesystem.
When the user logs in to tina.io, it switches the site to [Preview-mode](https://nextjs.org/docs/advanced-features/preview-mode). This switches `getStaticProps` to load the data from tina.io's Content API.

## Issues to be aware of

The auth-token is currently stored on the backend as an http-only cookie within NextJS's preview data.
Another copy is stored by the frontend in a non-http-only cookie, which is accessed by the frontend.

This duplicate cookie causes production concerns around XSS, and can also lead to out-of-sync auth issues.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
