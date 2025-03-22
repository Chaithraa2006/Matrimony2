// ✅ Import Required Modules
import multer from "multer";
import path from "path";

// ✅ Multer Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/"); // ✅ Store files in 'public/uploads'
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // ✅ Unique file name
  },
});

// ✅ Multer Upload Instance
const upload = multer({ storage });

export default upload;
