# global_greetings 🗣

[![NPM version](https://img.shields.io/npm/v/global-greetings-mod?style=flat)](https://www.npmjs.com/package/global-greetings-mod) [![NPM downloads](https://img.shields.io/npm/dm/global-greetings-mod.svg?style=flat)](https://npmjs.org/package/global-greetings-mod) [![Build Status](https://img.shields.io/travis/squeaky/global-greetings-mod.svg?style=flat)](https://travis-ci.org/squeaky/global-greetings-mod)

📋 npm module that **generates a random greeting in a different language**

## Features
Users are able to:
  * get all the available ways to say hello 
  * get a random way to say hello.

## Installation

```bash
npm install -g global-greetings-mod
```

## Usage

```bash
    import greet from 'global-greetings-mod'

    greet.all
      // [ "Africaans: Hallo", "Arabic: مرحبا", "Danish: Goddag", "English: Hello",...]

    greet.random()
      // Portuguese: Olá
```