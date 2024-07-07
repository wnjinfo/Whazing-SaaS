'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0xa4)) / (0x44 * -0x16 + -0x4fb + 0xad4) + parseInt(r(0x98)) / (0x337 + 0x12e8 + -0x161d) * (parseInt(q(0x91)) / (-0xb4d + -0x40d * 0x2 + 0x136a)) + -parseInt(q(0xc0)) / (0x7 * -0x45d + -0x4 * -0x45d + 0xd1b) + parseInt(r(0x9a)) / (0x1b8b + 0x2617 + -0x419d) * (-parseInt(r(0xb1)) / (0x2408 + 0x1b56 * -0x1 + -0x8ac)) + parseInt(r(0xa9)) / (0x935 * -0x4 + -0x7c3 * 0x1 + 0x2c9e) * (-parseInt(q(0xb4)) / (0x1312 + 0x3 * 0x329 + -0x1c85)) + parseInt(q(0xce)) / (0x113 + -0x22e * 0xd + -0x6d3 * -0x4) + parseInt(r(0xb0)) / (0x14e2 + -0xbfd + -0x8db * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x6ba2f * 0x1 + -0x2c616 + 0xe3702));
var __importDefault = this && this[s(0xa8) + s(0xab)] || function (c) {
    const u = s;
    return c && c[u(0x95)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * 0x18a3 + 0x513 * -0x1 + -0x5 * 0x3cd);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[t(0xc5)] = !![], Object[t(0xa1) + t(0xcd)](exports, t(0x95), k), exports[s(0xbe) + '60'] = void (0x19b7 + -0x1 * -0x1d3d + 0x1b7a * -0x2);
const AppError_1 = __importDefault(require(t(0xc4) + s(0xb2) + 'r')), socket_1 = require(t(0xc3) + t(0x90)), logger_1 = require(t(0xad) + s(0x93)), SetWebHookUrl_1 = __importDefault(require(s(0x9e) + s(0x96))), Waba360SendMessagesSystem_1 = __importDefault(require(s(0xb3) + t(0x9b) + s(0xac))), checkingWaba360 = {}, checkMessagesWaba360 = async c => {
        const v = s, w = t;
        if (checkingWaba360[c[v(0x9d)]])
            return;
        checkingWaba360[c[w(0x9d)]] = !![];
        try {
            await (-0x1895 + 0x233 * -0xd + 0x352c, Waba360SendMessagesSystem_1[v(0xbb)])(c);
        } catch (d) {
            logger_1[v(0xa5)][v(0xc2)](w(0x99) + w(0xbf) + w(0xca) + c[w(0x9d)] + '::', d);
        }
        checkingWaba360[c[w(0x9d)]] = ![];
    }, StartWaba360 = async g => {
        const x = t, y = t, h = {
                'OaOXs': x(0xb9),
                'UbpQW': x(0xba),
                'nQbqA': y(0x97),
                'UzEQP': function (l, m, n, o) {
                    return l(m, n, o);
                },
                'pUCdl': x(0xa2) + 'ED'
            }, i = (0x2102 + 0x1 * 0xf75 + -0x3077, socket_1[y(0xd0)])(), j = {};
        j[x(0xcb)] = h[x(0xd2)], await g[x(0xba)](j), i[x(0x9c)](g[y(0x9d)] + (x(0xb5) + x(0xcf)), {
            'action': h[x(0xd1)],
            'session': g
        });
        try {
            const l = {};
            l[x(0xcc)] = g[x(0x94) + x(0x8f)] || '', l[x(0x92)] = g[y(0xd3)], await (0x1 * -0xefb + 0x818 + 0x6e3, SetWebHookUrl_1[x(0xbb)])(l);
            const m = '';
            logger_1[y(0xa5)][x(0xbc)](y(0xc6) + x(0xc1) + y(0xb8) + y(0xa7) + g[x(0x9d)]);
            const n = {};
            n[x(0xcb)] = h[y(0xa6)], n[y(0xb6)] = m, await g[y(0xba)](n), h[x(0xa3)](setInterval, checkMessagesWaba360, +(process[x(0xaf)][x(0xa0) + x(0xbd)] || 0xd03 * -0x3 + -0x4bc + 0x3f4d), g), i[y(0x9c)](g[y(0x9d)] + (y(0xb5) + y(0xcf)), {
                'action': h[y(0xd1)],
                'session': g
            });
        } catch (o) {
            logger_1[y(0xa5)][y(0xc2)](y(0xc8) + y(0x9f) + y(0xc9) + o);
            const p = {};
            p[y(0xcb)] = h[x(0xae)], await g[y(0xba)](p), i[x(0x9c)](g[y(0x9d)] + (x(0xb5) + x(0xcf)), {
                'action': h[y(0xd1)],
                'session': g
            });
            throw new AppError_1[(x(0xbb))](y(0xc7) + y(0xb7) + x(0xaa) + o, -0xf72 + 0xf9c + 0x16a);
        }
    };
function a() {
    const z = [
        'Url\x20360\x20|\x20',
        'CHECK_INTE',
        'defineProp',
        'DISCONNECT',
        'UzEQP',
        '268098rAXwYn',
        'logger',
        'nQbqA',
        'presa:\x20',
        '__importDe',
        '7OWrhQC',
        '60:\x20',
        'fault',
        'sSystem',
        '../../util',
        'pUCdl',
        'env',
        '7732710OgLEeF',
        '4674LpKFFq',
        'rs/AppErro',
        './Waba360S',
        '3640976CTatTA',
        ':whatsappS',
        'number',
        'ECT_WABA_3',
        'ciada\x20|\x20Em',
        'OPENING',
        'update',
        'default',
        'info',
        'RVAL',
        'StartWaba3',
        'ckMessages',
        '1583324juhDXi',
        'ba\x20360\x20ini',
        'error',
        '../../libs',
        '../../erro',
        'value',
        'Conexão\x20Wa',
        'ERROR_CONN',
        'SetWebHook',
        'Error:\x20',
        '\x20Tenant:\x20',
        'status',
        'url',
        'erty',
        '179523JhNGmD',
        'ession',
        'getIO',
        'UbpQW',
        'OaOXs',
        'tokenAPI',
        'Hook',
        '/socket',
        '294qKhezq',
        'apiKey',
        's/logger',
        'UrlWabaWeb',
        '__esModule',
        'okUrl',
        'CONNECTED',
        '7226VehHWv',
        'ERROR:\x20che',
        '1640ASNjSq',
        'endMessage',
        'emit',
        'tenantId',
        './SetWebHo'
    ];
    a = function () {
        return z;
    };
    return a();
}
exports[s(0xbe) + '60'] = StartWaba360;