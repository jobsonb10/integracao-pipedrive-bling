const axios = require('axios');

const getAllDeals = async (req, res) => {
    try{
        const deals = await axios.get(`https://companydomain.pipedrive.com/api/v1/deals?api_token=${process.env.PIPE_TOKEN}`);
        return res.json(deals.data);
    } catch(err){
        res.status(500).send({ error: err });
    }
};

const getWonDeals = async (req, res) => {
    try{
        const wonDeals = await axios.get(`https://api.pipedrive.com/v1/deals?status=won&start=0&api_token=${process.env.PIPE_TOKEN}`);
        const { data } = wonDeals.data;
        res.json(data);
    } catch(err){
        return res.status(500).send({ error: err });
    }


}

module.exports = {
    getAllDeals,
    getWonDeals,
}