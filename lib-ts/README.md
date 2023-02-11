# lib-ts-starter

<div align="center">
⭕ Opinionated TypeScript library starter by BlazingWorks

![License](https://img.shields.io/github/license/blazingworks/lib-ts-starter?color=%235300cf&labelColor=%230a0014&style=for-the-badge)
![Contributors](https://img.shields.io/github/contributors/blazingworks/lib-ts-starter?color=%235300cf&labelColor=%230a0014&style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/blazingworks/lib-ts-starter?color=%235300cf&labelColor=%230a0014&style=for-the-badge)

</div>

## What is this?

This is a starter template for TypeScript libraries. It is opinionated and comes with building, linting, formatting and automated semantic releasing out of the box. It is designed to be used with [pnpm](https://pnpm.io/), but it should work with npm and yarn as well.

## Installation

```sh
$ npm install ts-lib-starter
$ yarn add ts-lib-starter
$ pnpm add ts-lib-starter
```

## Usage

```js
import { r } from "reggy";

const characterLineRegex = r
  .lineStart()
  .fragment(r.text("<").group(r.oneOrMore(r.uppercase())).text(">"))
  .fragment(r.oneOrMore(r.whitespace()))
  .group(r.oneOrMore(r.any()))
  .lineEnd()
  .buildRegex();

const string = "<CASEY> Hello World!";
const match = string.match(characterLineRegex);
console.log(match[1]); // CASEY
console.log(match[2]); // Hello World!
```

## Concepts

(explain the concepts of the library here)

## Special Thanks & Sponsors

- [BlazingWorks](https://blazing.works/) - for funding and maintaining the development of Reggy
- other credits here
- [TypeScript](https://www.typescriptlang.org/) - for powering this project

## How to report issues / questions

- For general issues or questions, [open an issue](https://github.com/blazingworks/logger/issues/new)
- For security issues, please send an email to [security@blazing.works](mailto:security@blazing.works)
- For important questions, please email [developers@blazing.works](mailto:developers@blazing.works)

## License

lib-ts-starter is licensed under the [MIT License](/LICENSE).

<div align="center" style="margin-top: 30px">
<a href="https://blazing.works"><img src=".github/blazingworks_opensource.svg" alt="BlazingWorks Open-Sourcd" width="200px"></a>
</div>
