import React from "react";
import './Button.css'
import { Link } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";

const STYLES = ['button--primary', 'button--outline']

const SIZES = ['button--medium', 'button--large']

export const Button = ({
    children,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) 
    ? buttonSize : SIZES[0];

    return (
        <Link to='/' className="btn-about">
            <button className={'btn ${checkbuttonStyle} ${checkbuttonSize}'}
            onClick={onClick}
            type = {type} > {children}
            </button>
        </Link>
    );
 };

