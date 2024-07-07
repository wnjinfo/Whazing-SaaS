'use strict';
const p = b, q = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x207 + 0x1678 + -0x13b6);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0xd2)) / (0x7de + -0x1 * 0x2197 + 0x19ba) * (-parseInt(o(0xed)) / (0x25b0 + 0x269f + -0x4c4d)) + -parseInt(n(0xbe)) / (-0x1649 + 0x5 * 0x5e5 + 0x1 * -0x72d) + parseInt(o(0xd1)) / (0x1 * 0x7d7 + 0x1 * 0x1e9f + -0x2672) + -parseInt(o(0xde)) / (0xbae + 0x3 * 0x3ee + 0x1 * -0x1773) + parseInt(n(0xe5)) / (-0x9e2 + 0x1 * 0x1cdf + -0x12f7) + -parseInt(o(0xd4)) / (-0xe27 + -0x175b + 0x2589) * (parseInt(n(0xcc)) / (-0x6c9 + -0x3 * -0x6d5 + -0xdae)) + parseInt(n(0xe3)) / (0x1ba * -0x5 + -0x1 * -0xfad + -0x45 * 0x1a);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * 0x155df1 + -0x15f3a0 + 0xd222e));
var __importDefault = this && this[p(0xcb) + q(0xdb)] || function (c) {
    const r = q;
    return c && c[r(0xd8)] ? c : { 'default': c };
};
function a() {
    const w = [
        'rror:\x20',
        'value',
        '../../libs',
        '__importDe',
        '264jFmAPD',
        'ession\x20|\x20E',
        'erty',
        'ITpru',
        'ession',
        '1030972hnRwEl',
        '409nTCKfZ',
        'update',
        '121219jzzTka',
        'RVAL',
        'status',
        'OPENING',
        '__esModule',
        'ageListene',
        'defineProp',
        'fault',
        'CHECK_INTE',
        '../../util',
        '1877770IDKkVz',
        'emit',
        'getIO',
        '/socket',
        'rXVRl',
        '15055515gbomhs',
        'logger',
        '185172SlBNQp',
        'StartTbotS',
        './Telegram',
        'tenantId',
        '\x20Tenant:\x20',
        './tbotMess',
        ':whatsappS',
        'ckMessages',
        '2858iHpaLb',
        's/logger',
        'error',
        'initTbot',
        '2329461qeCAqw',
        '/tbot',
        'tbotMessag',
        'default',
        'esSystem',
        'SendMessag',
        'env',
        'ERROR:\x20che',
        'eListener',
        'UfNXH'
    ];
    a = function () {
        return w;
    };
    return a();
}
const k = {};
k[p(0xc9)] = !![], Object[q(0xda) + p(0xce)](exports, p(0xd8), k), exports[p(0xe6) + q(0xd0)] = void (0x183d + -0x1 * 0x4fe + -0x133f);
const socket_1 = require(q(0xca) + q(0xe1)), tbot_1 = require(q(0xca) + q(0xbf)), logger_1 = require(p(0xdd) + q(0xbb)), tbotMessageListener_1 = require(p(0xea) + p(0xd9) + 'r'), TelegramSendMessagesSystem_1 = __importDefault(require(p(0xe7) + q(0xc3) + q(0xc2))), checkingTelegram = {}, checkMessages = async (c, d) => {
        const s = p, t = q;
        if (checkingTelegram[d])
            return;
        checkingTelegram[d] = !![];
        try {
            await (-0xb97 + -0x4db + 0x1072, TelegramSendMessagesSystem_1[s(0xc1)])(c, d);
        } catch (e) {
            logger_1[s(0xe4)][s(0xbc)](s(0xc5) + s(0xec) + t(0xe9) + d + '::', e);
        }
        checkingTelegram[d] = ![];
    }, StartTbotSession = async d => {
        const u = p, v = q, e = {
                'ITpru': u(0xd7),
                'rXVRl': v(0xd3),
                'UfNXH': function (h, i, j, l, m) {
                    return h(i, j, l, m);
                }
            }, f = (-0x16 * 0x15e + -0x459 * -0x1 + 0x3ad * 0x7, socket_1[v(0xe0)])(), g = {};
        g[v(0xd6)] = e[u(0xcf)], await d[v(0xd3)](g), f[v(0xdf)](d[v(0xe8)] + (v(0xeb) + v(0xd0)), {
            'action': e[u(0xe2)],
            'session': d
        });
        try {
            const h = await (0xd48 + 0x8c9 * -0x2 + 0x44a, tbot_1[v(0xbd)])(d);
            (-0x2 * -0x829 + -0x9a9 + -0x6a9, tbotMessageListener_1[v(0xc0) + u(0xc6)])(h), e[v(0xc7)](setInterval, checkMessages, +(process[u(0xc4)][v(0xdc) + u(0xd5)] || -0x1 * -0x20e7 + 0x2380 + -0x30df), h, d[u(0xe8)]);
        } catch (i) {
            logger_1[v(0xe4)][v(0xbc)](v(0xe6) + u(0xcd) + v(0xc8) + i);
        }
    };
exports[q(0xe6) + p(0xd0)] = StartTbotSession;