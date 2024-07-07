'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x8e)) / (-0x10ae + 0x38c * 0x8 + -0xbb1) + parseInt(q(0x6b)) / (-0x1 * -0x1c55 + 0xb55 + -0x27a8) + parseInt(q(0x96)) / (-0x1041 + -0x50 * -0x59 + -0xb8c) * (-parseInt(p(0x9b)) / (-0xf12 + -0x53 * 0x39 + -0xd * -0x295)) + -parseInt(q(0x82)) / (0x1368 + -0x1cba + 0x957) * (-parseInt(q(0x68)) / (0x1d3 * -0x9 + -0x25 * 0xf3 + 0x3390)) + parseInt(q(0x87)) / (0x55 * -0x3d + 0x13cf + 0x79) * (-parseInt(q(0x66)) / (0x1ffe + -0x1ce2 + 0x18a * -0x2)) + -parseInt(q(0x67)) / (0x225a + -0x254f + 0x2fe * 0x1) * (parseInt(p(0x8b)) / (0xc91 * 0x3 + 0x23b2 + -0x1 * 0x495b)) + parseInt(p(0x95)) / (-0x589 + 0x1cc8 + 0x18c * -0xf);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x34e9 + 0xa628 * -0x14 + 0x14fc95));
var __importDefault = this && this[r(0x76) + s(0xa7)] || function (c) {
    const t = r;
    return c && c[t(0x8d)] ? c : { 'default': c };
};
function a() {
    const y = [
        'emit',
        'ession',
        '49HUaDUn',
        'number',
        '/messenger',
        'ssenger\x20in',
        '1819910qkoMUx',
        'rSendMessa',
        '__esModule',
        '456930mNDqfj',
        'wBXBN',
        'RVAL',
        'rs/AppErro',
        'XQAPg',
        'env',
        'KFVld',
        '3660877bIkWia',
        '81QIeOPl',
        'Bot',
        'pHnkn',
        'ECT_WABA_3',
        'ngerBot',
        '145828MlGDJr',
        '../../erro',
        'DISCONNECT',
        'CHECK_INTE',
        's/logger',
        'CONNECTED',
        'gerBot',
        'getIO',
        'error',
        'default',
        'Url\x20360\x20|\x20',
        'info',
        'fault',
        'Error:\x20',
        'value',
        'erty',
        '319376piqBUD',
        '18cYcvuT',
        '2700GkMFXX',
        '60:\x20',
        'logger',
        '1681308gRlulc',
        'gesSystem',
        'defineProp',
        'enger:\x20che',
        'initMessen',
        './Messenge',
        'ERROR\x20Mess',
        'OPENING',
        'update',
        '/socket',
        'iciada\x20|\x20E',
        '__importDe',
        'status',
        'tenantId',
        'Yznuy',
        'SetWebHook',
        'ERROR_CONN',
        '../../util',
        'Conexão\x20Me',
        'ckMessages',
        'StartMesse',
        ':whatsappS',
        'mpresa:\x20',
        '5650HhYlDP',
        '\x20Tenant:\x20',
        '../../libs'
    ];
    a = function () {
        return y;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1b3e + -0x237f + -0x1 * -0x8a7);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[s(0xa9)] = !![], Object[s(0x6d) + s(0xaa)](exports, r(0x8d), k), exports[s(0x7f) + r(0x9a)] = void (0x173a + 0x37e * -0x8 + -0x1 * -0x4b6);
const AppError_1 = __importDefault(require(r(0x9c) + r(0x91) + 'r')), messengerBot_1 = require(s(0x84) + s(0x89) + r(0x97)), socket_1 = require(s(0x84) + r(0x74)), logger_1 = require(s(0x7c) + s(0x9f)), MessengerSendMessagesSystem_1 = __importDefault(require(r(0x70) + r(0x8c) + r(0x6c))), checkingMessenger = {}, messengerCheckMessages = async (c, d) => {
        const u = s, v = s;
        if (checkingMessenger[d])
            return;
        checkingMessenger[d] = !![];
        try {
            await (-0x14ae + 0x13da + 0xd4, MessengerSendMessagesSystem_1[u(0xa4)])(c, d);
        } catch (e) {
            logger_1[v(0x6a)][v(0xa3)](u(0x71) + v(0x6e) + v(0x7e) + u(0x83) + d + '::', e);
        }
        checkingMessenger[d] = ![];
    }, StartMessengerBot = async f => {
        const w = r, x = r, g = {
                'Yznuy': w(0x72),
                'wBXBN': w(0x73),
                'XQAPg': x(0xa0),
                'KFVld': function (j, l, m, n, o) {
                    return j(l, m, n, o);
                },
                'pHnkn': w(0x9d) + 'ED'
            }, h = (0x13 * -0x6d + -0x11c5 + 0x19dc, socket_1[x(0xa2)])(), i = {};
        i[w(0x77)] = g[x(0x79)], await f[w(0x73)](i), h[x(0x85)](f[w(0x78)] + (x(0x80) + w(0x86)), {
            'action': g[x(0x8f)],
            'session': f
        });
        try {
            const j = '';
            logger_1[x(0x6a)][w(0xa6)](w(0x7d) + w(0x8a) + w(0x75) + x(0x81) + f[x(0x78)]);
            const l = await (-0x4 * 0x83a + -0x233b * 0x1 + 0x4423, messengerBot_1[w(0x6f) + w(0xa1)])(f), m = {};
            m[x(0x77)] = g[w(0x92)], m[w(0x88)] = j, await f[w(0x73)](m), g[w(0x94)](setInterval, messengerCheckMessages, +(process[x(0x93)][w(0x9e) + x(0x90)] || 0x773 + 0x20d6 * -0x1 + 0x2ceb), l, f[x(0x78)]), h[x(0x85)](f[x(0x78)] + (w(0x80) + x(0x86)), {
                'action': g[w(0x8f)],
                'session': f
            });
        } catch (n) {
            logger_1[x(0x6a)][w(0xa3)](x(0x7a) + w(0xa5) + x(0xa8) + n);
            const o = {};
            o[x(0x77)] = g[x(0x98)], await f[w(0x73)](o), h[w(0x85)](f[w(0x78)] + (x(0x80) + w(0x86)), {
                'action': g[w(0x8f)],
                'session': f
            });
            throw new AppError_1[(w(0xa4))](w(0x7b) + x(0x99) + w(0x69) + n, 0x1be1 + -0x2 * 0x575 + -0xf63);
        }
    };
exports[s(0x7f) + s(0x9a)] = StartMessengerBot;