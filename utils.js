function getUrl(cloudname) {
  return `https://api.cloudinary.com/v1_1/${cloudname}/upload`;
}

function encodeImageFileAsURL(image, preset) {
  const data = new FormData();
  data.append("file", image);
  data.append("upload_preset", preset);
  return data;
}

async function uploadSingle(file, { preset, cloudname }) {
  const pic = encodeImageFileAsURL(file, preset);

  const response = await fetch(getUrl(cloudname), {
    method: "POST",
    body: pic,
  });

  const imageData = await response.json();
  return imageData.secure_url;
}

async function multiupload(files, { cloudname, preset }) {
  const uploadPromises = files.map(async (image) => {
    return uploadSingle(image, { cloudname, preset });
  });

  const uploadedImages = await Promise.all(uploadPromises);

  return uploadedImages;
}

export { multiupload, uploadSingle };
