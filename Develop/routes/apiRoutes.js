const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const readNotes = () => {
    const data = fs.readFileSync('./Develop/db/db.json', 'utf8');
    return JSON.parse(data);
};

const saveNotes = (notes) => {
    fs.writeFileSync('./Develop/db/db.json', JSON.stringify(notes));
};

router.get('/api/notes', (req, res) => {
    const notes = readNotes();
    res.json(notes);
});

router.post('/api/notes', (req, res) => {
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