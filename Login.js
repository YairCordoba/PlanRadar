// script.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario

    // Datos del formulario
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    // Definir credenciales de prueba
    const adminCredentials = {
        email: 'admin@admin.com',
        password: 'admin123'
    };
    const userCredentials = {
        email: 'user@user.com',
        password: 'user123'
    };

    // Verificar si las credenciales coinciden
    if (email === adminCredentials.email && password === adminCredentials.password) {
        window.location.href = 'admin_dashboard.html'; // Redirigir al perfil de admin
    } else if (email === userCredentials.email && password === userCredentials.password) {
        window.location.href = 'user_dashboard.html'; // Redirigir al perfil de usuario
    } else {
        alert('Correo o contraseña incorrectos');
    }
});
