'use strict';
const p = b, q = b;
function a() {
    const w = [
        'emit',
        'SendMessag',
        '6316100RqtXpQ',
        'error',
        '6loWUBs',
        'erty',
        'initTbot',
        '/socket',
        'value',
        'iHdoi',
        '2363333sQBuBQ',
        'logger',
        '__importDe',
        ':whatsappS',
        '../../libs',
        'ckMessages',
        '24022szvWUc',
        'status',
        '16UcDRfm',
        '__esModule',
        'RVAL',
        'gVqFP',
        'update',
        'eListener',
        '../../util',
        'ession',
        'tenantId',
        '17541CBsYsE',
        'StartTbotS',
        'ession\x20|\x20E',
        'default',
        'getIO',
        'esSystem',
        'env',
        'defineProp',
        'gnBvQ',
        '\x20Tenant:\x20',
        '/tbot',
        './tbotMess',
        'OPENING',
        '11HZudCu',
        'CHECK_INTE',
        './Telegram',
        'ERROR:\x20che',
        '1125392Zzkpbx',
        's/logger',
        'ageListene',
        'fault',
        'rror:\x20',
        '1008081IJRHDC',
        '1642585akGCCx',
        'tbotMessag'
    ];
    a = function () {
        return w;
    };
    return a();
}
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x1f1)) / (-0x1d29 + 0x233e + -0x185 * 0x4) * (-parseInt(n(0x20d)) / (0x583 * -0x1 + -0x97 * 0x27 + -0x1 * -0x1c86)) + -parseInt(n(0x1e4)) / (0x576 + 0x13e * 0x16 + -0x20c7) + parseInt(o(0x1f5)) / (-0x53 * 0xb + -0x1 * -0x1723 + -0x1 * 0x138e) + parseInt(o(0x1fb)) / (-0x7 * 0x3ad + 0xe88 + -0x59c * -0x2) + parseInt(o(0x201)) / (-0x6f1 + -0x2438 + 0x2b2f) * (parseInt(n(0x207)) / (0x9a1 + 0x89 * -0x13 + -0x1 * -0x91)) + -parseInt(o(0x20f)) / (0x1acf + 0x12a2 + -0x177 * 0x1f) * (parseInt(n(0x1fa)) / (0x5d * -0xb + -0x6 * -0x52d + 0x481 * -0x6)) + -parseInt(n(0x1ff)) / (0x10a * 0x13 + -0x2ef * 0x7 + 0x1 * 0xd5);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x57bbb + -0xb5b6 + -0x33 * 0x741));
var __importDefault = this && this[p(0x209) + p(0x1f8)] || function (c) {
    const r = q;
    return c && c[r(0x210)] ? c : { 'default': c };
};
const k = {};
k[q(0x205)] = !![], Object[q(0x1eb) + p(0x202)](exports, q(0x210), k), exports[q(0x1e5) + p(0x216)] = void (-0x1058 + 0x2 * -0xe5d + 0x12 * 0x281);
const socket_1 = require(q(0x20b) + q(0x204)), tbot_1 = require(p(0x20b) + p(0x1ee)), logger_1 = require(p(0x215) + p(0x1f6)), tbotMessageListener_1 = require(p(0x1ef) + p(0x1f7) + 'r'), TelegramSendMessagesSystem_1 = __importDefault(require(p(0x1f3) + p(0x1fe) + p(0x1e9))), checkingTelegram = {}, checkMessages = async (c, d) => {
        const s = p, t = q;
        if (checkingTelegram[d])
            return;
        checkingTelegram[d] = !![];
        try {
            await (0x55 * -0x44 + 0x1a21 + 0x9 * -0x65, TelegramSendMessagesSystem_1[s(0x1e7)])(c, d);
        } catch (e) {
            logger_1[s(0x208)][t(0x200)](t(0x1f4) + t(0x20c) + t(0x1ed) + d + '::', e);
        }
        checkingTelegram[d] = ![];
    }, StartTbotSession = async d => {
        const u = q, v = p, e = {
                'gVqFP': u(0x1f0),
                'iHdoi': u(0x213),
                'gnBvQ': function (h, i, j, l, m) {
                    return h(i, j, l, m);
                }
            }, f = (0x1ce + 0x8 * 0x30e + -0x1a3e, socket_1[v(0x1e8)])(), g = {};
        g[v(0x20e)] = e[u(0x212)], await d[u(0x213)](g), f[v(0x1fd)](d[u(0x217)] + (u(0x20a) + u(0x216)), {
            'action': e[v(0x206)],
            'session': d
        });
        try {
            const h = await (0x4bd * -0x7 + 0x1a * 0x1e + 0x1e1f, tbot_1[v(0x203)])(d);
            (0xeac + 0xb * -0x2af + 0x1 * 0xed9, tbotMessageListener_1[v(0x1fc) + v(0x214)])(h), e[u(0x1ec)](setInterval, checkMessages, +(process[u(0x1ea)][v(0x1f2) + v(0x211)] || 0xf6b * -0x1 + -0x37c * -0x8 + -0x1 * -0x713), h, d[u(0x217)]);
        } catch (i) {
            logger_1[v(0x208)][v(0x200)](u(0x1e5) + u(0x1e6) + u(0x1f9) + i);
        }
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x216e + 0x1796 * 0x1 + -0x60 * 0x93);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[q(0x1e5) + q(0x216)] = StartTbotSession;