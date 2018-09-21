Array.prototype.uniq = function() {
  let arr = [];
  this.forEach(function(el){
    if (!arr.includes(el)) {
      arr.push(el);
    }
  });
  return arr;
};

Array.prototype.twoSum = function(){
  let pairs = [];
  for (let i = 0; i < this.length; i++) {
    for (let c = i+1; c < this.length; c++){
      if (this[i] + this[c] === 0){
        pairs.push([i, c]);
      }
    }
  }
  return pairs;
};

Array.prototype.transpose = function(){
  let transposed = [];
  this.forEach(function(el) {
    transposed.push([]);
  });
  for (let i = 0; i < this.length; i++) {

    for (let j = 0; j < transposed.length; j++) {
      transposed[i].push(this[j][i]);
    }

  }

  return transposed;
};
