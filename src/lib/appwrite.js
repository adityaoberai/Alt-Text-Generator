import { Client, Databases } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('alttextgen');

export const databases = new Databases(client);