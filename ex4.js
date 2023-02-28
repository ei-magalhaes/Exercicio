const faturamentoEstado = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

let totalFat = 0;

for (const estado in faturamentoEstado) {
  totalFat += faturamentoEstado[estado];
}

for (const estado in faturamentoEstado) {
  const percentual = (faturamentoEstado[estado] / totalFat) * 100;
  console.log(`${estado}: ${percentual.toFixed(2)}%`);
}
