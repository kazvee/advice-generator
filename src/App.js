const App = () => {

  const getAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    console.log(data.slip.advice);
  };

  return (<div>
    <h1>
      Hello World! 🌍
    </h1>
    <button onClick={getAdvice}>Get Advice</button>
  </div>
  );
};

export default App;