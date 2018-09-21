Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    console.log(callback(this[i]));
  }
};

Array.prototype.myMap = function(callback) {
  let result = [];
  for (let i = 0; i < this.length; i++){
    result.push(callback(this[i]));
  }
  return result;
};

Array.prototype.myReduce = function(callback, initialValue) {
  let result = initialValue;
  if (initialValue) {
    this.myEach( function(el)  {
      result = callback(result, el);
    });
  } else {
    result = this[0];
    this.slice(1).myEach( function(el)  {
      result = callback(result, el);
    });
  }
  return result;
};
