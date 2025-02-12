function FeatureBadge({
  title,
  fa_icon,
  layout = "column",
  link,
  hideText = false,
  ariaLabel,
}) {
  const content = (
    <>
      <i className={fa_icon}></i>
      {!hideText && <span>{title}</span>}
    </>
  );

  const currentLabel = ariaLabel || title || "Icône non décrite";

  return link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`badge ${layout === "row" ? "badge-row" : ""}`}
      aria-label={currentLabel}
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
