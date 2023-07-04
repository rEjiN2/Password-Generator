
import './App.css'
import Main from './Components/Main'
import Sub from './Components/Sub'
import ResponseProvider from './Context/ResponseProvider'
function App() {
 

  return (
    <ResponseProvider>
    <div className="bg-cyan-400 h-screen p-8">
    <Main/>
    <Sub/>
  </div>
    </ResponseProvider>
  )
}

export default App
