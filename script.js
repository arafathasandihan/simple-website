document.getElementById("inputForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const userInput = document.getElementById("userInput").value;
    
    // Correct Web App URL
    fetch("https://script.google.com/macros/s/AKfycbzmsSn8XaMqf44hNioB3zI5bTb8H1idyDTm7Qwyn7akjrQAQujH-jCl3optR7SO3b5WWw/exec", {
        method: "POST",
        body: JSON.stringify({ message: userInput }),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === "success") {
            document.getElementById("responseMessage").textContent = "Message saved successfully!";
            document.getElementById("userInput").value = "";
        }
    })
    .catch(error => console.error("Error:", error));
});
