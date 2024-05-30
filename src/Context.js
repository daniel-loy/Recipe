// Context.js
import React, { useState } from "react";

export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
	const [categories, setCategories] = useState("");

	return (
		<Context.Provider value={{categories, setCategories }}>
			{children}
		</Context.Provider>
	);
};
