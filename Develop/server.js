const express = require('express');
const app = express();
const PORT = process.env.port || 3001;
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.static('./Develop/public'))
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
});