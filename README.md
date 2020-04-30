# Express Middleware for Well-Known URIs

![Build](https://github.com/theaccordance/express-well-known/workflows/Build/badge.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/theaccordance/express-well-known/badge.svg)](https://coveralls.io/github/theaccordance/express-well-known)
[![CodeFactor](https://www.codefactor.io/repository/github/theaccordance/express-well-known/badge)](https://www.codefactor.io/repository/github/theaccordance/express-well-known)
![npm latest version](https://img.shields.io/npm/v/express-well-known/latest)
[![Known Vulnerabilities](https://snyk.io/test/github/theaccordance/express-well-known/badge.svg?targetFile=package.json)](https://snyk.io/test/github/theaccordance/express-well-known?targetFile=package.json)
![Bundle Size](https://img.shields.io/bundlephobia/minzip/express-well-known)
![TypeScript Types](https://img.shields.io/static/v1?label=TypeScript%20Types&message=Included&color=blue)
![License](https://img.shields.io/npm/l/express-well-known)

Express Middleware for IETF RFC 8615

## Features

- Allows you to register resource schemes to share meta data in a structured way
- Written in TypeScript

## Installation

### npm

```bash
$ npm install express-well-known --save
```

### yarn

```bash
$ yarn add express-well-known
```

## Usage

### TypeScript

```typescript
import * as express from "express";
import { registerURIs } from "express-well-known";

const manifest = {
  application: {
    sha: "4c7e5e667bd30affa2e8c3bc8c65fd38e90912fe",
  },
};

const app = express();
const wellKnown = registerURIs(manifest);
app.use(wellKnown);
```

### JavaScript

```javascript
const express = require("express");
const { registerURIs } = require("express-well-known");

const manifest = {
  application: {
    sha: "4c7e5e667bd30affa2e8c3bc8c65fd38e90912fe",
  },
};

const app = express();
const wellKnown = registerURIs(manifest);
app.use(wellKnown);
```

## API

### registerURIs(Manifest)

returns an express router to mount containing all the well-known resources

## References

- [IETF RFC8615](https://tools.ietf.org/html/rfc8615)
