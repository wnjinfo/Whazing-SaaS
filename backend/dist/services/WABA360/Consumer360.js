'use strict';
const r = b, s = b;
function a() {
    const y = [
        '10090rgbCDC',
        'whatsappId',
        '282350vRgNyd',
        'ig/auth',
        'messages',
        'secret',
        '12xSrLkN',
        'verify',
        'default',
        '11393361OjTsLn',
        'consume',
        'waba360',
        'defineProp',
        'erty',
        'start',
        '../../libs',
        'AMQP_URL',
        '2726982rRHdkJ',
        'token',
        '1348509vemsGp',
        '4643088eZEiFj',
        './HandleMe',
        '/rabbitmq-',
        'value',
        '465942pbmvAy',
        'env',
        '__importDe',
        'content',
        'ssage360',
        '../../conf',
        'jsonwebtok',
        'PNkin',
        '__esModule',
        'parse',
        'server',
        '38574GouwNN',
        'fault',
        'toString',
        '28RPjPGt'
    ];
    a = function () {
        return y;
    };
    return a();
}
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0xfb)) / (0x1492 + -0xb76 + -0x91b) + -parseInt(p(0xf9)) / (-0x2676 + -0xe * -0x10 + 0x2598) + parseInt(p(0x100)) / (-0x8c2 + 0x1bb6 * -0x1 + 0x247b) * (-parseInt(q(0xe7)) / (-0x20fe * -0x1 + -0xc66 + -0x1494)) + parseInt(q(0xea)) / (-0x2 * -0xfcb + 0x10e3 + -0x3074) * (-parseInt(p(0xee)) / (-0x12ee + 0xfe1 + -0x1 * -0x313)) + -parseInt(p(0xf1)) / (0x1506 + 0x220f * -0x1 + 0x58 * 0x26) + -parseInt(q(0xfc)) / (0x1 * -0xcf2 + -0x6e5 * -0x4 + -0xe9a) + -parseInt(q(0xe4)) / (0x24da + 0x1cbb + -0x418c) * (-parseInt(p(0xe8)) / (-0x3b2 + -0x296 + 0x652));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1516c4 + -0x221 * 0x6ff + 0x31bce8));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1b * 0xbc + -0x251 * 0x1 + 0x89 * 0x2b);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[r(0x102) + s(0xe5)] || function (c) {
    const t = s;
    return c && c[t(0xe1)] ? c : { 'default': c };
};
const o = {};
o[r(0xff)] = !![], Object[r(0xf4) + r(0xf5)](exports, r(0xe1), o);
const jsonwebtoken_1 = require(s(0xdf) + 'en'), rabbitmq_server_1 = __importDefault(require(r(0xf7) + s(0xfe) + s(0xe3))), auth_1 = __importDefault(require(r(0xde) + r(0xeb))), HandleMessage360_1 = __importDefault(require(r(0xfd) + r(0x104))), Consumer360 = async () => {
        const u = s, v = r, d = {};
        d[u(0xe0)] = u(0xf3);
        const e = d, f = new rabbitmq_server_1[(v(0xf0))](process[v(0x101)][u(0xf8)] || '');
        await f[v(0xf6)](), f[u(0xf2)](e[v(0xe0)], g => {
            const w = v, x = v, h = JSON[w(0xe2)](g[w(0x103)][w(0xe6)]()), i = (-0x2 * 0xced + -0x2061 + 0x3a3b, jsonwebtoken_1[w(0xef)])(h[w(0xfa)], auth_1[x(0xf0)][x(0xed)]);
            (0x1412 + -0x1106 + -0x30c, HandleMessage360_1[x(0xf0)])(h[w(0xec)], i[x(0xe9)]);
        });
    };
exports[s(0xf0)] = Consumer360;