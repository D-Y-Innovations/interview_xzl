# Test Problems

1. 所有题目使用typescript 2.0以上版本来编写代码，不能采用javascript兼容模式

    提示：

    ```sh
    cd async-example
    npm install # 下载依赖，依赖定义在package.json
    node_modules/.bin/ts-node test.ts # 运行ts文件
    ```

2. 请看async-example这个文件夹的例子
3. 题目后面有相关提示可以参考

提交格式：

1. 说明使用markdown文档在github提交
2. 代码直接提交

## 1. 从多个网页爬取内容，然后进行解析

有10个网页，1.txt 到 10.txt

http://dy-public.oss-cn-shenzhen.aliyuncs.com/interviewTestData/1.txt

```xml
<abc> <de
f>data : 1992; name : agent 1 </def></abc>
```

0. 格式有可能有区别
1. 用 promise, async, await 分别实现并发、串行爬取
2. 网页下载使用nodejs的http即可
3. 使用正则表达式获取data后面的字段，将10个文件的data值全部获取，并相加

## 2. 编写 quicksort

## 3. 实现一个二叉树，使插入、查询、删除的时间复杂度为O(logn)
```javascript
class Tree {
// implement your code
}

let t = new Tree()
t.add(2)
t.hasValue(2)  // true
t.add(4)
t.add(4)
t.add(3)
t.print()      // 升序输出，[2, 3, 4]
t.remove(2)    // [3, 4]
```

[node官方文档](https://nodejs.org/en/)

[typescript文档](https://www.tslang.cn/)

建议使用**visual studio code**进行编写。
