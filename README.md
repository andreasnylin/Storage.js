# Storage.js
A simple JSON wrapper for localStorage

## Examples

```javascript
// Create or get an existing store
var store1 = Storage('store1');

// Set a value
store1.set('myvalue', 123);

// Read value
console.log('The value of "myvalue" is: ', store1.get('myvalue') );

// Set a array value
store1.set('myarray', [1,2,3]);

// Read value
console.log('The value of "myarray" is: ', store1.get('myarray') );
// outputs => The value of "myarray" is:  [1,2,3]

// Set an object value
store1.set('myobject', { a: 1, b: 2, c: 3});

// Read value
console.log('The value of "myobject" is: ', store1.get('myobject') );
// outputs => The value of "myobject" is:  { a: 1, b: 2, c: 3}
```
