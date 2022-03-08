import express from 'express';
const router = express.Router();
// import EmailService from './emailService';
import UserRoute from './userRoute';
import RegistrationRoute from './registration';
import BookingRoute from './tableBooking';
import LoginRoute from './login';

// router.use("/email", EmailService);
router.use("/users", UserRoute);
router.use("/registration", RegistrationRoute);
router.use("/booking", BookingRoute)
router.use("/login", LoginRoute)

export default router;