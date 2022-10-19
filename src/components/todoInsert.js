import React, { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import './todoInsert.css';

function TodoInsert({onInsertToggle,onInsertTodo}) {
    const [value, setValue] = useState('');

    function onChange(e) {
        setValue(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        onInsertTodo(value);
        setValue('');
        onInsertToggle()
    }

    return (
        <div>
            <div className="background" onClick={onInsertToggle}></div>
            <form onSubmit={onSubmit}>
                <input placeholder="please type" value={value} onChange={onChange}></input>
                <button type="submit"><MdAddCircle/></button>
            </form>
        </div>
    )
}

export default TodoInsert;