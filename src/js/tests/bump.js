"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const semver_1 = require("../semver");
ava_1.default('When no arg, Should bump patch', t => {
    let actual = new semver_1.SemVer(1, 2, 3, "build", "meta", 4);
    let expected = new semver_1.SemVer(1, 2, 4, "build", "meta", 4);
    actual.bump();
    t.deepEqual(actual, expected);
});
ava_1.default('With arg set Major, should bump major and reset others', t => {
    let actual = new semver_1.SemVer(1, 2, 3, "build", "meta", 4);
    let expected = new semver_1.SemVer(2, 0, 0, "build", "meta", 4);
    actual.bump(semver_1.SemanticVersionBumbablePart.Major);
    t.deepEqual(actual, expected);
});
ava_1.default('With arg set Minor, should bump minor and reset patch', t => {
    let actual = new semver_1.SemVer(1, 2, 3, "build", "meta", 4);
    let expected = new semver_1.SemVer(1, 3, 0, "build", "meta", 4);
    actual.bump(semver_1.SemanticVersionBumbablePart.Minor);
    t.deepEqual(actual, expected);
});
ava_1.default('With arg set Patch, should bump patch', t => {
    let actual = new semver_1.SemVer(1, 2, 3, "build", "meta", 4);
    let expected = new semver_1.SemVer(1, 2, 4, "build", "meta", 4);
    actual.bump(semver_1.SemanticVersionBumbablePart.Patch);
    t.deepEqual(actual, expected);
});
ava_1.default('With arg set buildNumber, should bump buildNumber', t => {
    let actual = new semver_1.SemVer(1, 2, 3, "build", "meta", 4);
    let expected = new semver_1.SemVer(1, 2, 3, "build", "meta", 5);
    actual.bump(semver_1.SemanticVersionBumbablePart.BuildNumber);
    t.deepEqual(actual, expected);
});
