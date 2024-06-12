const path = require('path');

const express = require('express');
const port = 3000;

const app = express(); 

// this is for importing routes from the admin router page.
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// This is for accepting json requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")))

app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "views", "404.html"))
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
});
