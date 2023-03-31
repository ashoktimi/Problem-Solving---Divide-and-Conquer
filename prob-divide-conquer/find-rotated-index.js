function findRotatedIndex(array, num) {
  var pivot = findPivot(array)
  if (pivot > 0 && num >= array[0] && num <= array[pivot - 1]) {
    return binarySearch(array, num, 0, pivot - 1);
  } else {
    return binarySearch(array, num, pivot, array.length - 1);
  }
}

function binarySearch(array, num, start, end) {
  if (array.length === 0) return -1;
  if (num < array[start] || num > array[end]) return -1;

  while (start <= end) {
    var mid = Math.floor((start + end) / 2);
    if (array[mid] === num) {
      return mid;
    } else if (num < array[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

function findPivot(arr) {
  if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
  var start = 0
  var end = arr.length - 1;
  while (start <= end) {
    var mid = Math.floor((start + end) / 2);
    if (arr[mid] > arr[mid + 1]) return mid + 1
    else if (arr[start] <= arr[mid]) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
}




// alternate solution

function findRotatedIndex(arr, num, left=0, right=arr.length-1){
  if(right >= left){
    let mid = Math.floor((left + right)/2);
    let midValue = arr[mid];
    if(num == midValue){
      return mid;
    }else if(arr[left] <= midValue){
      if(arr[left] <= num && num < midValue){
        return findRotatedIndex(arr, num, left, mid-1);
      }else{
        return findRotatedIndex(arr, num, mid+1, right);
      }
      
    }else{
      if(num > midValue && num <= arr[right]){
        return findRotatedIndex(arr, num, mid+1, right);
      }else{
        return findRotatedIndex(arr, num, left, mid-1);
      }      
    }    
  }
  return -1;
}

module.exports = findRotatedIndex
