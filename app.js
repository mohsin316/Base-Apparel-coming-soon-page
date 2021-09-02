const form = document.querySelector('form')




//event listener 


form.addEventListener('submit', e =>{
    e.preventDefault()
    const email = form.email.value
    
    if(!validateEmail(email)){
        form.classList.add('error')
        form.classList.remove('success')
    }else{
        form.classList.remove('error')
        form.classList.add('success')
    }
})



//form validation function

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


