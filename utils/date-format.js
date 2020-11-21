import format from 'date-fns/format';

export const dateTime = date => new Date(date).toISOString();

export const full = date => format(date, 'MMMM D, YYYY');

export const generateUrlFromFrontMatter = frontMatter =>
  frontMatter.__resourcePath.replace('.mdx', '').replace('/index', '');
