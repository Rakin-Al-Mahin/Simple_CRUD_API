const expreess = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");

const app = expreess();

// middleware
app.use(expreess.json());
app.use(expreess.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello from CRUD API Server");
});

// routes
app.use("/api/products", productRoute);

// database connection
mongoose
  .connect(
    "mongodb+srv://rakin992raj:Xgm5spmXDp6k8TwH@backenddb.t5nuxlz.mongodb.net/CRUD-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
