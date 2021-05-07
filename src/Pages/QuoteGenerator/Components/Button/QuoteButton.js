import './QuoteButton.scss';

function QuoteButton({ clickHandler }) {
  return (
    <div className='quote-container__buttons'>
      <button className='quote-container__twitter-button' id='twitter' title='Tweet this!'>
        <i className='fab fa-twitter'></i>
      </button>
      <button id='new-quote' onClick={clickHandler}>
        New Quote
      </button>
    </div>
  );
}

export default QuoteButton;
