'use strict';
const ae = b, af = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0x2285 + 0x178c + -0x3f1 * -0x3);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const ac = b, ad = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(ac(0x151)) / (-0x64a + 0x1 * 0xa7a + -0x42f) * (-parseInt(ad(0x119)) / (0x7 * -0x73 + -0x3 * 0x65b + 0x1638)) + parseInt(ac(0x126)) / (0xfc5 * 0x1 + -0x1c49 + 0x3 * 0x42d) * (-parseInt(ad(0x108)) / (-0x26b * 0xb + -0x1c25 + 0x36c2)) + -parseInt(ac(0x12e)) / (0x2028 + 0xbe0 * -0x2 + -0x863) * (-parseInt(ad(0x123)) / (-0x491 * -0x1 + 0x8b * 0x17 + -0x1108)) + parseInt(ac(0xfb)) / (-0x1580 + 0x22ae + 0x5b * -0x25) + -parseInt(ac(0xdb)) / (-0x7ca * -0x1 + 0x1b2f + -0x22f1) + parseInt(ac(0x130)) / (0xcee + -0x7 * 0x35b + 0xe2 * 0xc) * (parseInt(ad(0x115)) / (-0xd45 + 0x1cf7 * 0x1 + -0xfa8)) + parseInt(ad(0x10e)) / (-0x1eff + 0x47 * -0x67 + 0x3b9b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x39 * -0xc67 + 0x6 * 0x9741 + -0x233 * -0x3f));
var __importDefault = this && this[ae(0xda) + af(0xf2)] || function (c) {
    const ag = ae;
    return c && c[ag(0x14b)] ? c : { 'default': c };
};
const a5 = {};
a5[af(0x135)] = !![], Object[ae(0x147) + af(0xf6)](exports, af(0x14b), a5), exports[ae(0x131) + af(0x114) + 'r'] = void (-0x1d38 + -0x1b76 + 0x38ae);
const os_1 = __importDefault(require('os')), diskusage_1 = __importDefault(require(af(0x143))), os_utils_1 = __importDefault(require(ae(0xfc))), CheckServiceMessenger = async (d, e) => {
        const ah = ae, ai = ae, f = {
                'Lstoe': ah(0x116) + ai(0xf4),
                'qAuKa': function (g, h) {
                    return g * h;
                },
                'iGtxF': function (g, h) {
                    return g / h;
                },
                'nAlBm': function (g, h) {
                    return g * h;
                },
                'FqGDU': function (g, h) {
                    return g / h;
                },
                'unntA': function (g, h) {
                    return g * h;
                },
                'SVoSq': ai(0x100) + ah(0xe9),
                'STFfK': ai(0x14e) + ah(0x12c),
                'xJrOb': ah(0xfd) + ah(0x101),
                'mpzBB': ai(0x124) + ah(0x101),
                'hboLs': function (g, h) {
                    return g - h;
                },
                'jwTaE': ah(0xf9) + ah(0x13c) + 'e',
                'xknLA': function (g, h) {
                    return g * h;
                },
                'LILmw': function (g, h) {
                    return g / h;
                },
                'uiUFr': function (g, h) {
                    return g - h;
                },
                'yDIAN': function (g) {
                    return g();
                },
                'wMmEL': function (g, h) {
                    return g / h;
                },
                'QEGyx': function (g, h) {
                    return g / h;
                },
                'MmQcl': function (g, h) {
                    return g / h;
                },
                'qATZr': function (g, h) {
                    return g / h;
                },
                'meoDH': ai(0x102) + ah(0x146) + ah(0xf0) + ah(0x11d),
                'qaMxB': ah(0x102) + ah(0x146) + ah(0xf0) + ai(0x11e)
            };
        try {
            const g = {
                'Hostname': os_1[ah(0xe7)][ai(0x104)](),
                'Endereço\x20IP': f[ai(0x10d)](getIpAddress),
                'Sistema\x20Operacional': os_1[ah(0xe7)][ah(0xf7)](),
                'Modelo\x20do\x20Servidor': os_1[ah(0xe7)][ai(0x110)]()[-0x2d1 + -0xdfa + 0x10cb][ah(0xf8)],
                'Quantidade\x20de\x20CPUs': os_1[ah(0xe7)][ai(0x110)]()[ai(0x121)],
                'Total\x20Memory': f[ah(0x12f)](f[ai(0xf3)](os_1[ai(0xe7)][ai(0x148)](), 0x18dd + -0x1e * -0x125 + -0x1 * 0x3733), -0x19c3 + 0x1 * -0x13e7 + 0x31aa)[ah(0x113)](0xffa + 0xe5d + 0x5 * -0x611) + ai(0x138),
                'Free\x20Memory': f[ai(0x14d)](f[ah(0xea)](os_1[ah(0xe7)][ai(0x137)](), 0x138e + 0x1 * -0xd32 + -0x25c), -0x5 * 0x3f + -0x543 * 0x2 + 0xfc1 * 0x1)[ai(0x113)](-0x20b6 + -0x1949 + 0x3a01) + ai(0x138),
                'Memory\x20Usage\x20Percentage': f[ah(0xdc)](f[ah(0x136)](0x1f3d + -0x7 * 0x2a5 + 0x1 * -0xcb9, f[ah(0xea)](os_1[ai(0xe7)][ai(0x137)](), os_1[ai(0xe7)][ah(0x148)]())), -0xc * -0x25f + -0x1401 + -0x80f)[ai(0x113)](-0x2ad * -0x6 + 0x1c04 + 0x8d0 * -0x5) + '%',
                'Uptime': f[ah(0x109)](os_1[ai(0xe7)][ai(0xe3)](), 0x1be9 * 0x1 + 0x104e * 0x2 + -0x2e75)[ai(0x113)](-0x17b * -0x6 + 0x2 * 0x920 + -0x1b20) + ai(0xf1)
            };
            os_utils_1[ai(0xe7)][ai(0x13f)](function (h) {
                const aj = ah, ak = ai;
                g[f[aj(0xe2)]] = f[aj(0x133)](h, -0x1 * 0x949 + -0x1 * 0x7b0 + -0x7 * -0x27b)[ak(0x113)](0x1530 + 0x1754 * -0x1 + 0x226) + '%';
                const i = diskusage_1[ak(0xe7)][ak(0x13d)]('/'), j = f[ak(0x12f)](i[ak(0x141)], f[ak(0xeb)](f[aj(0x133)](0x2126 + -0x236f + 0x649, 0xb3a + 0x243e + -0x2b78), -0x28d * 0xb + 0x74b * 0x3 + 0xa2e * 0x1)), k = f[aj(0x13e)](i[ak(0x122)], f[aj(0x139)](f[aj(0xeb)](0x9 * 0x15 + -0x2 * -0x9e3 + -0x1083, -0x20ac * -0x1 + 0xd59 + 0x2a05 * -0x1), -0xbda + -0x103f * 0x1 + -0xb * -0x2eb));
                g[f[ak(0x145)]] = new Date()[aj(0xde) + aj(0x13b)](), g[f[ak(0x150)]] = j[aj(0x113)](-0xd4a + -0x26b2 + -0xb * -0x4ba) + ak(0x112), g[f[aj(0xff)]] = k[ak(0x113)](-0x941 * 0x1 + 0x81d + -0x6 * -0x31) + ak(0x112), g[f[ak(0x12b)]] = f[aj(0x136)](j, k)[aj(0x113)](0x45f + -0x2533 + 0x20d6) + ak(0x112), g[f[ak(0xf5)]] = f[aj(0xdc)](f[aj(0xef)](f[ak(0x105)](j, k), j), -0xa8d + -0x2f5 + 0xde6)[ak(0x113)](-0x4e * -0x5a + 0x103 * 0x4 + -0x1f76) + '%';
                const l = {};
                return l[ak(0x142)] = g, e[aj(0xfa)](0x3 * -0xb6e + 0x21eb + 0x1 * 0x127)[ak(0xed)](l);
            });
        } catch (h) {
            console[ai(0x11a)](f[ai(0x132)], h);
            const i = {};
            return i[ai(0x11a)] = f[ai(0x10f)], e[ai(0xfa)](0x24ce + -0xb80 + 0xe * -0x1ab)[ah(0xed)](i);
        }
    };
function a() {
    const ap = [
        'json',
        'RFbcL',
        'LILmw',
        'ações\x20do\x20s',
        '\x20hours',
        'fault',
        'wMmEL',
        'Percentage',
        'jwTaE',
        'erty',
        'type',
        'model',
        'Disk\x20Usage',
        'status',
        '1138186dezawR',
        'os-utils',
        'Free\x20Disk\x20',
        'rNoiF',
        'xJrOb',
        'Hora\x20do\x20Se',
        'Space',
        'Erro\x20ao\x20ob',
        'ApShS',
        'hostname',
        'uiUFr',
        'TCoSt',
        'IPv4',
        '299420BAeLCb',
        'qATZr',
        'WVTFA',
        'networkInt',
        'ttkfz',
        'yDIAN',
        '6214538Nzihmg',
        'qaMxB',
        'cpus',
        'CWIpP',
        '\x20GB',
        'toFixed',
        'ceMessenge',
        '80CpsbAO',
        'CPU\x20Usage\x20',
        'EDDOx',
        'lLoMK',
        '2GSmlaW',
        'error',
        'KcbRN',
        'pBVFY',
        'ervidor:',
        'ervidor',
        'ocjuc',
        'family',
        'length',
        'free',
        '333534qygWSf',
        'Used\x20Disk\x20',
        'epNfY',
        '27fJGIIc',
        'erfaces',
        'YAWzW',
        'lPtbF',
        'gGFVq',
        'mpzBB',
        '\x20Space',
        'ZWGNb',
        '5AdErLe',
        'iGtxF',
        '598635jUKxVu',
        'CheckServi',
        'meoDH',
        'qAuKa',
        'lgcGt',
        'value',
        'hboLs',
        'freemem',
        '\x20MB',
        'unntA',
        'SMoRb',
        'ring',
        '\x20Percentag',
        'checkSync',
        'FqGDU',
        'cpuUsage',
        'TcrTh',
        'total',
        'serverInfo',
        'diskusage',
        'zaLkb',
        'SVoSq',
        'ter\x20inform',
        'defineProp',
        'totalmem',
        'cisfc',
        'bNQWT',
        '__esModule',
        'dxCFn',
        'QEGyx',
        'Total\x20Disk',
        'address',
        'STFfK',
        '497323rOFSXS',
        'TfiWA',
        '__importDe',
        '5520984dtonKT',
        'xknLA',
        'bjeQa',
        'toLocaleSt',
        'oHSAt',
        'internal',
        'FtDHH',
        'Lstoe',
        'uptime',
        'MsaVs',
        'iCweW',
        'keys',
        'default',
        'vraNs',
        'rvidor',
        'MmQcl',
        'nAlBm',
        'GziUz'
    ];
    a = function () {
        return ap;
    };
    return a();
}
exports[ae(0x131) + af(0x114) + 'r'] = CheckServiceMessenger;
function getIpAddress() {
    const al = ae, am = af, c = {
            'iCweW': al(0x116) + am(0xf4),
            'ApShS': function (f, g) {
                return f * g;
            },
            'TfiWA': function (f, g) {
                return f / g;
            },
            'bNQWT': function (f, g) {
                return f * g;
            },
            'zaLkb': function (f, g) {
                return f / g;
            },
            'pBVFY': function (f, g) {
                return f * g;
            },
            'rNoiF': am(0x100) + al(0xe9),
            'dxCFn': al(0x14e) + al(0x12c),
            'TcrTh': am(0xfd) + am(0x101),
            'EDDOx': am(0x124) + al(0x101),
            'CWIpP': function (f, g) {
                return f - g;
            },
            'bjeQa': al(0xf9) + am(0x13c) + 'e',
            'ttkfz': function (f, g) {
                return f * g;
            },
            'lgcGt': function (f) {
                return f();
            },
            'gGFVq': function (f, g) {
                return f / g;
            },
            'vraNs': function (f, g) {
                return f / g;
            },
            'lPtbF': function (f, g) {
                return f * g;
            },
            'MsaVs': function (f, g) {
                return f / g;
            },
            'YAWzW': am(0x102) + am(0x146) + al(0xf0) + am(0x11d),
            'SMoRb': am(0x102) + al(0x146) + am(0xf0) + al(0x11e),
            'lLoMK': function (f, g) {
                return f === g;
            },
            'KcbRN': am(0xee),
            'cisfc': am(0x106),
            'GziUz': function (f, g) {
                return f === g;
            },
            'FtDHH': al(0x107),
            'WVTFA': function (f, g) {
                return f !== g;
            },
            'ocjuc': al(0xdf),
            'epNfY': am(0x12d)
        }, d = os_1[al(0xe7)][am(0x10b) + am(0x127)]();
    let e = '';
    for (const f of Object[am(0xe6)](d)) {
        for (const g of d[f]) {
            if (c[al(0x118)](c[al(0x11b)], c[am(0x149)]))
                try {
                    const i = {
                        'Hostname': I[am(0xe7)][am(0x104)](),
                        'Endereço\x20IP': c[am(0x134)](J),
                        'Sistema\x20Operacional': K[am(0xe7)][al(0xf7)](),
                        'Modelo\x20do\x20Servidor': L[am(0xe7)][al(0x110)]()[-0x20de + 0x3c7 * -0x8 + 0x3f16][al(0xf8)],
                        'Quantidade\x20de\x20CPUs': M[am(0xe7)][am(0x110)]()[al(0x121)],
                        'Total\x20Memory': c[am(0x12a)](c[am(0x144)](N[am(0xe7)][al(0x148)](), -0x872 + 0x2c6 + 0x9ac), -0x11dc + 0x44c + 0x1 * 0x1190)[al(0x113)](-0x374 * 0x7 + 0x53f * -0x7 + 0x3 * 0x144d) + al(0x138),
                        'Free\x20Memory': c[am(0x12a)](c[am(0xe8)](O[al(0xe7)][am(0x137)](), 0x1 * 0x133b + -0x1aa5 + 0xb6a), 0x1848 * -0x1 + 0x1577 + 0x6d1)[am(0x113)](0x71 * 0x3d + -0x1 * 0x1311 + -0x7da) + al(0x138),
                        'Memory\x20Usage\x20Percentage': c[am(0x129)](c[am(0x111)](-0x1bef * -0x1 + -0x8b7 + 0x1337 * -0x1, c[am(0xe4)](P[al(0xe7)][al(0x137)](), Q[am(0xe7)][al(0x148)]())), -0x99e + 0x2069 + -0x1667)[am(0x113)](-0x12a1 * 0x2 + 0x22b7 + 0x28d) + '%',
                        'Uptime': c[al(0x152)](R[al(0xe7)][am(0xe3)](), -0x1d9c + -0x1ac2 + 0x466e)[al(0x113)](-0x135f + 0x20c5 + -0xd64) + am(0xf1)
                    };
                    S[am(0xe7)][al(0x13f)](function (a7) {
                        const an = al, ao = am;
                        i[c[an(0xe5)]] = c[an(0x103)](a7, -0x1 * 0x1e43 + -0x1eaf + 0x6 * 0xa39)[an(0x113)](-0x14fe + -0x15fb + -0x1 * -0x2afb) + '%';
                        const a8 = W[ao(0xe7)][an(0x13d)]('/'), a9 = c[ao(0x152)](a8[an(0x141)], c[ao(0x14a)](c[ao(0x14a)](-0x17a5 * -0x1 + 0xb * -0x137 + -0x648, -0x1 * 0x1d13 + 0x1 * 0x4ed + 0x1c26), 0x2436 + 0x2b * 0xd6 + -0x4428)), aa = c[ao(0x144)](a8[ao(0x122)], c[ao(0x103)](c[an(0x11c)](0xcd7 + 0x271 + -0xb48, 0x19 * 0x11 + 0x1f * -0x126 + 0x25f1), -0xc * 0x38 + 0x1ee * 0x13 + -0x1e0a));
                        i[c[an(0xfe)]] = new X()[an(0xde) + ao(0x13b)](), i[c[an(0x14c)]] = a9[ao(0x113)](0x9 * 0x3b9 + 0x130c + -0x348b) + ao(0x112), i[c[an(0x140)]] = aa[an(0x113)](0x1 * -0x916 + -0x1929 + -0x3 * -0xb6b) + an(0x112), i[c[ao(0x117)]] = c[ao(0x111)](a9, aa)[ao(0x113)](0x322 * -0x2 + -0x7cb + 0xe11) + ao(0x112), i[c[ao(0xdd)]] = c[ao(0x10c)](c[ao(0x144)](c[ao(0x111)](a9, aa), a9), -0xd * 0x1 + -0x53e + -0x5af * -0x1)[ao(0x113)](-0xc40 + -0x123e + 0x1e80) + '%';
                        const ab = {};
                        return ab[ao(0x142)] = i, Y[ao(0xfa)](-0x252e + 0x15aa * 0x1 + 0xe * 0x12a)[an(0xed)](ab);
                    });
                } catch (j) {
                    Y[am(0x11a)](c[am(0x128)], j);
                    const k = {};
                    return k[al(0x11a)] = c[al(0x13a)], Z[am(0xfa)](0x2159 * -0x1 + -0x1130 + 0x347d)[am(0xed)](k);
                }
            else {
                if (!g[al(0xe0)] && c[am(0xec)](g[al(0x120)], c[am(0xe1)])) {
                    if (c[al(0x10a)](c[al(0x11f)], c[am(0x125)])) {
                        e = g[am(0x14f)];
                        break;
                    } else {
                        f[am(0x11a)](c[al(0x128)], g);
                        const j = {};
                        return j[al(0x11a)] = c[al(0x13a)], h[al(0xfa)](0xcbc + 0x1 * -0x169 + -0x95f)[al(0xed)](j);
                    }
                }
            }
        }
        if (e)
            break;
    }
    return e;
}