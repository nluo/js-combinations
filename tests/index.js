var test = require('tape'),
	combinations = require('../');

test('default test', function(t){
    t.plan(2);
    var mockData = ['SYD', 'BNE', 'MEL', 'ADL'];

    var expectedOriginalObject = [
	    ['ADL', 'SYD'],
    	['ADL', 'BNE'],
    	['ADL', 'MEL'],
    	['ADL', 'ADL'],
    	['MEL', 'SYD'],
    	['MEL', 'BNE'],
    	['MEL', 'MEL'],
    	['MEL', 'ADL'],
	  	['BNE', 'SYD'],
    	['BNE', 'BNE'],
    	['BNE', 'MEL'],
    	['BNE', 'ADL'],
    	['SYD', 'SYD'],
    	['SYD', 'BNE'],
    	['SYD', 'MEL'],
    	['SYD', 'ADL']
    ];


    var result = combinations(mockData, true);

    t.deepEqual(result, expectedOriginalObject, 'Result is as expected');
    t.deepEqual(result.length, 16, 'Result set length is expected');
});

test('test without repeatition', function(t){
    t.plan(2);
    var mockData = ['SYD', 'BNE', 'MEL', 'ADL'];

    var expectedOriginalObject = [
	    ['ADL', 'SYD'],
    	['ADL', 'BNE'],
    	['ADL', 'MEL'],
    	['MEL', 'SYD'],
    	['MEL', 'BNE'],
    	['MEL', 'ADL'],
	  	['BNE', 'SYD'],
    	['BNE', 'MEL'],
    	['BNE', 'ADL'],
    	['SYD', 'BNE'],
    	['SYD', 'MEL'],
    	['SYD', 'ADL']
    ];


    var result = combinations(mockData, false);

    t.deepEqual(result, expectedOriginalObject, 'Result is as expected');
    t.deepEqual(result.length, 12, 'Result set length is expected');
});