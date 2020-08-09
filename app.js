function listToArray(head) { 
    let array = [];
    for (current = head; current != null; current = current.next) {
      array.push(current.value);
    }
    return array;
  }
  
  console.log(listToArray(arrayToList([10, 20, 30])));
  // → [10, 20, 30]