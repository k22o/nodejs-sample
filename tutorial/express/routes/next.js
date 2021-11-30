const router = require('express').Router();

// routerが呼ばれたときにする処理
router.use((req, res, next) => {
    console.log((new Date()).toISOString());
    next();
});

// パスパラメータの受け取り方
router.get('/path/:id', (req, res) =>{
    let id = req.params.id;
    res.render('next.ejs', {
        paramsString: id
    });
});

// クエリパラメータの受け取り方
router.get('/query', (req, res) =>{
    let str = 'name=' + req.query.name + ' age=' + req.query.age;
    res.render('next.ejs', {
        paramsString: str
    });
});

module.exports = router;
