'use strict';
const r = b, s = b;
function a() {
    const y = [
        'ig/auth',
        'parse',
        '23130ZgXtId',
        '__esModule',
        'messages',
        '2120aAqVbG',
        '/rabbitmq-',
        '2qyhozA',
        'token',
        'env',
        'messenger',
        'sage',
        'jsonwebtok',
        'erty',
        '1146513MGLMcn',
        'start',
        'value',
        'toString',
        'rHandleMes',
        'AMQP_URL',
        '__importDe',
        'deUnb',
        '3073836jBLHFN',
        'defineProp',
        'server',
        '4711090mMEcmw',
        'secret',
        'default',
        '../../libs',
        'fault',
        './Messenge',
        'consume',
        '3068121BpHkfo',
        'verify',
        'content',
        '1527357QvFmGh',
        '../../conf',
        '3855834qsdABs'
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
            const f = parseInt(p(0x8f)) / (0xb50 + -0x14ec + -0x99d * -0x1) + -parseInt(q(0x88)) / (-0x1cf + -0xc8f * 0x1 + -0xe60 * -0x1) * (parseInt(q(0xa4)) / (0x1 * -0x1604 + -0x17f4 + -0x2dfb * -0x1)) + parseInt(q(0x97)) / (0xbc5 * -0x1 + -0x12af + 0x1e78) + parseInt(p(0x9a)) / (-0xff2 + -0xeb8 + 0x1eaf) + -parseInt(q(0xa6)) / (-0xb43 + 0xe3 * 0x1 + -0xb * -0xf2) + -parseInt(p(0xa1)) / (0x16 * 0xda + -0x66f + 0xc46 * -0x1) + parseInt(p(0x86)) / (-0x1 * 0x925 + 0x8 * 0x1c4 + 0x1 * -0x4f3) * (-parseInt(p(0xa9)) / (0xd25 + -0x25 * 0x5f + -0x3 * -0x35));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xc422e + 0x10b5e9 + -0xaae4 * 0x1e));
var __importDefault = this && this[r(0x95) + s(0x9e)] || function (c) {
    const t = s;
    return c && c[t(0xaa)] ? c : { 'default': c };
};
const o = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x6be * 0x4 + 0x25f * -0x7 + -0x9d9);
        let h = e[f];
        return h;
    }, b(c, d);
}
o[r(0x91)] = !![], Object[r(0x98) + r(0x8e)](exports, r(0xaa), o);
const jsonwebtoken_1 = require(s(0x8d) + 'en'), rabbitmq_server_1 = __importDefault(require(r(0x9d) + r(0x87) + s(0x99))), auth_1 = __importDefault(require(r(0xa5) + r(0xa7))), MessengerHandleMessage_1 = __importDefault(require(r(0x9f) + r(0x93) + r(0x8c))), MessengerConsumer = async () => {
        const u = r, v = s, d = {};
        d[u(0x96)] = u(0x8b);
        const e = d, f = new rabbitmq_server_1[(v(0x9c))](process[u(0x8a)][v(0x94)] || '');
        await f[u(0x90)](), f[u(0xa0)](e[v(0x96)], g => {
            const w = u, x = u, h = JSON[w(0xa8)](g[w(0xa3)][w(0x92)]()), i = (-0x2087 * 0x1 + 0x421 + 0x1c66, jsonwebtoken_1[w(0xa2)])(h[w(0x89)], auth_1[x(0x9c)][x(0x9b)]);
            if (!i)
                return;
            (0x2 * -0x555 + 0x137 * 0x17 + 0x1147 * -0x1, MessengerHandleMessage_1[w(0x9c)])(h[x(0xab)]);
        });
    };
exports[s(0x9c)] = MessengerConsumer;