let token = null;  // Para guardar el token JWT

// Función para registrar al usuario
function register() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Verificar si los campos están llenos
    if (!username || !email || !password) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Hacer la solicitud POST al backend (Ajusta la ruta según tu backend)
    fetch('/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
    })
        .then((response) => {
            if (!response.ok) {
                return response.json().then((error) => {
                    throw new Error(error.message || 'Error en el registro');
                });
            }
            return response.json();
        })
        .then((data) => {
            if (data.token) {
                // Guardar el token y el nombre de usuario en localStorage
                localStorage.setItem('token', data.token);
                localStorage.setItem('username', username);  // Guardamos el nombre del usuario

                // Redirigir a la página principal
                window.location.href = 'index.html';
            }
        })
        .catch((error) => {
            console.error('Error en el registro:', error.message);
            alert(`Error al registrar: ${error.message}`);
        });
}



function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert('Por favor, completa ambos campos.');
        return;
    }

    // Verificar que la ruta del fetch sea la correcta
    fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }), // Enviamos los datos de login al servidor
    })
        .then(response => {
            // Verificamos si la respuesta es un JSON correcto
            if (!response.ok) {
                return response.json().then(error => {
                    throw new Error(error.message || 'Error en el inicio de sesión');
                });
            }
            return response.json();
        })
        .then(data => {
            // Si el login es exitoso, guardamos el token y el username
            if (data.token) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('username', data.username);

                // Redirigir a la página principal
                window.location.href = 'index.html';
            }
        })
        .catch(error => {
            console.error('Error en el inicio de sesión:', error.message);
            alert(`Error al iniciar sesión: ${error.message}`);
        });
}




// Enviar un comentario al foro
function sendMessage() {
    const message = document.getElementById('discussion-input').value;

    fetch('/api/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': token,  // Usar el token para autenticación
        },
        body: JSON.stringify({ message }),
    })
        .then((response) => response.json())
        .then((data) => {
            alert(data.message);
            loadMessages();  // Recargar mensajes después de enviar uno
        });
}

// Cargar los mensajes del foro
function loadMessages() {
    fetch('/api/messages')
        .then((response) => response.json())
        .then((data) => {
            const commentsDiv = document.getElementById('discussion-comments');
            commentsDiv.innerHTML = '';  // Limpiar comentarios anteriores

            data.forEach((msg) => {
                const commentElement = document.createElement('div');
                commentElement.innerHTML = `<b>${msg.userId.username}</b> (${new Date(msg.createdAt).toLocaleString()}): ${msg.message}`;
                commentsDiv.appendChild(commentElement);
            });
        });
}
