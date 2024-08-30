import Api from './api';

(() => {
  const quoteText = document.getElementById('quote-text');
  const quoteAuthor = document.getElementById('quote-author');

  if (!quoteText && !quoteAuthor) {
    return;
  }

  async function fetchAndSaveQuote() {
    try {
      const today = new Date().toLocaleDateString();
      const savedQuoteData = JSON.parse(localStorage.getItem('quoteData'));
      if (savedQuoteData && savedQuoteData.date === today) {
        return savedQuoteData.quote;
      }

      const quote = await Api.getQuote();

      const newQuoteData = {
        date: today,
        quote: quote,
      };
      localStorage.setItem('quoteData', JSON.stringify(newQuoteData));

      return newQuoteData.quote;
    } catch (e) {
      console.log('Error during  getting quote');
    }
  }

  fetchAndSaveQuote().then(quote => {
    quoteText.innerText = quote.quote;
    quoteAuthor.innerText = quote.author;
  });
})();
