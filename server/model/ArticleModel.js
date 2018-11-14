import query from '../utils/query'

class ArticleModel {
    async getAllArticles(){
        return await query("SELECT * FROM ARTICLE ORDER BY create_time DESC")
    }
}
export default new ArticleModel()