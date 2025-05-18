document.getElementById("inputForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const userInput = document.getElementById("userInput").value;
    
    fetch("https://script.google.com/macros/s/AKfycbwdNPKrPnag6uLokDJYuTGo7X437X7DJp1TNJCTu8H-7H3m1QqyH2nRc1PrVpQdnuE52w/exec", {
        method: "POST",
        body: JSON.stringify({ message: userInput }),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === "success") {
            document.getElementById("responseMessage").textContent = "Message saved successfully!";
            document.getElementById("userInput").value = "";
        } else {
            console.error("Error:", data.message);
        }
    })
    .catch(error => console.error("Error:", error));
});
