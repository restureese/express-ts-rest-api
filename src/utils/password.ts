import bcrypt from 'bcrypt';


const createPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = bcrypt.hash(password, salt);
    return hashedPassword
}

const verifyPassword = (password: string, hashedPassword: string) => {
    return bcrypt.compare(password, hashedPassword)
}

export { createPassword, verifyPassword }