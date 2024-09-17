
async function displayQuotes() {
    try {
      const response = await fetch('https://dummyjson.com/quotes');
      const data = await response.json();
      const quoteContainer = document.getElementById('quoteContainer');
      data.quotes.forEach(quote => {
        const quoteDiv = document.createElement('div');
        quoteDiv.innerHTML = `<strong>${quote.author}</strong>:${quote.quote}`;
        quoteContainer.appendChild(quoteDiv);
      });
    } catch (error) {
      console.error('Error fetching quotes:', error);
    }
  }
  displayQuotes();
  