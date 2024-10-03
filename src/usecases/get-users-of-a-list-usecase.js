export default class GetUsersOfAListUseCase {
    constructor(agent) {
      this.agent = agent;
    }
  
    async execute({ listUri }) {
      try {
        const users = await this.getUsersOfAList({ listUri })
        return this.getAListOfDidUsers({ users })
      } catch (error) {
        console.error("[Error on GetUsersOfAListUseCase]", error);
      }
    }


    getAListOfDidUsers ({ users }) {
        return users.map(item => {
            const { subject } = item
            return subject.did
        })
    }

    async getUsersOfAList({
      maxAttempts = 3,
      listUri,
    }) {
      const dataList = [];
      let attempt = 0;
      let cursor = undefined;
    
      do {
        const { data: { items, cursor: newCursor } } = await this.agent.app.bsky.graph.getList({
          list: listUri,
          limit: 100,
          cursor
      })
        dataList.push(...items);
        cursor = newCursor;
        attempt++;
      } while (cursor && attempt < maxAttempts);
    
      return dataList;
    }
  }
  