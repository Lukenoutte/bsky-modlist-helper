import { BskyAgent } from '@atproto/api'

export default class LoginUseCase {
    async execute ({ identifier, password }) {
      try {
          const agent = new BskyAgent({ service: 'https://bsky.social' })
            await agent.login({ identifier, password })
          return agent
      } catch (error) {
        console.error("[Error on LoginUseCase]", error)
      }
    }
}