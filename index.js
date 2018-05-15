fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    // checkObjectType: function(collection){
    //   if (!!collection[0] && typeof collection === "object") {}
    //   else if (!collection[0] && typeof collection === "object") {}
    // },

    each: function(collection, iteratee) {
      if (!!collection[0] && typeof collection === "object") {
        for (let i = 0; i < collection.length; i++) {
          iteratee(collection[i], i, collection)
        }
      } else if (!collection[0] && typeof collection === "object") {
        for (const property in collection) {
          iteratee(collection[property], property, collection)
        }
      }
      return collection
    },

    map: function(collection, iteratee) {
      const newCollection = []
      if (!!collection[0] && typeof collection === "object") {
        for (let i = 0; i < collection.length; i++) {
          newCollection.push(iteratee(collection[i], i, collection))
        }
      } else if (!collection[0] && typeof collection === "object") {
        for (const property in collection) {
          newCollection.push(iteratee(collection[property], property, collection))
        }
      }
      return newCollection
    },

    reduce: function(collection, iteratee, acc) {
      acc = acc || 0
      for (let i = 0; i < collection.length; i++) {
        acc = iteratee(acc, collection[i], collection)
      }
      return acc
    },
    
    find: function(collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i]
        }
      }
    },

    filter: function(collection, predicate) {
      const filteredCollection = []
      for (const element of collection) {
        if (predicate(element)) {
          filteredCollection.push(element)
        }
      }
      return filteredCollection
    },

    size: function(collection) {
      return collection.length || Object.keys(collection).length
      // let total = 0
      // for (const element in collection) {
      //   total ++
      // }
      // return total
    },

    first: function(array, n){
      n = n || 0
      return (n > 0) ? array.slice(0, n) : array[0] 
      // if (n > 0) {
      //   return array.slice(0, n)
      // } else {
      //   return array[0]
      // }
    },

    last: function(array, n){
      n = n || 0
      return (n > 0) ? array.slice(-n) : array[array.length-1]
      // if (n > 0) {
      //   return array.slice(-n)
      // } else {
      //   return array[array.length-1]
      // }
    },

    compact: function(array){
      const compactedArray = []
      for (const element of array) {
        if (!!element) {
          compactedArray.push(element)
        }
      }
      return compactedArray
    },

    sortBy: function(array, iteratee) {
      // if (typeof array[0] === "string") {
      // } else {
      // }
      // debugger
      // return array.slice().sort( (a, b) => iteratee(a) - iteratee(b))
      return this.map(array, iteratee).sort((a,b) => a - b)
    },

    flatten: function(array, shallow){
      // shallow = shallow || false
      // const flattenedArray = []

      // for (const element of array) {
      //   if (typeof element === "object") {
      //     this.flatten(element)
      //   } else {
      //     flattenedArray.push(element)
      //   }
      // }
      // return flattenedArray
    },

    uniq: function() {

    },

    keys: function() {

    },

    values: function() {

    },

    functions: function() {

    },
    
    giveMeMore: function() {

    }
  }
})()

fi.libraryMethod()
