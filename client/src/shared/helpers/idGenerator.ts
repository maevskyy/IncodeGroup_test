export const generateId = (qty: number = 8) => {
    const random = Math.floor(Math.random() * 10000000)
    const id = `${random}`.substring(0, qty)
    return id
}
