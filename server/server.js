const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const allowedOrigins = [
  "http://localhost:5173",
  process.env.CLIENT_URL, // Set this in Vercel env vars to your frontend URL
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, curl, Postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
}));
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/inquiries", require("./routes/inquiries"));
app.use("/api/rooms", require("./routes/rooms"));
app.use("/api/gallery", require("./routes/gallery"));
app.use("/api/testimonials", require("./routes/testimonials"));
app.use("/api/content", require("./routes/content"));
app.use("/api/upload", require("./routes/upload"));

app.get("/", (req, res) => {
  res.send("Lodge Madhumagna API is running ✅");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
