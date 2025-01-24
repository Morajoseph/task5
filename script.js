document.addEventListener("DOMContentLoaded", () => {
    const icon = document.getElementById("icon"); 
    const navbar = document.querySelector(".navbar ul"); 

// navbar.style.display="none";    
    icon.addEventListener("click", () => {
        
        if (navbar.style.display === "block") {
            navbar.style.display = "none"; 
            icon.src="images/icon-hamburger.svg";
        } else {
            navbar.style.display = "block";
            icon.src="images/icon-close.svg";
        }
      
    });
});