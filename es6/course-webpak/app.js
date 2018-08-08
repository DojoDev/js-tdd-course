
import * as R from './node_modules/ramda';

const arr1 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6];
const arr2 = [5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 1];

const arr3 = R.union(arr1, arr2);


console.log(arr3);
