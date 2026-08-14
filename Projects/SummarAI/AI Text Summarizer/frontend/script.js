const summarizeButton = document.getElementById("summarizeButton");
const textInput = document.getElementById("textInput");
const summaryOutput = document.getElementById("summaryOutput");

summarizeButton.addEventListener("click", async function () {

    const text = textInput.value;

    try {
        const response = await fetch("http://127.0.0.1:5000/summarize", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text: text
            })
        });

        const data = await response.json();

        console.log("Backend response:", data);
        console.log("Summary:", data.summary);

        summaryOutput.textContent = data.summary;

    } catch (error) {
        console.error("Error:", error);
    }

});