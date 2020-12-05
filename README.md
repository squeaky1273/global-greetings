# global_greetings 🗣

[![NPM version](https://img.shields.io/npm/v/global_greetings?style=flat)](https://www.npmjs.com/package/tocsify) [![NPM downloads](https://img.shields.io/npm/dm/global_greetings.svg?style=flat)](https://npmjs.org/package/tocsify) [![Build Status](https://img.shields.io/travis/droxey/global_greetings.svg?style=flat)](https://travis-ci.org/squeaky1273/global_greetings)

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