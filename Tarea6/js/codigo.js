document.addEventListener('DOMContentLoaded', function () {
    const horasElement = document.getElementById('horas');
    const minutosElement = document.getElementById('minutos');
    const segundosElement = document.getElementById('segundos');
  
    setInterval(actualizarReloj, 1000);
  
    function actualizarReloj() {
      const ahora = new Date();
  
      const horas = ahora.getHours().toString().padStart(2, '0');
      const minutos = ahora.getMinutes().toString().padStart(2, '0');
      const segundos = ahora.getSeconds().toString().padStart(2, '0');
  
      horasElement.textContent = horas;
      minutosElement.textContent = minutos;
      segundosElement.textContent = segundos;
    }
  });
  