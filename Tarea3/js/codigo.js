
document.querySelectorAll('p').forEach(parrafo => {
  parrafo.addEventListener('click', () => {
    alert('Se presionó un párrafo del documento.');
  });
});

document.querySelectorAll('#tabla2 p').forEach(parrafo => {
  parrafo.addEventListener('click', () => {
    alert('Se presionó un párrafo contenido en la segunda tabla.');
  });
});
