import { useState } from "react";

interface Props {
  maxChars: number;
  children: string;
}

const ExpendableText = ({ maxChars = 100, children }: Props) => {
  //Example of state for expendable text
  const [expanded, setExpanded] = useState(false);

  //Don't need button if the text is shorter than max length allowed
  if (children.length <= maxChars) return <p>{children}</p>;

  //Save shortened text
  const shortenedText = children.substring(0, maxChars);
  return (
    <>
      {/* Check if expanded is true to show shortened or long text*/}
      {expanded ? <p>{children}</p> : <p>{shortenedText}...</p>}{" "}
      {/* if button is pressed set expanded to opposite value*/}
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? "Less" : "More"}
      </button>
    </>
  );
};

export default ExpendableText;
