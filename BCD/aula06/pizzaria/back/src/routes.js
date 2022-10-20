const Express = require('express');

const router = Express.Router();

const ClienteController = require("./controller/clienteController");

router.get("/Clientes", ClienteController.listarCliente);
router.get("/Clientes/:nome", ClienteController.listaCliente);
router.post("/Clientes", ClienteController.cadastrarCliente);
router.delete("/Clientes", ClienteController.excluirCliente);
router.put("/Clientes", ClienteController.editarCliente);

module.exports = router;