import './QuoteButton.scss';

function QuoteButton({ clickHandler, textQuote, authorQuote }) {
  // Share the twitter quote on the twitter platform
  function shareTwitterQuoteHandler() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${textQuote.textContent} - ${authorQuote.textContent}`;
    window.open(twitterUrl, '_blank');
  }
  return (
    <div className='quote-container__buttons'>
      <button
        className='quote-container__twitter-button'
        id='twitter'
        title='Tweet this!'
        onClick={shareTwitterQuoteHandler}>
        <i className='fab fa-twitter'></i>
      </button>
      <button id='new-quote' onClick={clickHandler}>
        New Quote
      </button>
    </div>
  );
}

export default QuoteButton;
