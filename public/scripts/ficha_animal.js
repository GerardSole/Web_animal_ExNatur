// Datos de los animales
const animales = {
    'meriones_unguiculatus': {
        name: 'Jerbo (Meriones unguiculatus)',
        img: [
            '../../img/meriones_unguiculatus.jpg',
            '../../img/meriones_unguiculatus_2.webp',
            '../../img/meriones_unguiculatus_3.jpg',
            '../../img/meriones_unguiculatus_4.jpg',
            '../../img/meriones_unguiculatus_5.jpg'
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
    'ambystoma_mexicanum': {
        name: 'Axolote (Ambystoma mexicanum)',
        img: [
            '../../img/ambystoma_mexicanum.jpg',
            '../../img/ambystoma_mexicanum_2.jpg',
            '../../img/ambystoma_mexicanum_3.jpeg',
            '../../img/ambystoma_mexicanum_4.jpg',
            '../../img/ambystoma_mexicanum_5.jpeg',
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
            '../../img/eublepharis_macularius.webp',
            '../../img/eublepharis_macularius_2.jpg',
            '../../img/eublepharis_macularius_3.jpeg',
            '../../img/eublepharis_macularius_4.png',
            '../../img/eublepharis_macularius_5.jpg',
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
            '../../img/pogona_vitticeps_2.jpg',
            '../../img/pogona_vitticeps_3.webp',
            '../../img/pogona_vitticeps_4.jpg',
            '../../img/pogona_vitticeps_5.jpg',
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
            '../../img/iguana_iguana_2.webp',
            '../../img/iguana_iguana_3.webp',
            '../../img/iguana_iguana_4.jpg',
            '../../img/iguana_iguana_5.jpg',
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
            '../../img/chamaeleo_calyptratus_2.jpg',
            '../../img/chamaeleo_calyptratus_3.webp',
            '../../img/chamaeleo_calyptratus_4.jpg',
            '../../img/chamaeleo_calyptratus_5.jpg',
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
            '../../img/boa_constrictor_2.webp',
            '../../img/boa_constrictor_5.jpg',
            '../../img/boa_constrictor_4.avif',
            '../../img/boa_constrictor_3.webp',

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
            '../../img/pantherophis_guttatus_2.jpg',
            '../../img/pantherophis_guttatus_3.webp',
            '../../img/pantherophis_guttatus_4.avif',
            '../../img/pantherophis_guttatus_5.jpg',
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
            '../../img/lampropeltis_getula_2.webp',
            '../../img/lampropeltis_getula_3.jpg',
            '../../img/lampropeltis_getula_4.jpg',
            '../../img/lampropeltis_getula_5.jpg',
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
            '../../img/testudo_horsfieldii_3.jpg',
            '../../img/testudo_horsfieldii_2.jpg',
            '../../img/testudo_horsfieldii_4.jpg',
            '../../img/testudo_horsfieldii_5.jpg',
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
            '../../img/trachemys_scripta_elegans_2.jpg',
            '../../img/trachemys_scripta_elegans_5.jpg',
            '../../img/trachemys_scripta_elegans_4.jpg',
            '../../img/trachemys_scripta_elegans_3.jpeg',
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

    //PECES

    'betta_splendens': {
        name: 'Pez Betta (Betta splendens)',
        img: [
            '../../img/betta_splendens.webp',
        ],
        details: [
            'Familia: Osphronemidae',
            'Distribución: Sudeste Asiático (Tailandia, Camboya, Vietnam).',
            'Hábitat: Arroyos lentos, estanques y campos de arroz.',
            'Dieta: Carnívoro (larvas de insectos, pequeños crustáceos).',
            'Esperanza de vida: 3-5 años en cautiverio.',
            'Tamaño: 6-8 cm de largo.',
            'Comportamiento: Territorial y agresivo con otros machos, mejor mantenerlo solo o con peces compatibles.'
        ]
    },
    'paracheirodon_innesi': {
        name: 'Tetra Neón (Paracheirodon innesi)',
        img: [
            '../../img/paracheirodon_innesi.jpeg',
        ],
        details: [
            'Familia: Characidae',
            'Distribución: Cuenca del Amazonas (Brasil, Perú, Colombia).',
            'Hábitat: Aguas dulces lentas y poco profundas.',
            'Dieta: Omnívoro (alimentos pequeños, como insectos y plantas).',
            'Esperanza de vida: 5 años en cautiverio.',
            'Tamaño: 3-4 cm de largo.',
            'Comportamiento: Pacífico y social, debe mantenerse en grupos.'
        ]
    },
    'pterophyllum_scalare': {
        name: 'Pez Ángel (Pterophyllum scalare)',
        img: [
            '../../img/pterophyllum_scalare.jpg',
        ],
        details: [
            'Familia: Cichlidae',
            'Distribución: Cuenca del Amazonas y ríos en América del Sur.',
            'Hábitat: Aguas lentas de ríos y lagos.',
            'Dieta: Omnívoro (insectos, crustáceos, algas).',
            'Esperanza de vida: 10-15 años en cautiverio.',
            'Tamaño: 15 cm de largo.',
            'Comportamiento: Territorial, pero generalmente pacífico en acuarios comunitarios grandes.'
        ]
    },
    'poecilia_reticulata': {
        name: 'Guppy (Poecilia reticulata)',
        img: [
            '../../img/poecilia_reticulata.jpg',
        ],
        details: [
            'Familia: Poeciliidae',
            'Distribución: América del Sur.',
            'Hábitat: Aguas dulces y salobres de ríos y lagunas.',
            'Dieta: Omnívoro (algas, pequeños insectos, crustáceos).',
            'Esperanza de vida: 2-3 años en cautiverio.',
            'Tamaño: 3-6 cm de largo.',
            'Comportamiento: Pacífico y activo, ideal para acuarios comunitarios.'
        ]
    },
    'poecilia_sphenops': {
        name: 'Molly (Poecilia sphenops)',
        img: [
            '../../img/poecilia_sphenops.webp',
        ],
        details: [
            'Familia: Poeciliidae',
            'Distribución: América Central y del Norte.',
            'Hábitat: Aguas dulces y salobres.',
            'Dieta: Omnívoro (algas, plantas, pequeños invertebrados).',
            'Esperanza de vida: 3-5 años en cautiverio.',
            'Tamaño: 4-10 cm de largo.',
            'Comportamiento: Pacífico, ideal para acuarios comunitarios.'
        ]
    },
    'xiphophorus_maculatus': {
        name: 'Pez Platy (Xiphophorus maculatus)',
        img: [
            '../../img/xiphophorus_maculatus.jpg',
        ],
        details: [
            'Familia: Poeciliidae',
            'Distribución: América Central.',
            'Hábitat: Aguas dulces de ríos y lagunas.',
            'Dieta: Omnívoro (algas, pequeños invertebrados).',
            'Esperanza de vida: 3-5 años en cautiverio.',
            'Tamaño: 4-6 cm de largo.',
            'Comportamiento: Pacífico y sociable, ideal para acuarios comunitarios.'
        ]
    },
    'puntius_titteya': {
        name: 'Barbo Cereza (Puntius titteya)',
        img: [
            '../../img/puntius_titteya.jpeg',
        ],
        details: [
            'Familia: Cyprinidae',
            'Distribución: Sri Lanka.',
            'Hábitat: Arroyos y ríos lentos.',
            'Dieta: Omnívoro (algas, pequeños invertebrados).',
            'Esperanza de vida: 4-5 años en cautiverio.',
            'Tamaño: 4-5 cm de largo.',
            'Comportamiento: Pacífico, pero puede ser territorial durante la reproducción.'
        ]
    },
    'corydoras_panda': {
        name: 'Corydora Panda (Corydoras panda)',
        img: [
            '../../img/corydoras_panda.jpeg',
        ],
        details: [
            'Familia: Callichthyidae',
            'Distribución: Cuenca del Amazonas (Perú).',
            'Hábitat: Aguas dulces claras y oxigenadas.',
            'Dieta: Omnívoro (larvas de insectos, algas).',
            'Esperanza de vida: 5-10 años en cautiverio.',
            'Tamaño: 5-6 cm de largo.',
            'Comportamiento: Pacífico y social, debe mantenerse en grupos.'
        ]
    },
    'corydoras_aeneus': {
        name: 'Corydora Bronceada (Corydoras aeneus)',
        img: [
            '../../img/corydoras_aeneus.jpg',
        ],
        details: [
            'Familia: Callichthyidae',
            'Distribución: América del Sur (Venezuela, Argentina).',
            'Hábitat: Aguas dulces, ríos y lagunas.',
            'Dieta: Omnívoro (larvas de insectos, algas).',
            'Esperanza de vida: 5-10 años en cautiverio.',
            'Tamaño: 6-7 cm de largo.',
            'Comportamiento: Pacífico y social, debe mantenerse en grupos.'
        ]
    },
    'paracheirodon_axelrodi': {
        name: 'Tetra Cardenal (Paracheirodon axelrodi)',
        img: [
            '../../img/paracheirodon_axelrodi.jpg',
        ],
        details: [
            'Familia: Characidae',
            'Distribución: Cuenca del Orinoco y Río Negro (Sudamérica).',
            'Hábitat: Aguas lentas de ríos y lagos.',
            'Dieta: Omnívoro (pequeños insectos y algas).',
            'Esperanza de vida: 4-5 años en cautiverio.',
            'Tamaño: 3-5 cm de largo.',
            'Comportamiento: Pacífico y social, mejor mantenerlo en grupos.'
        ]
    },
    'danio_rerio': {
        name: 'Pez Cebra (Danio rerio)',
        img: [
            '../../img/danio_rerio.webp',
        ],
        details: [
            'Familia: Cyprinidae',
            'Distribución: Asia (India, Pakistán, Bangladesh).',
            'Hábitat: Aguas dulces de ríos y arroyos.',
            'Dieta: Omnívoro (algas, pequeños invertebrados).',
            'Esperanza de vida: 2-3 años en cautiverio.',
            'Tamaño: 4-5 cm de largo.',
            'Comportamiento: Activo y social, ideal para acuarios comunitarios.'
        ]
    },
    'trichopodus_leeri': {
        name: 'Gurami Perla (Trichopodus leeri)',
        img: [
            '../../img/trichopodus_leeri.jpg',
        ],
        details: [
            'Familia: Osphronemidae',
            'Distribución: Sudeste Asiático.',
            'Hábitat: Aguas dulces lentas y estancadas.',
            'Dieta: Omnívoro (algas, insectos pequeños).',
            'Esperanza de vida: 5-7 años en cautiverio.',
            'Tamaño: 12 cm de largo.',
            'Comportamiento: Pacífico, aunque los machos pueden ser territoriales.'
        ]
    },
    'otocinclus': {
        name: 'Otocinclo (Otocinclus)',
        img: [
            '../../img/otocinclus.jpg',
        ],
        details: [
            'Familia: Loricariidae',
            'Distribución: América del Sur.',
            'Hábitat: Aguas dulces de ríos y arroyos.',
            'Dieta: Herbívoro (algas).',
            'Esperanza de vida: 3-5 años en cautiverio.',
            'Tamaño: 4-5 cm de largo.',
            'Comportamiento: Pacífico, ideal para acuarios comunitarios, ayuda a controlar las algas.'
        ]
    },
    'symphysodon': {
        name: 'Pez Disco (Symphysodon)',
        img: [
            '../../img/symphysodon.jpg',
        ],
        details: [
            'Familia: Cichlidae',
            'Distribución: Cuenca del Amazonas.',
            'Hábitat: Aguas lentas y profundas de ríos.',
            'Dieta: Omnívoro (pequeños insectos, crustáceos, algas).',
            'Esperanza de vida: 10-15 años en cautiverio.',
            'Tamaño: 15-20 cm de largo.',
            'Comportamiento: Pacífico, pero requiere cuidados específicos.'
        ]
    },
    'cyprinus_carpio': {
        name: 'Carpa Común (Cyprinus carpio)',
        img: [
            '../../img/cyprinus_carpio.jpg',
        ],
        details: [
            'Familia: Cyprinidae',
            'Distribución: Asia y Europa (introducida en todo el mundo).',
            'Hábitat: Lagos, estanques y ríos lentos.',
            'Dieta: Omnívoro (plantas acuáticas, insectos, pequeños invertebrados).',
            'Esperanza de vida: 20-40 años en cautiverio.',
            'Tamaño: 40-100 cm de largo, dependiendo de las condiciones.',
            'Comportamiento: Pacífico, pero requiere grandes cuerpos de agua.'
        ]
    },
    'amphiprion_ocellaris': {
        name: 'Pez Payaso (Amphiprion ocellaris)',
        img: [
            '../../img/amphiprion_ocellaris.jpg',
        ],
        details: [
            'Familia: Pomacentridae',
            'Distribución: Océano Índico y Pacífico Occidental.',
            'Hábitat: Arrecifes de coral, especialmente alrededor de anémonas.',
            'Dieta: Omnívoro (algas, pequeños crustáceos, zooplancton).',
            'Esperanza de vida: 6-10 años en cautiverio.',
            'Tamaño: 8-12 cm de largo.',
            'Comportamiento: Pacífico, pero puede volverse territorial cerca de anémonas.'
        ]
    },

};

document.addEventListener("DOMContentLoaded", () => {
    const animal = new URLSearchParams(window.location.search).get('animal');
    cargarFichaAnimal(animal); // Cargar la ficha del animal
    cargarMensajes(animal); // Cargar los mensajes del foro

    // Agregar evento para enviar el comentario cuando se haga clic en el botón
    document.getElementById('submit-comment').addEventListener('click', () => {
        enviarMensaje(animal);
    });
});

// Función para cargar los datos del animal
function cargarFichaAnimal() {
    const params = new URLSearchParams(window.location.search);
    const animalKey = params.get('animal');

    if (animales[animalKey]) {
        const animal = animales[animalKey];

        // Actualizar el título y nombre del animal
        document.getElementById('animal-title').textContent = `Ficha Técnica: ${animal.name}`;
        document.getElementById('animal-name').textContent = animal.name;

        // Crear la fila de imágenes
        const imagesContainer = document.querySelector('.animal-images');
        imagesContainer.innerHTML = ''; // Limpiar cualquier contenido previo

        // Insertar imágenes en la fila
        animal.img.forEach(imgSrc => {
            const imgElement = document.createElement('img');
            imgElement.src = imgSrc;
            imgElement.alt = animal.name;
            imagesContainer.appendChild(imgElement);
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

// Función para cargar los mensajes del foro
function cargarMensajes(animal) {
    fetch(`/api/messages/${animal}`)
        .then(response => response.json())
        .then(messages => {
            const discussionComments = document.getElementById('discussion-comments');
            discussionComments.innerHTML = ''; // Limpiar comentarios previos

            // Invertir el array para mostrar los mensajes más recientes primero
            messages.reverse().forEach(message => {
                const messageDiv = document.createElement('div');
                messageDiv.classList.add('comment');
                messageDiv.innerHTML = `
                    <div class="comment-header">
                        <strong>${message.username}</strong> (${new Date(message.createdAt).toLocaleString()}):
                    </div>
                    <p>${message.message}</p>
                    <button class="reply-btn" data-message-id="${message._id}">🔄 Responder</button>
                    <div class="reply-section" id="reply-section-${message._id}" style="display: none;">
                        <textarea id="reply-input-${message._id}" rows="3" placeholder="Escribe tu respuesta..."></textarea>
                        <button class="send-reply-btn" onclick="enviarRespuesta('${message._id}', '${animal}')">Enviar Respuesta</button>
                    </div>
                    <div class="replies" id="replies-${message._id}">
                        <!-- Aquí se mostrarán las respuestas -->
                    </div>
                `;
                discussionComments.prepend(messageDiv); // Mostrar mensajes más recientes primero

                // Mostrar las respuestas debajo del mensaje si las hay
                mostrarRespuestas(message.replies, `replies-${message._id}`);
            });

            // Añadir event listener a cada botón de respuesta en los mensajes principales
            document.querySelectorAll('.reply-btn').forEach(button => {
                button.addEventListener('click', (event) => {
                    const messageId = event.target.getAttribute('data-message-id');
                    const replySection = document.getElementById(`reply-section-${messageId}`);
                    replySection.style.display = replySection.style.display === 'none' ? 'block' : 'none';
                });
            });
        })
        .catch(error => console.error('Error al cargar los mensajes:', error));
}

// Función para mostrar las respuestas, sin opción de responder a ellas
function mostrarRespuestas(replies, containerId) {
    const repliesDiv = document.getElementById(containerId);

    replies.reverse().forEach(reply => {
        const replyDiv = document.createElement('div');
        replyDiv.classList.add('reply');
        replyDiv.innerHTML = `
            <div class="reply-header">
                <strong>${reply.username}</strong> (${new Date(reply.createdAt).toLocaleString()}):
            </div>
            <p>${reply.replyMessage}</p>
        `;
        repliesDiv.prepend(replyDiv); // Mostrar respuestas más recientes primero
    });
}


// Función para enviar una respuesta (a un mensaje o a otra respuesta)
function enviarRespuesta(messageId, animal) {
    const replyInput = document.getElementById(`reply-input-${messageId}`);
    const replyMessage = replyInput.value.trim();
    const username = localStorage.getItem('username'); // Obtener el nombre del usuario

    if (!replyMessage) {
        alert('No puedes enviar una respuesta vacía.');
        return;
    }

    fetch('/api/messages/reply', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messageId, animal, username, replyMessage }),
    })
        .then(response => response.json())
        .then(newReply => {
            const repliesDiv = document.getElementById(`replies-${messageId}`);
            const replyDiv = document.createElement('div');
            replyDiv.classList.add('reply');
            replyDiv.innerHTML = `
            <div class="reply-header">
                <strong>${newReply.username}</strong> (${new Date(newReply.createdAt).toLocaleString()}):
            </div>
            <p>${newReply.replyMessage}</p>
        `;
            repliesDiv.prepend(replyDiv); // Mostrar la respuesta más reciente primero

            replyInput.value = ''; // Limpiar el campo de entrada
            document.getElementById(`reply-section-${messageId}`).style.display = 'none'; // Ocultar el cuadro de respuesta
        })
        .catch(error => console.error('Error al enviar la respuesta:', error));
}



// Función para enviar un mensaje principal
function enviarMensaje(animal) {
    const messageInput = document.getElementById('discussion-input');
    const messageText = messageInput.value.trim();
    const username = localStorage.getItem('username'); // Obtener el nombre del usuario

    // Verificar si el usuario está logueado
    if (!username) {
        alert('Debes estar logueado para enviar mensajes.');
        return;
    }

    // Verificar si el mensaje no está vacío
    if (!messageText) {
        alert('No puedes enviar un mensaje vacío.');
        return;
    }

    // Enviar el mensaje
    fetch('/api/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ animal, username, message: messageText }),
    })
        .then(response => response.json())
        .then(newMessage => {
            const discussionComments = document.getElementById('discussion-comments');

            // Crear el nuevo mensaje dinámicamente
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('comment');
            messageDiv.innerHTML = `
            <div class="comment-header">
                <strong>${newMessage.username}</strong> (${new Date(newMessage.createdAt).toLocaleString()}):
            </div>
            <p>${newMessage.message}</p>
            <button class="reply-btn" data-message-id="${newMessage._id}">🔄 Responder</button>
            <div class="reply-section" id="reply-section-${newMessage._id}" style="display: none;">
                <textarea id="reply-input-${newMessage._id}" rows="3" placeholder="Escribe tu respuesta..."></textarea>
                <button class="send-reply-btn" onclick="enviarRespuesta('${newMessage._id}', '${animal}')">Enviar Respuesta</button>
            </div>
            <div class="replies" id="replies-${newMessage._id}">
                <!-- Aquí se mostrarán las respuestas -->
            </div>
        `;
            discussionComments.prepend(messageDiv); // Añadir el mensaje al principio

            // Limpiar el campo de entrada
            messageInput.value = '';

            // Añadir el event listener para el botón de responder en el nuevo mensaje
            addReplyEventListeners(newMessage._id);
        })
        .catch(error => console.error('Error al enviar el mensaje:', error));
}

// Función para añadir el event listener al botón de "Responder"
function addReplyEventListeners(messageId) {
    const replyButton = document.querySelector(`.reply-btn[data-message-id="${messageId}"]`);

    if (replyButton) {
        replyButton.addEventListener('click', () => {
            const replySection = document.getElementById(`reply-section-${messageId}`);
            replySection.style.display = replySection.style.display === 'none' ? 'block' : 'none';
        });
    }
}


// Ejecutar la función cuando la página cargue
window.onload = cargarFichaAnimal;
