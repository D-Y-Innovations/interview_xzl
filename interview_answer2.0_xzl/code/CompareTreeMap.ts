// 5. 在treeMap的基础上，对类型不可比较的参数提供Compare函数进行比较

interface OTHER {
            a: number,
            b: string
        }
function compare(newkey:OTHER,key:OTHER) {
    if (newkey.a==key.a){
        if (newkey.b<key.b){
            return 0
        }else if(newkey.b>key.b){
            return 1
        }
        else {
            return 2
        }
    }
    if (newkey.a<key.a) {
            return 0
    }
    else {
        return 1
    }
}

let TreeMap = (function() {

    class Node<K,V> {

        key:K;
        value:V;
        left_node : Node<K,V>|null;
        right_node : Node<K,V>|null;
        constructor(thekey:K,thekval:V) {

            this.key = thekey;
            this.value = thekval;
            this.left_node = null;
            this.right_node = null;
        }
    }


    class BinarySearchTree {
        root : Node<OTHER,string>|null;

        constructor() {
            this.root = null;
        }
            /**
             * 插入：向二叉树插入一个新的键
             * @param key
             */

        put(key:OTHER,value:string) {

            const newNode:Node<OTHER,string> = new Node(key,value);

            if(this.root === null) {
                this.root = newNode

            } else {
                this.insertNode(this.root, newNode);
            }
        }
        insertNode(node:Node<OTHER,string>, newNode:Node<OTHER,string>) {
            if(compare(newNode.key,node.key)==0) {
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
        get(key:OTHER) {
            if (this.searchNode(this.root, key)){
                console.log(this.searchNode(this.root, key))
            }
            else {
                console.log("该节点不存在")
            }

        }
        searchNode(node:Node<OTHER,string>|null, key:OTHER):any {
            if(node === null) {
                return false;
            }

            if(compare(key,node.key)==0) {
                return this.searchNode(node.left_node, key);

            } else if(compare(key,node.key)==1) {

                return this.searchNode(node.right_node, key);

            } else {

                return node.value

            }

        }

        min(){
            return this.minNode(this.root);
        }

        minNode(node:Node<OTHER,string>|null) {
            if(node) {
                while(node && node.left_node !== null) {
                    node = node.left_node;
                }

                return node.key;
            }
            return null;
        }
        /**
         * 删除：从树中移除某个键
         */

        delete(element:OTHER) {
            if (this.searchNode(this.root, element)){
                this.root = this.removeNode(this.root, element);
                console.log("已经删除节点:",element);
            }else{
                console.log("不存在节点:",element);
            }

        }
        findMinNode(node:Node<OTHER,string>|null) {
            while(node && node.left_node !== null) {
                node = node.left_node;
            }

            return node;
        }

        removeNode(node:Node<OTHER,string>|null, element:OTHER) {
            if(node === null) {
                return null;
            }
            if(compare(element,node.key)==0) {
                node.left_node = this.removeNode(node.left_node, element);
                return node;

            } else if(compare(element,node.key)==1) {
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
                node.key = aux.key;
                node.right_node = this.removeNode(node.right_node, aux.key);
                return node;
            }
        };
        print(){
            out_arr = [];
            this.printNode(this.root);
            console.log(out_arr)
        }
        printNode(node:Node<OTHER,string>|null, callback:any = arrPush) {
            if(node !== null) {
                this.printNode(node.left_node, callback);
                callback(node.key,node.value);
                this.printNode(node.right_node, callback);
            }
        }

    }
    return BinarySearchTree;
})();
const t = new TreeMap();
let out_arr:any=[];
function arrPush(key:OTHER,value:string){
    // const tt:any = {};
    // tt[key]:value;

    const out_node:[OTHER,string]=[key,value];
    out_arr.push(out_node);
}
t.put({a:21,b:"a"},"v1");
t.put({a:23,b:"b"},"v2");
t.put({a:24,b:"b"},"v3");
t.put({a:22,b:"a"},"v4");
t.put({a:21,b:"a"},"v4");
t.put({a:24,b:"a"},"v4");

t.print();
t.delete({a:22,b:"b"});
t.get({a:23,b:"a"});
t.get({a:21,b:"a"});
t.get({a:24,b:"b"});
t.print();

