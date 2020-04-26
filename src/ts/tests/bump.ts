import test from 'ava';
import { SemanticVersionBumbablePart, SemVer } from '../semver';

test('When no arg, Should bump patch', t => {
    let actual = new SemVer(1, 2, 3, "build", "meta", 4);
    let expected = new SemVer(1, 2, 4, "build", "meta", 4);
    actual.bump();
    t.deepEqual(actual, expected);
});

test('With arg set Major, should bump major and reset others', t=> {
    let actual = new SemVer(1, 2, 3, "build", "meta", 4);
    let expected = new SemVer(2, 0, 0, "build", "meta", 4);
    actual.bump(SemanticVersionBumbablePart.Major);
    t.deepEqual(actual, expected);
});

test('With arg set Minor, should bump minor and reset patch', t=> {
    let actual = new SemVer(1, 2, 3, "build", "meta", 4);
    let expected = new SemVer(1, 3, 0, "build", "meta", 4);
    actual.bump(SemanticVersionBumbablePart.Minor);
    t.deepEqual(actual, expected);
});

test('With arg set Patch, should bump patch', t=> {
    let actual = new SemVer(1, 2, 3, "build", "meta", 4);
    let expected = new SemVer(1, 2, 4, "build", "meta", 4);
    actual.bump(SemanticVersionBumbablePart.Patch);
    t.deepEqual(actual, expected);
});

test('With arg set buildNumber, should bump buildNumber', t=> {
    let actual = new SemVer(1, 2, 3, "build", "meta", 4);
    let expected = new SemVer(1, 2, 3, "build", "meta", 5);
    actual.bump(SemanticVersionBumbablePart.BuildNumber);
    t.deepEqual(actual, expected);
});