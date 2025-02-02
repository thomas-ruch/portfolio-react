function Skill({ title, fa_icon }) {
  return (
    <div className="skill">
      <i className={`${fa_icon} fa-3x`}></i>
      <span>{title}</span>
    </div>
  );
}

export default Skill;
