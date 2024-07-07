'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x16b)) / (-0x40f + 0x246c + -0x205c) + parseInt(o(0x15b)) / (-0x483 + 0x1946 + 0x1 * -0x14c1) + -parseInt(o(0x168)) / (-0x1 * -0x5da + -0x54d + 0x1 * -0x8a) * (parseInt(o(0x161)) / (0x6b5 * -0x4 + 0x359 * 0x7 + 0x369)) + parseInt(p(0x175)) / (-0x3d9 + 0x1061 * 0x1 + -0xc83 * 0x1) + parseInt(o(0x17c)) / (0x1165 + -0xf04 + -0x25b) + parseInt(o(0x159)) / (-0x1de7 + -0x1 * 0x27e + 0x33e * 0xa) * (-parseInt(p(0x174)) / (-0x1899 + -0x1906 + 0x31a7)) + parseInt(p(0x16e)) / (0x1602 + -0x1b69 + 0x8 * 0xae) * (-parseInt(p(0x16a)) / (0x8e * 0x29 + 0x5e1 + -0x1 * 0x1c95));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xd * 0x1d7d + -0x1f668 + 0x7 * 0xc452));
function a() {
    const v = [
        '52gMkwen',
        'attributes',
        '__importDe',
        '__esModule',
        'ERR_NO_USE',
        'eduOh',
        'pXmJh',
        '9681kELNgT',
        'njIVt',
        '10GWlKLU',
        '7825jalUqL',
        'fault',
        '../../erro',
        '164763MTqjKs',
        'where',
        'update',
        'name',
        'zoqQA',
        'configs',
        '40UegKLm',
        '277835kQDMtJ',
        'default',
        'erty',
        'value',
        'ls/User',
        'tenantId',
        'email',
        '1080288xGTYMA',
        'kFzRA',
        '143899Vjnuuy',
        '../../mode',
        '89312zssXIO',
        'defineProp',
        'profile',
        'R_FOUND',
        'rs/AppErro',
        'findOne'
    ];
    a = function () {
        return v;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x3 * 0x8db + -0x221 * -0x2 + -0x1d7b);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[q(0x163) + r(0x16c)] || function (c) {
    const s = r;
    return c && c[s(0x164)] ? c : { 'default': c };
};
const k = {};
k[r(0x178)] = !![], Object[q(0x15c) + r(0x177)](exports, q(0x164), k);
const AppError_1 = __importDefault(require(q(0x16d) + q(0x15f) + 'r')), User_1 = __importDefault(require(q(0x15a) + r(0x179))), UpdateUserConfigsService = async ({
        userConfigs: f,
        userId: g,
        tenantId: h
    }) => {
        const t = r, u = r, i = {};
        i[t(0x169)] = t(0x171), i[t(0x166)] = t(0x17b), i[u(0x172)] = u(0x15d), i[u(0x167)] = t(0x173), i[t(0x158)] = u(0x165) + u(0x15e);
        const j = i, l = {};
        l['id'] = g, l[u(0x17a)] = h;
        const m = {};
        m[u(0x16f)] = l, m[t(0x162)] = [
            j[t(0x169)],
            'id',
            j[u(0x166)],
            j[u(0x172)],
            j[t(0x167)]
        ];
        const n = await User_1[t(0x176)][t(0x160)](m);
        if (!n)
            throw new AppError_1[(u(0x176))](j[t(0x158)], -0x1fba + 0x1435 + 0xd19);
        await n[t(0x170)]({
            'configs': {
                ...n[t(0x173)],
                ...f
            }
        });
    };
exports[r(0x176)] = UpdateUserConfigsService;