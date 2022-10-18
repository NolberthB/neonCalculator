const display1 = document.querySelector('.calculator__display-1')
const display2 = document.querySelector('.calculator__display-2')
const allClear = document.querySelector('.calculator__button-item--all-clear')
const operations = document.getElementsByClassName('calculator__button-item--operation')
const numbers = document.getElementsByClassName('calculator__button-item--number')
const equal = document.querySelector('.calculator__button-item--equal')

let dis1Num = ''
let dis2Num = ''
let result = ''
let lastOperation = ''
let haveDot = ''

Array.from(numbers).forEach((number) => {
    number.addEventListener('click', (e) =>{
        if (e.target.innerText === '.' && !haveDot) {
            haveDot = true;
        } else if (e.target.innerText === '.' && haveDot) {
            return;
        }
        dis2Num += e.target.innerText;
        display2.innerText = dis2Num;
    })
})

Array.from(operations).forEach((operation) => {
    operation.addEventListener('click', (e) => {
        if(!dis2Num) 
            return haveDot = false
   
        const operationName = e.target.innerText

        

        if (dis1Num && dis2Num && lastOperation) {
            mathOperation()
        } else {
            result = parseFloat(dis2Num)
        }
        clearVar(operationName)
        lastOperation = operationName
    })
})

equal.addEventListener('click', (e) => {
    if(!dis2Num || !dis1Num) return haveDot = false
    mathOperation()
    clearVar()
    display2.innerText = result
    result.innerText = ''
    dis2Num = result
    dis1Num = ''
})

function clearVar( name = ''){
    dis1Num += dis2Num + ' ' + name + ' '
    display1.innerText = dis1Num    
    display2.innerText = ''
    dis2Num = ''
}

function mathOperation(){
    if (lastOperation === 'x') {
        result = parseFloat(result) * parseFloat(dis2Num)
    } else if (lastOperation === '+') {
        result = parseFloat(result) + parseFloat(dis2Num)
    } else if (lastOperation === '-') {
        result = parseFloat(result) - parseFloat(dis2Num)
    } else if (lastOperation === '÷') {
        result = parseFloat(result) / parseFloat(dis2Num)
    } else if (lastOperation === '%') {
        result = parseFloat(result) % parseFloat(dis2Num)
    } 
}

allClear.addEventListener('click', (e) => {
    dis1Num = ''
    dis2Num = ''
    display1.innerText = ''
    display2.innerText = ''
    result = ''
})
