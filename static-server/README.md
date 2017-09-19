Research Notes
==============

The complete code for this research can be found [here](https://github.com/ECDID/Research/edit/master/static-server).

The content being served is from the [HTML 5 Boilerplate project](https://html5boilerplate.com/).

This is a very simple node HTTP server that can serve files from a static directory.  It uses several modern javascript techniques including:

 * Promises
 * async/await
 * Template literals

## Promises

Promises are the future of asynchronous code in Javascript.  In node.js, the API provided uses callbacks to implement asynchronous behavior, which was the original and preferred method.  Now, node.js provides a function (`util.promisify`) that can be used to turn these "nodeback" functions into a more modernized version that uses promises.

## async/await

A new feature in Javascript, async/await make using promises a breeze.  Instead of using `.then`, `.catch`, and `.finally` in order to make use of promises, `await` allows for simple and easy code that looks synchronous and reads naturally.  Here's the comparison:

```javascript
fsExists(path).then((exists) => {
    // now we're inside a callback...
});

const exists = await fsExists(path);
// no callback necessary
```

Truly, async/await are the future of Javascript

## Template literals

Template literals allow for fancy string concatenation tricks, a step up from the previous method of simply using the `+` operator.
