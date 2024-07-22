'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x1e8)) / (-0x1239 + -0x16ad * 0x1 + -0x25 * -0x11b) + -parseInt(p(0x1e0)) / (-0x1 * -0x359 + 0x797 * 0x2 + -0x1285) * (parseInt(p(0x1c4)) / (0xf64 * -0x1 + -0x2fb + 0x1a * 0xb5)) + -parseInt(q(0x1dd)) / (0x1 * 0x137b + -0x3d * -0x9 + -0x159c) * (parseInt(q(0x1bd)) / (-0x5 * -0x1be + -0x5d4 * -0x4 + -0x2001)) + -parseInt(p(0x1a6)) / (0xb8a + -0x1c5c + -0x1c * -0x9a) * (parseInt(q(0x1bc)) / (-0x4d1 + 0x11ab * -0x2 + 0x282e)) + -parseInt(p(0x1c3)) / (-0x1675 + -0xfa3 + 0x2620) + -parseInt(p(0x1ac)) / (0x22d3 + 0xb00 + -0x2dca) + -parseInt(p(0x1ad)) / (0x49b * -0x2 + -0x3a * 0x9f + 0x2d46) * (-parseInt(p(0x1b1)) / (-0x1 * 0x2455 + -0x11 * -0x7d + 0x1 * 0x1c13));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0xfc019 + -0x1 * 0xdfb13 + 0xd4efa));
var __importDefault = this && this[r(0x1d8) + r(0x1db)] || function (c) {
    const t = r;
    return c && c[t(0x1d4)] ? c : { 'default': c };
};
const k = {};
k[s(0x1c8)] = !![], Object[r(0x1ba) + r(0x1ab)](exports, s(0x1d4), k), exports[r(0x1a9) + r(0x1d7)] = void (0x9 * 0x3a + 0x28a + -0x125 * 0x4);
const AppError_1 = __importDefault(require(s(0x1b6) + s(0x1de) + 'r')), messengerBot_1 = require(s(0x1b3) + s(0x1e7) + r(0x1e9)), socket_1 = require(r(0x1b3) + s(0x1e5)), logger_1 = require(s(0x1cd) + s(0x1d6)), MessengerSendMessagesSystem_1 = __importDefault(require(s(0x1cf) + r(0x1d0) + r(0x1a5))), checkingMessenger = {}, messengerCheckMessages = async (c, d) => {
        const u = r, v = r;
        if (checkingMessenger[d])
            return;
        checkingMessenger[d] = !![];
        try {
            await (-0x21cd + -0x1bc4 + 0x3d91 * 0x1, MessengerSendMessagesSystem_1[u(0x1c9)])(c, d);
        } catch (e) {
            logger_1[u(0x1dc)][v(0x1a8)](u(0x1d9) + v(0x1af) + v(0x1b2) + u(0x1df) + d + '::', e);
        }
        checkingMessenger[d] = ![];
    }, StartMessengerBot = async f => {
        const w = s, x = r, g = {
                'ytMvG': w(0x1ae),
                'kExKH': x(0x1d2),
                'voENE': w(0x1bb),
                'DsKuo': function (j, l, m, n, o) {
                    return j(l, m, n, o);
                },
                'ppnZW': w(0x1ce) + 'ED'
            }, h = (0x778 + 0x1 + -0x779 * 0x1, socket_1[x(0x1b8)])(), i = {};
        i[x(0x1cb)] = g[w(0x1b7)], await f[x(0x1d2)](i), h[w(0x1b9)](f[w(0x1bf)] + (w(0x1c5) + x(0x1ca)), {
            'action': g[w(0x1e6)],
            'session': f
        });
        try {
            const j = '';
            logger_1[w(0x1dc)][x(0x1b4)](w(0x1aa) + w(0x1d3) + w(0x1c7) + w(0x1b5) + f[x(0x1bf)]);
            const l = await (0xe * 0x29d + -0x204a * 0x1 + -0x44c, messengerBot_1[w(0x1d1) + x(0x1cc)])(f), m = {};
            m[x(0x1cb)] = g[w(0x1e2)], m[x(0x1c2)] = j, await f[w(0x1d2)](m), g[x(0x1da)](setInterval, messengerCheckMessages, +(process[w(0x1a7)][x(0x1d5) + x(0x1e3)] || -0xa28 + -0x1d7 * -0x2 + 0x1a02), l, f[w(0x1bf)]), h[w(0x1b9)](f[x(0x1bf)] + (w(0x1c5) + w(0x1ca)), {
                'action': g[w(0x1e6)],
                'session': f
            });
        } catch (n) {
            logger_1[w(0x1dc)][x(0x1a8)](x(0x1c0) + x(0x1c6) + x(0x1e4) + n);
            const o = {};
            o[w(0x1cb)] = g[x(0x1e1)], await f[w(0x1d2)](o), h[x(0x1b9)](f[x(0x1bf)] + (x(0x1c5) + x(0x1ca)), {
                'action': g[w(0x1e6)],
                'session': f
            });
            throw new AppError_1[(x(0x1c9))](x(0x1c1) + x(0x1b0) + x(0x1be) + n, -0x13 * 0x1af + -0x75a + 0x28eb);
        }
    };
exports[s(0x1a9) + s(0x1d7)] = StartMessengerBot;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x202f + -0x366 + -0x4 * 0x6c9);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const y = [
        ':whatsappS',
        'Url\x20360\x20|\x20',
        'iciada\x20|\x20E',
        'value',
        'default',
        'ession',
        'status',
        'gerBot',
        '../../util',
        'DISCONNECT',
        './Messenge',
        'rSendMessa',
        'initMessen',
        'update',
        'ssenger\x20in',
        '__esModule',
        'CHECK_INTE',
        's/logger',
        'ngerBot',
        '__importDe',
        'ERROR\x20Mess',
        'DsKuo',
        'fault',
        'logger',
        '481660BHVpcj',
        'rs/AppErro',
        '\x20Tenant:\x20',
        '73092rMNNLW',
        'ppnZW',
        'voENE',
        'RVAL',
        'Error:\x20',
        '/socket',
        'kExKH',
        '/messenger',
        '1593562XnrUyg',
        'Bot',
        'gesSystem',
        '61872mAkDcJ',
        'env',
        'error',
        'StartMesse',
        'Conexão\x20Me',
        'erty',
        '7587882ltjAUc',
        '1207560yAKgSK',
        'OPENING',
        'enger:\x20che',
        'ECT_WABA_3',
        '242iyuxba',
        'ckMessages',
        '../../libs',
        'info',
        'mpresa:\x20',
        '../../erro',
        'ytMvG',
        'getIO',
        'emit',
        'defineProp',
        'CONNECTED',
        '217FidMSY',
        '15CTJaOr',
        '60:\x20',
        'tenantId',
        'SetWebHook',
        'ERROR_CONN',
        'number',
        '6302584kjKAcz',
        '78NEzQqc'
    ];
    a = function () {
        return y;
    };
    return a();
}