function idCard() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let address = document.getElementById("address").value;
    let phoneNumber = parseInt(document.getElementById("phoneNumber").value);
    let age = parseInt(document.getElementById("age").value);
    let numberArray = [];

    document.getElementById("postFullName").innerHTML = firstName + " " + lastName;

    document.getElementById("postAddress").innerHTML = address;
}