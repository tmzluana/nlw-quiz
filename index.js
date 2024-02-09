const perguntas = [
    {
    pergunta: "Qual é a palavra-chave usada para declarar uma variável em JavaScript?",
        resposta: [
                        "let",
                        "var",
                        "const"
                    ],
                    correta: 0
                },
                {
                    pergunta: "Qual método JavaScript é usado para imprimir algo no console?",
                    resposta: [
                        "console.print()",
                        "print()",
                        "console.log()"
                    ],
                    correta: 2
                },
                {
                    pergunta: "Qual símbolo é usado para comentários de uma linha em JavaScript?",
                    resposta: [
                        "//",
                        "/* */",
                        "#"
                    ],
                    correta: 0
                },
                {
                    pergunta: "Qual método JavaScript é usado para alterar o conteúdo de um elemento HTML?",
                    resposta: [
                        "innerHTML",
                        "innerText",
                        "textContent"
                    ],
                    correta: 0
                },
                {
                    pergunta: "Qual operador JavaScript é usado para comparar igualdade sem levar em conta o tipo?",
                    resposta: [
                        "==",
                        "===",
                        "="
                    ],
                    correta: 0
                },
                {
                    pergunta: "Qual função JavaScript é usada para converter uma string em um número?",
                    resposta: [
                        "parseNumber()",
                        "toInt()",
                        "parseInt()"
                    ],
                    correta: 2
                },
                {
                    pergunta: "Qual evento JavaScript é acionado quando um elemento perde o foco?",
                    resposta: [
                        "onblur",
                        "onfocus",
                        "onclick"
                    ],
                    correta: 0
                },
                {
                    pergunta: "Qual é o resultado da expressão '3' + 2 em JavaScript?",
                    resposta: [
                        "5",
                        "32",
                        "Erro"
                    ],
                    correta: 1
                },
                {
                    pergunta: "Qual método JavaScript é usado para remover o último elemento de um array e retorná-lo?",
                    resposta: [
                        "pop()",
                        "shift()",
                        "splice()"
                    ],
                    correta: 0
                },
                {
                    pergunta: "Qual construtor JavaScript cria um novo objeto com um protótipo específico?",
                    resposta: [
                        "Object.assign()",
                        "Object.create()",
                        "Object.prototype()"
                    ],
                    correta: 1
                }
            ];
            const quiz= document.querySelector('#quiz')
            const template = document.querySelector('template')

            const corretas = new Set()
            const totalDePerguntas = perguntas.length
            const mostrarTotal = document.querySelector('#acertos span')
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas


            //loop ou repetição
            for(const item of perguntas) {
            const quizItem = template.content.cloneNode(true)
            quizItem.querySelector('h3').textContent = item.pergunta

            for(let resposta of item.resposta) {
              const dt = quizItem.querySelector('dl dt').cloneNode(true)
              dt.querySelector('span').textContent = resposta
              dt.querySelector('input').setAttribute('name','pergunta-'+perguntas.indexOf(item))
              dt.querySelector('input').value = item.resposta.indexOf(resposta)
              dt.querySelector('input').onchange = (event) =>{
              const estaCorreta = event.target.value == item.correta
              corretas.delete(item)
              if(estaCorreta){
                corretas.add(item)
              }
               mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

              }

              quizItem.querySelector('dl').appendChild(dt)
          }

          quizItem.querySelector('dl dt').remove()

            //coloca a pergunta na tela
            quiz.appendChild(quizItem)
}