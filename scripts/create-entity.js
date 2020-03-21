const {log, makeDir, writeFile, readFile, die} = require('./utils');

const ENTITY_TYPE = process.argv[2];
const ENTITY_NAME = process.argv[3];

if (!ENTITY_TYPE || !ENTITY_NAME) {
    die('Names not provided!');
}

const ENTITY_FOLDER_NAME = `${ENTITY_TYPE}_${ENTITY_NAME}`;

log(`Creating ${ENTITY_FOLDER_NAME}`);

// create directory and images sub dir
makeDir(`data/${ENTITY_FOLDER_NAME}`);
makeDir(`data/${ENTITY_FOLDER_NAME}/images`);

// write meta.json
const metaContent = {
    date: '2020-03-19',
    title: 'Page Title',
    description: `Page Description`,
    image: '',
    slug: ENTITY_NAME
};

writeFile(`data/${ENTITY_FOLDER_NAME}/meta.json`, JSON.stringify(metaContent, null, 2));

// write mdx file.json
const blogPostTemplate = readFile('data/_template_blogpost.md');
const mdxPageContent = blogPostTemplate;

writeFile(`data/${ENTITY_FOLDER_NAME}/${ENTITY_NAME}.mdx`, mdxPageContent);
