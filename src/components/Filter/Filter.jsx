import PropTypes from 'prop-types';

export default function Filter({value,vFilter}){
    return(
        <>
            <p>Find contacts by name</p>
            <input type="text" 
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder='Enter your name'
            value={value}
            onChange={vFilter}
            />
        </>
    )
}
Filter.propTypes = {
    value: PropTypes.string.isRequired,
    vFilter: PropTypes.func.isRequired
}