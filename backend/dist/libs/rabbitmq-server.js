'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x3 * 0x9c7 + -0x864 + 0x145c * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0xb7)) / (-0x2149 + 0xea3 + -0xbf * -0x19) + -parseInt(s(0xce)) / (-0x24f8 + 0x175 * -0x15 + 0x4393 * 0x1) + -parseInt(s(0xb3)) / (-0x176 * 0xd + -0xb47 * -0x1 + 0x7ba * 0x1) + parseInt(t(0xac)) / (-0x1f51 + 0x48f * 0x1 + 0x1ac6) + parseInt(t(0xe1)) / (0x1cb0 + 0x2356 + -0x4001) * (parseInt(s(0xd9)) / (0x1d6c + 0x5e2 + -0x2348)) + -parseInt(t(0xa1)) / (0x2e + 0x1d71 * -0x1 + 0x1d4a) * (parseInt(s(0xc4)) / (0x66 * -0x4d + 0x146 * -0xe + 0xda * 0x39)) + parseInt(t(0xd4)) / (0x51e * 0x7 + 0x1755 + -0x3b1e);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xbed * 0x95 + 0x73246 * -0x1 + 0x96e40));
const q = {};
q[u(0xc3)] = !![], Object[v(0x99) + u(0xe0)](exports, v(0x9d), q);
const amqplib_1 = require(u(0xe4)), logger_1 = require(u(0xdb) + u(0xd5)), sleepRandomTime_1 = require(u(0xcb) + v(0xa7) + u(0xb4));
class RabbitmqServer {
    constructor(c) {
        const w = v;
        this[w(0xb2)] = c;
    }
    async [v(0xc2)]() {
        const x = v, y = v, f = {};
        f[x(0xd2)] = x(0xae), f[x(0x98)] = x(0xc1);
        const g = f;
        this[y(0xdf)] = await (-0x264f + -0x123 * 0x17 + 0x4074, amqplib_1[y(0xa0)])(this[x(0xb2)]), this[y(0xdc)] = await this[y(0xdf)][y(0xba) + y(0xbe)]();
        const h = {};
        h[x(0xbb)] = !![], await this[y(0xdc)][y(0xda) + 'e'](g[y(0xd2)], h);
        const i = {};
        i[y(0xbb)] = !![], await this[y(0xdc)][y(0xda) + 'e'](g[y(0x98)], i);
    }
    async [u(0xb5) + u(0xad)](e, f) {
        const z = v, A = u, g = {};
        g[z(0xbb)] = !![], await this[A(0xdc)][z(0xda) + 'e'](e, g);
        const h = {};
        return h[A(0xb8)] = !![], this[z(0xdc)][z(0xd7) + 'e'](e, Buffer[z(0xdd)](f), h);
    }
    async [u(0xa5) + u(0xa8)](d, e, f) {
        const B = v, C = u, g = {};
        return g[B(0xb8)] = !![], this[C(0xdc)][B(0xcf)](d, e, Buffer[C(0xdd)](f), g);
    }
    async [v(0xbc) + u(0xc5)](d, e) {
        const D = v, E = u, f = {
                'jOJWA': D(0xbc) + D(0xc5),
                'efGwS': function (h, i) {
                    return h(i);
                },
                'rZzTR': function (h, i) {
                    return h === i;
                },
                'MexHh': D(0x97),
                'UUtsB': E(0xe2),
                'HzYeA': function (h, i) {
                    return h === i;
                },
                'LlmqG': E(0xd1),
                'DOLBL': E(0xd6)
            };
        this[E(0xdc)][D(0xbd)](0x530 * 0x4 + -0x79d * 0x1 + 0x1 * -0xd19, ![]);
        const g = {};
        g[D(0xbb)] = !![], await this[D(0xdc)][E(0xda) + 'e'](d, g), this[D(0xdc)][D(0xb9)](d, async h => {
            const G = D, H = D, i = {
                    'VGofw': function (j, k) {
                        const F = b;
                        return f[F(0xb0)](j, k);
                    }
                };
            if (f[G(0xbf)](f[G(0xde)], f[G(0x9a)]))
                return this[G(0xdc)][G(0xb9)](f, p => {
                    const I = H, J = G;
                    try {
                        i[I(0xa6)](k, p), this[J(0xdc)][J(0xca)](p);
                        return;
                    } catch (r) {
                        m[I(0xa2)][J(0xd8)](r);
                    }
                });
            else
                try {
                    if (f[H(0xc8)](f[G(0xe3)], f[G(0xe3)])) {
                        await f[H(0xb0)](e, h), await (-0x1 * 0xe4b + -0x1 * -0x1bce + -0x481 * 0x3, sleepRandomTime_1[G(0xaf) + G(0xc7)])({
                            'minMilliseconds': f[H(0xb0)](Number, process[G(0xcc)][H(0x9c) + H(0xc6)] || 0x199 * -0x13 + 0x2 * 0xa53 + 0xba9),
                            'maxMilliseconds': f[H(0xb0)](Number, process[H(0xcc)][G(0xa3) + G(0xc6)] || 0x1 * -0x26ab + 0x11 * 0xb3 + -0x52 * -0x6c)
                        }), this[H(0xdc)][H(0xca)](h);
                        return;
                    } else
                        this[G(0xdc)][H(0xcd)](f), g[G(0xa2)][G(0xd8)](f[G(0xc9)], h);
                } catch (l) {
                    if (f[G(0xbf)](f[G(0xa9)], f[G(0xa9)]))
                        this[H(0xdc)][H(0xcd)](h), logger_1[H(0xa2)][H(0xd8)](f[H(0xc9)], l);
                    else {
                        const n = {};
                        return n[G(0xb8)] = !![], this[G(0xdc)][G(0xcf)](g, h, i[G(0xdd)](j), n);
                    }
                }
        });
    }
    async [v(0xb9)](c, d) {
        const K = u, L = v, e = {
                'jtoIZ': function (f, g) {
                    return f(g);
                },
                'nxIZk': function (f, g) {
                    return f !== g;
                },
                'tHiXt': K(0xaa),
                'YpIMW': function (f, g) {
                    return f === g;
                },
                'uJilV': K(0x9b),
                'DswhV': function (f, g) {
                    return f(g);
                },
                'ktDfr': K(0x9e),
                'NmJow': K(0xab)
            };
        return this[K(0xdc)][L(0xb9)](c, f => {
            const M = K, N = K;
            if (e[M(0xb6)](e[M(0x9f)], e[M(0x9f)]))
                this[M(0xb2)] = d;
            else
                try {
                    if (e[N(0xc0)](e[N(0xd3)], e[M(0xd3)])) {
                        e[N(0x95)](d, f), this[M(0xdc)][N(0xca)](f);
                        return;
                    } else {
                        e[M(0xd0)](f, g), this[N(0xdc)][N(0xca)](h);
                        return;
                    }
                } catch (i) {
                    e[N(0xb6)](e[N(0x96)], e[N(0xa4)]) ? logger_1[N(0xa2)][M(0xd8)](i) : e[M(0xa2)][N(0xd8)](f);
                }
        });
    }
}
function a() {
    const O = [
        'amqplib',
        'DswhV',
        'ktDfr',
        'CtCBe',
        'YTvfP',
        'defineProp',
        'UUtsB',
        'VwlDI',
        'MIN_SLEEP_',
        '__esModule',
        'YJdxk',
        'tHiXt',
        'connect',
        '7aejmvK',
        'logger',
        'MAX_SLEEP_',
        'NmJow',
        'publishInE',
        'VGofw',
        'leepRandom',
        'xchange',
        'DOLBL',
        'yXAMC',
        'mAFpO',
        '3189784EYppvT',
        'ueue',
        'waba360',
        'sleepRando',
        'efGwS',
        'default',
        'uri',
        '3486846LHmRAZ',
        'Time',
        'publishInQ',
        'nxIZk',
        '118527GrlpyC',
        'persistent',
        'consume',
        'createChan',
        'durable',
        'consumeWha',
        'prefetch',
        'nel',
        'rZzTR',
        'YpIMW',
        'messenger',
        'start',
        'value',
        '9466680YIQcxl',
        'tsapp',
        'INTERVAL',
        'mTime',
        'HzYeA',
        'jOJWA',
        'ack',
        '../utils/s',
        'env',
        'nack',
        '192094zbiLWI',
        'publish',
        'jtoIZ',
        'VeBQC',
        'gcjuN',
        'uJilV',
        '13788180anQXcR',
        'ogger',
        'jmkYA',
        'sendToQueu',
        'error',
        '146832uoRIIo',
        'assertQueu',
        '../utils/l',
        'channel',
        'from',
        'MexHh',
        'conn',
        'erty',
        '170GOvFtl',
        'ObDYQ',
        'LlmqG'
    ];
    a = function () {
        return O;
    };
    return a();
}
exports[u(0xb1)] = RabbitmqServer;