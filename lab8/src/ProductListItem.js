import { useSelector, useDispatch } from "react-redux";
import { toggleLiked, addToBasket } from "./redux/actions";

const ProductListItem = ({ product }) => {
	const likedProducts = useSelector((state) => state.likedProducts);
	const productsInBasket = useSelector((state) => state.productsInBasket);
	const dispatch = useDispatch();
	const isLiked = likedProducts.includes(product.id);
	const addedProduct = productsInBasket.find((p) => p.id === product.id);

	// const handleAddToBasket = (productId) => {
	// 	console.log(`Product with id ${productId} added to Basket`);
	// };

	return (
		<li>
			<span style={{ marginRight: 5 }}>{product.title}</span>
			<span
				onClick={() => dispatch(toggleLiked(product.id))}
				style={{ cursor: "pointer", marginRight: 5 }}
			>
				<i
					className={`fa-heart ${isLiked ? "fas" : "far"}`}
					style={{ color: isLiked ? "green" : "grey" }}
				></i>
			</span>

			<span
				style={{ color: "blue" }}
				onClick={() => dispatch(addToBasket(product.id))}
			>
				<i className={`fas fa-cart-plus`} style={{ color: "blue" }}></i>
			</span>
				{addedProduct ? <span>({addedProduct.quantity})</span> : <></>}
		</li>
	);
};

export default ProductListItem;
