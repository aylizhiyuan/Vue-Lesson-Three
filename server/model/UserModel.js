import query from '../utils/query'

class UserModel {
    async getUserByName(user){
        return await query(`SELECT * FROM user WHERE user='${user}'`)
    }
}
export default new UserModel()