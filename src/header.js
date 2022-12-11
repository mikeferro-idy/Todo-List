export default function header(){
    const element = document.createElement('div');
    element.id = 'header';

    const imageContainter = document.createElement('div');
    const img = document.createElement('img');
    img.src = '../images/playlist-check.png';
    imageContainter.appendChild(img);


    const logoContainer = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.textContent = 'Project: Todo List';
    logoContainer.appendChild(h1);


    element.appendChild(imageContainter);
    element.appendChild(logoContainer);
    
    return element;
}