'use strict';
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(z(0x12b)) / (0xa31 * 0x2 + 0x2d4 + -0x1735) * (parseInt(A(0x105)) / (-0x14ee + -0x2c4 * -0x1 + 0x1 * 0x122c)) + -parseInt(z(0x12a)) / (0x2330 + 0x1c8a + 0x3fb7 * -0x1) + parseInt(A(0xf5)) / (-0x1822 + -0x76 * -0x19 + -0x194 * -0x8) + parseInt(z(0xf8)) / (0x23be + -0x41 * -0xd + -0x14d * 0x1e) * (-parseInt(A(0x114)) / (0x61d + -0x1 * 0x2516 + 0x1eff)) + -parseInt(A(0xed)) / (0xb1f * -0x2 + -0x3cd + 0x2 * 0xd09) + -parseInt(A(0xe9)) / (0x3d * 0x56 + 0x3 * -0x2b9 + -0xc4b) * (-parseInt(A(0x107)) / (0x18a0 + -0x238f * -0x1 + 0x3c26 * -0x1)) + parseInt(z(0x12e)) / (-0x42 * -0x31 + 0x2 * -0xcb + -0xb02) * (parseInt(z(0x119)) / (-0x466 * -0x7 + 0x4a * -0x1 + 0x71 * -0x45));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x16b1e4 + -0xed2c2 + 0x540b * 0xb));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x6e6 * -0x3 + -0x9a0 + -0x7 * -0x476);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[B(0x118) + B(0x120)] || function (c) {
    const D = B;
    return c && c[D(0x116)] ? c : { 'default': c };
};
const k = {};
k[B(0xfe)] = !![], Object[B(0x112) + C(0xf0)](exports, B(0x116), k);
const path_1 = require(B(0x10e)), logger_1 = require(B(0x117) + C(0x12f)), CampaignContacts_1 = __importDefault(require(C(0x12c) + C(0x129) + C(0x108))), wbot_baileys_1 = require(B(0xea) + B(0xfb)), SendMessagesSystemWbotBaileys_1 = require(B(0xff) + B(0x11a) + C(0x106) + B(0x110) + B(0x11b) + C(0xeb)), l = {};
function a() {
    const G = [
        '\x20campaign:',
        'messageId',
        'join',
        'eWhatsappC',
        '1298680yYehwb',
        'removeOnCo',
        'campaignCo',
        '85PixavE',
        'mplete',
        'sendMessag',
        'ot-baileys',
        'mediaName',
        'mediaUrl',
        'value',
        '../service',
        'message',
        'key',
        '@s.whatsap',
        'ar\x20message',
        'timestamp',
        '65932BSTFVf',
        'ices/SendM',
        '9ApenQu',
        'ntacts',
        'error',
        'SendMessag',
        'whatsappId',
        'estamp',
        'default',
        'path',
        'messageTim',
        'essagesSys',
        'attempts',
        'defineProp',
        'text',
        '74484XloVEU',
        'p.net',
        '__esModule',
        '../utils/l',
        '__importDe',
        '9790uazCST',
        's/WbotServ',
        'temWbotBai',
        'QWmbq',
        'where',
        'update',
        'dom',
        'fault',
        'getWbot',
        'Options',
        'ntact',
        'ampaign',
        'jobId',
        'messageRan',
        'public',
        'delay',
        'CampaignCo',
        '2605278wRQJVL',
        '32qFQkVQ',
        '../models/',
        'getMessage',
        '15770AmrpoV',
        'ogger',
        'logger',
        '616904zqWpzv',
        '../libs/wb',
        'leys',
        'Error\x20envi',
        '7197554FOqpAt',
        'number',
        'body',
        'erty'
    ];
    a = function () {
        return G;
    };
    return a();
}
l[C(0x128)] = 0x3a98, l[B(0x111)] = 0x2, l[B(0xf6) + C(0xf9)] = !![], exports[C(0x10d)] = {
    'key': C(0x10a) + C(0xf4) + B(0x124),
    'options': l,
    async 'handle'({data: i}) {
        const E = C, F = C, j = {};
        j[E(0x11c)] = E(0x127);
        const m = j;
        try {
            const n = (0x244b + 0x1925 * -0x1 + -0xb26, wbot_baileys_1[F(0x121)])(i[F(0x10b)]);
            let o = {};
            const p = i[E(0xee)] + (E(0x102) + F(0x115));
            if (i[E(0xfd)]) {
                const t = (-0x268d + 0x1064 + 0xb7 * 0x1f, path_1[F(0xf3)])(__dirname, '..', '..', m[F(0x11c)]), u = (-0x2669 + -0xe * 0x1d5 + 0x400f, path_1[E(0xf3)])(t, i[E(0xfc)]), v = await (-0x23ab + -0x2180 + 0x452b, SendMessagesSystemWbotBaileys_1[F(0x12d) + E(0x122)])(i[E(0xfc)], u, i[F(0x100)]);
                if (v) {
                    const w = { ...v };
                    o = await n[F(0xfa) + 'e'](p, w);
                }
            } else {
                const x = {};
                x[F(0x113)] = i[F(0x100)], o = await n[F(0xfa) + 'e'](p, x);
            }
            const q = {};
            q[E(0xf2)] = o?.[F(0x101)]['id'], q[E(0x126) + F(0x11f)] = i[E(0x126) + E(0x11f)], q[E(0xef)] = i[E(0x100)], q[F(0xfc)] = i[E(0xfc)], q[E(0x104)] = o?.[E(0x10f) + F(0x10c)], q[F(0x125)] = i[E(0x125)];
            const r = {};
            r['id'] = i[F(0xf7) + E(0x123)]['id'];
            const s = {};
            return s[E(0x11d)] = r, await CampaignContacts_1[F(0x10d)][F(0x11e)](q, s), o;
        } catch (y) {
            logger_1[F(0xe8)][E(0x109)](E(0xec) + F(0x103) + F(0xf1) + '\x20' + y);
            throw new Error(y);
        }
    }
};