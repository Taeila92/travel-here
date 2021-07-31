import { storageService } from '../firebase';

let img;

export const getImg = (name) => {
  let storageRef = storageService.ref();
  let dynamicImg = storageRef.child(`post/${name}`);

  dynamicImg.getMetadata().then(async function() {
    let downloadDynURL = await dynamicImg.getDownloadURL();
    img = downloadDynURL;
    return img;
  }).catch(function(error) {
    console.log(error);
  });
}
