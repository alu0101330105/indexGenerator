/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Jorge González Delgado
 * @since Apr 24 2022
 * @desc Standalone program to generate index.html files.
 *       Given a list of folder names, it generates an index.html file
 *       with the links to the corresponding doc/index.html file generated
 *       by jsdoc or similars.
 */

'use strict';

const fs = require('fs');

const myArgs = process.argv.slice(2);

/**
 * Main function.
 */
function main() {
  let result = generateTittle();
  myArgs.forEach((folder) => {
    result += generateIndex(folder);
  });
  fs.writeFileSync('index.html', result);
}

/**
 * Generates the tittle of the index.html file.
 * @return {string} HTML code with the tittle.
 */
function generateTittle() {
  return '<h1>Index</h1><br>\n';
}

/**
 * Generate the links to the corresponding doc/index.html file.
 * @param {string} folder - Folder name.
 * @return {string} HTML code with the links.
 */
function generateIndex(folder) {
  if (folder.endsWith('/')) {
    folder = folder.substring(0, folder.length - 1);
  }
  return `<a href="./${folder}/doc/index.html">${folder}</a><br>\n`;
}

main();
