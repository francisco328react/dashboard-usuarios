import { useEffect, useState } from "react"
import { fetchUsuers } from "../../services/api"
import { UserCard } from "../../components/UserCard/UserCard";
import { Loader } from "../../components/Loader/Loader";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage"
import { UseForm } from "../../components/UseForm/UseForm";
import { Link } from "react-router-dom";

export function Home() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    async function loadingUsers() {
        setLoading(true);
        setError(false);
        const data = await fetchUsuers();
        if(!data){
            setError(true);
        } else {
            setUsers(data)
        }
        setLoading(false);
    }

    useEffect(() => {
        loadingUsers();
    }, []);

    const handleAddUser = (newUser) => {
        setUsers((prev) => [newUser, ...prev])
    }

    if(loading) return <Loader />
    if(error) return <ErrorMessage onRetry={loadingUsers} /> 

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-2xl font-bold text-center mb-6">
                Lista de Usuários
            </h1>

            <UseForm onAddUser={handleAddUser} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {users.map((user) => (
                    <Link key={user.id} to={`/users/${user.id}`}>
                        <UserCard user={user} />
                    </Link>
                ))}
            </div>
        </div>
    )
}