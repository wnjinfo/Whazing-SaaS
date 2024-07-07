'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(v(0x1c3)) / (-0x27a * 0x2 + -0x1849 * -0x1 + -0x1354) + parseInt(w(0x204)) / (0x2f6 + 0x26f3 + 0x29e7 * -0x1) + -parseInt(v(0x1bb)) / (-0x8ab * -0x3 + 0x1f07 + -0x52f * 0xb) * (parseInt(w(0x203)) / (-0xada + -0xcb5 + 0x1793)) + -parseInt(v(0x1e1)) / (0x1293 + -0x3 * 0x389 + -0x5 * 0x197) + -parseInt(w(0x1f9)) / (0x1052 + 0x51 * -0x4f + 0x8b3 * 0x1) + -parseInt(v(0x1c1)) / (-0xc * 0x2f + -0x742 + -0x7 * -0x15b) * (-parseInt(w(0x1c5)) / (0x2070 + 0x155d + -0x35c5)) + parseInt(w(0x202)) / (0x14e5 + -0x10a9 * -0x1 + -0x1 * 0x2585);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xb * 0xe143 + 0x1 * 0x2c56d + 0x19 * 0x11c5));
function a() {
    const I = [
        '6136039hmcEKL',
        'IqMQn',
        '960935ibIYqO',
        'voice',
        '8WhsLji',
        'ERROR\x20DONW',
        'axios',
        'RXaST',
        'fault',
        'OIblj',
        'join',
        'video',
        'finish',
        'public',
        'tLTrt',
        '360_NOT_DO',
        '/v1/media/',
        'GrXdV',
        'defineProp',
        'DwKXh',
        '../../erro',
        'GET',
        'jIigs',
        'data',
        'erty',
        'API_URL_36',
        'XoMJu',
        'slqPI',
        'value',
        '__importDe',
        'rs/AppErro',
        'Mpqgr',
        '4512255dMyhob',
        's/logger',
        'NjHYN',
        'pipe',
        'length',
        'stream',
        '../../util',
        'egOvR',
        'aGMPl',
        'getTime',
        'WNLOAD_MED',
        'logger',
        'JnFTZ',
        'tokenAPI',
        'audio',
        'hEQOK',
        'PWvmH',
        'env',
        'split',
        '__esModule',
        'url',
        'D360-API-K',
        'error',
        'WQXLz',
        '9435096ocAlYT',
        'IA:\x20',
        'responseTy',
        'createWrit',
        'path',
        'method',
        'document',
        'LOAD',
        'eesWZ',
        '36133605jjEaZu',
        '4oIVFbC',
        '2450016LJAxhd',
        'headers',
        'image',
        'eStream',
        'dPRgT',
        'default',
        'UKFrx',
        'dcRWq',
        'yaxOm',
        '5252559iWZglW',
        'aOktG',
        'filename',
        'vbdRv',
        'baMdf',
        'mime_type'
    ];
    a = function () {
        return I;
    };
    return a();
}
var __importDefault = this && this[x(0x1de) + x(0x1c9)] || function (c) {
    const z = x;
    return c && c[z(0x1f4)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x10d * 0x6 + -0x27 * -0xd1 + -0x17d1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const u = {};
u[x(0x1dd)] = !![], Object[x(0x1d3) + x(0x1d9)](exports, y(0x1f4), u);
const axios_1 = __importDefault(require(x(0x1c7))), fs_1 = require('fs'), path_1 = require(x(0x1fd)), AppError_1 = __importDefault(require(y(0x1d5) + y(0x1df) + 'r')), logger_1 = require(x(0x1e7) + x(0x1e2)), downloadFile = async (e, f, g) => {
        const A = y, B = y, h = {
                'vbdRv': A(0x1c6) + A(0x200),
                'aOktG': function (n, o) {
                    return n(o);
                },
                'PWvmH': function (n, o) {
                    return n === o;
                },
                'slqPI': B(0x1e3),
                'DwKXh': A(0x1cd),
                'UKFrx': A(0x1f7),
                'dcRWq': A(0x1ce),
                'Mpqgr': B(0x1d6),
                'RXaST': A(0x1e6)
            }, i = process[A(0x1f2)][B(0x1da) + '0'] + B(0x1d1) + f, j = (0xc25 + 0x2 * -0xa01 + 0x7dd, path_1[A(0x1cb)])(__dirname, '..', '..', h[B(0x1b9)], g), k = {};
        k[A(0x1f6) + 'EY'] = e;
        const l = {};
        l[B(0x1f5)] = i, l[A(0x1fe)] = h[A(0x1e0)], l[B(0x1fb) + 'pe'] = h[A(0x1c8)], l[A(0x205)] = k;
        const m = await (-0x118 + 0x259 * -0x6 + -0x797 * -0x2, axios_1[B(0x209)])(l);
        await new Promise((n, o) => {
            const C = A, D = B;
            if (h[C(0x1f1)](h[D(0x1dc)], h[C(0x1dc)]))
                m[D(0x1d8)][D(0x1e4)]((-0xa33 + 0x19d8 + -0xfa5, fs_1[C(0x1fc) + C(0x207)])(j))['on'](h[D(0x1d4)], async () => n(!![]))['on'](h[C(0x1b8)], p => {
                    const E = D, F = C;
                    console[E(0x1f7)](h[F(0x1be)], p), h[E(0x1bc)](o, new Error(p));
                });
            else {
                g[D(0x1ec)][D(0x1f7)](h);
                throw new i[(C(0x209))](C(0x1d0) + D(0x1eb) + D(0x1fa) + j);
            }
        });
    }, GetMediaWaba360 = async ({
        channel: c,
        msg: d,
        ticket: e
    }) => {
        const G = x, H = x, f = {
                'hEQOK': function (g, h) {
                    return g === h;
                },
                'XoMJu': G(0x208),
                'jIigs': H(0x1ca),
                'baMdf': function (g, h) {
                    return g === h;
                },
                'eesWZ': H(0x1cf),
                'WQXLz': function (g, h) {
                    return g > h;
                },
                'IqMQn': function (g, h, i, j) {
                    return g(h, i, j);
                },
                'egOvR': function (g, h) {
                    return g === h;
                },
                'aGMPl': H(0x1ed),
                'yaxOm': H(0x1d2)
            };
        try {
            let g = '', h, i;
            d?.[G(0x1ff)] && (f[G(0x1f0)](f[H(0x1db)], f[H(0x1d7)]) ? (i = j[G(0x1ff)]['id'] || '', k = l[H(0x1ff)][G(0x1bd)], m = n[H(0x1ff)][G(0x1c0)]) : (g = d[G(0x1ff)]['id'] || '', h = d[G(0x1ff)][H(0x1bd)], i = d[H(0x1ff)][H(0x1c0)]));
            d?.[G(0x206)] && (f[H(0x1bf)](f[H(0x201)], f[G(0x201)]) ? (g = d[G(0x206)]['id'] || '', i = d[H(0x206)][G(0x1c0)]) : (g = h[H(0x1cc)]['id'] || '', i = j[G(0x1cc)][G(0x1c0)]));
            d?.[H(0x1cc)] && (g = d[H(0x1cc)]['id'] || '', i = d[H(0x1cc)][G(0x1c0)]);
            if (d?.[G(0x1c4)]) {
                g = d[H(0x1c4)]['id'] || '';
                const o = d[G(0x1c4)][G(0x1c0)] || '', p = o[G(0x1f3)](';');
                i = f[G(0x1f8)](p[H(0x1e5)], 0x24f1 + 0x20c + -0x26fc) ? p[0x909 * 0x1 + 0x3 * -0x62b + 0x978] : d[G(0x1c4)][G(0x1c0)];
            }
            d?.[H(0x1ef)] && (g = d[G(0x1ef)]['id'] || '', i = d[G(0x1ef)][H(0x1c0)]);
            const j = i?.[H(0x1f3)]('/')[0x131e * 0x2 + 0xd * 0x186 + -0x1 * 0x3a09][H(0x1f3)](';')[0x3 * 0x1b + -0x20b6 + 0x1 * 0x2065], k = new Date()[G(0x1ea)](), l = h ? h + '_' + e['id'] + '_' + g + '_' + k + '.' + j : e['id'] + '_' + g + '_' + k + '.' + j;
            return await f[G(0x1c2)](downloadFile, c[G(0x1ee)], g, l), l;
        } catch (q) {
            if (f[G(0x1e8)](f[H(0x1e9)], f[G(0x1ba)])) {
                const s = {};
                return s[H(0x209)] = j, g && h[H(0x1f4)] ? i : s;
            } else {
                logger_1[H(0x1ec)][H(0x1f7)](q);
                throw new AppError_1[(G(0x209))](G(0x1d0) + H(0x1eb) + H(0x1fa) + q);
            }
        }
    };
exports[y(0x209)] = GetMediaWaba360;