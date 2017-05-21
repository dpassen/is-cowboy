# is-cowboy

Checks whether a value is a cowboy

> 'A waste of time.' - Some

> 'An incredible waste of time.' - Others

## Installation

```shell
$ npm install is-cowboy
$ npm test
```

## Example

```js
var cowboy = require('is-cowboy');

cowboy();	//false
cowboy('');	//false
cowboy('🤠');	//true
```

## API

### isCowboy(value)

    Check whether `value` is a cowboy.

## License

    MIT
