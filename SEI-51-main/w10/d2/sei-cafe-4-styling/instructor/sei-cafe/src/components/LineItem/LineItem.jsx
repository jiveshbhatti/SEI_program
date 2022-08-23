import "./LineItem.css";

export default function LineItem(props) {
  return (
    <div
      className="LineItem"
      style={
        props.color ? { backgroundColor: "red" } : { backgroundColor: "blue" }
      }
    >
      <div className="flex-ctr-ctr">🥗</div>
      <div className="flex-ctr-ctr flex-col">
        <span className="align-ctr">Green Salad</span>
        <span>$3.95</span>
      </div>
      <div className="qty" style={{ justifyContent: "center" }}>
        <button className="btn-xs">−</button>
        <span>70</span>
        <button className="btn-xs" onClick={() => props.changeColor()}>
          +
        </button>
      </div>
      <div class="ext-price">$3.95</div>
    </div>
  );
}
