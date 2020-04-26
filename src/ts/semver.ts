export default class SemVer implements SemanticVersion {
    meta?: string;
    build?: string;
    buildNumber?: number;
    patch: number;
    minor: number;
    major: number;

    constructor(
        argA: number | string | null = null,
        argB: number | null = null,
        argC: number | null = null,
        argD: string | number | null = null,
        argE: string | number | null = null,
        argF: number | null = null) {
        this.patch = 0; this.minor = 0; this.major = 0;
        if (typeof (argA) === 'number' || typeof (argB) === 'number' || typeof (argC) === 'number') {
            this.major = argA as number; this.minor = argB; this.patch = argC;
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

    private parseSemVer(semver: string) {
        if (!REGEX_SEMVER.test(semver)) {
            throw new Error(ERR_ARG_NOT_VALID_SEMVER);
        }
        let result = REGEX_SEMVER.exec(semver);
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

    toString(): string {
        let result: string = `${this.major}.${this.minor}.${this.patch}`;
        if (this.build && (!this.buildNumber || this.build != this.buildNumber.toString())) {
            result += `-${this.build}`;
            if (this.buildNumber) {
                result += `.${this.buildNumber}`;
            }
        } else if (this.buildNumber) {
            result += `-${this.buildNumber}`
        }

        if (this.meta) {
            result += `+${this.meta}`;
        }
        return result;
    }

    bump(part: SemanticVersionBumbablePart | null = null): void {
        if (!part || part == SemanticVersionBumbablePart.Patch) {
            this.patch++;
            return;
        }
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
        }
    }
}

export interface SemanticVersion {
    meta?: string,
    build?: string,
    buildNumber?: number,
    patch: number,
    minor: number,
    major: number
}

export enum SemanticVersionBumbablePart {
    None,
    Major,
    Minor,
    Patch,
    BuildNumber
}

export interface SemanticVersionSetable {
    meta?: string,
    build?: string,
    resetBuildNumber?: boolean
}

export const ERR_ARG_NOT_VALID_SEMVER = "Argument is not a valid SemVer";
export const REGEX_SEMVER = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;