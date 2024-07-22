'use strict';
function a() {
    const x = [
        '20EWbvEv',
        'ions',
        'value',
        'fault',
        '../../erro',
        'mBtvk',
        '__esModule',
        '997405XhHvEN',
        'maxUsers',
        'defineProp',
        'default',
        '15453112QnwWsm',
        '386538RgTfcH',
        'rs/AppErro',
        'erty',
        '../../mode',
        '4689222NsrPgy',
        'update',
        'ls/Plan',
        'maxConnect',
        'name',
        '2414rZSsFb',
        'findByPk',
        'N_FOUND',
        '2659048HMAwAQ',
        'isPublic',
        'ERR_NO_PLA',
        '1279365blJeyf',
        '__importDe'
    ];
    a = function () {
        return x;
    };
    return a();
}
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0x147)) / (-0xc3e * -0x3 + 0x2648 + -0x7 * 0xab7) + -parseInt(q(0x133)) / (-0x35c + 0x1341 + -0xfe3) + parseInt(r(0x139)) / (-0x1 * -0x24f9 + 0x2bf * 0x5 + -0x32b1) + -parseInt(q(0x13b)) / (0x20a7 * -0x1 + 0x22a3 * 0x1 + -0x1f8) * (parseInt(r(0x142)) / (0x4ef * -0x4 + 0x1771 + 0x76 * -0x8)) + -parseInt(r(0x12e)) / (-0x1f9c * -0x1 + 0x1 * -0x1039 + -0xf5d) + -parseInt(q(0x136)) / (0x1 * -0x3d7 + -0x67d + 0xa5b) + parseInt(q(0x146)) / (-0x367 + 0x16 * -0x6d + 0xccd);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x6fa5a + -0x35533 * 0x5 + 0x2a * 0xc67a));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2f * 0x39 + 0x1cc7 + -0x1123);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[s(0x13a) + s(0x13e)] || function (c) {
    const u = s;
    return c && c[u(0x141)] ? c : { 'default': c };
};
const k = {};
k[s(0x13d)] = !![], Object[s(0x144) + s(0x149)](exports, t(0x141), k);
const AppError_1 = __importDefault(require(s(0x13f) + t(0x148) + 'r')), Plan_1 = __importDefault(require(t(0x12d) + t(0x130))), UpdatePlanService = async e => {
        const v = s, w = t, f = {};
        f[v(0x140)] = w(0x138) + v(0x135);
        const g = f, {
                id: h,
                name: i,
                maxUsers: j,
                maxConnections: l,
                value: m,
                isPublic: n
            } = e, o = await Plan_1[v(0x145)][w(0x134)](h);
        if (!o)
            throw new AppError_1[(v(0x145))](g[v(0x140)], 0x7 * -0x423 + -0x1a57 + -0x23 * -0x1a0);
        const p = {};
        return p[w(0x132)] = i, p[v(0x143)] = j, p[v(0x131) + w(0x13c)] = l, p[w(0x13d)] = m, p[w(0x137)] = n, await o[v(0x12f)](p), o;
    };
exports[s(0x145)] = UpdatePlanService;