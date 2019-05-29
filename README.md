# num-ord
This module allows you to easily convert inteters (1, 3, 7) to ordinals (1st, 3rd, 7th). This is unmaintained, but works fine and can be used if wanted.

## Install
```
npm i num-ord
```

## Example
```js
const num_ord = require('num-ord');
num_ord(17); // => '17th'
```

## Usage
First, require the package somewhere in your code:
```js
const num_ord = require('num-ord');
```
Then, call it as a function when needed:
```js
num_ord(17); // => '17th'
```
You can also directly require it to save space:
```js
require('num-ord')(17); // => '17th'
```

It will parse strings to numbers if a string is passed and is a valid number.
