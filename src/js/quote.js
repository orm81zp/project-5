import Api from './api';

let favoritesActive = true;
const sidebarEl = document.getElementsByClassName('sidebar')[0];

sidebarEl.classList.toggle('favoritesActive', favoritesActive);


async function fetchAndSaveQuote() {
  try{
  const today = new Date().toLocaleDateString();
  const savedQuoteData = JSON.parse(localStorage.getItem('quoteData'));
  if (savedQuoteData && savedQuoteData.date === today) {
    return savedQuoteData.quote;
  }

    let quote = await Api.getQuote();

  const newQuoteData = {
    date: today,
    quote: quote
  };
  localStorage.setItem('quoteData', JSON.stringify(newQuoteData));

  return newQuoteData.quote;}catch (e){
    console.log('Error during  getting quote')
  }
}


fetchAndSaveQuote().then(quote => {
  document.getElementById('quote_text').innerText = quote.quote;
  document.getElementById('quote_author').innerText = quote.author;

});
