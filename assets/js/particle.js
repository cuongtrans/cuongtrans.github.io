/* ---- particles.js config ---- */

particlesJS("particles-js", {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: ["#0045BC"],
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#808080",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },

    opacity: {
      value: 0.5,
      random: !1,
      anim: {
        enable: !1,
        speed: 1,
        opacity_min: 0.1,
        sync: !1,
      },
    },
    size: {
      value: 3,
      random: !3,
      anim: {
        enable: !1,
        speed: 10,
        size_min: 0.1,
        sync: !1,
      },
    },
    line_linked: {
      enable: !0,
      distance: 150,
      color: "#FFFFFF",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: !0,
      speed: 4,
      direction: "none",
      random: !0,
      straight: !1,
      out_mode: "out",
      bounce: !1,
      attract: {
        enable: !1,
        rotateX: 600,
        rotateY: 1200,
      },
    },
    nb: 80
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: !1,
        mode: "grab",
      },
      onclick: {
        enable: !0,
        mode: "push",
      },
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity:8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2
      },
    },
  },
  retina_detect: !0,
});

const allElements = document.querySelectorAll(".animated-text");

// It checks if there is at least one element
if (allElements.length > 0) {
  //It runs the script for each found element
  allElements.forEach((element) => {
    const txtElement = element,
      wordsList = txtElement.getAttribute("data-words"),
      words = wordsList.split(", "); // It makes an array of words from data attribute

    let wordsCount = 0;

    entry();

    // Initial function
    function entry() {
      if (wordsCount < words.length) {
        // It runs the code for each word
        let word = words[wordsCount],
          txtArr = word.split(""), // It makes an array of letters in the word
          count = 0;

        txtElement.textContent = ""; // It removes the previous text from the element

        // For each letter in the array
        txtArr.forEach((letter) => {
          // It replaces the empty space for the "non-break-space" HTML...
          // ... This is needed to separate the words properly
          let _letter = letter === " " ? "&nbsp;" : letter;

          // It wraps every letter with a "span" and puts all they back to the element
          txtElement.innerHTML += `<span>${_letter}</span>`;
        });

        let spans = txtElement.childNodes;

        // It sets the interval between each letter showing
        const letterInterval = setInterval(activeLetter, 70);

        function activeLetter() {
          spans[count].classList.add("active");
          count++;

          if (count === spans.length) {
            clearInterval(letterInterval);

            // It waits 4 seconds to start erasing the word
            setTimeout(() => {
              eraseText();
            }, 600);
          }
        }

        function eraseText() {
          // It sets the interval between each letter hiding
          let removeInterval = setInterval(removeLetter, 40);
          count--;

          function removeLetter() {
            spans[count].classList.remove("active");
            count--;

            if (count === -1) {
              clearInterval(removeInterval);
              wordsCount++;

              // After removing the last letter, call the initial function again
              entry();
            }
          }
        }
      } else {
        // If the code reaches the last word
        // It resets the words counter...
        wordsCount = 0;
        // ...and calls the initial function again.
        entry();
      }
    }
  });
}
