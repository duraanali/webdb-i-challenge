const express = require('express');


const db = require('../data/dbConfig');


const router = express.Router();


// router.post('/', (req, res) => {
//     const newProject = req.body;
//     db.insert(newProject)
//         .then(projects => {
//             res.status(201).json(projects);
//         })
//         .catch(err => {
//             res.status(500).json({
//                 err: err,
//                 message: "can not create anything bro"
//             });
//         });
// });


router.get('/', (req, res) => {
    db('accounts')
        .select('name', 'budget')
        .then(accounts => {
            res.status(200).json(accounts);
        })
        .catch(err => {
            res.json(err);
        });
});


// router.delete('/:id', (req, res) => {
//     const { id } = req.params;
//     db.remove(id)
//         .then(deletedUser => {
//             if (deletedUser) {
//                 res.json(deletedUser);
//             } else {
//                 res.status(404).json({
//                     message: "invalid id"
//                 })
//             }
//         })
//         .catch(err => {
//             res.status(500).json({
//                 err: err,
//                 message: "can not update anything bro"
//             });
//         });
// });

// router.put('/:id', (req, res) => {
//     const { id } = req.params;
//     const changes = req.body;
//     db.update(id, changes)
//         .then(updated => {
//             if (updated) {
//                 res.json(updated);
//             } else {
//                 res.status(404).json({
//                     message: "invalid id"
//                 })
//             }
//         })
//         .catch(err => {
//             res.status(500).json({
//                 err: err,
//                 message: "can not update anything bro"
//             });
//         });
// });


module.exports = router;