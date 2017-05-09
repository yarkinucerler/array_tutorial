/**
 * Created by Yarkin UCERLER on 4.05.2017.
 */

var ArrayTutorial = function () {
};

ArrayTutorial.arrayToString = function (arr) {
    if (!Array.isArray(arr)) {
        return false;
    }
    else {
        return arr.toString();
    }
};

ArrayTutorial.arrayJoin = function (arr, seperator) {

    if (!Array.isArray(arr)) {
        return false;
    }

    if (typeof seperator === 'undefined') {
        seperator = '-';
    }

    return arr.join(seperator);
};

ArrayTutorial.arrayPop = function (arr) {
    if (!Array.isArray(arr)) {
        return false;
    }

    return arr.pop();

};

ArrayTutorial.arrayPush = function (arr, arg) {
    if (!Array.isArray(arr) || typeof arg === 'undefined') {
        return false;
    }

    if (typeof arg !== 'undefined') {
        return arr.push();
    }
};

ArrayTutorial.arrayPush = function (arr, arg) {
    if (!Array.isArray(arr) || typeof arg === 'undefined') {
        return false;
    }

    if (typeof arg !== 'undefined') {
        return arr.push(arg);
    }
};

ArrayTutorial.arrayShift = function (arr) {
    if (!Array.isArray(arr)) {
        return false;
    }
    return arr.shift();
};

ArrayTutorial.arrayUnShift = function (arr, arg) {
    if (!Array.isArray(arr) || typeof arg === 'undefined') {
        return false;
    }

    return arr.unshift(arg);
};

ArrayTutorial.arraySplice = function (arr, start, end, arg) {
    if (!Array.isArray(arr) || typeof start !== 'number' || typeof end !== 'number') {
        return false;
    }

    if (typeof arg !== 'undefined') {
        return arr.splice(start, end, arg);
    }
    else {
        return arr.splice(start, end);
    }
};

ArrayTutorial.arrayMerge = function (arr1, arr2) {
    if(!Array.isArray(arr1) && !Array.isArray(arr2)) {
        return false;
    }

    return arr1.concat(arr2);
};

ArrayTutorial.arraySlice = function (arr, start, end) {
    if(!Array.isArray(arr)) {
        return false;
    }

    return arr.slice(start, end) ;
};

ArrayTutorial.arrayFill = function (arr, value, start, end) {
    if (!Array.isArray(arr) || typeof start !== 'number' || typeof end !== 'number') {
        return false;
    }

    if (typeof value !== 'undefined') {
        return arr.fill(value);
    }
    else if(typeof value !== 'undefined' && typeof start !== 'undefined') {
        return arr.fill(value, start);
    }
    else if(typeof value !== 'undefined' && typeof start !== 'undefined' && typeof end !== 'undefined') {
        return arr.fill(value, start, end);
    }
    else {
        return false;
    }
};

ArrayTutorial.arrayFilter = function (arr, callback) {
    if(!Array.isArray(arr) || typeof callback !== 'function' ) {
        return false;
    }

    return arr.filter(callback) ;
};

ArrayTutorial.arrayFind = function (arr, callback) {
    if(!Array.isArray(arr) || typeof callback !== 'function' ) {
        return false;
    }

    return arr.filter(callback) ;
};

ArrayTutorial.arrayFindIndex = function (arr, callback) {
    if(!Array.isArray(arr) || typeof callback !== 'function' ) {
        return false;
    }

    return arr.filter(callback) ;
};

ArrayTutorial.arrayForEach = function (arr) {
    if(!Array.isArray(arr)) {
        return false;
    }

    arr.forEach(function (item) {
       return item;
    });
};

ArrayTutorial.arrayIncludes = function (arr, arg) {
    if(!Array.isArray(arr) || typeof arg === 'undefined') {
        return false;
    }

    return arr.includes(arg);
};

ArrayTutorial.arrayIndexOf = function (arr, arg) {
    if(!Array.isArray(arr) || typeof arg === 'undefined') {
        return false;
    }

    return arr.indexOf(arg);
};

ArrayTutorial.arrayLastIndexOf = function (arr, arg) {
    if(!Array.isArray(arr) || typeof arg === 'undefined') {
        return false;
    }

    return arr.lastIndexOf(arg);
};

ArrayTutorial.arrayKeys = function (arr) {
    if(!Array.isArray(arr)) {
        return false;
    }

    return arr.keys();
};

ArrayTutorial.arrayMap = function (arr, callback) {
    if(!Array.isArray(arr) || typeof callback !== 'function' ) {
        return false;
    }

    return arr.map(callback) ;
};

ArrayTutorial.arrayReverse = function (arr) {
    if(!Array.isArray(arr)) {
        return false;
    }

    return arr.reverse();
};


ArrayTutorial.arraySome = function (arr, callback) {
    if(!Array.isArray(arr) || typeof callback !== 'function' ) {
        return false;
    }

    return arr.some(callback) ;
};

ArrayTutorial.arraySort = function (arr) {
    if(!Array.isArray(arr)) {
        return false;
    }

    return arr.sort() ;
};

