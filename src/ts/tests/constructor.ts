import test from 'ava';
import SemVer, * as sv from '../index';

test('Parameterless construction should create version with zeros (0.0.0)', t => {
    let result = new SemVer();
    t.true(result.major == 0 && result.minor == 0 && result.patch == 0);
});

test('Parameterless construction should create version undefined build/buildNumber/meta', t => {
    let result = new SemVer();
    t.true(result.build == undefined && result.buildNumber == undefined && result.meta == undefined);
});

test('Three int parameters in construct should convert to the associated vars', t=> {
    let result = new SemVer(1,2,3);
    t.true(result.major == 1 && result.minor == 2 && result.patch == 3);
});

test('Three numbers plus string arg should set build', t=> {
    let result = new SemVer(1,2,3, 'alpha');
    t.true(result.major == 1 && result.minor == 2 && result.patch == 3 && result.build == 'alpha');
});

test('Three numbers plus two string args should set build and meta', t=> {
    let result = new SemVer(1,2,3, 'alpha', 'meta');
    t.true(result.major == 1 && result.minor == 2 && result.patch == 3 && result.build == 'alpha' && result.meta == 'meta');
});

test('Three numbers plus two string args plus one number should set build, meta and build number', t=> {
    let result = new SemVer(1,2,3, 'alpha', 'meta', 4);
    t.true(result.major == 1 && result.minor == 2 && result.patch == 3 && result.build == 'alpha' && result.meta == 'meta' && result.buildNumber == 4);
});

test('Three numbers plus string arg plus one number should set build and build number', t=> {
    let result = new SemVer(1,2,3, 'alpha', 4);
    t.true(result.major == 1 && result.minor == 2 && result.patch == 3 && result.build == 'alpha' && result.buildNumber == 4);
});

test('Four numbers should set build number', t=> {
    let result = new SemVer(1,2,3,4);
    t.true(result.major == 1 && result.minor == 2 && result.patch == 3  && result.buildNumber == 4);
});

test('One string arg should import associated variables', t=> {
    let result = new SemVer("1.2.3-alpha.4+meta");
    t.true(result.major == 1 && result.minor == 2 && result.patch == 3 && result.build == 'alpha' && result.meta == 'meta' && result.buildNumber == 4);
});

test('One string arg should import associated variables 2', t=> {
    let result = new SemVer("1.2.3-alpha.4");
    t.true(result.major == 1 && result.minor == 2 && result.patch == 3 && result.build == 'alpha' && result.buildNumber == 4);
});

test('One string arg should import associated variables 3', t=> {
    let result = new SemVer("1.2.3-alpha+meta");
    t.true(result.major == 1 && result.minor == 2 && result.patch == 3 && result.build == 'alpha' && result.meta == 'meta');
});

test('One string arg should import associated variables 4', t=> {
    let result = new SemVer("1.2.3-4+meta");
    t.true(result.major == 1 && result.minor == 2 && result.patch == 3 && result.meta == 'meta' && result.buildNumber == 4);
});

test('One string arg should import associated variables 5', t=> {
    let result = new SemVer("1.2.3-4");
    t.true(result.major == 1 && result.minor == 2 && result.patch == 3 && result.buildNumber == 4);
});

test('One string arg should import associated variables 6', t=> {
    let result = new SemVer("1.2.3-alpha");
    t.true(result.major == 1 && result.minor == 2 && result.patch == 3 && result.build == 'alpha');
});

test('One string arg should import associated variables 7', t=> {
    let result = new SemVer("1.2.3");
    t.true(result.major == 1 && result.minor == 2 && result.patch == 3);
});

test('One string arg should import associated variables 8', t=> {
    let result = new SemVer("1.2.3+meta");
    t.true(result.major == 1 && result.minor == 2 && result.patch == 3 && result.meta == 'meta');
});

test('Bad string arg should throw', t=> {
    let err = t.throws(()=>new SemVer("bad.version"));
    t.is(err.message, sv.ERR_ARG_NOT_VALID_SEMVER)
});