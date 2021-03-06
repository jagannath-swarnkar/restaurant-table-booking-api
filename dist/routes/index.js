"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// import EmailService from './emailService';
const userRoute_1 = __importDefault(require("./userRoute"));
const registration_1 = __importDefault(require("./registration"));
const tableBooking_1 = __importDefault(require("./tableBooking"));
const login_1 = __importDefault(require("./login"));
// router.use("/email", EmailService);
router.use("/users", userRoute_1.default);
router.use("/registration", registration_1.default);
router.use("/booking", tableBooking_1.default);
router.use("/login", login_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map