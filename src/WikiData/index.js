"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const characters_1 = __importDefault(require("./characters"));
const notes_1 = __importDefault(require("./notes"));
exports.default = {
    characters: characters_1.default,
    notes: notes_1.default,
};
