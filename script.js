document.getElementById("inputForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const userInput = document.getElementById("userInput").value;

    // Here you can add code to send the input to your email
    console.log("User Input: ", userInput);
    document.getElementById("responseMessage").textContent = "Message submitted successfully!";
    document.getElementById("userInput").value = "";
});
