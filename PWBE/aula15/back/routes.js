const Express = require('express');
const router = Express.Router();

const TratamentosController = require("./src/controller/tratamentosController");
const ProfissionaisController = require("./src/controller/profissionaisController");
const ConsultasController = require("./src/controller/consultasController");

router.get("/tratamentos/read", TratamentosController.listarTratamentos);
router.get("/tratamentos/:id_tratamento", TratamentosController.listarTratamentos);
router.post("/tratamentos/create", TratamentosController.cadastrarTratamentos);
router.delete("/tratamentos/delete", TratamentosController.excluirTratamentos);
router.put("/tratamentos/update", TratamentosController.editarTratamentos);

router.get("/profissionais/read", ProfissionaisController.listarProfissionais);
router.get("/profissionais/:id_profissional", ProfissionaisController.listarProfissional);

router.get("/consultas/read", ConsultasController.listarConsultas);

module.exports = router;