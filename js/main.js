let regexInput = document.getElementById('regexInput')
let regexApply = document.getElementById('regex-apply')
let checkBtn = document.querySelector(`.main form .btns button[type='submit']`)
let resetBtn = document.querySelector(`.main form .btns button[type='reset']`)
let matchState = document.querySelector('div.match')
let matchStateResult = document.querySelector('div.match .msr')
let valid = document.querySelector('i.fa-check')
let invalid = document.querySelector('i.fa-times')

checkBtn.onclick = function (e) {
    let form = document.forms[0];
    e.preventDefault()
    let regex = regexInput.value;
    let link = regexApply.value;
    if (link.match(regex)) {
        valid.style.visibility = 'visible';
        invalid.style.visibility = 'hidden';
        regexApply.style.border = '2px solid green';
        matchStateResult.innerHTML = 'Valid';
        matchStateResult.style.color = 'green';
    } else {
        invalid.style.visibility = 'visible';
        valid.style.visibility = 'hidden';
        regexApply.style.border = '2px solid red';
        matchStateResult.innerHTML = 'Invalid';
        matchStateResult.style.color = 'red';
    }
}

resetBtn.onclick = function () {
    regexApply.style.border = 'none';
    valid.style.visibility = 'hidden';
    invalid.style.visibility = 'hidden';
    matchStateResult.innerHTML = '-';
}
