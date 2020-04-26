import test from 'ava';
import SemVer, * as sv from '../index';

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

test('when resetBuildNumber set, should reset build number', t=>{
    let actual = new SemVer(1,2,3,"alpha","meta",4);
    let expected = new SemVer(1,2,3,"alpha","meta",0);
    actual.setPart({resetBuildNumber:true});
    t.deepEqual(actual,expected);
});

test("When removeBuildNumber set, should set build number to undefined", t=> {
    let actual = new SemVer(1,2,3,"alpha","meta",4);
    let expected = new SemVer(1,2,3,"alpha","meta");
    actual.setPart({removeBuildNumber:true});
    t.deepEqual(actual,expected);
});