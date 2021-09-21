// Calling heading history
let history = document.getElementById('history');

// Calculation function
function calculation(v){
    para = document.createElement('p');//creating paragraph element
    data = v+ " = " + eval(v);
    //taking parameter and eval function with parameter.Eval function to evaluate an expression that results in a text string or a numeric value.
    para.innerHTML = data;//printing data in paragraph
    history.appendChild(para);//appending child in div history
    return eval(v);
}

function backspace(b){
    return b.slice(0, b.length-1);//deleting one element from last
}
function clr(){
    para.innerHTML = "";//printing data in paragraph
    
    
}