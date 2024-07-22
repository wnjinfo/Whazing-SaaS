'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0xdc)) / (0x1b8e + 0xdae + -0x293b * 0x1) * (parseInt(q(0xc9)) / (-0xcc + -0x469 * 0x1 + -0x5 * -0x10b)) + -parseInt(q(0xbd)) / (0x400 * -0x1 + 0x223f + -0x1e3c) + parseInt(p(0xc0)) / (0x2 * -0xb5b + 0xff5 * -0x2 + 0x36a4) + -parseInt(q(0xd8)) / (0x2069 + 0x50 * -0xe + -0x1c04) + -parseInt(p(0xd4)) / (-0x13 * 0xff + 0x4eb * -0x3 + 0x21b4) * (parseInt(p(0xda)) / (0x88a + 0x9 * -0x10d + 0xb * 0x16)) + parseInt(q(0xc6)) / (-0x2631 + 0x1fd1 + 0x668) + parseInt(q(0xba)) / (0x5ab * 0x2 + 0x3 * -0x679 + -0x2 * -0x40f);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x4a0f1 + 0xda1c + 0x3efe * -0x1));
function a() {
    const y = [
        'token',
        '__importDe',
        '15616IiIXps',
        'start',
        'value',
        'ssage360',
        'default',
        '../../libs',
        'consume',
        './HandleMe',
        'verify',
        'parse',
        '/rabbitmq-',
        '267738KuxPRx',
        'content',
        'ig/auth',
        'messages',
        '2347050CeBMKC',
        'AMQP_URL',
        '14dSeFFU',
        'erty',
        '30wtBfKY',
        'defineProp',
        'env',
        'waba360',
        '3311217jlJMGj',
        'fPllU',
        'jsonwebtok',
        '953658JdTexo',
        'toString',
        'whatsappId',
        '415652AmjVBx',
        'secret',
        'fault',
        '__esModule',
        'server',
        '../../conf',
        '4108248EEMXbJ'
    ];
    a = function () {
        return y;
    };
    return a();
}
var __importDefault = this && this[r(0xc8) + r(0xc2)] || function (c) {
    const t = s;
    return c && c[t(0xc3)] ? c : { 'default': c };
};
const o = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1e03 + -0x602 * 0x3 + 0x30c0);
        let h = e[f];
        return h;
    }, b(c, d);
}
o[r(0xcb)] = !![], Object[r(0xb7) + s(0xdb)](exports, r(0xc3), o);
const jsonwebtoken_1 = require(r(0xbc) + 'en'), rabbitmq_server_1 = __importDefault(require(s(0xce) + s(0xd3) + s(0xc4))), auth_1 = __importDefault(require(s(0xc5) + s(0xd6))), HandleMessage360_1 = __importDefault(require(s(0xd0) + r(0xcc))), Consumer360 = async () => {
        const u = s, v = r, d = {};
        d[u(0xbb)] = u(0xb9);
        const e = d, f = new rabbitmq_server_1[(u(0xcd))](process[v(0xb8)][v(0xd9)] || '');
        await f[u(0xca)](), f[v(0xcf)](e[u(0xbb)], g => {
            const w = u, x = v, h = JSON[w(0xd2)](g[x(0xd5)][x(0xbe)]()), i = (-0x1db2 + 0x3 * 0x515 + -0x4d1 * -0x3, jsonwebtoken_1[w(0xd1)])(h[x(0xc7)], auth_1[w(0xcd)][x(0xc1)]);
            (-0x5 * 0x27a + -0x1 * -0x1907 + -0xca5, HandleMessage360_1[w(0xcd)])(h[x(0xd7)], i[x(0xbf)]);
        });
    };
exports[r(0xcd)] = Consumer360;