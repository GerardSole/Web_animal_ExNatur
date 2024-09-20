// Datos de los animales
const animales = {
    'jerbo': {
        name: 'Jerbo (Meriones unguiculatus)',
        img: [
            '../../img/meriones_unguiculatus.jpg',
            '../../img/meriones_unguiculatus_2.webp',
            '../../img/meriones_unguiculatus_3.jpg',
            '../../img/meriones_unguiculatus_4.jpg'
        ],
        details: [
            'Familia: Muridae',
            'Distribución: Asia Central, principalmente Mongolia y China.',
            'Hábitat: Desiertos y áreas semiáridas.',
            'Dieta: Omnívoro (semillas, plantas, insectos).',
            'Esperanza de vida: 3-4 años.',
            'Tamaño: 10-12 cm de largo (sin incluir la cola).',
            'Comportamiento: Activo y social, vive en grupos pequeños.'
        ]
    },
    'axolote': {
        name: 'Axolote (Ambystoma mexicanum)',
        img: [
            '../../img/ambystoma_mexicanum.jpg',
        ],
        details: [
            'Familia: Ambystomatidae',
            'Distribución: Lagos de Xochimilco y Chalco, México.',
            'Hábitat: Lagos de agua dulce.',
            'Dieta: Carnívoro (pequeños peces, larvas de insectos).',
            'Esperanza de vida: 10-15 años en cautiverio.',
            'Tamaño: 15-45 cm de largo.',
            'Comportamiento: Puede regenerar partes del cuerpo, es acuático.'
        ]
    },
    'gecko_leopardo': {
        name: 'Gecko Leopardo (Eublepharis macularius)',
        img: [
            '../../img/eublepharis-macularius.webp',
        ],
        details: [
            'Familia: Eublepharidae',
            'Distribución: Asia central (Afganistán, Pakistán, India e Irán).',
            'Hábitat: Zonas áridas, desérticas y rocosas.',
            'Dieta: Insectívoro (grillos, gusanos de la harina, cucarachas).',
            'Esperanza de vida: 10-20 años en cautiverio.',
            'Tamaño: 18-28 cm de largo.',
            'Comportamiento: Nocturno, de hábitos terrestres, fácil de cuidar en cautiverio.'
        ]
    },
    'pogona_vitticeps': {
        name: 'Dragón Barbudo (Pogona vitticeps)',
        img: [
            '../../img/pogona_vitticeps.jpg',
        ],
        details: [
            'Familia: Agamidae',
            'Distribución: Australia Central.',
            'Hábitat: Zonas áridas, desiertos, y áreas rocosas.',
            'Dieta: Omnívoro (insectos, vegetales, frutas).',
            'Esperanza de vida: 10-15 años en cautiverio.',
            'Tamaño: 40-60 cm de largo, incluyendo la cola.',
            'Comportamiento: Diurno, dócil, y fácil de manipular en cautiverio.'
        ]
    },
    'iguana_iguana': {
        name: 'Iguana Verde (Iguana iguana)',
        img: [
            '../../img/iguana_iguana.jpg',
        ],
        details: [
            'Familia: Iguanidae',
            'Distribución: América Central y Sudamérica.',
            'Hábitat: Bosques tropicales y subtropicales, cerca de fuentes de agua.',
            'Dieta: Herbívoro (hojas, frutas, flores).',
            'Esperanza de vida: 15-20 años en cautiverio.',
            'Tamaño: 1.5-2 metros de largo, incluyendo la cola.',
            'Comportamiento: Arborícola y diurno, puede ser territorial.'
        ]
    },
    'chamaeleo_calyptratus': {
        name: 'Camaleón Velado (Chamaeleo calyptratus)',
        img: [
            '../../img/chamaeleo_calyptratus.jpg',
        ],
        details: [
            'Familia: Chamaeleonidae',
            'Distribución: Yemen y Arabia Saudita.',
            'Hábitat: Zonas montañosas y bosques secos.',
            'Dieta: Insectívoro (grillos, saltamontes, cucarachas).',
            'Esperanza de vida: 5-7 años en cautiverio.',
            'Tamaño: 35-60 cm de largo.',
            'Comportamiento: Arborícola y solitario, cambia de color dependiendo de su estado emocional.'
        ]
    },
    'boa_constrictor': {
        name: 'Boa Constrictor (Boa constrictor)',
        img: [
            '../../img/boa_constrictor.jpg',
        ],
        details: [
            'Familia: Boidae',
            'Distribución: América Central y Sudamérica.',
            'Hábitat: Bosques tropicales, sabanas, áreas cercanas a cuerpos de agua.',
            'Dieta: Carnívoro (roedores, aves, pequeños mamíferos).',
            'Esperanza de vida: 20-30 años en cautiverio.',
            'Tamaño: 2-4 metros de largo, dependiendo de la subespecie.',
            'Comportamiento: Principalmente nocturno, tranquilo, y buen candidato para cautiverio.'
        ]
    },
    'pantherophis_guttatus': {
        name: 'Serpiente del Maizal (Pantherophis guttatus)',
        img: [
            '../../img/pantherophis_guttatus.jpg',
        ],
        details: [
            'Familia: Colubridae',
            'Distribución: Sureste de los Estados Unidos.',
            'Hábitat: Bosques, campos abiertos, y áreas agrícolas.',
            'Dieta: Carnívoro (pequeños roedores, aves, lagartijas).',
            'Esperanza de vida: 15-20 años en cautiverio.',
            'Tamaño: 1.2-1.8 metros de largo.',
            'Comportamiento: Diurna, tranquila, y fácil de manejar en cautiverio.'
        ]
    },
    'lampropeltis_getula': {
        name: 'Serpiente Rey (Lampropeltis getula)',
        img: [
            '../../img/lampropeltis_getula.jpg',
        ],
        details: [
            'Familia: Colubridae',
            'Distribución: Estados Unidos, México y América Central.',
            'Hábitat: Bosques, campos abiertos, y áreas semiáridas.',
            'Dieta: Carnívoro (roedores, otras serpientes, lagartijas).',
            'Esperanza de vida: 15-20 años en cautiverio.',
            'Tamaño: 1.2-1.8 metros de largo.',
            'Comportamiento: Diurna y activa, conocida por su habilidad para alimentarse de otras serpientes.'
        ]
    },
    'testudo_horsfieldii': {
        name: 'Tortuga Rusa (Testudo horsfieldii)',
        img: [
            '../../img/testudo_horsfieldii.jpeg',
        ],
        details: [
            'Familia: Testudinidae',
            'Distribución: Asia Central (Irán, Pakistán, Afganistán, Kazajistán).',
            'Hábitat: Zonas áridas y semiáridas, estepas y áreas desérticas.',
            'Dieta: Herbívora (hierbas, plantas, flores).',
            'Esperanza de vida: 40-50 años en cautiverio.',
            'Tamaño: 15-25 cm de largo.',
            'Comportamiento: Diurna, activa en primavera y verano, hiberna durante el invierno.'
        ]
    },
    'trachemys_scripta_elegans': {
        name: 'Tortuga de Orejas Rojas (Trachemys scripta elegans)',
        img: [
            '../../img/trachemys_scripta_elegans.jpg',
        ],
        details: [
            'Familia: Emydidae',
            'Distribución: Estados Unidos, principalmente en el Valle del Misisipi.',
            'Hábitat: Lagos, estanques, ríos lentos y áreas con agua dulce.',
            'Dieta: Omnívora (plantas acuáticas, peces pequeños, insectos).',
            'Esperanza de vida: 20-30 años en cautiverio.',
            'Tamaño: 20-30 cm de largo.',
            'Comportamiento: Diurna, excelente nadadora, se calienta al sol en troncos o rocas fuera del agua.'
        ]
    },
    //AVES
    'amazona_autumnalis': {
        name: 'Loro Corona Roja (Amazona autumnalis)',
        img: [
            '../../img/amazona_autumnalis.jpg',
        ],
        details: [
            'Familia: Psittacidae',
            'Distribución: América Central y Sudamérica.',
            'Hábitat: Bosques tropicales y subtropicales.',
            'Dieta: Frugívoro (frutas, semillas, nueces, flores).',
            'Esperanza de vida: 40-60 años en cautiverio.',
            'Tamaño: 33-35 cm de largo.',
            'Comportamiento: Social, puede imitar sonidos humanos, forma parejas de por vida.'
        ]
    },
    'ara_macao': {
        name: 'Guacamayo Rojo (Ara macao)',
        img: [
            '../../img/ara_macao.jpg',
        ],
        details: [
            'Familia: Psittacidae',
            'Distribución: América Central y Sudamérica.',
            'Hábitat: Bosques tropicales y subtropicales, especialmente cerca de ríos.',
            'Dieta: Frugívoro (frutas, nueces, semillas, flores).',
            'Esperanza de vida: 50-60 años en cautiverio.',
            'Tamaño: 81-96 cm de largo, incluyendo la cola.',
            'Comportamiento: Muy social e inteligente, forma lazos fuertes con sus compañeros.'
        ]
    },
    'serinus_canaria': {
        name: 'Canario (Serinus canaria)',
        img: [
            '../../img/serinus_canaria.jpg',
        ],
        details: [
            'Familia: Fringillidae',
            'Distribución: Islas Canarias, Madeira y Azores.',
            'Hábitat: Áreas boscosas y matorrales en altitudes bajas.',
            'Dieta: Granívoro (semillas, pequeños insectos).',
            'Esperanza de vida: 10-15 años en cautiverio.',
            'Tamaño: 12-13 cm de largo.',
            'Comportamiento: Conocido por su canto melódico, especialmente los machos, sociable pero territorial con otros machos.'
        ]
    },
    'melopsittacus_undulatus': {
        name: 'Periquito Australiano (Melopsittacus undulatus)',
        img: [
            '../../img/melopsittacus_undulatus.jpeg',
        ],
        details: [
            'Familia: Psittacidae',
            'Distribución: Australia.',
            'Hábitat: Zonas áridas, sabanas, áreas de matorrales.',
            'Dieta: Granívoro (semillas, frutas, vegetales).',
            'Esperanza de vida: 5-10 años en cautiverio.',
            'Tamaño: 18 cm de largo.',
            'Comportamiento: Social, juguetón, y puede aprender a imitar sonidos humanos.'
        ]
    },
    'ramphastos_sulfuratus': {
        name: 'Tucán Pico Iris (Ramphastos sulfuratus)',
        img: [
            '../../img/ramphastos_sulfuratus.jpg',
        ],
        details: [
            'Familia: Ramphastidae',
            'Distribución: América Central y norte de Sudamérica.',
            'Hábitat: Bosques tropicales y subtropicales.',
            'Dieta: Frugívoro (frutas, insectos, pequeños reptiles).',
            'Esperanza de vida: 15-20 años en cautiverio.',
            'Tamaño: 42-55 cm de largo.',
            'Comportamiento: Social, se mueve en grupos pequeños, característico por su gran pico colorido.'
        ]
    },

};

let currentSlide = 0; // Variable para rastrear la imagen actual

// Función para cargar los datos del animal
function cargarFichaAnimal() {
    const params = new URLSearchParams(window.location.search);
    const animalKey = params.get('animal');

    if (animales[animalKey]) {
        const animal = animales[animalKey];

        // Actualizar el título y nombre del animal
        document.getElementById('animal-title').textContent = `Ficha Técnica: ${animal.name}`;
        document.getElementById('animal-name').textContent = animal.name;

        // Crear el carrusel de imágenes
        const carousel = document.getElementById('carousel');
        carousel.innerHTML = ''; // Limpiar cualquier contenido previo del carrusel

        // Insertar imágenes en el carrusel
        animal.img.forEach((imgSrc, index) => {
            const animalCard = document.createElement('div');
            animalCard.classList.add('animal-card');

            // Crear contenedor de la imagen
            const imgContainer = document.createElement('div');
            imgContainer.classList.add('animal-card-img');
            const img = document.createElement('img');
            img.src = imgSrc;
            img.alt = animal.name;
            img.style.display = index === 0 ? 'block' : 'none'; // Solo la primera visible

            imgContainer.appendChild(img);
            animalCard.appendChild(imgContainer);
            carousel.appendChild(animalCard);
        });

        // Agregar los detalles del animal
        const detailsList = document.getElementById('animal-details');
        detailsList.innerHTML = ''; // Limpiar detalles anteriores
        animal.details.forEach(detail => {
            const li = document.createElement('li');
            li.textContent = detail;
            detailsList.appendChild(li);
        });
    } else {
        // Mostrar mensaje si el animal no existe
        document.getElementById('animal-title').textContent = 'Animal no encontrado';
        document.getElementById('animal-name').textContent = 'Este animal no tiene ficha técnica.';
    }
}

// Función para mover el carrusel hacia la izquierda o derecha
function moveSlide(n) {
    const images = document.querySelectorAll('.animal-card img');
    images[currentSlide].style.display = 'none'; // Ocultar la imagen actual
    currentSlide = (currentSlide + n + images.length) % images.length; // Calcular el nuevo índice
    images[currentSlide].style.display = 'block'; // Mostrar la nueva imagen
}

// Ejecutar la función cuando la página cargue
window.onload = cargarFichaAnimal;