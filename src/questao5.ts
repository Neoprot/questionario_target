function inverterString(str: string): string {
    let resultado = '';
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }
    return resultado;
}

// troque aqui para escolher a string a ser invertida
const stringParaInverter = "Hello World!";
console.log(inverterString(stringParaInverter));
