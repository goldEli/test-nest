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

### 环境变量

```bash
pnpm install @nestjs/config
```

### 热加载

会有缓存问题，项目小直接用自带就可以

### 文档

```bash
pnpm install @nestjs/swagger 
```

### TypeORM

直接写 sql 可读性维护性很差，ORM 框架应运而生，Object Relational Mapping 面向对象处理关系型数据库

### Mongo

```bash
# -p 27017:27017 ：映射容器服务的 27017 端口到宿主机的 27017 端口。外部可以直接通过 宿主机 ip:27017 访问到 mongo 的服务。
# --auth：需要密码才能访问容器服务。
docker run -itd --name mongo -p 27017:27017 mongo --auth
```

### Mysql

```bash
docker pull mysql:5.7
docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root --name mysql5.7 mysql:5.7
docker exec -it mysql5.7 /bin/bash
mysql -uroot -proot
CREATE DATABASE mydatabase;
```
```

```bash
```

### redis

```bash
REDIS_CONFIG:
  host: "localhost"  # redis 链接
  port: 6379         # redis 端口
  auth: "xxxx"       # redis 连接密码
  db: 1              # redis 数据库
```


### log

```js
const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter({
    logger: true
  }));
```

自定义log

```bash
$ pnpm install fast-json-parse // 格式化返回对象
$ pnpm install pino-multi-stream // 替换输出流
$ pnpm install split2 // 处理文本流
$ pnpm install dayjs // 可选，如果自己写时间格式化函数可以不用 
```

### AOP

Aspect Oriented Programming 面向切面编程
MVC: Controller =》 Model 层的 Service =》View
当一个请求过来先经过 Controller、 Service(Model)、 Repository(Model) 的逻辑，

如果想加一些日志记录、权限控制、异常处理，很容易想到在 Controller 中加，但是会污染业务代码，
我们需要在以上逻辑外包一层，像洋葱圈一样，这就是 AOP 

实现AOP的方式
* 路由中间件
  * 日志 
* 路由守卫Guard
  * 调用 Controller 前执行
  * 不能修改请求和返回
* Interceptor 拦截器
  * Controller 前后加一些逻辑
* Pipe 
  * 对参数做一些校验和转换
* ExceptionFilter
  * 处理异常

AOP 机制的顺序
Middleware、Guard、Pipe、Interceptor、ExceptionFilter 

抽离某种处理逻辑添加到路由或者全部路由，这就是 AOP 的好处。