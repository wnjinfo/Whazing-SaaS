'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0xd8)) / (-0x24db + 0xb32 + -0x49 * -0x5a) + parseInt(n(0xea)) / (-0x42f + -0x259b * 0x1 + -0x1 * -0x29cc) * (-parseInt(o(0xe5)) / (-0x2 * 0xd5a + -0x2381 + -0x2c * -0x16a)) + -parseInt(o(0xd5)) / (0x1a03 + 0xfe8 + -0x29e7) + -parseInt(n(0xeb)) / (-0xdc + -0x7b4 + 0x895) * (parseInt(n(0xcf)) / (-0x107 * 0x14 + -0x462 + 0x63d * 0x4)) + parseInt(o(0xc4)) / (0xc8f + -0x241c + 0x1794) * (-parseInt(o(0xf0)) / (-0x90f + 0x1 * -0x1853 + -0x4c6 * -0x7)) + -parseInt(o(0xda)) / (-0x1507 + -0x6c1 + 0x1bd1 * 0x1) + -parseInt(o(0xd2)) / (0x1 * 0x1f69 + -0xa9 * 0x3a + 0x6eb) * (-parseInt(n(0xc7)) / (0x315 + -0x215 * 0x9 + 0x1 * 0xfb3));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xab9 * -0x205 + -0x8ab5f + -0x1509a));
var __importDefault = this && this[p(0xf1) + q(0xd0)] || function (c) {
    const r = p;
    return c && c[r(0xca)] ? c : { 'default': c };
};
const k = {};
k[p(0xd6)] = !![], Object[p(0xc6) + p(0xdc)](exports, p(0xca), k), exports[p(0xe3) + q(0xdf)] = void (0x2f * -0xbd + -0xeee + 0x4d * 0xa5);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x196 + -0x5 * 0xc1 + 0x2ed);
        let h = e[f];
        return h;
    }, b(c, d);
}
const socket_1 = require(q(0xc9) + q(0xcd)), tbot_1 = require(q(0xc9) + q(0xe4)), logger_1 = require(p(0xdd) + q(0xcc)), tbotMessageListener_1 = require(p(0xd1) + p(0xd9) + 'r'), TelegramSendMessagesSystem_1 = __importDefault(require(q(0xe6) + q(0xee) + p(0xbf))), checkingTelegram = {}, checkMessages = async (c, d) => {
        const s = p, t = p;
        if (checkingTelegram[d])
            return;
        checkingTelegram[d] = !![];
        try {
            await (0xa11 + -0x2332 + 0x1921, TelegramSendMessagesSystem_1[s(0xc2)])(c, d);
        } catch (e) {
            logger_1[t(0xf2)][s(0xd4)](s(0xe0) + t(0xc0) + t(0xc5) + d + '::', e);
        }
        checkingTelegram[d] = ![];
    }, StartTbotSession = async d => {
        const u = p, v = p, e = {
                'fGVDQ': u(0xcb),
                'UAFiy': v(0xed),
                'RKfFh': function (h, i, j, l, m) {
                    return h(i, j, l, m);
                }
            }, f = (0xd * -0x49 + 0x421 + -0x6c, socket_1[u(0xde)])(), g = {};
        g[v(0xef)] = e[v(0xe7)], await d[u(0xed)](g), f[v(0xe2)](d[u(0xe9)] + (v(0xe1) + u(0xdf)), {
            'action': e[u(0xe8)],
            'session': d
        });
        try {
            const h = await (-0x2603 + -0x4b0 + -0x11 * -0x283, tbot_1[u(0xc3)])(d);
            (-0xfc + 0x162d * -0x1 + 0x1729, tbotMessageListener_1[v(0xd7) + u(0xd3)])(h), e[v(0xec)](setInterval, checkMessages, +(process[v(0xdb)][u(0xc1) + v(0xce)] || 0x58d + 0x18 * -0xa8 + 0x1dbb), h, d[u(0xe9)]);
        } catch (i) {
            logger_1[v(0xf2)][u(0xd4)](u(0xe3) + v(0xc8) + v(0xbe) + i);
        }
    };
function a() {
    const w = [
        'CHECK_INTE',
        'default',
        'initTbot',
        '105YGxOmy',
        '\x20Tenant:\x20',
        'defineProp',
        '11akpUke',
        'ession\x20|\x20E',
        '../../libs',
        '__esModule',
        'OPENING',
        's/logger',
        '/socket',
        'RVAL',
        '6xvzfpY',
        'fault',
        './tbotMess',
        '39939190MteOYl',
        'eListener',
        'error',
        '113348keqAST',
        'value',
        'tbotMessag',
        '1046483WClaFP',
        'ageListene',
        '1283049rLbgdq',
        'env',
        'erty',
        '../../util',
        'getIO',
        'ession',
        'ERROR:\x20che',
        ':whatsappS',
        'emit',
        'StartTbotS',
        '/tbot',
        '13254ybupNy',
        './Telegram',
        'fGVDQ',
        'UAFiy',
        'tenantId',
        '470GNeGzD',
        '2611435UYdqnU',
        'RKfFh',
        'update',
        'SendMessag',
        'status',
        '240632LmXjAA',
        '__importDe',
        'logger',
        'rror:\x20',
        'esSystem',
        'ckMessages'
    ];
    a = function () {
        return w;
    };
    return a();
}
exports[p(0xe3) + p(0xdf)] = StartTbotSession;