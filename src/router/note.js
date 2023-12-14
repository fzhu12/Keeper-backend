const express = require("express");
const router = new express.Router();
const Note = require("../model/note");

// create a new note
router.post("/note", async (req, res) => {
    try {
        const note = new Note({
            ...req.body
        });
        await note.save();
        res.status(201).send(note);
    } catch (e) {
        res.status(404).send();
    }
})

// get all the notes
router.get("/notes", async (req, res) => {
    try {
        const notes = await Note.find({});
        res.status(200).send(notes);
    } catch (e) {
        res.status(404).send();
    }
})

// get a specific note by its key
router.get("/note/:key", async (req, res) => {
    try {
        const key = req.params.key;
        const note = await Note.findOne({key});
        res.status(200).send(note);
    } catch (e) {
        res.status(404).send();
    }
})

// delete a specific note by its key
router.delete("/note/:key", async (req, res) => {
    try {
        const key = req.params.key;
        await Note.deleteOne({key});
        res.status(204).send();
    } catch (e) {
        res.status(404).send();
    }
})

module.exports = router