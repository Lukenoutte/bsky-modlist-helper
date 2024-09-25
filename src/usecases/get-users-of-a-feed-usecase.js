export default class GetUsersOfAFeedUseCase {
    constructor(agent) {
      this.agent = agent;
    }
  
    async execute({ feedUri }) {
      try {
        const feed = await this.getListOfPosts({ feedUri })
        const listOfDid = this.getAListOfDidUsers ({ feed })
        console.log('listOfDid', listOfDid)
        return listOfDid
      } catch (error) {
        console.error("[Error on GetPostsOfAFeedUseCase]", error);
      }
    }

    async getListOfPosts ({ feedUri }) {
        const { data: { feed } } = await this.agent.app.bsky.feed.getFeed(
            {
              feed: feedUri,
              limit: 100,
            }
          );
        return feed
    }

    getAListOfDidUsers ({ feed }) {
        return feed.map(item => {
            const { post } = item
            const { author } = post
            return author.did
        })
    }
  }
  