'use strict';
const B = b, C = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xd29 + 0xe3 * -0xd + 0xe * -0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(z(0x1ca)) / (-0x1b52 + 0x113f + -0x285 * -0x4) + parseInt(A(0x18e)) / (0x2061 + 0x193c * 0x1 + -0x1 * 0x399b) + -parseInt(z(0x1a1)) / (0x9b * 0x2d + 0x6ec + -0x2228) * (-parseInt(z(0x18b)) / (-0x19d7 + -0xc7a * 0x2 + 0x32cf)) + parseInt(z(0x19a)) / (-0x124 + 0x1 * -0x19bd + 0x1ae6) * (parseInt(z(0x1c7)) / (0x70c + 0x2223 + -0x2929)) + parseInt(A(0x19f)) / (-0x1fcf + 0x24e0 + -0x50a) + parseInt(A(0x1b6)) / (-0x3 * 0x5f2 + -0x6 * -0x148 + 0xa2e) + -parseInt(A(0x1a8)) / (-0x1278 + 0x1 * 0x298 + 0xfe9 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3e * -0x17b3 + -0x3e1 * -0x33e + -0x6bc46));
var __importDefault = this && this[B(0x1bc) + C(0x1be)] || function (c) {
    const D = B;
    return c && c[D(0x1ab)] ? c : { 'default': c };
};
const k = {};
k[C(0x1c8)] = !![], Object[C(0x1b0) + B(0x193)](exports, B(0x1ab), k);
function a() {
    const G = [
        'dom',
        'ntact',
        'defineProp',
        'leys',
        'temWbotBai',
        'ampaign',
        'mediaName',
        'body',
        '10014032sOAtga',
        'message',
        'mplete',
        'estamp',
        'sendMessag',
        'whatsappId',
        '__importDe',
        'mediaUrl',
        'fault',
        'campaignCo',
        's/WbotServ',
        'p.net',
        '@s.whatsap',
        'default',
        'timestamp',
        'logger',
        'number',
        '204atynUe',
        'value',
        'attempts',
        '1306783smuCmn',
        '../libs/wb',
        '../service',
        '../utils/l',
        'delay',
        'ot-baileys',
        'public',
        '3508300vuNcSD',
        'key',
        'Error\x20envi',
        '805512xeTScR',
        'eWhatsappC',
        'join',
        'messageTim',
        'getWbot',
        'erty',
        'text',
        'error',
        'path',
        'essagesSys',
        'where',
        'Options',
        '172905jrCKus',
        'CampaignCo',
        'removeOnCo',
        'SendMessag',
        'messageId',
        '7311094XIiwXa',
        'WRpxH',
        '3obIcNl',
        'getMessage',
        '../models/',
        'ogger',
        'jobId',
        'ntacts',
        'update',
        '24174612oNmDwp',
        'ices/SendM',
        'messageRan',
        '__esModule',
        'ar\x20message',
        '\x20campaign:'
    ];
    a = function () {
        return G;
    };
    return a();
}
const path_1 = require(C(0x196)), logger_1 = require(C(0x187) + B(0x1a4)), CampaignContacts_1 = __importDefault(require(C(0x1a3) + C(0x19b) + C(0x1a6))), wbot_baileys_1 = require(C(0x1cb) + C(0x189)), SendMessagesSystemWbotBaileys_1 = require(B(0x186) + C(0x1c0) + C(0x1a9) + C(0x197) + B(0x1b2) + B(0x1b1)), l = {};
l[C(0x188)] = 0x3a98, l[B(0x1c9)] = 0x2, l[C(0x19c) + B(0x1b8)] = !![], exports[B(0x1c3)] = {
    'key': B(0x19d) + C(0x18f) + B(0x1b3),
    'options': l,
    async 'handle'({data: i}) {
        const E = C, F = B, j = {};
        j[E(0x1a0)] = E(0x18a);
        const m = j;
        try {
            const n = (0x2 * 0x86f + -0x2 * -0x26e + 0x3 * -0x73e, wbot_baileys_1[E(0x192)])(i[E(0x1bb)]);
            let o = {};
            const p = i[E(0x1c6)] + (E(0x1c2) + E(0x1c1));
            if (i[F(0x1bd)]) {
                const t = (-0x1 * -0xc2d + -0x24fb + -0x19 * -0xfe, path_1[E(0x190)])(__dirname, '..', '..', m[E(0x1a0)]), u = (0x1953 * 0x1 + 0x4a1 * 0x3 + -0x2736, path_1[E(0x190)])(t, i[F(0x1b4)]), v = await (0x18 * 0x97 + -0x3b8 + -0xa70, SendMessagesSystemWbotBaileys_1[E(0x1a2) + F(0x199)])(i[F(0x1b4)], u, i[E(0x1b7)]);
                if (v) {
                    const w = { ...v };
                    o = await n[E(0x1ba) + 'e'](p, w);
                }
            } else {
                const x = {};
                x[E(0x194)] = i[E(0x1b7)], o = await n[E(0x1ba) + 'e'](p, x);
            }
            const q = {};
            q[E(0x19e)] = o?.[E(0x18c)]['id'], q[E(0x1aa) + E(0x1ae)] = i[E(0x1aa) + F(0x1ae)], q[E(0x1b5)] = i[E(0x1b7)], q[F(0x1b4)] = i[E(0x1b4)], q[F(0x1c4)] = o?.[F(0x191) + F(0x1b9)], q[F(0x1a5)] = i[F(0x1a5)];
            const r = {};
            r['id'] = i[E(0x1bf) + F(0x1af)]['id'];
            const s = {};
            return s[F(0x198)] = r, await CampaignContacts_1[F(0x1c3)][F(0x1a7)](q, s), o;
        } catch (y) {
            logger_1[F(0x1c5)][E(0x195)](F(0x18d) + E(0x1ac) + F(0x1ad) + '\x20' + y);
            throw new Error(y);
        }
    }
};