import test from 'ava';
import SemVer, * as sv from '../index';

test('Should construct valid string 1', t=> {
    let semVerStr = '1.2.3-alpha.4+meta';
    let ver = new SemVer(semVerStr);
    t.is(ver.toString(), semVerStr);
});

test('Should construct valid string 2', t=> {
    let semVerStr = '1.2.3-alpha.4';
    let ver = new SemVer(semVerStr);
    t.is(ver.toString(), semVerStr);
});

test('Should construct valid string 3', t=> {
    let semVerStr = '1.2.3-alpha+meta';
    let ver = new SemVer(semVerStr);
    t.is(ver.toString(), semVerStr);
});

test('Should construct valid string 4', t=> {
    let semVerStr = '1.2.3-4+meta';
    let ver = new SemVer(semVerStr);
    t.is(ver.toString(), semVerStr);
});

test('Should construct valid string 5', t=> {
    let semVerStr = '1.2.3-meta';
    let ver = new SemVer(semVerStr);
    t.is(ver.toString(), semVerStr);
});

test('Should construct valid string 6', t=> {
    let semVerStr = '1.2.3-4';
    let ver = new SemVer(semVerStr);
    t.is(ver.toString(), semVerStr);
});

test('Should construct valid string 7', t=> {
    let semVerStr = '1.2.3-alpha';
    let ver = new SemVer(semVerStr);
    t.is(ver.toString(), semVerStr);
});

test('Should construct valid string 8', t=> {
    let semVerStr = '1.2.3-alpha.1.5.4+meta';
    let ver = new SemVer(semVerStr);
    t.is(ver.toString(), semVerStr);
});