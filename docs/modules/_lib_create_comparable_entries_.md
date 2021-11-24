[chai-callslike - v1.2.7](../README.md) › ["lib/create-comparable-entries"](_lib_create_comparable_entries_.md)

# Module: "lib/create-comparable-entries"

## Index

### Interfaces

* [ActualExpectedMap](../interfaces/_lib_create_comparable_entries_.actualexpectedmap.md)
* [ValueDescription](../interfaces/_lib_create_comparable_entries_.valuedescription.md)

### Functions

* [createComparableEntries](_lib_create_comparable_entries_.md#createcomparableentries)
* [getAddActual](_lib_create_comparable_entries_.md#getaddactual)
* [getAddExpected](_lib_create_comparable_entries_.md#getaddexpected)

## Functions

###  createComparableEntries

▸ **createComparableEntries**(`actual`: any, `expected`: any): *Map‹any, any›*

**Parameters:**

Name | Type |
------ | ------ |
`actual` | any |
`expected` | any |

**Returns:** *Map‹any, any›*

___

###  getAddActual

▸ **getAddActual**(`entries`: Map‹string, [ActualExpectedMap](../interfaces/_lib_create_comparable_entries_.actualexpectedmap.md)›): *function*

**Parameters:**

Name | Type |
------ | ------ |
`entries` | Map‹string, [ActualExpectedMap](../interfaces/_lib_create_comparable_entries_.actualexpectedmap.md)› |

**Returns:** *function*

▸ (`value`: [], `index`: number, `array`: [][]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [] |
`index` | number |
`array` | [][] |

___

###  getAddExpected

▸ **getAddExpected**(`entries`: Map‹string, [ActualExpectedMap](../interfaces/_lib_create_comparable_entries_.actualexpectedmap.md)›): *function*

**Parameters:**

Name | Type |
------ | ------ |
`entries` | Map‹string, [ActualExpectedMap](../interfaces/_lib_create_comparable_entries_.actualexpectedmap.md)› |

**Returns:** *function*

▸ (`value`: [], `index`: number, `array`: [][]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [] |
`index` | number |
`array` | [][] |
