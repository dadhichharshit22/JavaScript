 // Handling Click Event
 document.getElementById("clickButton").addEventListener("click", function() {
    document.getElementById("clickMessage").textContent = "Button clicked!";
});

// Handling Input Event
document.getElementById("inputField").addEventListener("input", function() {
    let inputText = document.getElementById("inputField").value;
    document.getElementById("inputMessage").textContent = "You typed: " + inputText;
});

// Handling Mouseover Event
document.getElementById("hoverBox").addEventListener("mouseover", function() {
    document.getElementById("hoverMessage").textContent = "You are hovering over the box!";
});

// Handling Mouseout Event (reset message)
document.getElementById("hoverBox").addEventListener("mouseout", function() {
    document.getElementById("hoverMessage").textContent = "Hover over the box to trigger an event.";
});