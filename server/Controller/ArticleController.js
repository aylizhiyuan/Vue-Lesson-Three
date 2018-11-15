import Article from '../model/ArticleModel'

class ArticleController {
    async getArticles(ctx){
        ctx.body = await Article.getAllArticles()
    }
    async addArticle(ctx){
        const res = await Article.addArticle()
        ctx.body = res
    }
    async getOneArticle(ctx){
        const res = await Article.getOneArticle(ctx.params.id)
        ctx.body = res
    }
}
export default new ArticleController()