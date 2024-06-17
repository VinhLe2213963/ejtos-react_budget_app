import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function Currency() {
    const { currency, dispatch } = useContext(AppContext);

    const handleChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    };

    return (
        <div className='alert alert-warning'>
            <span>Currency: </span>
            <select
                className="custom-select"
                id='currency-dropdown'
                onChange={handleChange}
                value={`${currency}`}
            >
                <option value="$" name="dollar">
                    {' '}
                    $ Dollar
                </option>
                <option value="£" name="pound">
                    {' '}
                    £ Pound
                </option>
                <option value="€" name="euro">
                    € Euro
                </option>
                <option value="₹" name="ruppee">
                    ₹ Ruppee
                </option>
            </select>
        </div>
    );
}
