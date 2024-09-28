import dotenv from 'dotenv';

dotenv.config();

const identifier = process.env.USER_INDENTIFIER;
const password = process.env.USER_PASSWORD;
const listUri = process.env.LIST_URI_TO_ADD;
const feedUriToFindUsers = process.env.FEED_URI_TO_FIND_USERS

export { identifier, password, listUri, feedUriToFindUsers }