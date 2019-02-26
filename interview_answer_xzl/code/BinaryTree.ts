//3. 实现一个二叉树，使插入、查询、删除的时间复杂度为O(logn)

let Tree = (function() {
    class Node {
        key:any;
        left:any;
        right:any;
        constructor(thekey:any) {
            this.key = thekey;
            this.left = null;
            this.right = null;
        }
    }
    class BinarySearchTree {
        root:any;
        constructor() {
            this.root = null;
        }

        // 插入：向二叉树插入一个新的键
        add(key:any) {
            var newNode = new Node(key);
            if(this.root === null) {
                this.root = newNode;
            } else {
                this.insertNode(this.root, newNode);
            }
        }
        insertNode(node:any, newNode:any) {
            if(newNode.key < node.key) {
                if(node.left === null) {
                    node.left = newNode;
                } else {
                    this.insertNode(node.left, newNode);
                }
            } else {
                if(node.right === null) {
                    node.right = newNode;
                } else {
                    this.insertNode(node.right, newNode);
                }
            }
        }

        // 查询：在二叉树查找一个键，如果节点存在，则返回true；如果不存在，则返回false。
        hasValue(key:number) {
            console.log(this.searchNode(this.root, key));
            return this.searchNode(this.root, key);
        }
        searchNode(node:any, key:any):any {
            if(node === null) {
                return false;
            }

            if(key < node.key) {
                return this.searchNode(node.left, key);

            } else if(key > node.key) {
                return this.searchNode(node.right, key);

            } else {
                return true;
            }

        }

        // 升序输出
        print(callback:any) {
            this.printNode(this.root, callback);
        }

        printNode(node:any, callback:any) {
            if(node !== null) {
                this.printNode(node.left, callback);
                callback(node.key);
                this.printNode(node.right, callback);
            }
        }
        min(){
            return this.minNode(this.root);
        }

        minNode(node:any) {
            if(node) {
                while(node && node.left !== null) {
                    node = node.left;
                }

                return node.key;
            }
            return null;
        };

        // 删除：从树中移除某个键
        remove(element:number) {
            if(this.hasValue(element)){
                this.root = this.removeNode(this.root, element);
                console.log("已经删除节点:"+element);
            }else{
                console.log("不存在节点:"+element+'请从新输入');
            }

        }
        findMinNode(node:any) {
            while(node && node.left !== null) {
                node = node.left;
            }

            return node;
        }

        removeNode(node:any, element:number) {
            if(node === null) {
                return null;
            }
            if(element < node.key) {
                node.left = this.removeNode(node.left, element);
                return node;

            } else if(element > node.key) {
                node.right = this.removeNode(node.right, element);
                return node;

            } else {

                if(node.left === null && node.right === null) {
                    node = null;
                    return node;
                }
                if(node.left === null) {
                    node = node.right;
                    return node;

                } else if(node.right === null) {
                    node = node.left;
                    return node;
                }
                var aux = this.findMinNode(node.right);
                node.key = aux.key;
                node.right = this.removeNode(node.right, aux.key);
                return node;
            }
        };

    }
    return BinarySearchTree;
})();
var tree = new Tree();
let arrss:any=[];
tree.add(11);
tree.add(6);
tree.add(13);
tree.add(5);
tree.add(3);
function printNodes(value:any){
    arrss.push(value);
        console.log(arrss);
}
console.log("1")
tree.print(printNodes);
console.log("2")
tree.remove(1);
console.log("3")
tree.remove(5);
console.log("4")
tree.hasValue(11);

console.log("12121212122222")
tree.print(() => {
    console.log("111111")
})



