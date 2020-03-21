const {
    copySync,
    copyFileSync,
    ensureFileSync,
    existsSync,
    outputFileSync,
    readFileSync,
    emptyDirSync,
    ensureDirSync
} = require('fs-extra');

/**
 * Prints messages to console.
 *
 * @param {...string} [msgs]
 */
function log(...msgs) {
    console.log('  ', ...msgs);
}

/**
 * Prints error messages to console.
 *
 * @param {...string} [msgs]
 */
function error(...msgs) {
    log();
    console.error('  ', msgs.join(' '));
}

/**
 * Kills the process. Optionally prints error messages to console.
 *
 * @param {...string} [msgs]
 */
function die(...msgs) {
    msgs.length && error(...msgs);
    process.exit(1); // eslint-disable-line
}

/**
 * Checks if path exists.
 *
 * @param {string} path
 * @return {boolean}
 */
function exists(path) {
    return existsSync(path);
}

/**
 * Ensures dir exists , else creates it
 *
 * @param {string} source dir
 * @param {Object} options
 */
function makeDir(source, options) {
    ensureDirSync(source, options);
}

/**
 * Copies dir source to destination.
 *
 * @param {string} source dir
 * @param {string} destination dir
 */
function copyDir(source, destination) {
    copySync(source, destination);
}

/**
 * Empties src directory.
 *
 * @param {string} source dir
 */
function emptyDir(source) {
    emptyDirSync(source);
}

/**
 * Copies file source to destination.
 *
 * @param {string} source
 * @param {string} destination
 */
function copyFile(source, destination) {
    copyFileSync(source, destination);
}

/**
 * Gets file content.
 *
 * @param {string} path
 * @return {string}
 */
function readFile(path) {
    return readFileSync(path, 'utf-8');
}

/**
 * Writes content to file.
 *
 * @param {string} path
 * @param {string} content
 * @return {string}
 */
function writeFile(path, content) {
    ensureFileSync(path);

    return outputFileSync(path, content);
}

module.exports = {
    log,
    error,
    die,
    exists,
    makeDir,
    copyDir,
    emptyDir,
    copyFile,
    readFile,
    writeFile
};
