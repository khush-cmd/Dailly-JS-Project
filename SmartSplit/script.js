
// 1. Setup tab Switcing Logic : this lets 
// you switch between Bill spliiter, Tip Calculator, and discount Calculator.



function showTab(tabId){
    const cards = document.querySelectorAll('.card-active');
    cards.forEach(card=> card.style.display = 'none');

    const selected = document.getElementById(tabId);
    selected.style.display = 'block';

}
document.addEventListener("DOMContentLoaded" ,()=>{
    showTab('bill-splitter');
});

// 2. Bill splitter Logic 
function calculateSplit(){
    const input = document.querySelectorAll('#bill-splitter input');
    const billAmount = parseFloat(input[0].value);
    const peopleCount = parseInt(input[1].value);

    const result = document.getElementById("split-result");

    if(isNaN(billAmount)|| isNaN(peopleCount) || peopleCount <= 0){
        result.textContent = "Please enter the valid inputs. ";
        result.style.color = '#ff4c4c';
        result.style.textShadow = "  0 0 20px #ff4c4c";
        result.style.height = "54px";
        result.style.padding = "14px";
        return;
    }
    else{
        result.style.height = "54px";
        result.style.padding = "14px";
        
    }
    const eachPay = (billAmount / peopleCount).toFixed(2);
    result.textContent = `Each person should pay ₹${eachPay}`;


}
document.getElementById('tip-btn').addEventListener('click',()=>{
    const input = document.querySelectorAll('#tip-calculator input');
    const tipCount = parseFloat(input[0].value);
    const peopleCount = parseInt(input[1].value);

    const resultTip = document.getElementById('tip-result');

    if(isNaN(tipCount) || isNaN(peopleCount) || peopleCount <= 0){
        resultTip.textContent = "Please enter the valid inputs. ";
        resultTip.style.color = '#ff4c4c';
        resultTip.style.textShadow = "  0 0 20px #ff4c4c";
        resultTip.style.height = "54px";
        resultTip.style.padding = "14px";
        return;
    }
    else{
        resultTip.style.height = "54px";
        resultTip.style.padding = "14px";
    }
    const tipPay = (tipCount / peopleCount).toFixed(2);
    resultTip.textContent = `Tip to Pay : ₹${tipPay}`;
});

document.getElementById('dic-btn').addEventListener('click',()=>{
    const input = document.querySelectorAll('#discount-calculator input');
    const originalPrice = parseFloat(input[0].value);
    const discountPercent = parseInt(input[1].value);

    const result = document.getElementById('discount-result');

    if(isNaN(originalPrice) || isNaN(discountPercent) || discountPercent <= 0){
        result.textContent = "Please enter the valid inputs. ";
        result.style.color = '#ff4c4c';
        result.style.textShadow = "  0 0 20px #ff4c4c";
        result.style.height = "54px";
        result.style.padding = "14px";
    }
    else{
        result.style.height = "54px";
        result.style.padding = "14px";
    }
    const discountPrice = originalPrice * (discountPercent/100);
    const finalPay = (originalPrice - discountPrice).toFixed(2);
    result.textContent = `Final Amount : ₹${finalPay}`;
});