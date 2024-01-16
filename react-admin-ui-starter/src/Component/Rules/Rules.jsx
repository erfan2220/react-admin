import React, {useEffect, useState} from 'react';
import './Rules.css';


const Rules = (props) => {
    const [lastHeader,setLastHeader]=useState('')

    const [selectedHeader, setSelectedHeader] = useState('');
    const [selectedOperator, setSelectedOperator] = useState('equal');
    const [selectedValue, setSelectedValue] = useState('');

    useEffect(() => {
        // Notify the parent component (Filter) about the changes in this rule
        if (props.onChange) {
            props.onChange({
                id: props.id,
                field: selectedHeader,
                operator: selectedOperator,
                value: selectedValue,
            });
        }
    }, [selectedHeader, selectedOperator, selectedValue, props]);



    return (

                <div className="rules" >
                    <img src="/close.svg" alt="Close" onClick={() => props.deleteRow(props.rule.id)} />
                    <div className="item">
                        <label htmlFor={`filter-${props.rule.id}`}>Columns</label>

                        <select
                            className="option-button"
                            name={`filter-${props.rule.id}`}
                            value={selectedHeader}
                            onChange={(e) => {
                                props.updateHeaderName(props.rule.id, e.target.value);
                                setSelectedHeader(e.target.value); // Set the last header value here
                            }}
                        >
                            <option value=""  disabled>Select Column</option>
                            {props.columns
                                .filter((item) => item.field !== 'img')
                                .map((column) => (
                                    <option value={column.headerName} key={column.headerName}>
                                        {column.headerName}
                                    </option>
                                ))}

                        </select>

                    </div>
                    <div className="item">
                        <label htmlFor="filter3">Operator</label>
                        <select
                            className="option-button"
                            id={`filter-value-${props.rule.id}`}
                            name={`filter-${props.rule.id}`}
                            // Assuming you have an operator property in your rule state
                            onClick={(e) => {props.updateOperator(props.rule.id, e.target.value)
                            setSelectedOperator(e.target.value)
                            }}
                        >
                            { (selectedHeader != 'siteName') ? (
                                <>
                                    <option value="equal">{'='}</option>
                                    <option value="smaller">{'<'}</option>
                                    <option value="greater">{'>'}</option>
                                </>
                            ) : (
                                <>
                                    <option value="equal">{'='}</option>
                                </>
                            )}
                        </select>
                    </div>
                    <div className="item">
                        <label htmlFor="filter3">Value</label>
                        <input id={`filter-value-${props.rule.id}`}
                               type="text"
                               value={props.rule.value}
                               onChange={(e)=> {
                                   props.updateValue(props.rule.id, e.target.value)
                                    setSelectedValue(e.target.value)
                               }}
                               placeholder="Filter Value" />
                    </div>
                </div>

    );
};

export default Rules;