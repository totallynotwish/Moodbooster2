document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("angryInput");
  const submitBtn = document.getElementById("submitBtn");
  const outputDiv = document.getElementById("response");

  submitBtn.addEventListener("click", () => {
    const userText = inputField.value.trim();

    if (userText.length === 0) {
      outputDiv.textContent = "Yo, spill the tea on what chills you out!";
      console.warn("Empty input — no chill yet.");
      return;
    }

    outputDiv.textContent = `Got it!  "${userText}". I feel that rage of yours!`;

    console.clear();
    console.log("🔥 Check out these JS types: 🔥");

    // String example
    let moodString = "Anger is energy waiting for a plan.";
    console.log("String value:", moodString, "| Type:", typeof moodString);

    // Number example
    let rageMeter = 7.5;
    console.log("Number value:", rageMeter, "| Type:", typeof rageMeter);

    // Boolean example
    let isFuming = true;
    console.log("Boolean value:", isFuming, "| Type:", typeof isFuming);

    // Null example
    let calmState = null;
    console.log("Null value:", calmState, "| Type:", typeof calmState);

    // Undefined example
    let mysteryVar;
    console.log("Undefined value:", mysteryVar, "| Type:", typeof mysteryVar);

    // Object example
    let emotions = { anger: "high", coping: userText };
    console.log("Object:", emotions, "| Type:", typeof emotions);

    // Array example
    let feelingsArray = ["rage", 100, false];
    console.log("Array:", feelingsArray, "| Type:", typeof feelingsArray);

    // Symbol example
    let powerSymbol = Symbol("storm");
    console.log("Symbol:", powerSymbol, "| Type:", typeof powerSymbol);

    // Convert input to string (just to flex)
    let inputAsString = String(userText);
    console.log("Your input as string:", inputAsString);

    // Check if input is empty (should be false)
    let emptyCheck = userText === "";
    console.log("Is your input empty?", emptyCheck);

    // Random anger score between 1-10
    let angerScore = Math.floor(Math.random() * 10) + 1;
    console.log("Your random anger score:", angerScore);
  });
});
