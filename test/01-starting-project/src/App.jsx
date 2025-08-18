//<<<<<<< HEAD
import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';

const reactDescription = ['Fundamental', "core", "concepts", "crucial"]

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function Header() {

  const des = reactDescription[getRandomInt(reactDescription.length)];

  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
//=======
import { CORE_CONCEPTS } from './data.js';
import Header from './components/header/Header.jsx';
import CoreConcept from './components/coreconcepts/CoreConcepts.jsx';
import TabButton from './components/tabbutton.jsx';

//>>>>>>> 8df7ca76db1ed5ca9f97ebc0f4fd583990be4f5e

function CoreConcept(props) {
  return (
  <li>
  <img src={props.image} alt={props.title}/>  
  <h3>{props.title}</h3>
  <p>{props.description}</p>
  </li>)
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
             <TabButton>Components</TabButton>
          </menu>
         
          
        </section>
      </main>

      <section id = 'core-concepts'>
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept
            image = {reactImg}
            title = "component"
            description = "Build encapsulated components that manage their own state"
          />
          <CoreConcept
            image={componentsImg}   
            title="Declarative"
            description="Describe what your UI should look like"
          />
          <CoreConcept
            image={componentsImg}
            title="Learn Once, Write Anywhere"
            description="You can build new features in React without rewriting existing code"
          />
        </ul>
      </section>  
    </div>
  );
}

export default App;