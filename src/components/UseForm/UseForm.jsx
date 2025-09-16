import { useState } from "react"

export function UseForm({ onAddUser }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            id: Date.now(),
            name,
            email,
            phone,
        };

        onAddUser(newUser);

        setName("");
        setEmail("");
        setPhone("");
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded-2xl shadow mb-6">
            <h2 className="text-lg font-semibold mb-3">
                Adicionar Usuário
            </h2>

            <input 
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border rounded p-2  mb-2"
            />

            <input 
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border rounded p-2  mb-2"
            />

            <input 
                type="text"
                placeholder="Telefone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full border rounded p-2  mb-2"
            />

            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
            >
                Adicionar
            </button>
        </form>
    )
}