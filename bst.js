
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
    return {
        rootNode,
        insert,
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
prettyPrint(tree.rootNode);