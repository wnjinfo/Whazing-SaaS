'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0xf1)) / (-0x1421 + -0x11a1 + -0x25c3 * -0x1) * (parseInt(q(0xe0)) / (-0x1627 + 0xadf + 0xb4a)) + parseInt(q(0xb3)) / (-0x1a80 + -0x26f7 + 0x417a) + parseInt(p(0xbd)) / (0x21ab + -0x1bd5 + -0x5d2) + parseInt(q(0xcb)) / (-0x19d2 + -0x4de + 0x1eb5) * (-parseInt(q(0xe2)) / (-0x7 * -0x4ca + 0xa41 + 0x1e7 * -0x17)) + parseInt(p(0xd7)) / (-0x1 * 0xe5d + -0x2 * 0x3d1 + 0x1 * 0x1606) * (parseInt(q(0xdc)) / (0x55b * -0x1 + 0x7f * 0x1d + -0x900)) + parseInt(p(0xe1)) / (-0x2d7 * -0x3 + 0x1bfb * 0x1 + -0x5 * 0x74b) + -parseInt(q(0xd1)) / (0x18fb * 0x1 + 0xbe8 + -0x24d9 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0x292ff + -0x6bd4c * 0x2 + -0x61c9d * -0x3));
var __importDefault = this && this[r(0xbc) + r(0xcc)] || function (c) {
    const t = s;
    return c && c[t(0xb1)] ? c : { 'default': c };
};
const k = {};
function a() {
    const y = [
        'ECT_INSTAG',
        ':whatsappS',
        'ZCDOQ',
        'emit',
        'tener',
        '175MqYtOH',
        'fault',
        'initInstaB',
        'NcwjE',
        'khFps',
        'getIO',
        '9018660VsOsXT',
        'tenantId',
        './InstaBot',
        'status',
        'mSendMessa',
        'update',
        '352366fsqDeM',
        'OPENING',
        'error',
        'iciada\x20|\x20E',
        'value',
        '88USHMGU',
        'BotSession',
        'ession',
        'InstaBotMe',
        '2TTEYnz',
        '4010760NKtMMk',
        '124578tGwXCt',
        '/InstaBot',
        'RAM:\x20',
        'ckMessages',
        'logger',
        '\x20|\x20Error:\x20',
        'StartInsta',
        './Instagra',
        '../../erro',
        '../../libs',
        's/logger',
        'info',
        'default',
        'DISCONNECT',
        'mpresa:\x20',
        '77306AUBvPS',
        'MessageLis',
        'erty',
        'env',
        '__esModule',
        'ERROR_CONN',
        '1760562WTZGyP',
        '../../util',
        'stagram\x20in',
        '/socket',
        'hxLuM',
        'ERROR:\x20che',
        '\x20Tenant:\x20',
        'gesSystem',
        'RVAL',
        '__importDe',
        '2426556LwnycE',
        'CHECK_INTE',
        'DCZTt',
        'ssageListe',
        'ner',
        'Conexão\x20In',
        'rs/AppErro',
        'defineProp',
        'CONNECTED'
    ];
    a = function () {
        return y;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x16 * -0x19d + -0x21f9 + -0x52 * -0xdb);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[s(0xdb)] = !![], Object[r(0xc4) + s(0xaf)](exports, s(0xb1), k), exports[r(0xe8) + s(0xdd)] = void (-0xddb * 0x2 + -0x14f0 + -0x1a * -0x1df);
const AppError_1 = __importDefault(require(r(0xea) + s(0xc3) + 'r')), InstaBot_1 = require(r(0xeb) + r(0xe3)), socket_1 = require(r(0xeb) + r(0xb6)), logger_1 = require(s(0xb4) + s(0xec)), InstaBotMessageListener_1 = require(r(0xd3) + r(0xf2) + r(0xca)), InstagramSendMessagesSystem_1 = __importDefault(require(r(0xe9) + s(0xd5) + s(0xba))), checkingInstagram = {}, checkMessages = async (c, d) => {
        const u = r, v = s;
        if (checkingInstagram[d])
            return;
        checkingInstagram[d] = !![];
        try {
            await (-0x5 * -0x427 + -0x2625 + 0x1162, InstagramSendMessagesSystem_1[u(0xee)])(c, d);
        } catch (e) {
            logger_1[u(0xe6)][v(0xd9)](v(0xb8) + v(0xe5) + u(0xb9) + d + '::', e);
        }
        checkingInstagram[d] = ![];
    }, StartInstaBotSession = async f => {
        const w = r, x = s, g = {
                'khFps': w(0xd8),
                'DCZTt': x(0xd6),
                'ZCDOQ': function (j, l, m, n, o) {
                    return j(l, m, n, o);
                },
                'NcwjE': x(0xc5),
                'hxLuM': w(0xef) + 'ED'
            }, h = (-0x86e + 0x1bd6 + -0x1368, socket_1[w(0xd0)])(), i = {};
        i[w(0xd4)] = g[x(0xcf)], await f[x(0xd6)](i), h[w(0xc9)](f[x(0xd2)] + (w(0xc7) + w(0xde)), {
            'action': g[x(0xbf)],
            'session': f
        });
        try {
            const j = await (-0x9de * -0x1 + -0x1f28 + 0x154a, InstaBot_1[w(0xcd) + 'ot'])(f);
            (-0x17 * -0x172 + -0x713 * 0x1 + -0x57 * 0x4d, InstaBotMessageListener_1[x(0xdf) + x(0xc0) + w(0xc1)])(j), g[w(0xc8)](setInterval, checkMessages, +(process[x(0xb0)][w(0xbe) + x(0xbb)] || -0x1995 + 0x705 * -0x1 + -0x1a11 * -0x2), j, f[w(0xd2)]), logger_1[x(0xe6)][x(0xed)](x(0xc2) + x(0xb5) + x(0xda) + w(0xf0) + f[w(0xd2)]);
            const l = {};
            l[x(0xd4)] = g[x(0xce)], await f[x(0xd6)](l), h[x(0xc9)](f[w(0xd2)] + (x(0xc7) + x(0xde)), {
                'action': g[w(0xbf)],
                'session': f
            });
        } catch (m) {
            logger_1[w(0xe6)][x(0xd9)](x(0xe8) + w(0xdd) + w(0xe7) + m);
            const n = {};
            n[w(0xd4)] = g[x(0xb7)], await f[x(0xd6)](n), h[x(0xc9)](f[x(0xd2)] + (w(0xc7) + w(0xde)), {
                'action': g[x(0xbf)],
                'session': f
            });
            throw new AppError_1[(x(0xee))](w(0xb2) + x(0xc6) + x(0xe4) + m, -0x1 * 0x405 + -0x8 * -0x13 + 0x7 * 0xb7);
        }
    };
exports[r(0xe8) + r(0xdd)] = StartInstaBotSession;