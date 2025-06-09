
function createNode(data) {
    return {
        left: null,
        right: null,
        data: data,
    }
}

function createTree(array) {
    let rootNode = null;
    function buildTree(array, start, end) {
        if (start > end)
            return null;
        const mid = Math.floor((start + end) / 2);
        const root = createNode(array[mid]);
        root.left = buildTree(array, start, mid - 1);
        root.right = buildTree(array, mid + 1, end);
        return root;
    }
    rootNode = buildTree(array, 0, array.length - 1);
    function insert(data) {
        let currentNode = rootNode
        if (rootNode == null) {
            rootNode = createNode(data);
            return
        }
        while (1) {
            if (data > currentNode.data) {
                if (currentNode.right == null) {
                    currentNode.right = createNode(data);
                    break;
                }
                currentNode = currentNode.right
            }
            else {
                if (currentNode.left == null) {
                    currentNode.left = createNode(data);
                    break;
                }
                currentNode = currentNode.left
            }
        }
    }
    function deleteItem(val) {
        currentNode = rootNode;
        var previousNode = null;
        while (currentNode !== null && currentNode.data !== val) {
            previousNode = currentNode
            if (val > currentNode.data) {
                currentNode = currentNode.right;
            }
            else {
                currentNode = currentNode.left;
            }
        }
        if (currentNode === null) {
            console.log("no node");
            return;
        }
        // No child
        if (currentNode.left == null && currentNode.right == null) {
            if (currentNode === rootNode)
                rootNode = null
            else if (currentNode.data > previousNode.data)
                previousNode.right = null;
            else
                previousNode.left = null;
        }
        // left subTree empty
        else if (currentNode.left == null) {
            if (currentNode == rootNode)
                rootNode = currentNode.right;
            else if (previousNode.right == currentNode)
                previousNode.right = currentNode.right;
            else
                previousNode.left = currentNode.right;
        }
        // right subtree empty
        else if (currentNode.right == null) {
            if (currentNode == rootNode)
                rootNode = currentNode.left
            else if (previousNode.right == currentNode)
                previousNode.right = currentNode.left;
            else
                previousNode.left = currentNode.left;
        }
        // two children
        else {
            let inOrderPrev = currentNode;
            let inOrderNode = currentNode.right;
            while (inOrderNode.left !== null) {
                inOrderPrev = inOrderNode;
                inOrderNode = inOrderNode.left;
            }
            currentNode.data = inOrderNode.data;
            if (inOrderPrev == currentNode) {
                inOrderPrev.right = inOrderNode.right;
            }
            else
                inOrderPrev.left = inOrderNode.right;
        }
    }
    return {
        rootNode,
        insert,
        deleteItem,
    }
}

// THIS FUNCTION IS TAKEN FROM THE ODIN PROJECT
const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node === null) {
        return;
    }
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
};

array = [1, 2, 3, 4, 5];
tree = createTree(array);
tree.insert(7)
tree.deleteItem(4)
prettyPrint(tree.rootNode);