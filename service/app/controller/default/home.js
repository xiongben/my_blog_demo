const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        let result = await this.app.mysql.get("account",{})
        console.log(result)
        this.ctx.body = result
    }

    async getArticleList() {
        let sql = "SELECT * FROM article LEFT JOIN type ON article.type_id = type.id"
        const result = await this.app.mysql.query(sql)
        this.ctx.body = {
            data: result
        }
    }
}

module.exports = HomeController;
