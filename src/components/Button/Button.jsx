import React from "react";

const Button = ({
    children,
    onClick,
    type = "button",
    variant = "primary",
    disabled = false,
}) => {

    // console.log(data);
    // console.log(typeof handleShow)

    const styles = {
        base: {
            padding: "10px 18px",
            borderRadius: "8px",
            border: "none",
            fontSize: "14px",
            fontWeight: "600",
            cursor: disabled ? "not-allowed" : "pointer",
            transition: "all 0.2s ease",
            opacity: disabled ? 0.6 : 1,
        },

        primary: {
            backgroundColor: "#2563eb",
            color: "#fff",
        },

        secondary: {
            backgroundColor: "#f1f5f9",
            color: "#1e293b",
            border: "1px solid #cbd5e1",
        },

        danger: {
            backgroundColor: "#dc2626",
            color: "#fff",
        },
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            style={{
                ...styles.base,
                ...styles[variant],
            }}
        >
            {children}
        </button>
    );
};

export default Button;