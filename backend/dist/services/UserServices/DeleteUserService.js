'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x16e)) / (0x1d65 + -0x1714 + 0x328 * -0x2) + -parseInt(s(0x16c)) / (0x21e1 + -0x445 * -0x4 + 0x1 * -0x32f3) * (-parseInt(r(0x15f)) / (-0x49 * 0xd + -0x19 * -0x7f + -0x2e5 * 0x3)) + -parseInt(r(0x186)) / (0x37a * 0x1 + 0x1675 + -0x19eb) * (-parseInt(s(0x17d)) / (0x1dbf + -0x1 * 0x2593 + 0x7d9)) + -parseInt(r(0x16b)) / (-0x2e * -0xa + 0x3 * 0x7bc + 0x18fa * -0x1) + -parseInt(s(0x17f)) / (-0xa8d + -0x1 * -0x22f5 + -0x1861) + parseInt(s(0x17c)) / (0x53a + -0x535 * 0x5 + -0x14d7 * -0x1) * (-parseInt(r(0x184)) / (-0x2658 + -0x387 + 0x29e8)) + parseInt(s(0x177)) / (0x2389 + -0x1909 + -0x1 * 0xa76) * (-parseInt(s(0x15e)) / (-0x1 * 0x1dd + -0x1 * 0x6bc + 0x8a4));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x5fa9a + -0x1a * -0x308b + 0x946c5));
var __importDefault = this && this[t(0x162) + t(0x169)] || function (c) {
    const v = t;
    return c && c[v(0x165)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1aea + 0x1d84 + 0x2 * -0x9e);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[t(0x185)] = !![], Object[t(0x160) + t(0x181)](exports, u(0x165), k);
function a() {
    const y = [
        '../../help',
        '459030XFaPLb',
        '2TTcwml',
        '../../erro',
        '42796vtTSGm',
        'destroy',
        'rOpenTicke',
        'tickets',
        'wlMVq',
        'kUCFb',
        'R_FOUND',
        'ls/User',
        'tsStatus',
        '5680cbCvWX',
        'rs/AppErro',
        '../../mode',
        'DKZoI',
        'ERR_NO_USE',
        '456nkieQJ',
        '65evzqFr',
        'findOne',
        '108262VcBFnm',
        'ers/Update',
        'erty',
        'lKfjA',
        'length',
        '42822PPAcwq',
        'value',
        '58852gZAHHs',
        'open',
        '7414uEfGBO',
        '3153459GIPtGd',
        'defineProp',
        '$get',
        '__importDe',
        'where',
        'default',
        '__esModule',
        'qmIxu',
        'tenantId',
        'DeletedUse',
        'fault'
    ];
    a = function () {
        return y;
    };
    return a();
}
const User_1 = __importDefault(require(u(0x179) + u(0x175))), AppError_1 = __importDefault(require(u(0x16d) + t(0x178) + 'r')), UpdateDeletedUserOpenTicketsStatus_1 = __importDefault(require(u(0x16a) + t(0x180) + t(0x168) + t(0x170) + t(0x176))), DeleteUserService = async (f, g, h) => {
        const w = u, x = t, i = {};
        i[w(0x17a)] = function (p, q) {
            return p !== q;
        }, i[w(0x166)] = w(0x17b) + w(0x174), i[w(0x172)] = x(0x171), i[x(0x182)] = w(0x187), i[w(0x173)] = function (p, q) {
            return p > q;
        };
        const j = i, l = {};
        l['id'] = f, l[x(0x167)] = g;
        const m = {};
        m[w(0x163)] = l;
        const n = await User_1[w(0x164)][x(0x17e)](m);
        if (!n || j[x(0x17a)](g, n[w(0x167)]))
            throw new AppError_1[(w(0x164))](j[x(0x166)], 0x4a * -0x7c + 0x1682 + -0x1 * -0xeea);
        const o = await n[w(0x161)](j[x(0x172)], {
            'where': {
                'status': j[x(0x182)],
                'tenantId': g
            }
        });
        j[w(0x173)](o[x(0x183)], 0xffb + 0x8c8 + -0x18c3 * 0x1) && (-0x7d * 0xe + 0x23ee + -0x1d18, UpdateDeletedUserOpenTicketsStatus_1[w(0x164)])(o, g, h), await n[w(0x16f)]();
    };
exports[t(0x164)] = DeleteUserService;