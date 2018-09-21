function idCard() {
    //Setting up variables
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let address = document.getElementById("address").value;
    let phoneNumber = parseInt(document.getElementById("phoneNumber").value);
    let age = parseInt(document.getElementById("age").value);

    let numberArray = [];
    numberArray.push(age);
    numberArray.push(phoneNumber);

    for (var i = 0; i < numberArray.length; i++) {
        if (numberArray[i] <= 100) {
            document.getElementById("postAge").innerHTML = "Age: " + numberArray[i];
        } 
        else if (numberArray[i] >= 100) {
            document.getElementById("postPhoneNumber").innerHTML = "Phone Number: " + numberArray[i];
        }
    }

    //Posting the values into the ID Card
    document.getElementById("postFullName").innerHTML = firstName + " " + lastName;
    document.getElementById("postAddress").innerHTML = address;
}