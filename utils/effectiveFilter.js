const effectiveFilter = function(response) {
    switch(response) {
        case  'Effective':
            return 1;
        case 'Super effective':
            return 2;
        case 'Not very effective':
            return 0.5;
        case 'Not effective':
            return 0;
    }
}

module.exports = {
    effectiveFilter
};