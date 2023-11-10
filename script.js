document.getElementById("submit-button").addEventListener("click", function() {
    var codeInput = document.getElementById("code-input").value;
    if (codeInput === "seltix") {
      window.location.href = "level2.html";
    } else {
      alert("Incorrect code word. Please try again.");
    }
  });
  