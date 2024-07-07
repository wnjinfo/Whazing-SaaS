'use strict';
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(u(0x7c)) / (-0x1 * -0x518 + -0x34 * -0x2b + -0xdd3) * (parseInt(u(0x7e)) / (-0xcf1 + -0xa2f + 0x3db * 0x6)) + -parseInt(u(0x99)) / (0xa1e + 0x2559 + 0x2 * -0x17ba) * (parseInt(u(0xad)) / (0x17f * 0x1a + 0x5 * 0x298 + -0x33da)) + -parseInt(v(0xb2)) / (0x1919 * 0x1 + 0x5 * -0x4d5 + -0xeb) * (-parseInt(v(0x77)) / (-0x4cb * -0x1 + 0x7de + 0x287 * -0x5)) + -parseInt(v(0xa7)) / (0x15b2 + 0x9 * 0x1e2 + -0xf * 0x293) + -parseInt(v(0xa3)) / (-0x10fa + 0x17b2 + -0x1ac * 0x4) * (parseInt(v(0x79)) / (0x20ff * -0x1 + 0x1c47 + -0x4c1 * -0x1)) + parseInt(u(0x92)) / (0x7 * -0x25e + -0xa61 + 0x31 * 0x8d) * (parseInt(u(0x8b)) / (0x2513 + -0x1dc1 * 0x1 + 0x747 * -0x1)) + parseInt(u(0x8e)) / (0x26 * -0xdb + -0x556 + 0x25e4) * (parseInt(v(0x83)) / (-0x41b * 0x5 + -0x1676 + -0x2b0a * -0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x10b1 * 0x1 + 0xd39df * -0x1 + 0x1 * 0x153339));
var __importDefault = this && this[w(0x93) + x(0xa8)] || function (c) {
    const y = w;
    return c && c[y(0x98)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x186f + -0xbd + -0x173b);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const B = [
        'messageId',
        'rs/AppErro',
        '12736DJoglj',
        'Mevxr',
        '12UqmnFC',
        'yFWSE',
        'ampaign',
        'KXpSu',
        'ERROR_CAMP',
        '768833cwQweO',
        'campaignId',
        'AIGN_NOT_E',
        'default',
        'ORT',
        'bull',
        'ack',
        'IO_REDIS_D',
        '39908aFUKfX',
        'value',
        'eSPYT',
        '132iosqFJ',
        'erty',
        'update',
        'ASSWORD',
        '810ULlafZ',
        '__importDe',
        'XISTS',
        'canceled',
        'removeJobs',
        'nContacts',
        '__esModule',
        '6aPXMzk',
        'IO_REDIS_S',
        'env',
        'where',
        'tenantId',
        '../../erro',
        'ERROR:\x20',
        'B_SESSION',
        'ERVER',
        'SendMessag',
        '24ugTNsC',
        'iEIFi',
        'ls/Campaig',
        'status',
        '281323zeokTp',
        'fault',
        'campaginId',
        'mediaName',
        'timestamp',
        'body',
        '1620616FtGrFR',
        'findOne',
        'defineProp',
        'IO_REDIS_P',
        'eWhatsappC',
        '1045bSVJJq',
        '21504LQpGUf',
        '../../mode',
        '719109zBHwPP'
    ];
    a = function () {
        return B;
    };
    return a();
}
k[x(0x8c)] = !![], Object[w(0xaf) + w(0x8f)](exports, x(0x98), k);
const bull_1 = __importDefault(require(w(0x88))), Campaign_1 = __importDefault(require(x(0x78) + w(0xa5) + 'n')), AppError_1 = __importDefault(require(x(0x9e) + w(0x7b) + 'r')), CampaignContacts_1 = __importDefault(require(w(0x78) + w(0xa5) + x(0x97))), CancelCampaignService = async ({
        campaignId: i,
        tenantId: j
    }) => {
        const z = x, A = w, l = {
                'iEIFi': z(0x82) + z(0x85) + z(0x94),
                'eSPYT': A(0xa2) + A(0xb1) + A(0x80),
                'KXpSu': function (p, q) {
                    return p(q);
                },
                'Mevxr': function (p, q) {
                    return p(q);
                },
                'yFWSE': A(0x95)
            }, m = {};
        m['id'] = i, m[A(0x9d)] = j;
        const n = {};
        n[z(0x9c)] = m;
        const o = await Campaign_1[A(0x86)][A(0xae)](n);
        if (!o)
            throw new AppError_1[(A(0x86))](l[A(0xa4)], -0x71a + 0x29 * -0x7d + 0x1cb3);
        try {
            await (0x18cf + -0xbf2 + -0xcdd, bull_1[A(0x86)])(l[A(0x8d)], {
                'redis': {
                    'port': l[z(0x81)](Number, process[z(0x9b)][z(0xb0) + A(0x87)]),
                    'host': process[z(0x9b)][A(0x9a) + z(0xa1)],
                    'db': l[A(0x7d)](Number, process[A(0x9b)][A(0x8a) + A(0xa0)]) || 0x209e + 0x795 + 0x1 * -0x2831,
                    'password': process[z(0x9b)][z(0xb0) + A(0x91)] || undefined
                }
            })[z(0x96)](z(0xa9) + '_' + o['id'] + '*');
            const p = {};
            p[A(0xac)] = null, p[A(0xaa)] = null, p[A(0xab)] = null, p[A(0x89)] = 0x0, p[z(0x7a)] = null;
            const q = {};
            q[z(0x84)] = o['id'], q[z(0x7a)] = null;
            const r = {};
            r[A(0x9c)] = q, await CampaignContacts_1[z(0x86)][A(0x90)](p, r);
            const s = {};
            s[A(0xa6)] = l[A(0x7f)], await o[z(0x90)](s);
        } catch (t) {
            throw new AppError_1[(A(0x86))](z(0x9f) + t, -0xe79 + -0x457 * -0x5 + -0x5a6);
        }
    };
exports[x(0x86)] = CancelCampaignService;