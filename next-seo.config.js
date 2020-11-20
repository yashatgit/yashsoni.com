const title = 'Yash Soni';
const description = 'Yash Soni is a developer and a UI/UX enthusiast.';

const SEO = {
  title,
  description,
  canonical: 'https://yashsoni.com',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://yashsoni.com',
    title,
    description,
    images: [
      {
        url: 'https://yashsoni.com/static/images/og-banner.png',
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: '@yashs0ni',
    site: '@yashs0ni',
    cardType: 'summary_large_image',
  },
};

export default SEO;
