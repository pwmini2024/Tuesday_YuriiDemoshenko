import { useSelector, useDispatch } from "react-redux";
import { removeFromBasket } from "./redux/actions";
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
	const products = productsAll.filter((product) => productsInBasket.find((p) => p.id === product.id))

	return (
		<div className="box">
			<h2 className="title">Basket</h2>
			{ productsInBasket.length 
				? (
					<ul>
						{products.map((product) => (
							<li>
							<span style={{ marginRight: 5 }}>{product.title}</span>
				
							<span
								style={{ color: "blue" }}
								onClick={() => dispatch(removeFromBasket(product.id))}
							>
								<i className={`fas fa-trash`} style={{ color: "blue" }}></i>
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
