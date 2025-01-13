// data.js
const dataStore = {


  sliderData : [
    {
      image: "assets/slides/slide1.avif",
      alt: 'Description de l\'image 1',
      title: 'Peintures en techniques naturelles',
      description: 'Fabrication artisanale',
      details: 'A la caséine, à la colle de peau, à l huile, à la gouache.',
    },
    {
      image: 'assets/slides/slide2.avif',
      alt: 'Description de l\'image 2',
      title: 'Enduits naturels',
      description: 'Fabrication artisanale',
      details: 'Enduits naturels à la chaux. Intonaco, Sgrafito, Stuc, Marmorino, Tadelakt...',
    },
    {
      image: 'assets/slides/slide3.avif',
      alt: 'Description de l\'image 3',
      title: 'Meubles peints',
      description: 'Création unique',
      details: 'Rénovation, ornementations, patine, décor peint.',
    },
    // Ajoutez autant d'objets que nécessaire
  ],
  

  sections : [
    {
      id: "peinture",
      name: "Peinture Artistique",
      title: "Peinture",
      text: "Découvrez nos œuvres de peinture, allant de l'abstrait au classique.",
      slides: [
        "assets/Logo/Elève de Maître d'Art (1).avif",
        "assets/Logo/sgrafitto_enduit de chaux.avif",
        "assets/Logo/Elève de Maître d'Art (1).avif",
      ],
      className: "section-peinture"

    },
    {
      id: "restauration",
      name: "Peinture Artistique",
      title: "Restauration",
      text: "Services de restauration pour vos œuvres d'art précieuses.",
      slides: [
        "assets/Logo/Elève de Maître d'Art (1).avif",
        "assets/Logo/Elève de Maître d'Art (1).avif",
        "assets/Logo/Elève de Maître d'Art (1).avif",
            
      ],
      className: "section-restauration"
    },
    {
      id: "sculpture",
      name: "Peinture Artistique",
      title: "Sculpture",
      text: "Collection de sculptures modernes et classiques.",
      slides: [
        "assets/Logo/Elève de Maître d'Art (1).avif",
        "assets/Logo/Elève de Maître d'Art (1).avif",
        "assets/Logo/Elève de Maître d'Art (1).avif",
        "assets/Logo/Elève de Maître d'Art (1).avif",
      ],
      className: "section-sculpture"
    }
  ],


  // const meublesPeints = [
  //   {
  //   id: "1",
  //     category: "chaises",
  //     title: "Brume matinale",
  //     description: " Meubles peints a la main",
  //     details: "disponible a la vente",
  //     contact:"mailto:letempsdudecor@gmail.com",
  //     images: [
  //     "assets/meubles peints/brume1.webp",
  //     "assets/meubles peints/brume2.webp",
  //     "assets/meubles peints/brume3.webp",
  //     "assets/meubles peints/brume4.webp",
  //   ],
  //   },
  //   {
  //   id: "2",
  //     category: "chaises",
  //     title: "Tête en l'air",
  //     description: " Meubles peints a la main",
  //     details: "disponible a la vente",
  //     contact:"mailto:letempsdudecor@gmail.com",
  //     images: [
  //     "assets/meubles peints/tete1.webp",
  //     "assets/meubles peints/tete2.webp",
  //     "assets/meubles peints/tete3.webp",
  //     "assets/meubles peints/tete4.webp",
  //   ],
  //   },
  //   {
  //   id: "3",
  //     category: "chaises",
  //     title: "Levé de soleil",
  //     description: " Meubles peints a la main",
  //     details: "disponible a la vente",
  //     contact:"mailto:letempsdudecor@gmail.com",
  //     images: [
  //     "assets/meubles peints/soleil1.webp",
  //     "assets/meubles peints/soleil2.webp",
  //     "assets/meubles peints/soleil3.webp",
  //     "assets/meubles peints/soleil4.webp",
  //   ],
  //   },
  //   {
  //   id: "4",
  //     category: "chaises",
  //     title: "Crépuscule d'été",
  //     description: " Meubles peints a la main",
  //     details: "disponible a la vente",
  //     contact:"mailto:letempsdudecor@gmail.com",
  //     images: [
  //     "assets/meubles peints/ete1.webp",
  //     "assets/meubles peints/ete2.webp",
  //     "assets/meubles peints/ete3.webp",
  //     "assets/meubles peints/ete4.webp",
  //   ],
  //   },
  //   {
  //   id: "5",
  //     category: "chaises",
  //     title: "Balade du dimanche",
  //     description: " Meubles peints a la main",
  //     details: "disponible a la vente",
  //     contact:"mailto:letempsdudecor@gmail.com",
  //     images: [
  //     "assets/meubles peints/balade1.webp",
  //     "assets/meubles peints/balade2.webp",
  //     "assets/meubles peints/balade3.webp",
  //     "assets/meubles peints/balade4.webp",
  //   ],
  //   },
  //   {
  //   id: "6",
  //     category: "chaises",
  //     title: "Rosée du matin",
  //     description: " Meubles peints a la main",
  //     details: "disponible a la vente",
  //     contact:"mailto:letempsdudecor@gmail.com",
  //     images: [
  //     "assets/meubles peints/rose1.webp",
  //     "assets/meubles peints/rose2.webp",
  //     "assets/meubles peints/rose3.webp",
  //     "assets/meubles peints/rose4.webp",
  //   ],
  //   },
  //   {
  //   id: "7",
  //     category: "chaises",
  //     title: "Au coin du feu",
  //     description: " Meubles peints a la main",
  //     details: "disponible a la vente",
  //     contact:"mailto:letempsdudecor@gmail.com",
  //     images: [
  //     "assets/meubles peints/feu1.webp",
  //     "assets/meubles peints/feu2.webp",
  //     "assets/meubles peints/feu3.webp",
  //     "assets/meubles peints/feu4.webp",
   
  //   ],
  //   },
  //   {
  //   id: "8",
  //     category: "chaises",
  //     title: "Lot de chaises",
  //     description: " Meubles peints a la main",
  //     details: "disponible a la vente",
  //     contact:"mailto:letempsdudecor@gmail.com",
  //     images: [
  //     "assets/meubles peints/chaises-lot.webp",
  //   ],
  //   },

  // ]

  meublesPeints : [
    {id:"01", src: "assets/meubles peints/brume1.webp", title: "Brume matinale", description: "Peinture inspirée des matinées brumeuses.", details: "Disponible à la vente.", contact: "mailto:letempsdudecor@gmail.com"  },
    {id:"02", src: "assets/meubles peints/brume2.webp", title: "Brume matinale", description: "Peinture inspirée des matinées brumeuses.", details: "Disponible à la vente.", contact: "mailto:letempsdudecor@gmail.com"  },
    {id:"03",src: "assets/meubles peints/brume3.webp", title: "Brume matinale", description: "Peinture inspirée des matinées brumeuses.", details: "Disponible à la vente.", contact: "mailto:letempsdudecor@gmail.com"  },
    {id:"04" ,src: "assets/meubles peints/brume4.webp", title: "Brume matinale", description: "Peinture inspirée des matinées brumeuses.", details: "Disponible à la vente.", contact: "mailto:letempsdudecor@gmail.com"  },
    {id:"05" ,src: "assets/meubles peints/tete1.webp", title: "Tête en l'air", description: "Peinture inspirée des matinées brumeuses.", details: "Disponible à la vente.", contact: "mailto:letempsdudecor@gmail.com"  },
    {id:"06" ,src: "assets/meubles peints/tete2.webp", title: "Tête en l'air", description: "Peinture inspirée des matinées brumeuses.", details: "Disponible à la vente.", contact: "mailto:letempsdudecor@gmail.com"  },
    {id:"07",src: "assets/meubles peints/tete3.webp", title: "Tête en l'air", description: "Peinture inspirée des matinées brumeuses.", details: "Disponible à la vente.", contact: "mailto:letempsdudecor@gmail.com" },
    {id:"08" ,src: "assets/meubles peints/tete4.webp", title: "Tête en l'air",  description: "Peinture inspirée des matinées brumeuses.", details: "Disponible à la vente.", contact: "mailto:letempsdudecor@gmail.com" },
    {id:"09" ,src: "assets/meubles peints/soleil1.webp", title: "Levé de soleil", description: "Peinture inspirée des matinées brumeuses.", details: "Disponible à la vente.", contact: "mailto:letempsdudecor@gmail.com"  },
    {id:"10" ,src: "assets/meubles peints/soleil2.webp", title: "Levé de soleil", description: "Peinture inspirée des matinées brumeuses.", details: "Disponible à la vente.", contact: "mailto:letempsdudecor@gmail.com"  },
    {id:"11" ,src: "assets/meubles peints/soleil3.webp", title: "Levé de soleil", description: "Peinture inspirée des matinées brumeuses.", details: "Disponible à la vente.", contact: "mailto:letempsdudecor@gmail.com"  },
    {id:"12" ,src: "assets/meubles peints/soleil4.webp", title: "Levé de soleil", description: "Peinture inspirée des matinées brumeuses.", details: "Disponible à la vente.", contact: "mailto:letempsdudecor@gmail.com"  },
  ],
};
