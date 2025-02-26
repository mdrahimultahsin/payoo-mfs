// Toggle Funcion
function handleToggle(id, status) {
  document.getElementById(id).style.display = status;
}

// Get value from Input
function getInputValueById(id){
    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

// Get Value form Inner Html
function getInnerTextById(id){
    const text = document.getElementById(id).innerText;
    const convertedText = parseFloat(text);
    return convertedText;
}


// Set InnerText Value
function setInnerTextById(id,value){
    document.getElementById(id).innerText = value.toFixed(2);
}

// Generate Transaction Id
function generateTransactionId(){
    let a = 'pyb';
    const transactionId = Math.floor(Math.random() * 1000);
    return a + transactionId
}
