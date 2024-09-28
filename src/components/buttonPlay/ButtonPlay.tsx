import React, { useState } from "react";

type Props = {
  handleClick: () => void;
};

const ButtonPlay = ({ handleClick }: Props) => {
  const [text, setText] = useState<string>("Play");

  return (
    <>
      <button
        onClick={() => {
          setText("Restart");
          handleClick();
        }}
      >
        {text}
      </button>
    </>
  );
};

export default ButtonPlay;
