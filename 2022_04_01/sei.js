console.log('lezione 6 - jquery');
$('#mio_bottone').text('Viva Jquery').css('color','blue')

//seleziono le righe pari e dispari della tabella 
//e aggiungo la classe
$("tr:even").addClass("table-primary")
$("tr:odd").addClass("table-secondary")