import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from './components/NewsCards/NewsCards'

const alanKey = '4b3712bf053b32d0d882e0e0226df3102e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
  const [ newsArticles, setNewsArticles ] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles);
        }
      }
    });
  }, []);
  return (
    <div>
      <h1>Alan AI News</h1>
      <NewsCards articles={newsArticles}/>
    </div>
  );
};

export default App;
