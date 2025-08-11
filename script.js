document.addEventListener("DOMContentLoaded", () => {
  const nameInput = document.getElementById("name");
  const moodOutput = document.getElementById("mood-output");
  const moodButtons = document.querySelectorAll(".mood-btn");
  const signButtons = document.querySelectorAll(".nav-buttons button");

  // Sample variables of different types to flex
  const sampleString = "MoodBooster";
  const sampleNumber = 2025;
  const sampleBoolean = true;
  const sampleNull = null;
  let sampleUndefined;
  const sampleArray = ["happy", "sad", "angry", "bored"];
  const sampleObject = { name: "Amara", role: "Student", active: true };
  function sampleFunction() {
    return "I'm a function!";
  }

  // Log all these types on page load
  console.log("=== Data Types Flex ===");
  console.log("String:", sampleString, "| Type:", typeof sampleString);
  console.log("Number:", sampleNumber, "| Type:", typeof sampleNumber);
  console.log("Boolean:", sampleBoolean, "| Type:", typeof sampleBoolean);
  console.log(
    "Null:",
    sampleNull,
    "| Type:",
    typeof sampleNull,
    "(typeof null is a JS quirk!)"
  );
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
  console.log("========================");

  // Load stored name or empty string
  const storedName = localStorage.getItem("userName");
  console.log("Stored name:", storedName, "| Type:", typeof storedName);

  let nameSubmitted = false;

  if (storedName && storedName.trim() !== "") {
    nameInput.value = storedName;
    nameSubmitted = true;
    console.log(
      `Welcome back, ${storedName}! (Boolean nameSubmitted: ${nameSubmitted})`
    );
  } else {
    console.log("No stored name or empty string found.");
  }

  // On Enter key press inside name input
  nameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const enteredName = nameInput.value.trim();
      console.log("User input:", enteredName, "| Type:", typeof enteredName);

      if (enteredName === "") {
        moodOutput.textContent = "Page says: Please enter your name first!";
        nameSubmitted = false;
        console.warn("Empty string entered — no name submitted.");
      } else {
        moodOutput.textContent = "Nice name you got there!";
        nameSubmitted = true;
        localStorage.setItem("userName", enteredName);

        const savedNameType = typeof localStorage.getItem("userName");
        console.log(
          `Saved name: ${enteredName} | Type after saving: ${savedNameType}`
        );

        console.info(
          `Keep being awesome, ${enteredName}! (Boolean nameSubmitted: ${nameSubmitted})`
        );
      }
    }
  });

  // Mood buttons clicked
  moodButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      console.log(
        "Mood button clicked:",
        btn.textContent,
        "| Name submitted:",
        nameSubmitted,
        "| Type:",
        typeof nameSubmitted
      );

      if (!nameSubmitted) {
        moodOutput.textContent =
          "Page says: Enter your name first before choosing a mood!";
        console.error("Mood clicked but no valid name yet.");
      } else {
        moodOutput.textContent = "Hey there! Good day mate!";
        console.log(
          `Mood chosen: ${btn.textContent} by user: ${
            nameInput.value
          } | Type of name input: ${typeof nameInput.value}`
        );

        // Extra example: demonstrate typeof on a function and object on button click
        console.log("Sample function call:", sampleFunction());
        console.log(
          "Sample object property - name:",
          sampleObject.name,
          "| Type:",
          typeof sampleObject.name
        );
      }
    });
  });

  // Sign In/Sign Up buttons click event
  signButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("U don't need it");
      console.warn(
        `User clicked '${btn.textContent}' button — but they don't need it!`
      );
    });
  });
});
