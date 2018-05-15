fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee)  {
      if (typeof collection === "object") {
        for (const key in collection) {
          iteratee(collection[key])
        }
      } else {
        for (const item of collection) {
          iteratee(item)
        }
      }
      return collection
    },

    map: function(collection, iteratee) {
      let i = 0
      const newArr = []
      if (typeof collection === "object") {
        for (const key in collection) {
          newArr.push(iteratee(collection[key], key, collection))
          i++
        }
      } else {
        for (const item of collection) {
          alert(iteratee)
          newArr.push(iteratee(item, i, collection))
          i++
        }
      }
      // alert(newArr)
      return newArr
    },

    reduce: function(collection, iteratee, acc) {
      for (const item of collection) {
        acc = iteratee(acc, item, collection)
      }
      return acc
    },

    find: function(collection, predicate) {
      for (const item of collection){
        if (predicate(item)) {
          return item
        }
      }
    },

    filter: function(collection, predicate){
      newArr = []
      for (const item of collection){
        if (predicate(item)){
          newArr.push(item)
        }
      }
      return newArr
    },

    size: function(collection){
      let i = 0;
      for (const key in collection){
        i++;
      }
      return i;
    },

    first: function(array, n=1){
      let i = 0;
      let newArr = []
      if (n > 1) {
        for (const item of array){
          if (i < n){
            newArr.push(item)
            i++
          }
        }
      }else {
        return array[0];
      }
      return newArr
    },

    last: function(array, n=1){
      // let i = array.length;
      let newArr = []
      let newNum = n
      if (n > 1) {
        for (i = 0; i < newNum; i++) {
          newArr.push(array[array.length - n]);
          n--
        }
      } else {
        return array[array.length -1];
      }
      return newArr;
    },

    compact: function(array){
      let newArr = []
      for (const item of array){
        if (item){
          newArr.push(item);
        }
      }
      return newArr;
    },



    // functions: function() {
    // },


  }
})()

fi.libraryMethod()
