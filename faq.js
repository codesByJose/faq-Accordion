const question = document.querySelector(".questions")
const minusImage = document.querySelectorAll("#minus")
const hiddenText = document.querySelectorAll("#hidden")
const plusImage = document.querySelectorAll("#plus");

plusImage.forEach((plus, index)=>{
    plus.addEventListener("click", ()=>{
        hideAll()
       hiddenText[index].style.display = "block"
       plus.style.display = "none"
       minusImage[index].style.display = "block"
    })
});

minusImage.forEach((minus, index)=>{
    minus.addEventListener("click", ()=>{
        hideAll()
       hiddenText[index].style.display = "none"
       minus.style.display = "none";
       plusImage[index].style.display = "block"

    })
});

function hideAll(){
    hiddenText.forEach(hidden => hidden.style.display = "none");
    plusImage.forEach(plus => plus.style.display = "block");
    minusImage.forEach(minus => minus.style.display = "none");

}











