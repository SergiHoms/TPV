    let buttonPay = document.querySelector(".pay-button")
    let page = document.querySelector(".page")
    let modal = document.querySelector(".delete-ticket-box")

    if(buttonPay){
        buttonPay.addEventListener("click", function(){
            page.classList.add("active")
            modal.classList.add("active")
        })
    }

    

        
    