const express = require("express");
const user = require("../Controllers/userController");
const login = require("../Controllers/login");
const verifyLogin = require("../VerifyLogin/verifyLogin");
const controller = require("../Controllers/controllerAuthentication");

const router = express();


router.post("/usuario", user.registerUser);
router.post("/login", login.userLogin);

router.use(verifyLogin)

router.get("/usuario", user.userData);
router.put("/usuario", user.updateUser);
router.get("/categoria", controller.listCategories);

router.get("/transacao", controller.listTransactions);
router.get("/transacao/extrato", controller.transactionsExtracts);
router.get("/transacao/:id", controller.detailTransaction);
router.post("/transacao", controller.registerTransaction);
router.put("/transacao/:id", controller.updateTransaction);
router.delete("/transacao/:id", controller.deleteTransaction);

// //LISTAR TRANSAÇÕES POR CATEGORIA- extra
// router.get("/transacao/categoria/:id", controller.listTransactionsByCategory);

module.exports = router;