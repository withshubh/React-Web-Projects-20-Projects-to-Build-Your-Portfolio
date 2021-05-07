import './QuoteButton.scss';

function QuoteButton() {
  return (
    <div className='quote-container__buttons'>
      <button className='quote-container__twitter-button' id='twitter' title='Tweet this!'>
        <i className='fab fa-twitter'></i>
      </button>
      <button id='new-quote'>New Quote</button>
    </div>
  );
}

export default QuoteButton;
