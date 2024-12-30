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
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  

