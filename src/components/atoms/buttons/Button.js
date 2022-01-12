import React from 'react';
import styles from "./Button.module.css"

export const Button = ({ type , children , onClick , disabled }) =>(

        <button
            className={styles["default-button"]}
            type={type}
            onClick={onClick}
            disabled={disabled}>
            {children}
        </button>
);
