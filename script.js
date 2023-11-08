let string = "";
// if we want to apply event listener on all buttons
// querySelectorAll will select all who has class btn
let btns = document.querySelectorAll('.btn');
// we made array of btns on which we apply forEach loop. we have applied event listener on all buttons which is whenever someone click on button, print that button.
Array.from(btns).forEach((button) => {
    button.addEventListener('click', (ele) => {
        // if someone click on =
        if(ele.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(ele.target.innerHTML == 'C'){
            string = "";
            document.querySelector('input').value = string;
        }
        else {
            console.log(ele.target);
            string = string + ele.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})