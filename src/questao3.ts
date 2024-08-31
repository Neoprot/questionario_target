import * as fs from 'fs';


const lerArquivoJSON = (caminho: string): Promise<any> => {
    return new Promise((resolve, reject) => {
        fs.readFile(caminho, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(data));
            }
        });
    });
};


const calcularFaturamento = async (caminhoArquivo: string) => {
    try {
        const dados = await lerArquivoJSON(caminhoArquivo);
        const faturamentoDiario: number[] = dados.faturamentoDiario;

        const diasComFaturamento = faturamentoDiario.filter(value => value > 0);
        if (diasComFaturamento.length === 0) {
            console.log("Não há dados de faturamento.");
            return;
        }

        const menorFaturamento = Math.min(...diasComFaturamento);
        const maiorFaturamento = Math.max(...diasComFaturamento);
        const mediaMensal = diasComFaturamento.reduce((acc, val) => acc + val, 0) / diasComFaturamento.length;


        const diasAcimaDaMedia = diasComFaturamento.filter(value => value > mediaMensal).length;


        console.log(`Menor valor de faturamento: ${menorFaturamento}`);
        console.log(`Maior valor de faturamento: ${maiorFaturamento}`);
        console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
    } catch (error) {
        console.error("Erro ao ler o arquivo JSON:", error);
    }
};


// altere aqui o caminho para o arquivo JSON
const json: string = 'jsonexemploquestao3.json';
calcularFaturamento(json);


