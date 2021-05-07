import { useState, useEffect } from 'react';
import { shuffleArrayIndex } from '../../../../utils/array.js';
import QuoteText from '../Quote/QuoteText';
import QuoteAuthor from '../Quote/QuoteAuthor';
import QuteButton from '../Button/QuoteButton';
import SpinnerLoader from '../Animation/SpinnerLoader';

import './QuoteContainer.scss';

function QuoteContainer() {
  const [isActive, setIsActive] = useState(true);
  const [quoteData, setQuoteData] = useState([]);
  const [textQuote, setTextQuote] = useState('');
  const [authorQuote, setAuthorQuote] = useState('');

  // Perform SideEffect by getting the API
  useEffect(() => {
    fetch('https://type.fit/api/quotes')
      .then((res) => res.json())
      .then((quote) => {
        const { text, author } = shuffleArrayIndex(quote);

        if (isActive) {
          setQuoteData((prevQuotes) => {
            return {
              ...prevQuotes,
              quote,
            };
          });

          setTextQuote(text);
          setAuthorQuote(author);
        }
      })
      .catch((err) => console.log(err));

    // Cancenling the fetch by aborting it.
    return setIsActive(false);
  }, []);

  return (
    <main className='main'>
      <section className='main-container'>
        <QuoteText quote={textQuote} />
        <QuoteAuthor author={authorQuote} />
        <QuteButton />
      </section>
      {/* <SpinnerLoader /> */}
    </main>
  );
}

export default QuoteContainer;
