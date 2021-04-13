const { Router } = require("express");
const router = Router();
const ctrl = require("./admin.ctrl");

router.get("/", (req, res) => {
  res.send("admin app");
});

// 제품
router.get("/products", ctrl.get_products);
router.get("/products/write", ctrl.get_products_write);
router.post("/products/write", ctrl.post_products_write);
router.get("/products/detail/:id", ctrl.get_products_detail);
router.get("/products/edit/:id", ctrl.get_products_edit);
router.post("/products/edit/:id", ctrl.post_products_edit);
router.get("/products/delete/:id", ctrl.get_products_delete);

// 문의
router.get("/contacts", ctrl.get_contacts);
router.get("/contacts/write", ctrl.get_contacts_write);
router.post("/contacts/write", ctrl.post_contacts_write);
router.get("/contacts/detail/:id", ctrl.get_contacts_detail);
router.get("/contacts/edit/:id", ctrl.get_contacts_edit);
router.post("/contacts/edit/:id", ctrl.post_contacts_edit);
router.get("/contacts/delete/:id", ctrl.get_contacts_delete);

module.exports = router;
