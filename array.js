/**
 * Created by Yarkin UCERLER on 1.05.2017.
 */

var ArrayProject = function () {

    function arrayToString() {
        var cars = ['mercedes', 'bmw', 'volvo', 'audi'];
        document.querySelector('#tutorial-array-1').innerHTML = cars.toString();
    }

    function arrayJoin() {
        var cars = ['mercedes', 'bmw', 'volvo', 'audi'];
        document.querySelector('#tutorial-array-2').innerHTML = cars.join('-');
        document.querySelector('#tutorial-array-3').innerHTML = cars.join('*');
    }

    function arrayPop() {
        var cars = ['mercedes', 'bmw', 'volvo', 'audi'];
        document.querySelector('#tutorial-array-4').innerHTML = cars.pop();
        document.querySelector('#tutorial-array-5').innerHTML = cars.toString();
    }

    function arrayPush() {
        var cars = ['mercedes', 'bmw', 'volvo', 'audi'];
        document.querySelector('#tutorial-array-6').innerHTML = 'audi';
        cars.push('fiat');
        document.querySelector('#tutorial-array-7').innerHTML = cars.toString();
    }

    function arrayShift() {
        var cars = ['mercedes', 'bmw', 'volvo', 'audi'];
        document.querySelector('#tutorial-array-8').innerHTML = cars.shift();
        document.querySelector('#tutorial-array-9').innerHTML = cars.toString();
    }

    function arrayUnShift() {
        var cars = ['mercedes', 'bmw', 'volvo', 'audi'];

        document.querySelector('#tutorial-array-11').innerHTML = cars.unshift('ford');
        document.querySelector('#tutorial-array-12').innerHTML = cars.toString();
    }

    function arraySplice() {
        var cars = ['mercedes', 'bmw', 'volvo', 'audi'];
        document.querySelector('#tutorial-array-13').innerHTML = 'ford';
        cars.splice(2,0,'ford');
        document.querySelector('#tutorial-array-14').innerHTML = cars.toString();
        document.querySelector('#tutorial-array-15').innerHTML = ['mercedes', 'bmw'].toString();
        cars.splice(0,2);
        document.querySelector('#tutorial-array-16').innerHTML = cars.toString();
    }

    function arrayMerge() {
        var cars = ['mercedes', 'bmw', 'volvo', 'audi'];
        var cars2 = ['ford', 'citroen', 'fiat'];
        document.querySelector('#tutorial-array-17').innerHTML = 'cars array: ' + cars.toString() + ' && cars2 array: ' + cars2.toString();
        document.querySelector('#tutorial-array-18').innerHTML = cars.concat(cars2);
    }

    function arraySlice() {
        var cars = ['mercedes', 'bmw', 'volvo', 'audi'];
        var cars2 = cars.slice(2);
        document.querySelector('#tutorial-array-19').innerHTML = cars2.toString();
        document.querySelector('#tutorial-array-20').innerHTML = cars.toString();
    }

    return {

        init: function () {
            arrayPop();
            arrayJoin();
            arrayPush();
            arrayMerge();
            arrayShift();
            arraySlice();
            arraySplice();
            arrayUnShift();
            arrayToString();
        }

    }

}();
