export default class AddUserToAListUseCase {
    constructor(agent) {
      this.agent = agent;
    }
  
    async execute({ listUri, userDidList }) {
      try {
        const promises = userDidList.map((userDid) =>
          this.agent.com.atproto.repo.createRecord({
            repo: this.agent.session.did,
            collection: 'app.bsky.graph.listitem',
            record: {
              $type: 'app.bsky.graph.listitem',
              subject: userDid,
              list: listUri,
              createdAt: new Date().toISOString()
            }
          })
        )
        await Promise.all(promises);
      } catch (error) {
        console.error("[Error on AddUserToAList]", error);
      }
    }
  }
  