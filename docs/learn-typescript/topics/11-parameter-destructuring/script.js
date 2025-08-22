var numbers = [10, 20, 30];
var first = numbers[0], second = numbers[1], third = numbers[2];
var a = numbers[0], d = numbers[2];
var c = numbers[2];
var m = numbers[0], n = numbers[2], o = numbers[3], _a = numbers[4], p = _a === void 0 ? 10 : _a;
function myFun(_a) {
    var a = _a.a, b = _a.b, c = _a.c, d = _a.d, e = _a.e, f = _a.f;
    console.log(a, b, c, d, e, f);
}
myFun({ a: "Atique", c: true, e: 99 });
