const app = require('./app');
const connectDB = require('./config/db');
const { port } = require('./secret');

app.listen(port, async() => {
    await connectDB();
    console.log(`Wadokai is running at http://localhost:${port}`);
});