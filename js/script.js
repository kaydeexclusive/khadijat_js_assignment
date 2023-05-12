   const button =document.getElementById("btn-update-me");
   const para=document.getElementById("play");
   const originalText=para.innerHTML;
   let newText="I am currently learning JAVASCRIPT";
    let isTextUpdated=false;
    function addText(){
        if (isTextUpdated) {
            para.classList.add("paint")
            para.style.color = "pink"
            para.innerHTML=originalText;
            isTextUpdated=false;
            } else{
                para.classList.remove("paint")
                para.setAttribute("style","color:aqua");
                para.innerHTML=newText;
                isTextUpdated=true;
            }
    }
    button.addEventListener("click",addText);

   