import React, { useRef, useState } from "react";
import Header from "../Header/Header";
import "./GenderSelection.css";
import Form from "react-bootstrap/Form";
import Select from "react-select";
import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import { useNavigate } from "react-router";

export default function GenderSelection() {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const [gender, setGender] = useState();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      padding: "12px 16px",
      color: "#F9F9F9",
      backgroundColor: "#191726",
    }),
    control: (styles) => ({
      ...styles,
      backgroundColor: "#252238",
      color: "#F9F9F9",
      boxShadow: " 0px 0px 0px 4px #232030",
    }),
    placeholder: (styles) => ({
      ...styles,
      color: "#F9F9F9",
    }),

    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };
  return (
    <div className="gender-selection-main-div">
      <Header />
      <div className="m-auto genderselection" style={{ height: "auto" }}>
        <div className="text-light text-center">Getting to know you</div>
        <div className="d-flex">
          {[0, 1, 2, 3, 4, 5].map((item, i) => {
            return (
              <div
                key={i}
                className="vertical-bar"
                style={{
                  backgroundImage:
                    i < 3
                      ? "linear-gradient(90deg, #6feacc 0%, #fdff9b 100%)"
                      : "",
                }}
              ></div>
            );
          })}
        </div>
        <div className="text-light question-label my-5">
          What gender do you
          <br /> identify with?
          <img
            src="\assests\info-circle.svg"
            alt=""
            className="mx-2"
            ref={target}
            onClick={() => setShow(!show)}
          />
          <Overlay target={target.current} show={show} placement="bottom">
            {(props) => (
              <Tooltip id="overlay-example" {...props}>
                Add description here about
                <br /> why you want to know this.
              </Tooltip>
            )}
          </Overlay>
        </div>

        <Form.Group className="mb-3">
          <Select
            closeMenuOnSelect={false}
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
              { label: "Transgender", value: "transgender" },
              { label: "Non-Binary/Gender-nonconfirming", value: "nonBinary" },
              {
                label: "Prefer to self describe",
                value: "PreferToSelfDescribe",
              },
            ]}
            value={gender}
            placeholder="Gender"
            styles={customStyles}
            onChange={(value) => {
              setGender(value);
              setOpen(false);
            }}
            onMenuOpen={() => setOpen(true)}
            onMenuClose={() => setOpen(false)}
            menuIsOpen={open}
          />

          <div className="select-msg">Please select one </div>
        </Form.Group>

        <div className="text-center">
          <button
            className="btn continue-btn btn-block"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Continue
          </button>
          <button className="btn back-btn">
            {" "}
            <img src="\assests\backarrow.svg" className="mx-2" />
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
