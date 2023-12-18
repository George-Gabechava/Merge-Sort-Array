// Merge Sort

let exampleArray = [8, 5, 4, 2, 3, 7, 6];

function mergeSort(arr) {
    let solution = [];
    
    if (arr.length == 1) {
        return arr;
    }

    if (arr.length == 2) {
        if (arr[0] < arr[1]) {
            return arr;
        }
        else {
            let anArray = [];
            anArray[0] = arr[1];
            anArray[1] = arr[0];
            return anArray;
        }
    }


    let left = mergeSort(arr.slice(0, mid(arr)));
    let right = mergeSort(arr.slice(mid(arr)));

    let i = 0;
    let j = 0;
    let k = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            solution[k] = left[i];
            i++;
            k++;
        }
        else if (left[i] > right[j]) {
            solution[k] = right[j];
            j++;
            k++;

        }
    }

    for ( ; i< left.length; i++) {
        solution[k] = left[i];
        k++
    }
    for ( ; j< right.length; j++) {
        solution[k] = right[j];
        k++
    }

    return solution;  
}

function mid(arr2) {
    const midpoint = Math.round(arr2.length/2);
    return midpoint;
}

console.log(mergeSort(exampleArray));