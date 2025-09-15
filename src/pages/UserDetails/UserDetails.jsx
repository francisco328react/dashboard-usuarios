import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { fetchUsuers } from "../../services/api"
import { Loader } from "../../components/Loader/Loader";


export function UserDetails() {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadUser() {
            const data = await fetchUsuers();
            console.log(data)
            if(data) {
                const selectUser = data.find((u) => u.id === parseInt(id));
                setUser(selectUser);
            }
            setLoading(false)
        }
        loadUser();
    }, [id])

    if(loading) return <Loader />
    if(!user) {
        return(
            <div className="flex flex-col items-center justify-center min-h-screen">
                <p className="text-lg text-red-600">Usuário não encontrado</p>
                <Link
                    to="/"
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer"
                >
                    Voltar para lista
                </Link>
            </div>
        )
    }

    return (
        <div className="max-w-xl mx-auto p-6">
            <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">
                Detalhes do Usuário
            </h1>
            <div className="bg-white p-6 rounded-xl shadow-mb text-center">
                <h2 className="text-xl font-semibold">{user.name}</h2>
                <p className="text-gray-700">{user.email}</p>
                <p className="text-gray-700">{user.phone}</p>
                <p className="text-gray-700">{user.website}</p>
                <p className="text-gray-700">
                    {user.company.name} - {user.company.catchPrase}
                </p>
                <p className="text-gray-700">
                    {user.address.street}, {user.address.city}
                </p>
            </div>
            <div className="flex justify-center mt-6">
                <Link
                    to="/"
                    className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition cursor-pointer"
                >
                    Voltar
                </Link>
            </div>
        </div>
    )
}