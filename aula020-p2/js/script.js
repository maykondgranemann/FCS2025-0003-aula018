console.log('Aula 20 - P1 - Manipulacao do DOM');


var h1_header = document.getElementById('h1-header');
h1_header.innerHTML = 'Novo texto do <i>H1</i> criado no JS';

var eleFooter = document.getElementsByTagName("footer");
eleFooter[0].innerHTML = "<p>Todos os direito reservados</p>";
console.log(eleFooter[0]);