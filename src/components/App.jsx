import NameForm from './NameForm/NameForm';
import { ContactsList } from './ContactsList/ContactsList';
import css from '../components/App.module.css'

export default function App() {
    return (
     <div className={css.container}>
        <h1>Phonebook</h1>
          <NameForm></NameForm>
        <h2>Contacts</h2>
        <ContactsList></ContactsList>
      </div>
  );
};
