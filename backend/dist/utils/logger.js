'use strict';
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(A(0x130)) / (-0x1e6b + -0x1db9 + 0x3c25) * (parseInt(A(0x112)) / (0x4 * -0x588 + 0x1386 + -0x2 * -0x14e)) + parseInt(A(0x12e)) / (-0x1874 + -0x1 * -0x4ba + 0x13bd) * (parseInt(B(0x126)) / (-0x862 + 0xe8d + 0x69 * -0xf)) + -parseInt(A(0x115)) / (0x34 * -0x85 + -0x2098 + 0x1 * 0x3ba1) * (parseInt(B(0x111)) / (-0x1 * 0x1fb5 + -0x80 * 0x27 + 0x333b)) + -parseInt(B(0x118)) / (0x62 + -0x163 + 0xb * 0x18) * (-parseInt(B(0x11d)) / (0xd * 0x2b7 + 0x952 * -0x4 + -0xb * -0x2f)) + parseInt(A(0x119)) / (-0x11b3 * 0x1 + -0xf7 * 0xb + 0x1 * 0x1c59) * (-parseInt(B(0x104)) / (-0x1e05 + 0x20f8 + -0x2e9)) + parseInt(A(0xfd)) / (0x1c2f + 0x67 * -0x29 + -0x10f * 0xb) * (-parseInt(A(0x122)) / (-0x1db9 + -0x73b * 0x5 + 0x1 * 0x41ec)) + parseInt(B(0x124)) / (-0x2 * 0x7c4 + 0xdcc + 0x1c9) * (-parseInt(A(0x103)) / (0x22c * 0x3 + -0x85 * 0x37 + 0x161d));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x11 * -0x6d1f + -0x87f * 0xf + -0x3 * 0x99ba));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x269b + 0x131d + 0x2f * -0x135);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[C(0x117) + D(0x129)] || function (c) {
    const E = C;
    return c && c[E(0x107)] ? c : { 'default': c };
};
const w = {};
w[C(0x10e)] = !![], Object[D(0x110) + C(0x113)](exports, C(0x107), w), exports[C(0x11c)] = void (0x2 * -0x749 + 0x3e5 * -0x8 + 0x2dba);
const winston_1 = __importDefault(require(D(0x10f))), x = {};
x[C(0x114)] = !![];
const jsonLogFileFormat = winston_1[D(0x120)][D(0x101)][C(0x10b)](winston_1[D(0x120)][C(0x101)][D(0xff)](x), winston_1[C(0x120)][C(0x101)][C(0x11f)](), winston_1[D(0x120)][D(0x101)][C(0x12c) + 't']());
let env = C(0x12b);
process[C(0x11a)]?.[D(0x106)] && (env = process[C(0x11a)][D(0x106)]);
const level = env === D(0x12b) ? C(0x131) : C(0xfe), y = {};
function a() {
    const G = [
        '743uCIxdS',
        'info',
        '341aGoFQv',
        'debug',
        'errors',
        'File',
        'format',
        'maxsize',
        '14iMpWFu',
        '43100VKmWAb',
        'filename',
        'NODE_ENV',
        '__esModule',
        'Console',
        './logs/app',
        'handleExce',
        'combine',
        'error',
        '\x20-\x20',
        'value',
        'winston',
        'defineProp',
        '1751538GCLbyb',
        '906UQBWNx',
        'erty',
        'stack',
        '5iltVqc',
        'createLogg',
        '__importDe',
        '132265Ufwncq',
        '450yBRYNi',
        'env',
        '.logg',
        'logger',
        '176VYVGYi',
        'json',
        'timestamp',
        'default',
        'transports',
        '8796wXcnkH',
        'colorize',
        '6181877LILOVi',
        'Http',
        '4oIvZeL',
        'level',
        'ptions',
        'fault',
        'printf',
        'prod',
        'prettyPrin',
        'warn',
        '1732842MdNejN',
        'maxFiles'
    ];
    a = function () {
        return G;
    };
    return a();
}
y[D(0x114)] = !![];
const z = {};
z[D(0x105)] = C(0x109) + D(0x11b), z[D(0x127)] = C(0x10c), z[D(0x10a) + C(0x128)] = !![], z[D(0x102)] = 0xa00000, z[D(0x12f)] = 0xa;
const logger = winston_1[D(0x120)][C(0x116) + 'er']({
    'level': level,
    'format': jsonLogFileFormat,
    'transports': [
        new winston_1[(C(0x120))][(D(0x121))][(C(0x108))]({
            'format': winston_1[C(0x120)][D(0x101)][C(0x10b)](winston_1[C(0x120)][D(0x101)][D(0xff)](y), winston_1[C(0x120)][C(0x101)][C(0x123)](), winston_1[C(0x120)][C(0x101)][C(0x12a)](({
                level: c,
                message: d,
                timestamp: e,
                stack: f
            }) => {
                const F = D;
                if (f)
                    return c + ':\x20' + e + '\x20' + d + F(0x10d) + f;
                return c + ':\x20' + e + '\x20' + d;
            }))
        }),
        new winston_1[(D(0x120))][(D(0x121))][(D(0x100))](z),
        new winston_1[(C(0x120))][(D(0x121))][(C(0x125))]({
            'level': D(0x12d),
            'format': winston_1[D(0x120)][C(0x101)][D(0x11e)]()
        })
    ]
});
exports[D(0x11c)] = logger;