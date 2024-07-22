'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0xa0)) / (0x71e + 0x2278 + 0x1 * -0x2995) + parseInt(o(0x94)) / (0x2 * -0x565 + -0x4 * 0x222 + 0x2 * 0x9aa) * (parseInt(p(0x9c)) / (-0x1414 + -0x3 * 0xcf5 + 0x2 * 0x1d7b)) + -parseInt(o(0x9a)) / (-0x1 * -0x1781 + -0x224d * -0x1 + -0x39ca) * (parseInt(p(0x91)) / (0xf7e + 0xa3c + -0x19b5)) + -parseInt(p(0x92)) / (0x1d1a * 0x1 + 0x1 * 0x20c3 + -0x149d * 0x3) * (-parseInt(o(0xa3)) / (-0x3b3 * -0x3 + 0x7ed * -0x1 + -0x325)) + parseInt(o(0x99)) / (0x35 * 0xf + 0x98 * -0x9 + -0x53 * -0x7) + -parseInt(p(0x9f)) / (0x1c0e + -0x1cbb * -0x1 + 0x1c60 * -0x2) + parseInt(o(0xa1)) / (0x8bd + 0x233 * 0x11 + -0x2b6 * 0x11) * (parseInt(o(0x85)) / (0x2 * 0x18d + 0x14d5 + -0x17e4));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2e07b + -0x174f3e + 0xb * 0x3916f));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1bcd + -0x1454 + 0x89 * -0xd);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[q(0x8f) + q(0x8a)] || function (c) {
    const s = q;
    return c && c[s(0xa4)] ? c : { 'default': c };
};
const k = {};
function a() {
    const v = [
        'type',
        '4144256AgQJeQ',
        '840380OeOkCm',
        'vice',
        '12165pCZJup',
        'default',
        'ticketId',
        '2369952OptIqw',
        '1029173HZLqKW',
        '13990YblTMj',
        'etService',
        '11062030WDqRMR',
        '__esModule',
        'userId',
        'ERR_NO_TIC',
        '4235buoAtI',
        '../../erro',
        'delete',
        'rs/AppErro',
        'tenantId',
        'fault',
        './ShowTick',
        'KET_FOUND',
        'motjV',
        'erty',
        '__importDe',
        './CreateLo',
        '15mzuBNd',
        '6HskISE',
        'defineProp',
        '70UdNcNo',
        'gTicketSer',
        'KDGYM',
        'value'
    ];
    a = function () {
        return v;
    };
    return a();
}
k[r(0x97)] = !![], Object[q(0x93) + q(0x8e)](exports, q(0xa4), k);
const AppError_1 = __importDefault(require(q(0x86) + r(0x88) + 'r')), ShowTicketService_1 = __importDefault(require(q(0x8b) + r(0xa2))), CreateLogTicketService_1 = __importDefault(require(q(0x90) + r(0x95) + q(0x9b))), DeleteTicketService = async ({
        id: f,
        tenantId: g,
        userId: h
    }) => {
        const t = q, u = q, i = {};
        i[t(0x8d)] = u(0x84) + t(0x8c), i[u(0x96)] = u(0x87);
        const j = i, l = {};
        l['id'] = f, l[t(0x89)] = g;
        const m = await (-0x2088 + -0x333 + 0x3 * 0xbe9, ShowTicketService_1[t(0x9d)])(l);
        if (!m)
            throw new AppError_1[(t(0x9d))](j[t(0x8d)], -0x241b + 0x866 * -0x3 + -0x3ee1 * -0x1);
        const n = {};
        return n[t(0xa5)] = h, n[t(0x9e)] = m['id'], n[t(0x98)] = j[t(0x96)], await (0x5 * -0x355 + -0xc3d + 0x1ce6, CreateLogTicketService_1[t(0x9d)])(n), m;
    };
exports[q(0x9d)] = DeleteTicketService;