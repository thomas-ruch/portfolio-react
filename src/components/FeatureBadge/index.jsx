function FeatureBadge({
  title,
  fa_icon,
  layout = "column",
  link,
  hideText = false,
}) {
  const content = (
    <>
      <i className={fa_icon}></i>
      {!hideText && <span>{title}</span>}
    </>
  );

  return link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`badge ${layout === "row" ? "badge-row" : ""}`}
    >
      {content}
    </a>
  ) : (
    <div className={`badge ${layout === "row" ? "badge-row" : ""}`}>
      {content}
    </div>
  );
}

export default FeatureBadge;
