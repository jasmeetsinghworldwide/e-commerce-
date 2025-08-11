const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const authRouter = require("./routes/auth/auth-routes");
const adminProductsRouter = require("./routes/admin/products-routes");
const adminOrderRouter = require("./routes/admin/order-routes");

const shopProductsRouter = require("./routes/shop/products-routes");
const shopCartRouter = require("./routes/shop/cart-routes");
const shopAddressRouter = require("./routes/shop/address-routes");
const shopOrderRouter = require("./routes/shop/order-routes");
const shopSearchRouter = require("./routes/shop/search-routes");
const shopReviewRouter = require("./routes/shop/review-routes");

const commonFeatureRouter = require("./routes/common/feature-routes");

dotenv.config();

// MongoDB connection
mongoose
  .connect('mongodb+srv://jasmeetsinghworldwide:Sameerdogra@cluster0.cxyqbjp.mongodb.net/')
  .then(() => console.log("✅ MongoDB connected"))
  .catch((error) => console.log("❌ MongoDB connection error:", error));

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Allow multiple origins for CORS (including any Vercel domain)
const allowedOrigins = [
  "http://localhost:5173", // Local development
  /\.vercel\.app$/,        // Any Vercel deployment
  "https://e-commerce-phi-red.vercel.app" // Your custom Vercel domain (if you keep it)
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // Allow server-to-server or curl requests
      const isAllowed = allowedOrigins.some(o =>
        typeof o === "string" ? o === origin : o.test(origin)
      );
      if (isAllowed) return callback(null, true);
      return callback(new Error("Not allowed by CORS"));
    },
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

// Routes
app.use("/api/auth", authRouter);
app.use("/api/admin/products", adminProductsRouter);
app.use("/api/admin/orders", adminOrderRouter);

app.use("/api/shop/products", shopProductsRouter);
app.use("/api/shop/cart", shopCartRouter);
app.use("/api/shop/address", shopAddressRouter);
app.use("/api/shop/order", shopOrderRouter);
app.use("/api/shop/search", shopSearchRouter);
app.use("/api/shop/review", shopReviewRouter);

app.use("/api/common/feature", commonFeatureRouter);

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
