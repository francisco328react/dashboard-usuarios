export async function fetchUsuers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!response.ok) {
            throw new Error("Error ao buscar usuários");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}