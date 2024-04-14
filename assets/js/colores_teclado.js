const box = document.getElementById('key');

document.addEventListener('keydown', function (event) {
  if (event.key === 'a') {
    box.style.backgroundColor = 'pink';
  } else if (event.key === 's') {
    box.style.backgroundColor = 'orange';
  } else if (event.key === 'd') {
    box.style.backgroundColor = 'skyblue';
  } else if (event.key === 'q') {
    agregarDiv('purple');
  } else if (event.key === 'w') {
    agregarDiv('gray');
  } else if (event.key === 'e') {
    agregarDiv('brown');
  }
});

// Función para crear DIV
const agregarDiv = (color) => {
  //Crear div y guardarlo en constante
  const nuevoDiv = document.createElement('div');

  //Entrega de atributos
  nuevoDiv.style.width = '200px';
  nuevoDiv.style.height = '200px';
  nuevoDiv.style.border = 'solid black 1px';
  nuevoDiv.style.backgroundColor = color; 
  
  //Dibujar div en documento
  document.body.appendChild(nuevoDiv);
};
