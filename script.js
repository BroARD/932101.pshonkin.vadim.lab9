var butt_1 = document.getElementById("one");
var butt_2 = document.getElementById("two");
var butt_3 = document.getElementById("tree");
var butt_4 = document.getElementById("four");
var butt_5 = document.getElementById("five");
var butt_6 = document.getElementById("six");
var butt_7 = document.getElementById("seven");
var butt_8 = document.getElementById("eight");
var butt_9 = document.getElementById("nain");
var butt_0 = document.getElementById("zero");

var butt_slash = document.getElementById("slash");
var butt_delet = document.getElementById("delet");
var butt_clean = document.getElementById("clean");
var butt_multiply = document.getElementById("multiply");
var butt_minus = document.getElementById("minus");
var butt_answer = document.getElementById("answer");
var butt_dot = document.getElementById("dot");
var butt_plus = document.getElementById("plus");

var input = document.getElementById("use");
var memory = document.getElementById("memory");

let mass_numbers = [];
let number  = '';
mass_numbers.push(butt_0, butt_1, butt_2, butt_3, butt_4, butt_5, butt_6, butt_7, butt_8, butt_9)

let mass_actions = [];

let stroka = '';
let ans = 0;
let last_position;
let answer_was = false;


document.addEventListener("click", function(event) {
    memory.style.color = '#808080';
    for (let i = 0; i < 10; i++) {
        if ((mass_numbers[i].contains(event.target)) ) {
            if (last_position == ''){ memory.innerHTML = ''; ans = 0;}
            if (mass_numbers[i] != butt_0){
                if (input.innerHTML == '0'){input.innerHTML = ''};
                input.innerHTML += mass_numbers[i].value;
                number += mass_numbers[i].value;
            }
        }
    }
    
    if ((butt_plus.contains(event.target)) ) {
        last_position = butt_plus;
        ans = plus(ans, number);
        number = '';
        stroka = ' +  ';
        memory.innerHTML += input.innerHTML;
        memory.innerHTML += stroka;
        input.innerHTML = '';
    }

    if ((butt_multiply.contains(event.target)) ) {
        last_position = butt_multiply;
        ans = plus(ans, number);
        number = '';
        stroka = ' * ';
        input.innerHTML += stroka;
    }
    
    if ((butt_answer.contains(event.target)) ) {
        if (last_position == butt_plus){ans = plus(ans, number)}
        if (last_position == butt_multiply){ans = multiply(ans, number)}
        if (last_position == butt_minus){ans = minus(ans, number)}
        if (last_position == butt_slash){ans = slash(ans, number)}
        number = '';
        memory.style.color = 'black';
        memory.innerHTML = String(ans);
        input.innerHTML = '';
        last_position = '';
    }

    if ((butt_minus.contains(event.target)) ) {
        last_position = butt_minus;
        ans = plus(ans, number);
        number = '';
        stroka = ' - ';
        input.innerHTML += stroka;
    }

    if ((butt_slash.contains(event.target)) ) {
        last_position = butt_slash;
        ans = plus(ans, number);
        number = '';
        stroka = ' / ';
        input.innerHTML += stroka;
    }

    if ((butt_dot.contains(event.target)) ) {
        number += '.';
        stroka = '.';
        input.innerHTML += stroka;
    }

    if ((butt_clean.contains(event.target)) ) {
        number = '';
        ans = 0;
        memory.innerHTML = '';
        input.innerHTML = '0';
    }

    if ((butt_delet.contains(event.target)) ) {
        input.innerHTML = input.innerHTML.slice(0, input.innerHTML.length - 1);
        number = input.innerHTML;
    }


});

function plus(ans, stroka){
    ans += Number(stroka);
    return ans
}

function multiply(ans, stroka){
    ans *= Number(stroka);
    return ans
}

function minus(ans, stroka){
    ans -= Number(stroka);
    return ans
}

function slash(ans, stroka){
    ans /= Number(stroka);
    return ans
}