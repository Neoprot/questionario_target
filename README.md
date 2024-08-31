# Questionário Target

Este repositório contém a solução para um questionário usando como linguagem de programação o TypeScript. Abaixo estão as questões e suas respectivas soluções, além de instruções para rodar o projeto.

## Estrutura do Projeto

O projeto possui a seguinte estrutura de diretórios:

```
questionário/
├── src/
|    ├── questao1.ts
|    ├── questao2.ts
|    ├── questao3.ts
|    ├── questao4.ts
|    └── questao5.ts
├── package.json
├── tsconfig.json
├── readme.md  
└── exemploquestao3.json
```

## Questões e Soluções

### 1) Cálculo da Soma

**Questão:**

Observe o trecho de código abaixo: `int INDICE = 13, SOMA = 0, K = 0;`
Enquanto `K < INDICE` faça `{ K = K + 1; SOMA = SOMA + K; }`
Imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA?

**Solução:**

Arquivo: `questao1.ts`

```typescript
let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(SOMA);  // Saída: 91
```

### 2) Verificação de Número na Sequência de Fibonacci

**Questão:**

Dado um número, calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não à sequência.

**Solução:**

Arquivo: `questao2.ts`

```typescript
function isFibonacciNumber(num: number): boolean {
    if (num < 0) return false;

    let a = 0, b = 1;
    while (a < num) {
        let temp = a;
        a = b;
        b = temp + b;
    }

    return a === num;
}

const numberToCheck = 21; 
console.log(`${numberToCheck} ${isFibonacciNumber(numberToCheck) ? 'pertence' : 'não pertence'} à sequência de Fibonacci.`);
```

### 3) Análise de Faturamento Diário

**Questão:**

Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, calcule e retorne:
- O menor valor de faturamento ocorrido em um dia do mês;
- O maior valor de faturamento ocorrido em um dia do mês;
- Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

**Solução:**

exemplojsonquestao3.json:
```
{
    "faturamentoDiario": [1500, 2000, 0, 2500, 0, 3000, 2200, 1500, 0, 1800, 2000, 0, 0, 0, 2500]
}
```

Arquivo: `questao3.ts`

```typescript
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

calcularFaturamento('exemploquestao3.json');
```

### 4) Percentual de Representação por Estado

**Questão:**

Dado o valor de faturamento mensal de uma distribuidora detalhado por estado, calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

**Solução:**

Arquivo: `questao4.ts`

```typescript
const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

const calcularPercentuais = (faturamento: { [estado: string]: number }) => {
    const total = Object.values(faturamento).reduce((acc, value) => acc + value, 0);

    for (const estado in faturamento) {
        const percentual = (faturamento[estado] / total) * 100;
        console.log(`Percentual de ${estado}: ${percentual.toFixed(2)}%`);
    }
};

calcularPercentuais(faturamentoPorEstado);
```

### 5) Inversão de String

**Questão:**

Escreva um programa que inverta os caracteres de uma string.

**Solução:**

Arquivo: `questao5.ts`

```typescript
function inverterString(str: string): string {
    let resultado = '';
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }
    return resultado;
}

const stringParaInverter = "Hello World!";
console.log(inverterString(stringParaInverter));
```

## Como Rodar o Projeto

1. **Clone o repositório:**

    ```git clone https://github.com/Neoprot/questionario_target.git```

2. **Navegue até o diretório do projeto:**

    ```cd questionario_target```

3. **Instale as dependências:**

    ```npm install```

4. **Compile e execute os arquivos TypeScript:**

    ```script
    npx tsc
    node dist/questao1.js
    node dist/questao2.js
    node dist/questao3.js
    node dist/questao4.js
    node dist/questao5.js
    ```
