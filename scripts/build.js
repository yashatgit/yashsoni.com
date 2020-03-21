const {log, makeDir, writeFile, readFile, die} = require('./utils');

/*
    - read all the folders in /data
    - check type from meta.type

    - move images folder to public/static/
    
    For Blogs:
    - move mdx file to pages/blog/
    - merge meta.json

    For Til:
    - move mdx file to pages/til/
*/
