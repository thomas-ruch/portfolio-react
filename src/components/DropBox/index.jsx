import { useState } from "react";

function DropBox({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="drop-box">
      <div className="drop-title" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <i className={`fa-solid fa-chevron-up ${isOpen ? "rotated" : ""}`} />
      </div>
      <div className={`drop-txt ${isOpen ? "is-open" : ""}`}>
        <div className="drop-txt-content">
          {Array.isArray(content) ? (
            <ul>
              {content.map((elem, index) => (
                <li key={index}>{elem}</li>
              ))}
            </ul>
          ) : (
            <span>{content}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default DropBox;
