import LoginUseCase from '../usecases/login-usecase.js'
import AddUserToAListUseCase from '../usecases/add-user-to-a-list-usecase.js';
import GetUsersOfAListUseCase from '../usecases/get-users-of-a-list-usecase.js';
import { identifier, password, listUriToAdd, modListToFindUsers } from "../utils/envs.js"

export default async () => {
    const loginUseCase = new LoginUseCase()
    const agent = await loginUseCase.execute({ identifier, password })
    const addUserToAListUseCase = new AddUserToAListUseCase(agent)
    const getUsersOfAListUseCase = new GetUsersOfAListUseCase(agent)
    const userDidList = await getUsersOfAListUseCase.execute({
        listUri: modListToFindUsers
    })
    console.log('[#] User count:', userDidList.length)
    await addUserToAListUseCase.execute({ 
        listUri: listUriToAdd,
        userDidList
    })
}