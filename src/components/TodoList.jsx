import TodoItem from "./TodoItem";
import { useState } from "react";

function TodoList({ items, setItems, storeValue}) {
	const [searchTerm, setSearchTerm] = useState("");
	const [statusFilter, setStatusFilter] = useState("all");

	const filteredItems = items.filter((item) => {
		const matchesSearch = item.name
		  .toLowerCase()
		  .includes(searchTerm.toLowerCase());
		console.log(item.status, statusFilter);
		const matchesStatus =
		  statusFilter === "all" || item.status == statusFilter;
	  
		return matchesSearch && matchesStatus;
	});

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
		<select
			value={statusFilter}
			onChange={(e) => setStatusFilter(e.target.value)}
			className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
		>
			<option value="all">All</option>
			<option value="pending">Pending</option>
			<option value="completed">Completed</option>
		</select>
		</div>
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
		</div>
	  </div>
	);
  }

export default TodoList;