import query from '../utils/query'

class ArticleModel {
    async getAllArticles(){
        return await query("SELECT * FROM ARTICLE ORDER BY createTime DESC")
    }
}
export default new ArticleModel()