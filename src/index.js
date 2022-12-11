import './style.css';
import header from './header.js';
import sidebar from './sidebar.js';
import main from './main.js';
import footer from './footer.js';

const content = document.createElement('div');
content.id = 'content'; 

document.querySelector('body').appendChild(content);









content.appendChild(header());
content.appendChild(sidebar());
content.appendChild(main());
content.appendChild(footer());
