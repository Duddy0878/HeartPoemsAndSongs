import { formatCurrency } from "../../js/utils/money.js";

console.log('test suite: formatcurresy');


console.log('convert ');


if (formatCurrency(2095) === '20.95'){
    console.log('passed');
    
}
else{
    console.log('failed');
    
}

console.log('zero');


if (formatCurrency(0 === '0.00')) {
    console.log('passed');
    
}
else{
    console.log('failed');
}

console.log('round up');


if (formatCurrency(2000.5) === '20.01') {
    console.log('passed');
    
}
else{
    console.log('failed');
}

console.log('round down');


if (formatCurrency(2000.4) === '20.00') {
    console.log('passed');
    
}
else{
    console.log('failed');
}