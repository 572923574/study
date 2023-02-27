# egg

test lesson

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org

# Service 封装的一个抽象层，数据库交互的代码
- 保持Controller 逻辑更加简单
- 保持业务逻辑的独立性，Service 可被多个Controller调用
- 写测试用例简单
# Controller 

## 服务端渲染
- 多SEO 非常友好
- Egg 后端的一致性认可
- 中台 一次登录 SPA

