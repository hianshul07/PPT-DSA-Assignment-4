function findCommonElements(arr1, arr2, arr3) {
  let ptr1 = 0;
  let ptr2 = 0;
  let ptr3 = 0;
  const result = [];

  while (ptr1 < arr1.length && ptr2 < arr2.length && ptr3 < arr3.length) {
    if (arr1[ptr1] === arr2[ptr2] && arr2[ptr2] === arr3[ptr3]) {
      result.push(arr1[ptr1]);
      ptr1++;
      ptr2++;
      ptr3++;
    } else if (arr1[ptr1] < arr2[ptr2] || arr1[ptr1] < arr3[ptr3]) {
      ptr1++;
    } else if (arr2[ptr2] < arr1[ptr1] || arr2[ptr2] < arr3[ptr3]) {
      ptr2++;
    } else {
      ptr3++;
    }
  }

  return result;
}