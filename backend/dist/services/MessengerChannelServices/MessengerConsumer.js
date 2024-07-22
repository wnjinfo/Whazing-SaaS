'use strict';
function a() {
    const y = [
        '4952rlXSHe',
        'messenger',
        './Messenge',
        'secret',
        'defineProp',
        'default',
        '/rabbitmq-',
        '__esModule',
        'jsonwebtok',
        '__importDe',
        'sage',
        '2txaunA',
        '1185464enQWqj',
        'start',
        'AMQP_URL',
        '788556rPsSaZ',
        'parse',
        'messages',
        '5995JIOqZS',
        'fault',
        '221968XCgmnz',
        '99490zAPMuq',
        'value',
        'env',
        'toString',
        'rHandleMes',
        'erty',
        'consume',
        'MOwmG',
        '../../libs',
        'content',
        '3932910ATXnpN',
        'ig/auth',
        '4759866zmQupS',
        'token',
        '49iklFHp',
        '11eQGbsl',
        'verify',
        'server',
        '../../conf'
    ];
    a = function () {
        return y;
    };
    return a();
}
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x91)) / (0x280 + 0x139a + -0x1619) + -parseInt(p(0x88)) / (-0x1 * 0x95 + -0x1 * 0xdc1 + 0xe58) * (-parseInt(p(0x8c)) / (0x924 + -0x2 * 0xc11 + 0x17 * 0xa7)) + -parseInt(q(0x7d)) / (0xccc + -0xb20 + 0x1a8 * -0x1) * (-parseInt(p(0x8f)) / (0xdd3 * 0x1 + 0x40 * 0x91 + -0x320e)) + -parseInt(q(0x9c)) / (-0xa93 + 0x107f * 0x1 + -0x5e6) + -parseInt(p(0x78)) / (0x52d * -0x1 + -0xc2f * 0x3 + 0x7 * 0x5f7) * (parseInt(p(0x89)) / (0xb1b + 0x895 + -0x11 * 0x128)) + parseInt(q(0x76)) / (0xfea + -0x17 * 0xb3 + 0x34) + parseInt(p(0x92)) / (-0x553 * 0x2 + 0xb * -0x26a + 0x253e) * (parseInt(p(0x79)) / (0x1 * 0xba7 + 0x61 * 0x54 + 0x2b70 * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3b94d * 0x5 + -0x7 * -0x1cd27 + -0x12ca0b));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x97 + 0x12dd + -0x12ff * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[r(0x86) + r(0x90)] || function (c) {
    const t = r;
    return c && c[t(0x84)] ? c : { 'default': c };
};
const o = {};
o[r(0x93)] = !![], Object[s(0x81) + s(0x97)](exports, r(0x84), o);
const jsonwebtoken_1 = require(s(0x85) + 'en'), rabbitmq_server_1 = __importDefault(require(r(0x9a) + s(0x83) + r(0x7b))), auth_1 = __importDefault(require(r(0x7c) + s(0x75))), MessengerHandleMessage_1 = __importDefault(require(s(0x7f) + r(0x96) + r(0x87))), MessengerConsumer = async () => {
        const u = r, v = r, d = {};
        d[u(0x99)] = v(0x7e);
        const e = d, f = new rabbitmq_server_1[(u(0x82))](process[u(0x94)][v(0x8b)] || '');
        await f[u(0x8a)](), f[v(0x98)](e[u(0x99)], g => {
            const w = v, x = v, h = JSON[w(0x8d)](g[x(0x9b)][x(0x95)]()), i = (-0x24e9 * 0x1 + -0x8 * 0xef + 0x2c61, jsonwebtoken_1[x(0x7a)])(h[w(0x77)], auth_1[w(0x82)][x(0x80)]);
            if (!i)
                return;
            (-0x1632 + 0x19fd * -0x1 + -0x302f * -0x1, MessengerHandleMessage_1[w(0x82)])(h[x(0x8e)]);
        });
    };
exports[s(0x82)] = MessengerConsumer;