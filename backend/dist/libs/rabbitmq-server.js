'use strict';
function a() {
    const K = [
        'xHlCa',
        'MAX_SLEEP_',
        '666ApMxyu',
        'jwxpn',
        'value',
        'NtrcR',
        'conn',
        'oTFpf',
        'gtWti',
        'QTLiI',
        'messenger',
        'waba360',
        'Time',
        'sendToQueu',
        'kLHZf',
        'vKoXQ',
        'MurKR',
        'ogger',
        'oPPSH',
        'publish',
        'INTERVAL',
        'xchange',
        'mTime',
        'phdvR',
        'CHwbZ',
        'logger',
        '1588554vRkwMC',
        'uri',
        'publishInE',
        'consume',
        'default',
        'env',
        'cLzAb',
        'erty',
        'ack',
        'consumeWha',
        'uuxDi',
        '../utils/s',
        'tsapp',
        'leepRandom',
        'sleepRando',
        '13596570dpkFPO',
        'createChan',
        'xNpqu',
        'connect',
        'assertQueu',
        'ETSlj',
        'QLPnh',
        'start',
        'durable',
        '../utils/l',
        'Xqtpw',
        'nel',
        'channel',
        'MKVmW',
        '593cUwWvv',
        'nack',
        '441NObinu',
        'error',
        '501954eSLfGa',
        'persistent',
        'defineProp',
        'SAHOo',
        '33432cByqqo',
        'amqplib',
        'publishInQ',
        '1483436yDmuoy',
        'MIN_SLEEP_',
        '694195vlGOaR',
        'ueue',
        'prefetch',
        '__esModule',
        'from'
    ];
    a = function () {
        return K;
    };
    return a();
}
const t = b, u = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1f0d * -0x1 + 0x1f5 * -0x11 + 0x3be);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x1c1)) / (-0x656 * 0x5 + 0x561 + 0x1a4e) * (-parseInt(r(0x18c)) / (0xe87 + 0x1705 + 0x2 * -0x12c5)) + -parseInt(r(0x1a4)) / (-0x2 * -0xbc + 0x37 * 0x1f + 0x1 * -0x81e) + -parseInt(s(0x1cc)) / (-0x1 * 0x418 + 0x1 * -0x7c1 + 0xbdd) + parseInt(r(0x1ce)) / (-0xaf * -0x14 + -0x155 + -0xc52) + parseInt(s(0x1c5)) / (0x222 * -0x3 + -0x3 * -0x7a2 + -0x2bf * 0x6) + parseInt(r(0x1c3)) / (-0x1ff * -0xe + 0x1a55 + -0x3640) * (-parseInt(r(0x1c9)) / (-0xb27 + -0x1514 + 0x2043)) + parseInt(s(0x1b3)) / (0x5 * 0x232 + 0x16f * -0x2 + -0x813);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x443a7 + 0x29e46 + 0x752ea));
const q = {};
q[t(0x18e)] = !![], Object[u(0x1c7) + t(0x1ab)](exports, u(0x188), q);
const amqplib_1 = require(t(0x1ca)), logger_1 = require(t(0x1bc) + u(0x19b)), sleepRandomTime_1 = require(u(0x1af) + u(0x1b1) + u(0x196));
class RabbitmqServer {
    constructor(c) {
        const v = t;
        this[v(0x1a5)] = c;
    }
    async [t(0x1ba)]() {
        const w = t, x = u, f = {};
        f[w(0x1a2)] = w(0x195), f[x(0x19a)] = x(0x194);
        const g = f;
        this[x(0x190)] = await (0x1109 + -0x23e7 + 0x12de, amqplib_1[x(0x1b6)])(this[x(0x1a5)]), this[x(0x1bf)] = await this[w(0x190)][w(0x1b4) + x(0x1be)]();
        const h = {};
        h[x(0x1bb)] = !![], await this[w(0x1bf)][w(0x1b7) + 'e'](g[x(0x1a2)], h);
        const i = {};
        i[x(0x1bb)] = !![], await this[w(0x1bf)][x(0x1b7) + 'e'](g[x(0x19a)], i);
    }
    async [t(0x1cb) + u(0x186)](e, f) {
        const y = t, z = t, g = {};
        g[y(0x1bb)] = !![], await this[y(0x1bf)][y(0x1b7) + 'e'](e, g);
        const h = {};
        return h[z(0x1c6)] = !![], this[z(0x1bf)][z(0x197) + 'e'](e, Buffer[z(0x189)](f), h);
    }
    async [t(0x1a6) + t(0x19f)](d, e, f) {
        const A = t, B = u, g = {};
        return g[A(0x1c6)] = !![], this[A(0x1bf)][B(0x19d)](d, e, Buffer[A(0x189)](f), g);
    }
    async [u(0x1ad) + t(0x1b0)](d, e) {
        const C = u, D = u, f = {
                'xNpqu': C(0x1ad) + C(0x1b0),
                'uuxDi': function (h, i) {
                    return h === i;
                },
                'SAHOo': D(0x1c0),
                'xHlCa': function (h, i) {
                    return h === i;
                },
                'QLPnh': D(0x1aa),
                'Xqtpw': C(0x199),
                'NtrcR': function (h, i) {
                    return h(i);
                },
                'ETSlj': function (h, i) {
                    return h(i);
                },
                'phdvR': function (h, i) {
                    return h !== i;
                },
                'jwxpn': D(0x19c),
                'kLHZf': D(0x191)
            };
        this[C(0x1bf)][C(0x187)](0x169 + 0xb73 + -0x3 * 0x446, ![]);
        const g = {};
        g[C(0x1bb)] = !![], await this[C(0x1bf)][C(0x1b7) + 'e'](d, g), this[C(0x1bf)][C(0x1a7)](d, async h => {
            const E = D, F = C, i = {};
            i[E(0x193)] = f[E(0x1b5)];
            const j = i;
            if (f[E(0x1ae)](f[E(0x1c8)], f[F(0x1c8)]))
                try {
                    if (f[F(0x18a)](f[F(0x1b9)], f[E(0x1bd)]))
                        e[F(0x1a3)][F(0x1c4)](f);
                    else {
                        await f[F(0x18f)](e, h), await (-0x25b1 + -0x2 * -0xf31 + 0x74f, sleepRandomTime_1[E(0x1b2) + F(0x1a0)])({
                            'minMilliseconds': f[F(0x18f)](Number, process[F(0x1a9)][F(0x1cd) + E(0x19e)] || -0x7f * -0x32 + 0x3 * -0x9c8 + 0x67e),
                            'maxMilliseconds': f[E(0x1b8)](Number, process[E(0x1a9)][E(0x18b) + E(0x19e)] || 0x1c0e + 0x313 * 0x7 + -0x29c3)
                        }), this[F(0x1bf)][F(0x1ac)](h);
                        return;
                    }
                } catch (l) {
                    if (f[E(0x1a1)](f[E(0x18d)], f[E(0x198)]))
                        this[E(0x1bf)][E(0x1c2)](h), logger_1[F(0x1a3)][F(0x1c4)](f[F(0x1b5)], l);
                    else {
                        const n = {};
                        return n[E(0x1c6)] = !![], this[F(0x1bf)][E(0x19d)](g, h, i[F(0x189)](j), n);
                    }
                }
            else
                this[F(0x1bf)][F(0x1c2)](f), g[F(0x1a3)][F(0x1c4)](j[F(0x193)], h);
        });
    }
    async [u(0x1a7)](c, d) {
        const G = t, H = u, e = {
                'gtWti': function (f, g) {
                    return f(g);
                }
            };
        return this[G(0x1bf)][G(0x1a7)](c, f => {
            const I = G, J = G;
            try {
                e[I(0x192)](d, f), this[J(0x1bf)][J(0x1ac)](f);
                return;
            } catch (g) {
                logger_1[I(0x1a3)][J(0x1c4)](g);
            }
        });
    }
}
exports[t(0x1a8)] = RabbitmqServer;