var clone = require('clone');

module.exports = function(dataSet, repetition) {
    if (!repetition) {
        repetition = false;
    }

    if (!Array.isArray(dataSet)){
        return dataSet;
    };

    if (dataSet.length == 2 ) {
        return dataSet;
    }

    var combinations = [];
    var temp = clone(dataSet);

    while (temp.length > 0) {
        var from = temp.pop();

        for (var i=0; i<dataSet.length; i++) {
            var to = dataSet[i];

            if (!repetition && from === to) {
                continue;
            } else {
                combinations.push([from, to]);
            }
        }
    }
    return combinations;
};
