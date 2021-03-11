import { story } from '../../../component/story'
import MarkdownView from './MarkdownView'

const { meta, of } = story(MarkdownView)

export default meta({
  title: '组件/MarkdownView',
})

export const BasicExample = of({
  storyName: '基本示例',
  args: {
    note: {
      id: '047cf9d34a3142a3ad7c486dd6ba43a5',
      title: '# test',
      body:
        '# JavaScript 使用 Promise\n\n## 场景\n\n为什么要使用 Promise？\n\nJavaScript 异步发展史：`回调函数 -> Promise -> async/await`\n\n传统异步使用回调函数，回调意味着嵌套，当你需要使用很多异步函数时，那你需要非常多的回调函数，可能形成回调地狱。  \n有问题就有人解决，js 没有多线程，所以天生就是异步的。正是因为异步的广泛性，所以很早之前就有人着力于解决异步回调的问题，github 上有很多已经废弃的库就是用于解决这个问题的。  \n然而现在，es6 出现了 `Promise`，它能把嵌套回调压平为一层的链式调用，并且写进了 js 标准里。es7 甚至出现了更加优雅的方式，`async/await`，能以同步的方式写异步的代码。当然，本质上只是 Promise\n的一个语法糖，但其重要性也是不言而喻的——异步回调地狱已经不存在了！  \n说了这么多，那么平常我们应该怎么使用 Promise 呢？\n\n## 使用 Promise\n\n一般而言，我们作为使用者是无需创建 Promise 的，支持 Promise 的函数会返回一个 Promise 对象给我们，然后我们使用它的方法 `then/catch` 即可。\n\n- `then()`：当前的 JavaScript 已经完成，要进行下一步的同步/异步操作了\n- `catch()`：用于捕获 Promise 链式调用中可能出现的错误\n\n> 注：`then/catch` 均返回一个新的 Promise\n\n例如我们有这样一个需求\n\n1. 等待资源 A 加载完成\n2. 在 A 资源加载完成之后等待 B 资源加载完成\n\n之前使用回调函数，我们的代码可能是这样的\n\n```js\n/**\n * 等待指定的时间/等待指定表达式成立\n * @param {Number|Function} param 等待时间/等待条件\n * @param {Function} callback 回调函数\n */\nfunction wait(param, callback) {\n  if (typeof param === \'number\') {\n    setTimeout(callback, param)\n  } else if (typeof param === \'function\') {\n    var timer = setInterval(() => {\n      if (param()) {\n        clearInterval(timer)\n        callback()\n      }\n    }, 100)\n  } else {\n    callback()\n  }\n}\n\nwait(\n  () => document.querySelector(\'#a\'),\n  () => {\n    wait(\n      () => document.querySelector(\'#b\'),\n      () => {\n        console.log(\'a, b 两个资源已经全部加载完成\')\n      },\n    )\n  },\n)\n// 结果\n// a, b 两个资源已经全部加载完成\n```\n\n可以看到，上面如果还需要等待 `c,d,e,f...` 资源，那么回调函数的层级将是无法接受的。  \n现在，我们使用 Promise 改造一下代码\n\n```js\n// 先不要管这个函数的具体实现，下面再说如何自己封装 Promise\n/**\n * 等待指定的时间/等待指定表达式成立\n * @param {Number|Function} param 等待时间/等待条件\n * @returns {Promise} Promise 对象\n */\nfunction wait(param) {\n  return new Promise((resolve) => {\n    if (typeof param === \'number\') {\n      setTimeout(resolve, param)\n    } else if (typeof param === \'function\') {\n      var timer = setInterval(() => {\n        if (param()) {\n          clearInterval(timer)\n          resolve()\n        }\n      }, 100)\n    } else {\n      resolve()\n    }\n  })\n}\n\nwait(() => document.querySelector(\'#a\'))\n  // 注意这里的 wait(() => document.querySelector(\'#b\')) 同样是一个异步函数，返回了一个 Promise\n  // 接下来，有趣的地方来了\n  // 很明显，wait 是一个异步函数。wait 函数的 then 函数调用了另一个异步函数，然而 then 会等待异步执行完成，才继续执行后面的函数\n  .then(() => wait(() => document.querySelector(\'#b\')))\n  // 这里仍然会等待上面的 Promise 完成之后才执行下面的内容\n  .then(() => console.log(\'a, b 两个资源已经全部加载完成\'))\n// 结果\n// a, b 两个资源已经全部加载完成\n```\n\n下面我们尝试使用一下 `catch`\n\n```js\nwait(() => document.querySelector(\'#a\'))\n  .then(() => wait(() => document.querySelector(\'#b\')))\n  .then(() => {\n    throw new Error(\'执行了某些操作发生了异常\')\n  })\n  // 上面抛出了异常并且没有使用 catch 处理的话就会继续找下一个调用，直到找到处理的 catch，或者调用结束为止\n  .then(() => console.log(\'a, b 两个资源已经全部加载完成\'))\n  // 捕获上面的 then() 发生的异常，保证后面的调用正常执行\n  .catch((error) => console.log(\'使用 catch 捕获的异常: \', error))\n  .then(() => console.log(\'测试异步函数结束\'))\n\n// 结果\n// 使用 catch 捕获的异常:  Error: 执行了某些操作发生了异常\n//     at wait.then.then (<anonymous>:4:11)\n// VM272:9 测试异步函数结束\n```\n\n> 可以参考 MDN 上的教程 [使用 Promises](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Using_promises)\n\n## 封装 Promise\n\n那么，你是否也对上面自定义的 `wait` 函数感到好奇呢？我们来详细的了解一下具体如何做到的吧！\n\n```js\n/**\n * 等待指定的时间/等待指定表达式成立\n * @param {Number|Function} param 等待时间/等待条件\n * @returns {Promise} Promise 对象\n */\nfunction wait(param) {\n  // 这里返回了一个 Promise 对象，Promise 的构造函数要求一个函数参数\n  // 函数的参数实际上有两个，resolve 和 reject，分别代表 [已经完成] 和 [出现错误]\n  // 注：这个函数是立刻执行的，当 resolve 或 reject 执行时，这个 Promise 算是结束了，将进入下一个 then/catch 调用\n  return new Promise((resolve) => {\n    if (typeof param === \'number\') {\n      setTimeout(resolve, param)\n    } else if (typeof param === \'function\') {\n      var timer = setInterval(() => {\n        if (param()) {\n          clearInterval(timer)\n          // 这里执行了代码，如果有什么结果需要传递给下一个调用，则直接放到 resolve 函数内即可\n          resolve()\n        }\n      }, 100)\n    } else {\n      resolve()\n    }\n  })\n}\n```\n\n同样的，我们也可以使用 Promise 封装其他函数\n\n- `timeout`：一个简单的 `setTimeout()` 的封装\n- `readLocal`：读取本地浏览器选择的文件\n- `timing`：测试函数执行的时间，不管是同步还是异步的(Promise)\n\n```js\n/**\n * 使用 Promise 简单封装 setTimeout\n * @param {Number} ms 等待时间\n * @returns {Promise} Promise 对象\n */\nconst timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms))\n/**\n * 读取本地浏览器选择的文件\n * @param {File} file 选择的文件\n * @param {{String}} init 一些初始选项，目前只有 type 一项\n * @returns {Promise} 返回了读取到的内容（异步）\n */\nconst readLocal = (() => {\n  const result = (file, { type = \'readAsDataURL\' } = {}) =>\n    new Promise((resolve, reject) => {\n      if (!file) {\n        reject(\'file not exists\')\n      }\n      const fr = new FileReader()\n      fr.onload = (event) => {\n        resolve(event.target.result)\n      }\n      fr.onerror = (error) => {\n        reject(error)\n      }\n      fr[type](file)\n    })\n  result.DataURL = \'readAsDataURL\'\n  result.Text = \'readAsText\'\n  result.BinaryString = \'readAsBinaryString\'\n  result.ArrayBuffer = \'readAsArrayBuffer\'\n  return result\n})()\n\n/**\n * 测试函数的执行时间\n * 注：如果函数返回 Promise，则该函数也会返回 Promise，否则直接返回执行时间\n * @param {Function} fn 需要测试的函数\n * @returns {Number|Promise} 执行的毫秒数\n */\nfunction timing(fn) {\n  const begin = performance.now()\n  const result = fn()\n  if (!(result instanceof Promise)) {\n    return performance.now() - begin\n  }\n  return result.then(() => performance.now() - begin)\n}\n```\n\n吾辈建议你也可以封装一些常用的异步函数，下面会展示 JavaScript 中如何更简单的使用异步！\n\n## 使用 async/await\n\n- `async`：用于标识一个函数是异步函数，默认这个函数将返回一个 Promise 对象\n- `await`：用于在 async 函数内部使用的关键字，标识一个返回 Promise 的异步函数需要等待\n\n使用 `async/await` 重构上面的代码\n\n```js\nasync function init() {\n  // await 等待异步函数执行完成\n  await wait(() => document.querySelector(\'#a\'))\n  await wait(() => document.querySelector(\'#b\'))\n  console.log(\'a, b 两个资源已经全部加载完成\')\n}\n\n// 注：init() 函数将返回一个 Promise，我们可以继续追加下一步的操作\ninit()\n```\n\n是的，就是如此简单，直接在异步函数添加 `await` 关键字就好了！\n\n---\n\n最后，如果你要使用这些特性，请务必使用 babel 转换器。毕竟，有太多的人就是不肯升级浏览器。。。\n\n> 可以参考\n>\n> - [babeljs 官方文档](https://babeljs.io/docs/en/)\n> - [在传统项目中使用 babel 编译 ES6](https://blog.rxliuli.com/p/e73e3322/)\n',
      resourceList: [
        {
          id: '1488ac4fc32741e0a10dee5224fb0b94',
          title: '589ebf8e5bb13.pdf',
          type_: 4,
        },
        {
          id: '3538f5d1063a4fc3803aac03d568598b',
          title: 'reimu-1.mp4',
          type_: 4,
        },
        {
          id: '41a8849ab25b40d89e5e1e5598e5a58d',
          title: 'test2.txt2',
          type_: 4,
        },
        {
          id: '6fe15ae7c7bc4a3c94f1bc8e292de991',
          title: '20201010112349.png',
          type_: 4,
        },
        {
          id: 'bad7d7a6cf4848f8bbe6822bdde24e3b',
          title: '对象关系图.drawio.svg',
          type_: 4,
        },
        {
          id: 'bd6dd8fc5d2f4de490b8a06c985a4b91',
          title: '20201010144417.png',
          type_: 4,
        },
        {
          id: 'ce5a8c4653b64a229daa7554fc25482d',
          title: 'test.drawio.svg',
          type_: 4,
        },
        {
          id: 'e1a7858be1224ae89d2e85229dd980c5',
          title: 'test.txt',
          type_: 4,
        },
        { id: 'ec4ce8436056429f89b92f27acfe05bc', title: 'test.km', type_: 4 },
      ],
    },
  },
})
