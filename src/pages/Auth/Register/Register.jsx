
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import { registerUser } from "../../../services/authApi";
const Register = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        age: "",
        role: "patient",
        confirmPassword: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        // Remove error when user starts correcting the field
        setErrors((prev) => ({
            ...prev,
            [name]: ""
        }));
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        } else if (formData.name.trim().length < 3) {
            newErrors.name = "Name must be at least 3 characters";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email address";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Please confirm your password";
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^[0-9]{10}$/.test(formData.phone)) {
            newErrors.phone = "Phone number must contain 10 digits";
        }

        if (!formData.age) {
            newErrors.age = "Age is required";
        } else if (Number(formData.age) < 1 || Number(formData.age) > 120) {
            newErrors.age = "Enter a valid age";
        }

        if (!formData.role) {
            newErrors.role = "Role is required";
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const requestBody = {
            name: formData.name.trim(),
            email: formData.email.trim(),
            password: formData.password,
            phone: formData.phone,
            age: Number(formData.age),
            role: formData.role
        };

        console.log("Register Request:", requestBody);

        // API call will be added later
        try {
            const data = await registerUser(requestBody);

            console.log("Registration successful:", data);
            navigate("/")
        } catch (error) {
            setErrors(error.message);
        }
    };

    return (
        <div className={styles.page}>
            <div className={styles.card}>

                <div className={styles.header}>
                    <h1>Create Account</h1>
                    <p>Start your recovery journey with Phyzifit.</p>
                </div>

                <form className={styles.form} onSubmit={handleSubmit}>

                    <div className={styles.field}>
                        <label>Full Name</label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                        />

                        {errors.name && (
                            <span className={styles.error}>
                                {errors.name}
                            </span>
                        )}
                    </div>

                    <div className={styles.field}>
                        <label>Email Address</label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                        />

                        {errors.email && (
                            <span className={styles.error}>
                                {errors.email}
                            </span>
                        )}
                    </div>

                    <div className={styles.field}>
                        <label>Phone Number</label>

                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                        />

                        {errors.phone && (
                            <span className={styles.error}>
                                {errors.phone}
                            </span>
                        )}
                    </div>

                    <div className={styles.field}>
                        <label>Age</label>

                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            placeholder="Enter your age"
                        />

                        {errors.age && (
                            <span className={styles.error}>
                                {errors.age}
                            </span>
                        )}
                    </div>

                    <div className={styles.field}>
                        <label>Role</label>

                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                        >
                            <option value="patient">Patient</option>
                            <option value="physio">Physiotherapist</option>
                        </select>

                        {errors.role && (
                            <span className={styles.error}>
                                {errors.role}
                            </span>
                        )}
                    </div>

                    <div className={styles.field}>
                        <label>Password</label>

                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Create a password"
                        />

                        {errors.password && (
                            <span className={styles.error}>
                                {errors.password}
                            </span>
                        )}
                    </div>

                    <div className={styles.field}>
                        <label>Confirm Password</label>

                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm your password"
                        />

                        {errors.confirmPassword && (
                            <span className={styles.error}>
                                {errors.confirmPassword}
                            </span>
                        )}
                    </div>

                    <button
                        type="submit"
                        className={styles.button}
                    >
                        Create Account
                    </button>

                </form>

                <p className={styles.footer}>
                    Already have an account?{" "}
                    <Link to="/">Login</Link>
                </p>

            </div>
        </div>
    );
};

export default Register;