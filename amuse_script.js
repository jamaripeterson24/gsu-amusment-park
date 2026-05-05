function rideInfo(rideID, rideName) {
    alert("You clicked on the ride with the ID of: " + rideID + " and name of: " + rideName);
}

function showRides() {
    const rideNames = ["Soar Over Paulson", "Gus's Flight School", "Splashin the Boro"];
    const rideDescriptions = [
        "A 200-foot vertical drop coaster that gives you an amazing site of our beloved Paulson stadium.", 
        "A high-speed spinning thrill ride that makes you feel like an eagle.", 
        "A water adventure perfect for summer here in the boro."
    ];
    const rideImages = ["Soaring.jpeg.jpg", "Gus.jpeg.jpg", "Watercoaster.jpeg.jpg"];

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

// This checks if the container exists before running the function
if (document.getElementById("ride-container")) {
    showRides();
}

function orderTics() {
    alert("Your total price is: $35");
}
