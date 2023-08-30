import { useState } from "react";

const App = () => {
  const [advice, setAdvice] = useState("");

  const getAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    setAdvice(data.slip.advice);
  };

  return (
    <div>
      <h1>
        {advice}
      </h1>
      <button onClick={getAdvice}>Get Advice</button>
    </div>
  );
};

export default App;