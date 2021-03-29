import Express from 'express';
const app = Express();

// GET, PUT, POST, DELETE

// app.get();
// app.put();
// app.post();
// app.delete();

app.get('/', (req, res) => {
  res.send({ new: 'redeploy' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// http://localhost:5000/
