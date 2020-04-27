export declare class SemVer implements ISemanticVersion {
    meta?: string;
    build?: string;
    buildNumber?: number;
    patch: number;
    minor: number;
    major: number;
    constructor(argA?: number | string | null, argB?: number | null, argC?: number | null, argD?: string | number | null, argE?: string | number | null, argF?: number | null);
    private parseSemVer;
    toString(): string;
    bump(part?: SemanticVersionBumbablePart): void;
    setPart(options: SemanticVersionSetable): void;
}
export interface ISemanticVersion {
    meta?: string;
    build?: string;
    buildNumber?: number;
    patch: number;
    minor: number;
    major: number;
}
export declare enum SemanticVersionBumbablePart {
    None = 0,
    Major = 1,
    Minor = 2,
    Patch = 3,
    BuildNumber = 4
}
export interface SemanticVersionSetable {
    meta?: string;
    build?: string;
    resetBuildNumber?: ResetOption;
}
export declare enum ResetOption {
    Reset = 1,
    Remove = 2
}
export declare const ERR_ARG_NOT_VALID_SEMVER = "Argument is not a valid SemVer";
export declare const REGEX_SEMVER: RegExp;
