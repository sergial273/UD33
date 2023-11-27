//Expresión 1 con fecha
const regexFecha = /\b\d{2}\/\d{2}\/\d{4}\b/;
const texto = "Nací el 05/04/1982 en Donostia.";
const resultado = regexFecha.test(texto);
console.log(resultado);

//Validar correo electronico
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
const email = "usuario@dominio.com";
const resultadoEmail = regexEmail.test(email);
console.log(resultadoEmail);

//reescritura de ecapeHTML
function escapeHTML(text) {
  const replacements = [
    ["&", "&amp;"],
    ['"', "&quot;"],
    ["<", "&lt;"],
    [">", "&gt;"],
  ];

  replacements.forEach((replace) => {
    const regex = new RegExp(replace[0], "g");
    text = text.replace(regex, replace[1]);
  });

  return text;
}

//Invertir nombre i apellido
const regexNombreApellido = /^(\w+)\s(\w+)$/;
const nombreCompleto = "John Smith";
const resultadoInvertido = nombreCompleto.replace(regexNombreApellido, "$2, $1");
console.log(resultadoInvertido);

//Eliminar codigo script
const regexEliminarEtiquetas = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
const htmlConEtiquetasPeligrosas = '<p>Ejemplo <script>script</script> ejemplo.</p>';
const resultadoSinEtiquetas = htmlConEtiquetasPeligrosas.replace(regexEliminarEtiquetas, "");
console.log(resultadoSinEtiquetas);

