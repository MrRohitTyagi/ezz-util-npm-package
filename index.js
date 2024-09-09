import { uploadSingle, multiupload } from "./utils.js";

class ImageUploader {
  constructor({ cloudname, preset }) {
    this.uploadImage = async function (file) {
      const uploadedImage = await uploadSingle(file, { cloudname, preset });
      return uploadedImage;
    };
  }
}

class MultipleImageUploader {
  constructor({ cloudname, preset }) {
    this.uploadImages = async function (files) {
      const uploadedImages = await multiupload(files, { cloudname, preset });
      return uploadedImages;
    };
  }
}

export { ImageUploader, MultipleImageUploader };
