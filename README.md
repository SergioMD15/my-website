# My-website

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). Aside Next.js, I've used [TailwindCSS](https://tailwindcss.com/) for the styles, [Notion](https://notion.so/) as a CMS, and [Vercel](https://vercel.com/) to deploy the project.

I took advantage of some Next.js most interesting features: [SSG](https://nextjs.org/docs/basic-features/data-fetching/get-static-props) + [ISR](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration) to make the website lightning fast and update every 60 seconds (it could be much more as I'm the only one updating the content, but it's ok like that).

# How to run

To run the development server:

```bash
npm run dev
# or
yarn dev
```

To build the static pages and run as it would run in production (it is faster):
```bash
npm run build && npm run start
# or
yarn build && yarn start
```

# Usage and improvement

Feel free to reuse as much as you want from this code, or even use it as a template to build your own website.

Also, I encourage anyone that checks the code to ping me about any single potential problem or improvement they find. If you do so, please add an explanation with your change proposal, I'd love to learn why I should make the changes 🙂
