export const generateId = () => {
    const random = Math.floor(10000000 + Math.random() * 90000000)
    return String(random);
}
