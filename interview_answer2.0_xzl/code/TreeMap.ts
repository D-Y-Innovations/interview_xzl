// 3. 以排序二叉树为基础，实现 TreeMap，使增删改查节点的时间复杂度为O(logn)

type Node<K,V> = {
    key:K,
    value:V,
    left_node?: Node<K,V>,
    right_node?: Node<K,V>

}

class BinarySearchTree<K,V>{
    root ?: Node<K,V>;

    constructor() {
        this.root = null;
    }
        /**
         * 插入：向二叉树插入一个新的键
         * @param key
         */
    put(key:K,value:V) {

        const newNode:Node<K,V> = {key,value};

        if(this.root === null) {
            this.root = newNode

        } else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(node:Node<K,V>, newNode:Node<K,V>) {
        if(newNode.key< node.key) {
            if(!node.left_node) {
                node.left_node = newNode;
            } else {
                this.insertNode(node.left_node, newNode);
            }
        } else {
            if(!node.right_node) {
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
    get(key:K) {
        if (this.searchNode(this.root, key)){
            console.log(this.searchNode(this.root, key))
        }
        else {
            console.log("该节点不存在")
        }

    }
    searchNode(node:Node<K,V>, key:K):any {
        if(!node) {
            return false;
        }

        if(key < node.key) {
            return this.searchNode(node.left_node, key);

        } else if(key > node.key) {
            return this.searchNode(node.right_node, key);

        } else {
            const result:any = {};
            result[node.key]=node.value;
            return result

        }

    }

    min(){
        return this.minNode(this.root);
    }

    minNode(node:Node<K,V>) {
        if(node) {
            while(node && node.left_node) {
                node = node.left_node;
            }

            return node.key;
        }
        return null;
    }
    /**
     * 删除：从树中移除某个键
     */

    delete(element:K) {
        if (this.searchNode(this.root, element)){
            this.root = this.removeNode(this.root, element);
            console.log("已经删除节点:"+element);
        }else{
            console.log("不存在节点:"+element+'请从新输入');
        }

    }
    findMinNode(node:Node<K,V>) {
        while(node && node.left_node) {
            node = node.left_node;
        }

        return node;
    }

    removeNode(node:Node<K,V>, element:K) {
        if(!node) {
            return null;
        }
        if(element < node.key) {
            node.left_node = this.removeNode(node.left_node, element);
            return node;

        } else if(element > node.key) {
            node.right_node = this.removeNode(node.right_node, element);
            return node;

        } else {

            if(!node.left_node && !node.right_node) {
                node = null;
                return node;
            }
            if(!node.left_node) {
                node = node.right_node;
                return node;

            } else if(!node.right_node) {
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
    printNode(node?:Node<K,V>, callback:any = arrPush) {
        if(node) {
            this.printNode(node.left_node, callback);
            callback(node.key,node.value);
            this.printNode(node.right_node, callback);
        }
    }

}

const t = new BinarySearchTree ();
let out_arr:Array<{[key:number]:string;}>=[];
function arrPush(key:number,value:string){
    const out_node:any = {};
    out_node[key]=value;
    out_arr.push(out_node);
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
