function createLinkedList() {
    function createNode(value) {
        return {
            value: value,
            next: null,
        }
    }
    let head = null;
    let tail = null
    function append(value) {
        const newNode = createNode(value);
        if (head === null) {
            head = newNode;
            tail = newNode;
            return;
        }
        tail.next = newNode;
        tail = newNode;
    }

    function length() {
        let count = 0;
        current = head;
        while (current !== null) {
            count += 1
            current = current.next;
        }
        return count;
    }
    function prepend(value) {
        const newNode = createNode(value)
        if (head === null) {
            head = newNode;
            tail = newNode;
        } else {
            newNode.next = head;
            head = newNode;
        }
    }
    function gethead() {
        return head;
    }
    function gettail() {
        return tail;
    }
    function at(index) {
        let current = head
        let i = 0;
        if (current === null)
            return null;
        while (i !== index) {
            current = current.next;
            i++;
            if (current === null)
                return null;
        }
        return current;
    }
    function pop() {
        if (head == null)
            return null;
        if (head.next == null) {
            const temp = head;
            head = null;
            tail = null;
            return temp;
        }

        let current = head;
        while (current.next.next !== null) {
            current = current.next;
        }
        const temp = current.next
        tail = current;
        tail.next = null;
        return temp
    }
    function contains(value) {
        let current = head;
        while (current !== null) {
            if (current.value === value) {
                return "yes"
            }
            current = current.next;
        }
        return "no"
    }
    function find(value) {
        let current = head;
        let index = 0;
        while (current !== null) {
            if (current.value === value) {
                return index
            }
            current = current.next;
            index++
        }
        return -1;
    }
    function printList() {
        current = head;
        let output = '';
        while (current !== null) {
            output += `(${current.value})->`;
            current = current.next;
        }
        output += 'null';
        console.log(output);
    }
    return {
        append,
        prepend,
        length,
        gethead,
        gettail,
        at,
        pop,
        contains,
        find,
        printList
    }
}
const list = createLinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.printList();
list.pop();
list.printList();