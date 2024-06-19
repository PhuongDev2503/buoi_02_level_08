function bai1(){
    let a = prompt("Nhập số a:");
    let b= prompt("Nhập số b:");

    a = parseFloat(a);
    b = parseFloat(b);

    if (a > b){
        alert('Số a lớn hơn số b');
    } else if (a < b){
        alert('Số a bé hơn số b');
    } else {
        alert('Số a bằng số b');
    }

}

function bai2(){
    let n = prompt('Nhập số n: ');

    n = parseFloat(n)

    if (n % 2 ==0){
        alert('Số n là số chẵn');
    } else {
        alert('Số n là số lẻ');
    }
}

function bai3(){
    let n = prompt('Nhập số n: ');
    let a = prompt('Nhập số a: ');

    n = parseFloat(n);
    a = parseFloat(a);

    if (a % n == 0){
        alert('Số a có thể chia hết cho số n')
    } else{
        alert('Số a không thể chia hết cho số n')
    }

}
