import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

// const alanKey = '4b3712bf053b32d0d882e0e0226df3102e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
  useEffect(() => {
    alanBtn({
      key: '4b3712bf053b32d0d882e0e0226df3102e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command, articles }) => {
        if (command === 'newHeadlines') {
          console.log(articles);
        }
      }
    });
  }, []);
  return (
    <div>
      <h1>Alan AI News</h1>
    </div>
  );
};

export default App;
