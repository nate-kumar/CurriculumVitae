let utils = {};

utils.checksum = (s) => {
    var hash = 0,
    strlen = s.length, i, c;
    if ( strlen === 0 ) {
        return hash;
    }
    for ( i = 0; i < strlen; i++ ) {
        c = s.charCodeAt( i );
        hash = ((hash << 5) - hash) + c;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
};

const a = "test"
const b = utils.checksum(a)

console.log(b)

module.exports = {
    utils
}

// console.log(module)