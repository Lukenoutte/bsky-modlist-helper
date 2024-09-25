import LoginUseCase from './usecases/login-usecase.js'
import AddUserToAListUseCase from './usecases/add-user-to-a-list-usecase.js';
import GetUsersOfAFeedUseCase from './usecases/get-users-of-a-feed-usecase.js';
import dotenv from 'dotenv';

dotenv.config();

const identifier = process.env.USER_INDENTIFIER;
const password = process.env.USER_PASSWORD;
const listUri = process.env.LIST_URI_TO_ADD;
const feedToFindUsers = process.env.FEED_URI_TO_FIND_USERS

const loginUseCase = new LoginUseCase()

const agent = await loginUseCase.execute({ identifier, password })
const addUserToAListUseCase = new AddUserToAListUseCase(agent)
const getPostsOfAFeedUseCase = new GetUsersOfAFeedUseCase(agent)
const userDidList = await getPostsOfAFeedUseCase.execute({
    feedUri: feedToFindUsers
})
await addUserToAListUseCase.execute({ 
    listUri,
    userDidList
})
