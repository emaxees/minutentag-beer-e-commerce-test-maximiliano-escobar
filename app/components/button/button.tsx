import React, { FC, ButtonHTMLAttributes } from "react";
import styles from './button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
}

const Button: FC<ButtonProps> = ({ variant = 'primary', ...props }) => {
    const buttonClassName = `${styles.root} ${styles[variant]}`;

    return (
        <button className={buttonClassName} {...props}>
            {props.children}
        </button>
    );
};

export default Button;
