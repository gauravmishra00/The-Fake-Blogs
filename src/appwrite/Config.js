import Conf from '../config/Conf';
import { ID, Databases, Storage, Client, Query } from 'appwrite'

class Service {
    client = new Client()
        .setEndpoint(Conf.appwriteUrl)
        .setProject(Conf.appwriteProject)
    database
    storage

    constructor() {
        this.database = new Databases(this.client);
        this.storage = new Storage(this.client)
    }
    async createPost({ title, slug, content, status, userId, featuredImg }) {
        try {
            return await this.database.createDocument(
                Conf.appwriteDatabaseId,
                Conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    status,
                    userId,
                    featuredImg
                }
            )
        } catch (error) {
            console.log(error);
        }
    }
    // in the tutorial slug is outsie the object 
    async updatePost({ title, slug, content, status, userId, featuredImg }) {
        try {
            return await this.database.updateDocument(
                Conf.appwriteDatabaseId,
                Conf.appwriteCollectionId,
                slug,
                {
                    title,
                    slug,
                    content,
                    status,
                    userId,
                    featuredImg
                }
            )
        } catch (error) {
            console.log(error);
        }
    }

    async deletePost(slug)
    {
        try {
            await this.database.deleteDocument(
                Conf.appwriteDatabaseId,
                Conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log(error);           
        }
        return false
    }

    async getPost(slug)
    {
        try {
            return await this.database.getDocument(
                Conf.appwriteDatabaseId,
                Conf.appwriteCollectionId,
                slug
            )
            
        } catch (error) {
            console.log("Service::getPost::",error);           
        }
        return false;
    }

    async getPosts(queries = [Query.equal("status","active")])
    {
        try {
            return await this.database.listDocuments(
                Conf.appwriteDatabaseId,
                Conf.appwriteCollectionId,
                queries
                // [
                //     Query.equal("status","active")
                // ]
            )
        } catch (error) {
            console.log("Service::getPosts::",error);
            throw error;
        }
    }

    // Storage service

    async uploadFile(file)
    {
        try {
            return await this.storage.createFile(
                Conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Service::uploadFile::",error);
            throw error;           
        }
    }

    async deleteFile(fileId)
    {
        try {
            await this.storage.deleteFile(
                Conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Service::deleteFile::",error);
            throw error;          
        }
        return false;
    }

    // Don't need to wrap it in async 
    /*async getFilePreview(fileId)
    {
        try {
            return await this.storage.getFilePreview(
                Conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Service :: getFilePreview::",error);    
            throw error;       
        }
    }
        */
       getFilePreview(fileId)
       {
        return this.storage.getFilePreview(
            Conf.appwriteBucketId,
            fileId
        )
       }
}
const service = new Service();
export default service;