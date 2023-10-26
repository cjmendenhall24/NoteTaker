const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

router.get('/api/notes', async (req, res) => {
    const jNotes = await JSON.parse(fs.readFileSync('./Develop/db/db.json', "utf8"));
    res.json(jNotes);
});

router.post('/api/notes', (req, res) => {
    const jNotes = JSON.parse(fs.readFileSync('./Develop/db/db.json', "utf8"));
    const userNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
    jNotes.push(userNote);
    fs.writeFileSync("./Develop/db/db.json", JSON.stringify(jNotes));
    res.json(jNotes);
});

module.exports = router;