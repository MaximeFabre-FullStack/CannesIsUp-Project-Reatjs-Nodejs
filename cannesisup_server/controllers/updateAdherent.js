const Adherent = require("../models/adherent");

const updateAdherent = (req, res, next) => {
  Adherent.findOneAndUpdate(
    { _id: req.params.id },
    { photoCouverture: req.files.couv[0].filename }
  )
    .then(() => res.status(200).json({ message: "Objet modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};

module.exports = updateAdherent;
