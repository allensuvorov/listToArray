function arrayToList(array) { 
    if (array.length == 0) { return null; }
    let list = {
        value: array[0],
        next: null
    };
    let previous = list;
    for(let i = 1; i < array.length; i++) { 
        previous.next = { 
            value: array[i],
            next: null
        };
        previous = previous.next;
    };
    return list;
};
  
function listToArray(list) { 
    let array = [];
    // this is next level magic right here
    for (current = list; current != null; current = current.next) {
        array.push(current.value);
    };
    return array;
};

console.log(arrayToList([10, 20, 30]));
// → {value: 10, rest: {value: 20, rest: null}}

console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]