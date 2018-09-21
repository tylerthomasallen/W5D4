function range(start, end){
  // debugger;
  if (start === end) {
    let arr = [];
    return arr;
  }
  if (start > end){
    return range(start-1, end).push(start);
  } else {
     return range(start+1, end).push(start);
    }

}

let sumRec = arr => {
 if (arr.length === 1){
   return arr[0];
 }
   let sum = arr[0] + sumRec(arr.slice(1));
   return sum;
};

function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }

  let result = base * exponent(base, exp - 1);
  return result;
}

function fibonacci(n) {
  if (n < 3) {
    return [0, 1].slice(0, n);
  }
    let result = fibonacci(n-1);
    result.push(result[result.length-1] + result[result.length-2]);
    return result;
}

function deepDup(arr){
  let result = [];
   arr.forEach(function(el) {
     // debugger;
    if (Array.isArray(el)) {
      result.push(deepDup(el));
    } else {
      result.push(el);
    }
  });

  return result;
}

function  bsearch(arr, targe) { //apparantly this function takes a shield as an argument
  if (arr.length === 0) {
    return -1;
  }
  let mid_index = arr.length/2;
  let mid = arr[mid_index];

  if (mid === targe){
    return mid_index;
  } else  if (mid > targe) {
    return bsearch(arr.slice(0, mid_index), targe);
  } else {
   let result = bsearch(arr.slice(mid_index+1), targe);
   if (result == -1) {
     return -1;
   }else {
     return result + (mid_index + 1);
   }
  }


}

function mergesort(arr){

merge = function(left, right)

}

function subsets(arr) {

}
