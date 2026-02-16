import { Link } from "react-router";

import { statues } from "../constants";

function TodoItem({ item, index, deleteItem }) {
	const statusColor = statues.find(value => value.name === item.status).color;
	return (
	  <tr className="border-b border-gray-800 hover:bg-gray-800 transition duration-200">
		<td className="px-4 py-3 text-gray-300">{index + 1}</td>
		<td className="px-4 py-3 text-white font-medium">{item.name}</td>
		<td className="px-4 py-3 text-gray-400">{item.desc}</td>
		<td className="px-4 py-3">
		  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${statusColor}`}>
			{item.status}
		  </span>
		</td>
		<td className="px-4 py-3 text-center space-x-4">
			<Link to={`/edit/${index}`} className="px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition">
				Edit
			</Link>
			<button onClick={() => deleteItem(index)} className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition">
				Delete
			</button>
		</td>
	  </tr>
	);
  }

export default TodoItem