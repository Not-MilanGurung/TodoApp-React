import TodoItem from "./TodoItem";
import { useState } from "react";

import { statues } from "../constants";

function TodoList({ items, setItems, storeValue}) {
	const [searchTerm, setSearchTerm] = useState("");
	const [statusFilter, setStatusFilter] = useState("all");

	// Filter logic is run everytime searchTerm and statusFilter is changed
	const filteredItems = items.filter((item) => {
		const matchesSearch = item.name
		  .toLowerCase()
		  .includes(searchTerm.toLowerCase());
		const matchesStatus = statusFilter === "all" || item.status == statusFilter;
	  
		return matchesSearch && matchesStatus;
	});

	// This method is passed to TodoItem component for delete button
	const deleteItem = (index) => {
		const confirmDelete = window.confirm("Are you sure you want to delete this todo?");
		if (!confirmDelete) return;

		const updatedItems = items.filter((_, i) => i !== index);
		setItems(updatedItems);
		storeValue(updatedItems);
	}

	return (
	  <div className="max-w-6xl mx-auto bg-gray-900 rounded-2xl shadow-xl p-6">
		<h2 className="text-3xl font-bold text-center text-white mb-6">
		  Todo List
		</h2>
		<div className="flex flex-col md:flex-row gap-4 mb-6">
  
		{/* Search */}
		<input
			type="text"
			placeholder="Search by title..."
			value={searchTerm}
			onChange={(e) => setSearchTerm(e.target.value)}
			className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
		/>

		{/* Status Filter */}
		<select value={statusFilter}
			onChange={(e) => setStatusFilter(e.target.value)}
			className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
			<option value="all">All</option>
			{statues.map(value =>
				<option value={value.name}>{value.name}</option>
			)}
		</select>
		</div>

		{/* List Table */}
		<div className="overflow-x-auto">
		  <table className="min-w-full border-collapse">
			<thead>
			  <tr className="bg-gray-800 text-gray-300 uppercase text-sm tracking-wider">
				<th className="px-4 py-3 text-left">SN</th>
				<th className="px-4 py-3 text-left">Title</th>
				<th className="px-4 py-3 text-left">Description</th>
				<th className="px-4 py-3 text-left">Status</th>
				<th className="px-4 py-3 text-center">Action</th>
			  </tr>
			</thead>
  
			<tbody>
			  {filteredItems.map((item, i) => (
				<TodoItem key={i} item={item} index={i} deleteItem={deleteItem}/>
			  ))}
			</tbody>
		  </table>
		</div> {/* List Table End */}
	  </div>
	);
  }

export default TodoList;