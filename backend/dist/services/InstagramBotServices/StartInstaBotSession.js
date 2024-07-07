'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x109)) / (-0x95 + 0x46d + -0x3d7) + -parseInt(p(0x106)) / (-0x1 * 0x259f + -0x1206 + 0x37a7) * (-parseInt(q(0xd4)) / (-0x1 * -0x1433 + -0x2399 * 0x1 + 0xf69)) + -parseInt(q(0xdb)) / (0x29 * 0x2e + -0x2637 + -0x1 * -0x1edd) + parseInt(p(0xd8)) / (-0xef9 * 0x2 + -0x1ebe + 0x3cb5) * (parseInt(q(0x110)) / (0x1052 + -0x137c + -0x11 * -0x30)) + -parseInt(q(0xed)) / (-0x6c * -0x1 + 0x3b8 + 0x9 * -0x75) + parseInt(p(0xf0)) / (0x10 * 0xe8 + 0x9 * -0xa4 + 0x1 * -0x8b4) + parseInt(q(0xda)) / (0xe04 + 0x1029 + -0x3 * 0xa0c) * (-parseInt(p(0xf5)) / (-0x234a + 0x1e5f + 0x4f5));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x51b7c + -0xa8b4a + -0xdec7b * -0x1));
var __importDefault = this && this[r(0x114) + r(0xdd)] || function (c) {
    const t = r;
    return c && c[t(0xe7)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x154a + 0x5c8 + -0xc * 0x230);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[r(0xe9)] = !![], Object[s(0xd2) + r(0xde)](exports, r(0xe7), k), exports[r(0xdc) + r(0x108)] = void (-0xd55 * -0x1 + -0x3 * -0x2c5 + 0x15a4 * -0x1);
const AppError_1 = __importDefault(require(r(0xeb) + s(0x105) + 'r')), InstaBot_1 = require(s(0xe1) + r(0xff)), socket_1 = require(s(0xe1) + r(0x107)), logger_1 = require(s(0xe6) + r(0xd5)), InstaBotMessageListener_1 = require(s(0xd9) + r(0xf6) + r(0xe3)), InstagramSendMessagesSystem_1 = __importDefault(require(r(0xf9) + r(0xfb) + r(0x115))), checkingInstagram = {}, checkMessages = async (c, d) => {
        const u = s, v = r;
        if (checkingInstagram[d])
            return;
        checkingInstagram[d] = !![];
        try {
            await (-0x103 * -0x6 + 0x2e * -0xc5 + 0x2 * 0xeaa, InstagramSendMessagesSystem_1[u(0xef)])(c, d);
        } catch (e) {
            logger_1[u(0xdf)][v(0xf8)](v(0xec) + u(0x100) + u(0x112) + d + '::', e);
        }
        checkingInstagram[d] = ![];
    }, StartInstaBotSession = async f => {
        const w = s, x = s, g = {
                'fRtKd': w(0xf2),
                'upYux': x(0xf4),
                'upwwb': function (j, l, m, n, o) {
                    return j(l, m, n, o);
                },
                'LiCQv': x(0x102),
                'NwxZz': w(0xea) + 'ED'
            }, h = (-0x1 * -0x11b7 + 0x5e * -0x3e + -0x3 * -0x1af, socket_1[w(0x103)])(), i = {};
        i[x(0xf1)] = g[w(0xd3)], await f[x(0xf4)](i), h[w(0xe8)](f[x(0xe2)] + (w(0xe0) + x(0xfc)), {
            'action': g[x(0x113)],
            'session': f
        });
        try {
            const j = await (0x89f + -0x1 * -0x248b + -0x2d2a * 0x1, InstaBot_1[x(0xee) + 'ot'])(f);
            (0x1 * 0x22c9 + 0x16a5 + -0x2 * 0x1cb7, InstaBotMessageListener_1[w(0xd7) + w(0x111) + w(0x10c)])(j), g[x(0xfd)](setInterval, checkMessages, +(process[w(0xd6)][x(0xfe) + x(0xe5)] || -0x1de8 + 0x2172 * 0x1 + 0xffe), j, f[w(0xe2)]), logger_1[w(0xdf)][w(0x10f)](w(0x10d) + x(0xf7) + x(0x10b) + w(0x104) + f[x(0xe2)]);
            const l = {};
            l[x(0xf1)] = g[x(0x10e)], await f[x(0xf4)](l), h[w(0xe8)](f[x(0xe2)] + (x(0xe0) + w(0xfc)), {
                'action': g[x(0x113)],
                'session': f
            });
        } catch (m) {
            logger_1[w(0xdf)][w(0xf8)](w(0xdc) + w(0x108) + x(0xfa) + m);
            const n = {};
            n[w(0xf1)] = g[w(0x101)], await f[w(0xf4)](n), h[x(0xe8)](f[x(0xe2)] + (x(0xe0) + x(0xfc)), {
                'action': g[x(0x113)],
                'session': f
            });
            throw new AppError_1[(w(0xef))](x(0xe4) + w(0x10a) + w(0xf3) + m, -0xc * -0x88 + -0x1ae6 + 0x3 * 0x75e);
        }
    };
function a() {
    const y = [
        'env',
        'InstaBotMe',
        '859515vKhpjE',
        './InstaBot',
        '1098iutBMk',
        '3227460JpXlnq',
        'StartInsta',
        'fault',
        'erty',
        'logger',
        ':whatsappS',
        '../../libs',
        'tenantId',
        'tener',
        'ERROR_CONN',
        'RVAL',
        '../../util',
        '__esModule',
        'emit',
        'value',
        'DISCONNECT',
        '../../erro',
        'ERROR:\x20che',
        '2730014CNuzmh',
        'initInstaB',
        'default',
        '7678960gVpwhQ',
        'status',
        'OPENING',
        'RAM:\x20',
        'update',
        '8380XsrANa',
        'MessageLis',
        'stagram\x20in',
        'error',
        './Instagra',
        '\x20|\x20Error:\x20',
        'mSendMessa',
        'ession',
        'upwwb',
        'CHECK_INTE',
        '/InstaBot',
        'ckMessages',
        'NwxZz',
        'CONNECTED',
        'getIO',
        'mpresa:\x20',
        'rs/AppErro',
        '523246qBqiGx',
        '/socket',
        'BotSession',
        '61334aFSPNG',
        'ECT_INSTAG',
        'iciada\x20|\x20E',
        'ner',
        'Conexão\x20In',
        'LiCQv',
        'info',
        '6HtCatH',
        'ssageListe',
        '\x20Tenant:\x20',
        'upYux',
        '__importDe',
        'gesSystem',
        'defineProp',
        'fRtKd',
        '9kzIMyK',
        's/logger'
    ];
    a = function () {
        return y;
    };
    return a();
}
exports[s(0xdc) + r(0x108)] = StartInstaBotSession;