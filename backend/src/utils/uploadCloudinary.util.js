import cloudinary from 'cloudinary';
import fs from 'fs';
import ErrorHandler from './ErrorHandler.util.js';
// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET
});


const uploadCloudinary  = async function(file) {

    try{
        if(!file) return null;
        
        const response = await cloudinary.v2.uploader.upload(file.path);
        // console.log(response);
        fs.unlinkSync(file.path);
        return response;
    }catch(err){
        fs.unlinkSync(file.path);
        throw new ErrorHandler(500,'Currently facing issue in uploading file !!');
    }   
};

const uploadBatchCloudinary = (async (images)=>{
    try{
        let urls = [];
        for(let i = 0; i < images.length; i++) {
            let cloudinaryResponse;
            try{
                cloudinaryResponse = await uploadCloudinary(images[i].path);
            }catch(err) {
                throw new ErrorHandler(501,`Error while uploading the image, ${err.message}!!`);
            }
            urls.push(cloudinaryResponse.url);
        }
        return urls;
    }catch(err) {
        throw new ErrorHandler(501,'Error while uploading the images !');
    }
})

export default uploadCloudinary
// export { uploadCloudinary, uploadBatchCloudinary };