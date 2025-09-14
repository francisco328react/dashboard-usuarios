import { useEffect, useState } from "react"
import { fetchUsuers } from "../../services/api"
import { UserCard } from "../../components/UserCard";

export function Home() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadingUsers() {
            const data = await fetchUsuers();
            setUsers(data)
            setLoading(false);
        }

        loadingUsers();
    }, [])

    if(loading) {
        return(
            <div class="flex items-center justify-center min-h-screen">
                <p className="text-lg text-gray-600">Carregando Usuários...</p>
            </div>
        )
    }

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-2xl font-bold text-center mb-6">
                Lista de Usuários
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {users.map((user) => (
                    <UserCard 
                        key={user.id} 
                        user={user}
                    />
                ))}
            </div>
        </div>
    )
}