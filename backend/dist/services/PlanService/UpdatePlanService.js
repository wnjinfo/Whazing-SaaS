'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0x119)) / (0x270 + 0x15b7 * -0x1 + 0x1348) * (-parseInt(q(0x104)) / (0x1 * -0x1eec + -0x271 * 0x5 + 0x2b23)) + -parseInt(q(0x11a)) / (-0x4c1 * 0x3 + 0x1793 + -0x1 * 0x94d) + parseInt(r(0x112)) / (0x1 * 0xf4d + 0x7af * -0x5 + 0x1722) * (-parseInt(q(0x118)) / (-0x625 + -0xc3b * 0x3 + 0x2adb)) + parseInt(q(0x117)) / (-0x2119 + 0x1 * -0x59 + 0x2178) + -parseInt(q(0x11e)) / (0xb27 + 0xf4c + -0x1a6c) * (-parseInt(r(0x11f)) / (-0xc90 + -0xbc1 + 0x1 * 0x1859)) + -parseInt(r(0x120)) / (-0x3e5 * 0x7 + -0x1cc2 * 0x1 + 0x52 * 0xaf) + parseInt(r(0x111)) / (0x1458 + 0x451 * 0x3 + -0x2141 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x12629 * 0x8 + 0x1 * 0x4aafd + 0x21112 * 0x6));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x12b8 * 0x2 + -0x841 * -0x1 + -0x1f * 0x171);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const x = [
        '__importDe',
        '../../mode',
        '13198860EvLEJW',
        '1491340nvGJQQ',
        'maxUsers',
        'vyeEm',
        'default',
        'defineProp',
        '3368832rCAwFm',
        '10ThNSHd',
        '11yGHCkD',
        '438657mfyZxO',
        'fault',
        '__esModule',
        'ls/Plan',
        '7BTiDTK',
        '4611416kOLYdo',
        '3911724HgRcKT',
        'maxConnect',
        'rs/AppErro',
        '111842HaVmws',
        'ions',
        'isPublic',
        'value',
        'findByPk',
        'update',
        'name',
        'N_FOUND',
        'erty',
        '../../erro',
        'ERR_NO_PLA'
    ];
    a = function () {
        return x;
    };
    return a();
}
var __importDefault = this && this[s(0x10f) + s(0x11b)] || function (c) {
    const u = s;
    return c && c[u(0x11c)] ? c : { 'default': c };
};
const k = {};
k[s(0x107)] = !![], Object[t(0x116) + s(0x10c)](exports, t(0x11c), k);
const AppError_1 = __importDefault(require(t(0x10d) + s(0x103) + 'r')), Plan_1 = __importDefault(require(s(0x110) + s(0x11d))), UpdatePlanService = async e => {
        const v = s, w = s, f = {};
        f[v(0x114)] = v(0x10e) + w(0x10b);
        const g = f, {
                id: h,
                name: i,
                maxUsers: j,
                maxConnections: l,
                value: m,
                isPublic: n
            } = e, o = await Plan_1[w(0x115)][v(0x108)](h);
        if (!o)
            throw new AppError_1[(v(0x115))](g[v(0x114)], -0x991 + 0x1285 + -0x760);
        const p = {};
        return p[v(0x10a)] = i, p[w(0x113)] = j, p[w(0x102) + w(0x105)] = l, p[w(0x107)] = m, p[w(0x106)] = n, await o[w(0x109)](p), o;
    };
exports[s(0x115)] = UpdatePlanService;