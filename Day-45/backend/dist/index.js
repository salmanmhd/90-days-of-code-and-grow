"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const zod_1 = __importDefault(require("zod"));
const db_1 = __importDefault(require("./db"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const todoSchema = zod_1.default.object({
    todo: zod_1.default.string(),
    completed: zod_1.default.boolean(),
});
app.post('/add-todo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const zodSchema = todoSchema.safeParse(body);
    const { success } = zodSchema;
    if (!success) {
        return res.status(403).json({
            msg: 'Bad inputs',
        });
    }
    const todo = yield db_1.default.create({
        todo: body.todo,
        completed: body.completed,
    });
    return res.status(200).json({
        msg: 'Todo created successfully',
        todo,
    });
}));
app.delete('/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const todo = yield db_1.default.findByIdAndDelete(id);
        if (!todo) {
            return res.status(404).json({
                msg: 'Todo not found',
            });
        }
        return res.status(200).json({
            msg: 'Todo deleted successfully',
        });
    }
    catch (error) {
        return res.status(400).json({
            msg: 'Something went wrong',
        });
    }
}));
app.post('/update/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const status = req.body.status;
    try {
        const todo = yield db_1.default.findByIdAndUpdate(id, { completed: status }, { new: true });
        if (!todo) {
            return res.status(404).json({
                msg: 'Todo not found',
            });
        }
        return res.status(200).json({
            msg: 'Todo updated successfully',
        });
    }
    catch (error) {
        return res.status(400).json({
            msg: 'Something went wrong',
        });
    }
}));
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todo = yield db_1.default.find({});
        return res.status(200).json({
            todo,
        });
    }
    catch (error) {
        return res.status(400).json({
            msg: 'Something went wrong',
        });
    }
}));
app.listen(3000, () => {
    console.log('running on 3000');
});
