const db = require('../dbConfig');
const mappers = require('./mappers');

module.exports = {
    get,
    insert,
    update,
    remove,
    getProjectActions,
};

function get(name) {
    let query = db('accounts as a');

    if (name) {
        query.where('a.name', name).first();

        const promises = [query, this.geAccounts(name)]; // [ projects, actions ]

        return Promise.all(promises).then(function (results) {
            let [accounts] = results;


            return mappers.accountToBody(project);

        });
    }

    return query.then(accounts => {
        return accounts.map(project => mappers.accountToBody(accounts));
    });
}

function insert(project) {
    return db('projects')
        .insert(project)
        .then(([id]) => this.get(id));
}

function update(id, changes) {
    return db('projects')
        .where('id', id)
        .update(changes)
        .then(count => (count > 0 ? this.get(id) : null));
}

function remove(id) {
    return db('projects')
        .where('id', id)
        .del();
}

function getProjectActions(projectId) {
    return db('actions')
        .where('project_id', projectId)
        .then(actions => actions.map(action => mappers.actionToBody(action)));
}