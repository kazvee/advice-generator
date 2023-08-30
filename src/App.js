import { useEffect, useState } from "react";

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

  useEffect(() => {
    // This will run when the component mounts
    getAdvice();
    // Empty array provided as second argument means the effect has no dependencies
    // so it will run only once, when the component initially mounts
  }, []);

  return (
    <div>
      <h1>
        {advice}
      </h1>
      <button onClick={getAdvice}>Get Advice</button>
      <Message count={count} />
    </div>
  );
};

const Message = (props) => {
  return (
    <p>
      You have received advice <strong>{props.count}</strong> times! 😃
    </p>
  );
};

export default App;