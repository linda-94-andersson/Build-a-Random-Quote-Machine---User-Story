import React from "react";
import { Button } from "react-bootstrap";
import { FiTwitter } from "react-icons/fi";

function App() {
  return (
    <div id="quote-box">
      <h1 id="text">Random quote goes here</h1>
      <span id="author"> - Aurhor goes here</span>
      <section>
        <a id="tweet-qutoe" href="twitter.com/intent/tweet" target="_blank">
          <FiTwitter>Twitter icon</FiTwitter>
        </a>
        <Button id="new-quote" variant="dark">
          New quote
        </Button>
      </section>
    </div>
  );
}

export default App;
