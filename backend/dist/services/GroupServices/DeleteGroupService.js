'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x82)) / (0x3b * -0x32 + 0x26b6 + -0x1 * 0x1b2f) * (-parseInt(p(0x84)) / (0x250 * 0xe + 0xf * -0x26e + 0xae * 0x6)) + parseInt(p(0x88)) / (-0x1681 + 0x264e * 0x1 + -0xfca) + -parseInt(o(0x7d)) / (-0x1 * 0x24df + 0xe24 + 0x795 * 0x3) + -parseInt(p(0x86)) / (0xd6d + 0xd * 0x16f + -0x200b) + parseInt(p(0x8f)) / (-0x1b77 + -0x1a8c + 0x3609) + parseInt(p(0x92)) / (0xc8 * 0x2e + -0x5ad * -0x2 + -0x6f * 0x6d) * (-parseInt(p(0x7a)) / (-0x703 * -0x5 + 0x15c * 0x15 + -0x3f93)) + parseInt(p(0x83)) / (0x2372 + -0x244b + 0x71 * 0x2);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x17a47 + -0x82ab3 * -0x1 + 0x277d2));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x272 * -0xd + 0x5 * -0xc0 + 0x126 * -0x18);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[q(0x7b) + r(0x95)] || function (c) {
    const s = r;
    return c && c[s(0x91)] ? c : { 'default': c };
};
const k = {};
function a() {
    const v = [
        '__importDe',
        '../../erro',
        '246640fRdahI',
        'default',
        'ERR_GRUOP_',
        'IkVRw',
        'NO_EXISTS',
        '8757SoyFdt',
        '15136119BSGsny',
        '166OUpnYj',
        'ls/Group',
        '5727855LfGlEH',
        'tenantId',
        '2053458Uaydbq',
        'rs/AppErro',
        '../../mode',
        'where',
        'destroy',
        'erty',
        'value',
        '5900442IfbzcB',
        'WpOYh',
        '__esModule',
        '43246FrDQPH',
        'ERR_NO_GRO',
        'defineProp',
        'fault',
        'UP_FOUND',
        'findOne',
        '1056KQBUce'
    ];
    a = function () {
        return v;
    };
    return a();
}
k[q(0x8e)] = !![], Object[r(0x94) + r(0x8d)](exports, q(0x91), k);
const AppError_1 = __importDefault(require(q(0x7c) + r(0x89) + 'r')), Group_1 = __importDefault(require(r(0x8a) + q(0x85))), DeleteGroupService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = r, u = r, h = {};
        h[t(0x90)] = u(0x93) + t(0x96), h[t(0x80)] = u(0x7f) + u(0x81);
        const i = h, j = {};
        j['id'] = f, j[u(0x87)] = g;
        const l = {};
        l[t(0x8b)] = j;
        const m = await Group_1[u(0x7e)][t(0x97)](l);
        if (!m)
            throw new AppError_1[(t(0x7e))](i[t(0x90)], -0x349 * 0x8 + 0x18e1 + 0x2fb);
        try {
            await m[u(0x8c)]();
        } catch (n) {
            throw new AppError_1[(t(0x7e))](i[u(0x80)], 0x53 * -0x6d + -0x24c3 + 0x49ae);
        }
    };
exports[q(0x7e)] = DeleteGroupService;