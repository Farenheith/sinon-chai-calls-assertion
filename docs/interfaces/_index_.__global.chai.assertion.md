[chai-callslike - v1.2.2](../README.md) › ["index"](../modules/_index_.md) › [__global](../modules/_index_.__global.md) › [Chai](../modules/_index_.__global.chai.md) › [Assertion](_index_.__global.chai.assertion.md)

# Interface: Assertion

## Hierarchy

* **Assertion**

## Index

### Methods

* [callsLike](_index_.__global.chai.assertion.md#callslike)
* [callsLikeRef](_index_.__global.chai.assertion.md#callslikeref)
* [like](_index_.__global.chai.assertion.md#like)
* [someCallsLike](_index_.__global.chai.assertion.md#somecallslike)
* [someCallsLikeRef](_index_.__global.chai.assertion.md#somecallslikeref)

## Methods

###  callsLike

▸ **callsLike**(...`parameters`: unknown[][]): *[Assertion](_index_.__global.chai.assertion.md)*

Check if a certain stub was called with the combination of types informed, in the exact order and same call count

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...parameters` | unknown[][] | Combination of parameters. Each array is a different call  |

**Returns:** *[Assertion](_index_.__global.chai.assertion.md)*

___

###  callsLikeRef

▸ **callsLikeRef**(...`parameters`: unknown[][]): *[Assertion](_index_.__global.chai.assertion.md)*

Check if a certain stub was called with the combination of types informed with reference match, in the exact order and same call count

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...parameters` | unknown[][] | Combination of parameters. Each array is a different call  |

**Returns:** *[Assertion](_index_.__global.chai.assertion.md)*

___

###  like

▸ **like**(`expectedValue`: unknown): *[Assertion](_index_.__global.chai.assertion.md)*

Check if a certain value is deep equal to another

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`expectedValue` | unknown | The expected value  |

**Returns:** *[Assertion](_index_.__global.chai.assertion.md)*

___

###  someCallsLike

▸ **someCallsLike**(...`parameters`: unknown[][]): *[Assertion](_index_.__global.chai.assertion.md)*

Check if a certain stub was called with the combination of types informed, no matter the order

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...parameters` | unknown[][] | Combination of parameters. Each array is a different call  |

**Returns:** *[Assertion](_index_.__global.chai.assertion.md)*

___

###  someCallsLikeRef

▸ **someCallsLikeRef**(...`parameters`: unknown[][]): *[Assertion](_index_.__global.chai.assertion.md)*

Check if a certain stub was called with the combination of types informed with reference match, no matter the order

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...parameters` | unknown[][] | Combination of parameters. Each array is a different call  |

**Returns:** *[Assertion](_index_.__global.chai.assertion.md)*
