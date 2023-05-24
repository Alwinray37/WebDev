const add = (a,b) => a+b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b; 
const current = document.querySelector('#current');
const prev = document.querySelector('#previous');
let symbol = '';
const equal = document.querySelector('#numbers .equal');

function clear(){
    let clear = document.querySelector('#clear-btn');
    clear.addEventListener('click', e =>{
        prev.textContent = '';
        current.textContent = '0';
    });
}
function erase(){
    let del = document.querySelector('#delete-btn');
    del.addEventListener('click', e=>{
        if(current.textContent != '0'){
            if(current.textContent.length == 1){
                current.textContent = '0';
            }
            else{
                let str = current.textContent.slice(0, -1);
                current.textContent = str;
            }
        }
    })

}
function numbers(){
    let numbers = document.querySelectorAll('#numbers .num');
    numbers.forEach(num =>{
        num.addEventListener('click', e=>{
            if(current.textContent == '0'){
                current.textContent = '';
            }
            let text = num.textContent;
            // console.log(text);
            current.textContent += text;
        })
    })

    let period = document.querySelector('.period');
    period.addEventListener('click', e=>{
        if(!current.textContent.includes('.')){
            current.textContent += '.';
            console.log('this is entered');
        }
    })
}
function operation(){
    let operators = document.querySelectorAll('#numbers .operator');
    operators.forEach(operator =>{
        operator.addEventListener('click', e=>{
            if(prev.textContent == ''){
                prev.textContent = current.textContent;
                current.textContent = '0';
            }
            symbol = operator.textContent;
            console.log(symbol);
            // operator.classList.toggle('border-dark');
            operator.classList.toggle('bg-primary');
        })
    })
}
function equals(){
    equal.addEventListener('click', e=>{
        let a = Number(prev.textContent);
        let b = Number(current.textContent);
        if(symbol == '+'){
            current.textContent = add(a, b);
            prev.textContent = '';
        }
        else if(symbol == '-'){
            current.textContent = subtract(a, b);
            prev.textContent = '';
        }
        else if(symbol == 'x'){
            current.textContent = multiply(a, b);
            prev.textContent = '';
        }
        else if(symbol == '/'){
            current.textContent = divide(a, b);
            prev.textContent = '';
        }
        let operators = document.querySelectorAll('#numbers .operator');
        operators.forEach(e =>{
            if(e.classList.contains('bg-primary')){
                e.classList.toggle('bg-primary');
            }
        })
    })
}

function main(){
    clear();
    erase();
    numbers();
    operation();
    equals();
}
main();