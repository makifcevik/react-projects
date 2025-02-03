import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
import Quote from "./Quote";

function App() {

  const API_ENDPOINT = "https://dummyjson.com/quotes";

  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await axios.get(API_ENDPOINT, {
          headers: {
            limit: 0
          }
        });
        setQuotes(response.data.quotes)
        console.log(response.data.quotes)  
      } catch(err) {
        console.log(err);
      }
    };
    fetchQuotes();
  }, [])

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
      {quotes.map(quote => 
        <Quote key={quote.id} quote={quote}/>
      )}
    </div>
  )
}

export default App
