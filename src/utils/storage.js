import { useState } from "react";

function getStorageValues(key) {
	const saved = localStorage.getItem(key);
	const value = JSON.parse(saved);
	return value || [];
}

function useLocalStorage(key) {
	const [value, setValue] = useState(() => {
		return getStorageValues(key);
	});
	const storeValue = (value) => {
		localStorage.setItem(key, JSON.stringify(value));
	}
	return {value, setValue, storeValue};
}

export default useLocalStorage;