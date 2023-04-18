// Contact Us Form sending message

function send_form(){
    document.getElementById("form_outcome").innerHTML="Form has been sent successfully!"
}

// Login form validation

function login(){
    document.getElementById("loginform")
    
    
        if (counter % 2 == 0) {
            if(document.getElementById("loginform").checkValidity()){
                alert('You have been logged out!')
            } else {
                alert('Form Invalid')
            }
        } else {
            alert('You have been logged in!'); 
        }
    counter += 1;

    
    
}

// Shop Filters Javascript

function cancels(){
    document.getElementById("adidas").hidden=false
    document.getElementById("nike").hidden=false
    document.getElementById("vans").hidden=false
    document.getElementById("puma").hidden=false
    document.getElementById("newbalance").hidden=false
}

function adidas(){
    document.getElementById("adidas").hidden=false
    document.getElementById("nike").hidden=true
    document.getElementById("vans").hidden=true
    document.getElementById("puma").hidden=true
    document.getElementById("newbalance").hidden=true
}

function vans(){
    document.getElementById("vans").hidden=false
    document.getElementById("nike").hidden=true
    document.getElementById("adidas").hidden=true
    document.getElementById("puma").hidden=true
    document.getElementById("newbalance").hidden=true
}

function nike(){
    document.getElementById("nike").hidden=false
    document.getElementById("adidas").hidden=true
    document.getElementById("vans").hidden=true
    document.getElementById("puma").hidden=true
    document.getElementById("newbalance").hidden=true
}

function puma(){
    document.getElementById("puma").hidden=false
    document.getElementById("nike").hidden=true
    document.getElementById("adidas").hidden=true
    document.getElementById("vans").hidden=true
    document.getElementById("newbalance").hidden=true
}

function newbalance(){
    document.getElementById("newbalance").hidden=false
    document.getElementById("nike").hidden=true
    document.getElementById("adidas").hidden=true
    document.getElementById("vans").hidden=true
    document.getElementById("puma").hidden=true
}


