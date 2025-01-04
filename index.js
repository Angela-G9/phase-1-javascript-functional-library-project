// Custom JavaScript functional library implementation

const myEach = function(collection, callback) {
    const items = collection instanceof Array ? collection : Object.values(collection);
    for (let i = 0; i < items.length; i++) {
      callback(items[i]);
    }
    return collection;
  };
  
  const myMap = function(collection, callback) {
    const items = collection instanceof Array ? collection : Object.values(collection);
    const result = [];
    for (let i = 0; i < items.length; i++) {
      result.push(callback(items[i]));
    }
    return result;
  };
  
  const myReduce = function(collection, callback, acc) {
    const items = collection instanceof Array ? collection : Object.values(collection);
    let startIdx = 0;
    if (acc === undefined) {
      acc = items[0];
      startIdx = 1;
    }
    for (let i = startIdx; i < items.length; i++) {
      acc = callback(acc, items[i], items);
    }
    return acc;
  };
  
  const myFind = function(collection, predicate) {
    const items = collection instanceof Array ? collection : Object.values(collection);
    for (let i = 0; i < items.length; i++) {
      if (predicate(items[i])) return items[i];
    }
    return undefined;
  };
  
  const myFilter = function(collection, predicate) {
    const items = collection instanceof Array ? collection : Object.values(collection);
    const result = [];
    for (let i = 0; i < items.length; i++) {
      if (predicate(items[i])) result.push(items[i]);
    }
    return result;
  };
  
  const mySize = function(collection) {
    return collection instanceof Array ? collection.length : Object.keys(collection).length;
  };
  
  const myFirst = function(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
  };
  
  const myLast = function(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
  };
  
  const myKeys = function(object) {
    return Object.keys(object);
  };
  
  const myValues = function(object) {
    return Object.values(object);
  };
  
  module.exports = {
    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myFirst,
    myLast,
    myKeys,
    myValues
  };
  