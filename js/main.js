//Task 1
let str = "10"
for(let i = 11; i <= 20; i = i + 1){
    str = str + ", " + i;
}
console.log(str);

//Task 2
for (let i = 10; i <= 20; i++){
    console.log(`square of number result is ${i*i}`);
}

//Task3
    let i = 7;
    for(let j = 1; j <= 10; j++){
        console.log(`7 x ${j} multiplication result is ${j*i}`);
    }

//Task 4
let sum = 0;
for(let i = 1; i <= 15; i++){
    sum = sum + i;
}
console.log(`sum of number from 1 to 15 is ${sum}`);

//task 5
let prod = 0;
for(let i=15; i <=35; i++){
    prod = prod + i
}
console.log(`prod of number from 15 to 35 is ${prod * 35}`);

//task 6
let avg = 0;
for(let i=1; i<=500; i++){
    avg = avg + i;
}
console.log(`average of numbers from 1 to 500 is ${avg / 500}`);

//task 7
let pairSum = 0;
for(let i=30; i <= 80; i++){
    if (i % 2 === 0) {
        pairSum = pairSum + i
    }
    console.log(`sum of pair numbers from 30 to 80 is ${pairSum}`);
}
//task 8
for(let i=100; i <= 200; i++){
    if (i % 3 === 0) {
        console.log(`number multiple for 3 from 100 to 200 is ${i}`);
    }
}
//task 9, 10, 11
let n = 1024;
let divSum = 0,
    count = 0;
    for(let i = 2; i * 2 <= n; i++){
        if(n % i === 0){
            console.log(`divisor is ${i}`);
            if(i % 2 === 0){
                count ++;
                divSum += i
            }
        }
    }
console.log(`amount of pair divisors is ${count}`);
console.log(`sum of pair numbers is ${divSum}`);
//Task 12
let oneRow = " ";
function multipy() {
    for(let i = 1; i <= 10; i++){
        for(let j = 1; j <=10; j++){
            oneRow += (j * i) + " "
        }
        console.log(i + ' x');
        console.log(oneRow);
        oneRow = " "
    }
}
multipy()
