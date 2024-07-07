'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x166)) / (0x51 * -0x15 + 0x7a8 + -0x102) * (parseInt(q(0x167)) / (-0x19b9 + 0x1f3d + 0x1 * -0x582)) + -parseInt(q(0x178)) / (0xf9b + 0x3 * 0xcb9 + -0x35c3) + -parseInt(p(0x172)) / (0x1cfd + 0x18e5 + -0x35de) * (parseInt(p(0x161)) / (-0x5 * -0x3d6 + 0xa36 + -0x1d5f * 0x1)) + -parseInt(p(0x163)) / (-0x1 * -0xb9e + -0x1 * 0x1ac6 + 0xf2e) + -parseInt(p(0x179)) / (-0x9ad + 0x1 * 0xe77 + -0x4c3) + -parseInt(q(0x16d)) / (-0x24ac + -0x633 * 0x1 + 0x15 * 0x20b) + parseInt(q(0x160)) / (-0x1a04 + 0x76e + 0x15 * 0xe3) * (parseInt(q(0x16b)) / (-0x18f5 * 0x1 + 0x1 * -0x739 + 0x101c * 0x2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2 * 0x75569 + 0xc9 * -0xade + 0x3 * 0xaa5a8));
var __importDefault = this && this[r(0x177) + s(0x169)] || function (c) {
    const t = s;
    return c && c[t(0x174)] ? c : { 'default': c };
};
const k = {};
k[s(0x176)] = !![], Object[r(0x170) + s(0x17b)](exports, r(0x174), k), exports[r(0x162)] = void (-0xecd + 0x5e4 * 0x5 + -0xea7);
const pino_1 = __importDefault(require(r(0x16e))), l = {};
l[r(0x16a)] = !![], l[r(0x168)] = r(0x165);
const m = {};
m[r(0x175)] = s(0x16f) + 'me';
const n = {};
n[s(0x16a)] = !![], n[r(0x168)] = r(0x165), n[s(0x17c) + 't'] = m;
const o = {};
o[s(0x173)] = l, o[s(0x171)] = n;
function a() {
    const u = [
        '__importDe',
        '1887105zMWkzS',
        '2135854zNCCML',
        'NODE_ENV',
        'erty',
        'prettyPrin',
        '828ZSCXaj',
        '5026610LUYrhQ',
        'logger',
        '2009790coWfvv',
        'default',
        'info',
        '17EypCfT',
        '120138KxMtLn',
        'level',
        'fault',
        'enabled',
        '204290phSzOK',
        'env',
        '426472UKYKYS',
        'pino',
        'pid,hostna',
        'defineProp',
        'prod',
        '4CxLMLU',
        'dev',
        '__esModule',
        'ignore',
        'value'
    ];
    a = function () {
        return u;
    };
    return a();
}
const configPino = o;
let env = r(0x171);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2601 + -0x1071 + 0x37d2);
        let h = e[f];
        return h;
    }, b(c, d);
}
process[s(0x16c)]?.[r(0x17a)] && (env = process[s(0x16c)][s(0x17a)]);
const logger = (-0x7e5 + -0x18 * -0x4c + 0xc5 * 0x1, pino_1[s(0x164)])(env === s(0x171) ? configPino[s(0x171)] : configPino[r(0x173)]);
exports[r(0x162)] = logger;