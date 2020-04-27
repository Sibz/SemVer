"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const index_1 = require("../index");
ava_1.default('Should construct valid string 1', t => {
    let semVerStr = '1.2.3-alpha.4+meta';
    let ver = new index_1.SemVer(semVerStr);
    t.is(ver.toString(), semVerStr);
});
ava_1.default('Should construct valid string 2', t => {
    let semVerStr = '1.2.3-alpha.4';
    let ver = new index_1.SemVer(semVerStr);
    t.is(ver.toString(), semVerStr);
});
ava_1.default('Should construct valid string 3', t => {
    let semVerStr = '1.2.3-alpha+meta';
    let ver = new index_1.SemVer(semVerStr);
    t.is(ver.toString(), semVerStr);
});
ava_1.default('Should construct valid string 4', t => {
    let semVerStr = '1.2.3-4+meta';
    let ver = new index_1.SemVer(semVerStr);
    t.is(ver.toString(), semVerStr);
});
ava_1.default('Should construct valid string 5', t => {
    let semVerStr = '1.2.3-meta';
    let ver = new index_1.SemVer(semVerStr);
    t.is(ver.toString(), semVerStr);
});
ava_1.default('Should construct valid string 6', t => {
    let semVerStr = '1.2.3-4';
    let ver = new index_1.SemVer(semVerStr);
    t.is(ver.toString(), semVerStr);
});
ava_1.default('Should construct valid string 7', t => {
    let semVerStr = '1.2.3-alpha';
    let ver = new index_1.SemVer(semVerStr);
    t.is(ver.toString(), semVerStr);
});
ava_1.default('Should construct valid string 8', t => {
    let semVerStr = '1.2.3-alpha.1.5.4+meta';
    let ver = new index_1.SemVer(semVerStr);
    t.is(ver.toString(), semVerStr);
});
