'use strict';
const B = b, C = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x17d5 + -0xc7 * -0x25 + -0x131 * 0x3);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const G = [
        '\x20campaign:',
        '7719ydXCNh',
        'join',
        'ar\x20message',
        'jobId',
        'temWbotBai',
        '../libs/wb',
        'value',
        'messageTim',
        'ntacts',
        'attempts',
        '75917xiyxWY',
        'default',
        'mplete',
        'mediaUrl',
        's/WbotServ',
        'estamp',
        '198jgSSqJ',
        'p.net',
        'whatsappId',
        'where',
        'fault',
        'logger',
        'body',
        'leys',
        'removeOnCo',
        'timestamp',
        'mediaName',
        'getWbot',
        '@s.whatsap',
        'ices/SendM',
        'essagesSys',
        'path',
        '1447640ANiVQk',
        'SendMessag',
        'sendMessag',
        'messageRan',
        '../models/',
        'number',
        'delay',
        'ZHjCm',
        'getMessage',
        '302988ehJxtO',
        '__importDe',
        'update',
        'Options',
        'erty',
        'CampaignCo',
        '__esModule',
        '17810MaXTlD',
        'Error\x20envi',
        'eWhatsappC',
        'error',
        'message',
        '59152AliNTi',
        'ntact',
        '128mBmQeh',
        'text',
        '41886prTKHi',
        'defineProp',
        'ot-baileys',
        '../service',
        'messageId',
        '320JALQyx',
        'ogger',
        'dom',
        'campaignCo',
        'public',
        'key',
        '../utils/l',
        'ampaign'
    ];
    a = function () {
        return G;
    };
    return a();
}
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(z(0x16f)) / (-0x184f * 0x1 + -0x17ce + 0x301e * 0x1) + -parseInt(z(0x19c)) / (-0xa77 + -0x2 * 0x9d3 + 0x1e1f * 0x1) * (-parseInt(z(0x165)) / (-0x157a + -0xc98 + 0x2215)) + -parseInt(A(0x19a)) / (0xa3 * 0x21 + -0x1 * -0x13f6 + 0x1 * -0x28f5) + parseInt(z(0x195)) / (-0x41 * -0x69 + 0x162f + 0x1 * -0x30d3) * (-parseInt(z(0x175)) / (0x1f * -0xab + 0x72e * 0x5 + 0x161 * -0xb)) + parseInt(A(0x18e)) / (-0x2485 * 0x1 + -0xdfc + 0x134 * 0x2a) + parseInt(A(0x15c)) / (-0x48b * -0x5 + -0x1624 * -0x1 + -0x2cd3) * (-parseInt(A(0x19e)) / (0x192c * 0x1 + -0xd * -0x6b + 0x1a * -0x12d)) + parseInt(z(0x185)) / (-0x125 * -0x1b + -0x9 * 0x389 + 0xf4 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x4 * -0x98a1 + 0x18c76 + -0x240bb));
var __importDefault = this && this[B(0x18f) + B(0x179)] || function (c) {
    const D = C;
    return c && c[D(0x194)] ? c : { 'default': c };
};
const k = {};
k[B(0x16b)] = !![], Object[C(0x19f) + C(0x192)](exports, C(0x194), k);
const path_1 = require(B(0x184)), logger_1 = require(B(0x162) + C(0x15d)), CampaignContacts_1 = __importDefault(require(B(0x189) + C(0x193) + B(0x16d))), wbot_baileys_1 = require(B(0x16a) + C(0x1a0)), SendMessagesSystemWbotBaileys_1 = require(B(0x1a1) + B(0x173) + B(0x182) + B(0x183) + C(0x169) + C(0x17c)), l = {};
l[B(0x18b)] = 0x3a98, l[C(0x16e)] = 0x2, l[B(0x17d) + B(0x171)] = !![], exports[C(0x170)] = {
    'key': B(0x186) + B(0x197) + B(0x163),
    'options': l,
    async 'handle'({data: i}) {
        const E = C, F = C, j = {};
        j[E(0x18c)] = F(0x160);
        const m = j;
        try {
            const n = (0x878 * -0x1 + -0x19b * -0x17 + -0x1c75, wbot_baileys_1[F(0x180)])(i[E(0x177)]);
            let o = {};
            const p = i[E(0x18a)] + (E(0x181) + F(0x176));
            if (i[E(0x172)]) {
                const t = (-0x3bf * -0x4 + -0x3 * 0x7c4 + 0x850, path_1[F(0x166)])(__dirname, '..', '..', m[E(0x18c)]), u = (0x1be3 + -0x623 * 0x2 + -0xf9d, path_1[E(0x166)])(t, i[F(0x17f)]), v = await (0x1e * -0x89 + 0x1 * 0x1336 + 0x8 * -0x65, SendMessagesSystemWbotBaileys_1[E(0x18d) + E(0x191)])(i[E(0x17f)], u, i[E(0x199)]);
                if (v) {
                    const w = { ...v };
                    o = await n[F(0x187) + 'e'](p, w);
                }
            } else {
                const x = {};
                x[E(0x19d)] = i[E(0x199)], o = await n[E(0x187) + 'e'](p, x);
            }
            const q = {};
            q[E(0x15b)] = o?.[E(0x161)]['id'], q[F(0x188) + E(0x15e)] = i[F(0x188) + E(0x15e)], q[F(0x17b)] = i[E(0x199)], q[F(0x17f)] = i[F(0x17f)], q[F(0x17e)] = o?.[F(0x16c) + F(0x174)], q[E(0x168)] = i[F(0x168)];
            const r = {};
            r['id'] = i[F(0x15f) + E(0x19b)]['id'];
            const s = {};
            return s[E(0x178)] = r, await CampaignContacts_1[E(0x170)][F(0x190)](q, s), o;
        } catch (y) {
            logger_1[E(0x17a)][F(0x198)](F(0x196) + E(0x167) + F(0x164) + '\x20' + y);
            throw new Error(y);
        }
    }
};