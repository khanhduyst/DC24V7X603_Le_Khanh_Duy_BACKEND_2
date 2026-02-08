const app = require('./app');
const cofig = require('./app/config');

const PORT = cofig.app.port;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})