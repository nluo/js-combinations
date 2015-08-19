var clone = require('clone');


function combination(repeat, data) {
    var combinations = [];
    var temp = clone(data);
    var index = 0;

    while (temp.length > 1) {
        var from = temp.pop();

        for (var i=0; i<data.length; i++) {
            if (repeat === false && i== length) {
                // we don't do anything here
                continue;
            } else {
                var to = data[i];
                combinations.push([element, to]);
            }
        }
    }
    return combinations;
}



module.exports = function(dataSet, repeat) {

    if (!repeat) {
        repeat = false;
    }

    if (is_array(dataSet){
        return dataSet;
    });

    if (typeof callback !== 'function') {
        return dataSet;
    }

    if (dataSet.length == 2 ) {
        return dataSet;
    }

    return combination(repeat, dataSet);
};
