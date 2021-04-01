import './App.css';
import Contacts from "./modules/contacts/components/Contacts";
import ContactProvider from "./modules/contacts/contects/themeContext";


function App() {
    return (
        <ContactProvider>
            <Contacts/>
        </ContactProvider>
    );
}

export default App;
