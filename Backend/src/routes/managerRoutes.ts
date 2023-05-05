import { isAuthenticatedUser, authorizeRoles } from "../authentication/auth";
import { authorizeRoleChange } from "../authentication/rolecontrolls";
import { acceptApartmentRequest, getAllSecurityGuards, makeSecurityGuard,rejectApartmentRequest,deleteLeaseAgreement } from "../controllers/managerController";
import express from 'express';

const router = express.Router();

router.route('/allSecurityGuards').get(isAuthenticatedUser,authorizeRoles('manager','owner'),getAllSecurityGuards);
router.route('/makesSecurityGuard').put(isAuthenticatedUser,authorizeRoles('manager','owner'),authorizeRoleChange,makeSecurityGuard);
router.route('/acceptApartmentRequest/:id').put(isAuthenticatedUser,authorizeRoles('manager','owner'),authorizeRoleChange,acceptApartmentRequest);
router.route('/rejectApartmentRequest/:id').put(isAuthenticatedUser,authorizeRoles('manager','owner'),authorizeRoleChange,rejectApartmentRequest);
router.route('/deleteLeaseAgreement/:id').delete(isAuthenticatedUser,authorizeRoles('manager','owner'),authorizeRoleChange,deleteLeaseAgreement);

export default router;