'use strict';

const Controller = require('egg').Controller
class RoleController extends Controller {

  async list() {
    await this.ctx.iGet(`http://127.0.0.1:7001/crud/system/role/`, this.ctx.query)
  }

  async get() {
    await this.ctx.iGet(`http://127.0.0.1:7001/crud/system/role/${this.ctx.params.id}`)
  }

  async make() {
    const ctx = this.ctx
    await this.ctx.iPost(`http://127.0.0.1:7001/crud/system/role/`, this.ctx.request.body)
  }

  async edit() {
    const ctx = this.ctx
    await this.ctx.iPost(`http://127.0.0.1:7001/crud/system/role/${ctx.params.id}`, this.ctx.request.body)
  }

  async drop() {
    const ctx = this.ctx
    await this.ctx.iDel(`http://127.0.0.1:7001/crud/system/role/${ctx.params.id}`)
  }

}
module.exports = RoleController