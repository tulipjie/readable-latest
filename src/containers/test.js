/**
 * Created by sxy on 2018/3/17.
 */
var arr= [
    { 'sortNo': 2},
    { 'sortNo': 1},
    { 'sortNo': 5},
    { 'sortNo': 6},
    { 'sortNo': 7},
    { 'sortNo': 3},
    { 'sortNo': 9},
    { 'sortNo': 4},
    { 'sortNo': 0}
];
arr.sort(function(a, b){
    return a.sortNo - b.sortNo;
});
console.log(arr);
