import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { PokemonContextProvider } from './context/PokemonContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
    <PokemonContextProvider>
        <App />
      </PokemonContextProvider>
			
		</BrowserRouter>
	</React.StrictMode>
);

