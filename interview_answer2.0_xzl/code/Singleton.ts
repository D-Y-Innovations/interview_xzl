//4. 单例模式实现示例


//1 ,饿汉模式
//特点：类加载时就初始化。
class Singleton_hungry {
  private static instance = new Singleton_hungry();
  // 将 constructor 设为私有属性，防止 new 调用
  private constructor () {}

  static getInstance (): Singleton_hungry {
    return Singleton_hungry
  }
}

const singletonA = Singleton_hungry.getInstance();
const singletonB = Singleton_hungry.getInstance();

console.log(singletonA === singletonB);



// 2 , 懒汉模式
// 特点：需要时才创建对象实例。
class Singleton_lazy {
  private static instance: Singleton_lazy;

  private constructor () {}

  static getInstance (): Singleton_lazy {
    if (!Singleton_lazy.instance) {
      Singleton_lazy.instance = new Singleton_lazy()
    }
    return this.instance
  }
}

const singleton1 = Singleton_lazy.getInstance();
const singleton2 = Singleton_lazy.getInstance();
console.log(singleton1 === singleton2);

