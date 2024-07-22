'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x163)) / (0x1 * -0x1715 + 0xfe * -0xb + 0x2200) * (-parseInt(o(0x15c)) / (-0x2 * -0x89b + -0x5 * -0x251 + 0x1 * -0x1cc9)) + -parseInt(o(0x15f)) / (-0x43 * -0x3 + -0x1 * 0x1af5 + -0x1a2f * -0x1) * (-parseInt(p(0x16d)) / (-0x219b + 0x2 * 0x10c9 + 0x1 * 0xd)) + -parseInt(o(0x162)) / (-0x19f9 + 0x1c4a + -0x24c) * (-parseInt(p(0x153)) / (0x1 * -0x50b + 0x851 + -0x340)) + parseInt(p(0x16c)) / (0xcd9 + -0x2 * 0x9d0 + 0x6ce) + -parseInt(p(0x177)) / (0x1651 + -0xb72 + -0x5 * 0x22b) + -parseInt(o(0x16e)) / (-0x1 * 0x147 + -0x926 * -0x3 + -0x1 * 0x1a22) * (parseInt(o(0x154)) / (-0x22ef * 0x1 + 0x1af7 + 0x802)) + -parseInt(p(0x161)) / (0x51e * -0x7 + -0x26c7 + 0x4aa4) * (parseInt(o(0x174)) / (0x1ee9 * -0x1 + 0x789 + 0x2 * 0xbb6));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xa972 * 0x4 + -0x5275e + -0x1 * -0xcdba1));
var __importDefault = this && this[q(0x168) + q(0x15d)] || function (c) {
    const s = q;
    return c && c[s(0x15e)] ? c : { 'default': c };
};
const k = {};
k[r(0x175)] = !![], Object[q(0x157) + q(0x151)](exports, r(0x15e), k);
function a() {
    const v = [
        'tenantId',
        'ERR_NO_USE',
        'Ykqyt',
        '132gvMPaE',
        'value',
        'fteZJ',
        '2113192IOFCNd',
        'erty',
        'configs',
        '6IdthxX',
        '30eyTadz',
        'attributes',
        'name',
        'defineProp',
        'ls/User',
        'findOne',
        'email',
        'YsbIz',
        '298eUaJft',
        'fault',
        '__esModule',
        '33VnWoxC',
        'rs/AppErro',
        '269137DmKPUa',
        '2290020gMZEDK',
        '1028tfBjDF',
        'where',
        'R_FOUND',
        'default',
        'update',
        '__importDe',
        '../../erro',
        '../../mode',
        'kGyWs',
        '4030663lWWGsW',
        '130172YRKlbK',
        '1121823XshdbX',
        'lHQXx',
        'profile'
    ];
    a = function () {
        return v;
    };
    return a();
}
const AppError_1 = __importDefault(require(r(0x169) + q(0x160) + 'r')), User_1 = __importDefault(require(r(0x16a) + q(0x158))), UpdateUserConfigsService = async ({
        userConfigs: f,
        userId: g,
        tenantId: h
    }) => {
        const t = r, u = q, i = {};
        i[t(0x16f)] = u(0x156), i[u(0x176)] = u(0x15a), i[t(0x15b)] = u(0x170), i[u(0x16b)] = t(0x152), i[u(0x173)] = t(0x172) + t(0x165);
        const j = i, l = {};
        l['id'] = g, l[t(0x171)] = h;
        const m = {};
        m[u(0x164)] = l, m[t(0x155)] = [
            j[t(0x16f)],
            'id',
            j[u(0x176)],
            j[u(0x15b)],
            j[t(0x16b)]
        ];
        const n = await User_1[u(0x166)][t(0x159)](m);
        if (!n)
            throw new AppError_1[(t(0x166))](j[u(0x173)], -0x167 + -0x10e2 + 0x13dd);
        await n[t(0x167)]({
            'configs': {
                ...n[t(0x152)],
                ...f
            }
        });
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x14d4 + 0x2494 + -0x2e3 * 0x5);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[r(0x166)] = UpdateUserConfigsService;