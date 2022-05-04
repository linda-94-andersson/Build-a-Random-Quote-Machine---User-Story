import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { FiTwitter } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { getQuote } from "./Redux/Actions/apiActions";

function App() {
  let quote = useSelector((state) => state.getQuote.quote);
  const { id, content, originator } = quote;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuote());
  }, []);

  const handleNewQuote = () => {
    dispatch(getQuote());
  };

  return (
    <>
      {Object.keys(quote).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <Container key={id}>
          <div id="quote-box">
            <h1 id="text">{content}</h1>
            <span id="author"> - {originator.name}</span>
            <section>
              <a
                id="tweet-quote"
                class="twitter-share-button"
                href={`https://twitter.com/intent/tweet?text=${content} -${originator.name}`}
                target="_blank"
              >
                <FiTwitter>Tweet</FiTwitter>
              </a>
              <Button
                id="new-quote"
                variant="dark"
                onClick={() => handleNewQuote()}
              >
                New quote
              </Button>
            </section>
            <span>
              Powerd by:{" "}
              <a href="https://quotepark.com/" target="_blank">
                https://quotepark.com/
              </a>
            </span>
          </div>
        </Container>
      )}
    </>
  );
}

export default App;
