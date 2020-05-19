/**
 *   Controller to download PDF from front-end
 */

const downloadPDF = (req, res, next) => {
  res.send(
    "./public/uploads/Projet_annuaire_Cannes_Is_Up.pdf1589545987653.pdf"
  );
};

module.exports = downloadPDF;
