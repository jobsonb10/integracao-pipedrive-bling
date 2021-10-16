const Deal = require('../models/Deal');

const getAll = async (req, res) => {
    try{
        const deals = await Deal.find();
        if (deals.length === 0) {
            return res.send({ error: "Nenhuma negociação feita!"});
        }
        return res.send({ deals });
    } catch(err){
        res.status(500).send({ error: err });
    }
};

module.exports = {
    getAll
}