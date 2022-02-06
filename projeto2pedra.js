var prompt = require("prompt-sync")();
/* Foi criado um Array(opcao) para armazenar os elemntos do jogo,
uma variavel (x) para armazenar o numero aleatório que seria gerado para o Boot,
uma variavel (escolha) para armazenar o numero de rodadas que seriam disputadas,
três variaveis(cont, cont1, cont2) para contar o numero de empates e vitorias de cada jogador por rodada,
uma variavel (perg) para perguntar se o usuario gostaria de jogar novamente,
wile para rodar o programa dando a possibilidade de jogar novamente,
um for para repetir as rodadas de acordo com a escolha do usuario,
do While para validações*/

let x = Math.floor(Math.random() * 3);
let escolha;
let opcao = ["pedra", "papel", "tesoura"];
let usuario;
let perg;
console.log();
console.log(`Seja Bem Vindo(a) ao "JOKENPÔ", vamos começar o jogo?`);

do {
  let cont1 = 0;
  let cont = 0;
  let cont2 = 0;
  console.log();

  escolha = +prompt(`Escolha o numero de rodadas a serem disputadas: `);

  for (let i = 0; i < escolha; i++) {
    console.log();
    do {
      if (usuario == -1) {
        console.log(`Nome digitado incorretamente: `);
      }
      console.log();
      usuario = opcao.indexOf(
        prompt(
          `Digitea a opção desejada; Pedra, Papel ou Tesoura: `
        ).toLowerCase()
      );
    } while (usuario == -1);
    console.log();
    if (usuario == 0 || usuario == 1 || usuario == 2) {
      console.log(
        `Você escolheu: ${opcao[usuario]}`,
        `\nBoot escolheu: ${opcao[x]}`
      );
    }
    console.log();
    if (opcao[usuario] == "pedra" && opcao[x] == "tesoura") {
      console.log(`Você venceu essa rodada, a pedra quebra a tesoura.`), cont++;
    }
    if (opcao[usuario] == "pedra" && opcao[x] == "papel") {
      console.log(`Você perdeu essa rodada, o papel embrulha a pedra. `),
        cont1++;
    }
    if (opcao[usuario] == "tesoura" && opcao[x] == "papel") {
      console.log(`Você venceu essa rodada, a tesoura corta o papel.`), cont++;
    }
    if (opcao[usuario] == "tesoura" && opcao[x] == "pedra") {
      console.log(`Você perdeu essa rodada, a pedra quebra a tesoura.`),
        cont1++;
    }
    if (opcao[usuario] == "papel" && opcao[x] == "pedra") {
      console.log(`Você venceu essa rodada, o papel embrulha a pedra. `),
        cont++;
    }
    if (opcao[usuario] == "papel" && opcao[x] == "tesoura") {
      console.log(`Você perdeu essa rodada, a tesoura corta o papel.`), cont1++;
    }
    if (opcao[usuario] == "pedra" && opcao[x] == "pedra") {
      console.log(`Rodada empatada. `), cont2++;
    }
    if (opcao[usuario] == "tesoura" && opcao[x] == "tesoura") {
      console.log(`Rodada empatada.`), cont2++;
    }
    if (opcao[usuario] == "papel" && opcao[x] == "papel") {
      console.log(`Rodada empatada.`), cont2++;
    }
  }
  console.log();
  console.log(`Fim do Jogo: `);
  console.log();
  console.log(`Você venceu: ${cont} rodada(s).`);
  console.log(`Boot venceu: ${cont1} rodada(s).`);
  console.log(`Empate: ${cont2} rodada(s).`);
  console.log();
  if (cont > cont1) {
    console.log(`Você é o grande vencedor...! (: `);
  } else if (cont == cont1) {
    console.log(`Jogo terminou empatado...`);
  } else {
    console.log(`O Boot é o grande vencedor...! (: `);
  }
  console.log();
  do {
    perg = prompt(`Se deseja jogar novamente, digite sim ou nao: `);
    console.log();
    if (perg != "sim" && perg != "nao") {
      console.log(`Opção Inválida...): `);
    } else if (perg == "sim") {
      console.log(`Boa escolha, quer me desafiar novamente (: `);
    }
  } while (perg != "sim" && perg != "nao");
  console.log();
} while (perg == "sim");

console.log();
console.log(`Que pena, espero que você volte logo...!!!`);
console.log();