import Api from './api';

// Функция для получения и сохранения цитаты
async function fetchAndSaveQuote() {
  const today = new Date().toLocaleDateString();
  const savedQuoteData = JSON.parse(localStorage.getItem('quoteData'));
  if (savedQuoteData && savedQuoteData.date === today) {
    // console.log("Цитата на сегодня уже существует:", savedQuoteData.quote);
    return savedQuoteData.quote;
  }

  let quote = await Api.getQuote();

  const newQuoteData = {
    date: today,
    quote: quote
  };

  localStorage.setItem('quoteData', JSON.stringify(newQuoteData));

  console.log("Новая цитата сохранена:", newQuoteData.quote);

  return newQuoteData.quote;
}


fetchAndSaveQuote().then(quote => {
  console.log("Используемая цитата:", quote);
});
