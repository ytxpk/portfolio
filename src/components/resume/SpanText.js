import './SpanText.css';

export default function SpanText(props) {
  return (
    <span className="span-text">
      <h4>{props.title}</h4>
      <p className="colon">:</p>
      <p>{props.children}</p>
    </span>
  );
}
