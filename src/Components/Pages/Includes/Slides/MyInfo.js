import React, { useEffect, useRef, useState } from "react";
import contact from "../../../../Assets/Modules/img/contact.png";
import contact_mail from "../../../../Assets/Modules/img/contact_mail.png";
import emailjs from "@emailjs/browser";
import InputButton from "../../../UI/InputButton";
import { useForm } from "react-hook-form";
import TextArea from "../../../UI/TextArea";
import Modal from "react-bootstrap/Modal";
import Button from "../../../UI/Button";

const MyInfo = ({ myInfoSection, colorTheme, questAnswers, inView, reff }) => {
  const [feedBackModal, setfeedBackModal] = useState(false);
  const [firstName, setFirstName] = useState("");

  const {
    register,
    handleSubmit,
    clearErrors,
    setValue,
    formState: { errors },
  } = useForm();

  const form = useRef();

  const handleInputChange = (field, value) => {
    if (field === "first_name") {
      setFirstName(value);
    }
    setValue(field, value, { shouldValidate: true });
    if (value && !errors[field]) {
      clearErrors(field);
    }
  };

  const handleClose = () => setfeedBackModal(false);
  const handleShow = () => setfeedBackModal(true);

  const handleClear = () => {
    form.current.reset();
    clearErrors();
    setValue("first_name", "");
    setValue("last_name", "");
    setValue("contact_number", "");
    setValue("user_email", "");
    setValue("feedback_message", "");
  };

  const chatbotAnswersFormatted = questAnswers
    .map((qa) => `${qa.question}: ${qa.answer}`)
    .join("\n");

  const capitalizeFirstLetter = (str) => {
    if (str.length === 0) {
      return str;
    } else {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  };

  const UserName = capitalizeFirstLetter(firstName);

  useEffect(() => {
    setTimeout(() => {
      setfeedBackModal(false);
    }, 2500);
  }, [feedBackModal]);

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          handleShow();
          handleClear();
        },
        (error) => {
          console.error("Error:", error.text);
          alert("Failed to send Feedback.");
          handleClear();
        }
      );
  };

  return (
    <>
      <div className="contact" ref={myInfoSection}>
        <div ref={reff} className="container">
          <div className="row">
            <div className="col">
              <div
                className={`my-info ${colorTheme} ${inView ? "in-view" : ""}`}
              >
                <div className="row">
                  <div className="col">
                    <div className="my-details">
                      <h4 className={`heading ${colorTheme}`}>
                        Let's Connect &nbsp;
                        <img src={contact} alt="contact" />
                      </h4>
                      <h5>Contact Information</h5>
                      <div className="icon-icons">
                        <i className="bi bi-telephone-fill"></i>
                        <span className="icons">
                          <a href="tel:+917736627497">+91 7736627497</a>
                        </span>
                      </div>
                      <div className="icon-icons">
                        <i className="bi bi-whatsapp"></i>
                        <span className="icons">
                          <a
                            href="https://wa.me/917736627497"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Chat on WhatsApp
                          </a>
                        </span>
                      </div>
                      <div className="icon-icons">
                        <i className="bi bi-envelope-at-fill"></i>
                        <span className="icons">
                          <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=saheerchowki@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            saheerchowki@gmail.com
                          </a>
                        </span>
                      </div>
                      <div className="container">
                        <div className="row">
                          <div className="row social-icons-row">
                            <div className="col-auto">
                              <a
                                href="https://github.com/Saheer27"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="icon-link"
                              >
                                <i className="bi bi-github social-icon"></i>
                              </a>
                            </div>
                            <div className="col-auto">
                              <a
                                href="https://www.linkedin.com/in/saheer27/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="icon-link"
                              >
                                <i className="bi bi-linkedin social-icon"></i>
                              </a>
                            </div>
                            <div className="col-auto">
                              <a
                                href="https://instagram.com/saheer_chowki"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="icon-link"
                              >
                                <i className="bi bi-instagram social-icon"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className={`contact-me ${inView ? "in-view" : ""}`}>
                <h4 className={`heading ${colorTheme}`}>
                  Feedbacks / Contact me &nbsp;
                  <img src={contact_mail} alt="contact_mail" />
                </h4>
                <form ref={form} onSubmit={handleSubmit(sendEmail)}>
                  <div className="form">
                    <InputButton
                      type="hidden"
                      name="chatbot_answers"
                      value={chatbotAnswersFormatted}
                    />
                    <div className="row">
                      <div className="col">
                        <div className="formText firstName">
                          <InputButton
                            type="text"
                            name="first_name"
                            className={`form-control ${colorTheme}`}
                            placeholder="First Name"
                            maxLength="20"
                            minLength="3"
                            onChange={(e) =>
                              handleInputChange("first_name", e.target.value)
                            }
                            validation={register("first_name", {
                              required: "First name is required",
                              pattern: {
                                value: /^[A-Za-z\s]{3,}$/,
                                message: "Please enter a valid name",
                              },
                            })}
                          />
                          {errors.first_name && (
                            <p className="error">{errors.first_name.message}</p>
                          )}
                        </div>
                      </div>
                      <div className="col">
                        <div className="formText lastName">
                          <InputButton
                            type="text"
                            name="last_name"
                            className={`form-control ${colorTheme}`}
                            placeholder="Last Name"
                            maxLength="20"
                            minLength="3"
                            onChange={(e) =>
                              handleInputChange("last_name", e.target.value)
                            }
                            validation={register("last_name", {
                              required: "Last name is required",
                              maxLength: "20",
                              minLength: "3",
                              pattern: {
                                value: /^[A-Za-z\s]{3,}$/,
                                message: "Please enter a valid name",
                              },
                            })}
                          />
                          {errors.last_name && (
                            <p className="error">{errors.last_name.message}</p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="formText phoneNum">
                          <InputButton
                            type="tel"
                            name="contact_number"
                            className={`form-control ${colorTheme}`}
                            placeholder="Contact Number"
                            maxLength="13"
                            minLength="10"
                            onChange={(e) =>
                              handleInputChange(
                                "contact_number",
                                e.target.value
                              )
                            }
                            validation={register("contact_number", {
                              required: "Contact number is required",
                              pattern: {
                                value: /^(?:\+?\d{1,3}[- ]?)?\d{10}$/,
                                message: "Invalid contact number",
                              },
                            })}
                          />
                          {errors.contact_number && (
                            <p className="error">
                              {errors.contact_number.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="col">
                        <div className="formText email">
                          <InputButton
                            type="email"
                            name="user_email"
                            className={`form-control ${colorTheme}`}
                            placeholder="Email Address"
                            onChange={(e) =>
                              handleInputChange("user_email", e.target.value)
                            }
                            validation={register("user_email", {
                              required: "Email address is required",
                              pattern: {
                                value: /^[\w.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                                message: "Invalid email address",
                              },
                            })}
                          />
                          {errors.user_email && (
                            <p className="error">{errors.user_email.message}</p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="formText company_personal">
                          <InputButton
                            type="text"
                            name="company_organization"
                            className={`form-control ${colorTheme}`}
                            placeholder="Company/Organization Name (optional)"
                            onChange={(e) =>
                              handleInputChange(
                                "company_personal",
                                e.target.value
                              )
                            }
                            validation={register("company_personal", {
                              required: false,
                            })}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="formText feedBack">
                          <TextArea
                            name="feedback_message"
                            rows="4"
                            cols="50"
                            className={`form-control feedBack ${colorTheme}`}
                            placeholder="Any Feedback For Me"
                            onChange={(e) =>
                              handleInputChange(
                                "feedback_message",
                                e.target.value
                              )
                            }
                            validation={register("feedback_message", {
                              required: "Feedback is required",
                              minLength: {
                                value: 10,
                                message:
                                  "Feedback must be at least 10 characters",
                              },
                            })}
                          />
                          {errors.feedback_message && (
                            <p className="error">
                              {errors.feedback_message.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <Button
                          type="submit"
                          className="submitBtn"
                          name="submit"
                          value=""
                        >
                          Send
                        </Button>
                        <Button
                          type="button"
                          className="clearBtn"
                          name="clear"
                          onClick={handleClear}
                        >
                          Clear
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        centered
        className="feedbackModal"
        backdrop="static"
        show={feedBackModal}
        onHide={handleClose}
      >
        <Modal.Body className="m-4">
          Hi {UserName ? UserName : "there"},<br />
          Your feedback has been sent successfully! <br />
          Thank you for taking the time to share your thoughts.
          <br />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MyInfo;
