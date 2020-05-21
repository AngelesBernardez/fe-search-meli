import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { routes } from "./routes";
import "./App.css";

const App = () => {
  const [response, setResponse] = useState("");
  const [post, setPost] = useState("");
  const [responseToPost, setResponseToPost] = useState("");

  useEffect(() => {
    callApi()
      .then((res) => setResponse(res.express))
      .catch((err) => console.log(err));
  }, []);

  const callApi = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/world", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ post: post }),
    });
    const body = await response.text();

    setResponseToPost(body);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Header</h1>
      </header>
      <Switch>
        {routes.map(({ path, component, exact }) => (
          <Route path={path} component={component} exact={exact} />
        ))}
      </Switch>
      {/* <p>{response}</p>
        <form onSubmit={handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={post}
            onChange={e => setPost( e.target.value )}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{responseToPost}</p> */}
    </div>
  );
};

export default App;
