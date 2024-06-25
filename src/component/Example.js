
import {
  FormattedMessage,
  FormattedDate,
  FormattedTime,
  FormattedNumber
} from "react-intl";
export default function Example() {
  

  return (
    <div className="App">
      <header className="App-header">
        <FormattedMessage id="header" defaultMessage="Welcome to my webpage!" />
      </header>
      <main>
      
        <br />
        <FormattedMessage
          id="content"
          defaultMessage="Learn React-int'l with me"
        />

        <br />

        <FormattedDate
          value={new Date()}
          year="numeric"
          month="short"
          day="numeric"
          weekday="long"
        />
        <br />
        <FormattedTime
          value={new Date()}
          hour="numeric"
          minute="numeric"
          second="numeric"
          timeZoneName="long"
        />
        <br />

        <FormattedNumber value={10000} />
        <br />
        <FormattedNumber
          value={30.99}
          style="currency"
          currencyDisplay="symbol"
          currency="USD"
        />
      </main>

      <footer>
        <FormattedMessage id="footer" defaultMessage="Courtesy of CopyCat" />
      </footer>
    </div>
  );
}