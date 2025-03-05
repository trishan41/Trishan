console.log("🔥 Website Loaded!");

// Sample function to fetch visitor name
function getVisitorName() {
  const name = prompt("Enter your name:");
  if (name) {
    document.getElementById("visitorName").innerText = name;
  }
}