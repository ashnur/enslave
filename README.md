# What is `enslave`?

`enslave` is the inverse function of [liberate](https://github.com/dwcook/liberate)

# Usage

``` javascript
var enslave = require('enslave')

function add(a, b){ return a.value + b.value }

var n = {add: enslave(add)}

var A = Object.create(n)
A.value = 1

var B = Object.create(n)
B.value = 2

A.add(B)  // returns 3

```


# Credits

Ripped straight from [sinful.js](https://github.com/guipn/sinful.js/blob/master/sinful.js), as I found it useful on its own.
