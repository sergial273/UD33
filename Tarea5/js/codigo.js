function mostrarImagen(src, alt) {
    const imagenGrande = document.getElementById('imagenGrande');
    const imagen = imagenGrande.querySelector('img');
    const pieDeFoto = document.getElementById('pieDeFoto');
  
    imagen.src = src;
    imagen.alt = alt;
    pieDeFoto.textContent = alt;
  }
  