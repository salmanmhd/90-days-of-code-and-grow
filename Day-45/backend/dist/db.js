"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config({ path: './../.env' });
const mongoURI = process.env.MONGODB_URI;
const todoSchema = new mongoose_1.default.Schema({
    todo: String,
    completed: Boolean,
});
const Todo = mongoose_1.default.model('Todo', todoSchema);
exports.default = Todo;
