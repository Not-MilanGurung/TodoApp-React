import { useState } from "react"
import { useNavigate } from "react-router";

import { statues } from "../constants";

function AddTodoPage({items, setItems, storeValue}) {
	const [item, setItem] = useState({
		name: "",
		desc: "",
		status: statues[0].name
	});

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setItem(values => ({...values, [name]: value}));
	}
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const updatedItems = [...items, {name: item.name,
			desc: item.desc,
			status: item.status
		}];
		setItems(updatedItems);
		storeValue(updatedItems);
		navigate("/");
	}
	return (
		<main className="flex justify-center bg-gray-950 px-4 py-10">
		<form
			onSubmit={handleSubmit}
			className="w-full max-w-2xl bg-gray-900 shadow-xl rounded-2xl p-8 space-y-6"
		>
			<h2 className="text-3xl font-bold text-center text-white">
			Add Todo Item
			</h2>

			{/* Title */}
			<div className="space-y-2">
			<label htmlFor="name" className="block text-sm font-medium text-gray-300">
				Title
			</label>
			<input
				type="text"
				name="name"
				value={item.name}
				onChange={handleChange}
				required
				pattern=".*\S.*"
				title="Input words"
				className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
				placeholder="Enter todo title..."
			/>
			</div>

			{/* Description */}
			<div className="space-y-2">
			<label htmlFor="desc" className="block text-sm font-medium text-gray-300">
				Description
			</label>
			<textarea
				name="desc"
				value={item.desc}
				onChange={handleChange}
				required
				rows="4"
				pattern=".*\S.*"
				title="Input words"
				className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none"
				placeholder="Write details about this task..."
			></textarea>
			</div>

			{/* Status */}
			<div className="space-y-2">
			<label htmlFor="status" className="block text-sm font-medium text-gray-300">
				Status
			</label>
			<select
				name="status"
				value={item.status}
				onChange={handleChange}
				required
				className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition">
				{statues.map(value => {
					return <option value={value.name}>{value.name}</option>
				})}
			</select>
			</div>

			{/* Submit Button */}
			<div className="pt-4">
			<button type="submit"
				className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition duration-200 shadow-md">
				Save Todo
			</button>
			</div>
		</form>
		</main>
	)
}

export default AddTodoPage