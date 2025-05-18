document.getElementById("inputForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const userInput = document.getElementById("userInput").value;
    
    // Correct Web App URL
    fetch("https://script.google.com/macros/s/AKfycbz9KUvJBPltVyvk1BgDFFxmq3uatx10GAKuPBJCH8mc/exec", {
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
