import React from 'react';

function App() {
  const items = ['Apple', 'Banana', 'Cherry'];
  return (
    <div>
      <h1>Welcome to App!</h1>
      <p>This is a demo application for Azure DevOps pipelines.</p>
      <div>
        <h2>Let's have some fun!</h2>
        <p>Here's a random joke for you:</p>
        <p>
          Q: Why don't scientists trust atoms?<br />
          A: Because they make up everything!
        </p>
        <p>Hope that brought a smile to your face!</p>
        <p>
          If you have any questions or need further assistance, feel free to ask.
          Happy coding!
        </p>
      </div>
      <div>
        <h2>Display all 3 fruits list format</h2>
        <p>Uh-oh! There's a bug in the function below:</p>
        <ul>
          {items.map((item) => (
            <li>{item.id}</li>
          ))}
        </ul>
        <p>Can you spot the issue?</p>
      </div>
    </div>
  );
}

export default App;
