const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o nome do herói: ', (nome) => {
    rl.question('Digite a quantidade de XP: ', (xp) => {

        xp = parseInt(xp);

        let nivel = '';

        switch(true){
            case xp <= 1000:
                nivel = 'Ferro';
                break;
            case xp >= 1001 && xp <= 2000:
                nivel = 'Bronze';
                break;
            case xp >= 2001 && xp <= 5000:
                nivel = 'Prata';
                break;
            case xp >= 5001 && xp <= 7000:
                nivel = 'Ouro';
                break;
            case xp >= 7001 && xp <= 8000:
                nivel = 'Platina';
                break;
            case xp >= 8001 && xp <= 9000:
                nivel = 'Ascendente';
                break;
            case xp >= 9001 && xp <= 10000:
                nivel = 'Imortal';
                break;
            case xp >= 10001:
                nivel = 'Radiante';
                break;
            default:
                nivel = '0';
                break;
        }

        if(nivel == '0'){
            console.log('Digite somente números!');
        }else{
            console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
        }

        rl.close();

    });
});