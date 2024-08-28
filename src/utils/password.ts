import bcrypt from 'bcrypt';


const createPassword = (password: string) => {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    return hashedPassword
}

const verifyPassword = (password: string, hashedPassword: string) => {
    return bcrypt.compareSync(password, hashedPassword)
}

export { createPassword, verifyPassword }