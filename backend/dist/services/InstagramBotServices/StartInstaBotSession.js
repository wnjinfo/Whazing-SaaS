'use strict';
const r = b, s = b;
function a() {
    const y = [
        '../../erro',
        'erty',
        'fault',
        '1065629QMZoqW',
        'ECT_INSTAG',
        'ERROR:\x20che',
        '2302932siSWJu',
        'stagram\x20in',
        'Conexão\x20In',
        '324MIfFhn',
        '8574282RfNwZt',
        '10TgGmCv',
        'YcNzx',
        'env',
        'InstaBotMe',
        '/socket',
        'rs/AppErro',
        'mpresa:\x20',
        'CONNECTED',
        'value',
        'ckMessages',
        'status',
        '\x20Tenant:\x20',
        'default',
        '8802343oZtsmP',
        'qJXqO',
        'emit',
        'error',
        'initInstaB',
        'mSendMessa',
        'iciada\x20|\x20E',
        '186069LibWwV',
        'MessageLis',
        'defineProp',
        'logger',
        'ERROR_CONN',
        '2330804GEYhYs',
        'RVAL',
        '8oWqmoH',
        'BotSession',
        './InstaBot',
        '7HoOYHx',
        'info',
        'ssageListe',
        'StartInsta',
        '3228whzCtQ',
        '__esModule',
        '../../libs',
        'tenantId',
        'ession',
        'getIO',
        'RAM:\x20',
        '../../util',
        '1761mmVVQH',
        '/InstaBot',
        's/logger',
        'CHECK_INTE',
        'tyHIE',
        '\x20|\x20Error:\x20',
        'mwflt',
        'OPENING',
        ':whatsappS',
        'update',
        'tener',
        'DISCONNECT',
        '5gqWTWI',
        'lEWdU',
        './Instagra',
        'gesSystem',
        'ner',
        '__importDe'
    ];
    a = function () {
        return y;
    };
    return a();
}
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x138)) / (0x1 * -0x757 + -0x12 * 0x22b + 0x2e5e) + -parseInt(q(0x11b)) / (0x4 * -0x45d + 0x1 * -0x11d9 + -0x83 * -0x45) * (-parseInt(q(0x123)) / (0x189 + 0x2227 * 0x1 + -0x23ad)) + parseInt(p(0x159)) / (0x8cb * 0x1 + -0x1 * -0x2605 + -0x2ecc) * (parseInt(p(0x12f)) / (-0x2103 + 0x27 * 0x2f + 0x19df)) + -parseInt(p(0x13b)) / (0x150b + -0x4 * 0xf5 + -0xa3 * 0x1b) * (-parseInt(p(0x117)) / (-0x2eb * -0x5 + -0x353 + -0xb3d)) + -parseInt(q(0x15b)) / (0x1746 + -0x21ef + -0xab1 * -0x1) * (-parseInt(p(0x13f)) / (-0x15a + -0x87 + 0x62 * 0x5)) + parseInt(q(0x140)) / (-0x1bdb * -0x1 + 0x16 * 0x89 + -0x2797) * (-parseInt(p(0x14d)) / (0x1d5 * -0xa + -0xcd8 + 0x1f35)) + -parseInt(p(0x13e)) / (0x1 * 0x1655 + -0x146a + -0x1df) * (parseInt(q(0x154)) / (0x23 * -0x1f + 0x10d2 + -0x322 * 0x4));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x6d5df + 0xdb29c + -0x2830d * -0x1));
var __importDefault = this && this[r(0x134) + s(0x137)] || function (c) {
    const t = r;
    return c && c[t(0x11c)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2398 + 0x914 + -0x2b96);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[s(0x148)] = !![], Object[s(0x156) + r(0x136)](exports, s(0x11c), k), exports[s(0x11a) + r(0x15c)] = void (-0x1 * 0x1cc9 + -0x13d5 + 0x309e);
const AppError_1 = __importDefault(require(s(0x135) + s(0x145) + 'r')), InstaBot_1 = require(r(0x11d) + r(0x124)), socket_1 = require(s(0x11d) + r(0x144)), logger_1 = require(r(0x122) + r(0x125)), InstaBotMessageListener_1 = require(r(0x116) + s(0x155) + s(0x12d)), InstagramSendMessagesSystem_1 = __importDefault(require(s(0x131) + r(0x152) + s(0x132))), checkingInstagram = {}, checkMessages = async (c, d) => {
        const u = r, v = s;
        if (checkingInstagram[d])
            return;
        checkingInstagram[d] = !![];
        try {
            await (0x12 * 0x6e + 0x160f + 0x1dcb * -0x1, InstagramSendMessagesSystem_1[u(0x14c)])(c, d);
        } catch (e) {
            logger_1[u(0x157)][u(0x150)](u(0x13a) + v(0x149) + u(0x14b) + d + '::', e);
        }
        checkingInstagram[d] = ![];
    }, StartInstaBotSession = async f => {
        const w = r, x = s, g = {
                'YcNzx': w(0x12a),
                'mwflt': x(0x12c),
                'qJXqO': function (j, l, m, n, o) {
                    return j(l, m, n, o);
                },
                'lEWdU': w(0x147),
                'tyHIE': x(0x12e) + 'ED'
            }, h = (-0x15dc + 0x111e * 0x1 + 0x4be, socket_1[x(0x120)])(), i = {};
        i[w(0x14a)] = g[w(0x141)], await f[w(0x12c)](i), h[x(0x14f)](f[x(0x11e)] + (x(0x12b) + w(0x11f)), {
            'action': g[x(0x129)],
            'session': f
        });
        try {
            const j = await (-0x1 * -0x137 + -0x11c1 + -0x3a * -0x49, InstaBot_1[w(0x151) + 'ot'])(f);
            (-0x15 * -0xd3 + 0x7 * 0x503 + -0x3464, InstaBotMessageListener_1[w(0x143) + x(0x119) + w(0x133)])(j), g[w(0x14e)](setInterval, checkMessages, +(process[x(0x142)][w(0x126) + w(0x15a)] || 0x3 * -0xcf7 + 0x19 * -0x185 + -0x3035 * -0x2), j, f[x(0x11e)]), logger_1[w(0x157)][x(0x118)](w(0x13d) + w(0x13c) + w(0x153) + w(0x146) + f[x(0x11e)]);
            const l = {};
            l[w(0x14a)] = g[x(0x130)], await f[w(0x12c)](l), h[x(0x14f)](f[x(0x11e)] + (w(0x12b) + x(0x11f)), {
                'action': g[w(0x129)],
                'session': f
            });
        } catch (m) {
            logger_1[x(0x157)][w(0x150)](x(0x11a) + w(0x15c) + w(0x128) + m);
            const n = {};
            n[w(0x14a)] = g[x(0x127)], await f[x(0x12c)](n), h[w(0x14f)](f[w(0x11e)] + (x(0x12b) + x(0x11f)), {
                'action': g[x(0x129)],
                'session': f
            });
            throw new AppError_1[(x(0x14c))](w(0x158) + x(0x139) + w(0x121) + m, -0xdc9 + 0x1228 + -0x2cb);
        }
    };
exports[s(0x11a) + s(0x15c)] = StartInstaBotSession;