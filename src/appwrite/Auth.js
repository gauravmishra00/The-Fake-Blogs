import { Account, Client, ID } from 'appwrite'
import Conf from '../config/Conf'

export class AuthService {
    client = new Client()
    account;

    constructor() {
        this.client.setEndpoint(Conf.appwriteUrl)
            .setProject(Conf.appwriteProject);
        this.account = new Account(this.client);
    }
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            )
            if (userAccount) {
            return this.login({email,password});
            }
            else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email,password}) {
        try {
            return await this.account.createEmailPasswordSession({ email, password })
        } catch (error) {
            throw error;
        }
    }

    async getCurrentAccount()
    {
        try {
            return this.account.get();    
        } catch (error) {
            throw error
        }
        return null;
    }

    async logout()
    {
        try {
            return this.account.deleteSessions()
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();
export default authService;