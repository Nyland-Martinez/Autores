const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

require('./config/mongoose.config');

app.use(
    cors({
        credentials: true,
        origin: ["http://localhost:3000"]
    })
)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const autorRoutes = require('./routes/autor.routes');
app.use("/api/autores", autorRoutes);

app.listen(port, () => console.log(`Listening on port: ${port}`));