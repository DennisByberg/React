import { useParams } from "react-router-dom";

const Product = () => {
  const params = useParams();
  console.log(params);

  return <section>Detta är en produktsida {params.title}</section>;
};

export default Product;
