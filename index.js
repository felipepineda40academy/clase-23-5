var input_form = document.getElementById("myForm");



var user_answer={
    "email":"", //string
    "password":"", //string
    "opt_sign_in":"", //boolean
    
}

input_form.addEventListener("submit", function(event) {

    event.preventDefault();
    var email = document.getElementById("id_input").value;
    var password = document.getElementById("id_password").value;
    var checkbox_value = document.getElementById("id_checkbox").checked?true:false;
    user_answer.email=email; 
    user_answer.password=password;
    user_answer.opt_sign_in=checkbox_value;
    console.log(user_answer);

})

