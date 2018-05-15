fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
        if (Array.isArray(collection)) {
          for (let i = 0; i < collection.length; i++) {
            iteratee(collection[i])
          }
        }
        else {
        for (key in collection) {
          iteratee(collection[key], key, collection)
        }
      }
      return collection
    },

    map: function(collection, fn) {
      let newCollection = []
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          newCollection.push( fn(collection[i]) )
        }

      } else {
        for (key in collection) {
          newCollection.push( fn(collection[key], key) )
        }
      }
      return newCollection
    },

    reduce: function(collection, fn, acc) {
      for (let i = 0; i < collection.length; i++) {
        acc = fn(acc, collection[i], collection)
      }
      return acc;
    },

    find: function(collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if ( predicate(collection[i]) ) {
          return collection[i]
        }
      }
    },

    filter: function(collection, predicate) {
      let newArray = []
      for (let i = 0; i < collection.length; i++) {
        if ( predicate(collection[i]) ) {
          newArray.push(collection[i])
        }
      }
      return newArray;
    },

    size: function(collection) {
      return Object.values(collection).length
    },

    first: function(collection, n = 1) {
      if (n === 1) {
        return collection[0];
      } else {
        return collection.slice(0, [n]);
      }
    },

    last: function(collection, n = 1) {
      if (n === 1) {
        return collection[collection.length - 1];
      } else {
        return collection.slice([-n]);
      }
    },

    compact: function(collection) {
      let newArray = []
      for (let i = 0; i < collection.length; i++) {
        if (collection[i]) {
          newArray.push(collection[i])
        }
      }
      return newArray
    },
    sortBy: function(collection, fn) {
      let newArray = [...collection].map(fn)

        return newArray.sort(function(a, b) {
          if (typeof a === 	"string") {
           return a.localeCompare(b);
          }
          else {
            return a - b;
          }
        });
      },

      uniq: function(array, isSorted = false, iteratee) {
        let newArray = []
        if (isSorted === false) {
          array.sort();
        }
        for (let i = 0; i < array.length; i++) {
            if array[i] !== newArray[newArray.length - 1] {
              newArray.push(array[i])
            }
        }
      },

      keys: function(collection) {
        return Object.keys(collection)

      },

      values: function(collection) {
        return Object.values(collection)
      },
      functions: function(object) {
        return Object.getOwnPropertyNames(object)
      },



  }
})()

fi.libraryMethod()
