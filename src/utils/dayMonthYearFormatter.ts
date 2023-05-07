// Função que cria uma data no formato "pt-br"
export const dayMonthYearFormatter = new Intl.DateTimeFormat("pt-BR", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});
