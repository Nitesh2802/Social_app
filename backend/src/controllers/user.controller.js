import {User} from "../models/user.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { ApiError } from "../utils/apiError.js";

// Render the upload form
export const uploadForm = (req, res) => {
    res.render("userForm");
};

// Handle user data submission
export const uploadData = async (req, res, next) => {
    try {
        const { name, socialMediaHandle } = req.body;

        if (!req.files || req.files.length === 0) {
            throw new ApiError(400, "No files uploaded");
        }

        // Upload images directly to Cloudinary
        const uploadedImages = [];
        for (const file of req.files) {
            const cloudinaryResponse = await uploadOnCloudinary(file.path); // Direct upload
            if (cloudinaryResponse) {
                uploadedImages.push(cloudinaryResponse.secure_url);
            }
        }

        // Save user data to MongoDB
        const user = new User({
            name,
            socialMediaHandle,
            images: uploadedImages,
        });
        await user.save();

        res.status(200).send({ success: true, message: "Data uploaded successfully" });
    } catch (err) {
        next(new ApiError(500, "Error uploading data", [err.message]));
    }
};
