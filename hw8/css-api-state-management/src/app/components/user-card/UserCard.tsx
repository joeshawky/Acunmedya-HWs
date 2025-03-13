import { useState } from "react";

interface GeoCode {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoCode;
}

interface Company {
  name: string;
  bs: string;
  catchPhrase: string;
}

interface User {
  address: Address;
  company: Company;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

export default function UsersCards() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const getRandomIds = (): number[] => {
    const ids = new Set<number>();
    while (ids.size < 3) {
      ids.add(Math.floor(Math.random() * 10) + 1); // Random ID between 1 and 10
    }
    return Array.from(ids);
  };

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const ids = getRandomIds();
      const requests = ids.map((id) =>
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
          res.json()
        )
      );
      const data: User[] = await Promise.all(requests);
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <button
        onClick={fetchUsers}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        disabled={loading}
      >
        {loading ? "Loading..." : "Fetch 3 Random Users"}
      </button>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 border rounded-lg shadow-sm bg-white">
            <h2 className="text-black font-semibold">{user.name}</h2>
            <p className="text-gray-600">@{user.username}</p>
            <p className="text-gray-800">{user.email}</p>
            <p className="text-sm text-gray-500">{user.phone}</p>
            <p className="text-sm text-gray-500">{user.website}</p>
            <p className="text-sm text-gray-700">
              {user.address.city}, {user.address.street}, {user.address.suite}
            </p>
            <p className="text-sm font-semibold text-gray-900">{user.company.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
