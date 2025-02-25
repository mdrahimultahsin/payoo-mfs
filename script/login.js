document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();
    const phoneInput = document.querySelector('#phone-input').value;
    const pinInput = document.querySelector('#pin-input').value;
    const pinValue = Number(pinInput);
    if(phoneInput.length === 11 && phoneInput.startsWith('01')){
        if(pinValue ===1234){
            window.location.href = '../main.html'
        }
        else{
            alert('Wrong pin');
        }
    }
    else{
        alert('Invalid Phone Number')
    }
});
