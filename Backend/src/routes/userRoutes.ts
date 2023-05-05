// all user routes
import express from 'express';
import { signup, completeSignup,login,logout, forgotPassword,resetPassword,
    updateDetails,updatePassword,makeApartmentRequest,cancelApartmentRequest,addVisitor
 } from '../controllers/userControllers';
 import { isAuthenticatedUser, authorizeRoles } from "../authentication/auth";



const router = express.Router();

router.route('/signup').post(signup);
router.route('/completesignup/:token').get(completeSignup);
router.route('/login').post(login);
router.route('/logout').get(isAuthenticatedUser,logout);
router.route('/forgotpassword').post(forgotPassword);
router.route('/resetpassword/:resetToken').put(resetPassword);
router.route('/updatedetails').put(isAuthenticatedUser,updateDetails);
router.route('/updatepassword').put(isAuthenticatedUser,updatePassword);
router.route('/makeApartmentRequest').put(isAuthenticatedUser,makeApartmentRequest);
router.route('/cancelApartmentRequest').put(isAuthenticatedUser,cancelApartmentRequest);
router.route('/addVisitor').put(isAuthenticatedUser,addVisitor);




export default router;


