import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { RiSubtractFill } from "react-icons/ri";

const Info = ({ question, answer }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <article className="question">
      <div className="question__title">
        <p className="title__describe">{question}</p>
        <button onClick={() => setIsShow(!isShow)} className="title__button">
          {isShow ? <RiSubtractFill /> : <AiOutlinePlus />}
        </button>
      </div>

      {isShow && <p className="question__answer">{answer}</p>}
    </article>
  );
};

export default Info;
