
let plus = document.getElementById("NumIncrease");
let minus = document.getElementById("NumDecrease");
let reset = document.getElementById("Reset");

let text1 = document.getElementById("text1");


let count = 0;

plus.addEventListener('click' , () => {
   
    count++;
    text1.textContent = count;

});


minus.addEventListener('click', () => {
    if(count > 0)
    {
        count--;
    }
    
    
    text1.textContent = count;
    
});

reset.addEventListener('click' , () => {
    count = 0;
    text1.textContent = count;

   
});

plus.addEventListener('click' , () =>{
    text1.style.color = "darkgreen";
});

minus.addEventListener('click' , () => {
    text1.style.color = "red";
});

reset.addEventListener('click' , () =>{
    text1.style.color = "grey";
});







 
 
 


    


    
    

