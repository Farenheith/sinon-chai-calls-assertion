# chai-callslike

![build](https://github.com/Codibre/chai-callslike/workflows/build/badge.svg)
![test](https://github.com/Codibre/chai-callslike/workflows/test/badge.svg)
![lint](https://github.com/Codibre/chai-callslike/workflows/lint/badge.svg)
[![Test Coverage](https://api.codeclimate.com/v1/badges/65e41e3018643f28168e/test_coverage)](https://codeclimate.com/github/Codibre/boilerplate-base/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/65e41e3018643f28168e/maintainability)](https://codeclimate.com/github/Codibre/boilerplate-base/maintainability)
[![Packages](https://david-dm.org/Codibre/chai-callslike.svg)](https://david-dm.org/Codibre/chai-callslike)
[![npm version](https://badge.fury.io/js/chai-callslike.svg)](https://badge.fury.io/js/chai-callslike)

A simple assertion to validate many aspects of stub calls. It is supposed to use with sinon + chai.

## How it works

### expect(stub).callsLike

Will validate the exactly interaction with the mocked method, which is:

- How many times has been called;
- Which parameters have been passed to it;
- In what order the calls happened.

## How to use?

Just pass the stub in the first parameter and, in the others, arrays with the set of parameters each calls had received.

```
expect(myStub).callsLike(
  ['param1call1', 'param2call1', 'param3call1'],
  ['param1call2', 'param2call2', 'param3call2'],
 );
```

If you want to check if the stub had never been called, pass just the stub:

```
expect(myStub).callsLike();
```

If you expect the stub to have been called with no parameters, pass empty arrays:

```
expect(myStub).callsLike([], [], [])
```

_(in this example, myStub have been called three times with no parameters)_

You can also use sinon matchers to validate the parameters instead of exact values:

```
expect(myStub).callsLike(
  [sinon.match.object, sinon.match.string, sinon.match(/.+foo.+goo/)]
 );
```

The generated log will look pretty as this:

![If if didn't show up, take a look in the resources folder!](./resources/example1.png)

For more info look into the [Full API Reference](./docs/README.md).
