import { of, filter, map, scan } from "rxjs";

of(...[1, 2, 3])
  .pipe(map((x) => x * x))
  .pipe(filter((x) => x % 2 !== 0))
  .subscribe((v) => console.log(`val: ${v}`));

const arr = of(1, 2, 3);

arr
  .pipe(
    scan((total, n) => {
      console.log({ total, n });
      return total + n;
    }),
    map((sum, index) => {
      console.log({ sum, index });
      return sum / (index + 1);
    })
  )
  .subscribe(console.log);

const source = of(1, 2, 3);
// 基础的 scan 示例，从0开始，随着时间的推移计算总数
const example = source.pipe(scan((acc, curr) => acc + curr, 0));
// 输出累加值
// 输出: 1,3,6
const subscribe = example.subscribe((val) => console.log(val));
