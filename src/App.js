import { useState } from "react";

const App = () => {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  const getAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    setAdvice(data.slip.advice);

    const newCount = count + 1;
    setCount(newCount);
  };

  return (
    <div>
      <h1>
        {advice}
      </h1>
      <button onClick={getAdvice}>Get Advice</button>
      <p>
        You have received advice <strong>{count}</strong> times! 😃
      </p>
    </div>
  );
};

export default App;