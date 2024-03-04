const UserModel = require('../models/user')
const cloudinary = require('cloudinary');
const bcrypt = require('bcrypt');



cloudinary.config({
    cloud_name: 'dnzs5c9q3',
    api_key: '661477146633168',
    api_secret: 'QyINe3Q4WivgC2eTmlsZoYwSDRc'
});

class UserController {
    static getalluser = async (req, res) => {
        try {
            res.send('hello user')

        } catch (error) {
            console.log(error)

        }
    }

    static userinsert = async (req, res) => {
        try {

            //console.log(req.files.image)
            //code for upload image on cloudinary
            const file = req.files.image
            const imageUpload = await cloudinary.uploader.upload(file.tempFilePath, {
                folder: 'userprofileapi'
            })
            //console.log(imageUpload)
            const { n, e, p, cp } = req.body;
            const user = await UserModel.findOne({ email: e })
            // console.log(user)
            if (user) {
                res
                    .status(401)
                    .json({ status: "failed", message: "THIS EMAIL IS ALREADY EXISTS" });
            } else {
                if (n && e && p && cp) {
                    if (p == cp) {
                        const hashPassword = await bcrypt.hash(p, 10);
                        const result = new UserModel({
                            name: n,
                            email: e,
                            password: hashPassword,
                            image: {
                                public_id: imageUpload.public_id,
                                url: imageUpload.secure_url
                            }
                        })
                        //To save data
                        await result.save();


                        res.status(201).json({
                            status: "success",
                            message: "Ragistation Successfully",
                        });
                    } else {
                        res
                            .status(401)
                            .json({ status: "failed", message: "Password and confirm password does not match" });
                    }
                } else {
                    res
                        .status(401)
                        .json({ status: "failed", message: "ALL FIELD REQUIRED" });

                }
            }
        }catch (error) {
            console.log(error)

        }
    }
}



module.exports = UserController