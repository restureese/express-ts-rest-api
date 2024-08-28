import { createToken } from "@/utils/jwt"
import AccountRepository from "@/repositories/account"
import { verifyPassword } from "@/utils/password"
export class AuthService{
    public static async login(username: string, password: string) {
        const accountItem = await AccountRepository.getByUsername(username)
        if(!accountItem) return null
        if(!verifyPassword(password, accountItem.password)) return null
        
        const accessToken = createToken(username)
        return accessToken
    }
}
