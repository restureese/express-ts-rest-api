import type { Knex } from "knex";
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';


const createPassword = (password: string) => {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    return hashedPassword
}

export async function seed(knex: Knex): Promise<void> {
    return knex('accounts').insert([
        {id: uuidv4(), username: 'user@example.com', password: createPassword('password'), name: 'Example User'},
    ]);
};
