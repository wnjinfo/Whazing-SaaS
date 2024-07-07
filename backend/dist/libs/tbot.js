'use strict';
const Z = b, a0 = b;
(function (c, d) {
    const X = b, Y = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(X(0x17d)) / (0x12eb + 0x663 * -0x5 + -0xb * -0x12f) * (parseInt(X(0x1b3)) / (-0x19d3 + 0x1d9f + -0x3ca)) + parseInt(X(0x1a5)) / (-0x1c34 + 0x5d1 + -0xb33 * -0x2) + parseInt(Y(0x162)) / (-0x2a * -0x3b + 0x23b + -0xbe5) + parseInt(Y(0x16b)) / (0x1158 + -0x98 * -0x3 + -0x131b) + parseInt(X(0x1a2)) / (-0x1 * -0x443 + 0x13ee + -0x10d * 0x17) * (parseInt(X(0x168)) / (0xe * 0x16f + -0x38 * -0x47 + -0x515 * 0x7)) + -parseInt(X(0x15e)) / (0x20f9 + -0xf * 0x7d + -0x199e) * (parseInt(X(0x187)) / (-0x7b3 + -0x1e1e + -0x792 * -0x5)) + -parseInt(Y(0x185)) / (-0x16d2 + 0x2677 * 0x1 + -0xf9b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x44760 + 0x2ca5c + 0x3eb14));
const V = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xd8e + -0x34 * 0x16 + 0x7bb * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
V[Z(0x196)] = !![], Object[a0(0x1b4) + a0(0x1b8)](exports, a0(0x19e), V), exports[a0(0x17a)] = exports[Z(0x173)] = exports[Z(0x177)] = void (0x9b * 0xe + -0x2 * -0xf5 + -0xa64);
const telegraf_1 = require(Z(0x178)), socket_1 = require(Z(0x1a8)), logger_1 = require(a0(0x16a) + a0(0x188)), TelegramSessions = [], initTbot = async c => {
        const a1 = Z, a2 = Z, d = {
                'yKfvm': function (e, f) {
                    return e !== f;
                },
                'ubrbn': a1(0x18e),
                'ErKwp': a2(0x17c),
                'Vieqv': function (e, f) {
                    return e !== f;
                },
                'XnqpZ': a2(0x15f),
                'vjzsg': a1(0x1a9),
                'Cumja': function (e, f) {
                    return e === f;
                },
                'XPCSv': function (e, f) {
                    return e === f;
                },
                'rrJJl': a1(0x170),
                'fVwgs': a1(0x190),
                'fFRaf': a2(0x194),
                'zeEwg': function (e, f) {
                    return e(f);
                },
                'zQiVC': a2(0x15c) + 'ED',
                'FxPtf': function (e, f) {
                    return e(f);
                },
                'YJdZS': a1(0x199) + a2(0x1af) + a2(0x1a4) + 'n.'
            };
        return new Promise((g, h) => {
            const a3 = a1, a4 = a1, i = {};
            i[a3(0x1a7)] = d[a3(0x169)], i[a4(0x186)] = d[a4(0x192)];
            const j = i;
            try {
                if (d[a4(0x16c)](d[a4(0x1b6)], d[a3(0x16f)])) {
                    const k = (0x16df + -0x5eb + -0x7 * 0x26c, socket_1[a4(0x18c)])(), l = c[a4(0x19a)], {tenantId: m} = c, n = new telegraf_1[(a4(0x160))](c[a3(0x19b) + a4(0x195)], {});
                    n['id'] = c['id'];
                    const o = TelegramSessions[a3(0x191)](r => r['id'] === c['id']);
                    d[a4(0x1aa)](o, -(-0x2dc * 0x2 + 0x983 * 0x3 + -0x16d0)) ? (n['id'] = c['id'], TelegramSessions[a4(0x18a)](n)) : d[a4(0x18f)](d[a4(0x16e)], d[a4(0x16e)]) ? (n['id'] = c['id'], TelegramSessions[o] = n) : (i[a4(0x197)](j[a4(0x1a7)], () => o[a3(0x180)](a3(0x18e))), k[a3(0x197)](j[a4(0x186)], () => o[a3(0x180)](a4(0x17c))), m[a4(0x179)](n, -0x188e * -0x1 + 0x9e7 * -0x2 + -0x4bf));
                    n[a4(0x16d)]();
                    const p = {};
                    p[a4(0x1a0)] = d[a4(0x1ab)], p[a3(0x18b)] = '', p[a4(0x181)] = 0x0, c[a4(0x194)](p);
                    const q = {};
                    q[a4(0x19d)] = d[a3(0x15d)], q[a4(0x1a3)] = c, k[a4(0x17b)](m + (a3(0x1b0) + a3(0x198)), q), logger_1[a3(0x1b9)][a3(0x184)](a3(0x161) + a4(0x15b) + l + a3(0x1a1)), process[a3(0x197)](d[a4(0x169)], () => n[a3(0x180)](a3(0x18e))), process[a4(0x197)](d[a3(0x192)], () => n[a3(0x180)](a3(0x17c))), d[a3(0x1ac)](g, n);
                } else
                    try {
                        const t = q[a4(0x191)](E => E['id'] === w), u = s[t];
                        d[a4(0x171)](t, -(-0x2f * 0xba + -0x22ae + 0x43 * 0x107)) && (w[a4(0x197)](d[a3(0x169)], () => u[a3(0x180)](a4(0x18e))), x[a3(0x197)](d[a3(0x192)], () => u[a4(0x180)](a4(0x17c))), y[a4(0x179)](t, 0x15d5 + -0x114 + -0x14c0));
                    } catch (v) {
                        A[a3(0x1b9)][a3(0x176)](a4(0x17a) + a3(0x19f) + v);
                    }
            } catch (t) {
                const u = {};
                u[a3(0x1a0)] = d[a3(0x164)], u[a3(0x18b)] = '', u[a4(0x181)] = 0x0, c[a4(0x194)](u), logger_1[a4(0x1b9)][a4(0x176)](a3(0x1ae) + a4(0x172) + a3(0x1ad) + t), d[a3(0x18d)](h, new Error(d[a4(0x163)]));
            }
        });
    };
exports[Z(0x177)] = initTbot;
const getTbot = (c, d = !![]) => {
    const a5 = Z, a6 = Z;
    logger_1[a5(0x1b9)][a6(0x184)](a5(0x17f) + ':\x20' + c + (a5(0x174) + a5(0x1b1)) + d);
    const e = TelegramSessions[a5(0x191)](f => f['id'] === c);
    return TelegramSessions[e];
};
exports[a0(0x173)] = getTbot;
const removeTbot = c => {
    const a7 = Z, a8 = Z, d = {
            'buuXc': function (e, f) {
                return e === f;
            },
            'oeIUS': a7(0x190),
            'ESzld': a7(0x194),
            'KDbOZ': a7(0x18e),
            'Qeklk': a8(0x17c),
            'WzHZz': function (e, f) {
                return e(f);
            },
            'WFMBV': function (e, f) {
                return e === f;
            },
            'CRtzK': a8(0x1a6),
            'LbaBE': function (e, f) {
                return e !== f;
            },
            'xydcl': a8(0x167),
            'cdMwa': a8(0x19c)
        };
    try {
        if (d[a7(0x183)](d[a8(0x1b7)], d[a8(0x1b7)])) {
            const e = TelegramSessions[a8(0x191)](g => g['id'] === c), f = TelegramSessions[e];
            d[a8(0x193)](e, -(-0x1a * -0xf + 0x1bce + -0x1d53)) && (process[a7(0x197)](d[a8(0x17e)], () => f[a7(0x180)](a7(0x18e))), process[a8(0x197)](d[a7(0x175)], () => f[a8(0x180)](a7(0x17c))), TelegramSessions[a7(0x179)](e, 0x25d5 + -0xe2d + -0x1 * 0x17a7));
        } else {
            const h = (0xe5d + -0x265e * 0x1 + 0x1 * 0x1801, u[a7(0x18c)])(), i = v[a8(0x19a)], {tenantId: j} = w, k = new x[(a7(0x160))](y[a8(0x19b) + a7(0x195)], {});
            k['id'] = z['id'];
            const l = A[a7(0x191)](W => W['id'] === M['id']);
            d[a7(0x1b2)](l, -(0x3b * 0x25 + -0xa96 * -0x3 + -0x2848)) ? (k['id'] = M['id'], N[a8(0x18a)](k)) : (k['id'] = O['id'], P[l] = k);
            k[a8(0x16d)]();
            const m = {};
            m[a8(0x1a0)] = d[a7(0x182)], m[a8(0x18b)] = '', m[a7(0x181)] = 0x0, G[a8(0x194)](m);
            const n = {};
            n[a7(0x19d)] = d[a8(0x1b5)], n[a8(0x1a3)] = H, h[a7(0x17b)](j + (a8(0x1b0) + a8(0x198)), n), I[a7(0x1b9)][a7(0x184)](a7(0x161) + a7(0x15b) + i + a7(0x1a1)), J[a8(0x197)](d[a8(0x17e)], () => k[a7(0x180)](a7(0x18e))), K[a8(0x197)](d[a8(0x175)], () => k[a8(0x180)](a8(0x17c))), d[a8(0x165)](L, k);
        }
    } catch (h) {
        d[a8(0x183)](d[a7(0x166)], d[a8(0x189)]) ? e[a8(0x1b9)][a7(0x176)](a7(0x17a) + a8(0x19f) + f) : logger_1[a8(0x1b9)][a7(0x176)](a8(0x17a) + a8(0x19f) + h);
    }
};
exports[a0(0x17a)] = removeTbot;
function a() {
    const a9 = [
        'Vieqv',
        'launch',
        'rrJJl',
        'vjzsg',
        'wnVLE',
        'yKfvm',
        'rror\x20|\x20Err',
        'getTbot',
        '\x20|\x20checkSt',
        'Qeklk',
        'error',
        'initTbot',
        'telegraf',
        'splice',
        'removeTbot',
        'emit',
        'SIGTERM',
        '2VEdpVH',
        'KDbOZ',
        'whatsappId',
        'stop',
        'retries',
        'oeIUS',
        'WFMBV',
        'info',
        '893040yoDuby',
        'divyT',
        '33903PErTFV',
        'ogger',
        'cdMwa',
        'push',
        'qrcode',
        'getIO',
        'FxPtf',
        'SIGINT',
        'XPCSv',
        'CONNECTED',
        'findIndex',
        'ErKwp',
        'LbaBE',
        'update',
        'ram',
        'value',
        'once',
        'ession',
        'Error\x20star',
        'name',
        'tokenTeleg',
        'OFSTm',
        'action',
        '__esModule',
        '\x20|\x20Error:\x20',
        'status',
        '\x20-\x20READY\x20',
        '274566tQmKtq',
        'session',
        'ram\x20sessio',
        '225267ynrvyz',
        'YPSoV',
        'iwDuf',
        './socket',
        'eJeln',
        'Cumja',
        'fVwgs',
        'zeEwg',
        'or:\x20',
        'initWbot\x20e',
        'ting\x20teleg',
        ':whatsappS',
        'ate:\x20',
        'buuXc',
        '180022oaCsRR',
        'defineProp',
        'ESzld',
        'XnqpZ',
        'CRtzK',
        'erty',
        'logger',
        'LEGRAM:\x20',
        'DISCONNECT',
        'fFRaf',
        '240LOVvoA',
        'mKqIB',
        'Telegraf',
        'Session\x20TE',
        '1005964FTuerf',
        'YJdZS',
        'zQiVC',
        'WzHZz',
        'xydcl',
        'xVcHT',
        '21KYTRoe',
        'ubrbn',
        '../utils/l',
        '388605RxrmmC'
    ];
    a = function () {
        return a9;
    };
    return a();
}