function insertionSort(arr) {
  let temp;

  for (let i = 0; i < arr.length; i++) {
    let j = i + 1;
    while (j >= 0 && arr[j] < arr[j - 1]) {
      temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;

      j--;
    }
  }

  console.log(arr);
}

function selectionSort(arr) {
  let smallestInd;

  for (let i = 0; i < arr.length; i++) {
    smallestInd = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallestInd]) {
        smallestInd = j;
      }
    }
    if (smallestInd != i) {
      arr[i] += arr[smallestInd];
      arr[smallestInd] = arr[i] - arr[smallestInd];
      arr[i] -= arr[smallestInd];
    }
  }

  console.log(arr);
}

function bubbleSort(arr) {
  let temp;
  let isSorted = false;

  for (let i = 0; i < arr.length && !isSorted; i++) {
    isSorted = true;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j + 1] < arr[j]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        isSorted = false;
      }
    }
  }

  console.log(arr);
}

function main() {
  insertionSort([5, 9, 2, 3, 7, 8, 1, 4, 6]);
  selectionSort([5, 9, 2, 3, 7, 8, 1, 4, 6]);
  bubbleSort([5, 9, 2, 3, 7, 8, 1, 4, 6]);
}

main();
