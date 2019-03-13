# xux-types

[![TypeScript](https://img.shields.io/badge/lang-typescript-blue.svg)](https://www.tslang.cn/) [![Build Status](https://travis-ci.org/yusangeng/xux-types.svg?branch=master)](https://travis-ci.org/yusangeng/xux-types) [![Coverage Status](https://coveralls.io/repos/github/yusangeng/xux-types/badge.svg?branch=master)](https://coveralls.io/github/yusangeng/xux-types?branch=master) [![Npm Package Info](https://badge.fury.io/js/xux-types.svg)](https://www.npmjs.com/package/xux-types) [![Downloads](https://img.shields.io/npm/dw/xux-types.svg?style=flat)](https://www.npmjs.com/package/xux-types)

## Abstract

XUX data validator.

DON'T use this package if you don't know XUX or recore!

## Install

``` bash
npm install xux-types --save
```

## Usage

``` ts
// Foobar.api.ts
import xux from 'xux-types'

type Request = {
  email: xux.Email
}

type Response = {
  success: xux.Boolean
}

declare class Foobar {
  updateEmail (req: Request) : Promise<Response>
}
```
