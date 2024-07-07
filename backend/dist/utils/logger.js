'use strict';
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(A(0xef)) / (0x26f2 + 0x8c7 + 0xc * -0x3fa) + -parseInt(A(0xf3)) / (-0x631 * -0x1 + -0x4 * 0x6af + 0x148d) + -parseInt(A(0xf9)) / (-0x6b3 + -0x5ce + -0x3 * -0x42c) + parseInt(B(0xf5)) / (0x94f + 0x2 * -0xad + 0x13 * -0x6b) + -parseInt(B(0xdf)) / (0x40c + 0x201 * 0x12 + -0x5 * 0x805) + parseInt(A(0xe0)) / (-0x1c37 + -0x1 * 0x204b + 0x1a * 0x254) + -parseInt(B(0xf2)) / (-0x1a60 + 0xe76 + 0xbf1) * (-parseInt(B(0xde)) / (0x3b * 0x19 + -0xf19 + -0xda * -0xb));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1b7 * -0x123 + 0x4170 + 0x54ca * 0x11));
var __importDefault = this && this[C(0xea) + C(0xe6)] || function (c) {
    const E = C;
    return c && c[E(0xff)] ? c : { 'default': c };
};
const w = {};
function a() {
    const G = [
        'erty',
        '__importDe',
        'transports',
        'combine',
        './logs/app',
        'prettyPrin',
        '155158DwZNLw',
        'level',
        'warn',
        '1841fMKBRb',
        '791884qaCkHs',
        'json',
        '593752eQFCcI',
        'colorize',
        'value',
        'timestamp',
        '523176PZEeBX',
        'env',
        'stack',
        'info',
        'prod',
        '.logg',
        '__esModule',
        'debug',
        'maxFiles',
        'errors',
        'createLogg',
        'format',
        'Console',
        'winston',
        'error',
        'defineProp',
        'handleExce',
        'File',
        'maxsize',
        'filename',
        '21592TsMEjg',
        '563815ZpAVOh',
        '1427910LPCvgf',
        'NODE_ENV',
        'default',
        'Http',
        'logger',
        'printf',
        'fault',
        '\x20-\x20',
        'ptions'
    ];
    a = function () {
        return G;
    };
    return a();
}
w[D(0xf7)] = !![], Object[D(0xd9) + D(0xe9)](exports, D(0xff), w), exports[C(0xe4)] = void (0x38 * 0x47 + 0x11c1 + 0x2149 * -0x1);
const winston_1 = __importDefault(require(C(0xd7))), x = {};
x[C(0xfb)] = !![];
const jsonLogFileFormat = winston_1[D(0xe2)][D(0xd5)][C(0xec)](winston_1[D(0xe2)][D(0xd5)][D(0x102)](x), winston_1[C(0xe2)][D(0xd5)][D(0xf8)](), winston_1[D(0xe2)][C(0xd5)][C(0xee) + 't']());
let env = C(0xfd);
process[D(0xfa)]?.[C(0xe1)] && (env = process[C(0xfa)][C(0xe1)]);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x959 + -0x239e + 0x1b1a);
        let h = e[f];
        return h;
    }, b(c, d);
}
const level = env === D(0xfd) ? D(0xfc) : D(0x100), y = {};
y[C(0xfb)] = !![];
const z = {};
z[D(0xdd)] = D(0xed) + D(0xfe), z[C(0xf0)] = D(0xd8), z[C(0xda) + D(0xe8)] = !![], z[D(0xdc)] = 0xa00000, z[D(0x101)] = 0xa;
const logger = winston_1[D(0xe2)][C(0x103) + 'er']({
    'level': level,
    'format': jsonLogFileFormat,
    'transports': [
        new winston_1[(C(0xe2))][(D(0xeb))][(D(0xd6))]({
            'format': winston_1[D(0xe2)][D(0xd5)][D(0xec)](winston_1[D(0xe2)][D(0xd5)][C(0x102)](y), winston_1[C(0xe2)][C(0xd5)][D(0xf6)](), winston_1[C(0xe2)][D(0xd5)][D(0xe5)](({
                level: c,
                message: d,
                timestamp: e,
                stack: f
            }) => {
                const F = C;
                if (f)
                    return c + ':\x20' + e + '\x20' + d + F(0xe7) + f;
                return c + ':\x20' + e + '\x20' + d;
            }))
        }),
        new winston_1[(C(0xe2))][(D(0xeb))][(D(0xdb))](z),
        new winston_1[(C(0xe2))][(C(0xeb))][(D(0xe3))]({
            'level': D(0xf1),
            'format': winston_1[D(0xe2)][C(0xd5)][D(0xf4)]()
        })
    ]
});
exports[C(0xe4)] = logger;