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
