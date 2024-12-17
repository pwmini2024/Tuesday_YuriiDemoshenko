import React from "react";
import { Provider } from "react-redux";
import LanguagePicker from "./LanguagePicker";
import LanguageProvider from "./LanguageProvider";
import Header from "./Header";
import store from "./redux/store";

const App = () => {
	return (
		<LanguageProvider>
			<Provider store={store}>
				<div className="container">
					<LanguagePicker />
					<Header/>
				</div>
			</Provider>
		</LanguageProvider>
	);
};

export default App;
