import React from "react";

const Button = ({ action, content, nameOfClass }) => {
    return (
        <div>
            <button className={nameOfClass} onClick={action}>{content}</button>
        </div>
    )
}

export default Button