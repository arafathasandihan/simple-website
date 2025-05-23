document.getElementById("inputForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const userInput = document.getElementById("userInput").value;
    
    fetch("fetch("https://script.google.com/macros/s/AKfycbxOhf6FWf4G5J7x2MhkiVFQdHQc6XmtqSUhtq5Jj4iCBdhN84F2q2i7n94vyzl2kPpdvQ/exec", {
", {
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
