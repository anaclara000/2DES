const express = require('express');
const router = express.Router();

const Sol = require("../controllers/itemController");

router.post("/solicitacoes/umItem", Sol.umItem);
router.get("/solicitacoes/todas", Sol.todas);

module.exports = router;
