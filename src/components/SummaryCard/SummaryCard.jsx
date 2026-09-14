import "./SummaryCard.css";

const SummaryCard = ({
  title,
  amount,
  text,
  icon,
  color,
  bgColor,
  currency = true,
}) => {
  return (
    <div className="summary-card">
      <div style={{ backgroundColor: bgColor }} className="summary-card__icon">
        {icon}
      </div>

      <div className="summary-card__content">
        <h3 className="heading-3">{title}</h3>

        <h2 style={{ color }} className="heading-2">
          {currency ? `€${amount}` : amount}
        </h2>

        <p className="summary-card__message">{text}</p>
      </div>
    </div>
  );
};

export default SummaryCard;
