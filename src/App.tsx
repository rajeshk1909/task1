import Table from "../src/table/Table"
import "./App.css"
import "./index.css"
import Summary from "./summary/page/Summary"

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className="font-bold text-3xl">Portfolio Table</div>
      </header>
      <Table />
      <Summary />
    </div>
  )
}

export default App
