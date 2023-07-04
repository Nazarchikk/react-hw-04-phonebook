import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'


export default function ContactList({contacts,buttonDelete}){
    return(
        <>
        <ul>
          {contacts.map(option => (
            <li id={nanoid(5)}><span>{option.name}</span>:<span>{option.number}</span> <button id={"id-"+nanoid(1)} type="button" onClick={() => buttonDelete(option.id)}>Delete</button></li>
          ))} 
        </ul>
        </>
    )
}
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  buttonDelete: PropTypes.func.isRequired
}