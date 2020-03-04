document.querySelector("#alerts").classList.add("invisible");

let form=document.querySelector("form");
form.addEventListener("submit",validar);

function validar(e){
    e.preventDefault()

 ///get new elements

    var cardv,cvcv,amountv,firstnamev,lastnamev,cityv,postcodev,messagev,radiov,preferencev;

    let card = document.querySelector("#card");
    let cvc = document.querySelector("#CVC");
    let amount = document.querySelector("#amount");
    let firstname = document.querySelector("#firstname");
    let lastname = document.querySelector("#lastname");
    let city = document.querySelector("#city");
    let postcode = document.querySelector("#postcode");
    let message = document.querySelector("#message");
    let radio1 = document.querySelector("#mastercardcheck");
    let radio2 = document.querySelector("#visacheck");
    let radio3 = document.querySelector("#empirecheck");
    let radio4 = document.querySelector("#rebelcheck");
    let preference = document.querySelector("#preference");

    function emptiness(elm){
        //validates emptiness
        if(!validator.isAlpha(elm.value)||validator.isEmpty(elm.value)){
            elm.classList.add("bg-danger");
            document.querySelector("#alerts").classList.remove("invisible");
            return false;
        }
        else{
        elm.classList.add("bg-success");
        elm.classList.remove("bg-danger");
        return true;
        }
    }

    function emptiness_numeric(elm)
        //validates emptiness and if it is numeric
    {
        if (!validator.isNumeric(elm.value)||validator.isEmpty(elm.value)){
            elm.classList.add("bg-danger");
            document.querySelector("#alerts").classList.remove("invisible");
            return false;
        }
        else{
            elm.classList.add("bg-success");
            elm.classList.remove("bg-danger");
            return true;
        }
    }

    //basic empty validation
    cvcv=emptiness(cvc);
    firstnamev=emptiness(firstname);
    lastnamev=emptiness(lastname);
    cityv=emptiness(city);
    postcodev=emptiness(postcode);
    messagev=emptiness(message);

    //basic numeric validation
    amountv=emptiness_numeric(amount);
    cardv=emptiness_numeric(card);

    //check dropdown validation
     if (preference.value == "0") {
         preference.classList.add("bg-danger");
         document.querySelector("#alerts").classList.remove("invisible");
     }
     else{
         preference.classList.add("bg-success");
         preference.classList.remove("bg-danger");
         preferencev=true
     }

    //check radio validation
    if (!radio1.checked&&!radio2.checked&&!radio3.checked&&!radio4.checked) {
        radio1.classList.add("is-invalid");
        radio2.classList.add("is-invalid");
        radio3.classList.add("is-invalid");
        radio4.classList.add("is-invalid");
        document.querySelector("#alerts").classList.remove("invisible");
    }
    else{
        radio1.classList.remove("is-invalid");
        radio2.classList.remove("is-invalid");
        radio3.classList.remove("is-invalid");
        radio4.classList.remove("is-invalid");
        radiov=true;
    }                                 
    console.log(cardv);
    console.log(cvcv);
    console.log(amountv);
    console.log(firstnamev);
    console.log(lastnamev);
    console.log(cityv);
    console.log(postcodev);
    console.log(messagev);
    console.log(radiov);
    console.log(preferencev);
    console.log("final")
 

    if(cardv===true && cvcv===true && amountv===true && firstnamev===true && lastnamev===true && cityv===true && postcodev===true && messagev===true && radiov===true && preferencev===true){
        alert("enviado")
        console.log("llegue al final!")
        e.target.submit()
        } 
    
}