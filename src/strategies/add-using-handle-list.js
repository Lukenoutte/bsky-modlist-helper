import AddUserToAListUseCase from '../usecases/add-user-to-a-list-usecase.js';
import LoginUseCase from '../usecases/login-usecase.js'
import { handleUserList } from "../utils/index.js"
import { identifier, password, listUri } from "../utils/envs.js"

export default async () => {
    const loginUseCase = new LoginUseCase()
    const agent = await loginUseCase.execute({ identifier, password })
    const addUserToAListUseCase = new AddUserToAListUseCase(agent)
    const { data: { profiles } } = await agent.getProfiles({ actors: handleUserList })
    const userDidList = profiles.map(user => user.did)
    console.log('[#] User count:', userDidList.length)
    await addUserToAListUseCase.execute({ 
        listUri,
        userDidList
    })
}