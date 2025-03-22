import { Category } from "@/app/interfaces/category";

const categories: Category[] = [
    { id: 1, name: "electronics" },
    { id: 2, name: "smartphones" },
];

export async function GET() {
    const data = JSON.stringify(categories);
    return new Response(data, {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}

export async function POST(req: any) {
    const body = await req.json();
    const { name } = body;
    if (!name) {
        return new Response(
            JSON.stringify({ error: "Category name must be provided" }),
            { status: 400, headers: { "Content-Type": "application/json" } }
        );
    }

    const newCategory: Category = {
        id: categories.length + 1,
        name: name,
    };
    categories.push(newCategory);
    return new Response(
        JSON.stringify({
            message: "Category added successfully",
            category: newCategory,
        }),
        { status: 201, headers: { "Content-Type": "application/json" } }
    );
}

export async function PUT(req: any) {
    const body = await req.json();
    const { id, name } = body;

    if (!id || !name) {
        return new Response(
            JSON.stringify({ error: "Both id and new name must be provided" }),
            { status: 400, headers: { "Content-Type": "application/json" } }
        );
    }

    const categoryIndex = categories.findIndex((cat) => cat.id === id);
    if (categoryIndex === -1) {
        return new Response(JSON.stringify({ error: "Category not found" }), {
            status: 404,
            headers: { "Content-Type": "application/json" },
        });
    }

    categories[categoryIndex].name = name;
    return new Response(
        JSON.stringify({
            message: "Category updated successfully",
            category: categories[categoryIndex],
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
    );
}

export async function DELETE(req: any) {
    const body = await req.json();
    const { id } = body;

    if (!id) {
        return new Response(
            JSON.stringify({ error: "Category id must be provided" }),
            { status: 400, headers: { "Content-Type": "application/json" } }
        );
    }

    const index = categories.findIndex((cat) => cat.id === id);
    if (index === -1) {
        return new Response(JSON.stringify({ error: "Category not found" }), {
            status: 404,
            headers: { "Content-Type": "application/json" },
        });
    }

    const deleted = categories.splice(index, 1)[0];
    return new Response(
        JSON.stringify({
            message: "Category deleted successfully",
            category: deleted,
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
    );
}
