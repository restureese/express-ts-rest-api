import type { Account } from "@/models/account";
import db from "@/config/postgresql";


export default class AccountRepository {
    static async getByUsername(username: string){
        const item = db<Account>('accounts').where('username', username).select('*').first();
        return item
    }
}