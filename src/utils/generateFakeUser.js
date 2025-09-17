let userId = 1000;

export function generateFakeUser() {
    userId++;
    return {
        ud: userId,
        name: `Usuário fake ${userId}`,
        email: `fake${userId}@email.com`,
        company: {
            name: "Fake Company Inc."
        }
    }
}