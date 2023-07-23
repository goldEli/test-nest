import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

AppDataSource.initialize()
  .then(async () => {
    console.log("Inserting a new user into the database...");
    // 事务
    await AppDataSource.manager.transaction(async (manager) => {
      await manager.save(User, {
        id: 4,
        firstName: "eee",
        lastName: "eee",
        age: 20,
      });
    });

    // const queryBuilder = await AppDataSource.manager.createQueryBuilder();
    // const user = await queryBuilder
    //   .select("user")
    //   .from(User, "user")
    //   .where("user.age = :age", { age: 21 })
    //   .getOne();
    // console.log("user", user);

    // const user = await AppDataSource.manager.findOne(User, {
    //   select: {
    //     firstName: true,
    //     age: true,
    //   },
    //   where: {
    //     id: 4,
    //   },
    //   order: {
    //     age: "ASC",
    //   },
    // });
    // console.log('user', user)

    // const [users, count] = await AppDataSource.manager.findAndCountBy(User, {
    //   age: 23,
    // });
    // console.log('users, count', users, count)

    // const [users, count] = await AppDataSource.manager.findAndCount(User)
    // console.log('users, count', users, count)

    // await AppDataSource.manager.save(User, [
    //   { firstName: "ccc", lastName: "ccc", age: 21 },
    //   { firstName: "ddd", lastName: "ddd", age: 22 },
    //   { firstName: "eee", lastName: "eee", age: 23 },
    // ]);

    // const users = await AppDataSource.manager.findBy(User, {
    //   age: 23,
    // });
    // console.log("users", users);

    // const users = await AppDataSource.manager.find(User);
    // console.log(users);

    // const user = new User();
    // user.id = 3;
    // await AppDataSource.manager.remove(User, user);

    // await AppDataSource.manager.delete(User, 1);
    // await AppDataSource.manager.delete(User, [1, 2]);

    // await AppDataSource.manager.save(User, [
    //   { firstName: "ccc", lastName: "ccc", age: 21 },
    //   { firstName: "ddd", lastName: "ddd", age: 22 },
    //   { firstName: "eee", lastName: "eee", age: 23 },
    // ]);
    // const user = new User();
    // user.id = 1;
    // user.firstName = "aaa";
    // user.lastName = "bbb";
    // user.age = 25;
    // await AppDataSource.manager.save(user);
    // console.log("Saved a new user with id: " + user.id)

    // console.log("Loading users from the database...")
    // const users = await AppDataSource.manager.find(User)
    // console.log("Loaded users: ", users)

    // console.log("Here you can setup and run express / fastify / any other framework.")
  })
  .catch((error) => console.log(error));
