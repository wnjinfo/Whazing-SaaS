'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x22fd + -0x27 * 0xab + -0x88b);
        let h = e[f];
        return h;
    }, b(c, d);
}
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(u(0x85)) / (0xf8c + 0x3 * -0x59a + 0x143) + parseInt(v(0x7a)) / (-0x5 * 0x7a1 + -0x1eca + 0x6f * 0x9f) * (-parseInt(v(0x66)) / (-0xf * -0x239 + -0xae1 * -0x1 + -0x2c35)) + -parseInt(u(0x69)) / (-0x180 * 0x9 + 0x1385 + -0x601) * (-parseInt(u(0x9e)) / (-0x2 * 0xb14 + -0x2d1 * -0x7 + -0x13b * -0x2)) + parseInt(u(0x92)) / (-0x36 * -0xa0 + 0x84 * -0x1 + -0x2136) * (parseInt(u(0x9d)) / (-0xabb + -0x30 + 0xaf2)) + -parseInt(u(0x87)) / (-0x18eb * -0x1 + 0x18d1 + -0x31b4) + -parseInt(u(0x7d)) / (0x1eb7 + -0xe3b + -0x1073) * (-parseInt(u(0x6f)) / (0x1 * -0x34a + -0xc2c + 0xf80)) + parseInt(u(0x93)) / (0x134f * -0x2 + -0x1544 + 0x3bed * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xd77e3 * 0x1 + 0x7dfea + 0x3a397 * 0x5));
function a() {
    const B = [
        'ORT',
        'ampaign',
        'IO_REDIS_P',
        'erty',
        'messageId',
        '10WOCuTX',
        'campaignId',
        'timestamp',
        'ERROR:\x20',
        'env',
        'eWhatsappC',
        'lyDPL',
        'bull',
        'SendMessag',
        'rs/AppErro',
        'mediaName',
        '2zZlzkF',
        'B_SESSION',
        'OEaRd',
        '12628665GKfuGc',
        'value',
        'canceled',
        '../../erro',
        'rnoxE',
        'findOne',
        'IO_REDIS_S',
        'qVeGu',
        '1355470SkOhxZ',
        '__importDe',
        '8926688TzrlpN',
        'ASSWORD',
        'default',
        'where',
        'ERROR_CAMP',
        'ERVER',
        'LiFTJ',
        'fault',
        'body',
        'update',
        'ack',
        '48yhbrHO',
        '3667994WzwtWg',
        'AIGN_NOT_E',
        'campaginId',
        'tenantId',
        'status',
        'defineProp',
        'ls/Campaig',
        'removeJobs',
        'XISTS',
        '__esModule',
        '433076ICHXMb',
        '5688470aPPxeY',
        'IO_REDIS_D',
        '216363seKtEI',
        '../../mode',
        'nContacts',
        '4QuOSBc'
    ];
    a = function () {
        return B;
    };
    return a();
}
var __importDefault = this && this[w(0x86) + x(0x8e)] || function (c) {
    const y = w;
    return c && c[y(0x9c)] ? c : { 'default': c };
};
const k = {};
k[x(0x7e)] = !![], Object[w(0x98) + w(0x6d)](exports, x(0x9c), k);
const bull_1 = __importDefault(require(x(0x76))), Campaign_1 = __importDefault(require(w(0x67) + w(0x99) + 'n')), AppError_1 = __importDefault(require(x(0x80) + x(0x78) + 'r')), CampaignContacts_1 = __importDefault(require(w(0x67) + x(0x99) + w(0x68))), CancelCampaignService = async ({
        campaignId: i,
        tenantId: j
    }) => {
        const z = w, A = w, l = {
                'rnoxE': z(0x8b) + z(0x94) + A(0x9b),
                'lyDPL': z(0x77) + A(0x74) + A(0x6b),
                'qVeGu': function (p, q) {
                    return p(q);
                },
                'LiFTJ': function (p, q) {
                    return p(q);
                },
                'OEaRd': z(0x7f)
            }, m = {};
        m['id'] = i, m[A(0x96)] = j;
        const n = {};
        n[z(0x8a)] = m;
        const o = await Campaign_1[A(0x89)][z(0x82)](n);
        if (!o)
            throw new AppError_1[(z(0x89))](l[A(0x81)], -0x8f2 + 0xd9a + -0x314);
        try {
            await (0xe * -0x23c + 0x638 * 0x3 + 0xca0, bull_1[A(0x89)])(l[A(0x75)], {
                'redis': {
                    'port': l[A(0x84)](Number, process[z(0x73)][z(0x6c) + A(0x6a)]),
                    'host': process[A(0x73)][z(0x83) + A(0x8c)],
                    'db': l[A(0x8d)](Number, process[z(0x73)][z(0x65) + z(0x7b)]) || 0x1 * -0x1139 + 0x15ca + -0x48f * 0x1,
                    'password': process[A(0x73)][z(0x6c) + z(0x88)] || undefined
                }
            })[A(0x9a)](z(0x95) + '_' + o['id'] + '*');
            const p = {};
            p[A(0x8f)] = null, p[z(0x79)] = null, p[A(0x71)] = null, p[z(0x91)] = 0x0, p[z(0x6e)] = null;
            const q = {};
            q[z(0x70)] = o['id'], q[A(0x6e)] = null;
            const r = {};
            r[A(0x8a)] = q, await CampaignContacts_1[z(0x89)][z(0x90)](p, r);
            const s = {};
            s[z(0x97)] = l[z(0x7c)], await o[A(0x90)](s);
        } catch (t) {
            throw new AppError_1[(A(0x89))](z(0x72) + t, -0x3 * 0xca7 + 0xa7 * -0x2a + 0x42ef);
        }
    };
exports[w(0x89)] = CancelCampaignService;