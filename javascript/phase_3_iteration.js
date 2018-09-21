Array.prototype.bubbleSort = function() {
  let sorted = false;

  while (!sorted) {
    sorted = true;
    let idx = 0;

    while(idx < this.length - 1) {
      if (this[idx] > this[idx + 1]) {
        let temp = this[idx];
        this[idx] = this[idx + 1];
        this[idx + 1] = temp;
        sorted = false;
      }

      idx++;
    }

  }
  return this;
};

String.prototype.substrings = function() {
  let subs = [];
  for (i = 0; i < this.length; i++) {
    for(j = i+1; j < this.length; j++){
      subs.push(this.slice(i, j));
    }
  }
  return subs.uniq();
};
