# typed-validate

[![TypeScript](https://img.shields.io/badge/lang-typescript-blue.svg)](https://www.tslang.cn/) [![Build Status](https://travis-ci.org/yusangeng/typed-validator.svg?branch=master)](https://travis-ci.org/yusangeng/typed-validator) [![Coverage Status](https://coveralls.io/repos/github/yusangeng/typed-validator/badge.svg?branch=master)](https://coveralls.io/github/yusangeng/typed-validator?branch=master) [![Npm Package Info](https://badge.fury.io/js/typed-validate.svg)](https://www.npmjs.com/package/typed-validate) [![Downloads](https://img.shields.io/npm/dw/typed-validate.svg?style=flat)](https://www.npmjs.com/package/typed-validate)

## Abstract

Typed data validator.

DON'T use this package if you don't know recore!

## Install

``` bash
npm install typed-validate --save
```

## Usage

``` ts
// Foobar.api.ts
import { Email } from 'typed-validate'

declare class Foobar {
  updateEmail (addr: Email) : Promise<boolean>
}
```
