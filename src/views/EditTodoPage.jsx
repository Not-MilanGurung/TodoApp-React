import { useParams, useNavigate } from "react-router";
import { useState} from "react";

import { statues } from "../constants";

function EditTodoPage({ items, setItems, storeValue }) {
	const { id:index } = useParams();
	const navigate = useNavigate();
	const itemIndex = Number(index);

	const [formData, setFormData] = useState(
		items[index]
	);

	// Handle input changes
	function handleChange(e) {
	const { name, value } = e.target;
	setFormData((prev) => ({
		...prev,
		[name]: value,
	}));
	}

	// Handle submit
	function handleSubmit(e) {
		e.preventDefault();

		const updatedItems = [...items];
		updatedItems[itemIndex] = formData;

		setItems(updatedItems);
		storeValue(updatedItems); // Save to local storage
		navigate("/"); // Go back to list page
	}

	// Invalid index guard
	if (!items[itemIndex]) {
		return (
			<main className="flex justify-center bg-gray-950 text-white">
				<div className="text-xl text-red-400">Invalid Todo Item</div>
			</main>
		);
	}

	return (
	<main className="flex justify-center bg-gray-950 px-4 py-10">
		<form
		onSubmit={handleSubmit}
		className="w-full max-w-2xl bg-gray-900 shadow-xl rounded-2xl p-8 space-y-6"
		>
		<h2 className="text-3xl font-bold text-center text-white">
			Edit Todo
		</h2>

		{/* Title */}
		<div className="space-y-2">
			<label className="block text-sm text-gray-300">Title</label>
			<input
			type="text"
			name="name"
			value={formData.name}
			onChange={handleChange}
			required
			className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
			/>
		</div>

		{/* Description */}
		<div className="space-y-2">
			<label className="block text-sm text-gray-300">Description</label>
			<textarea
			name="desc"
			value={formData.desc}
			onChange={handleChange}
			required
			rows="4"
			className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
			/>
		</div>

		{/* Status */}
		<div className="space-y-2">
			<label className="block text-sm text-gray-300">Status</label>
			<select
				name="status"
				value={formData.status}
				onChange={handleChange}
				required
				className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
			>
			{statues.map(value => 
				<option value={value.name}>{value.name}</option>
			)}
			</select>
		</div>

		{/* Buttons */}
		<div className="flex gap-4 pt-4">
			<button
			type="submit"
			className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
			>
			Update Todo
			</button>

			<button
			type="button"
			onClick={() => navigate("/")}
			className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg transition"
			>
			Cancel
			</button>
		</div>
		</form>
	</main>
  );
}

export default EditTodoPage;
