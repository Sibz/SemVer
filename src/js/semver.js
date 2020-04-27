"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SemVer {
    constructor(argA = null, argB = null, argC = null, argD = null, argE = null, argF = null) {
        this.patch = 0;
        this.minor = 0;
        this.major = 0;
        if (typeof (argA) === 'number' || typeof (argB) === 'number' || typeof (argC) === 'number') {
            this.major = argA;
            this.minor = argB;
            this.patch = argC;
        }
        if (typeof (argD) === 'string') {
            this.build = argD;
        }
        if (typeof (argE) === 'string') {
            this.meta = argE;
        }
        if (typeof (argF) === 'number') {
            this.buildNumber = argF;
        }
        if (typeof (argE) === 'number') {
            this.buildNumber = argE;
        }
        if (typeof (argD) === 'number') {
            this.buildNumber = argD;
        }
        if (typeof (argA) === 'string') {
            this.parseSemVer(argA);
        }
    }
    parseSemVer(semver) {
        if (!exports.REGEX_SEMVER.test(semver)) {
            throw new Error(exports.ERR_ARG_NOT_VALID_SEMVER);
        }
        let result = exports.REGEX_SEMVER.exec(semver);
        if (!result) {
            return;
        }
        this.major = parseInt(result[1]);
        this.minor = parseInt(result[2]);
        this.patch = parseInt(result[3]);
        this.build = result[4];
        this.meta = result[5];
        if (!this.build) {
            return;
        }
        let buildArray = this.build.split('.');
        if (buildArray.length == 0) {
            return;
        }
        let n = parseInt(buildArray[buildArray.length - 1]);
        if (!isNaN(n)) {
            this.buildNumber = n;
        }
        if (buildArray.length > 1) {
            buildArray.pop();
        }
        this.build = buildArray.join('.');
    }
    toString() {
        let result = `${this.major}.${this.minor}.${this.patch}`;
        if (this.build && (!this.buildNumber || this.build != this.buildNumber.toString())) {
            result += `-${this.build}`;
            if (this.buildNumber) {
                result += `.${this.buildNumber}`;
            }
        }
        else if (this.buildNumber) {
            result += `-${this.buildNumber}`;
        }
        if (this.meta) {
            result += `+${this.meta}`;
        }
        return result;
    }
    bump(part = SemanticVersionBumbablePart.Patch) {
        switch (part) {
            case SemanticVersionBumbablePart.Major:
                this.major++;
                this.minor = 0;
                this.patch = 0;
                break;
            case SemanticVersionBumbablePart.Minor:
                this.minor++;
                this.patch = 0;
                break;
            case SemanticVersionBumbablePart.Patch:
                this.patch++;
                break;
            case SemanticVersionBumbablePart.BuildNumber:
                if (this.buildNumber) {
                    this.buildNumber++;
                }
                else {
                    this.buildNumber = 0;
                }
                break;
        }
    }
    setPart(options) {
        if (options.build) {
            this.build = options.build;
        }
        if (options.meta) {
            this.meta = options.meta;
        }
        if (!options.resetBuildNumber) {
            return;
        }
        if (options.resetBuildNumber == ResetOption.Remove) {
            delete (this.buildNumber);
        }
        else {
            this.buildNumber = 0;
        }
    }
}
exports.SemVer = SemVer;
var SemanticVersionBumbablePart;
(function (SemanticVersionBumbablePart) {
    SemanticVersionBumbablePart[SemanticVersionBumbablePart["None"] = 0] = "None";
    SemanticVersionBumbablePart[SemanticVersionBumbablePart["Major"] = 1] = "Major";
    SemanticVersionBumbablePart[SemanticVersionBumbablePart["Minor"] = 2] = "Minor";
    SemanticVersionBumbablePart[SemanticVersionBumbablePart["Patch"] = 3] = "Patch";
    SemanticVersionBumbablePart[SemanticVersionBumbablePart["BuildNumber"] = 4] = "BuildNumber";
})(SemanticVersionBumbablePart = exports.SemanticVersionBumbablePart || (exports.SemanticVersionBumbablePart = {}));
var ResetOption;
(function (ResetOption) {
    ResetOption[ResetOption["Reset"] = 1] = "Reset";
    ResetOption[ResetOption["Remove"] = 2] = "Remove";
})(ResetOption = exports.ResetOption || (exports.ResetOption = {}));
exports.ERR_ARG_NOT_VALID_SEMVER = "Argument is not a valid SemVer";
exports.REGEX_SEMVER = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
