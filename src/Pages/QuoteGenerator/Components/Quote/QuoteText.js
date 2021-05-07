import './QuoteText.scss';

function QuoteText({ textQuote }) {
  const quoteClassLength = textQuote.length > 120 ? 'quote-container__long-quote' : '';

  return (
    <div className='quote-container__text'>
      <i className='fas fa-quote-left'></i>
      <span id='quote' className={quoteClassLength}>
        {textQuote}
      </span>
    </div>
  );
}

export default QuoteText;
