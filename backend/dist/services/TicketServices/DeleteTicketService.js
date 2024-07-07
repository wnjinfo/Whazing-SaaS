'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x17d)) / (0x4d8 + -0x6b5 + 0x1de) + parseInt(p(0x18a)) / (-0x831 + -0x1a + -0x84d * -0x1) * (parseInt(p(0x18b)) / (-0xc8e + -0xc * 0x191 + -0x1 * -0x1f5d)) + -parseInt(p(0x188)) / (0x2 * 0x1171 + 0x1 * -0x2200 + -0xde * 0x1) * (parseInt(p(0x176)) / (-0x39b * 0xa + 0x1293 + 0x1180)) + parseInt(p(0x182)) / (-0x2665 * -0x1 + 0xbed * 0x2 + 0x3a9 * -0x11) * (parseInt(o(0x17e)) / (-0xdaf * -0x1 + -0x1 * 0x1bdf + 0xe37)) + -parseInt(o(0x171)) / (-0xfd7 + -0x227 * 0x3 + 0x1654) * (-parseInt(o(0x17f)) / (0x3 * 0x7ef + 0x2f * -0x1d + -0x1271)) + parseInt(o(0x183)) / (0x6 * 0x371 + -0x175b + 0x2bf) * (-parseInt(p(0x189)) / (-0xf1b + -0x10d + 0x1d * 0x8f)) + -parseInt(o(0x18e)) / (0xa1a + 0x1b4a + -0x2558);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0x5f9f3 + 0xa43d1 + -0x3 * 0x33930));
var __importDefault = this && this[q(0x178) + r(0x17b)] || function (c) {
    const s = r;
    return c && c[s(0x17a)] ? c : { 'default': c };
};
const k = {};
function a() {
    const v = [
        'fault',
        'default',
        '176275jYADCR',
        '24493RqoIkJ',
        '252tmClcn',
        'ERR_NO_TIC',
        'type',
        '1182PeNPgL',
        '269510BEjRVa',
        'tenantId',
        'KET_FOUND',
        './CreateLo',
        'userId',
        '67172vYWozx',
        '11fsbZIi',
        '575702MucYhA',
        '6lEkJVH',
        'rs/AppErro',
        'gTicketSer',
        '10966296aXkLBM',
        'value',
        'etService',
        'pzfEK',
        './ShowTick',
        'erty',
        '181536UrdeEo',
        'ticketId',
        '../../erro',
        'DtdEA',
        'delete',
        '105WeVlkQ',
        'vice',
        '__importDe',
        'defineProp',
        '__esModule'
    ];
    a = function () {
        return v;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xb0d + -0x2204 + -0x1 * -0x1865);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[r(0x18f)] = !![], Object[q(0x179) + q(0x170)](exports, q(0x17a), k);
const AppError_1 = __importDefault(require(q(0x173) + r(0x18c) + 'r')), ShowTicketService_1 = __importDefault(require(q(0x16f) + r(0x190))), CreateLogTicketService_1 = __importDefault(require(q(0x186) + r(0x18d) + r(0x177))), DeleteTicketService = async ({
        id: f,
        tenantId: g,
        userId: h
    }) => {
        const t = r, u = r, i = {};
        i[t(0x16e)] = u(0x180) + u(0x185), i[u(0x174)] = u(0x175);
        const j = i, l = {};
        l['id'] = f, l[u(0x184)] = g;
        const m = await (0x1a3e + -0xe * -0xfc + -0x2806 * 0x1, ShowTicketService_1[u(0x17c)])(l);
        if (!m)
            throw new AppError_1[(u(0x17c))](j[t(0x16e)], -0x1f7d * 0x1 + 0x1 * -0x2155 + -0x6 * -0xb11);
        const n = {};
        return n[t(0x187)] = h, n[t(0x172)] = m['id'], n[u(0x181)] = j[t(0x174)], await (-0x1cba + 0x3 * -0x1aa + 0x21b8, CreateLogTicketService_1[t(0x17c)])(n), m;
    };
exports[q(0x17c)] = DeleteTicketService;