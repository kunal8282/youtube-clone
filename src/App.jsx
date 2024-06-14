import Homepage from "./pages/Homepage"
import Header from "./components/Header"

const App = () => {
  return (
    <div className="">
      <header className="py-2">
        <Header />
      </header>
      <Homepage />
    </div>
  )
}

export default App