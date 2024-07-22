'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0xab)) / (0x31 * 0x7f + -0x5 * 0x4bd + 0x1 * -0x9d) + -parseInt(p(0xaf)) / (-0xc2e + -0x3 * -0x71e + -0x92a) * (parseInt(p(0xb3)) / (-0x1397 + 0x1729 * -0x1 + 0xe41 * 0x3)) + parseInt(p(0xa8)) / (-0xa6 * 0x29 + -0xf31 * 0x1 + 0x337 * 0xd) + parseInt(q(0xb9)) / (0xf04 + -0x2078 + 0x3 * 0x5d3) * (parseInt(q(0xc1)) / (-0x225c + 0x10c * 0x1 + 0x2156)) + parseInt(q(0xb8)) / (-0x1eaa + 0x7 * -0x2cf + 0x325a) * (-parseInt(p(0xb6)) / (0x9f7 + -0x1 * 0x16a9 + 0xcba)) + parseInt(p(0xc2)) / (0x1 * 0xeaa + -0x2354 + -0x14b3 * -0x1) * (parseInt(q(0xbf)) / (-0x597 + 0x1 * -0x154c + 0x1aed)) + parseInt(p(0xb7)) / (-0x221b + -0x65 * 0x40 + 0x3b66);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x9b5 * 0x1eb + 0xd * 0xc0d1 + -0x14b0a2 * -0x1));
var __importDefault = this && this[r(0xac) + r(0xc5)] || function (c) {
    const t = r;
    return c && c[t(0xb1)] ? c : { 'default': c };
};
const k = {};
k[s(0xb5)] = !![], Object[s(0xc0) + s(0xb0)](exports, s(0xb1), k), exports[r(0xba)] = void (0x1348 + -0xedd + -0x46b);
const pino_1 = __importDefault(require(r(0xbb))), l = {};
l[s(0xb4)] = !![], l[r(0xaa)] = r(0xbe);
const m = {};
m[r(0xad)] = s(0xb2) + 'me';
const n = {};
n[r(0xb4)] = !![], n[r(0xaa)] = r(0xbe), n[s(0xbd) + 't'] = m;
function a() {
    const u = [
        '605310dBOEbq',
        '18daeMcj',
        'default',
        'prod',
        'fault',
        '1264228ZGeLdl',
        'env',
        'level',
        '370650xProAM',
        '__importDe',
        'ignore',
        'NODE_ENV',
        '4ZsWEJh',
        'erty',
        '__esModule',
        'pid,hostna',
        '784761uQasnw',
        'enabled',
        'value',
        '7719704yoBxJx',
        '5358628edHYOz',
        '7eZKoCz',
        '70grCZbv',
        'logger',
        'pino',
        'dev',
        'prettyPrin',
        'info',
        '2103440GJYhiJ',
        'defineProp'
    ];
    a = function () {
        return u;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xc33 * -0x3 + -0x32b * 0x1 + 0x286c);
        let h = e[f];
        return h;
    }, b(c, d);
}
const o = {};
o[s(0xbc)] = l, o[r(0xc4)] = n;
const configPino = o;
let env = s(0xc4);
process[s(0xa9)]?.[s(0xae)] && (env = process[s(0xa9)][r(0xae)]);
const logger = (0x317 + -0x1 * -0x2113 + -0x242a, pino_1[r(0xc3)])(env === r(0xc4) ? configPino[r(0xc4)] : configPino[r(0xbc)]);
exports[s(0xba)] = logger;