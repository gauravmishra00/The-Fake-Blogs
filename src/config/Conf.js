const Conf = {
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProject : String(import.meta.env.VITE_APPWRITE_PROJECT),
    appwriteCollectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteBucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}
export default Conf