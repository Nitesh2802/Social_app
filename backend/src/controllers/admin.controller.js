import { Admin } from '../models/admin.models.js';
import { User } from '../models/user.models.js';
import { ApiError } from '../utils/apiError.js';
import { ApiResponse } from '../utils/apiResponse.js';
// import jwt from 'jsonwebtoken';

// Admin Registration
// export const adminRegister = async (req, res, next) => {
//     try {
//         const { name, password, confirmPassword } = req.body;

//         if (password !== confirmPassword) {
//             throw new ApiError(400, 'Passwords do not match');
//         }

//         const existingAdmin = await Admin.findOne({ name });

//         if (existingAdmin) {
//             throw new ApiError(400, 'Admin already exists');
//         }

//         const newAdmin = new Admin({ name, password });

//         await newAdmin.save();

//         return res
//             .status(200)
//             .json(new ApiResponse(200, { name: newAdmin.name }, 'Admin registered successfully'));
//     } catch (err) {
//         next(new ApiError(500, 'Error during registration', [err.message]));
//     }
// };

// // Admin Login
// export const adminLogin = async (req, res, next) => {
//     try {
//         const { name, password } = req.body;

//         const admin = await Admin.findOne({ name });

//         if (!admin) {
//             throw new ApiError(401, "Admin not found");
//         }

//         const isPasswordValid = await admin.isPasswordCorrect(password);

//         if (!isPasswordValid) {
//             throw new ApiError(401, "Invalid credentials");
//         }

//         const accessToken = admin.generateAccessToken();
//         const refreshToken = admin.generateRefreshToken();

//     return res
//     .status(200)
//     .cookie("accessToken", accessToken, { httpOnly: true })
//     .cookie("refreshToken", refreshToken, { httpOnly: true })
//     .json({
//         status: 200,
//         accessToken,
//         refreshToken,
//         message: "User logged in successfully"
//     })
//      } catch (err) {
//       next(err);
//     }

// };

//dashboard
export const adminDashboard = async (req, res, next) => {
    try {
        const users = await User.find({}, '-password') // Exclude password only
            .select('name email createdAt updatedAt'); // Explicitly include required fields

        return res
            .status(200)
            .json(new ApiResponse(200, users, 'All users fetched successfully'));
    } catch (err) {
        next(new ApiError(500, 'Error fetching user data', [err.message]));
    }
};
