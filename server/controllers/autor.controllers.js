const Autor = require("../models/autor.model");



module.exports.getAutores = async (req, res) => {
    try {
        const Autores = await Autor.find().sort({name: 1});
        res.status(200);
        res.json(Autores);
    } catch (error) {
        res.status(500);
        res.json({ error: error });
    }
};
module.exports.createAutor = async (req, res) => {
    try {
        const newAuthor = await Autor.create(req.body);
        res.status(201);
        res.json(newAuthor);
    } catch (error) {
        res.status(500);
        res.json(error);
    }
};
module.exports.getAutorById = async (req, res) => {
    const { id } = req.params;
    try {
        const autor = await Autor.findOne({ _id: id });
        res.status(200);
        res.json(autor);
    } catch (error) {
        res.status(500);
        res.json(error);
    }
};
module.exports.updateAutor = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedAutor = await Autor.findOneAndUpdate({ _id: id }, req.body, { new: true, runValidators: true });
        res.status(200);
        res.json(updatedAutor);
    } catch (error) {
        res.status(500);
        res.json(error);
    }
};
module.exports.deleteAutor = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedAutor = await Autor.deleteOne({ _id: id });
        res.status(200);
        res.json(deletedAutor);

    } catch (error) {
        res.status(500);
        res.json({ error: error });
    }
};