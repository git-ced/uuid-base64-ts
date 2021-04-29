# uuid-base64-ts
> Shorten a UUID v4 to 22 characters with base64 encoding in Typescript

[![NPM](https://img.shields.io/npm/v/uuid-base64-ts.svg)](https://www.npmjs.com/package/uuid-base64-ts)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/uuid-base64-ts)
![npm bundle size (scoped version)](https://img.shields.io/bundlephobia/minzip/uuid-base64-ts)
![Libraries.io dependency status for latest release, scoped npm package](https://img.shields.io/librariesio/release/npm/uuid-base64-ts)
![NPM](https://img.shields.io/npm/l/uuid-base64-ts)

## Table of Contents
 - [Installation](#installation)
 - [Setup](#setup)
 - [Usage](#usage)
 - [Authors](#authors)
 - [Changelog](#changelog)
 - [License](#license)

 <!-- toc -->

## Installation

This library is available through the [npm registry](https://www.npmjs.com/).

NPM
```bash
$ npm -i uuid-base64-ts
```

Yarn
```bash
$ yarn add uuid-base64-ts
```

## Setup

Start using it by importing the library first.

### CommonJS
```javascript
const base64 = require('uuid-base64-ts');
```

or 

### ES6
```javascript
import { encode, decode } from 'uuid-base64-ts';
```

## Usage

**Shorten a UUID v4 to 22 characters with base64 encoding**
```javascript
import { encode } from 'uuid-base64-ts';

const uuidv4 = '85c39545-533c-4587-bb1d-bad766908b1b';
const shortId = encode(uuidv4);

console.log(shortId);
// => 'hcOVRVM8RYe7HbrXZpCLGw'
```

**Expand a base64 encoded character to UUID v4**
```javascript
import { decode } from 'uuid-base64-ts';

const shortId = 'hcOVRVM8RYe7HbrXZpCLGw';
const uuidv4 = decode(shortId);

console.log(uuidv4);
// => '85c39545-533c-4587-bb1d-bad766908b1b'
```

## Authors

- [Prince Neil Cedrick Castro](https://github.com/git-ced/) - Initial work

See also the list of [contributors](https://github.com/git-ced/uuid-base64-ts/contributors) who participated in this project.

## Changelog

[Changelog](https://github.com/git-ced/uuid-base64-ts/releases)

## License

  [MIT](LICENSE)
