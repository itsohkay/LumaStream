const fallbackCatalogue = [
  {
    "id": 1,
    "title": "Avengers: Endgame",
    "studio": "Marvel",
    "franchise": "Marvel Cinematic Universe",
    "genre": "Action",
    "type": "Movie",
    "year": 2019,
    "rating": "PG-13",
    "duration": "3h 1m",
    "description": "The Avengers reunite for one final mission that will decide the fate of the universe.",
    "image": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=900&q=85",
    "trailer": "https://www.youtube.com/watch?v=TcMBFSGVi1c",
    "featured": true
  },
  {
    "id": 2,
    "title": "Spider-Man: No Way Home",
    "studio": "Marvel",
    "franchise": "Spider-Man",
    "genre": "Action",
    "type": "Movie",
    "year": 2021,
    "rating": "PG-13",
    "duration": "2h 28m",
    "description": "Peter Parker faces an extraordinary challenge when his world collides with other realities.",
    "image": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=900&q=85",
    "trailer": "https://www.youtube.com/watch?v=JfVOs4VSpmA",
    "featured": true
  },
  {
    "id": 3,
    "title": "Black Panther",
    "studio": "Marvel",
    "franchise": "Marvel Cinematic Universe",
    "genre": "Adventure",
    "type": "Movie",
    "year": 2018,
    "rating": "PG-13",
    "duration": "2h 14m",
    "description": "A young king must protect his home while discovering what kind of leader he wants to become.",
    "image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900&q=85",
    "trailer": "",
    "featured": false
  },
  {
    "id": 4,
    "title": "X-Men '97",
    "studio": "Marvel",
    "franchise": "X-Men",
    "genre": "Animation",
    "type": "Series",
    "year": 2024,
    "rating": "TV-14",
    "duration": "1 season",
    "description": "The X-Men return in an animated series about teamwork, identity and a changing world.",
    "image": "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=900&q=85",
    "trailer": "",
    "featured": true
  },
  {
    "id": 5,
    "title": "Guardians of the Galaxy",
    "studio": "Marvel",
    "franchise": "Marvel Cinematic Universe",
    "genre": "Sci-Fi",
    "type": "Movie",
    "year": 2014,
    "rating": "PG-13",
    "duration": "2h 1m",
    "description": "An unlikely crew of space adventurers discover that saving the galaxy takes teamwork.",
    "image": "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=900&q=85",
    "trailer": "",
    "featured": false
  },
  {
    "id": 6,
    "title": "The Batman",
    "studio": "DC",
    "franchise": "Batman",
    "genre": "Thriller",
    "type": "Movie",
    "year": 2022,
    "rating": "PG-13",
    "duration": "2h 56m",
    "description": "A detective-style superhero story follows Batman through a mystery in Gotham City.",
    "image": "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=900&q=85",
    "trailer": "https://www.youtube.com/watch?v=mqqft2x_Aa4",
    "featured": true
  },
  {
    "id": 7,
    "title": "Wonder Woman",
    "studio": "DC",
    "franchise": "Wonder Woman",
    "genre": "Adventure",
    "type": "Movie",
    "year": 2017,
    "rating": "PG-13",
    "duration": "2h 21m",
    "description": "An Amazon warrior leaves her island home and discovers her strength in a wider world.",
    "image": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&q=85",
    "trailer": "",
    "featured": false
  },
  {
    "id": 8,
    "title": "Man of Steel",
    "studio": "DC",
    "franchise": "Superman",
    "genre": "Action",
    "type": "Movie",
    "year": 2013,
    "rating": "PG-13",
    "duration": "2h 23m",
    "description": "A young hero learns about his origins and the responsibility that comes with his abilities.",
    "image": "https://images.unsplash.com/photo-1484589065579-248aad0d8b13?w=900&q=85",
    "trailer": "",
    "featured": false
  },
  {
    "id": 9,
    "title": "Peacemaker",
    "studio": "DC",
    "franchise": "DC Series",
    "genre": "Comedy",
    "type": "Series",
    "year": 2022,
    "rating": "TV-MA",
    "duration": "2 seasons",
    "description": "A sharp-edged superhero comedy-drama about a complicated character and his team.",
    "image": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=900&q=85",
    "trailer": "",
    "featured": false
  },
  {
    "id": 10,
    "title": "Inside Out 2",
    "studio": "Pixar",
    "franchise": "Inside Out",
    "genre": "Animation",
    "type": "Movie",
    "year": 2024,
    "rating": "PG",
    "duration": "1h 36m",
    "description": "Riley's emotions navigate a new chapter as unexpected feelings join the control room.",
    "image": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&q=85",
    "trailer": "https://www.youtube.com/watch?v=LEjhY15eNxA",
    "featured": true
  },
  {
    "id": 11,
    "title": "Coco",
    "studio": "Pixar",
    "franchise": "Pixar Classics",
    "genre": "Family",
    "type": "Movie",
    "year": 2017,
    "rating": "PG",
    "duration": "1h 45m",
    "description": "A music-loving boy discovers family history, memory and the power of a song.",
    "image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900&q=85",
    "trailer": "",
    "featured": false
  },
  {
    "id": 12,
    "title": "Toy Story 4",
    "studio": "Pixar",
    "franchise": "Toy Story",
    "genre": "Family",
    "type": "Movie",
    "year": 2019,
    "rating": "G",
    "duration": "1h 40m",
    "description": "Old friends and new discoveries lead to an adventure about belonging and change.",
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=900&q=85",
    "trailer": "",
    "featured": false
  },
  {
    "id": 13,
    "title": "Finding Nemo",
    "studio": "Pixar",
    "franchise": "Pixar Classics",
    "genre": "Adventure",
    "type": "Movie",
    "year": 2003,
    "rating": "G",
    "duration": "1h 40m",
    "description": "A cautious clownfish crosses the ocean on a heartfelt search for his son.",
    "image": "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=900&q=85",
    "trailer": "",
    "featured": false
  },
  {
    "id": 14,
    "title": "Frozen II",
    "studio": "Disney",
    "franchise": "Frozen",
    "genre": "Fantasy",
    "type": "Movie",
    "year": 2019,
    "rating": "PG",
    "duration": "1h 43m",
    "description": "Two sisters journey beyond their kingdom to uncover the secrets of their family and home.",
    "image": "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=900&q=85",
    "trailer": "",
    "featured": true
  },
  {
    "id": 15,
    "title": "Moana",
    "studio": "Disney",
    "franchise": "Disney Animation",
    "genre": "Adventure",
    "type": "Movie",
    "year": 2016,
    "rating": "PG",
    "duration": "1h 47m",
    "description": "A determined wayfinder sails across the ocean to help restore balance to her island.",
    "image": "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=900&q=85",
    "trailer": "",
    "featured": false
  },
  {
    "id": 16,
    "title": "The Lion King",
    "studio": "Disney",
    "franchise": "Disney Classics",
    "genre": "Family",
    "type": "Movie",
    "year": 1994,
    "rating": "G",
    "duration": "1h 28m",
    "description": "A young lion grows into his place in the circle of life in this animated classic.",
    "image": "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=900&q=85",
    "trailer": "",
    "featured": false
  },
  {
    "id": 17,
    "title": "Percy Jackson and the Olympians",
    "studio": "Disney",
    "franchise": "Disney Series",
    "genre": "Fantasy",
    "type": "Series",
    "year": 2023,
    "rating": "TV-PG",
    "duration": "2 seasons",
    "description": "A modern demigod discovers a world of ancient myths, quests and unexpected friendships.",
    "image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900&q=85",
    "trailer": "",
    "featured": false
  },
  {
    "id": 18,
    "title": "Barbie",
    "studio": "Mattel",
    "franchise": "Barbie",
    "genre": "Comedy",
    "type": "Movie",
    "year": 2023,
    "rating": "PG-13",
    "duration": "1h 54m",
    "description": "A colourful journey of self-discovery takes Barbie beyond the world she knows.",
    "image": "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&q=85",
    "trailer": "https://www.youtube.com/watch?v=pBk4NYhWNMM",
    "featured": true
  },
  {
    "id": 19,
    "title": "Masters of the Universe",
    "studio": "Mattel",
    "franchise": "Masters of the Universe",
    "genre": "Fantasy",
    "type": "Series",
    "year": 2021,
    "rating": "TV-Y7",
    "duration": "2 parts",
    "description": "A reimagined fantasy adventure about courage, friendship and the fate of Eternia.",
    "image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900&q=85",
    "trailer": "",
    "featured": false
  },
  {
    "id": 20,
    "title": "Hot Wheels: Let's Race",
    "studio": "Mattel",
    "franchise": "Hot Wheels",
    "genre": "Animation",
    "type": "Series",
    "year": 2024,
    "rating": "TV-Y7",
    "duration": "2 seasons",
    "description": "Young racers take on creative challenges, big tracks and high-energy competition.",
    "image": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=85",
    "trailer": "",
    "featured": false
  },
  {
    "id": 21,
    "title": "Transformers: Rise of the Beasts",
    "studio": "Paramount",
    "franchise": "Transformers",
    "genre": "Sci-Fi",
    "type": "Movie",
    "year": 2023,
    "rating": "PG-13",
    "duration": "2h 7m",
    "description": "New allies and ancient robotic forces bring a global adventure to life.",
    "image": "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=900&q=85",
    "trailer": "",
    "featured": true
  },
  {
    "id": 22,
    "title": "Sonic the Hedgehog 3",
    "studio": "Paramount",
    "franchise": "Sonic",
    "genre": "Adventure",
    "type": "Movie",
    "year": 2024,
    "rating": "PG",
    "duration": "1h 50m",
    "description": "Sonic and friends face a powerful new rival in a fast-moving family adventure.",
    "image": "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=900&q=85",
    "trailer": "https://www.youtube.com/watch?v=qSu6i2iFMO0",
    "featured": false
  },
  {
    "id": 23,
    "title": "Star Trek: Strange New Worlds",
    "studio": "Paramount",
    "franchise": "Star Trek",
    "genre": "Sci-Fi",
    "type": "Series",
    "year": 2022,
    "rating": "TV-14",
    "duration": "3 seasons",
    "description": "The crew of the Enterprise explores new worlds and big questions about the future.",
    "image": "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=900&q=85",
    "trailer": "",
    "featured": false
  },
  {
    "id": 24,
    "title": "A Quiet Place",
    "studio": "Paramount",
    "franchise": "A Quiet Place",
    "genre": "Thriller",
    "type": "Movie",
    "year": 2018,
    "rating": "PG-13",
    "duration": "1h 30m",
    "description": "A family must rely on careful communication in a world where sound carries danger.",
    "image": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=900&q=85",
    "trailer": "",
    "featured": false
  },
  {
    "id": 25,
    "title": "How to Train Your Dragon",
    "studio": "DreamWorks",
    "franchise": "How to Train Your Dragon",
    "genre": "Fantasy",
    "type": "Movie",
    "year": 2010,
    "rating": "PG",
    "duration": "1h 38m",
    "description": "An unlikely friendship changes how a young Viking sees dragons and his community.",
    "image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900&q=85",
    "trailer": "",
    "featured": true
  },
  {
    "id": 26,
    "title": "Kung Fu Panda 4",
    "studio": "DreamWorks",
    "franchise": "Kung Fu Panda",
    "genre": "Comedy",
    "type": "Movie",
    "year": 2024,
    "rating": "PG",
    "duration": "1h 34m",
    "description": "Po faces a new chapter and learns that leadership can mean making room for others.",
    "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=900&q=85",
    "trailer": "",
    "featured": false
  },
  {
    "id": 27,
    "title": "Shrek",
    "studio": "DreamWorks",
    "franchise": "Shrek",
    "genre": "Comedy",
    "type": "Movie",
    "year": 2001,
    "rating": "PG",
    "duration": "1h 30m",
    "description": "A swamp-loving ogre's quiet life becomes a funny fairy-tale adventure.",
    "image": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&q=85",
    "trailer": "",
    "featured": false
  },
  {
    "id": 28,
    "title": "The Wild Robot",
    "studio": "DreamWorks",
    "franchise": "The Wild Robot",
    "genre": "Animation",
    "type": "Movie",
    "year": 2024,
    "rating": "PG",
    "duration": "1h 42m",
    "description": "A robot learns to adapt to nature and build an unexpected family on a remote island.",
    "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=85",
    "trailer": "",
    "featured": false
  },
  {
    "id": 29,
    "title": "Spirited Away",
    "studio": "Studio Ghibli",
    "franchise": "Ghibli Collection",
    "genre": "Fantasy",
    "type": "Movie",
    "year": 2001,
    "rating": "PG",
    "duration": "2h 5m",
    "description": "A young girl enters a mysterious spirit world and finds courage along the way.",
    "image": "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=900&q=85",
    "trailer": "",
    "featured": true
  },
  {
    "id": 30,
    "title": "My Neighbor Totoro",
    "studio": "Studio Ghibli",
    "franchise": "Ghibli Collection",
    "genre": "Family",
    "type": "Movie",
    "year": 1988,
    "rating": "G",
    "duration": "1h 26m",
    "description": "Two sisters discover gentle forest spirits in a warm story about wonder and family.",
    "image": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=85",
    "trailer": "",
    "featured": false
  },
  {
    "id": 31,
    "title": "Arcane",
    "studio": "Other Worlds",
    "franchise": "Animated Series",
    "genre": "Drama",
    "type": "Series",
    "year": 2021,
    "rating": "TV-14",
    "duration": "2 seasons",
    "description": "Two sisters find themselves on opposite sides of a growing conflict between cities.",
    "image": "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=900&q=85",
    "trailer": "",
    "featured": true
  },
  {
    "id": 32,
    "title": "Avatar: The Last Airbender",
    "studio": "Other Worlds",
    "franchise": "Avatar Universe",
    "genre": "Adventure",
    "type": "Series",
    "year": 2005,
    "rating": "TV-Y7",
    "duration": "3 seasons",
    "description": "A young airbender travels with friends to bring balance to a divided world.",
    "image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900&q=85",
    "trailer": "",
    "featured": false
  },
  {
    "id": 33,
    "title": "Wednesday",
    "studio": "Other Worlds",
    "franchise": "Mystery Series",
    "genre": "Mystery",
    "type": "Series",
    "year": 2022,
    "rating": "TV-14",
    "duration": "2 seasons",
    "description": "A sharp-witted student investigates strange mysteries at an unusual academy.",
    "image": "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=900&q=85",
    "trailer": "",
    "featured": false
  },
  {
    "id": 34,
    "title": "The Sea of Tranquility",
    "studio": "Luma Originals",
    "franchise": "Luma Selects",
    "genre": "Documentary",
    "type": "Documentary",
    "year": 2024,
    "rating": "PG",
    "duration": "48m",
    "description": "A thoughtful short documentary exploring the science, silence and mystery of space.",
    "image": "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=900&q=85",
    "trailer": "",
    "featured": false
  },
  {
    "id": 35,
    "title": "Planet Earth: Blue Worlds",
    "studio": "Luma Originals",
    "franchise": "Luma Learning",
    "genre": "Documentary",
    "type": "Documentary",
    "year": 2023,
    "rating": "G",
    "duration": "52m",
    "description": "Explore ocean habitats and the remarkable life found beneath the surface.",
    "image": "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=900&q=85",
    "trailer": "",
    "featured": false
  },
  {
    "id": 36,
    "title": "The Grand Budapest Hotel",
    "studio": "Other Worlds",
    "franchise": "Cinema Picks",
    "genre": "Comedy",
    "type": "Movie",
    "year": 2014,
    "rating": "R",
    "duration": "1h 39m",
    "description": "A meticulous concierge and his young colleague become caught in an unusual mystery.",
    "image": "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=900&q=85",
    "trailer": "",
    "featured": false
  }
];
let catalogue = [];
let myList = [];
let activeTitleId = null;

const catalogueGrid = document.getElementById("catalogueGrid");
const featuredGrid = document.getElementById("featuredGrid");
const myListGrid = document.getElementById("myListGrid");
const searchInput = document.getElementById("searchInput");
const genreFilter = document.getElementById("genreFilter");
const studioFilter = document.getElementById("studioFilter");
const typeFilter = document.getElementById("typeFilter");
const catalogueStatus = document.getElementById("catalogueStatus");
const toastElement = document.getElementById("lumaToast");
const toast = window.bootstrap ? new bootstrap.Toast(toastElement, { delay: 2200 }) : null;

function safeText(value) {
  return String(value ?? "");
}
function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}
function showToast(message) {
  document.getElementById("toastMessage").textContent = message;
  if (toast) toast.show();
}
function loadSavedList() {
  try {
    const stored = JSON.parse(localStorage.getItem("lumaStreamMyList") || "[]");
    myList = Array.isArray(stored) ? stored : [];
  } catch (error) {
    myList = [];
    console.warn("Saved list could not be read. Starting with an empty list.", error);
  }
}
function saveList() {
  try {
    localStorage.setItem("lumaStreamMyList", JSON.stringify(myList));
  } catch (error) {
    showToast("Your browser could not save this list.");
    console.error("localStorage save failed:", error);
  }
}
function isSaved(id) {
  return myList.some(item => item.id === id);
}
function buildCard(item) {
  const article = createElement("article", "title-card");
  const poster = createElement("div", "poster-wrap");
  const image = document.createElement("img");
  image.src = item.image;
  image.alt = `Cinematic thumbnail representing ${item.title}`;
  image.loading = "lazy";
  image.onerror = () => { image.style.opacity = "0"; poster.classList.add("poster-fallback"); };
  const studio = createElement("span", "poster-studio", item.studio.toUpperCase());
  const save = createElement("button", `save-button${isSaved(item.id) ? " is-saved" : ""}`, isSaved(item.id) ? "✓" : "+");
  save.type = "button";
  save.setAttribute("aria-label", `${isSaved(item.id) ? "Remove" : "Add"} ${item.title} ${isSaved(item.id) ? "from" : "to"} My List`);
  save.addEventListener("click", event => {
    event.stopPropagation();
    toggleSaved(item.id);
  });
  const play = createElement("span", "poster-play", "▶");
  poster.append(image, studio, save, play);
  const title = createElement("h3", "card-title", item.title);
  const meta = createElement("div", "card-meta");
  meta.append(createElement("span", "", item.year), createElement("i"), createElement("span", "", item.genre));
  article.append(poster, title, meta);
  article.addEventListener("click", () => showDetails(item.id));
  article.setAttribute("tabindex", "0");
  article.setAttribute("role", "button");
  article.setAttribute("aria-label", `View details for ${item.title}`);
  article.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") { event.preventDefault(); showDetails(item.id); }
  });
  return article;
}
function renderCards(items, target) {
  target.replaceChildren();
  if (!items.length) {
    const empty = createElement("div", "empty-list");
    empty.append(createElement("span", "", "✳"), createElement("h3", "", "Nothing here just yet."), createElement("p", "", "Try a different search or adjust your filters."));
    target.append(empty);
    return;
  }
  items.forEach(item => target.append(buildCard(item)));
}
function renderFeatured() {
  featuredGrid.replaceChildren();
  const featured = catalogue.filter(item => item.featured).slice(0, 3);
  featured.forEach(item => {
    const card = createElement("article", "feature-card");
    const image = document.createElement("img");
    image.src = item.image;
    image.alt = `Artwork representing ${item.title}`;
    image.loading = "lazy";
    const content = createElement("div", "feature-content");
    content.append(createElement("span", "feature-label", `${item.studio.toUpperCase()}  /  ${item.type.toUpperCase()}`));
    content.append(createElement("h3", "", item.title));
    content.append(createElement("p", "", item.description));
    const meta = createElement("div", "feature-meta");
    meta.append(createElement("span", "", item.genre), createElement("span", "", "·"), createElement("span", "", String(item.year)));
    content.append(meta);
    card.append(image, content);
    card.addEventListener("click", () => showDetails(item.id));
    featuredGrid.append(card);
  });
}
function populateFilters() {
  const genres = [...new Set(catalogue.map(item => item.genre))].sort();
  const studios = [...new Set(catalogue.map(item => item.studio))].sort();
  genres.forEach(genre => genreFilter.append(new Option(genre, genre)));
  studios.forEach(studio => studioFilter.append(new Option(studio, studio)));
  document.getElementById("totalCount").textContent = catalogue.length;
}
function filterCatalogue() {
  const term = searchInput.value.trim().toLowerCase();
  const genre = genreFilter.value;
  const studio = studioFilter.value;
  const type = typeFilter.value;
  const results = catalogue.filter(item => {
    const searchable = `${item.title} ${item.description} ${item.studio} ${item.franchise} ${item.genre}`.toLowerCase();
    return searchable.includes(term) &&
      (genre === "all" || item.genre === genre) &&
      (studio === "all" || item.studio === studio) &&
      (type === "all" || item.type === type);
  });
  renderCards(results, catalogueGrid);
  catalogueStatus.textContent = `${results.length} ${results.length === 1 ? "title" : "titles"} found`;
}
function renderMyList() {
  renderCards(myList, myListGrid);
  document.getElementById("savedCount").textContent = myList.length;
  document.getElementById("listCount").textContent = myList.length;
}
function toggleSaved(id) {
  const item = catalogue.find(title => title.id === id);
  if (!item) return;
  if (isSaved(id)) {
    myList = myList.filter(saved => saved.id !== id);
    showToast(`${item.title} removed from My List.`);
  } else {
    myList.push(item);
    showToast(`${item.title} added to My List.`);
  }
  saveList();
  filterCatalogue();
  renderFeatured();
  renderMyList();
  if (activeTitleId === id) updateModalSaveButton();
}
function updateModalSaveButton() {
  const button = document.getElementById("modalSave");
  button.textContent = isSaved(activeTitleId) ? "✓ Saved to My List" : "＋ Add to My List";
}
function showDetails(id) {
  const item = catalogue.find(title => title.id === id);
  if (!item) return;
  activeTitleId = id;
  document.getElementById("modalTitle").textContent = item.title;
  document.getElementById("modalImage").src = item.image;
  document.getElementById("modalImage").alt = `Artwork representing ${item.title}`;
  document.getElementById("modalStudio").textContent = item.studio.toUpperCase();
  document.getElementById("modalFranchise").textContent = item.franchise.toUpperCase();
  document.getElementById("modalMeta").textContent = `${item.type}  ·  ${item.genre}  ·  ${item.year}  ·  ${item.duration}  ·  ${item.rating}`;
  document.getElementById("modalDescription").textContent = item.description;
  const trailer = document.getElementById("trailerLink");
  if (item.trailer) {
    trailer.href = item.trailer;
    trailer.hidden = false;
  } else {
    trailer.hidden = true;
  }
  updateModalSaveButton();
  bootstrap.Modal.getOrCreateInstance(document.getElementById("titleModal")).show();
}
async function loadCatalogue() {
  catalogueStatus.textContent = "Loading catalogue data...";
  try {
    const response = await fetch("catalogue.json");
    if (!response.ok) throw new Error(`Catalogue request failed: ${response.status}`);
    const data = await response.json();
    if (!Array.isArray(data) || data.length === 0) throw new Error("Catalogue data is empty or invalid.");
    catalogue = data;
    catalogueStatus.textContent = "Catalogue loaded from local JSON.";
  } catch (error) {
    console.warn("Using built-in catalogue fallback:", error);
    catalogue = fallbackCatalogue;
    catalogueStatus.textContent = "Showing the built-in catalogue (local JSON could not be reached).";
  }
  loadSavedList();
  populateFilters();
  renderFeatured();
  filterCatalogue();
  renderMyList();
}
searchInput.addEventListener("input", filterCatalogue);
genreFilter.addEventListener("change", filterCatalogue);
studioFilter.addEventListener("change", filterCatalogue);
typeFilter.addEventListener("change", filterCatalogue);
document.getElementById("clearFilters").addEventListener("click", () => {
  searchInput.value = "";
  genreFilter.value = "all";
  studioFilter.value = "all";
  typeFilter.value = "all";
  filterCatalogue();
});
document.querySelectorAll(".studio-tile").forEach(button => {
  button.addEventListener("click", () => {
    studioFilter.value = button.dataset.studio;
    filterCatalogue();
    document.getElementById("browse").scrollIntoView({ behavior: "smooth" });
  });
});
document.getElementById("modalSave").addEventListener("click", () => {
  if (activeTitleId !== null) toggleSaved(activeTitleId);
});
document.getElementById("demoForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("visitorName");
  const email = document.getElementById("visitorEmail");
  const feedback = document.getElementById("formFeedback");
  feedback.className = "form-feedback";
  if (!name.value.trim() || name.value.trim().length < 2) {
    feedback.textContent = "Please enter a name with at least two characters.";
    feedback.classList.add("error");
    name.focus();
    return;
  }
  if (!email.checkValidity()) {
    feedback.textContent = "Please enter a valid email address.";
    feedback.classList.add("error");
    email.focus();
    return;
  }
  feedback.textContent = `Welcome to the demo, ${name.value.trim()}! No account has been created.`;
  feedback.classList.add("success");
  event.target.reset();
});
loadCatalogue();
