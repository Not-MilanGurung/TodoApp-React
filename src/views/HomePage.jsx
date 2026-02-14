import TodoList from "../components/TodoList";

function HomePage({items, setItems, storeValue}) {
  return (
    <main className="flex-row px-[15%] py-10">
		<TodoList items={items} setItems={setItems} storeValue={storeValue}/>
    </main>
  )
}

export default HomePage;