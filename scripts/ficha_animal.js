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
    // Puedes agregar más animales aquí
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