 // Select button
const themeToggle = document.getElementById("theme-toggle");
const modeToggle = document.getElementById('mode-toggle');

 // Function to toggle theme
 function toggleTheme() {
     document.body.classList.toggle("dark-mode");

     // Save theme preference in localStorage
     if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        modeToggle.src = 'assets/light_mode.png';

     } else {
        localStorage.setItem("theme", "light");
        modeToggle.src = 'assets/dark_mode.png';

     }
 }

 // Load theme from localStorage
    window.onload = function () {
        if (localStorage.getItem("theme") === "dark") {
         document.body.classList.add("dark-mode");
         modeToggle.src = 'assets/light_mode.png';
        }
    };

 // Add event listener
 themeToggle.addEventListener("click", toggleTheme);






 const texts = ["JavaScript Developer", "React Js Developer", "Node.js Developer", "Responsive Web Designer","Frontend Developer", "Full Stack Developer"];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeEffect() {
            const typingElement = document.getElementById("typing");
            const currentText = texts[textIndex];

            if (!isDeleting) {
                typingElement.innerHTML = currentText.substring(0, charIndex);
                charIndex++;

                if (charIndex > currentText.length) {
                    isDeleting = true;
                    setTimeout(typeEffect, 1000); // Pause before deleting
                    return;
                }
            } else {
                typingElement.innerHTML = currentText.substring(0, charIndex);
                charIndex--;

                if (charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length; // Move to next string
                }
            }

            setTimeout(typeEffect, isDeleting ? 50 : 100);
        }

        typeEffect(); // Start animation



const filterList = document.querySelector('.filter');
const filterButtons = filterList.querySelectorAll('.filter-btn');
const conferences = document.querySelectorAll('.conference');

filterButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const filter = e.target.getAttribute('data-filter');

        document.startViewTransition(() => {
            updateActiveButton(e.target);  
            filterConf(filter);
        })
        
    })
})

function updateActiveButton(newButton){
    filterList.querySelector('.active').classList.remove('active');
    newButton.classList.add('active');
}

function filterConf(confFilter){
    conferences.forEach((conf) => {
        const confCategory = conf.getAttribute('data-category');   
        if(confFilter === 'all' || confFilter === confCategory){
            conf.removeAttribute('hidden');
        }     
        else{
            conf.setAttribute('hidden', '');
        }
    })

}



// Nav active button 

const navList = document.querySelector('.nav-list');
const navItems = navList.querySelectorAll('.nav-items');
navItems.forEach((button) => {
    button.addEventListener('click', (e) =>{
        updateNavActiveButton(e.target);
    })
})
function updateNavActiveButton(button){
    button.addEventListener('click', (e) =>{
        navList.querySelector('.active').classList.remove('active');
        button.classList.add('active');
    })
}