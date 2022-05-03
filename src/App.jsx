import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { FiTwitter } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
// import { getQuote } from "./Redux/Actions/apiActions";

function App() {
  // const getQuotes = useSelector((state) => state.getQuotes.quote);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getQuote());
  }, []);

  const renderQuotes = () => {
    // if (!getQuotes.length) return <div>Loading quote...</div>;
    // return getQuotes.map((quote) => {
    //   const { id, content, originator } = quote;
    //   return (
    //     <section key={id}>
    //       {Object.keys(quote).length === 0 ? (
    //         <div>...Loading</div>
    //       ) : (
    //         <Container>
    //           <div id="quote-box">
    //             <h1 id="text">{content}</h1>
    //             <span id="author"> - {originator}</span>
    //             <section>
    //               <a
    //                 id="tweet-qutoe"
    //                 href="twitter.com/intent/tweet"
    //                 target="_blank"
    //               >
    //                 <FiTwitter>Twitter icon</FiTwitter>
    //               </a>
    //               <Button id="new-quote" variant="dark">
    //                 New quote
    //               </Button>
    //             </section>
    //           </div>
    //         </Container>
    //       )}
    //       ;
    //     </section>
    //   );
    // });
  };

  return <><div>HELLO</div></>;
}

export default App;
