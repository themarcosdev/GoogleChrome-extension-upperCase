document.addEventListener('DOMContentLoaded',function(){ // carrega o conteconteúdo do DOM e cria uma funcao
    document.querySelector('#botao').addEventListener('click', function(){ // check se houve no html, o botao foi clicado e cria uma funcao que transforma o texto para string.
        let text = document.querySelector('#texto').value; // funcao do texto para string.
        document.querySelector("#resultado").innerHTML = upper(text);
    })
      function upper(text){
        return text.toUpperCase(); // funcao para tranform e retornar todo conteudo do text para MAIUSCULO.
      }

  })