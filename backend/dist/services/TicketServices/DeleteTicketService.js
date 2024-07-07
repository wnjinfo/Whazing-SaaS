'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x1e3)) / (-0x1a83 + -0x34 * -0x9f + -0x5c8) * (parseInt(p(0x1df)) / (0x1 * -0x1e7c + -0x2339 * -0x1 + 0x4bb * -0x1)) + parseInt(p(0x1ee)) / (-0xd * 0xfa + 0x1437 + -0x782) * (-parseInt(p(0x1e9)) / (-0xfe0 * 0x1 + 0x2a3 + 0x179 * 0x9)) + -parseInt(o(0x1eb)) / (-0x1e20 + 0x3 * 0x85a + 0x517 * 0x1) * (-parseInt(o(0x1f4)) / (-0x18a3 + -0x1dfd + 0x36a6)) + parseInt(o(0x1f5)) / (0x22b2 + 0x1314 * -0x1 + -0xf97) + -parseInt(o(0x1db)) / (0x17 * 0x18e + 0x1226 + -0x35e0) + -parseInt(p(0x1f0)) / (0x25ba + -0x1 * -0x1fdb + -0x458c) + -parseInt(p(0x1da)) / (-0xe98 + -0x2223 + 0x30c5 * 0x1) * (-parseInt(o(0x1f1)) / (-0x24b5 + -0x4eb * 0x6 + 0x4242));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x983e * -0x9 + 0x3c1 * 0xca + 0x5a94f));
function a() {
    const v = [
        '__esModule',
        'erty',
        '1yihFVv',
        'etService',
        'delete',
        'ERR_NO_TIC',
        'ticketId',
        'type',
        '310324EHHtwn',
        '__importDe',
        '515VCmMrt',
        'rs/AppErro',
        './ShowTick',
        '6uDTqEo',
        '../../erro',
        '2542266elVtlr',
        '2530VHDByB',
        'userId',
        'tenantId',
        '15978lWmaAa',
        '1648227sSDtET',
        './CreateLo',
        'GPkKX',
        'fault',
        'MioJx',
        'defineProp',
        'gTicketSer',
        '21880Ifkzyr',
        '1301296MryXeh',
        'KET_FOUND',
        'value',
        'default',
        '396626wAtPkd',
        'vice'
    ];
    a = function () {
        return v;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xa8e + -0x2695 + 0x32f8);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[q(0x1ea) + r(0x1d6)] || function (c) {
    const s = q;
    return c && c[s(0x1e1)] ? c : { 'default': c };
};
const k = {};
k[q(0x1dd)] = !![], Object[q(0x1d8) + q(0x1e2)](exports, q(0x1e1), k);
const AppError_1 = __importDefault(require(r(0x1ef) + q(0x1ec) + 'r')), ShowTicketService_1 = __importDefault(require(q(0x1ed) + q(0x1e4))), CreateLogTicketService_1 = __importDefault(require(q(0x1f6) + r(0x1d9) + q(0x1e0))), DeleteTicketService = async ({
        id: f,
        tenantId: g,
        userId: h
    }) => {
        const t = q, u = q, i = {};
        i[t(0x1d5)] = t(0x1e6) + u(0x1dc), i[u(0x1d7)] = t(0x1e5);
        const j = i, l = {};
        l['id'] = f, l[u(0x1f3)] = g;
        const m = await (0x3a * 0x34 + 0xdd3 + -0x199b, ShowTicketService_1[t(0x1de)])(l);
        if (!m)
            throw new AppError_1[(t(0x1de))](j[u(0x1d5)], 0x21f9 + -0x4a * -0x20 + -0x29a5);
        const n = {};
        return n[u(0x1f2)] = h, n[t(0x1e7)] = m['id'], n[u(0x1e8)] = j[u(0x1d7)], await (-0x719 + -0x3 * 0x55 + 0x818, CreateLogTicketService_1[u(0x1de)])(n), m;
    };
exports[q(0x1de)] = DeleteTicketService;