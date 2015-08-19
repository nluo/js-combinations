var clone = require('clone');


function combination(repetition, data) {
    var combinations = [];
    var temp = clone(data);

    while (temp.length > 0) {
        var from = temp.pop();

        for (var i=0; i<data.length; i++) {
            var to = data[i];

            if (!repetition && from === to) {
                continue;
            } else {
                combinations.push([from, to]);
            }
        }
    }
    return combinations;
}



module.exports = function(dataSet, repeat) {

    if (!repeat) {
        repeat = false;
    }

    if (!Array.isArray(dataSet)){
        return dataSet;
    };


    if (dataSet.length == 2 ) {
        return dataSet;
    }

    return combination(repeat, dataSet);
};
