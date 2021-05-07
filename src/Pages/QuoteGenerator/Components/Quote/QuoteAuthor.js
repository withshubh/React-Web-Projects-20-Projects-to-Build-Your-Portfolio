import './QuoteAuthor.scss';

function QuoteAuthor({ author }) {
  return (
    <div className='quote-container__author'>
      <span id='author'>{author}</span>
    </div>
  );
}

export default QuoteAuthor;
