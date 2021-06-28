var inputs = [].slice.call(document.querySelectorAll('input'));
var cube = document.querySelector('.cube');
inputs.forEach(function(input){
    if(input.getAttribute('type') !== 'submit'){
        console.log(input)
        input.addEventListener('focusin', focusInHandler);
        input.addEventListener('focusout', focusOutHandler);
    }
})
 function focusInHandler(){
     console.log(this.id + ' focus in');
     cube.style.display = "block";
 }
 function focusOutHandler(){
    console.log(this.id + ' focus out');
    cube.style.display = "none";
 }