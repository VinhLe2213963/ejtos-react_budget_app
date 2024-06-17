import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { currency, dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    };

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense,
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td>
                <button
                    className="btn btn-primary btn-success"
                    style={{ borderRadius: '50%' }}
                    onClick={(event) => increaseAllocation(props.name)}
                >
                    <i className="bi bi-plus"></i>
                </button>
            </td>
            <td>
                <button
                    className="btn btn-primary btn-danger"
                    style={{ borderRadius: '50%' }}
                    onClick={(event) => decreaseAllocation(props.name)}
                >
                    <i className="bi bi-dash"></i>
                </button>
            </td>
            <td>
                <button
                    className="btn btn-primary btn-danger"
                    style={{ borderRadius: '50%' }}
                    size="1.5em"
                    onClick={handleDeleteExpense}
                >
                    <i className="bi bi-x"></i>
                </button>
            </td>
        </tr>
    );
};

export default ExpenseItem;
