"use strict";

console.table(actors);

const root = document.getElementById("root");

const section = document.createElement("section");
section.classList.add("actors-section");
// section.append('qwertty')

const h1 = document.createElement("h1");
h1.classList.add("main-title");

h1.innerText = "actors";

const ul = document.createElement("ul");
ul.classList.add("actors-list");

const items = actors.map((actor) => {
    const{name,photo,birthdate}= actor;

    const item = document.createElement("li");
  item.classList.add('actor-item');

  const article = document.createElement('article');
article.classList.add('actor-card');

const div = document.createElement('div');
div.classList.add('actor-pic-wrapper');

const img = document.createElement('img');
img.classList.add('actor-pic');
img.setAttribute('src',photo);
img.setAttribute('alt',name);
div.append(img)

const h2 = document.createElement('h2');
h2.classList.add('actor-name');
h2.innerText = name;

const p = document.createElement('p');
p.classList.add('actor-bd');
p.innerText = birthdate;

article.append(div,h2,p);
item.append(article);
  return item;
});



ul.append(...items);
section.append(h1, ul);
root.append(section);
console.log(section);
