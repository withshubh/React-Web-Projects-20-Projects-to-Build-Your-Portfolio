import './QuoteText.scss';

function QuoteText({ quote }) {
  const quoteClassLength = quote.length > 120 ? 'quote-container__long-quote' : '';

  return (
    <div className='quote-container__text'>
      <i className='fas fa-quote-left'></i>
      <span id='quote' className={quoteClassLength}>
        {quote}
      </span>
    </div>
  );
}

export default QuoteText;
