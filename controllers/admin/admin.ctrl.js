const models = require("../../models");

// 제품
exports.get_products = (_, res) => {
  models.Products.findAll().then((products) => {
    // DB에서 받은 products를 products변수명으로 내보냄
    res.render("admin/products.html", { products });
  });
};
exports.get_products_write = (_, res) => {
  res.render("admin/write.html");
};
exports.post_products_write = (req, res) => {
  models.Products.create(req.body).then(() => {
    res.redirect("/admin/products");
  });
};
exports.get_products_detail = (req, res) => {
  models.Products.findByPk(req.params.id).then((product) => {
    res.render("admin/detail.html", { product });
  });
};
exports.get_products_edit = (req, res) => {
  //기존에 폼에 value안에 값을 셋팅하기 위해 만든다.
  models.Products.findByPk(req.params.id).then((product) => {
    res.render("admin/write.html", { product: product });
  });
};
exports.post_products_edit = (req, res) => {
  models.Products.update(
    {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
    },
    {
      where: { id: req.params.id },
    }
  ).then(() => {
    res.redirect("/admin/products/detail/" + req.params.id);
  });
};
exports.get_products_delete = (req, res) => {
  models.Products.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.redirect("/admin/products");
  });
};

// 문의
exports.get_contacts = async (_, res) => {
  const contacts = await models.Contacts.findAll();
  res.render("admin/contacts.html", { contacts });
};
exports.get_contacts_write = (_, res) => {
  res.render("admin/write.html");
};
exports.post_contacts_write = async (req, res) => {
  await models.Contacts.create(req.body);
  res.redirect("/admin/contacts");
};
exports.get_contacts_detail = async (req, res) => {
  const contact = await models.Contacts.findByPk(req.params.id);
  res.render("admin/detail.html", { contact });
};
exports.get_contacts_edit = async (req, res) => {
  //기존에 폼에 value안에 값을 셋팅하기 위해 만든다.
  const contact = await models.Contacts.findByPk(req.params.id);
  res.render("admin/write.html", { contact });
};
exports.post_contacts_edit = async (req, res) => {
  await models.Contacts.update(req.body, {
    where: { id: req.params.id },
  });
  res.redirect("/admin/contacts/detail/" + req.params.id);
};
exports.get_contacts_delete = async (req, res) => {
  await models.Contacts.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.redirect("/admin/products");
};
