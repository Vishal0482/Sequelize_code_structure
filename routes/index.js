const companyController = require("../controllers").company;

module.exports= (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'welcome to lfkasd;',
    }));
    app.post("/api/company", companyController.create)
}