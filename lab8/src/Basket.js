import { useSelector, useDispatch } from "react-redux";
import { addToBasket, removeFromBasket, deleteFromBasket } from "./redux/actions";
import { useContext } from "react";
import LanguageContext from "./LanguageContext";

const Basket = (props) => {
	const basketText = {
		"en-US": "Your basket is empty.",
		"de-DE": "Ihr Warenkorb ist leer.",
		"pl-PL": "Twój koszyk jest pusty.",
	};

	const { language } = useContext(LanguageContext);
	const dispatch = useDispatch();
	const productsAll = useSelector((state) => state.products[language]);
	const productsInBasket = useSelector((state) => state.productsInBasket);
	const products = productsAll.filter((product) => productsInBasket.find((p) => p.id === product.id && p.quantity > 0))

	return (
		<div className="box">
			<h2 className="title">Basket</h2>
			{ productsInBasket.length 
				? (
					<ul>
						{products.map((product) => (
							<li style={{ display: 'flex', gap: '8px'}}>
							<span style={{ marginRight: 2 }}>{product.title}</span>
							<span style={{ marginRight: 5 }}>{productsInBasket.find((p) => p.id === product.id)?.quantity}</span>
				
							<span
								style={{ color: "red" }}
								onClick={() => dispatch(deleteFromBasket(product.id))}
							>
								<i className={`fas fa-trash`} style={{ color: "red" }}></i>
							</span>
							<span
								style={{ color: "black" }}
								onClick={() => dispatch(removeFromBasket(product.id))}
							>
								<i className={`fas fa-minus`} style={{ color: "black" }}></i>
							</span>
							<span
								style={{ color: "black" }}
								onClick={() => dispatch(addToBasket(product.id))}
							>
								<i className={`fas fa-plus`} style={{ color: "black" }}></i>
							</span>
						</li>
						))}
					</ul>
				)
				: <p>{basketText[language]}</p>
			}

		</div>
	);
};

export default Basket;
