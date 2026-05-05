function rideInfo(rideID, rideName) {
    alert("You clicked on the ride with the ID of: " + rideID + " and name of: " + rideName);
}
function showRides() {
    // 1. Create the arrays
    const rideNames = ["Dueling Southern Pride", "Eagle's Flight", "Flying Eagles"];
    const rideDescriptions = ["A high-speed racing coaster.", "A majestic flight above the park.", "A family-friendly glider experience."];
    const rideImages = ["images/ride1.jpg", "images/ride2.jpg", "images/ride3.jpg"];

    let content = "";

    
    for (let i = 0; i < rideNames.length; i++) {
        content += `<section>
            <h3>${rideNames[i]}</h3>
            <img src="${rideImages[i]}" class="ride-image" alt="${rideNames[i]}">
            <p>${rideDescriptions[i]}</p>
            <div style="clear: both;"></div>
        </section>`;
    }

    
    document.getElementById("ride-container").innerHTML = content;
}


if (document.getElementById("ride-container")) {
    showRides();
}
function orderTics() {
    alert("Your total price is: $35");
}
