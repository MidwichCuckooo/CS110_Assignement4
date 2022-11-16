// 1. Write a program that prints the following figure for given number of lines. Example:
// n = 4; =>
//  +
//  ++
//  +++
//  ++++


function Triangle(n) {
    let my_arr = [];
    let i = 0;
    let j = 0;

    while (i++ < n) {
        my_arr.push(" ")
    }
    while (j++ < n) {
        my_arr[n - j] = "+"   // adds + to the last element and then semi last and so on untill all are +'s
        console.log(my_arr.join(""))
    }
}

//Facorial finder. This could be also solved by a recursion, but This method is much easier for a computer to solve 
//(I will use recursion on the next one)

function Factorial(n) {
    let answer = 1;
    let i = 0;
    while (i++ < n) {
        answer = answer * i
    }
    return answer;
}


// we need to find the remainder of two numbers(and then divide by the remained and then find the next remainder... ) untill we get to 0, so
// it is basically a recursive function 

function GCD(a, b) {
    if (b == 0) {
        return a
    } else {
        return GCD(b, a % b)
    }
}

//We have theorem that that lcm of A and B is A times B divided by GCD of A and B so...

function LCM(a, b) {
    (a * b) / GCD(a, b)
}

//from decimal to Hexadecimal

function Hex(num) {
    let Hex_nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let answer = [];
    let rem = 0;

    if (num == 0) {
        return 0
    } else {
        while (num > 0) {
            rem = num % 16
            answer.push(Hex_nums[rem])
            num = Math.floor(num / 16)
        }

        let output_arr = []
        for (let i = 0; i < answer.length; i++) {
            output_arr.push(answer[(answer.length - 1) - i])
        }
        answer = output_arr.join("");
        return answer
    }
}

module.exports = {
    Triangle: Triangle,
    Factorial: Factorial,
    GCD: GCD,
    LCM: LCM,
    HEX: Hex
}