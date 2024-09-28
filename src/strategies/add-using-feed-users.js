import LoginUseCase from '../usecases/login-usecase.js'
import AddUserToAListUseCase from '../usecases/add-user-to-a-list-usecase.js';
import GetUsersOfAFeedUseCase from '../usecases/get-users-of-a-feed-usecase.js';
import { identifier, password, listUri, feedUriToFindUsers } from "../utils/envs.js"

export default async () => {
    const loginUseCase = new LoginUseCase()
    const agent = await loginUseCase.execute({ identifier, password })
    const addUserToAListUseCase = new AddUserToAListUseCase(agent)
    const getUsersOfAFeedUseCase = new GetUsersOfAFeedUseCase(agent)
    const userDidList = await getUsersOfAFeedUseCase.execute({
        feedUri: feedUriToFindUsers
    })
    console.log('[#] User count:', userDidList.length)
    await addUserToAListUseCase.execute({ 
        listUri,
        userDidList
    })
}