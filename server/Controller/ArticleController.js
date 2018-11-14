import Article from '../model/ArticleModel'

class ArticleController {
    async getArticles(ctx){
        ctx.body = await Article.getAllArticles()
    }
}
export default new ArticleController()