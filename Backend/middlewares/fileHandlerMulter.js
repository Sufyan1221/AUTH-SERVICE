import multer from "multer";
import { v4 } from "uuid";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    const myuid = v4();
    cb(null, myuid.slice(0, 10) + file.originalname);
  },
});

const upload = multer({ storage });

export default upload;
