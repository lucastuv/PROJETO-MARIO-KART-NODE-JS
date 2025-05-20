const player1 = {
    NOME: "PEACH",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 5,
    PONTOS: 0,
}
const player2 = {
    NOME: "YOSHI",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
};

async function rollDice(){
return Math.floor(Math.random() * 6) + 1;
}


async function getRandomBlock(){
    let random = Math.random();
    let result

    switch (true){
        case random < 0.33:
            result = "RETA";
            break;
        case random < 0.66:
            result = "CURVA";
            break;
        default:
            result = "CONFRONTO";
            break;
        }
        return result;
}

async function logRollResult(characterName, block, diceResult, attribute){
console.log(`👾 ${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}\n`);

}
    
async function playRaceEngine(character1, character2){
    for (let round = 1; round <= 5; round++){
        console.log(`🏁🚨 Rodada ${round} começando...\n`);


        let block = await getRandomBlock();
        console.log(`🚨 O Bloco é: ${block}\n`);
    
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();

        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

    if(block === "RETA"){
        totalTestSkill1 = character1.VELOCIDADE + diceResult1;
        totalTestSkill2 = character2.VELOCIDADE + diceResult2;
        await logRollResult(
            character1.NOME, 
            "velocidade", 
            diceResult1, 
            character1.VELOCIDADE);

            await logRollResult(
            character2.NOME, 
            "velocidade", 
            diceResult2, 
            character2.VELOCIDADE);
    }
    if(block === "CURVA"){
        totalTestSkill1 = character1.MANOBRABILIDADE + diceResult1;
        totalTestSkill2 = character2.MANOBRABILIDADE + diceResult2;

        await logRollResult(
            character1.NOME, 
            "manobrabilidade", 
            diceResult1, 
            character1.MANOBRABILIDADE);

            await logRollResult(
            character2.NOME, 
            "manobrabilidade", 
            diceResult2, 
            character2.MANOBRABILIDADE);

    }
    if(block === "CONFRONTO"){
        let powerResult1 = character1.PODER + diceResult1;
        let powerResult2 = character2.PODER + diceResult2;
        console.log(`🥊 ${character1.NOME} confrontou com ${character2.NOME} 🥊!\n`);
        
        await logRollResult(
            character1.NOME, 
            "poder", 
            diceResult1, 
            character1.PODER);

            await logRollResult(
            character2.NOME, 
            "poder", 
            diceResult2, 
            character2.PODER);

          if (powerResult1 > powerResult2 && character2.PONTOS >= 1){
            console.log(`💥 ${character1.NOME} venceu o confronto e fez ${character2.NOME} perder um ponto!🐢`);
            character2.PONTOS--;
            character1.PONTOS++;
          }
          if (powerResult2 > powerResult1 && character1.PONTOS >= 1){
            console.log(`💥 ${character2.NOME} venceu o confronto e fez ${character1.NOME} perder um ponto! 🐢`);
            character1.PONTOS--;
            character2.PONTOS++;
          }
          
          if(powerResult1 > powerResult2 && character2.PONTOS === 0){
            console.log(`💥 ${character1.NOME} venceu o confronto, ${character2.NOME} tinha nem ponto pra perder.. era melhor ter corrido a pé.🐌\n`);
          }
            if(powerResult2 > powerResult1 && character1.PONTOS === 0){
            console.log(`💥 ${character2.NOME} venceu o confronto, ${character1.NOME} tinha nem ponto pra perder.. era melhor ter corrido a pé.🐌\n`);
          }
          
          
          console.log(
            powerResult2 === powerResult1 
            ? "🤝 empataram o confronto!" : ""); 
        }
            
    

    if (totalTestSkill1 > totalTestSkill2){
        console.log(`🏁 ${character1.NOME}: venceu a rodada e ganhou um ponto!\n`);
        character1.PONTOS++;
    }else if (totalTestSkill2 > totalTestSkill1){
        console.log(`🏁 ${character2.NOME}: venceu a rodada e ganhou um ponto!\n`);
        character2.PONTOS++;
    }
    console.log("----------------------------------------");
   }
   }


    
async function declareWinner(character1, character2){
    console.log(`🏆🏁🏆🏁🏆🏁🏆🏁🏆🏁🏆🏁🏆🏁\n`);
    console.log("Resultado da corrida:\n");
    console.log(`🏁 ${character1.NOME} fez ${character1.PONTOS} pontos!`);
    console.log(`🏁 ${character2.NOME} fez ${character2.PONTOS} pontos!`);

    if (character1.PONTOS > character2.PONTOS){
        console.log(`\n🏆🏁 ${character1.NOME} venceu a corrida!`);
    }
    else if (character2.PONTOS > character1.PONTOS){
        console.log(`\n🏆🏁 ${character2.NOME} venceu a corrida!`);
    }
    else{
        console.log("\n🏁🤝 Empate!");
    }
}

(async function main(){
    console.log(`🚦🚩🌎 Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`);

    await playRaceEngine(player1 , player2 );
    await declareWinner(player1, player2);
    

})();