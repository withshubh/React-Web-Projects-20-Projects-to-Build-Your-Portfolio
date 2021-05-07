import './QuoteAuthor.scss';

function QuoteAuthor({ authorQuote }) {
  return (
    <div className='quote-container__author'>
      <span id='author'>{authorQuote}</span>
    </div>
  );
}

export default QuoteAuthor;
