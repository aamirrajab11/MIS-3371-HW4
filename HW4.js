/*
Program Name: Aamir's HW 4
    Author Name: Aamir Rajab
    Date Created: 01/30/2026
    Date last Modified: 02/07/2026
    Version: 1.0
    Description: This is Aamir's JS Code for HW4
*/

//dynamic date js code//
const d = new Date();
let text= d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//range slider js code//
let slider = document.getElementById("range")
let output = document.getElementById("range-slider")
output.innerHTML = slider.value

slider.oninput = function() {output.innerHTML = this.value;}

//First name validate js code
function validateFname() {
    fname = document.getElementById("fname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    //checks if the first name is not empty
    if (fname == "") {
        document.getElementById("fname-error").innerHTML = "First name field cannot be empty"
        return false;
    } else if (fname != "") {
        if (!fname.match(namePattern)) {
        document.getElementById("fname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    } else if (fname.length < 2) {//checks if name is less than 2 characters
        document.getElementById("fname-error").innerHTML = "First name cannot be less than 2 characters.";
        return false;
    } else if (fname.length > 30) {//checks if name is more than 30 characters
        document.getElementById("fname-error").innerHTML = "First name cannot be more than 30 characters.";
        return false;
    } else {
        document.getElementById("fname-error").innerHTML = "";
        return true;
    }
}
}
//validate last name
function validateLname() {
    lname = document.getElementById("lname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    if (lname == "") {
        document.getElementById("lname-error").innerHTML = "Last name field cannot be empty"
        return false;
    } else if (lname != "") {
        if (!lname.match(namePattern)) {
        document.getElementById("lname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    } else if (lname.length < 2) {
        document.getElementById("lname-error").innerHTML = "Last name cannot be less than 2 characters.";
        return false;
    } else if (lname.length > 30) {
        document.getElementById("lname-error").innerHTML = "Last name cannot be more than 30 characters.";
        return false;
    } else {
        document.getElementById("lname-error").innerHTML = "";
        return true;
    }
}
}
//validate middle initial
function validateMini() {
    mini = document.getElementById("mini").value;
    var namePattern = /^[A-Z]+$/;

    mini = mini.toUpperCase();
    document.getElementById("mini").value = mini;

    if (!mini.match(namePattern)) {
        document.getElementById("mini-error").innerHTML = 
        "Middle initial must be a single uppercase letter";
        return false;
    } else {
        document.getElementById("mini-error").innerHTML = "";
        return true;
    }
}

function validateDob(){
    dob=document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate= new Date().setFullYear(new Date()-120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML="Date cannot be in the future."
        dob.value="";
        return false;
    } else if (date < new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML="Date cannot be more than 120 years ago"
        dob.value="";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML =""
        return true
    }
}

function validateSSN(){
    const ssn = document.getElementById("ssn").value; 
    //regx for ssn pattern thing
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

     if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = 
        "Please enter a valid SSN";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}

// zip code  validation js code
function validateAddress1(){
    var ad1= document.getElementById("address1").value;
    console.log(ad1);
    console.log(ad1.length);

    if (ad1.length <2){
        document.getElementById("address1-error").innerHTML=
        "Please enter something on address line.";
        return false;
    } else{
        document.getElementById("address1-error").innerHTML ="";
        return true;
    }
}
function validateCity() {
    city = document.getElementById("city").value.trim();

    if (!city) {
        document.getElementById("city-error").innerHTML = "City can't be blank";
        return false;
    } else {
        document.getElementById("city-error").innerHTML = "";
        return true;
    }
}

// zipcode validation js code
function validateZcode() {
    const zipInput = document.getElementById("zcode");
    let zip = zipInput.value.replace(/[^\d-]/g, ""); // removes any non-numbers and non-dash characters

    if (!zip) {
        document.getElementById("zcode-error").innerHTML = 
        "Zip code can't be blank";
        return false;
    }

    if (zip.length > 5) {
        zip = zip.slice(0, 5) + "-" + zip.slice(5, 9);
    } else {
        zip = zip.slice(0, 5);
    }

    zipInput.value = zip;
    document.getElementById("zcode-error").innerHTML = "";
    return true;
}

//email validation js code
function validateEmail(){
    email = document.getElementById("email").value;
    var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if (email =="") {
        document.getElementById("email-error").innerHTML = "Email cannot be empty";
        return false;
    } else if(!email.match(emailR)) {
        document.getElementById("email-error").innerHTML = "Please enter a valid email address";
        return false;
    } else {
        document.getElementById("email-error").innerHTML = "";
        return true;
    }
}

// phone number validation js code
function validatePhone(){
    const phoneInput = document.getElementById("phnum");
    const phone = phoneInput.value.replace(/\D/g, "");

    if (phone.length !==10){
        document.getElementById("phnum-error").innerHTML = "Phone number cannot be left blank.";
        return false;
    }

   const formattedPhone= 
   phone.slice(0, 3) + "-" + phone.slice (3, 6) + "-" + phone.slice(6);
    phoneInput.value = formattedPhone;
    document.getElementById("phnum-error").innerHTML = "";
    return true;
    }  

    // username validation js code
    function validateUname() {
    uname = document.getElementById("uname").value.toLowerCase();
    document.getElementById("uname").value = uname;

    if (uname.length == 0) {
        document.getElementById("uname-error").innerHTML = 
        "User ID can't be blank";
        return false;
    }
    if (!isNaN(uname.charAt(0))) {
        document.getElementById("uname-error").innerHTML = 
        "User ID can't start with a number";
        return false;
    }

    //checks that username consists of only letters, nuumbers, or underscores
    let regex = /^[a-zA-Z0-9_-]+$/;
    if (!regex.test(uname)) {
        document.getElementById("uname-error").innerHTML = 
        "User ID can only have letters, numbers, underscores, and dashes";
        return false;
    } else if (uname.length < 5) {
        document.getElementById("uname-error").innerHTML = 
        "User ID must be at least 5 characters";
        return false;
    } else if (uname.length > 30) {
        document.getElementById("uname-error").innerHTML = 
        "User ID can't exceed 30 characters";
        return false;
    } else {
        document.getElementById("uname-error").innerHTML = "";
        return true;
    }
}

function validatePassword() {
    const pword = document.getElementById("pword").value;
    const uname = document.getElementById("uname").value;

    //sets up and initalizes array
    const errorMessage = [];

    //checks for lowercase letters
    if (!pword.match(/[a-z]/)) {
        errorMessage.push("Enter at least one lowercase letter");
    }
    //checks for uppercase letters
    if (!pword.match(/[A-Z]/)) {
        errorMessage.push("Enter at least one uppercase letter");
    }
    //checks for numbers letters
    if (!pword.match(/[0-9]/)) {
        errorMessage.push("Enter at least one Number");
    }
    //checks for special characters
    if (!pword.match(/[!\@#\$%&*\-_\\.+\(\)]/)) {
        errorMessage.push("Enter at least one special character");
    }
    //checks for username not in password
    if (pword == uname || pword.includes(uname)) {
        errorMessage.push("Password cannot contain username");
    }
    //displays error message if theres errors
    const errorContainer = document.querySelector(".pword-message");
    errorContainer.innerHTML = errorMessage
    .map((message) => `<span>${message}</span><br>`)
    .join("");
}

    //confirm password
    function confirmPassword() {
    pword1 = document.getElementById("pword").value;
    pword2 = document.getElementById("con_pword").value;

    if (pword1 !== pword2) {
        document.getElementById("pword2-error").innerHTML = 
        "Passwords don't match";
        return false;
    } else {
        document.getElementById("pword2-error").innerHTML = 
        "Passwords match";
        return true;
    }
}

    //re-display user input back to user (review button)
    function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput = "<table class='output'><tr><th colspan='3'>Review Your Information:</th></tr>";

    for (var i = 0; i < formcontent.elements.length; i++) {
        var el = formcontent.elements[i];
        var datatype = el.type;
        var name = el.name;
        var value = el.value;

        // skip elements with no name
        if (!name) continue;

        switch (datatype) {
            case "checkbox":
                if (el.checked) {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>&#x2713;</td></tr>";
                }
                break;

            case "radio":
                if (el.checked) {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                }
                break;

            case "range":
                // Only show the slider if the user moved it off the default (0)
                if (value !== "0") {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                }
                break;

            case "button":
            case "submit":
            case "reset":
                // skip
                break;

            default:
                if (value !== "") {
                    formoutput += "<tr><td align='right'>" + name + "</td>";
                    formoutput += "<td class='outputdata'>" + value + "</td></tr>";
                }
        }
    }

            formoutput += "</table>";
            document.getElementById("showInput").innerHTML = formoutput;
}

             //remove user input
            function removeReview() {
            document.getElementById("showInput").innerHTML = "";
}

//shows alert box when necessary
function showAlert() {
    var alertBox = document.getElementById("alert-box");
    var closeAlert = document.getElementById("close-alert");

    alertBox.style.display = "block";
    closeAlert.onclick = function() {
        alertBox.style.display = "none";
    };
}

//validate everything on form
function validateEverything() {
    let valid = true;

    if (!validateFname()) {
        valid = false;
    }
    if (!validateMini()) {
        valid = false;
    }
    if (!validateLname()) {
        valid = false;
    }
    if (!validateDob()) {
        valid = false;
    }
    if (!validateSSN()) {
        valid = false;
    }
    if (!validateAddress1()) {
        valid = false;
    }
    if (!validateCity()) {
        valid = false;
    }
    if (!validateZcode()) {
        valid = false;
    }
    if (!validateEmail()) {
        valid = false;
    }
    if (!validatePhone()) {
        valid = false;
    }
    if (!validateUname()) {
        valid = false;
    }
    if (!validatePassword()) {
        valid = false;
    }
    if (!confirmPassword()) {
        valid = false;
    }
     if (valid) {
         document.getElementById("submit").disabled = false;
     } else{
        showAlert();
     }
}
   // when the cookies expires 
function setCookie(name, cvalue, expiryDays) {
    var day = new Date();
    day.setTime(day.getTime() + (expiryDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + day.toUTCString();
    document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";
}

// retrieves the value of a cookie by its name.
 function getCookie(name) {
    var cookieName = name + "=";
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(cookieName) == 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}

var inputs = [
    { id: "fname", cookieName: "firstName"},
    { id: "lname", cookieName: "lastName"},
    { id: "mini", cookieName: "middleInitial"},
    { id: "dob", cookieName: "dateOfBirth"},
    { id: "ssn", cookieName: "ssn"},
    { id: "email", cookieName: "email"},
    { id: "phnum", cookieName: "phoneNumber"},
    { id: "uname", cookieName: "username"},      
    { id: "address1", cookieName: "address1"},
    { id: "city", cookieName: "city"},
    { id: "zcode", cookieName: "zipCode"}   
];                      

inputs.forEach(function (input) {
    var inputElement = document.getElementById(input.id);

    // Prefill input fields
    var cookieValue = getCookie(input.cookieName);
    if (cookieValue !== "") {
        inputElement.value = cookieValue;
    }

    // Set a cookie when the input field changes
    inputElement.addEventListener("input", function () {
        setCookie(input.cookieName, inputElement.value, 30);
    });
});

fetch("https://api.quotable.io/random")

.then(function(response) {
    return response.json();
})

.then(function(data) {

    var firstName = getCookie("firstName");
    if (firstName !== "") {

    var returningUser = confirm(
        "Welcome back " + firstName +
        ".\n\nPress OK to continue or Cancel if this isn't you."
    );

    if (!returningUser) {

        inputs.forEach(function(input) {
            setCookie(input.cookieName, "", -1);
        });

        location.reload();
    }
}

    if (firstName !== "") {

        document.getElementById("welcome1").innerHTML =
        "Welcome back, " + firstName + "!<br>" +
        "Daily Wellness Quote: " + data.content;

        document.getElementById("welcome2").innerHTML =
        "<a href='#' id='new-user'>Not " +
        firstName +
        "? Click here to start a new form.</a>";

    } else {

        document.getElementById("welcome1").innerHTML =
       "Welcome to Reefs Medical Clinic!<br>" +
        "Daily Wellness Quote: " + data.content;
    }

    var newUserLink = document.getElementById("new-user");

    if (newUserLink) {

        newUserLink.addEventListener("click", function () {

            inputs.forEach(function(input) {
                setCookie(input.cookieName, "", -1);
            });

            location.reload();
        });
    }
})

.catch(function(error) {

    console.log("Fetch API Error:", error);

    document.getElementById("welcome1").innerHTML =
    "Welcome to Reefs Medical Clinic.";
});
//toggles cookie storage based on the "Remember Me" checkbox state.
document.getElementById("remember-me").addEventListener("change", function () {
    const rememberMe = this.checked;

    if (!rememberMe) {
        // If "Remember Me" is unchecked, delete cookies
        deleteAllCookies();
        console.log("All cookies deleted because 'Remember Me' is unchecked.");
    } else {
        // If "Remember Me" is checked or rechecked, save cookies
        inputs.forEach(function (input) {
            const inputElement = document.getElementById(input.id);
            if (inputElement.value.trim() !== "") {
                setCookie(input.cookieName, inputElement.value, 30);
            }
        });
        console.log("Cookies saved because 'Remember Me' is checked.");
    }
});
//removes all the stored cookies by setting their expiration date in the past
function deleteAllCookies() {
    document.cookie.split(";").forEach(function (cookie) {
        let eqPos = cookie.indexOf("=");
        let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
    });
}
//Ensures cookies are deleted if "Remember Me" is unchecked upon page load
document.addEventListener("DOMContentLoaded", function () {
    const rememberMe = document.getElementById("remember-me").checked;

    if (!rememberMe) {
        deleteAllCookies();
    }
});

// Local Storage for patient notes
const notesField = document.getElementById("notes");

// Load saved notes
if (localStorage.getItem("patientNotes")) {
    notesField.value = localStorage.getItem("patientNotes");
}

// Save notes while typing
notesField.addEventListener("input", function () {
    localStorage.setItem("patientNotes", notesField.value);
});

// Warn user before refreshing or leaving page
window.addEventListener("beforeunload", function (event) {

    event.preventDefault();

    event.returnValue = "";
});

