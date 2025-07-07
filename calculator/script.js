let currentInput = 0;
function appendToDisplay(value){
    currentInput += value;
    document.getElementById('display').textContent = currentInput;


}
function clearDisplay(){
    currentInput = '';
    document.getElementById('display').textContent = 0;
}
function deleteBtn(){
    currentInput = currentInput.slice(0,-1);
    document.getElementById('display').textContent = currentInput || '0';
}
function calculate(){
    try{
        const result = Function('"use strcit"; return(' + currentInput +')')();
        document.getElementById('display').textContent = result ;
        currentInput = result.toString();
    }
    catch{
        document.getElementById('display').textContent= 'Error';
        currentInput = '';
    }
}