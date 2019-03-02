// 5. 以排序二叉树为基础，实现 TreeMap，使增删改查节点的时间复杂度为O(logn)

interface OTHER {
    a: number,
    b: string
}


function comparetor(newkey: OTHER, key: OTHER) {
    if (newkey.a == key.a) {
        if (newkey.b < key.b) {
            return 0
        } else if (newkey.b > key.b) {
            return 1
        }
        else {
            return 2
        }
    }
    if (newkey.a < key.a) {
        return 0
    }
    else {
        return 1
    }
}


// class Node_C<K, V> {
//     key: K;
//     value: V;
//     left_node: Node_C<K, V> | null;
//     right_node: Node_C<K, V> | null;
//
//     constructor(thekey: K, thekval: V) {
//         this.key = thekey;
//         this.value = thekval;
//         this.left_node = null;
//         this.right_node = null;
//     }
}

type Node_C<K, V> = {
    key: K,
    value: V,
    left?: Node_C<K, V>,
    right?: Node_C<K, V>
}


class BinarySearchTree<K,V> {
    root: Node_C<K, V> | null;
    // compare: any;

    constructor(public readonly compare: (k1: K, k2: K)=>number) {
        this.root = null;
        // this.compare = fn;
    }

    //插入：向二叉树插入一个新的键
    put(key: K, value: V) {

        // const newNode: Node_C<K, V> = new Node_C(key, value);
        const newNode:  Node_C<K, V> = { key, value};

        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node: Node_C<K, V>, newNode: Node_C<K, V>) {
        if (this.compare(newNode.key, node.key) == 0) {
            if (node.left_node === null) {
                node.left_node = newNode;
            } else {
                this.insertNode(node.left_node, newNode);
            }
        } else {
            if (node.right_node === null) {
                node.right_node = newNode;

            } else {
                this.insertNode(node.right_node, newNode);
            }
        }
    }

    // 查询并获取Value
    get(key: K) {
        if (this.searchNode(this.root, key)) {
            console.log(this.searchNode(this.root, key))
        }
        else {
            console.log("该节点不存在")
        }

    }

    //查询节点
    searchNode(node: Node_C<K, V> | null, key: K): any {
        if (node === null) {

            return false;
        }
        if (this.compare(key, node.key) == 0) {

            return this.searchNode(node.left_node, key);

        } else if (this.compare(key, node.key) == 1) {

            return this.searchNode(node.right_node, key);

        } else {
            return node.value
        }

    }


    //最小节点
    minNode(node: Node_C<K, V> | null) {
        if (node) {
            while (node && node.left_node !== null) {
                node = node.left_node;
            }

            return node.key;
        }
        return null;
    }

    // 删除节点
    delete(element: K) {
        if (this.searchNode(this.root, element)) {
            this.root = this.removeNode(this.root, element);
            console.log("已经删除节点:", element);
        } else {
            console.log("不存在节点:", element);
        }

    }

    findMinNode(node: Node_C<K, V> | null) {

        while (node && node.left_node !== null) {
            node = node.left_node;
        }

        return node;
    }

    removeNode(node: Node_C<K, V> | null, element: K) {

        if (node === null) {
            return null;
        }

        if (this.compare(element, node.key) == 0) {
            node.left_node = this.removeNode(node.left_node, element);
            return node;

        } else if (this.compare(element, node.key) == 1) {
            node.right_node = this.removeNode(node.right_node, element);
            return node;

        } else {

            if (node.left_node === null && node.right_node === null) {
                node = null;
                return node;
            }
            if (node.left_node === null) {
                node = node.right_node;
                return node;

            } else if (node.right_node === null) {
                node = node.left_node;
                return node;

            }
            const aux = this.findMinNode(node.right_node);
            node.key = aux.key;
            node.right_node = this.removeNode(node.right_node, aux.key);
            return node;
        }
    };

    //升序打印
    print() {
        out_arr = [];
        this.printNode(this.root);
        console.log(out_arr)
    }

    // 递归遍历二叉树，升序添加入数组
    printNode(node: Node_C<K, V> | null, callback: any = arrPush) {
        if (node !== null) {
            this.printNode(node.left_node, callback);
            callback(node.key, node.value);
            this.printNode(node.right_node, callback);
        }
    }

}

const tree = new BinarySearchTree(comparetor);
let out_arr: any = [];

function arrPush(key: OTHER, value: string) {
    const out_dict: any = {key, value};
    out_arr.push(out_dict);
}

tree.put({a: 21, b: "a"}, "v1");
tree.put({a: 23, b: "b"}, "v2");
tree.put({a: 24, b: "b"}, "v3");
tree.put({a: 22, b: "a"}, "v4");
tree.put({a: 21, b: "a"}, "v4");
tree.put({a: 24, b: "a"}, "v4");

tree.print();
tree.delete({a: 23, b: "b"});
tree.get({a: 23, b: "a"});
tree.get({a: 21, b: "a"});
tree.get({a: 24, b: "b"});
tree.print();

