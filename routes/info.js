const express = require("express")
const router = new express.Router();
const PersonalInfo = require("../models/info")

router.post('/users', async(req, res) => {
    try{
        const addinginfo =  new PersonalInfo({
            id: req.body.id,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            company_name: req.body.company_name,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            email: req.body.email,
            web: req.body.web,
            age: req.body.age,
        })
        console.log(req.body);
        const insertData = await addinginfo.save();
        res.status(201).send(insertData)
    } catch(e) {
        res.status(400).send(e)
    }
})


router.get('/users', (req, res) => {
    
    const pageOptions = {
        page: parseInt(req.query.page, 5) || 0,
        limit: parseInt(req.query.limit, 5) || 5
    }
    
    PersonalInfo.find()
    .skip(pageOptions.page * pageOptions.limit)
    .limit(pageOptions.limit)
    .sort({"id": 1})
    .exec(function (err, users) {
        if(err) { res.status(500).json(err); return; };
        res.status(200).json(users);
    });

})

router.get('/users/:id', async(req, res) => {
    try{
        const id = req.params.id
        const getUsers = await PersonalInfo.findById(id);
        res.send(getUsers)
    } catch(e) {
        res.status(400).send(e)
    }
})

router.patch('/users/:id', async(req, res) => {
    try{
        const _id = req.params.id
        const updateUsers = await PersonalInfo.findByIdAndUpdate(_id,req.body,);
        res.send(updateUsers)
    } catch(e) {
        res.status(500).send(e)
    }
})
router.delete('/users/:id', async(req, res) => {
    try{
        const _id = req.params.id
        const deleteUsers = await PersonalInfo.findByIdAndDelete(_id);
        res.send(deleteUsers)
    } catch(e) {
        res.status(500).send(e)
    }
})

module.exports = router;