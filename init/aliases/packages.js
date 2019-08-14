const path = require("path");
const fs = require("fs");

const directoryPath = path.join(__dirname, "../../packages");
const PACKAGE__BASE = process.env.PACKAGE_BASE;

const readPackages = () => fs.readdirSync(directoryPath);

const mapFolders = (folder, accumulator) => ({
  [folder]: directoryPath.concat("/" + folder),
  ...accumulator
});

const reducePackages = arr =>
  arr.reduce(
    (accumulator, folder) =>
      folder !== PACKAGE__BASE ? mapFolders(folder, accumulator) : accumulator,
    {}
  );

module.exports = reducePackages(readPackages());
