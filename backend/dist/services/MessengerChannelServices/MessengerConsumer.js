'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0xe6)) / (0x406 + -0x705 + -0x2 * -0x180) * (parseInt(q(0xd2)) / (0xb76 + -0x6a4 + 0x58 * -0xe)) + -parseInt(p(0xee)) / (0x1659 + -0x2 * -0xea7 + -0x1 * 0x33a4) * (parseInt(q(0xd3)) / (0x7 * -0x1d0 + -0x1b42 + 0x27f6)) + -parseInt(p(0xe4)) / (-0x7e8 + -0x176f + 0x24 * 0xdf) * (parseInt(p(0xe2)) / (-0x1 * -0x17bd + 0x2677 * -0x1 + 0xec0)) + -parseInt(p(0xe9)) / (-0x1788 + 0x3b * -0x51 + -0x1 * -0x2a3a) * (-parseInt(q(0xd5)) / (0x3 * 0x665 + -0xbe7 + -0x740 * 0x1)) + parseInt(p(0xea)) / (0xa * 0x2ee + 0xf3e * 0x1 + -0x2c81) * (parseInt(p(0xdb)) / (0xb * -0x115 + 0x1b24 + -0xf33)) + parseInt(p(0xc7)) / (0x1be7 + -0x755 + -0x1487) * (-parseInt(q(0xeb)) / (-0x1e0e + -0x7d * 0x15 + 0x285b)) + parseInt(p(0xd7)) / (-0x15a9 + -0x2581 * -0x1 + -0x137 * 0xd) * (parseInt(p(0xca)) / (-0x1 * -0x27 + 0x1e8f + 0x6d * -0x48));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x173ef2 + -0x4de87 + -0x5b079));
var __importDefault = this && this[r(0xd6) + s(0xda)] || function (c) {
    const t = r;
    return c && c[t(0xe5)] ? c : { 'default': c };
};
const o = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xfe * 0xb + 0x7 * -0x51c + -0x668 * -0x4);
        let h = e[f];
        return h;
    }, b(c, d);
}
o[r(0xc6)] = !![], Object[r(0xd9) + s(0xcb)](exports, r(0xe5), o);
const jsonwebtoken_1 = require(r(0xe7) + 'en'), rabbitmq_server_1 = __importDefault(require(s(0xd4) + r(0xcc) + r(0xc8))), auth_1 = __importDefault(require(r(0xc9) + s(0xe1))), MessengerHandleMessage_1 = __importDefault(require(r(0xcd) + s(0xe0) + r(0xd8))), MessengerConsumer = async () => {
        const u = r, v = r, d = {};
        d[u(0xdf)] = u(0xec);
        const e = d, f = new rabbitmq_server_1[(u(0xe8))](process[v(0xce)][u(0xf0)] || '');
        await f[v(0xcf)](), f[v(0xde)](e[u(0xdf)], g => {
            const w = u, x = v, h = JSON[w(0xd0)](g[x(0xdc)][x(0xd1)]()), i = (-0x26c7 + -0x14f1 * -0x1 + -0x8eb * -0x2, jsonwebtoken_1[w(0xef)])(h[x(0xe3)], auth_1[x(0xe8)][x(0xed)]);
            if (!i)
                return;
            (-0x13 * -0x1e1 + 0x53 * 0x1f + 0x30 * -0xf4, MessengerHandleMessage_1[w(0xe8)])(h[x(0xdd)]);
        });
    };
exports[s(0xe8)] = MessengerConsumer;
function a() {
    const y = [
        'AMQP_URL',
        'value',
        '247819adciZs',
        'server',
        '../../conf',
        '182aZCFly',
        'erty',
        '/rabbitmq-',
        './Messenge',
        'env',
        'start',
        'parse',
        'toString',
        '26ObLQbL',
        '4926280TbFWLD',
        '../../libs',
        '65792LCkVNa',
        '__importDe',
        '1693159gdJNgM',
        'sage',
        'defineProp',
        'fault',
        '2750ysoygO',
        'content',
        'messages',
        'consume',
        'CpEcO',
        'rHandleMes',
        'ig/auth',
        '228ZtvInp',
        'token',
        '59170wjsQNL',
        '__esModule',
        '105863pAnVZo',
        'jsonwebtok',
        'default',
        '1085IIKNPE',
        '53001zkSEhK',
        '372kuUbIT',
        'messenger',
        'secret',
        '3DaigsY',
        'verify'
    ];
    a = function () {
        return y;
    };
    return a();
}