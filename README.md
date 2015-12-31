# Emojicode Documentation

This is the official documentation for [Emojicode](http://emojicode.org).

## Building the documentation

Cd into the `src` directory and run `npm install`.

To compile the documentation you then just have to run `npm start` which will compile the documentation into the `docs` directory.

## Structure of the documentation source

The source for the documentation lives in the `src` directory.

- `lib`, `package.json` and `node_modules` are needed by the compiler.
- `templates` contains the templates for the documentation.
- `static` contains static resources like SASS (also compiled by the compiler) and fonts for the documentation.
- `pages` contains HTML pages that are directly put into the main template and then copied over. These pages are listed in `pages.json`.
- `references` and `guides` contains markdown documents that are compiled to a *book*.

  Each file represents one chapter and each book has a `chapters.json` listing these chapters.
- `packages` contains resource to compile the package pages and APIs.

  Each package has its own directory containing a `meta.json` and a `package.json` file.

  The `package.json` file represents the package API can be generated by the Emojicode Compiler using the `-r` or `-R packageName` option.

  To generate the `package.json` for the s package you would run this command:

      emojicodec -R s anyFile.emojic > package.json

  Packages can also have a `README.md` file that will be display on the packages main page.

  All packages that shall be included in the documentation are listed in `packages/packages.json`.

## Emojicode Documentation Markdown

The Emojicode Documentation supports additional Markdown commands for adding callouts.

To create a *Hint* you start a line with `>!H` and to create a *Caution* notice you start the line with `>!N`.

Example:

    >!H This chapter only introduces the three most important classes although there are many more.
    >!H
    >!H You can browse the whole API of the s package here.
