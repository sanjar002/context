import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from './components/app/App';
import AppContext from './components/context/AppContext';

let root = document.getElementById('root');
createRoot(root).render(
    <BrowserRouter>
     <AppContext>
        <App />    
     </AppContext>
    </BrowserRouter>
);
