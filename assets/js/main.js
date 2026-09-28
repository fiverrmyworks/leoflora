const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
}


const flowers = {
  january: {
    name: "Carnation",
    icon: "🌸",
    meaning: "Love, admiration and devotion."
  },

  february: {
    name: "Violet",
    icon: "💜",
    meaning: "Faithfulness, modesty and wisdom."
  },

  march: {
    name: "Daffodil",
    icon: "🌼",
    meaning: "New beginnings, hope and renewal."
  },

  april: {
    name: "Daisy",
    icon: "🌼",
    meaning: "Purity, innocence and joyful beginnings."
  },

  may: {
    name: "Lily of the Valley",
    icon: "🤍",
    meaning: "Happiness, sweetness and humility."
  },

  june: {
    name: "Rose",
    icon: "🌹",
    meaning: "Love, beauty and devotion."
  },

  july: {
    name: "Larkspur",
    icon: "💐",
    meaning: "Positivity, dignity and an open heart."
  },

  august: {
    name: "Gladiolus",
    icon: "🌺",
    meaning: "Strength, sincerity and remembrance."
  },

  september: {
    name: "Aster",
    icon: "🌸",
    meaning: "Wisdom, love and patience."
  },

  october: {
    name: "Marigold",
    icon: "🌼",
    meaning: "Warmth, creativity and determination."
  },

  november: {
    name: "Chrysanthemum",
    icon: "🌻",
    meaning: "Joy, friendship and optimism."
  },

  december: {
    name: "Narcissus",
    icon: "🌼",
    meaning: "Hope, renewal and good wishes."
  }
};


const findButton = document.getElementById("findFlower");
const birthMonth = document.getElementById("birthMonth");
const flowerResult = document.getElementById("flowerResult");

if (findButton) {

  findButton.addEventListener("click", () => {

    const month = birthMonth.value;

    if (!month) {

      flowerResult.classList.remove("hidden");

      flowerResult.innerHTML = `
        <strong>Please choose your birth month first.</strong>
      `;

      return;
    }

    const flower = flowers[month];

    flowerResult.classList.remove("hidden");

    flowerResult.innerHTML = `
      <div class="result-icon">${flower.icon}</div>

      <h3>${flower.name}</h3>

      <p>
        Your traditional birth flower represents
        ${flower.meaning}
      </p>
    `;

  });

}
