// 3. 以排序二叉树为基础，实现 TreeMap，使增删改查节点的时间复杂度为O(logn)

let TreeMap = (function() {
    class Node {

        key:any = {};
        left:any;
        right:any;
        constructor(thekey:any,thekval:any) {

            this.key[thekey] = thekval;
            this.left = null;
            this.right = null;
        }
    }
    class BinarySearchTree {
        root:any;
        constructor() {
            this.root = null;
        }
            /**
             * 插入：向二叉树插入一个新的键
             * @param key
             */
        put(key:any,value:any) {

            var newNode = new Node(key,value);
            if(this.root === null) {
                this.root = newNode;

            } else {
                this.insertNode(this.root, newNode);
            }
        }
        insertNode(node:any, newNode:any) {
            if(parseInt(Object.keys(newNode.key)[0]) < parseInt(Object.keys(node.key)[0])) {
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
        /**
         * 查询：在二叉树查找一个键，如果节点存在，则返回true；如果不存在，则返回false。
         * @param key
         */
        get(key:number) {
            if (this.searchNode(this.root, key)){
                console.log(this.searchNode(this.root, key))
            }
            else {
                console.log("该节点不存在")
            }

        }
        searchNode(node:any, key:any):any {
            if(node === null) {
                return false;
            }

            if(key < parseInt(Object.keys(node.key)[0])) {
                return this.searchNode(node.left, key);

            } else if(key > parseInt(Object.keys(node.key)[0])) {
                return this.searchNode(node.right, key);

            } else {

                return node.key;

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
        }
        /**
         * 删除：从树中移除某个键
         */

        delete(element:number) {
            if (this.searchNode(this.root, element)){
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
            if(element < parseInt(Object.keys(node.key)[0])) {
                node.left = this.removeNode(node.left, element);
                return node;

            } else if(element > parseInt(Object.keys(node.key)[0])) {
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
        print(){
            outputArr = [];
            this.printNode(this.root);
            console.log(outputArr)
        }
        printNode(node:any, callback:any = arrPush) {
            if(node !== null) {
                this.printNode(node.left, callback);
                callback(node.key);
                this.printNode(node.right, callback);
            }
        }

    }
    return BinarySearchTree;
})();
var t = new TreeMap();
let outputArr:any=[];
function arrPush(value:any){
    outputArr.push(value);

}
t.put(11,"v11");
t.put(6,"v6");
t.put(13,"v13");
t.put(5,"v5");
t.put(9,"v9");


t.print();
t.delete(9);
t.get(13);
t.get(9);
t.get(2);
t.print();


