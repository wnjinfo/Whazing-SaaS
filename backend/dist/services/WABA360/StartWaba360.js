'use strict';
const s = b, t = b;
function a() {
    const z = [
        'ECT_WABA_3',
        './Waba360S',
        'number',
        'logger',
        '\x20Tenant:\x20',
        'fault',
        '775680GiNpDb',
        '../../libs',
        '21FzPxYw',
        '60:\x20',
        'pZcEe',
        'presa:\x20',
        'tokenAPI',
        '341446TsfExH',
        's/logger',
        'emit',
        './SetWebHo',
        'AyhHe',
        'ession',
        '2251632gglUCo',
        'UrlWabaWeb',
        'pZJlV',
        'StartWaba3',
        '../../util',
        '2jyxnPG',
        'ERROR_CONN',
        'info',
        'erty',
        'ckMessages',
        ':whatsappS',
        '13983525GycWDr',
        'value',
        'okUrl',
        'update',
        'SetWebHook',
        'default',
        '56605OeUCGD',
        '../../erro',
        'sSystem',
        'ciada\x20|\x20Em',
        'url',
        'endMessage',
        '489624WoUrUF',
        'Conexão\x20Wa',
        'KWelA',
        'error',
        'apiKey',
        'defineProp',
        'CHECK_INTE',
        '__importDe',
        'getIO',
        'Error:\x20',
        '__esModule',
        '/socket',
        'status',
        'CONNECTED',
        'OPENING',
        'Hook',
        'rs/AppErro',
        'RVAL',
        'tenantId',
        'ba\x20360\x20ini',
        'env',
        'xBhJI',
        'ERROR:\x20che',
        'Url\x20360\x20|\x20',
        '636498HcxOgV',
        'DISCONNECT'
    ];
    a = function () {
        return z;
    };
    return a();
}
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(q(0xf0)) / (0x1f41 * 0x1 + 0xa3e * 0x2 + 0xe * -0x3b2) + -parseInt(r(0xfb)) / (0x100c + 0x16d6 + -0x20 * 0x137) * (parseInt(q(0xe1)) / (-0x5d5 + -0x10f4 + 0x16cc)) + -parseInt(q(0xe9)) / (-0x1 * 0x23b6 + 0x330 * 0xb + -0x22 * -0x5) + -parseInt(q(0xc3)) / (-0xd34 + 0x106d * -0x1 + 0x9e2 * 0x3) + -parseInt(r(0xf6)) / (-0x12ba + 0x144d * 0x1 + -0x1 * 0x18d) + -parseInt(r(0xeb)) / (-0x1 * -0x1107 + -0x2463 + 0x1363) * (parseInt(r(0xc9)) / (0x1ab7 + -0x18a7 + -0x208)) + parseInt(q(0xbd)) / (0x4 * -0x962 + -0x1 * -0xeff + -0x9 * -0x282);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x4b20e + 0x64c49 * -0x1 + 0x53412));
var __importDefault = this && this[s(0xd0) + s(0xe8)] || function (c) {
    const u = t;
    return c && c[u(0xd3)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x4fc * -0x1 + 0x153a + -0xf81);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[s(0xbe)] = !![], Object[s(0xce) + t(0xfe)](exports, t(0xd3), k), exports[s(0xf9) + '60'] = void (-0x5c8 + 0x256c + -0x5a * 0x5a);
const AppError_1 = __importDefault(require(t(0xc4) + t(0xd9) + 'r')), socket_1 = require(t(0xea) + t(0xd4)), logger_1 = require(t(0xfa) + t(0xf1)), SetWebHookUrl_1 = __importDefault(require(s(0xf3) + t(0xbf))), Waba360SendMessagesSystem_1 = __importDefault(require(s(0xe4) + s(0xc8) + s(0xc5))), checkingWaba360 = {}, checkMessagesWaba360 = async c => {
        const v = t, w = t;
        if (checkingWaba360[c[v(0xdb)]])
            return;
        checkingWaba360[c[v(0xdb)]] = !![];
        try {
            await (0xf76 + -0x1f0c + 0x46 * 0x39, Waba360SendMessagesSystem_1[v(0xc2)])(c);
        } catch (d) {
            logger_1[w(0xe6)][v(0xcc)](w(0xdf) + w(0xff) + v(0xe7) + c[w(0xdb)] + '::', d);
        }
        checkingWaba360[c[v(0xdb)]] = ![];
    }, StartWaba360 = async g => {
        const x = t, y = s, h = {
                'xBhJI': x(0xd7),
                'KWelA': x(0xc0),
                'pZcEe': x(0xd6),
                'AyhHe': function (l, m, n, o) {
                    return l(m, n, o);
                },
                'pZJlV': x(0xe2) + 'ED'
            }, i = (0x1f5d + 0x27a * 0x4 + 0x5 * -0x841, socket_1[y(0xd1)])(), j = {};
        j[x(0xd5)] = h[y(0xde)], await g[y(0xc0)](j), i[x(0xf2)](g[y(0xdb)] + (y(0x100) + y(0xf5)), {
            'action': h[y(0xcb)],
            'session': g
        });
        try {
            const l = {};
            l[y(0xc7)] = g[x(0xf7) + y(0xd8)] || '', l[y(0xcd)] = g[y(0xef)], await (-0x1f10 + -0x40 * -0x2e + 0x1390, SetWebHookUrl_1[x(0xc2)])(l);
            const m = '';
            logger_1[y(0xe6)][x(0xfd)](y(0xca) + y(0xdc) + y(0xc6) + y(0xee) + g[x(0xdb)]);
            const n = {};
            n[y(0xd5)] = h[y(0xed)], n[y(0xe5)] = m, await g[y(0xc0)](n), h[x(0xf4)](setInterval, checkMessagesWaba360, +(process[y(0xdd)][x(0xcf) + y(0xda)] || -0x103c + 0x1f2 * 0x8 + -0xc * -0x1af), g), i[x(0xf2)](g[y(0xdb)] + (y(0x100) + x(0xf5)), {
                'action': h[y(0xcb)],
                'session': g
            });
        } catch (o) {
            logger_1[y(0xe6)][x(0xcc)](x(0xc1) + x(0xe0) + x(0xd2) + o);
            const p = {};
            p[x(0xd5)] = h[x(0xf8)], await g[x(0xc0)](p), i[y(0xf2)](g[x(0xdb)] + (x(0x100) + y(0xf5)), {
                'action': h[y(0xcb)],
                'session': g
            });
            throw new AppError_1[(y(0xc2))](y(0xfc) + x(0xe3) + x(0xec) + o, 0x1 * -0x1d6b + -0xa61 * 0x2 + 0x33c1);
        }
    };
exports[s(0xf9) + '60'] = StartWaba360;