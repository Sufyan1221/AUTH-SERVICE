
import fs from "fs";
import v2 from '../config/cloudinaryConfig.js'

export const cloudinary = async(file) => {
    await v2.uploader.upload(
        file,
        function (error, result) {
          if (result)
            fs.unlink(file.path, (err) => {
              if (err) console.log(err);
              else {
                console.log("file deleted successfully from your server");
              }
            });
        }
      );
}