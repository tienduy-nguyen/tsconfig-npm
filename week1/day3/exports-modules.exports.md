# module.exports và exports trong NodeJS khác nhau như thế nào?

## Chú ý
exports và module.exports chứ không phải là export nhé các bạn. Nhiều bạn hay viết thiếu chữ "s" lắm ấy. Trong Javascript thì có cái từ khóa export nhưng trong NodeJS thì chưa đâu.


## Cơ chế Wrapping của NodeJS là gì?
Trước khi một đoạn code trong module được thực thi thì NodeJS sẽ wrap code lại như sau:

```js
(function(exports, require, module, __filename, __dirname) { 
    // Module code actually lives in here 
}); 
```

## module.exports và exports khác nhau như thế nào?
Trước hết thì module.exports và exports trỏ tới cùng một Object, là một Object rỗng.

Tuy nhiên, chỉ có một thằng module.exports là cái thật sự được export khi mình require nó thôi. Còn thằng exports thì không phải. Nó chỉ là một reference tới thằng module.exports thôi.


Ví dụ như sau:

```js
module.exports.name = "Nguyen";
exports.name = "Nguyen";

console.log(module.exports);
console.log(exports);
console.log(module.exports === exports);
```

Kết quả sẽ là
```js
{ name: 'Nguyen' }
{ name: 'Nguyen' }
true
```

Ở đây có thể thấy hai thằng này chỉ thay đổi cái properties của cái Object ban đầu (là Object rỗng ban đầu). Nên ở đây, hai thằng này vẫn là cùng một Object.

Tuy nhiên, nếu như sửa lại

```js
module.exports = {
  name: "Nguyen"
};
exports = {
  name: "Nguyen"
};

console.log(module.exports === exports);
```

Hai thằng này là hai cái Object khác nhau, vì mình là assign lại giá trị cho thằng exports (Mình dùng dấu =).Kết quả sẽ là `false`

Mình chứng minh thêm như sau:

Trong file export.js minhf viết

```js
exports = {
  name: "Nguyen"
};

```
Sau đó, trong file index.js mình viết

```js
const object = require("./export");
console.log(object);
```
Thì kết quả là `{}`

Vì chỉ là thằng `module.exports` mới là thằng thật sự được export (Và mặc định nó là một Object rỗng). Còn thằng exports thì không.

Vậy thì khi nào sử dụng thằng exports?
Dùng thằng exports chỉ khi nào mình muốn add thêm một cái properties vào cái Object mặc định của nó. Ví dụ như thay vì viết

```js
module.exports.x = 1;
module.exports.y = 2;
module.exports.z = 3;
Thì có thể viết thành như sau cho nó ngắn và tiện hơn.

exports.x = 1;
exports.y = 2;
exports.z = 3;
```

## Kết luận
Luôn sử dụng module.exports khi muốn export một cái gì đó. Đừng lăn tăn sử dụng exports là gì cho rối rắm hết cả lên.


[Source](https://viblo.asia/p/moduleexports-va-exports-trong-nodejs-khac-nhau-nhu-the-nao-Az45boaLKxY)