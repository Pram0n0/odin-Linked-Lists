const { link } = require("fs");

class Node {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    append(value) {
        const newNode = new Node (value)
        if (!this.head) {
            this.head = newNode;
        } else {
            let temp = this.head;

            while (temp.next) {
                temp = temp.next
            }

            temp.next = newNode
        }
        return newNode
    }

    prepend(value) {
        const newNode = new Node (value)
        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        return newNode
    }

    getSize() {
        let count = 0; 
        let temp = this.head;
        while (temp) {
            count++;
            temp = temp.next
        }
        return count;
    }

    
    getHead() {
        return this.head
    }

    getTail() {
        let temp = this.head
    
        while(temp.next) {
            temp = temp.next
        }
    
        return temp
    }

    at(index) {
        let temp = this.head
        
        for (let i = 0; i < index; i++) {
            temp = temp.next
        } 
    
        return temp
    }

    pop() {
        if (!this.head) {
            return
        } else {
            let current
            let temp = this.head
            while (temp.next) {
                current = temp
                temp = temp.next
            }
            current.next = null
        }
    }

    contains(value) {
        const size = this.getSize();

        for (let i = 0; i < size; i++) {
            if (this.at(i).data === value) {
                return true;
            }
        }

        return false;
    }

    find(value) {
        if (this.contains) {
            const size = this.getSize();

            for (let i = 0; i < size; i++) {
                if (this.at(i).data === value) {
                    return i;
                }
            }
        } else if (!this.contains) {
            return null
        }
    }

    toString() {
        if (this.head) {
            let string = "head ->";
            const size = this.getSize();
    
            for (let i = 0; i < size; i++) {
                let value = this.at(i).data;
                string += ` (${value}) ->`;
            }
    
            return string + " tail";
        } else if (!this.head) {
            return "Empty";
        }
    }
}

const node1 = new Node(10);
const node2 = new Node(20);
const node3 = new Node(30)

node1.next = node2;
node2.next = node3

const linkedList = new LinkedList(node1);

console.log(linkedList)

// insertAt(value, index) that inserts a new node with the provided value at the given index.
// removeAt(index) that removes the node at the given index.








