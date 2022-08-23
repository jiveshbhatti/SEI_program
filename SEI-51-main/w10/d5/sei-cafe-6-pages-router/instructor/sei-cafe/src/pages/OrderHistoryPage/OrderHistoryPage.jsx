import { Link } from "react-router-dom";

export default function OrderHistoryPage(props) {
  return (
    <>
      <div>OrderHistoryPage</div>
      <Link to="/orders/new">Go to New Order Page</Link>
    </>
  );
}
