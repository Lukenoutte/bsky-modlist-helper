export default class GetUsersOfAListUseCase {
    constructor(agent) {
      this.agent = agent;
    }
  
    async execute({ listUri }) {
      try {
        const { data } = await this.agent.app.bsky.graph.getList({
            list: listUri,
            limit: 30,
        })
        console.log('response', data.items)
      } catch (error) {
        console.error("[Error on GetUsersOfAListUseCase]", error);
      }
    }
  }
  