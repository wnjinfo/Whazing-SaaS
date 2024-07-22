'use strict';
const Z = b, a0 = b;
(function (c, d) {
    const X = b, Y = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(X(0x10c)) / (0x1c1f * -0x1 + 0x1425 + -0xe3 * -0x9) + parseInt(Y(0xf2)) / (-0x1e2e + 0x15 * 0x14 + 0x1c8c) * (parseInt(X(0x109)) / (-0x1e61 * 0x1 + -0x136b + 0x137 * 0x29)) + parseInt(X(0xfb)) / (0x5d * 0x10 + -0x16 * 0x9e + 0x7c8) + -parseInt(Y(0x12d)) / (0x4 * -0x39a + 0x86c + -0x1 * -0x601) + parseInt(Y(0x112)) / (0x21 * 0x3c + -0x1114 + 0x95e) + parseInt(Y(0x137)) / (0x18f * 0x11 + -0x236 + -0x73 * 0x36) * (-parseInt(X(0x105)) / (0x19f9 + -0x5d + -0x1994)) + parseInt(X(0x10a)) / (-0x9 * -0x3a6 + 0x58 * 0x8 + -0x238d) * (parseInt(Y(0x130)) / (-0x274 * -0x5 + -0xb * -0x44 + -0xf26));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x51ef * 0xc + 0x423fa + -0x34d27));
const V = {};
V[Z(0x147)] = !![], Object[a0(0x116) + a0(0x119)](exports, a0(0x141), V), exports[a0(0xf0)] = exports[a0(0x118)] = exports[Z(0x146)] = void (0xd * -0x91 + -0x9d4 + 0x1 * 0x1131);
const telegraf_1 = require(Z(0x144)), socket_1 = require(a0(0xf4)), logger_1 = require(a0(0x117) + Z(0x11d)), TelegramSessions = [], initTbot = async c => {
        const a1 = a0, a2 = Z, d = {
                'NiosN': function (e, f) {
                    return e !== f;
                },
                'OxeEt': a1(0x13e),
                'GRjkN': a1(0x10d),
                'SaRtl': a1(0x142) + 'ED',
                'xzdJa': function (e, f) {
                    return e(f);
                },
                'Sajwo': a1(0x114) + a1(0x13c) + a2(0x11f) + 'n.',
                'dgWMx': function (e, f) {
                    return e === f;
                },
                'WIlLI': a2(0xf5),
                'KpVjJ': a1(0x10f),
                'ORenr': a1(0x13d),
                'HPhgx': function (e, f) {
                    return e !== f;
                },
                'deKVb': a1(0x128),
                'aeRZb': a2(0x120),
                'ZfYgp': a1(0x13a),
                'LqcGj': a2(0x148),
                'BPJzl': a1(0x13b),
                'eDfza': function (e, f) {
                    return e(f);
                },
                'vFoHF': a2(0xe8),
                'DTCki': function (e, f) {
                    return e(f);
                }
            };
        return new Promise((g, h) => {
            const a3 = a1, a4 = a1, i = {};
            i[a3(0xe5)] = d[a3(0x11e)], i[a3(0x135)] = d[a3(0xef)];
            const j = i;
            if (d[a4(0x14d)](d[a4(0x138)], d[a3(0x138)]))
                try {
                    if (d[a4(0x134)](d[a3(0x127)], d[a3(0x104)])) {
                        const k = (-0x9 * -0x4f + 0x3d0 + -0x697, socket_1[a3(0x115)])(), l = c[a4(0x122)], {tenantId: m} = c, n = new telegraf_1[(a3(0xf6))](c[a3(0x110) + a4(0xeb)], {});
                        n['id'] = c['id'];
                        const o = TelegramSessions[a3(0x11a)](r => r['id'] === c['id']);
                        if (d[a4(0x14d)](o, -(-0x22d7 + -0x20f2 * -0x1 + -0x1b * -0x12))) {
                            if (d[a4(0x106)](d[a3(0x12a)], d[a4(0x12a)])) {
                                const t = i[a4(0x11a)](v => v['id'] === o), u = k[t];
                                d[a3(0x134)](t, -(0x2 * -0x10d + -0x10ef + 0x130a)) && (o[a4(0xfd)](d[a4(0x11e)], () => u[a4(0x12e)](a4(0x13e))), p[a3(0xfd)](d[a3(0xef)], () => u[a4(0x12e)](a3(0x10d))), q[a4(0x13f)](t, 0x1b59 + 0x4a * 0x7f + -0x400e));
                            } else
                                n['id'] = c['id'], TelegramSessions[a4(0x145)](n);
                        } else {
                            if (d[a3(0x14d)](d[a4(0x126)], d[a4(0x101)])) {
                                const t = {};
                                t[a4(0xf8)] = d[a4(0x12f)], t[a3(0x14e)] = '', t[a3(0xf1)] = 0x0, h[a4(0x13b)](t), i[a3(0x14c)][a4(0x125)](a4(0x133) + a3(0xec) + a4(0x123) + j), d[a3(0x103)](k, new l(d[a4(0x102)]));
                            } else
                                n['id'] = c['id'], TelegramSessions[o] = n;
                        }
                        n[a4(0x100)]();
                        const p = {};
                        p[a4(0xf8)] = d[a3(0x124)], p[a3(0x14e)] = '', p[a4(0xf1)] = 0x0, c[a3(0x13b)](p);
                        const q = {};
                        q[a4(0x139)] = d[a3(0x14b)], q[a3(0xf3)] = c, k[a4(0xff)](m + (a3(0xfa) + a4(0x11b)), q), logger_1[a3(0x14c)][a3(0xea)](a3(0x108) + a3(0x129) + l + a3(0xed)), process[a4(0xfd)](d[a3(0x11e)], () => n[a4(0x12e)](a3(0x13e))), process[a3(0xfd)](d[a4(0xef)], () => n[a3(0x12e)](a4(0x10d))), d[a3(0xee)](g, n);
                    } else
                        h['id'] = i['id'], j[k] = l;
                } catch (u) {
                    if (d[a4(0x134)](d[a3(0x140)], d[a3(0x140)]))
                        e[a4(0x14c)][a3(0x125)](a3(0xf0) + a3(0x131) + f);
                    else {
                        const w = {};
                        w[a4(0xf8)] = d[a4(0x12f)], w[a3(0x14e)] = '', w[a3(0xf1)] = 0x0, c[a3(0x13b)](w), logger_1[a3(0x14c)][a3(0x125)](a3(0x133) + a4(0xec) + a4(0x123) + u), d[a3(0xf9)](h, new Error(d[a3(0x102)]));
                    }
                }
            else
                i[a3(0xfd)](j[a3(0xe5)], () => o[a3(0x12e)](a3(0x13e))), k[a3(0xfd)](j[a3(0x135)], () => o[a3(0x12e)](a4(0x10d))), m[a4(0x13f)](n, -0x32a * -0x2 + -0x2151 + 0x1afe);
        });
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x6f + -0xc68 * 0x1 + 0xdbc);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[a0(0x146)] = initTbot;
const getTbot = (c, d = !![]) => {
    const a5 = a0, a6 = Z;
    logger_1[a5(0x14c)][a5(0xea)](a6(0x121) + ':\x20' + c + (a5(0xf7) + a6(0xfe)) + d);
    const e = TelegramSessions[a5(0x11a)](f => f['id'] === c);
    return TelegramSessions[e];
};
exports[Z(0x118)] = getTbot;
const removeTbot = c => {
    const a7 = Z, a8 = Z, d = {
            'zAUOb': function (e, f) {
                return e !== f;
            },
            'vpyzT': a7(0x13e),
            'bCmKo': a8(0x10d),
            'fVQlZ': function (e, f) {
                return e === f;
            },
            'TuwqX': a7(0x148),
            'YgZQa': a8(0x13b),
            'acyBM': function (e, f) {
                return e(f);
            },
            'iLBVf': a7(0x111),
            'jleoF': a8(0x143),
            'sQzfd': a8(0xfc),
            'bDPiL': a7(0x113),
            'oGyFk': a7(0x11c)
        };
    try {
        if (d[a8(0x10b)](d[a8(0x149)], d[a7(0x12b)])) {
            const e = TelegramSessions[a7(0x11a)](g => g['id'] === c), f = TelegramSessions[e];
            if (d[a7(0x10b)](e, -(-0x1f54 + -0x6d * 0x3e + 0x1 * 0x39bb))) {
                if (d[a8(0x10b)](d[a7(0x132)], d[a7(0x132)]))
                    try {
                        const h = q[a7(0x11a)](E => E['id'] === w), i = s[h];
                        d[a8(0x10b)](h, -(-0x2514 + 0xc4 + 0x2451)) && (w[a8(0xfd)](d[a8(0xe9)], () => i[a7(0x12e)](a8(0x13e))), x[a8(0xfd)](d[a7(0x12c)], () => i[a7(0x12e)](a7(0x10d))), y[a8(0x13f)](h, -0xbcf + -0x996 + 0x722 * 0x3));
                    } catch (j) {
                        A[a7(0x14c)][a7(0x125)](a8(0xf0) + a8(0x131) + j);
                    }
                else
                    process[a8(0xfd)](d[a8(0xe9)], () => f[a7(0x12e)](a7(0x13e))), process[a7(0xfd)](d[a8(0x12c)], () => f[a8(0x12e)](a7(0x10d))), TelegramSessions[a7(0x13f)](e, -0x238f * -0x1 + 0x1798 + -0x3b26);
            }
        } else {
            const i = (0x21e9 + -0x97c + -0x186d, u[a8(0x115)])(), j = v[a8(0x122)], {tenantId: k} = w, l = new x[(a8(0xf6))](y[a8(0x110) + a8(0xeb)], {});
            l['id'] = z['id'];
            const m = A[a7(0x11a)](W => W['id'] === M['id']);
            d[a7(0xe6)](m, -(-0xbe7 + -0x179 + 0xd61)) ? (l['id'] = M['id'], N[a8(0x145)](l)) : (l['id'] = O['id'], P[m] = l);
            l[a7(0x100)]();
            const n = {};
            n[a8(0xf8)] = d[a7(0x136)], n[a8(0x14e)] = '', n[a7(0xf1)] = 0x0, G[a7(0x13b)](n);
            const o = {};
            o[a7(0x139)] = d[a8(0x107)], o[a7(0xf3)] = H, i[a8(0xff)](k + (a8(0xfa) + a7(0x11b)), o), I[a8(0x14c)][a8(0xea)](a7(0x108) + a8(0x129) + j + a7(0xed)), J[a8(0xfd)](d[a8(0xe9)], () => l[a8(0x12e)](a8(0x13e))), K[a8(0xfd)](d[a7(0x12c)], () => l[a8(0x12e)](a8(0x10d))), d[a8(0xe7)](L, l);
        }
    } catch (i) {
        if (d[a7(0x10b)](d[a7(0x14a)], d[a7(0x10e)]))
            logger_1[a8(0x14c)][a7(0x125)](a8(0xf0) + a8(0x131) + i);
        else {
            i[a8(0x14c)][a7(0xea)](a7(0x121) + ':\x20' + j + (a8(0xf7) + a8(0xfe)) + k);
            const k = l[a8(0x11a)](q => q['id'] === k);
            return n[k];
        }
    }
};
function a() {
    const a9 = [
        'mWtEA',
        '917244rxQGmc',
        'YHAtJ',
        'Error\x20star',
        'getIO',
        'defineProp',
        '../utils/l',
        'getTbot',
        'erty',
        'findIndex',
        'ession',
        'rPjBX',
        'ogger',
        'OxeEt',
        'ram\x20sessio',
        'REnEJ',
        'whatsappId',
        'name',
        'or:\x20',
        'LqcGj',
        'error',
        'aeRZb',
        'KpVjJ',
        'FsBRA',
        'LEGRAM:\x20',
        'deKVb',
        'jleoF',
        'bCmKo',
        '1336150zOScXQ',
        'stop',
        'SaRtl',
        '80XwDLsb',
        '\x20|\x20Error:\x20',
        'sQzfd',
        'initWbot\x20e',
        'NiosN',
        'wHBTi',
        'TuwqX',
        '28dCySzl',
        'WIlLI',
        'action',
        'GLfGb',
        'update',
        'ting\x20teleg',
        'drpMQ',
        'SIGINT',
        'splice',
        'vFoHF',
        '__esModule',
        'DISCONNECT',
        'ghsnJ',
        'telegraf',
        'push',
        'initTbot',
        'value',
        'CONNECTED',
        'iLBVf',
        'bDPiL',
        'BPJzl',
        'logger',
        'dgWMx',
        'qrcode',
        'IxLWr',
        'fVQlZ',
        'acyBM',
        'bpvUv',
        'vpyzT',
        'info',
        'ram',
        'rror\x20|\x20Err',
        '\x20-\x20READY\x20',
        'eDfza',
        'GRjkN',
        'removeTbot',
        'retries',
        '102918JTbiFV',
        'session',
        './socket',
        'cdCuB',
        'Telegraf',
        '\x20|\x20checkSt',
        'status',
        'DTCki',
        ':whatsappS',
        '1459312OiBHJu',
        'ZmDUv',
        'once',
        'ate:\x20',
        'emit',
        'launch',
        'ZfYgp',
        'Sajwo',
        'xzdJa',
        'ORenr',
        '952112HhSMqf',
        'HPhgx',
        'YgZQa',
        'Session\x20TE',
        '15NRWpVt',
        '923427GsjwzR',
        'zAUOb',
        '545840anomCV',
        'SIGTERM',
        'oGyFk',
        'bzEFr',
        'tokenTeleg'
    ];
    a = function () {
        return a9;
    };
    return a();
}
exports[Z(0xf0)] = removeTbot;