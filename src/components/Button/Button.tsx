import React, { FunctionComponent } from "react";

interface ButtonProps {
    className?: string;
}

export const Button: FunctionComponent<ButtonProps> = ({ className, children, ...other }) => {
    return <button {...other}>{children}</button>;
};
