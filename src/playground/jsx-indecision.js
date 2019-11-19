console.log("the app is running");

var app = {
  title: 'Indecision App', 
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two','Three','Four']
}

const person = {
  name: "David Clough",
  age: 52,
  location: "Lake Zurich"
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option && app.options.indexOf(option) === -1) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

const clearItems = () => {
  app.options = [];
  render();
}

const appRoot = document.getElementById("app");

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      <p>{app.subtitle}</p>

      {app.options.length>0?<p>Here are your options</p>:<p>There are no options.</p>}
      <p>
            <button onClick={clearItems}>Remove All</button>
      </p>
      {(app.options.length>0) && 
        <ol>
          {app.options.map(item => <li key={item}>{item}</li>)}
        </ol>
      }
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
}

render();


