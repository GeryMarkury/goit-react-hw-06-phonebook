import NameForm from './NameForm/NameForm';
import { ContactsList } from './ContactsList/ContactsList';
import css from '../components/App.module.css'

export default function App() {

  // *** REDUX PERSIST ***
  // useEffect(() => {
  //   const localData = localStorage.getItem('contacts');
  //   if (localData) setContacts(JSON.parse(localData));
  // }, []);

  // useEffect(() => {
  // if (contacts.length === 0) {
  //   localStorage.removeItem('contacts');
  // } else {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }
  // }, [contacts])

    return (
     <div className={css.container}>
        <h1>Phonebook</h1>
          <NameForm></NameForm>
        <h2>Contacts</h2>
        <ContactsList></ContactsList>
      </div>
  );
};
