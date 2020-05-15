export const Lists = () => {
    //Node class
    class Node {
        //constructor
        constructor(el) {
            this.el = el;
            this.next = null;
        }
    }

    //Linked List Class
    class LinkedList {
        constructor() {
            this.head = null;
            this.size = 0;
        }
    }
}

const el = [1, 2, 3, 3, 3, 3, 4, 5, 9, 0, 1, 8, 6, 8, 4, 6, 4, 8, 6]

const findSumOfElements = (n, el) => {
    let arr = [...el];
    const tempA = [];
    const trash = [];

    while (arr.length > 0) {

        if (arr.indexOf(n - arr[0]) > -1) {
            tempA.push([arr[0], n - arr[0]]);
            arr.splice(arr.indexOf(n - arr[0]), 1);
            arr.shift();
        } else {
            trash.push(arr.shift());
        }
    }
    return {
        collection: tempA,
        trash: trash
    }
}

console.log(findSumOfElements(9, el));