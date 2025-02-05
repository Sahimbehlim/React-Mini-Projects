import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Input from "./Input";

const FormValidation = () => {
  const initialState = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [error, setError] = useState("");

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validatePassword = (password, confirmPassword) => {
    if (password.length < 8) return "Password must be 8 characters long";
    if (password !== confirmPassword) return "Password doesn't match";
    if (!/[!@#$%^&*()<>,."]/.test(password))
      return "Password must contain a special character";
    if (!/[A-Z]/.test(password))
      return "Password must contain at least one capital letter";
    return "";
  };

  const formHandler = (e) => {
    e.preventDefault();

    const passwordError = validatePassword(
      formData.password,
      formData.confirmPassword
    );

    if (passwordError) {
      setError(passwordError);
      return;
    }

    setError("");
    setFormData(initialState);

    toast.success("Form Submitted!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const inputFields = [
    { type: "text", name: "fullName", placeholder: "Enter Your Name" },
    { type: "email", name: "email", placeholder: "Enter Your Email" },
    { type: "password", name: "password", placeholder: "Enter Your Password" },
    {
      type: "password",
      name: "confirmPassword",
      placeholder: "Confirm Password",
    },
  ];

  return (
    <section className="min-h-screen w-screen bg-emerald-600 flex flex-col justify-center items-center px-4">
      <Link to="/" className="mb-4">
        <i className="ri-home-7-fill text-3xl text-white"></i>
      </Link>
      <div className="w-full max-w-lg bg-white rounded-md p-4">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Create An Account
        </h2>
        <form onSubmit={formHandler} className="flex flex-col gap-4">
          {inputFields.map(({ type, name, placeholder }) => (
            <Input
              key={name}
              type={type}
              name={name}
              value={formData[name]}
              onChangeHandler={handleChanges}
              placeholder={placeholder}
            />
          ))}

          {error && (
            <p className="font-semibold text-sm text-red-600 text-center">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="text-white bg-emerald-700 hover:bg-emerald-800 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Submit
          </button>
        </form>
        <ToastContainer />
      </div>
    </section>
  );
};

export default FormValidation;
