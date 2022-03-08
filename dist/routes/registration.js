"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const BasicAuth_1 = require("../middlewares/BasicAuth");
const router = express_1.default.Router();
const users_1 = require("../controllers/users");
router.post("/", BasicAuth_1.BasicAuth, users_1.registration);
exports.default = router;
//# sourceMappingURL=registration.js.map