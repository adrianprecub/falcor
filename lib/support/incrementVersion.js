var version = 1;
module.exports = function incrementVersion() {
    // console.log(new Error().stack);
    return version++;
};
module.exports.getCurrentVersion = function getCurrentVersion() {
    return version;
};
