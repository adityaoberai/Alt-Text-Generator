import { ID } from "appwrite";
import { databases } from "./appwrite"

export const db = {
    addEmail: async (email) => {
        try {
            await databases.createDocument(
                'alttextdb',
                'preregister', 
                ID.unique(),{
                email
            });
            alert("Email added successfully!");
        } catch (error) {
            alert(error.message);
        }
    }
};