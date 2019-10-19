const router = require('express').Router(),
    usersController = require('../controllers/usersController')

// USERS
// Index
router.get("/", usersController.index, usersController.indexView);
// CRUD
router.get("/new", usersController.new);
router.post("/create", usersController.validate, 
    usersController.create, usersController.redirectView);
router.get("/login", usersController.login);
// Login and authentication
router.post("/login", usersController.authenticate);
router.get("/logout", usersController.logout, usersController.redirectView);

router.get("/:id", usersController.show, usersController.showView);
router.get("/:id/edit", usersController.edit);
router.put("/:id/update", usersController.update, usersController.redirectView);
router.delete("/:id/delete", usersController.delete, usersController.redirectView);

// Export
module.exports = router;


