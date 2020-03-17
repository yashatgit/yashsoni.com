# yashsoni.com

My personal slice of the internet provides a platform for my writing and to showcase my latest work.
This portfolio is built using Next.js/React/MDX.

## Overview

-   `pages/blog/*` - Static pre-rendered blog pages using [MDX](https://github.com/mdx-js/mdx).
-   `pages/*` - All other static pages.

## Running Locally

```bash
$ git clone https://github.com/yashatgit/yashsoni.com.git
$ cd yashsoni.com
$ yarn
$ yarn dev
```


To use anything that requires API routes, you will need to run `now dev` and have a `.env` file similar to this.

```
MAILCHIMP_LIST_ID=
MAILCHIMP_API_KEY=
FIREBASE_PRIVATE_KEY=
FIREBASE_CLIENT_EMAIL=
UNSPLASH_ACCESS_KEY=
GOOGLE_ENCRYPTION_KEY=
GOOGLE_ENCRYPTION_IV=
```

## Built Using

-   [Next.js](https://nextjs.org/)
-   [Now](https://zeit.co/now)
-   [MDX](https://github.com/mdx-js/mdx)
-   [Prettier](https://prettier.io/)
-   [styled-components](https://www.styled-components.com/)
