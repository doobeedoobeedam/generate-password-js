const info   = document.querySelector('.info');
const pass   = document.querySelector('#password');
const btn    = document.querySelectorAll('button');
let password = '';

btn[0].style.display = 'none';

function generatePassword() {
    password   = '';
    let length = 8;
    let chars  = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()`;
    let n      = chars.length;

    for(var i = 0; i < length; ++i) {
        password += chars.charAt(Math.floor(Math.random() * n));
    }

    pass.value = password;
    btn[0].style.display = 'inline';
    btn[1].innerHTML = 'Regenerate';
    btn[1].setAttribute('title', 'Regenerate');
}

function copyText() {
    navigator.clipboard.writeText(password);
    info.style.opacity = '1';
    
    setTimeout(function() {
        info.style.opacity = '0'
    }, 2500);
}