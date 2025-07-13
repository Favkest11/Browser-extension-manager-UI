let switchThemeButton=document.querySelector(".switch-theme-button");
let imgSwitchTheme=document.querySelector(".img-switch-theme");
let extensionHolder=document.querySelectorAll(".extension-holder");

   switchThemeButton.addEventListener("click", () => {
    if(imgSwitchTheme.src.includes("assets/images/icon-moon.svg")){
    imgSwitchTheme.src="assets/images/icon-sun.svg";
    

    }
    else if(imgSwitchTheme.src.includes("assets/images/icon-sun.svg")){
        imgSwitchTheme.src="assets/images/icon-moon.svg";
       
    }
    document.body.classList.toggle("white-theme");
});
let categoryButton=document.querySelectorAll(".category-button");
let sliderEx=document.querySelectorAll(".slider");
sliderEx.forEach(button =>{
button.addEventListener("click",()=>{
    button.classList.toggle("selected");
    let parent=button.closest(".extension-holder");
    if(button.classList.contains("selected")){
        parent.classList.add("active");
        parent.classList.remove("inactive");
    }
    else{
        parent.classList.add("inactive");
         parent.classList.remove("active");
    }
});
});
categoryButton.forEach(button => {
    button.addEventListener("click", () => {
        categoryButton.forEach(btn => btn.classList.remove("selected"));
        button.classList.add("selected");
        if(button.classList.contains("selected")&&button.classList.contains("active")){
            extensionHolder.forEach(div =>{
                if(div.classList.contains("active")){
                    div.classList.remove("non-visible");
                    div.classList.add("visible");
                }
                else{
                    div.classList.remove("visible");
                    div.classList.add("non-visible");
                }
            })
    }
    else if(button.classList.contains("selected")&&button.classList.contains("inactive")){
         extensionHolder.forEach(div =>{
                if(div.classList.contains("inactive")){
                    div.classList.remove("non-visible");
                    div.classList.add("visible");
                }
                else{
                    div.classList.remove("visible");
                    div.classList.add("non-visible");
                }
            })
    }
    else{
        extensionHolder.forEach(div => {
        div.classList.remove("non-visible");
        div.classList.add("visible");
      });
    }
        
    });
    
});



