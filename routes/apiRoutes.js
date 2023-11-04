const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const readNotes = () => {
    const data = fs.readFileSync('./db/db.json', 'utf8');
    return JSON.parse(data);
};

const saveNotes = (notes) => {
    fs.writeFileSync('./db/db.json', JSON.stringify(notes));
};

router.get('/notes', (req, res) => {
    const notes = readNotes();
    res.json(notes);
});

router.post('/notes', (req, res) => {
const notes = readNotes();
const userNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
};
notes.push(userNote);
saveNotes(notes);
res.json(userNote);
});

module.exports = router;