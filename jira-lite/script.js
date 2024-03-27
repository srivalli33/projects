//selections

let addCardBtn=document.querySelector("#addCard");
let todoContainer=document.querySelector("#todo");

addCardBtn.addEventListener("click",addTask);

function addTask(){
    let card=document.createElement("div")
    card.className="card"
    card.innerText="Test Card"
    card.setAttribute("contenteditable","true")
    todoContainer.append(card)
   card.focus();// it means pointer is automatically there for you.we can start writing it.

    //pointer will be in editable zone automatically.

    //problem:1 empty card should automatically be removed

    //blur-focus lost
    card.addEventListener("blur",(eventDetails)=>{
        let blurredCard=eventDetails.target;
        if(blurredCard.innerText.trim()==""){
            blurredCard.remove();
        }
})
//problem 2:make default text empty
card.addEventListener("click",(eventDetails)=>{
    let clickedCard = eventDetails.target;
    console.log(clickedCard);
    if(clickedCard.innerText.trim()==`Test Card`){
        clickedCard.innerText=="";
    }
})
let selector = document.createElement("select")
selector.innerHTML =`
<option value = "todo">todo</option>
<option value = "progress">Progress</option>
<option value = "done">Done</option>
`

card.append(selector)

selector.addEventListener("change",(eventDetails)=>{
    let selectedoption=eventDetails.target.value //todo1 progress1 done1
    let selectedContainer=document.querySelector(`#${selectedoption}`)
    selectedContainer.append(card);
})
}