let form=document.querySelector("form");
    let name_box=document.querySelector("#name");
    let email_box=document.querySelector("#email");
    let password_box=document.querySelector("#password");
    let confirm_password_box=document.querySelector("#confirm-password");
    let btn=document.querySelector("button");
    let output=document.querySelector(".output");

    // btn.addEventListener("click",validateForm)
    form.addEventListener("submit",validateForm)

    function validateForm(eventDetails){
        eventDetails.preventDefault();
        //prevent default is such a function which pause or stop the default behaviour of an element.
        //default action of the event will not be triggered.
        let name=name_box.value;
        let email=email_box.value;
        let password=password_box.value;
        let confirm_password=confirm_password_box.value

        console.log(name,email,password,confirm_password);

        output.innerText=`Name:${name} Email:${email} Password:${password} Confirm Password:${confirm_password}`;

        //creating html element from javascript directly

        // let divElement=document.createElement("div")
        // divElement.innerText=`Name:${name} Email:${email} Password:${password} Confirm Password:${confirm_password}`;

        // output.appendChild(divElement)
        // output.prepend(divElement)


        // local storage and json

        //local storage

        //It is a feature of browser.
        //local storage will store the data in browser for sometime.
        //basically our application will communicate with the browser.so we can send information.
        //when we required, we can access it.


// json-javascript object notation.
//it is a universal language.
//json supports double quotes.

//How to convert normal javascript object to json.
let userData={
    name:name,
    email:email,
    password:password
}

let userDataJson=JSON.stringify(userData);
  console.log(userDataJson)
  //setitem will add the data in local storage.
  localStorage.setItem("user",userDataJson);
    



    }