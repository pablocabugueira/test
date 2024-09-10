const dailyInvoicing = [
    { "day": 1, "value": 22174.1664 },
    { "day": 2, "value": 24537.6698 },
    { "day": 3, "value": 26139.6134 },
    { "day": 4, "value": 0.0 },
    { "day": 5, "value": 0.0 },
    { "day": 6, "value": 26742.6612 },
    { "day": 7, "value": 0.0 },
    { "day": 8, "value": 42889.2258 },
    { "day": 9, "value": 46251.174 },
    { "day": 10, "value": 11191.4722 },
    { "day": 11, "value": 0.0 },
    { "day": 12, "value": 0.0 },
    { "day": 13, "value": 3847.4823 },
    { "day": 14, "value": 373.7838 },
    { "day": 15, "value": 2659.7563 },
    { "day": 16, "value": 48924.2448 },
    { "day": 17, "value": 18419.2614 },
    { "day": 18, "value": 0.0 },
    { "day": 19, "value": 0.0 },
    { "day": 20, "value": 35240.1826 },
    { "day": 21, "value": 43829.1667 },
    { "day": 22, "value": 18235.6852 },
    { "day": 23, "value": 4355.0662 },
    { "day": 24, "value": 13327.1025 },
    { "day": 25, "value": 0.0 },
    { "day": 26, "value": 0.0 },
    { "day": 27, "value": 25681.8318 },
    { "day": 28, "value": 1718.1221 },
    { "day": 29, "value": 13220.495 },
    { "day": 30, "value": 8414.61 }
];

function calcInvoicing(invoicing) {
    let lowestValue = Infinity;
    let highestValue = -Infinity;
    let sum = 0;
    let invoicingDays = 0;

    invoicing.forEach(day => {
        if (day.value > 0) {
            if (day.value < lowestValue) lowestValue = day.value;
            if (day.value > highestValue) highestValue = day.value;
            sum += day.value;
            invoicingDays++;
        }
    });

    const monthlyAverage = sum / invoicingDays;

    let aboveAverage = invoicing.filter(day => day.value > monthlyAverage).length;

    return {
        lowestValue,
        highestValue,
        monthlyAverage,
        aboveAverage
    };
}

const results = calcInvoicing(dailyInvoicing);
console.log(`Menor valor: R$ ${results.lowestValue.toFixed(2)}`);
console.log(`Maior valor: R$ ${results.highestValue.toFixed(2)}`);
console.log(`Total dias com faturamento acima da média: ${results.aboveAverage}`);