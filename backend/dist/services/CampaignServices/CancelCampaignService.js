'use strict';
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(u(0x16d)) / (-0x26f5 + 0xd26 + 0x1d8 * 0xe) + parseInt(v(0x142)) / (0x165a + -0x1cf + 0x7 * -0x2ef) * (-parseInt(v(0x155)) / (-0x5 * -0x24b + -0x1 * 0x26c3 + 0x1b4f)) + -parseInt(u(0x13e)) / (0x4e4 * -0x2 + -0x1d4a + 0x2716) * (parseInt(v(0x14c)) / (0x1d * -0x13c + 0x1a32 + -0x3 * -0x335)) + parseInt(v(0x145)) / (0x5 * -0x135 + 0x17b0 + 0x1 * -0x11a1) * (parseInt(u(0x175)) / (-0xfbb + 0x1460 + -0xc5 * 0x6)) + parseInt(u(0x146)) / (-0x25b0 + 0x18a + 0x242e) * (-parseInt(v(0x179)) / (-0x1 * -0x1025 + 0x16d7 + 0xd * -0x2ff)) + -parseInt(v(0x150)) / (-0x704 * 0x1 + 0x2426 + -0x1d18) * (-parseInt(v(0x178)) / (0x14ab + -0x1afe + 0x65e)) + parseInt(u(0x14f)) / (-0x144f + -0xf8f + 0x1 * 0x23ea) * (parseInt(v(0x152)) / (0x1e4a + 0xed9 + -0x2d16));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x58efc + -0x68986 + 0x128d6b));
var __importDefault = this && this[w(0x141) + x(0x174)] || function (c) {
    const y = x;
    return c && c[y(0x15c)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0xbc3 + 0x3cb + -0x189 * -0x6);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[x(0x156)] = !![], Object[x(0x154) + w(0x168)](exports, x(0x15c), k);
const bull_1 = __importDefault(require(x(0x169))), Campaign_1 = __importDefault(require(w(0x176) + x(0x144) + 'n')), AppError_1 = __importDefault(require(x(0x170) + w(0x159) + 'r')), CampaignContacts_1 = __importDefault(require(x(0x176) + x(0x144) + w(0x149))), CancelCampaignService = async ({
        campaignId: i,
        tenantId: j
    }) => {
        const z = w, A = w, l = {
                'GfGbu': z(0x173) + A(0x140) + z(0x160),
                'XzWHp': z(0x16b) + A(0x162) + z(0x13f),
                'nhpAS': function (p, q) {
                    return p(q);
                },
                'XMYAp': function (p, q) {
                    return p(q);
                },
                'KGgSw': z(0x172)
            }, m = {};
        m['id'] = i, m[A(0x158)] = j;
        const n = {};
        n[A(0x153)] = m;
        const o = await Campaign_1[z(0x164)][A(0x165)](n);
        if (!o)
            throw new AppError_1[(A(0x164))](l[z(0x171)], 0x1547 * 0x1 + -0x12 * -0x175 + 0x1 * -0x2ded);
        try {
            await (-0x1d49 + -0xb10 + -0xb * -0x3ab, bull_1[z(0x164)])(l[A(0x177)], {
                'redis': {
                    'port': l[A(0x15d)](Number, process[A(0x143)][A(0x14b) + A(0x157)]),
                    'host': process[A(0x143)][z(0x14d) + A(0x166)],
                    'db': l[A(0x163)](Number, process[A(0x143)][A(0x16c) + z(0x151)]) || -0x20e1 + 0x1 * -0x147d + -0x1ab0 * -0x2,
                    'password': process[A(0x143)][A(0x14b) + A(0x147)] || undefined
                }
            })[A(0x15a)](z(0x167) + '_' + o['id'] + '*');
            const p = {};
            p[A(0x15e)] = null, p[z(0x15b)] = null, p[A(0x16a)] = null, p[z(0x16e)] = 0x0, p[A(0x15f)] = null;
            const q = {};
            q[A(0x16f)] = o['id'], q[z(0x15f)] = null;
            const r = {};
            r[z(0x153)] = q, await CampaignContacts_1[z(0x164)][z(0x161)](p, r);
            const s = {};
            s[z(0x14a)] = l[A(0x14e)], await o[z(0x161)](s);
        } catch (t) {
            throw new AppError_1[(z(0x164))](A(0x148) + t, 0x2417 + -0x17d5 * -0x1 + -0x3a58);
        }
    };
exports[x(0x164)] = CancelCampaignService;
function a() {
    const B = [
        '../../mode',
        'XzWHp',
        '11011JfoKNv',
        '9SQCwaO',
        '3124KsydpT',
        'ampaign',
        'AIGN_NOT_E',
        '__importDe',
        '34trEzPP',
        'env',
        'ls/Campaig',
        '1317786oeacOK',
        '1683912MBmNLZ',
        'ASSWORD',
        'ERROR:\x20',
        'nContacts',
        'status',
        'IO_REDIS_P',
        '1430WhPtId',
        'IO_REDIS_S',
        'KGgSw',
        '3756rFLodU',
        '3710OhuEei',
        'B_SESSION',
        '55393lvlHab',
        'where',
        'defineProp',
        '41199DXaUbm',
        'value',
        'ORT',
        'tenantId',
        'rs/AppErro',
        'removeJobs',
        'mediaName',
        '__esModule',
        'nhpAS',
        'body',
        'messageId',
        'XISTS',
        'update',
        'eWhatsappC',
        'XMYAp',
        'default',
        'findOne',
        'ERVER',
        'campaginId',
        'erty',
        'bull',
        'timestamp',
        'SendMessag',
        'IO_REDIS_D',
        '834234umSrok',
        'ack',
        'campaignId',
        '../../erro',
        'GfGbu',
        'canceled',
        'ERROR_CAMP',
        'fault',
        '7xNNIga'
    ];
    a = function () {
        return B;
    };
    return a();
}