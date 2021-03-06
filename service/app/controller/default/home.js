const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        let result = await this.app.mysql.get("account",{})
        console.log(result)
        this.ctx.body = result
    }

    async getArticleList() {
        let sql = "SELECT *,a.id AS id FROM article a LEFT JOIN type t ON a.type_id = t.id"
        const result = await this.app.mysql.query(sql)
        this.ctx.body = {
            data: result
        }
    }

    async getArticleById() {
        let id = this.ctx.params.id;
        let sql = "SELECT * FROM article LEFT JOIN type ON article.type_id = type.id WHERE article.id=" + id;
        const result = await this.app.mysql.query(sql)
        this.ctx.body = {
            data: result
        }
    }

    async getListById(){
        let id = this.ctx.params.id;
        let sql = "SELECT *,a.id AS id FROM article a LEFT JOIN type ON a.type_id = type.id WHERE type_id=" + id;
        const result = await this.app.mysql.query(sql)
        this.ctx.body = {
            data: result
        }
    }


}

module.exports = HomeController;
