import { useParams } from "react-router-dom";
const ShopSelectedProduct = () => {
    const { id } = useParams();

    return <p>
        {id}
    </p>
}

export default ShopSelectedProduct;