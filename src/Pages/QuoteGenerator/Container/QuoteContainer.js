import QuoteText from '../Components/Quote/QuoteText';
import QuoteAuthor from '../Components/Quote/QuoteAuthor';
import QuteButton from '../Components/Button/QuoteButton';
import SpinnerLoader from '../Components/Animation/SpinnerLoader';

import './QuoteContainer.scss';

function QuoteContainer() {
  return (
    <main className='main'>
      <section className='main-container'>
        <QuoteText />
        <QuoteAuthor />
        <QuteButton />
      </section>
      <SpinnerLoader />
    </main>
  );
}

export default QuoteContainer;
