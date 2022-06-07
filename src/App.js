import './App.css';
import Helmet from 'react-helmet'
import RGB from './components/RGB'

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>RGB</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <RGB />
    </div>
  );
}

export default App;
