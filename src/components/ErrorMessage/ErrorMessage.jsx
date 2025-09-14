export function ErrorMessage({ onRetry }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h2 className="text-xl font-semibold text-red-600 mb-2">
                Falha ao carregar usuários
            </h2>
            <p className="text-gray-600 mb-4">
                Verifique a conexão e tente novamente
            </p>
            <button
                onClick={onRetry}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer"
            >
                Tentar novamente
            </button>
        </div>
    )
}