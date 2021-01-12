/***** Deliverable 1 *****/
const header = document.querySelector("h1#header");
console.log("Here's your header:", header)

/***** Deliverable 2 *****/
header.style.color = "blue";

/***** Deliverable 3 *****/
console.log('This is what the traveler object looks like: ', traveler)
const image = document.querySelector('div.traveler div#profile img');
image.src = traveler.photo;
image.alt = traveler.name;
const h2 = document.querySelector('div.traveler div#profile h2');
h2.textContent = traveler.name;
const em = document.querySelector('div.traveler div#profile em');
em.textContent = traveler.nickname;

/***** Deliverable 4 *****/
const ul = document.querySelector('div.traveler ul#animals');
traveler.animalSightings.forEach(function(animal) {
    const li = document.createElement('li');
    li.id = animal.id;
    const p = document.createElement('p');
    p.textContent = animal.description;
    const img = document.createElement('img');
    img.src = animal.photo;
    img.alt = animal.species;
    const a = document.createElement('a');
    a.href = animal.link;
    a.textContent = `Here's a video about the ${animal.species} species!`;
    li.append(p, img, a);
    ul.append(li);
});

/***** Deliverable 5 *****/
// const li = ul.querySelector('li#3');
const li = ul.querySelectorAll('li');
li[2].remove();
