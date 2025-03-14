document.addEventListener("DOMContentLoaded", function() {
    const resultElement = document.getElementById("prediction-result");
    const resultIcon = document.getElementById("prediction-icon");
    const description = document.getElementById("prediction-description");

    // Simulate fetching result from backend (This can be replaced with actual API call)
    // For now, it's set to simulate a delay and response

    // Simulating waiting state (You can replace this with a fetch call to your API endpoint)
    resultElement.innerHTML = "<h2 class='result-heading'>Prediction: Processing...</h2>";
    resultIcon.innerHTML = "<img src='loading-spinner.gif' alt='loading'/>"; // Or any loading animation

    // Simulating result after processing (this can be dynamically set based on your backend response)
    setTimeout(() => {
        const prediction = "Negative for TB"; // Example prediction (can be dynamic)
        const confidence = "90%"; // Example confidence (can be dynamic)

        resultElement.innerHTML = `<h2 class='result-heading'>Prediction: ${prediction}</h2>`;
        description.innerHTML = `<p>The prediction result is ${prediction} with a confidence of ${confidence}.</p>`;

        // Dynamically change icon based on prediction
        if (prediction === "Negative for TB") {
            resultIcon.innerHTML = "<img src='negative-icon.png' alt='negative' />";
        } else if (prediction === "Positive for TB") {
            resultIcon.innerHTML = "<img src='positive-icon.png' alt='positive' />";
        }

        // If you want to show further processing steps, you can update this part too.
    }, 3000); // 3 seconds to simulate processing time
});
