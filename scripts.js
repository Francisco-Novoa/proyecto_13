document.querySelector("#alerts").classList.add("invisible");

let form=document.querySelector("form");
form.addEventListener("submit",validar);

function validar(e){
    e.preventDefault()

 ///get new elements

    let cardv,cvcv,amountv,firstnamev,lastnamev,cityv,posrtcodev,messagev,radiov,preferencev;

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

    function emptiness(elm,valuev){
        //validates emptiness
        if(validator.isEmpty(elm.value)){
            elm.classList.add("bg-danger");
            document.querySelector("#alerts").classList.remove("invisible");
        }
        else{
        elm.classList.add("bg-success");
        elm.classList.remove("bg-danger");
        valuev=true;
        }
    }

    function emptiness_numeric(elm,valuev)
        //validates emptiness and if it is numeric
    {
        if (!validator.isNumeric(elm.value)||validator.isEmpty(elm.value)){
            elm.classList.add("bg-danger");
            document.querySelector("#alerts").classList.remove("invisible");
        }
        else{
            elm.classList.add("bg-success");
            elm.classList.remove("bg-danger");
        }
    }

    //basic empty validation
    emptiness(cvc,cvcv);
    emptiness(firstname,firstnamev);
    emptiness(lastname,lastnamev);
    emptiness(city,cityv);
    emptiness(postcode,posrtcodev);
    emptiness(message,messagev);

    //basic numeric validation
    emptiness_numeric(amount,amountv);
    emptiness_numeric(card,cardv);

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
    if (!(radio1.checked)&&!(radio2.checked)&&!radio3.checked&&!radio4.checked) {
        radio1.classList.add("bg-danger");
        radio2.classList.add("bg-danger");
        radio3.classList.add("bg-danger");
        radio4.classList.add("bg-danger");
        document.querySelector("#alerts").classList.remove("invisible");
    }
    else{
        radio1.classList.remove("bg-danger");
        radio2.classList.remove("bg-danger");
        radio3.classList.remove("bg-danger");
        radio4.classList.remove("bg-danger");
    }
    
}