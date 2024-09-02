import { homepage } from './homepage.js'
import { about } from './about.js'

// Definindo as rotas
const routes = {
    '/': homepage,
    '/about': about
    //'/contact': contactPage,
};

// Função para renderizar a página correta com base na rota atual
function router() {
    const path = location.hash.slice(1) || '/';
    const pageContent = routes[path] ? routes[path]() : `<h1>404 - Page Not Found</h1>`;
    document.getElementById('app').innerHTML = pageContent;
}

// Ouvir as mudanças na URL
window.addEventListener('hashchange', router);
window.addEventListener('load', router);
