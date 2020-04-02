const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
  async index(request, response) {
    const { status } = request.query;
    const jobs = await connection('jobs')
      .where('status', status)
      .select('*');

    return response.json(jobs);
  },

  async create(request, response) {
    const { role, description, project, projectmanager } = request.body;

    const id = crypto.randomBytes(4).toString('HEX');
    const status = 'open';

    await connection('jobs').insert({
      id,
      role,
      description,
      project,
      projectmanager,
      status
    })

    return response.json({ id });
  },

  async delete(request, response) {
    const { id } = request.params;

    await connection('jobs')
      .where('id', id)
      .delete();

    return response.status(204).send();
  }
}