const revenueByState = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

const totalRevenue = Object.values(revenueByState).reduce((acc, value) => acc + value, 0);

function calculatePercentage(stateRevenue, totalRevenue) {
    return (stateRevenue / totalRevenue) * 100;
}

for (const state in revenueByState) {
    const percentage = calculatePercentage(revenueByState[state], totalRevenue);
    console.log(`${state} representa ${percentage.toFixed(2)}% do faturamento total.`);
}