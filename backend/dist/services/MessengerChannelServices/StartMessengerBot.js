'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x182)) / (0xc01 * -0x1 + 0x49 * 0x3d + -0x563 * 0x1) * (parseInt(q(0x177)) / (-0x834 + 0x25af + -0x1d79)) + -parseInt(p(0x168)) / (-0x1 * 0x2687 + 0x775 + -0x1f15 * -0x1) + -parseInt(q(0x175)) / (-0x1 * 0x1b61 + 0x1c43 + 0x6 * -0x25) * (-parseInt(p(0x196)) / (-0xb2 + -0x80a + -0x53 * -0x1b)) + -parseInt(p(0x16c)) / (-0x26d0 + -0x5 * 0x305 + 0x35ef) * (parseInt(p(0x170)) / (-0xaed + -0x1d28 + 0x1 * 0x281c)) + parseInt(q(0x151)) / (0xefb + 0x128 + -0x101b) + -parseInt(q(0x16e)) / (-0x1c83 + -0xe62 + 0x2aee) * (-parseInt(q(0x164)) / (0xdf3 + 0xabc + 0x1 * -0x18a5)) + -parseInt(q(0x18f)) / (0xa7 + 0x5c3 + -0x1 * 0x65f) * (parseInt(q(0x15e)) / (0x15be + -0x119f + -0x1 * 0x413));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x522d * 0x3b + 0x4f2bc + 0x1c2b43));
function a() {
    const y = [
        'default',
        'Error:\x20',
        'Bot',
        '5570817GvKedW',
        'gerBot',
        'ckMessages',
        'OPENING',
        '1218KPUEnA',
        './Messenge',
        '3033kuUPBk',
        'env',
        '36253mjydVu',
        'vKVlG',
        'tenantId',
        'Conexão\x20Me',
        'GLsmd',
        '84OEUCHh',
        'rs/AppErro',
        '3576506JbrJBc',
        'ZEqoc',
        '../../libs',
        'DISCONNECT',
        'ngerBot',
        'fault',
        'Url\x20360\x20|\x20',
        '__esModule',
        'iciada\x20|\x20E',
        ':whatsappS',
        'value',
        '1yqGkjV',
        '60:\x20',
        'ERROR\x20Mess',
        'info',
        'error',
        'ECT_WABA_3',
        '../../util',
        'rSendMessa',
        '../../erro',
        '/socket',
        'StartMesse',
        'gesSystem',
        'status',
        '66XfYnic',
        'initMessen',
        'defineProp',
        'GyAwD',
        's/logger',
        'getIO',
        'mpresa:\x20',
        '299375ntJEpa',
        '8388184cvYcFT',
        '/messenger',
        'erty',
        'number',
        '__importDe',
        'ssenger\x20in',
        'SetWebHook',
        '\x20Tenant:\x20',
        'CONNECTED',
        'RVAL',
        'CHECK_INTE',
        'logger',
        'emit',
        '3797784XMODtH',
        'update',
        'ession',
        'ERROR_CONN',
        'Xpyct',
        'enger:\x20che',
        '48730HcTFoc'
    ];
    a = function () {
        return y;
    };
    return a();
}
var __importDefault = this && this[r(0x155) + s(0x17c)] || function (c) {
    const t = r;
    return c && c[t(0x17e)] ? c : { 'default': c };
};
const k = {};
k[r(0x181)] = !![], Object[r(0x191) + r(0x153)](exports, r(0x17e), k), exports[r(0x18c) + r(0x17b)] = void (0x6ff + -0x1870 + 0x5 * 0x37d);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x3d * -0x52 + -0x1c7f + 0xa46);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(s(0x18a) + r(0x176) + 'r')), messengerBot_1 = require(s(0x179) + s(0x152) + r(0x167)), socket_1 = require(r(0x179) + s(0x18b)), logger_1 = require(r(0x188) + r(0x193)), MessengerSendMessagesSystem_1 = __importDefault(require(s(0x16d) + r(0x189) + r(0x18d))), checkingMessenger = {}, messengerCheckMessages = async (c, d) => {
        const u = r, v = r;
        if (checkingMessenger[d])
            return;
        checkingMessenger[d] = !![];
        try {
            await (-0x4 * -0x56a + -0x9 * -0x16a + 0xa3 * -0x36, MessengerSendMessagesSystem_1[u(0x165)])(c, d);
        } catch (e) {
            logger_1[v(0x15c)][u(0x186)](v(0x184) + u(0x163) + v(0x16a) + v(0x158) + d + '::', e);
        }
        checkingMessenger[d] = ![];
    }, StartMessengerBot = async f => {
        const w = s, x = r, g = {
                'vKVlG': w(0x16b),
                'Xpyct': x(0x15f),
                'GLsmd': x(0x159),
                'ZEqoc': function (j, l, m, n, o) {
                    return j(l, m, n, o);
                },
                'GyAwD': x(0x17a) + 'ED'
            }, h = (0x267f + 0x909 + -0x1a * 0x1d4, socket_1[w(0x194)])(), i = {};
        i[x(0x18e)] = g[w(0x171)], await f[w(0x15f)](i), h[x(0x15d)](f[x(0x172)] + (x(0x180) + w(0x160)), {
            'action': g[x(0x162)],
            'session': f
        });
        try {
            const j = '';
            logger_1[w(0x15c)][w(0x185)](w(0x173) + x(0x156) + w(0x17f) + w(0x195) + f[w(0x172)]);
            const l = await (0x1ee4 + 0x10e7 * -0x1 + -0xdfd, messengerBot_1[w(0x190) + x(0x169)])(f), m = {};
            m[w(0x18e)] = g[x(0x174)], m[x(0x154)] = j, await f[x(0x15f)](m), g[x(0x178)](setInterval, messengerCheckMessages, +(process[w(0x16f)][x(0x15b) + x(0x15a)] || 0x1198 + -0x5 * 0x2d + 0x2d1), l, f[w(0x172)]), h[x(0x15d)](f[w(0x172)] + (x(0x180) + w(0x160)), {
                'action': g[x(0x162)],
                'session': f
            });
        } catch (n) {
            logger_1[w(0x15c)][w(0x186)](x(0x157) + w(0x17d) + x(0x166) + n);
            const o = {};
            o[w(0x18e)] = g[w(0x192)], await f[w(0x15f)](o), h[x(0x15d)](f[w(0x172)] + (w(0x180) + w(0x160)), {
                'action': g[x(0x162)],
                'session': f
            });
            throw new AppError_1[(w(0x165))](x(0x161) + x(0x187) + x(0x183) + n, -0x6 * -0x5db + -0xf2e + -0x1260);
        }
    };
exports[s(0x18c) + r(0x17b)] = StartMessengerBot;