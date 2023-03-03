const cards = $('.box');
var conferir = [];
var comecarJogo = false;
var selectCard = false;
$('#lost').html('JOGO DA MEMÓRIA');
        $('#lost').css('color', 'white')

function atribuirDesenhos(){

                // Reinicia tudo
                $('.boxSpin').removeClass('boxSpin').addClass('box');
                $('#lost').html('');
                selectCard = false;
                cards.css('color', 'black');
                let numbers = [1, 1, 2, 2, 3, 3, 4, 4];
                cards.off('click');
                conferir = [0,0]

// Deixa os números "numbers" aleatórios
  for (let i = numbers.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];   
    
    }
// Coloca os números nas cartas
  for (let i = 0; i < cards.length; i++) {
        cards[i].textContent = numbers[i];
}

// Contagem regressiva para iniciar
$('#lost').html('...3...');
setTimeout(function() {
    $('#lost').html('...2...');
  setTimeout(function() {
    $('#lost').html('...1...');
    setTimeout(function() {
        $('#lost').html('Escolha suas cartas');
    }, 1000);
  }, 1000);
}, 1000);

setTimeout(esconderNumeros, 3000);
}

// Esconde as cartas
function esconderNumeros(){
  cards.css('color', 'white');
  comecarJogo = true;
  cards.on('click', function() {
        $(this).css('color', 'black');
        $(this).removeClass('box').addClass('boxSpin');

    if (selectCard == false){
            conferir[0] = this.textContent;
            selectCard = true;
            console.log(conferir);

    } else if (selectCard == true) {
            conferir[1] = this.textContent;
            selectCard = false;
            console.log(conferir);
            verificarPar();  
        }
  });
}

// Verifica se perdeu
function verificarPar(){
  if (conferir[1] != conferir[0]){
        $('#lost').html('VOCÊ PERDEU');
        $('#lost').css('color', 'white')
    }}