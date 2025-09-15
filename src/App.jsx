import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { UserDetails } from "./pages/UserDetails/UserDetails"

export function App() {

  return (   
    <Router>
      <Routes>
        <Route 
          path="/"
          element={<Home />}
        />
        <Route 
          path="/users/:id"
          element={<UserDetails />}
        />        
      </Routes>
    </Router>
  )
}
