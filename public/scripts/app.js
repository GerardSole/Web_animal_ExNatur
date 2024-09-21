let token = null;  // Para guardar el token JWT

// Función para registrar al usuario
function register() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Verificar si todos los campos están llenos
    if (!username || !email || !password) {
        alert('Todos los campos son obligatorios');
        return;
    }

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
                alert('Registro exitoso');
                localStorage.setItem('token', data.token);  // Guardar el token JWT
                document.getElementById('auth-section').style.display = 'none';
                document.getElementById('forum-section').style.display = 'block';
            }
        })
        .catch((error) => {
            console.error('Error en el registro:', error.message);
            alert(`Error al registrar: ${error.message}`);
        });
}


// Función para iniciar sesión
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.token) {
                token = data.token;
                localStorage.setItem('token', token);
                document.getElementById('auth-section').style.display = 'none';
                document.getElementById('forum-section').style.display = 'block';
            } else {
                alert('Error al iniciar sesión');
            }
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
