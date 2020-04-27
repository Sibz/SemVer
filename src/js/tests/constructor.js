"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const semver_1 = require("../semver");
ava_1.default('Parameterless construction should create version with zeros (0.0.0)', t => {
    let result = new semver_1.SemVer();
    t.true(result.major == 0 && result.minor == 0 && result.patch == 0);
});
ava_1.default('Parameterless construction should create version undefined build/buildNumber/meta', t => {
    let result = new semver_1.SemVer();
    t.true(result.build == undefined && result.buildNumber == undefined && result.meta == undefined);
});
ava_1.default('Three int parameters in construct should convert to the associated vars', t => {
    let result = new semver_1.SemVer(1, 2, 3);
    t.true(result.major == 1 && result.minor == 2 && result.patch == 3);
});
ava_1.default('Three numbers plus string arg should set build', t => {
    let result = new semver_1.SemVer(1, 2, 3, 'alpha');
    t.true(result.major == 1 && result.minor == 2 && result.patch == 3 && result.build == 'alpha');
});
ava_1.default('Three numbers plus two string args should set build and meta', t => {
    let result = new semver_1.SemVer(1, 2, 3, 'alpha', 'meta');
    t.true(result.major == 1 && result.minor == 2 && result.patch == 3 && result.build == 'alpha' && result.meta == 'meta');
});
ava_1.default('Three numbers plus two string args plus one number should set build, meta and build number', t => {
    let result = new semver_1.SemVer(1, 2, 3, 'alpha', 'meta', 4);
    t.true(result.major == 1 && result.minor == 2 && result.patch == 3 && result.build == 'alpha' && result.meta == 'meta' && result.buildNumber == 4);
});
ava_1.default('Three numbers plus string arg plus one number should set build and build number', t => {
    let result = new semver_1.SemVer(1, 2, 3, 'alpha', 4);
    t.true(result.major == 1 && result.minor == 2 && result.patch == 3 && result.build == 'alpha' && result.buildNumber == 4);
});
ava_1.default('Four numbers should set build number', t => {
    let result = new semver_1.SemVer(1, 2, 3, 4);
    t.true(result.major == 1 && result.minor == 2 && result.patch == 3 && result.buildNumber == 4);
});
ava_1.default('One string arg should import associated variables', t => {
    let result = new semver_1.SemVer("1.2.3-alpha.4+meta");
    t.true(result.major == 1 && result.minor == 2 && result.patch == 3 && result.build == 'alpha' && result.meta == 'meta' && result.buildNumber == 4);
});
ava_1.default('One string arg should import associated variables 2', t => {
    let result = new semver_1.SemVer("1.2.3-alpha.4");
    t.true(result.major == 1 && result.minor == 2 && result.patch == 3 && result.build == 'alpha' && result.buildNumber == 4);
});
ava_1.default('One string arg should import associated variables 3', t => {
    let result = new semver_1.SemVer("1.2.3-alpha+meta");
    t.true(result.major == 1 && result.minor == 2 && result.patch == 3 && result.build == 'alpha' && result.meta == 'meta');
});
ava_1.default('One string arg should import associated variables 4', t => {
    let result = new semver_1.SemVer("1.2.3-4+meta");
    t.true(result.major == 1 && result.minor == 2 && result.patch == 3 && result.meta == 'meta' && result.buildNumber == 4);
});
ava_1.default('One string arg should import associated variables 5', t => {
    let result = new semver_1.SemVer("1.2.3-4");
    t.true(result.major == 1 && result.minor == 2 && result.patch == 3 && result.buildNumber == 4);
});
ava_1.default('One string arg should import associated variables 6', t => {
    let result = new semver_1.SemVer("1.2.3-alpha");
    t.true(result.major == 1 && result.minor == 2 && result.patch == 3 && result.build == 'alpha');
});
ava_1.default('One string arg should import associated variables 7', t => {
    let result = new semver_1.SemVer("1.2.3");
    t.true(result.major == 1 && result.minor == 2 && result.patch == 3);
});
ava_1.default('One string arg should import associated variables 8', t => {
    let result = new semver_1.SemVer("1.2.3+meta");
    t.true(result.major == 1 && result.minor == 2 && result.patch == 3 && result.meta == 'meta');
});
ava_1.default('Bad string arg should throw', t => {
    let err = t.throws(() => new semver_1.SemVer("bad.version"));
    t.is(err.message, semver_1.ERR_ARG_NOT_VALID_SEMVER);
});
