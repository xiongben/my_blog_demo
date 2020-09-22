const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        let result = await this.app.mysql.get("account",{})
        console.log(result)
        this.ctx.body = result
    }

    async list() {
        const {ctx} = this;
        ctx.body = '<h1>this is list api</h1>'
    }
}

module.exports = HomeController;
