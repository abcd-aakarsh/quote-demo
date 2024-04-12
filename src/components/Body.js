import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import QuoteSearchBar from "./QuoteSearchBar";

const Body = () => {
  const [quoteList, setQuoteList] = useState([]);
  const [inputField, setInputField] = useState("");

  const fetchQuote = async (query) => {
    if (!query) return;

    try {
      const data = await fetch(
        `https://api.quodb.com/search/${query}/?&titles_per_page=100&phrases_per_title=1&page=5`
      );
      const json = await data.json();
      setQuoteList(json?.docs || []);
    } catch (error) {
      console.error("Error fetching quotes:", error);
    }
  };

  useEffect(() => {
    fetchQuote(inputField);
  }, [inputField]);

  return (
    <section className="mx-auto flex flex-col align-middle py-16 px-9">
      <div className="text-center">
        <h2 className="text-5xl font-mono font-semibold mb-7">
          Welcome to Planet Read
        </h2>
        <h3 className="text-3xl font-mono font-semibold mb-7">
          Find any quote in millions of movie lines
        </h3>
      </div>
      <QuoteSearchBar fetchQuote={fetchQuote} />

      {quoteList && quoteList.length > 0 ? (
        <div className="grid grid-cols-1 px-11 md:px-24 xl:grid-cols-2 gap-8">
          {quoteList.map((card) => (
            <MovieCard card={card} key={card.phrase_id} />
          ))}
        </div>
      ) : (
        <p className="text-center text-4xl font-medium mt-6 grid-cols-1">
          Type a word/quote in the above search box
        </p>
      )}
    </section>
  );
};

export default Body;
