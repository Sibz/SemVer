import test from 'ava';
import SemVer, * as sv from '../index';


test('Parameterless construction should create version with zeros (0.0.0)', t => {
    let result = new SemVer();
    t.true(result.M == 0 && result.m == 0 && result.p == 0);
});

test('Parameterless construction should create version undefined build/buildNumber/meta', t => {
    let result = new SemVer();
    t.true(result.build == undefined && result.buildNumber == undefined && result.meta == undefined);
});

test('Three int parameters in construct should convert to the associated vars', t=> {
    let result = new SemVer(1,2,3);
    t.true(result.M == 1 && result.m == 2 && result.p == 3);
});

test('Three numbers plus string arg should set build', t=> {
    let result = new SemVer(1,2,3, 'alpha');
    t.true(result.M == 1 && result.m == 2 && result.p == 3 && result.build == 'alpha');
});

test('Three numbers plus two string args should set build and meta', t=> {
    let result = new SemVer(1,2,3, 'alpha', 'meta');
    t.true(result.M == 1 && result.m == 2 && result.p == 3 && result.build == 'alpha' && result.meta == 'meta');
});

test('Three numbers plus two string args plus one number should set build, meta and build number', t=> {
    let result = new SemVer(1,2,3, 'alpha', 'meta', 4);
    t.true(result.M == 1 && result.m == 2 && result.p == 3 && result.build == 'alpha' && result.meta == 'meta' && result.buildNumber == 4);
});

test('Three numbers plus string arg plus one number should set build and build number', t=> {
    let result = new SemVer(1,2,3, 'alpha', 4);
    t.true(result.M == 1 && result.m == 2 && result.p == 3 && result.build == 'alpha' && result.buildNumber == 4);
});

test('Four numbers should set build number', t=> {
    let result = new SemVer(1,2,3,4);
    t.true(result.M == 1 && result.m == 2 && result.p == 3  && result.buildNumber == 4);
});

test('One string arg should import associated variables', t=> {
    let result = new SemVer("1.2.3-alpha.4+meta");
    t.true(result.M == 1 && result.m == 2 && result.p == 3 && result.build == 'alpha' && result.meta == 'meta' && result.buildNumber == 4);
});