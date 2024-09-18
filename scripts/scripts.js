// Datos de los animales
const animalData = {
    //Mamiferos
    Petauro: {
        name: "Petauro del azúcar (Petaurus breviceps)",
        img: "tigre.jpg",
        description: "El tigre es el felino más grande del mundo, conocido por sus rayas naranjas y negras."
    },
    Jerbo: {
        name: "Jerbo (Meriones unguiculatus)",
        img: "lemur.jpg",
        description: "El lémur es un primate nativo de Madagascar, conocido por su cola larga y ojos grandes."
    },
    Ratón: {
        name: "Ratón espinoso egipcio (Acomys cahirinus)",
        img: "lemur.jpg",
        description: "El lémur es un primate nativo de Madagascar, conocido por su cola larga y ojos grandes."
    },
    Hurón: {
        name: "Hurón (Mustela putorius furo)",
        img: "lemur.jpg",
        description: "El lémur es un primate nativo de Madagascar, conocido por su cola larga y ojos grandes."
    },
    Erizo: {
        name: "Erizo enano africano (Atelerix albiventris)",
        img: "erizo_enano_africano.jpg",
        description: "El lémur es un primate nativo de Madagascar, conocido por su cola larga y ojos grandes."
    },


    // Anfibios
    RanaPacman: {
        name: "Rana Pacman (Ceratophrys ornata)",
        img: "img/ceratophrys_ornata.jpeg",
        description: "La Rana Pacman es conocida por su gran apetito y su aspecto rechoncho. Es fácil de cuidar y puede crecer bastante grande."
    },
    SalamandraTigre: {
        name: "Salamandra Tigre (Ambystoma tigrinum)",
        img: "img/ambystoma_tigrinum.jpg",
        description: "La Salamandra Tigre es un anfibio terrestre que es fácil de mantener en cautiverio. Tiene patrones únicos y colores llamativos."
    },
    RanaDeOjosRojos: {
        name: "Rana de Ojos Rojos (Agalychnis callidryas)",
        img: "img/agalychnis_callidryas.jpeg",
        description: "Esta rana arbórea es famosa por sus ojos rojos brillantes y sus colores vibrantes. Es nativa de las selvas tropicales de América Central."
    },
    Axolote: {
        name: "Axolote (Ambystoma mexicanum)",
        img: "img/ambystoma_mexicanum.jpg",
        description: "El axolote es un anfibio único que puede regenerar partes de su cuerpo. Es nativo de los lagos de México y es conocido por su aspecto adorable."
    },
    RanaDardo: {
        name: "Rana Dardo Venenosa (Dendrobatidae)",
        img: "img/dendrobatidae.jpg",
        description: "Las ranas dardo venenosas son conocidas por sus colores brillantes. Aunque son venenosas en la naturaleza, en cautiverio no lo son."
    },


    // Reptiles
    GeckoLeopardo: {
        name: "Gecko Leopardo (Eublepharis macularius)",
        img: "img/eublepharis-macularius.webp",
        description: "El Gecko Leopardo es una mascota popular por su facilidad de cuidado y sus patrones de manchas únicas."
    },
    DragonBarbudo: {
        name: "Dragón Barbudo (Pogona vitticeps)",
        img: "img/pogona_vitticeps.jpg",
        description: "El Dragón Barbudo es popular entre los amantes de reptiles por su comportamiento dócil y su aspecto fascinante."
    },
    SerpienteMaizal: {
        name: "Serpiente del Maizal (Pantherophis guttatus)",
        img: "img/pantherophis_guttatus.jpg",
        description: "Esta serpiente es tranquila y fácil de cuidar, perfecta para principiantes. Es famosa por su coloración vibrante."
    },
    CamaleonVelado: {
        name: "Camaleón Velado (Chamaeleo calyptratus)",
        img: "img/chamaeleo_calyptratus.jpg",
        description: "El Camaleón Velado es conocido por su capacidad de cambiar de color y su lengua larga y rápida."
    },
    TortugaRusa: {
        name: "Tortuga Rusa (Testudo horsfieldii)",
        img: "img/testudo_horsfieldii.jpeg",
        description: "La Tortuga Rusa es una opción común para los amantes de reptiles debido a su tamaño compacto y facilidad de cuidado."
    },
    BoaConstrictor: {
        name: "Boa Constrictor (Boa constrictor)",
        img: "img/boa_constrictor.jpg",
        description: "La Boa Constrictor es impresionante por su tamaño, pero requiere experiencia debido a sus necesidades específicas."
    },
    IguanaVerde: {
        name: "Iguana Verde (Iguana iguana)",
        img: "img/iguana_iguana.jpg",
        description: "La Iguana Verde es un reptil grande y llamativo, conocido por su impresionante tamaño y su comportamiento activo."
    },
    TortugaOrejasRojas: {
        name: "Tortuga de Orejas Rojas (Trachemys scripta elegans)",
        img: "img/trachemys_scripta_elegans.jpg",
        description: "Esta tortuga semiacuática es fácil de mantener, famosa por las marcas rojas distintivas detrás de sus ojos."
    },
    SerpienteRey: {
        name: "Serpiente Rey (Lampropeltis getula)",
        img: "img/lampropeltis_getula.jpg",
        description: "Conocida por sus colores brillantes y su adaptabilidad, la Serpiente Rey es una opción excelente para los aficionados a las serpientes."
    }
};

// Función para mostrar detalles en el modal
// Función para redirigir a la página de detalles del animal
function showDetails(animal) {
    window.location.href = `detalle-animal.html?animal=${animal}`;
}


// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Desplazamiento de carrusel
const animalGrid = document.querySelector('.animal-grid');
let currentScrollPosition = 0;
const cardWidth = 290; // Ajusta este valor según el ancho real de tus tarjetas


// Función para mover a la izquierda en un carrusel específico
function moveLeft(groupId) {
    const animalGrid = document.querySelector(`#${groupId} .animal-grid`);
    const cardWidth = 290; // Ajusta este valor según el ancho de las tarjetas
    let currentScrollPosition = parseInt(animalGrid.getAttribute('data-scroll') || '0');

    if (currentScrollPosition > 0) {
        currentScrollPosition -= cardWidth;
        if (currentScrollPosition < 0) {
            currentScrollPosition = 0;
        }
        animalGrid.style.transform = `translateX(-${currentScrollPosition}px)`;
        animalGrid.setAttribute('data-scroll', currentScrollPosition);
    }
}

// Función para mover a la derecha en un carrusel específico
function moveRight(groupId) {
    const animalGrid = document.querySelector(`#${groupId} .animal-grid`);
    const cardWidth = 290; // Ajusta este valor según el ancho de las tarjetas
    let currentScrollPosition = parseInt(animalGrid.getAttribute('data-scroll') || '0');
    const maxScrollPosition = animalGrid.scrollWidth - animalGrid.offsetWidth;

    currentScrollPosition += cardWidth;
    if (currentScrollPosition > maxScrollPosition) {
        currentScrollPosition = maxScrollPosition;
    }
    animalGrid.style.transform = `translateX(-${currentScrollPosition}px)`;
    animalGrid.setAttribute('data-scroll', currentScrollPosition);
}

// Función para cargar el contenido de un archivo HTML
function loadContent(file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML += data;  // Añade el contenido al div #content
        })
        .catch(error => console.log('Error al cargar el archivo: ', error));
}

// Cargar archivos HTML de forma dinámica

loadContent('pages/anfibios.html');

loadContent('pages/reptiles.html');

loadContent('pages/peces.html');

loadContent('pages/aves.html');

loadContent('pages/artropodos.html');

loadContent('pages/mamiferos.html');




