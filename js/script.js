const data = [
    "nitrogen",
    "nitrogen cycle",
    "processes of nitrogen cycle",
    "nitrogen fixation",
    "assimilation",
    "ammonification",
    "nitrification",
    "denitrification",
];

const searchInput = document.getElementById('searchInput');
const resultsList = document.getElementById('resultsList');

function search() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredData = data.filter(item => item.toLowerCase().includes(searchTerm));

  if (filteredData.length > 0) {
      // Redirect to the corresponding section of the website
      const sectionId = searchTerm.replace(/\s+/g, '-'); // Convert spaces to hyphens
      window.location.href = `#${sectionId}`;

      // Wait for the page to settle before adjusting scroll position
      setTimeout(() => {
          const sectionElement = document.getElementById(sectionId);
          if (sectionElement) {
              // Calculate the vertical center of the viewport
              const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
              const targetScrollTop = sectionElement.offsetTop - (viewportHeight / 2) + (sectionElement.offsetHeight / 2);
              window.scroll({
                  top: targetScrollTop,
                  behavior: 'smooth' // Optional: Smooth scrolling effect
              });
          }
      }, 100); // Adjust the delay as needed
  } else {
      // Handle case when no matching section is found
      alert('No matching section found!');
  }
}




function displayResults(results) {
    resultsList.innerHTML = '';
    results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result;
        resultsList.appendChild(li);
    });
}

searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        search();
    }
});

function scrollToAboutPage() {
  var aboutPageElement = document.getElementById("aboutPage");
  // Scroll to the about page's position
  aboutPageElement.scrollIntoView({ behavior: "smooth" });
}

const textsToType = [
  "A Computer Engineering Student.",
  "A coding enthusiast.",
  "A video game enthusiast."
];

function typeText(textElement, textIndex) {
  let letterIndex = 0;

  function type() {
      if (letterIndex <= textsToType[textIndex].length) {
          textElement.textContent = textsToType[textIndex].slice(0, letterIndex) + '|';
          letterIndex++;
          setTimeout(type, 100); // Type the next letter after 100 milliseconds
      } else {
          setTimeout(() => {
              textElement.textContent = ''; // Clear the text after typing
              typeText(textElement, (textIndex + 1) % textsToType.length); // Move to the next text
          }, 300); // Wait for 1 second before moving to the next text
      }
  }

  // Start typing animation
  type();
}

// Start typing animation for each text element
typeText(document.getElementById('typingText1'), 0);
typeText(document.getElementById('typingText2'), 1);
typeText(document.getElementById('typingText3'), 2);

    

