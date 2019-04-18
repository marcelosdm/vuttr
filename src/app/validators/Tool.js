const Joi = require('joi')

module.exports = {
  body: {
    title: Joi.string().required(),
    link: Joi.string().required(),
    description: Joi.string().required(),
    tags: Joi.string().required()
  }
}
