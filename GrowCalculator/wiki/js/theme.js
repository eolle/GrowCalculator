// Script para el modo oscuro y control de details
const themeToggle = document.getElementById('theme-toggle');

// Establecer tema oscuro por defecto si no hay preferencia guardada
const currentTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', currentTheme);
if (currentTheme === 'dark') {
    themeToggle.checked = true;
}

// Escuchar cambios en el switch
themeToggle.addEventListener('change', function() {
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
});

// Contraer todos los details por defecto
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('details').forEach(function(details) {
        details.removeAttribute('open');
    });
});
