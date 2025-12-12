function submitBooking() {
    let name = document.getElementById("name").value;
    let destination = document.getElementById("destination").value;

    if (name === "" || destination === "") {
        alert("Please fill all fields!");
    } else {
        alert("Booking Submitted Successfully!");
    }
}
