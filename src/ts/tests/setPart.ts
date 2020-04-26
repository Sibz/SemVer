import test from 'ava';
import { ResetOption, SemVer } from '../semver';

test('When build set, should set build', t=> {
    let actual = new SemVer(1,2,3,"alpha","meta",4);
    let expected = new SemVer(1,2,3,"beta","meta",4);
    actual.setPart({build:"beta"});
    t.deepEqual(actual,expected);
});

test('When meta set, should set meta', t=> {
    let actual = new SemVer(1,2,3,"alpha","meta",4);
    let expected = new SemVer(1,2,3,"alpha","atem",4);
    actual.setPart({meta:"atem"});
    t.deepEqual(actual,expected);
});

test('when resetBuildNumber set to reset, should reset build number', t=>{
    let actual = new SemVer(1,2,3,"alpha","meta",4);
    let expected = new SemVer(1,2,3,"alpha","meta",0);
    actual.setPart({resetBuildNumber:ResetOption.Reset});
    t.deepEqual(actual,expected);
});

test("When resetBuildNumber set to remove, should set build number to undefined", t=> {
    let actual = new SemVer(1,2,3,"alpha","meta",4);
    let expected = new SemVer(1,2,3,"alpha","meta");
    actual.setPart({resetBuildNumber:ResetOption.Remove});
    t.deepEqual(actual,expected);
});

test('Should be able to combine all options', t=> {
    let actual = new SemVer(1,2,3,"alpha","meta",4);
    let expected = new SemVer(1,2,3,"beta","meta2");
    actual.setPart({
        build: "beta",
        meta: "meta2",
        resetBuildNumber:ResetOption.Remove
    });
    t.deepEqual(actual,expected);
});

test('Should be able to combine all options2', t=> {
    let actual = new SemVer(1,2,3,"alpha","meta",4);
    let expected = new SemVer(1,2,3,"beta","meta2",0);
    actual.setPart({
        build: "beta",
        meta: "meta2",
        resetBuildNumber:ResetOption.Reset
    });
    t.deepEqual(actual,expected);
});