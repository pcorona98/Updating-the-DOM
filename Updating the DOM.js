import "./styles.css";

/**
  Complete the `addheadings()` function here
*/
const addHeadings = () => {
  const articles = document.querySelectorAll("section.articles > article");
  for (let element of articles) {
    element.innerHTML = `<h2>${element.innerHTML}</h2>`;
    console.log(element.innerHTML);
  }
};


/**
  Complete the `styleTutorialsAndArticles()` function here
*/

  const styleTutorialsAndArticles = () => {
  const articles = document.querySelectorAll("section.articles > article");
  for (const element of articles) {
    if (element.innerHTML.includes("Tutorial")) {
      element.classList.add("tutorial");
    } else {
      element.classList.add("article");
    }
  }
};

/**
  Write the `separateAllTutorials()` function here
*/
function separateAllTutorials() {
  const articles = document.querySelectorAll("article");
  const articlesSection = document.querySelector(".articles");
  const arts = [];
  const tutorials = [];
  for (let article of articles) {
    if (article.innerHTML.includes("Article")) {
      arts.push(article);
    }
    if (article.innerHTML.includes("Tutorial")) {
      tutorials.push(article);
      articlesSection.removeChild(article);
    }
  }

  if (tutorials.length) {
    const tutorialsSection = document.createElement("section");
    tutorialsSection.classList.add("tutorials");
    tutorials.forEach((tutorial) => tutorialsSection.appendChild(tutorial));
    document.querySelector(".container").appendChild(tutorialsSection);
  }
}

/**
  No need to edit the following
*/
function main() {
  addHeadings();
  styleTutorialsAndArticles();
  separateAllTutorials();
}

main();
