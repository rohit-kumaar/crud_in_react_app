import axios from "axios";
import React, { useState } from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { MAIN_URL } from "../../config";
import { useTitle } from "../hooks/useTitle";
import { ROUTE_PATH } from "../router/publicRouter";

function Create() {
  useTitle("Create");

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!values.name || !values.email || !values.phone) {
      alert("Please fill in all the required fields.");
      return;
    }

    axios
      .post(`${MAIN_URL}/users`, values)
      .then((res) => {
        navigate(ROUTE_PATH.Default);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-center w-100 vh-100 bg-light">
        <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
          <h1>Add A User</h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="name">Name :</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter Your Name"
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email">Email :</label>
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="Enter Your Email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="phone">Phone :</label>
              <input
                type="text"
                name="phone"
                className="form-control"
                placeholder="Enter Your Phone Number"
                onChange={handleChange}
              />
            </div>

            <div className="d-flex align-items-center">
              <button className="btn btn-success me-3">
                Submit <IoCheckmarkDoneCircle />
              </button>
              <Link to={ROUTE_PATH.Default} className="btn btn-primary">
                Back <RiArrowGoBackFill />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Create;
