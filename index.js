fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
      for(const key in collection){
         iteratee(collection[key], key)
      }
      return collection
      // collection.forEach(iteratee)
      //   iteratee(element, index, collection)
    },

//     fi.each([1, 2, 3], alert);
// => alerts each number in turn and returns the original collection
// fi.each({one: 1, two: 2, three: 3}, alert);
// => alerts each number value in turn and returns the original collection

    map: function(collection, func) {
      // for(const key in collection){
      //  func(collection[key], key, collection)
      // }
      let newCollection = []

      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          newCollection.push(func(collection[i]))
          // collection = [1, 2, 3, 4]
          // collection[0] => 1
          // func(1) => 3
        }
      } else {
        for (let key in collection) {
          newCollection.push(func(collection[key]))
        }
      }
      return newCollection
    },

    reduce: function(collection, func, acc) {
      // if Array.isArray(collection) {
      // collection = [1, 2, 3]
      // val = 1,
      // acc = 0
      // val * 3 = 3 + acc aka 0 = 3
        for (let i = 0; i < collection.length; i++) {
          acc = func(acc, collection[i])
        }
        return acc
      // }
      // if Array.isArray(collection) {
        // for (let i = 0; i < collection.length - 1; i++) {
          // acc = func(acc, collection[i], collection)
        // }
      // }
    },

    // fi.reduce(collection, iteratee, acc)

    find: function(collection, whatWeWantToFind) {

        for (let i = 0; i < collection.length; i++) {
          if (whatWeWantToFind(collection[i])) {
            return collection[i]
          }

        }

    },

    // functions: function() {
    //
    // },
    //
    // functions: function() {
    //
    // },
    //
    // functions: function() {
    //
    // },
    //
    // functions: function() {
    //
    // },


  }
})()

fi.libraryMethod()
