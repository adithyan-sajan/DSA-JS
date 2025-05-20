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
    function head() {
        return head;
    }
    function tail() {
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
    return {
        append,
        prepend,
        length,
        head,
        tail,
        at,
    }
}