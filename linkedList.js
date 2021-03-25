// let list = [null, 1, 2, 3, 4, 5, null];
// let listReversed = list;
// let header;
// let next;
// let previous;
// list.forEach(node => {
//     header = node+1;
//     next = header+1;
//     previous = header-1;
//     // if(node==null) {console.log('node is null bruh')}
//     if( list[header] !== null ) {
//         console.log(list[previous], list[header], list[next])
//         listReversed[previous] = list[next];
//         listReversed[next] = list[previous];
//     }
// })


class Node {
    constructor(value) {
        this.previous = null;
        this.value = value;
        this.next = null;
    }
}

class singleNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class List {
    constructor(listLength, value) {
        this.head = null;
        this.tail = null;
        this.array = [];

        for (let i = 1; i <= listLength; i++) {
            let node = new Node(value == 1 ? randomInt(0, listLength) : Object.prototype.toString.call(value) === '[object Array]' ? value[i-1] : i);
            if(this.tail === null) {
                this.head = node;
                this.tail = node;
            } else {
                this.tail.next = node;
                node.previous = this.tail;
                this.tail = node;
            }
            this.array.push(node);
        }

        return this.printList()
    }
    // appendWithoutTail(item) {
    //     let node = new Node(item);
    //     let current = this.head;
    //     while (current.next !== null) {
    //         current = current.next;
    //     }
    //     current.next = node;
    //     return this.display();
    // }



    // appendWithTail(item) {
    //     let node = new Node(item);
    //     if(this.tail === null) {
    //         this.head = node;
    //         this.tail = node;
    //     } else {
    //         this.tail.next = node;
    //         node.previous = this.tail;
    //         this.tail = node;
    //     }
    //     this.array.push(node);
    // }

    // appendBetter() {
    //     for (i = 1; i <= listLength; i++) {
    //         let node = new Node(value || i);
    //         if(this.tail === null) {
    //             this.head = node;
    //             this.tail = node;
    //         } else {
    //             this.tail.next = node;
    //             node.previous = this.tail;
    //             this.tail = node;
    //         }
    //         this.array.push(node);
    //     }
    // }

    reverseList() {
        let current = this.head;
        while (current) {
            let temp = current.previous;
            current.previous = current.next;
            current.next = temp;
            current = current.previous;
        }
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
    }

    printList() {
        let current = this.head;
        while (current !== null) {
            console.log(current);
            current = current.next;
        }
    }

    logList() {
        // let current = this.head;
        // let count = 0;
        // let erray = this.array
        this.array.forEach(node => {
            console.log(`---------------------`);
            // console.log(node)
            node.previous ? console.log(`Previous: ${node.previous.value}`) : null
            console.log(`%cValue: ${node.value}`, 'font-weight:bold');
            node.next ? console.log(`Next: ${node.next.value}`) : null
        })
        console.log(`Length: ${this.array.length}`)
        // while (current !== null) {
        //     console.log(`---------------------`);
        //     current.previous ? console.log(`Previous: ${current.previous.value}`) : console.log('Previous: null')
        //     console.log(`Value: ${current.value}`);
        //     current.next ? console.log(`Next: ${current.next.value}`) : console.log('Next: null')
        //     current = current.next;
        //     count++;
        // }
        // console.log(`---------------------`);
        // console.log(`Length: ${count}`)
    }

    
    searchList(query) {
        let current = this.head;
        while(current !== null) {
            if(current.value == query) {
                // console.log(current)
                return current
            }
            current = current.next;
        }
    }

    sortList() {
        this.array.sort((a, b) => {
            return a.value - b.value
        })
    }

}

class singleList {
    constructor(listLength, value) {
        this.head = null;
        this.tail = null;
        this.array = [];

        for (let i = 1; i <= listLength; i++) {
            let node = new singleNode(value == 1 ? randomInt(0, listLength) : Object.prototype.toString.call(value) === '[object Array]' ? value[i-1] : i);
            if(this.tail === null) {
                this.head = node;
                this.tail = node;
            } else {
                this.tail.next = node;
                this.tail = node;
            }
            this.array.push(node);
        }

        return this.printList()
    }
    
    reverseList() {
        let previous = null;
        let current = this.head;
        while (current) {
            let temp = current.next;
            current.next = previous;
            previous = current;
            current = temp;
        }
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        this.reverseArray();
    }

    reverseArray() {
        this.array = []
        let current = this.head;
        while(current) {
            this.array.push(current);
            current = current.next;
        }
    }

    printList() {
        let current = this.head;
        while (current !== null) {
            console.log(current);
            current = current.next;
        }
    }

    logList() {
        this.array.forEach(node => {
            console.log(`---------------------`);
            // console.log(node)
            console.log(`%cValue: ${node.value}`, 'font-weight:bold');
            node.next ? console.log(`Next: ${node.next.value}`) : null
        })
        console.log(`Length: ${this.array.length}`)
    }

    
    searchList(query) {
        let current = this.head;
        while(current !== null) {
            if(current.value == query) {
                // console.log(current)
                return current
            }
            current = current.next;
        }
    }

    sortList() {
        this.array.sort((a, b) => {
            return a.value - b.value
        })
    }

}

// let sortedList = [];
// let listArray = [];
// let list;

// function createList(length) {
//     list = new List(); // Created
    
//     for (i = 1; i <= length; i++) {
//         list.appendWithTail(i);
//     } // Added values 1, 2, 3, 4, 5
    
//     return 201
// }

// function append(list, length) {
//     for (i = 1; i <= length; i++) {
//         list.appendWithTail(randomInt(0, length));
//     }
// }


// function sortList() {
//     sortedList = listArray.slice();
//     sortedList.sort((a, b) => {
//         return b.value - a.value
//     })
//     return 200
// }

// function searchList(query) {
//     listArray.forEach(obj => {
//         if(obj.value == query) {console.log(obj)}
//     })
// }


function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// let list = new List(); // Created

// for (i = 1; i <= 5; i++) {
//     list.appendWithTail(i);
// } // Added values 1, 2, 3, 4, 5



// list.printList();
// console.log('-------------------')
// list.searchList(2);

// console.log(arr)

//  console.log(list)
