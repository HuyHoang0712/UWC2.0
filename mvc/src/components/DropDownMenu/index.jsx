import React, {useState} from "react";

import "./DropDownMenu.css"

const options = ["MCPs Management", "Vehicles Management"];

function DropDownMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0])
    console.log(options)

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () =>{
        setSelectedOption(value);
        setIsOpen(false);
        console.log(value)
    }

    return (
        <div className="DropDownContainer">
            <div className="DropDownHeader" onClick={toggling}>{selectedOption}</div>
            {isOpen && (
                <div classNam="DropDownListContainer">
                    <ul className="DropDownList">
                        {options.map(option => (
                            <li 
                                onClick={onOptionClicked(option)} key={Math.random()}
                                style={selectedOption === option ? {backgroundColor: '#D8FFEF'}:{}}  
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}


export default DropDownMenu;