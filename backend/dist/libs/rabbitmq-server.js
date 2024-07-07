'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1224 + 0x836 * 0x3 + 0x89 * -0x9);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const K = [
        'erty',
        '../utils/s',
        '42644asECyj',
        'from',
        'conn',
        'error',
        'MIN_SLEEP_',
        'publishInE',
        'nack',
        'ack',
        'channel',
        '13302YIyMnh',
        'INTERVAL',
        'amqplib',
        'tsapp',
        'defineProp',
        'consumeWha',
        'Hhrlz',
        'start',
        'default',
        'waba360',
        'prefetch',
        'mTime',
        'logger',
        '../utils/l',
        'MAX_SLEEP_',
        '3142773akoWrl',
        '9440JmwTBw',
        'nel',
        '882443nRzvUD',
        '1914718PnKpUw',
        'sendToQueu',
        'ngjMn',
        'messenger',
        'assertQueu',
        'leepRandom',
        'KWtdk',
        'durable',
        'value',
        'env',
        '5462248zSNVIt',
        'publish',
        'URMwv',
        'CXUWI',
        'Time',
        'sleepRando',
        '__esModule',
        'consume',
        'connect',
        'createChan',
        'ogger',
        'mbmKN',
        '152OcoiEW',
        'persistent',
        'uri',
        '855895UmDXSc',
        'YVfOa',
        '42mLHHfg',
        'publishInQ',
        'QQrSy',
        'wexPJ',
        'ueue',
        'xchange'
    ];
    a = function () {
        return K;
    };
    return a();
}
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x1cf)) / (-0x1 * -0x21d7 + 0x34 * -0x6f + -0xb4a) + parseInt(r(0x1d0)) / (0x5c3 * -0x5 + 0x7a1 + 0x1530) + -parseInt(s(0x1cc)) / (-0xf * 0x17b + 0x1 * -0x231 + 0x823 * 0x3) + parseInt(s(0x1da)) / (0x2347 + -0x3 * 0x1cf + -0x1dd6) + parseInt(r(0x1e9)) / (-0x952 + -0x1 * -0x1d95 + -0x143e) * (-parseInt(r(0x1eb)) / (-0x89 * 0x25 + -0x5c + -0x142f * -0x1)) + -parseInt(r(0x1b4)) / (0x1c * -0x11b + 0x2 * -0x239 + 0x236d) * (-parseInt(r(0x1e6)) / (-0x1 * 0x2291 + -0x256a + 0x4cd * 0xf)) + -parseInt(r(0x1bd)) / (-0x1d55 + 0x1a1f + 0x115 * 0x3) * (-parseInt(r(0x1cd)) / (0x1 * 0x1948 + -0x6d * 0x37 + -0x1 * 0x1d3));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2 * -0x3ab12 + -0x3273d * -0x2 + 0x5e5fc * 0x2));
const q = {};
q[t(0x1d8)] = !![], Object[t(0x1c1) + t(0x1b2)](exports, t(0x1e0), q);
const amqplib_1 = require(u(0x1bf)), logger_1 = require(u(0x1ca) + u(0x1e4)), sleepRandomTime_1 = require(u(0x1b3) + t(0x1d5) + t(0x1de));
class RabbitmqServer {
    constructor(c) {
        const v = u;
        this[v(0x1e8)] = c;
    }
    async [t(0x1c4)]() {
        const w = t, x = u, f = {};
        f[w(0x1ea)] = w(0x1c6), f[w(0x1ae)] = w(0x1d3);
        const g = f;
        this[w(0x1b6)] = await (-0x1f5e + 0x1 * -0x16c6 + 0xad4 * 0x5, amqplib_1[x(0x1e2)])(this[w(0x1e8)]), this[x(0x1bc)] = await this[x(0x1b6)][x(0x1e3) + w(0x1ce)]();
        const h = {};
        h[x(0x1d7)] = !![], await this[x(0x1bc)][x(0x1d4) + 'e'](g[w(0x1ea)], h);
        const i = {};
        i[w(0x1d7)] = !![], await this[x(0x1bc)][x(0x1d4) + 'e'](g[w(0x1ae)], i);
    }
    async [u(0x1ad) + t(0x1b0)](e, f) {
        const y = t, z = t, g = {};
        g[y(0x1d7)] = !![], await this[y(0x1bc)][z(0x1d4) + 'e'](e, g);
        const h = {};
        return h[y(0x1e7)] = !![], this[y(0x1bc)][y(0x1d1) + 'e'](e, Buffer[z(0x1b5)](f), h);
    }
    async [u(0x1b9) + u(0x1b1)](d, e, f) {
        const A = u, B = u, g = {};
        return g[A(0x1e7)] = !![], this[A(0x1bc)][A(0x1db)](d, e, Buffer[B(0x1b5)](f), g);
    }
    async [t(0x1c2) + t(0x1c0)](d, e) {
        const C = u, D = t, f = {
                'CXUWI': function (h, i) {
                    return h(i);
                },
                'mbmKN': function (h, i) {
                    return h(i);
                },
                'Hhrlz': C(0x1c2) + C(0x1c0)
            };
        this[C(0x1bc)][C(0x1c7)](-0x3 * 0xba1 + -0x8aa * 0x3 + 0x3ceb, ![]);
        const g = {};
        g[D(0x1d7)] = !![], await this[D(0x1bc)][C(0x1d4) + 'e'](d, g), this[D(0x1bc)][C(0x1e1)](d, async h => {
            const E = C, F = D;
            try {
                await f[E(0x1dd)](e, h), await (-0x234c + 0xd9c + 0x15b0, sleepRandomTime_1[F(0x1df) + E(0x1c8)])({
                    'minMilliseconds': f[F(0x1e5)](Number, process[F(0x1d9)][E(0x1b8) + E(0x1be)] || -0x351 + 0x17b8 + -0x1273),
                    'maxMilliseconds': f[F(0x1dd)](Number, process[E(0x1d9)][F(0x1cb) + E(0x1be)] || 0x1e3 * 0x7 + -0x1108 + -0x1 * -0xba3)
                }), this[E(0x1bc)][F(0x1bb)](h);
                return;
            } catch (i) {
                this[E(0x1bc)][F(0x1ba)](h), logger_1[E(0x1c9)][E(0x1b7)](f[E(0x1c3)], i);
            }
        });
    }
    async [u(0x1e1)](c, d) {
        const G = u, H = u, e = {
                'URMwv': function (f, g) {
                    return f(g);
                },
                'ngjMn': function (f, g) {
                    return f !== g;
                },
                'KWtdk': G(0x1af)
            };
        return this[H(0x1bc)][H(0x1e1)](c, f => {
            const I = H, J = H;
            if (e[I(0x1d2)](e[J(0x1d6)], e[I(0x1d6)]))
                try {
                    e[J(0x1dc)](k, l), this[J(0x1bc)][I(0x1bb)](m);
                    return;
                } catch (h) {
                    o[I(0x1c9)][I(0x1b7)](h);
                }
            else
                try {
                    e[J(0x1dc)](d, f), this[I(0x1bc)][J(0x1bb)](f);
                    return;
                } catch (h) {
                    logger_1[J(0x1c9)][I(0x1b7)](h);
                }
        });
    }
}
exports[u(0x1c5)] = RabbitmqServer;