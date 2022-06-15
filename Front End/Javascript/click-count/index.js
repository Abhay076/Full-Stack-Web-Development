var box = document.getElementById('box');
var clickCount = document.getElementById('click-count');
count = 0;
function starts(){
    count++;
    console.log(count);
    clickCount.innerText = count +" ";
}
box.addEventListener('click',starts);