document.addEventListener('DOMContentLoaded', function () {
    const pantalla = document.getElementById('pantalla');
    const teclas = document.getElementById('teclas');
  
    let expresion = '';
  
    teclas.addEventListener('click', function (event) {
      if (event.target.matches('button')) {
        const valorTecla = event.target.textContent;
  
        if (valorTecla === '=') {
          try {
            expresion = calcular(expresion);
          } catch (error) {
            expresion = 'Error';
          }
        } else if (valorTecla === 'C') {
          expresion = '';
        } else {
          expresion += valorTecla;
        }
  
        pantalla.textContent = expresion;
      }
    });
  
    document.addEventListener('keydown', function (event) {
      const tecla = event.key;
  
      if (/^[0-9+\-*/.C=]$/.test(tecla)) {
        event.preventDefault();
  
        if (tecla === '=' || tecla === 'Enter') {
          try {
            expresion = calcular(expresion);
          } catch (error) {
            expresion = 'Error';
          }
        } else if (tecla === 'C') {
          expresion = '';
        } else {
          expresion += tecla;
        }
  
        pantalla.textContent = expresion;
      }
    });
  
    function calcular(expresion) {
      return Function(`'use strict'; return (${expresion})`)();
    }
  });
  
