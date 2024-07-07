'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x6b * 0x33 + -0x1e58 + 0x348b);
        let h = e[f];
        return h;
    }, b(c, d);
}
const C = b, D = b;
(function (c, d) {
    const A = b, B = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(A(0xf6)) / (-0x159c + -0xfef + -0x164 * -0x1b) * (parseInt(B(0x10f)) / (0x1c9e + 0x26ec + -0x4388)) + parseInt(A(0x10d)) / (0x1 * -0x5f7 + 0x16e4 * -0x1 + 0x1cde) * (parseInt(B(0xed)) / (-0x469 + 0xa * -0x3c0 + -0x1 * -0x29ed)) + -parseInt(B(0xe6)) / (-0x1f1c + -0xc7 * 0x28 + 0x3e39) * (parseInt(B(0x110)) / (-0x1 * -0xa6f + -0x11b * 0x11 + -0x862 * -0x1)) + parseInt(B(0x10a)) / (0x2e * 0x35 + -0x11ab + 0x82c * 0x1) * (-parseInt(B(0x109)) / (-0x1 * -0x1f7b + -0x1 * 0xa3d + 0x712 * -0x3)) + -parseInt(A(0xf1)) / (0x2 * 0xa21 + 0x673 + 0x2 * -0xd56) * (parseInt(A(0xfe)) / (-0x1c29 + -0x21a8 + -0x1 * -0x3ddb)) + -parseInt(B(0x102)) / (-0x1043 + -0x14f5 * 0x1 + 0x2543 * 0x1) * (-parseInt(A(0x108)) / (0x2 * 0xd1f + -0xee2 + -0x8 * 0x16a)) + parseInt(A(0xe4)) / (-0x124c + -0x13 * -0xd + 0x1162) * (parseInt(A(0x100)) / (-0x3 * -0x80e + 0x29e + 0x1aba * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x11 * -0xe392 + 0x10f0c1 + -0x16389e));
function a() {
    const G = [
        '868JBXUMO',
        'value',
        '429qbEswa',
        'default',
        'stack',
        'prod',
        'error',
        'printf',
        '194664ihowCG',
        '1978232qhbPpC',
        '7CjLfDd',
        'Http',
        'fault',
        '3yqzeBM',
        'filename',
        '14834DioMnz',
        '12KnCrHJ',
        '\x20-\x20',
        'maxsize',
        '__esModule',
        'json',
        '__importDe',
        'info',
        'createLogg',
        'ptions',
        '225225oxbUgt',
        'Console',
        '1151275pHmtuC',
        'defineProp',
        'transports',
        'winston',
        'prettyPrin',
        'errors',
        'NODE_ENV',
        '4747604KSRrRC',
        'warn',
        'colorize',
        'erty',
        '18qXytun',
        'debug',
        './logs/app',
        'maxFiles',
        '.logg',
        '41Njwsbe',
        'level',
        'logger',
        'File',
        'timestamp',
        'format',
        'handleExce',
        'combine',
        '6187570hvefpk',
        'env'
    ];
    a = function () {
        return G;
    };
    return a();
}
var __importDefault = this && this[C(0x115) + D(0x10c)] || function (c) {
    const E = D;
    return c && c[E(0x113)] ? c : { 'default': c };
};
const w = {};
w[D(0x101)] = !![], Object[C(0xe7) + D(0xf0)](exports, C(0x113), w), exports[D(0xf8)] = void (0x1703 + 0x1d21 + -0x3424);
const winston_1 = __importDefault(require(D(0xe9))), x = {};
x[C(0x104)] = !![];
const jsonLogFileFormat = winston_1[C(0x103)][C(0xfb)][D(0xfd)](winston_1[D(0x103)][C(0xfb)][D(0xeb)](x), winston_1[C(0x103)][C(0xfb)][C(0xfa)](), winston_1[C(0x103)][C(0xfb)][D(0xea) + 't']());
let env = D(0x105);
process[D(0xff)]?.[D(0xec)] && (env = process[D(0xff)][D(0xec)]);
const level = env === D(0x105) ? D(0x116) : D(0xf2), y = {};
y[C(0x104)] = !![];
const z = {};
z[D(0x10e)] = C(0xf3) + C(0xf5), z[D(0xf7)] = D(0x106), z[C(0xfc) + D(0xe3)] = !![], z[C(0x112)] = 0xa00000, z[D(0xf4)] = 0xa;
const logger = winston_1[D(0x103)][D(0xe2) + 'er']({
    'level': level,
    'format': jsonLogFileFormat,
    'transports': [
        new winston_1[(C(0x103))][(C(0xe8))][(D(0xe5))]({
            'format': winston_1[D(0x103)][C(0xfb)][D(0xfd)](winston_1[D(0x103)][C(0xfb)][C(0xeb)](y), winston_1[D(0x103)][C(0xfb)][C(0xef)](), winston_1[C(0x103)][C(0xfb)][C(0x107)](({
                level: c,
                message: d,
                timestamp: e,
                stack: f
            }) => {
                const F = C;
                if (f)
                    return c + ':\x20' + e + '\x20' + d + F(0x111) + f;
                return c + ':\x20' + e + '\x20' + d;
            }))
        }),
        new winston_1[(C(0x103))][(C(0xe8))][(C(0xf9))](z),
        new winston_1[(D(0x103))][(C(0xe8))][(D(0x10b))]({
            'level': C(0xee),
            'format': winston_1[C(0x103)][C(0xfb)][C(0x114)]()
        })
    ]
});
exports[C(0xf8)] = logger;