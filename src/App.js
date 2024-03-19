import Search from './components/Search';
import { data } from './data';
import Header from './Header/Header';

import './App.css';

/**
 * App component - The main component of the application.
 *
 * This component renders the Search component, passing it the 'data' object.
 *
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  // Render the Search component, passing it the 'data' object
  return (
    <div className='app-container'>
      <Header />
      {/* Render the Search component */}
      <Search
        // Pass the 'data' object as a prop
        data={data}
      ></Search>
    </div>
  );
}

export default App;