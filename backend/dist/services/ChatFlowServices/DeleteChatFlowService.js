'use strict';
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x9c)) / (0x4 * -0x4b1 + -0x1ffe + 0x32c3) * (parseInt(s(0x95)) / (-0x1b22 + -0x17f2 + 0x198b * 0x2)) + parseInt(r(0x93)) / (0x2430 + 0x25e8 + 0x4a15 * -0x1) + -parseInt(r(0x84)) / (0x233f + -0x1 * -0x1e26 + -0x4161) + -parseInt(s(0x9b)) / (-0x55b + 0x2 * 0x1192 + 0x2 * -0xee2) + -parseInt(r(0x8d)) / (0x1080 + 0x17dd * 0x1 + -0x2857) + -parseInt(r(0x7d)) / (0x2 * 0x12c1 + 0x6d * -0x47 + -0x740) * (parseInt(r(0x7e)) / (-0x1 * 0x717 + -0x4f * -0x45 + -0xe2c)) + parseInt(r(0x80)) / (-0x1e3d + -0x1a1b + 0x3861);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x12718e + 0x1 * 0x81e31 + 0x1618f0));
var __importDefault = this && this[t(0x91) + t(0x92)] || function (c) {
    const v = u;
    return c && c[v(0x7f)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1e03 + -0x1d61 + 0x27 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const y = [
        'promisify',
        'value',
        '../../erro',
        '1485885FHVseH',
        '43XVGhEV',
        'EUGWh',
        'isDeleted',
        '../../mode',
        'dDrXP',
        '154LURIjR',
        '61888nQMlPX',
        '__esModule',
        '17978490rxIUpv',
        'T_FLOW_FOU',
        'tenantId',
        'vSvJr',
        '924880SMcPVj',
        'util',
        'reload',
        'isActive',
        'rs/AppErro',
        'ERR_NO_CHA',
        'defineProp',
        'erty',
        'ls/ChatFlo',
        '2853468jJYorp',
        'where',
        'default',
        'attributes',
        '__importDe',
        'fault',
        '2813160SpMugH',
        'writeFile',
        '46032EryHwW',
        'update',
        'findOne'
    ];
    a = function () {
        return y;
    };
    return a();
}
k[t(0x99)] = !![], Object[u(0x8a) + u(0x8b)](exports, t(0x7f), k);
const util_1 = require(t(0x85)), fs_1 = require('fs'), ChatFlow_1 = __importDefault(require(u(0x7b) + t(0x8c) + 'w')), AppError_1 = __importDefault(require(u(0x9a) + t(0x88) + 'r')), writeFileAsync = (0x9 * -0x1d5 + 0xe65 + -0x10c * -0x2, util_1[u(0x98)])(fs_1[t(0x94)]), DeleteChatFlowService = async ({
        id: h,
        tenantId: i
    }) => {
        const w = u, x = u, j = {};
        j[w(0x83)] = x(0x89) + w(0x81) + 'ND', j[x(0x9d)] = w(0x87), j[w(0x7c)] = w(0x9e);
        const l = j, m = {};
        m['id'] = h, m[w(0x82)] = i;
        const n = {};
        n[x(0x8e)] = m;
        const o = await ChatFlow_1[x(0x8f)][w(0x97)](n);
        if (!o)
            throw new AppError_1[(x(0x8f))](l[w(0x83)], 0x1dfe + -0x1 * -0xb65 + -0x27cf);
        const p = {};
        p[x(0x87)] = ![], p[w(0x9e)] = !![], await o[w(0x96)](p);
        const q = {};
        q[x(0x90)] = [
            l[x(0x9d)],
            l[w(0x7c)]
        ], await o[w(0x86)](q);
    };
exports[t(0x8f)] = DeleteChatFlowService;