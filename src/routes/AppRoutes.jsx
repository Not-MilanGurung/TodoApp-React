import { Routes, Route } from "react-router"
import HomePage from "../views/HomePage"
import AddTodoPage from "../views/AddTodoPage"
import EditTodoPage from "../views/EditTodoPage"

function AppRoutes({items, setItems, storeValue}) {
  return (
    <Routes>
        <Route path="/" element={<HomePage items={items} setItems={setItems} storeValue={storeValue} />} />
        <Route path="/add" element={<AddTodoPage setItems={setItems} items={items} storeValue={storeValue} />} />
        <Route path="/edit/:id" element={<EditTodoPage setItems={setItems} items={items} storeValue={storeValue}/>} />
    </Routes>
  )
}

export default AppRoutes