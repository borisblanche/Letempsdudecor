const sliderData = dataStore.sliderData || [];
const sections = dataStore.sections || [];
const meublesPeints = dataStore.meublesPeints || [];

console.log("Slider Data :", sliderData);
console.log("Sections :", sections);
console.log("Meubles Peints :", meublesPeints);

// Récupérer tous les liens de navigation
const navLinks = document.querySelectorAll('.links a');

// Récupérer toutes les pages
const pages = document.querySelectorAll('.page');

// Fonction pour afficher une page
function showPage(pageId) {
  // Masquer toutes les pages
  pages.forEach(page => page.classList.remove('active'));

  // Afficher la page correspondante
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('active');
  }
}

// Ajouter des événements de clic sur les liens de navigation
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Empêche le comportement par défaut
    const pageId = link.getAttribute('data-page'); // Récupérer l'ID de la page cible
    if (pageId) {
      showPage(pageId); // Afficher la page correspondante
    }
  });
});

// slider.js

document.addEventListener('DOMContentLoaded', () => {
    // Vérifiez si sliderData est défini et est un tableau
    if (typeof sliderData === 'undefined' || !Array.isArray(sliderData)) {
      console.error('sliderData n\'est pas défini ou n\'est pas un tableau. Assurez-vous que data.js est correctement inclus.');
      return;
    }
  
    const slidesContainer = document.getElementById('slides-container');
    const dotsContainer = document.getElementById('dots');
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    let currentIndex = 0;
    let slideInterval;
  
    const totalSlides = sliderData.length;
  
    console.log(`Total slides dans sliderData: ${totalSlides}`);
  
    // Fonction pour créer une slide
    const createSlide = (slide, index) => {
      const slideDiv = document.createElement('div');
      slideDiv.classList.add('slide');
      if (index === 0) {
        slideDiv.classList.add('active');
        slideDiv.style.display = 'block'; // Afficher la première slide
      } else {
        slideDiv.style.display = 'none'; // Masquer les autres slides
      }
  
      // Création de l'image
      const img = document.createElement('img');
      img.src = slide.image;
      img.alt = slide.alt;
      img.classList.add('slide-image');
      slideDiv.appendChild(img);
  
      // Création de la card
      const cardDiv = document.createElement('div');
      cardDiv.classList.add('card');
  
      // Ajout du titre
      const title = document.createElement('h2');
      title.classList.add('card-title');
      title.innerText = slide.title;
      cardDiv.appendChild(title);
  
      // Ajout de la description
      const description = document.createElement('p');
      description.classList.add('card-description');
      description.innerText = slide.description;
      cardDiv.appendChild(description);
  
      // Ajout des détails
      const details = document.createElement('span');
      details.classList.add('card-details');
      details.innerText = slide.details;
      cardDiv.appendChild(details);
  
      // Ajout de la card à la slide
      slideDiv.appendChild(cardDiv);
  
      // Débogage : Vérifiez que la card est bien créée
      console.log(`Création de la card pour le slide ${index + 1}:`, cardDiv);
  
      return slideDiv;
    };
  
    // Fonction pour créer un dot
    const createDot = (index) => {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dot.setAttribute('data-index', index);
  
      // Styles de base pour les dots
      dot.style.height = '10px';
      dot.style.width = '10px';
      dot.style.margin = '0 5px';
      dot.style.backgroundColor = index === 0 ? '#717171' : '#bbb';
      dot.style.borderRadius = '50%';
      dot.style.display = 'inline-block';
      dot.style.cursor = 'pointer';
  
      return dot;
    };
  
    // Création des slides et des dots
    sliderData.forEach((slide, index) => {
      const slideElement = createSlide(slide, index);
      slidesContainer.appendChild(slideElement);
  
      const dotElement = createDot(index);
      dotsContainer.appendChild(dotElement);
    });
  
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
  
    console.log(`Total slides créés dans le DOM: ${slides.length}`);
  
    slides.forEach((slide, index) => {
      const hasCard = slide.querySelector('.card') !== null;
      console.log(`Slide ${index + 1} a une card: ${hasCard}`);
    });
  
    // Fonction pour afficher le slide actuel
    const showSlide = (index) => {
      if (index >= totalSlides) {
        currentIndex = 0;
      } else if (index < 0) {
        currentIndex = totalSlides - 1;
      } else {
        currentIndex = index;
      }
  
      // Afficher la slide active et masquer les autres
      slides.forEach((slide, idx) => {
        if (idx === currentIndex) {
          slide.classList.add('active');
          slide.style.display = 'block'; // Afficher la slide
        } else {
          slide.classList.remove('active');
          slide.style.display = 'none'; // Masquer la slide
        }
      });
  
      // Mettre à jour les dots
      dots.forEach((dot, idx) => {
        if (idx === currentIndex) {
          dot.classList.add('active');
          dot.style.backgroundColor = '#717171';
        } else {
          dot.classList.remove('active');
          dot.style.backgroundColor = '#bbb';
        }
      });
  
      console.log(`Affichage du slide ${currentIndex + 1}`);
    };
  
    // Navigation suivante
    const nextSlide = () => {
      showSlide(currentIndex + 1);
    };
  
    // Navigation précédente
    const prevSlide = () => {
      showSlide(currentIndex - 1);
    };
  
    // Ajouter les événements aux boutons
    nextButton.addEventListener('click', () => {
      nextSlide();
      resetInterval();
    });
  
    prevButton.addEventListener('click', () => {
      prevSlide();
      resetInterval();
    });
  
    // Ajouter les événements aux dots
    dots.forEach((dot) => {
      dot.addEventListener('click', (e) => {
        const index = parseInt(e.target.getAttribute('data-index'));
        if (!isNaN(index)) {
          showSlide(index);
          resetInterval();
        }
      });
    });
  
    // Défilement automatique
    const startInterval = () => {
      slideInterval = setInterval(nextSlide, 3000); // Changez la durée si nécessaire
    };
  
    const resetInterval = () => {
      clearInterval(slideInterval);
      startInterval();
    };
  
    // Initialiser le slider
    showSlide(currentIndex);
    startInterval();
  
    // Optionnel : Ajouter un redimensionnement pour ajuster la largeur
    window.addEventListener('resize', () => {
      showSlide(currentIndex);
    });
  });

  ////////////-----section -generation------///////////////////////////
  function generateSections(sections) {
    const container = document.getElementById("sections-container");
    container.innerHTML = ""; // Réinitialiser le conteneur

    sections.forEach((section, index) => {
        // Création de la section principale
        const sectionDiv = document.createElement("div");
        sectionDiv.classList.add("custom-section");
        sectionDiv.id = section.id; // ID unique pour chaque section

        // Titre général de la section (h3 centré)
        const sectionTitle = document.createElement("h3");
        sectionTitle.textContent = section.name;
        sectionTitle.classList.add("section-title");
        sectionDiv.appendChild(sectionTitle);

        // Contenu principal (slider + texte)
        const contentDiv = document.createElement("div");
        contentDiv.classList.add("content");

        // Partie gauche (slider)
        const leftDiv = document.createElement("div");
        leftDiv.classList.add("section-left");

        const slider = document.createElement("div");
        slider.classList.add("slider-custom");
        const slides = document.createElement("div");
        slides.classList.add("slides-custom");

        // Ajout des images au slider
        section.slides.forEach(slide => {
            const img = document.createElement("img");
            img.src = slide;
            img.alt = `${section.title} Slide`;
            slides.appendChild(img);
        });

        slider.appendChild(slides);

        // Boutons de navigation du slider
        const buttons = document.createElement("div");
        buttons.classList.add("slider-buttons-custom");

        const prevButton = document.createElement("button");
        prevButton.innerText = "<";
        prevButton.addEventListener("click", () => moveSlide(index, -1));

        const nextButton = document.createElement("button");
        nextButton.innerText = ">";
        nextButton.addEventListener("click", () => moveSlide(index, 1));

        buttons.appendChild(prevButton);
        buttons.appendChild(nextButton);
        slider.appendChild(buttons);

        leftDiv.appendChild(slider);

        // Partie droite (texte)
        const rightDiv = document.createElement("div");
        rightDiv.classList.add("section-right");

        const title = document.createElement("h2");
        title.textContent = section.title;

        const text = document.createElement("p");
        text.textContent = section.text;

        rightDiv.appendChild(title);
        rightDiv.appendChild(text);

        // Ajout des parties gauche et droite au contenu principal
        contentDiv.appendChild(leftDiv);
        contentDiv.appendChild(rightDiv);

        // Ajout du contenu principal à la section
        sectionDiv.appendChild(contentDiv);

        // Ajout de la section principale au conteneur
        container.appendChild(sectionDiv);

        // Initialisation du slider
        initSlider(index, slides);
    });
}


const currentSlides = {};

function initSlider(index, slidesContainer) {
    currentSlides[index] = 0;
    updateSlider(index, slidesContainer);
}

function moveSlide(index, direction) {
    const slidesContainer = document.querySelectorAll(".slides-custom")[index];
    const totalSlides = slidesContainer.children.length;

    currentSlides[index] += direction;
    if (currentSlides[index] < 0) {
        currentSlides[index] = totalSlides - 1;
    } else if (currentSlides[index] >= totalSlides) {
        currentSlides[index] = 0;
    }

    updateSlider(index, slidesContainer);
}

function updateSlider(index, slidesContainer) {
    const slideWidth = slidesContainer.children[0].offsetWidth;
    slidesContainer.style.transform = `translateX(-${currentSlides[index] * slideWidth}px)`;
}

// Appel de la fonction pour générer les sections
generateSections(sections);
  

  
/*------------------------------Meubles peints----------------------*/
document.addEventListener("DOMContentLoaded", () => {
  const galleryContainer = document.getElementById("meubles-gallery-container");
  const modal = document.getElementById("meubles-modal");
  const modalSlider = document.getElementById("meubles-modal-slider");
  const modalClose = document.getElementById("meubles-modal-close");

  const prevArrow = document.createElement("button");
  const nextArrow = document.createElement("button");

  prevArrow.id = "prev";
  prevArrow.classList.add("slider-arrow");
  prevArrow.textContent = "<";
  nextArrow.id = "next";
  nextArrow.classList.add("slider-arrow");
  nextArrow.textContent = ">";

  let currentIndex = 0; // Index de l'image active

  // Générer la galerie
  function generateGallery() {
    galleryContainer.innerHTML = "";
    meublesPeints.forEach((item, index) => {
      const galleryItem = document.createElement("div");
      galleryItem.classList.add("gallery-item");
      galleryItem.innerHTML = `<img src="${item.src}" alt="${item.title}" title="${item.title}">`;

      galleryItem.addEventListener("click", () => openModal(index));
      galleryContainer.appendChild(galleryItem);
    });
  }

  // Ouvrir la modale
  function openModal(index) {
    currentIndex = index;
    modalSlider.innerHTML = ""; // Réinitialise le contenu du slider

    meublesPeints.forEach((item) => {
      const slide = document.createElement("img");
      slide.src = item.src;
      slide.alt = item.title;
      slide.classList.add("slider-image");
      modalSlider.appendChild(slide);
    });

    // Ajout des flèches
    if (!modalSlider.contains(prevArrow)) modalSlider.appendChild(prevArrow);
    if (!modalSlider.contains(nextArrow)) modalSlider.appendChild(nextArrow);

    updateSlider();
    modal.classList.remove("hidden");
  }

  // Mettre à jour le slider
  function updateSlider() {
    const slides = modalSlider.querySelectorAll(".slider-image");

    slides.forEach((slide, index) => {
      if (index === currentIndex) {
        slide.style.transform = "translateX(0%)";
        slide.style.zIndex = "2"; // Apporte l'image active au premier plan
      } else if (index < currentIndex) {
        slide.style.transform = "translateX(-100%)";
        slide.style.zIndex = "1"; // Image précédente
      } else {
        slide.style.transform = "translateX(100%)";
        slide.style.zIndex = "1"; // Image suivante
      }
      slide.style.transition = "transform 0.5s ease-in-out";
    });

    // Mettre à jour les informations de texte
    const { title, description, details, contact } = meublesPeints[currentIndex];
    document.getElementById("meubles-modal-title").textContent = title || "Titre indisponible";
    document.getElementById("meubles-modal-description").textContent = description || "Description indisponible";
    document.getElementById("meubles-modal-details-text").textContent = details || "Détails indisponibles.";
    document.getElementById("meubles-modal-contact").href = contact || "#";
  }

  // Navigation
  prevArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + meublesPeints.length) % meublesPeints.length;
    updateSlider();
  });

  nextArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % meublesPeints.length;
    updateSlider();
  });

  // Fermer la modale
  modalClose.addEventListener("click", () => modal.classList.add("hidden"));

  // Fermer la modale en cliquant à l'extérieur
  modal.addEventListener("click", (e) => {
    if (!modalSlider.contains(e.target)) {
      modal.classList.add("hidden");
    }
  });

  generateGallery();
});
