// 3. 以排序二叉树为基础，实现 TreeMap，使增删改查节点的时间复杂度为O(logn)


let TreeMap = (function() {

    class Node {

        node_dict:{[key:number]:string;}={};
        left_node : Node|null;
        right_node : Node|null;
        constructor(thekey:number,thekval:string) {

            this.node_dict[thekey] = thekval;
            this.left_node = null;
            this.right_node = null;
        }
    }




    class BinarySearchTree {
        root : Node|null;

        constructor() {
            this.root = null;
        }
            /**
             * 插入：向二叉树插入一个新的键
             * @param key
             */
        put(key:number,value:string) {

            const newNode = new Node(key,value);

            if(this.root === null) {
                this.root = newNode

            } else {
                this.insertNode(this.root, newNode);
            }
        }
        insertNode(node:Node, newNode:Node) {
            if(parseInt(Object.keys(newNode.node_dict)[0]) < parseInt(Object.keys(node.node_dict)[0])) {
                if(node.left_node === null) {
                    node.left_node = newNode;
                } else {
                    this.insertNode(node.left_node, newNode);
                }
            } else {
                if(node.right_node === null) {
                    node.right_node = newNode;


                } else {
                    this.insertNode(node.right_node, newNode);
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
        searchNode(node:Node|null, key:number):any {
            if(node === null) {
                return false;
            }

            if(key < parseInt(Object.keys(node.node_dict)[0])) {
                return this.searchNode(node.left_node, key);

            } else if(key > parseInt(Object.keys(node.node_dict)[0])) {
                return this.searchNode(node.right_node, key);

            } else {

                return node.node_dict;

            }

        }

        min(){
            return this.minNode(this.root);
        }

        minNode(node:Node|null) {
            if(node) {
                while(node && node.left_node !== null) {
                    node = node.left_node;
                }

                return node.node_dict;
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
        findMinNode(node:Node|null) {
            while(node && node.left_node !== null) {
                node = node.left_node;
            }

            return node;
        }

        removeNode(node:Node|null, element:number) {
            if(node === null) {
                return null;
            }
            if(element < parseInt(Object.keys(node.node_dict)[0])) {
                node.left_node = this.removeNode(node.left_node, element);
                return node;

            } else if(element > parseInt(Object.keys(node.node_dict)[0])) {
                node.right_node = this.removeNode(node.right_node, element);
                return node;

            } else {

                if(node.left_node === null && node.right_node === null) {
                    node = null;
                    return node;
                }
                if(node.left_node === null) {
                    node = node.right_node;
                    return node;

                } else if(node.right_node === null) {
                    node = node.left_node;
                    return node;

                }
                const aux = this.findMinNode(node.right_node);
                node.node_dict = aux.node_dict;
                node.right_node = this.removeNode(node.right_node, parseInt(Object.keys(aux.node_dict)[0]));
                return node;
            }
        };
        print(){
            outputArr = [];
            this.printNode(this.root);
            console.log(outputArr)
        }
        printNode(node:Node|null, callback:any = arrPush) {
            if(node !== null) {
                this.printNode(node.left_node, callback);
                callback(node.node_dict);
                this.printNode(node.right_node, callback);
            }
        }

    }
    return BinarySearchTree;
})();
const t = new TreeMap();
let outputArr:Array<{[key:number]:string;}>=[];
function arrPush(value:{[key:number]:string;}){
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
