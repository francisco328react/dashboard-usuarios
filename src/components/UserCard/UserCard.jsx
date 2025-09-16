export function UserCard({ user }) {
  if(!user) return null;

  return (
    <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer">
      <h2 className="text-lg font-semibold text-blue-600">{user?.name}</h2>
      <p className="text-gray-700">{user?.email}</p>
      <p className="text-sm text-gray-500">{user?.company?.name}</p>
    </div>
  );
}