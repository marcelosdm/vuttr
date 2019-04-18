const Tool = require('../models/Tool')

class ToolController {
  async index (req, res) {
    const filters = {}
    if (req.query.tag) {
      filters.tags = new RegExp(req.query.tag, 'i')
    }

    if (req.query.title) {
      filters.title = new RegExp(req.query.title, 'i')
    }

    const tools = await Tool.paginate(filters, {
      page: req.query.page || 1,
      limit: 10,
      sort: '-createdAt'
    })
    return res.json(tools)
  }

  async show (req, res) {
    const tool = await Tool.findById(req.params.id)
    return res.json(tool)
  }
  async store (req, res) {
    const tool = await Tool.create({ ...req.body })
    return res.json(tool)
  }

  async update (req, res) {
    const tool = await Tool.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    return res.json(tool)
  }

  async destroy (req, res) {
    await Tool.findByIdAndDelete(req.params.id)
    return res.send()
  }
}

module.exports = new ToolController()
