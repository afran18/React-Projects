import { Link, useParams } from "react-router-dom";

function ProductDetailsPage() {
  const params = useParams();

  return (
    <>
      <h1>ProductDetailsPage</h1>
      <p>{params.productId}</p>
      <p><Link to = ".." relative="path">Back</Link></p>
    </>
  );
}
export default ProductDetailsPage;
