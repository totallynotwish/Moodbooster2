document.addEventListener("DOMContentLoaded", () => {
  const happyInput = document.getElementById("happyInput");
  const submitBtn = document.getElementById("submitBtn");
  const responseDiv = document.getElementById("response");

  // Sample data types flex for fun console vibes
  const sampleString = "Happy vibes only!";
  const sampleNumber = 42;
  const sampleBoolean = true;
  const sampleNull = null;
  let sampleUndefined;
  const sampleArray = ["smile", "laugh", "joy"];
  const sampleObject = { mood: "happy", energy: "high" };
  function sampleFunction() {
    return "Keep smiling!";
  }

  console.log("=== Happy Page Data Types ===");
  console.log("String:", sampleString, "| Type:", typeof sampleString);
  console.log("Number:", sampleNumber, "| Type:", typeof sampleNumber);
  console.log("Boolean:", sampleBoolean, "| Type:", typeof sampleBoolean);
  console.log("Null:", sampleNull, "| Type:", typeof sampleNull, "(JS quirk!)");
  console.log("Undefined:", sampleUndefined, "| Type:", typeof sampleUndefined);
  console.log(
    "Array:",
    sampleArray,
    "| Type:",
    typeof sampleArray,
    "| Is array?",
    Array.isArray(sampleArray)
  );
  console.log("Object:", sampleObject, "| Type:", typeof sampleObject);
  console.log("Function:", sampleFunction, "| Type:", typeof sampleFunction);
  console.log("=============================");

  submitBtn.addEventListener("click", () => {
    const userSmile = happyInput.value.trim();

    if (userSmile === "") {
      responseDiv.textContent = "Please share something that made you smile!";
      console.warn("User tried to submit empty smile input.");
      return;
    }

    responseDiv.textContent = `That's awesome! Keep smiling because: "${userSmile}" 🌟`;
    console.log(
      `User shared a smile: "${userSmile}" | Type: ${typeof userSmile}`
    );

    // Bonus: log calling sample function and object property
    console.log(sampleFunction());
    console.log("Mood from sample object:", sampleObject.mood);
  });
});
