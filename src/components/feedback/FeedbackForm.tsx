import { useState } from "react";
import { MAX_CHARACTERS } from "../../lib/constants";

type FeedbackFormProps = {
  onAddToList: (text: string) => void;
};

export default function FeedbackForm({ onAddToList }: FeedbackFormProps) {
  const [text, setText] = useState("");
  const [showValidIndicator, setShowValidIndicator] = useState(false)
  const [showInValidIndicator, setShowInValidIndicator] = useState(false)

  const charCount = MAX_CHARACTERS - text.length;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    if (newText.length > MAX_CHARACTERS) return;
    setText(newText);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text.includes("#") && text.length >= 5) {
      setShowValidIndicator(true)
      setTimeout(() => {
        setShowValidIndicator(false)
      }, 2000);
    } else {
      setShowInValidIndicator(true)
      setTimeout(() => {
        setShowInValidIndicator(false)
      }, 2000);
      return
    }
    onAddToList(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className={`form ${showValidIndicator ? "form--valid" : ""} ${showInValidIndicator ? "form--invalid" : ""}`}>
      <textarea
        value={text}
        onChange={handleChange}
        id="feedback-textarea"
        spellCheck={false}
      />

      <label htmlFor="feedback-textarea">
        Enter your feedback here, remember to #hastag the company
      </label>

      <div>
        <p className="u-italic">{charCount}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
