export default class GetUsersOfAFeedUseCase {
    constructor(agent) {
      this.agent = agent;
    }
  
    async execute({ feedUri }) {
      try {
        const feed = await this.getListOfPosts({ feedUri })
        const listOfDid = this.getAListOfDidUsers ({ feed })
        return listOfDid
      } catch (error) {
        console.error("[Error on GetPostsOfAFeedUseCase]", error);
      }
    }

    getAListOfDidUsers ({ feed }) {
        return feed.map(item => {
            const { post } = item
            const { author } = post
            return author.did
        })
    }

    async getListOfPosts({
      maxAttempts = 5,
      feedUri,
    }) {
      const dataList = [];
      let attempt = 0;
      let cursor = undefined;
    
      do {
        const { data: { feed, cursor: newCursor } } = await this.agent.app.bsky.feed.getFeed(
          {
            feed: feedUri,
            limit: 100,
          }
        );
    
        dataList.push(...feed);
        cursor = newCursor;
        attempt++;
      } while (cursor && attempt < maxAttempts);
    
      return dataList;
    }
  }
  