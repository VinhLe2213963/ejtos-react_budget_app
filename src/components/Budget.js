import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { currency, expenses, budget } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    };

    const handleBlur = () => {
        if (newBudget < totalExpenses) {
            alert('The new budget cannot be less than the total expenses');
            setNewBudget(totalExpenses);
        }

        if (newBudget > 20000) {
            alert('The maximum budget is £20000');
            setNewBudget(20000);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleBlur();
        }
    }

    return (
        <div className="alert alert-secondary">
            <span>Budget: {currency}</span>
            <input
                type="number"
                step="10"
                value={newBudget}
                onChange={handleBudgetChange}
                onKeyDown={handleKeyPress}
                onBlur={handleBlur}
            ></input>
        </div>
    );
};
export default Budget;
