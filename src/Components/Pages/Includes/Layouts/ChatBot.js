import React, { useState, useEffect, useRef } from "react";
import ChatbotIcon from "../../../../Assets/Modules/img/chatbot.png";
import CloseIcon from "../../../../Assets/Modules/img/close.png";
import {
  options_yes_no,
  rating_labels,
  options_navigation,
  questions,
  emoji_labels,
} from "../../../Constants/QA";
import sendImg from "../../../../Assets/Modules/img/send.png";
import { Rating, Stack, styled } from "@mui/material";
import PropTypes from "prop-types";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import InputButton from "../../../UI/InputButton";

const ChatBot = ({ setQuestAnswers, colorTheme }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [chatBotVisible, setChatBotVisible] = useState("hide");
  const [textBoxVisible, setTextBoxVisible] = useState(true);
  const [radioButtonYesNo, setRadioButtonYesNo] = useState(false);
  const [starRating, setStarRating] = useState(false);
  const [emojiRating, setEmojiRating] = useState(false);
  const [radioBtnModerate, setRadioBtnModerate] = useState(false);
  const [sendIcon, setSendIcon] = useState(false);
  const [shownQuestions, setShownQuestions] = useState([questions[0]]);
  const [answerVisibility, setAnswerVisibility] = useState({ answers: [] });
  const [starNum, setStarNum] = useState(0);
  const [emojiNum, setEmojiNum] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const questionRefs = useRef([]);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleClick = () => {
    setIsVisible(false);
    setChatBotVisible("show");
  };

  const handleCloseClick = () => {
    setIsVisible(true);
    setChatBotVisible("hide");
  };

  const handSendMessage = (inputValue) => {
    if (inputValue !== "") {
      setAnswerVisibility((Prev) => ({
        answers: [...Prev.answers, inputValue],
      }));
      setUserInput("");
      handleNextQuestion();
    } else {
      setSendIcon(false);
    }
  };

  useEffect(() => {
    if (userInput !== "") {
      setSendIcon(true);
    } else {
      setSendIcon(false);
    }
  }, [userInput]);

  const renderSwitch = (questID) => {
    switch (questID) {
      case "question_2":
        setTextBoxVisible(false);
        setStarRating(false);
        setRadioButtonYesNo(false);
        setRadioBtnModerate(false);
        setTimeout(() => {
          setEmojiRating(true);
        }, 500);
        break;
      case "question_3":
        setTextBoxVisible(false);
        setStarRating(false);
        setEmojiRating(false);
        setRadioBtnModerate(false);
        setTimeout(() => {
          setRadioButtonYesNo(true);
        }, 500);
        break;
      case "question_7":
        setTextBoxVisible(false);
        setStarRating(false);
        setRadioButtonYesNo(false);
        setEmojiRating(false);
        setTimeout(() => {
          setRadioBtnModerate(true);
        }, 500);
        break;
      case "question_4":
        setTextBoxVisible(false);
        setRadioButtonYesNo(false);
        setEmojiRating(false);
        setRadioBtnModerate(false);
        setTimeout(() => {
          setStarRating(true);
        }, 500);
        break;
      case "question_6":
        setTextBoxVisible(false);
        setStarRating(false);
        setRadioButtonYesNo(false);
        setEmojiRating(false);
        setRadioBtnModerate(false);
        setTimeout(() => {
          setTextBoxVisible(true);
        }, 500);
        break;
      case "question_8":
        setTextBoxVisible(false);
        setStarRating(false);
        setRadioButtonYesNo(false);
        setEmojiRating(false);
        setRadioBtnModerate(false);
        setTimeout(() => {
          setChatBotVisible("hide");
        }, 2500);
        break;
      default:
        setStarRating(false);
        setRadioButtonYesNo(false);
        setEmojiRating(false);
        setRadioBtnModerate(false);
        setTimeout(() => {
          setTextBoxVisible(true);
        }, 500);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      const nextIndex = currentQuestionIndex + 1;
      const questID = questions[nextIndex].id;
      renderSwitch(questID);
      setTimeout(() => {
        setShownQuestions((prevShownQuestions) => {
          return [...prevShownQuestions, questions[nextIndex]];
        });

        setCurrentQuestionIndex(nextIndex);
      }, 500);
    }
  };

  useEffect(() => {
    const questAns = shownQuestions.map((q, index) => ({
      question: q.label,
      answer: answerVisibility.answers[index] || "",
    }));
    setQuestAnswers(questAns);
  }, [shownQuestions, answerVisibility, setQuestAnswers]);

  const options_Yes_No = options_yes_no.map((option) => (
    <InputButton
      key={option.id}
      className="inputButton"
      type="button"
      value={option.label}
      onClick={() => handSendMessage(option.label)}
    />
  ));

  const options_Navigation = options_navigation.map((option) => (
    <InputButton
      key={option.id}
      className="inputButton"
      type="button"
      value={option.label}
      onClick={() => handSendMessage(option.label)}
    />
  ));

  useEffect(() => {
    if (questionRefs.current[currentQuestionIndex]) {
      questionRefs.current[currentQuestionIndex].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [currentQuestionIndex]);

  const handleRatingNames = (num) => {
    const matchingOption = rating_labels.find((option) => option.id == num);
    const labelName = matchingOption ? matchingOption.label : "No rating found";
    handSendMessage(labelName);
  };

  const handleEmojiNames = (num) => {
    const matchingOption = emoji_labels.find((option) => option.id == num);
    const labelName = matchingOption ? matchingOption.label : "No rating found";
    handSendMessage(labelName);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const StyledRating = styled(Rating)(({ theme }) => ({
    "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
      color: theme.palette.action.disabled,
    },
  }));

  const customIcons = {
    1: {
      icon: (
        <SentimentVeryDissatisfiedIcon color="error" sx={{ fontSize: 40 }} />
      ),
      label: "Very Dissatisfied",
    },
    2: {
      icon: <SentimentDissatisfiedIcon color="error" sx={{ fontSize: 40 }} />,
      label: "Dissatisfied",
    },
    3: {
      icon: <SentimentSatisfiedIcon color="warning" sx={{ fontSize: 40 }} />,
      label: "Neutral",
    },
    4: {
      icon: <SentimentSatisfiedAltIcon color="success" sx={{ fontSize: 40 }} />,
      label: "Satisfied",
    },
    5: {
      icon: (
        <SentimentVerySatisfiedIcon color="success" sx={{ fontSize: 40 }} />
      ),
      label: "Very Satisfied",
    },
  };

  const IconContainer = (props) => {
    const { value, ...other } = props;
    return <div {...other}>{customIcons[value].icon}</div>;
  };

  IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
  };

  return (
    <>
      {isVisible && (
        <>
          <div className={`chat-bot-btn ${colorTheme}`} onClick={handleClick}>
            <img src={ChatbotIcon} alt="chat-bot-icon" />
          </div>
        </>
      )}
      <div
        className={`chat-bot-container ${
          chatBotVisible === "show" ? "show" : "hide"
        }`}
      >
        <div className="row">
          <div className="col">
            <div className={`chat-heading pt-2 ${colorTheme}`}>
              <h5 className="text-center m-2">QA section, Let's chat </h5>
              <img
                src={CloseIcon}
                alt="closeChatbot"
                className="closeChatbot"
                onClick={handleCloseClick}
              />
            </div>
          </div>
        </div>
        <div className="chat-bot-content">
          <div className="container">
            <div className="col">
              {shownQuestions.map((question, index) => (
                <>
                  <div className="questions-right">
                    <div
                      className="questions mt-2"
                      key={index}
                      ref={(el) => (questionRefs.current[index] = el)}
                    >
                      <p>{question.label}</p>
                    </div>
                  </div>

                  {answerVisibility.answers[index] && (
                    <div className="answers-right">
                      <div
                        className="answers mt-2"
                        key={answerVisibility.answers[index]}
                      >
                        <p>{answerVisibility.answers[index]}</p>
                      </div>
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>
          {textBoxVisible && (
            <>
              <div className={`typing-area ${colorTheme}`}>
                <InputButton
                  className="textBox"
                  type="text"
                  value={userInput}
                  placeholder="type..."
                  autoFocus={true}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      if (userInput.trim() !== "") {
                        handSendMessage(userInput);
                      }
                    }
                  }}
                />
                {sendIcon && (
                  <>
                    <img
                      src={sendImg}
                      onClick={() => handSendMessage(userInput)}
                      alt="send"
                      data-toggle="tooltip"
                      data-placement="top"
                      title={
                        userInput ? "Send message" : "Input cannot be empty"
                      }
                    />
                  </>
                )}
              </div>
            </>
          )}

          {radioButtonYesNo && (
            <>
              <div className="row">
                <div className="col">
                  <div className="typing-area mb-3">{options_Yes_No}</div>
                </div>
              </div>
            </>
          )}

          {radioBtnModerate && (
            <>
              <div className="row">
                <div className="col">
                  <div className="typing-area mb-3">{options_Navigation}</div>
                </div>
              </div>
            </>
          )}

          {starRating && (
            <>
              <div className="row">
                <div className="col">
                  <div className="typing-area mb-3">
                    <Stack spacing={1}>
                      <Rating
                        name="size-large"
                        value={starNum}
                        size="large"
                        sx={{ fontSize: 40 }}
                        defaultValue={starNum}
                        onChange={(event, newValue) => {
                          setStarNum(newValue);
                          handleRatingNames(newValue);
                        }}
                      />
                    </Stack>
                  </div>
                </div>
              </div>
            </>
          )}

          {emojiRating && (
            <>
              <div className="row">
                <div className="col">
                  <div className="typing-area mb-3">
                    <StyledRating
                      name="highlight-selected-only"
                      defaultValue={emojiNum}
                      value={emojiNum}
                      IconContainerComponent={IconContainer}
                      onChange={(event, newValue) => {
                        setEmojiNum(newValue);
                        handleEmojiNames(newValue);
                      }}
                      getLabelText={(value) => customIcons[value].label}
                      icon={<SentimentVerySatisfiedIcon />}
                      emptyIcon={<SentimentVeryDissatisfiedIcon />}
                      highlightSelectedOnly
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ChatBot;
