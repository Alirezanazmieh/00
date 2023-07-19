function BMI(a, b) {
    var bmi = a / (b ** 2);
    alert('your bmi is:' + bmi.toFixed(2));
}
var a = (prompt(' وزن را وارد کنید(G):'));
var b = (prompt('قد را وارد کنید (M):')) / 100;
BMI(a, b)
