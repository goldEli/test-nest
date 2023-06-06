# test-nest
nestjs

* IOC
* nest cli
* 版本控制
* 引入 Fastify

### IOC

通过依赖注入降低代码之间的耦合

### 基本操作

生成`user 模块
```sh
$ nest g resource user 

```

### 版本控制

```bash
gitlab.example.com/api/v4/list
```

### Fastify

替换 expressjs 更快更强

### 全局返回参数以及异常拦截

```json
{
    data, // 数据
    status: 0, // 接口状态值
    extra: {}, // 拓展信息
    message: 'success', // 异常信息
    success：true // 接口业务返回状态
}
```

* 数据结构需要封装成统一格式便于前端处理。
* 异常过滤返回到前端
* 业务代码主动抛出错误返回前端


