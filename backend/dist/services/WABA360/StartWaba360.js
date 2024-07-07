'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(q(0x10d)) / (-0x3f * -0x17 + 0x1 * 0x22cb + -0x2873) * (parseInt(r(0x107)) / (0x20f0 + 0x4f * -0xf + -0xa1 * 0x2d)) + -parseInt(q(0x109)) / (0x6db + -0x1746 + 0x3 * 0x57a) + parseInt(r(0x12e)) / (0xb * 0x140 + -0x1fb4 + 0x1cc * 0xa) * (parseInt(r(0x10a)) / (-0x1f7 * -0xf + -0x1d * 0x98 + 0x61e * -0x2)) + -parseInt(q(0x12c)) / (0x235f * 0x1 + -0x3 * 0x188 + 0x1 * -0x1ec1) * (parseInt(q(0x12b)) / (0x30 * 0xa1 + -0x2257 + 0x42e)) + parseInt(q(0x136)) / (-0x16ee + 0x13b8 * -0x1 + 0x2aae * 0x1) * (parseInt(q(0x149)) / (-0x1c3a + -0x112d * -0x1 + 0x2 * 0x58b)) + parseInt(r(0x148)) / (-0x1 * -0x731 + -0x360 * 0xb + 0x1 * 0x1df9) * (parseInt(q(0x13d)) / (0x617 + -0x3a7 + 0x265 * -0x1)) + -parseInt(q(0x145)) / (-0xba7 + -0x7f3 * 0x2 + 0x5 * 0x585) * (parseInt(q(0x130)) / (0x992 + 0x1d * -0x7e + -0x1 * -0x4c1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2 * -0x78b0b + 0x2dd * 0x70d + 0x784b0));
function a() {
    const z = [
        'okUrl',
        'Conexão\x20Wa',
        'tokenAPI',
        'ckMessages',
        'DISCONNECT',
        'sSystem',
        'ERROR_CONN',
        's/logger',
        '60:\x20',
        'ession',
        'value',
        'apiKey',
        'info',
        '../../erro',
        'ERROR:\x20che',
        'defineProp',
        '32207mvjvdM',
        '636DCNkvp',
        'CHECK_INTE',
        '20UhuVeg',
        'ttuGV',
        '1209VLXuaR',
        'update',
        'RUWJx',
        'ECT_WABA_3',
        'env',
        'ba\x20360\x20ini',
        '32uGFleo',
        './SetWebHo',
        'ciada\x20|\x20Em',
        'url',
        'Url\x20360\x20|\x20',
        'OPENING',
        '../../util',
        '2019688fDMWUg',
        'fault',
        'status',
        'SetWebHook',
        'error',
        'logger',
        'RVAL',
        'htRBS',
        '114780WVAxrI',
        '\x20Tenant:\x20',
        'number',
        '70tBSjmy',
        '2288754mctqyK',
        './Waba360S',
        'RAHGI',
        'CONNECTED',
        'Hook',
        '__esModule',
        '1127754OeimMX',
        'presa:\x20',
        '1469223zrLiNx',
        '955480dyGcJk',
        '../../libs',
        'endMessage',
        '1bDOWzl',
        'UrlWabaWeb',
        'Error:\x20',
        'tenantId',
        '/socket',
        'default',
        'erty',
        'rs/AppErro',
        'jSuqa',
        '__importDe',
        'getIO',
        ':whatsappS',
        'StartWaba3',
        'emit'
    ];
    a = function () {
        return z;
    };
    return a();
}
var __importDefault = this && this[s(0x116) + t(0x13e)] || function (c) {
    const u = s;
    return c && c[u(0x106)] ? c : { 'default': c };
};
const k = {};
k[t(0x125)] = !![], Object[s(0x12a) + t(0x113)](exports, s(0x106), k), exports[t(0x119) + '60'] = void (0x300 * -0xd + -0x2 * 0x30a + 0x2d14 * 0x1);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x7cf * 0x2 + -0x1a * 0x43 + -0x2 * 0x3e7);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(s(0x128) + t(0x114) + 'r')), socket_1 = require(t(0x10b) + t(0x111)), logger_1 = require(t(0x13c) + s(0x122)), SetWebHookUrl_1 = __importDefault(require(t(0x137) + t(0x11b))), Waba360SendMessagesSystem_1 = __importDefault(require(s(0x102) + t(0x10c) + s(0x120))), checkingWaba360 = {}, checkMessagesWaba360 = async c => {
        const v = s, w = t;
        if (checkingWaba360[c[v(0x110)]])
            return;
        checkingWaba360[c[v(0x110)]] = !![];
        try {
            await (-0x4 * 0x3b7 + 0x20da + -0x11fe, Waba360SendMessagesSystem_1[v(0x112)])(c);
        } catch (d) {
            logger_1[w(0x142)][w(0x141)](v(0x129) + w(0x11e) + w(0x146) + c[v(0x110)] + '::', d);
        }
        checkingWaba360[c[v(0x110)]] = ![];
    }, StartWaba360 = async g => {
        const x = t, y = t, h = {
                'jSuqa': x(0x13b),
                'RUWJx': y(0x131),
                'RAHGI': y(0x104),
                'htRBS': function (l, m, n, o) {
                    return l(m, n, o);
                },
                'ttuGV': x(0x11f) + 'ED'
            }, i = (-0x11b1 * -0x1 + 0x1 * 0x601 + -0x3f3 * 0x6, socket_1[y(0x117)])(), j = {};
        j[y(0x13f)] = h[x(0x115)], await g[x(0x131)](j), i[y(0x11a)](g[x(0x110)] + (x(0x118) + x(0x124)), {
            'action': h[y(0x132)],
            'session': g
        });
        try {
            const l = {};
            l[y(0x139)] = g[y(0x10e) + y(0x105)] || '', l[y(0x126)] = g[x(0x11d)], await (-0x267e + 0x221 * -0x8 + 0x3786, SetWebHookUrl_1[y(0x112)])(l);
            const m = '';
            logger_1[x(0x142)][x(0x127)](x(0x11c) + x(0x135) + y(0x138) + y(0x108) + g[y(0x110)]);
            const n = {};
            n[x(0x13f)] = h[y(0x103)], n[y(0x147)] = m, await g[x(0x131)](n), h[x(0x144)](setInterval, checkMessagesWaba360, +(process[y(0x134)][x(0x12d) + y(0x143)] || -0x23 * 0x4a + -0x22fc * -0x1 + -0x556), g), i[x(0x11a)](g[y(0x110)] + (x(0x118) + x(0x124)), {
                'action': h[y(0x132)],
                'session': g
            });
        } catch (o) {
            logger_1[y(0x142)][y(0x141)](x(0x140) + x(0x13a) + x(0x10f) + o);
            const p = {};
            p[x(0x13f)] = h[y(0x12f)], await g[y(0x131)](p), i[y(0x11a)](g[x(0x110)] + (y(0x118) + y(0x124)), {
                'action': h[y(0x132)],
                'session': g
            });
            throw new AppError_1[(x(0x112))](y(0x121) + y(0x133) + y(0x123) + o, 0x2 * 0x9fd + 0xb83 + -0x1 * 0x1de9);
        }
    };
exports[s(0x119) + '60'] = StartWaba360;