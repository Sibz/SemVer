"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const semver_1 = require("../semver");
ava_1.default('When build set, should set build', t => {
    let actual = new semver_1.SemVer(1, 2, 3, "alpha", "meta", 4);
    let expected = new semver_1.SemVer(1, 2, 3, "beta", "meta", 4);
    actual.setPart({ build: "beta" });
    t.deepEqual(actual, expected);
});
ava_1.default('When meta set, should set meta', t => {
    let actual = new semver_1.SemVer(1, 2, 3, "alpha", "meta", 4);
    let expected = new semver_1.SemVer(1, 2, 3, "alpha", "atem", 4);
    actual.setPart({ meta: "atem" });
    t.deepEqual(actual, expected);
});
ava_1.default('when resetBuildNumber set to reset, should reset build number', t => {
    let actual = new semver_1.SemVer(1, 2, 3, "alpha", "meta", 4);
    let expected = new semver_1.SemVer(1, 2, 3, "alpha", "meta", 0);
    actual.setPart({ resetBuildNumber: semver_1.ResetOption.Reset });
    t.deepEqual(actual, expected);
});
ava_1.default("When resetBuildNumber set to remove, should set build number to undefined", t => {
    let actual = new semver_1.SemVer(1, 2, 3, "alpha", "meta", 4);
    let expected = new semver_1.SemVer(1, 2, 3, "alpha", "meta");
    actual.setPart({ resetBuildNumber: semver_1.ResetOption.Remove });
    t.deepEqual(actual, expected);
});
ava_1.default('Should be able to combine all options', t => {
    let actual = new semver_1.SemVer(1, 2, 3, "alpha", "meta", 4);
    let expected = new semver_1.SemVer(1, 2, 3, "beta", "meta2");
    actual.setPart({
        build: "beta",
        meta: "meta2",
        resetBuildNumber: semver_1.ResetOption.Remove
    });
    t.deepEqual(actual, expected);
});
ava_1.default('Should be able to combine all options2', t => {
    let actual = new semver_1.SemVer(1, 2, 3, "alpha", "meta", 4);
    let expected = new semver_1.SemVer(1, 2, 3, "beta", "meta2", 0);
    actual.setPart({
        build: "beta",
        meta: "meta2",
        resetBuildNumber: semver_1.ResetOption.Reset
    });
    t.deepEqual(actual, expected);
});
