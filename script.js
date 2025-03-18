let buttons = document.querySelectorAll(".btn")
let display = document.querySelector(".display")

buttons.forEach(button => {
    button.addEventListener("click", () => { 
        const pressButtton = button.textContent;

        if(button.id === "del"){
            if(display.textContent.length === 1 || display.textContent === "Syntax Error!"){
                display.textContent = "0";
            } else {
                display.textContent = display.textContent.slice(0, -1);
            }
            return;
        } 

        if(button.id === "c"){
            display.textContent = "0";
            return;
        }
        
        if(button.id === "res"){
            try{
                display.textContent = eval(display.textContent);
            } catch {
                display.textContent = "Syntax Error!"
            }
            return;
        }

        if(display.textContent === "0"){
            display.textContent = pressButtton;
        }else{
            display.textContent += pressButtton;
        }
    }); 
});




