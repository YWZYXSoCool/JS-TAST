/*  
聊天区
YWZYX:这里暂时什么都木有
*/

/*
要求区:
1.一个展示结果的展示框 id为res(已解决)
*/

//给每个数字按钮添加onclick="Solve(数字值)"

//当要输入的数字写这个
function Solve(val) {
    var v = document.getElementById('res');
    v.value += val;
} function Result() {
    var num1 = document.getElementById('res').value;
    var num2 = eval(num1);
    document.getElementById('res').value = num2;
} function Clear() {
    var inp = document.getElementById('res');
    inp.value = '';
} function Back() {
    var ev = document.getElementById('res');
    ev.value = ev.value.slice(0, -1);
}