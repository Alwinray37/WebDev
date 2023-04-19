// array.prototype.filter()
    // the filter() method creates a copy of a portion of a given array, filtered down to just the elements from the given array that pass the test impemented by the provided function

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]