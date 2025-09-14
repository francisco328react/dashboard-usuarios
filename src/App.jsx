import { Home } from "./pages/Home/Home"

export function App() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-100">
      <h1 className="text-3xl font-extrabold text-blue-600">Dashboard de Usuários</h1>
      <Home />
    </div>
  )
}
