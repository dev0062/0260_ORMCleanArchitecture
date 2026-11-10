const db = require('../models');

async function getAllKomik(req,res) {
    try {
        const komik = await db.Komik.findAll();
        res.status(200).json(komik);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve komik' });
    }   
}      

module.exports = {
    getAllKomik,
    getallKomik: getAllKomik
};
