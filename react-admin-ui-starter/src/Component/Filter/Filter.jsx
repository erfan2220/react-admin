import React, { useState } from 'react';
import './Filter.css';
import Rules from '../Rules/Rules.jsx';
import { userRows } from '../../data';




const Filter  = (props) => {
    const [ruleList, setRuleList] = useState([{ id: 1, field: '', operator: 'equal', value: '' }]);

    const applyFilter = (row, rule) => {
        let field = rule.field;

        switch (rule.operator) {
            case 'equal':
                return row[field] == rule.value;

            case 'greater':
                return row[field] > rule.value;

            case 'smaller':
                return row[field] < rule.value;

            default:
                return true;
        }
    };

    const checkRules = () => {
        let filteredData = userRows;

        ruleList.forEach((rule) => {
            filteredData = filteredData.filter((row) => applyFilter(row, rule));
        });

        props.setFilteredRows(filteredData);

    };

    const deleteRow = (id) => {
        const updatedRuleList = ruleList.filter((rule) => rule.id !== id);
        { ruleList.length == 1 ? props.setFilter(false) : '' }
        setRuleList(updatedRuleList);
    };

    const newRules = () => {
        // Get the last rule in the list
        const newRuleList = [...ruleList, { id: ruleList.length + 1 , field: '', operator: '', value: ''}];
        setRuleList(newRuleList);
    };

    const updateHeaderName = (id, field) => {
        const updatedRuleList = ruleList.map((rule) =>
            rule.id == id ? { ...rule, field } : rule
        );
        setRuleList(updatedRuleList);
    };

    const updateOperator = (id, operator) => {
        const updateRuleList = ruleList.map((rule) =>
            rule.id === id ? { ...rule, operator } : rule
        );
        setRuleList(updateRuleList);
    };

    const updateValue = (id, value) => {
        const updatedRuleList = ruleList.map((rule) =>
            rule.id === id ? { ...rule, value } : rule
        );
        setRuleList(updatedRuleList);
    };

    return (
        <div className="Filter">
            <div className="image-close">
                <img src="close.svg" alt="Close" onClick={() => props.setFilter(false)} />
            </div>
            {
                ruleList.map((rule)=>
                    <Rules
                        key={rule.id}
                        rule={rule}
                        deleteRow={deleteRow}
                        updateHeaderName={updateHeaderName}
                        updateOperator={updateOperator}
                        updateValue={updateValue}
                        columns={props.columns}
                        rows={props.rows}
                    />
                )
            }
            {
                console.log(ruleList)
            }

            <button className="newRules-button" onClick={newRules}>
                New rules
            </button>
            <button className="applyFilter-button" onClick={checkRules}>
                Apply Filter
            </button>
        </div>
    );
};

export default Filter;