import AccountRepository from "@/repositories/account"




export default class ProfileService{
    public static async getProfile(username: string){
        const accountItem = await AccountRepository.getByUsername(username)
        if(!accountItem) return null
        const { password, ...data } = accountItem
        return data
    }
}