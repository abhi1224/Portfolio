 // Select button
const themeToggle = document.getElementById("theme-toggle");
const modeToggle = document.getElementById('mode-toggle');

 // Function to toggle theme
 function toggleTheme() {
     document.body.classList.toggle("dark-mode");

     // Save theme preference in localStorage
     if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        modeToggle.src = '../assets/light.png';

     } else {
        localStorage.setItem("theme", "light");
        modeToggle.src = '../assets/dark.png';

     }
 }

 // Load theme from localStorage
    window.onload = function () {
        if (localStorage.getItem("theme") === "dark") {
         document.body.classList.add("dark-mode");
         modeToggle.src = '../assets/light.png';
        }
    };

 // Add event listener
 themeToggle.addEventListener("click", toggleTheme);





// Typing text effect
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


// Project filter
const filterList = document.querySelector('.filter');
const filterButtons = filterList.querySelectorAll('.filter-btn');
const conferences = document.querySelectorAll('.conference');

filterButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const filter = e.target.getAttribute('data-filter');

        if (document.startViewTransition) {
            document.startViewTransition(() => {
                updateActiveButton(e.target);
                filterConf(filter);
            });
        } else {
            updateActiveButton(e.target);
            filterConf(filter);
        }
        
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
    button.addEventListener('click', () => {
        updateNavActiveButton(button);
    });
});

function updateNavActiveButton(button) {
    const activeButton = navList.querySelector('.active');
    if (activeButton) {
        activeButton.classList.remove('active');
    }
    button.classList.add('active');
}

// loader

const loader = document.querySelector("#loader");

window.addEventListener("load", () => {
    loader.style.top = '-200%';
})



// contact form 

const scriptURL = 'https://script.google.com/macros/s/AKfycbx9wkhIxh5zu0frAXWgCLyx1G6d5taBJ7FNNfG7mCFcmKD6-SA2hH0jXPCXoiZuvZf-NA/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        // console.log('Success!', response)
        msg.innerHTML = "Message sent successfully";
        msg.style.color = "green";
        setTimeout(function(){
            msg.innerHTML = "";
        },5000)
        form.reset();
    })
      .catch(error => {
        // console.error('Error!', error.message)
        msg.innerHTML = "Error occurred";
        msg.style.color = "red";
        setTimeout(function(){
            msg.innerHTML = "";
        },5000)
        form.reset();
      })
  })