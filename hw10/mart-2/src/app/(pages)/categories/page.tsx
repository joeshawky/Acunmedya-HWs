'use client'; // if you're using Next.js App Router and want to use hooks

import { Category } from '@/app/interfaces/category';
import { useEffect, useState } from 'react';



export default function Categories() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [newCategoryName, setNewCategoryName] = useState('');
    const [editId, setEditId] = useState<number | null>(null);
    const [editName, setEditName] = useState('');

    // Fetch categories on component mount
    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        const res = await fetch('/api/categories');
        const data = await res.json();
        setCategories(data);
    };

    const addCategory = async () => {
        const res = await fetch('/api/categories', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: newCategoryName }),
        });

        if (res.ok) {
            setNewCategoryName('');
            fetchCategories();
        }
    };

    const updateCategory = async () => {
        const res = await fetch('/api/categories', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: editId, name: editName }),
        });

        if (res.ok) {
            setEditId(null);
            setEditName('');
            fetchCategories();
        }
    };

    const deleteCategory = async (id: number) => {
        const res = await fetch('/api/categories', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id }),
        });

        if (res.ok) {
            fetchCategories();
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>

            <ul className="mb-4">
                {categories.map((cat) => (
                    <li key={cat.id} className="flex justify-between items-center mb-2">
                        <span>{cat.name}</span>
                        <div className="space-x-2">
                            <button
                                onClick={() => {
                                    setEditId(cat.id);
                                    setEditName(cat.name);
                                }}
                                className="text-blue-600"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => deleteCategory(cat.id)}
                                className="text-red-600"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            {editId ? (
                <div className="mb-4">
                    <input
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        placeholder="Edit category name"
                        className="border p-1"
                    />
                    <button onClick={updateCategory} className="ml-2 bg-blue-500 text-white px-2 py-1">
                        Update
                    </button>
                </div>
            ) : (
                <div className="mb-4">
                    <input
                        type="text"
                        value={newCategoryName}
                        onChange={(e) => setNewCategoryName(e.target.value)}
                        placeholder="New category name"
                        className="border p-1"
                    />
                    <button onClick={addCategory} className="ml-2 bg-green-500 text-white px-2 py-1">
                        Add
                    </button>
                </div>
            )}
        </div>
    );
}
