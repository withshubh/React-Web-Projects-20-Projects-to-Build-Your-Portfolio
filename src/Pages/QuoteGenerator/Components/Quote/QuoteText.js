import './QuoteText.scss';

function QuoteText({ quote }) {
  return (
    <div className='quote-container__text'>
      <i className='fas fa-quote-left'></i>
      <span id='quote'>{quote}</span>
    </div>
  );
}

export default QuoteText;
