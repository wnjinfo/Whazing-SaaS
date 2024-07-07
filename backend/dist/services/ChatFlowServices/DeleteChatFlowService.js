'use strict';
const t = b, u = b;
function a() {
    const y = [
        'isDeleted',
        'util',
        'InBAZ',
        '__esModule',
        'isActive',
        'where',
        'ERR_NO_CHA',
        '__importDe',
        'YYFks',
        '8694378KVERdG',
        'writeFile',
        '../../erro',
        'AEmzB',
        'default',
        'value',
        'defineProp',
        '2fAksvS',
        '3340OXtWKl',
        '7980VtnvYo',
        '753QQTONr',
        '380408tNAdOd',
        'tenantId',
        'update',
        'findOne',
        'reload',
        'attributes',
        '32205294IxlnEp',
        '../../mode',
        'ls/ChatFlo',
        '7530530skMFDu',
        '133tCCkwp',
        'promisify',
        'erty',
        'T_FLOW_FOU',
        '1052011iRPTYK',
        'rs/AppErro',
        'fault',
        '6092wHBPks'
    ];
    a = function () {
        return y;
    };
    return a();
}
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x1f0)) / (-0x1 * 0x1cd5 + 0x1960 + -0x376 * -0x1) * (parseInt(r(0x1de)) / (-0x1 * -0x1bd3 + -0x9 * 0xbd + -0x152c)) + -parseInt(r(0x1e1)) / (-0x417 * -0x4 + -0x12ad + 0x254) * (-parseInt(s(0x1cd)) / (0xa13 + 0x24b6 + -0x2ec5)) + -parseInt(r(0x1df)) / (0x1c9b + 0xb7 * -0xb + 0x425 * -0x5) * (parseInt(r(0x1e0)) / (-0x71 * -0x56 + 0x1 * -0xb67 + 0x1 * -0x1a89)) + parseInt(r(0x1ec)) / (0x1055 + -0x3 * -0x1c1 + 0x1591 * -0x1) * (parseInt(r(0x1e2)) / (-0xdec + 0x1ae9 * 0x1 + -0x6b * 0x1f)) + -parseInt(r(0x1d7)) / (-0xd03 * -0x1 + 0x83 * 0x2f + -0x1 * 0x2507) + -parseInt(r(0x1eb)) / (0x84e + 0x2 * -0xebc + 0x1534) + parseInt(r(0x1e8)) / (0x90f * -0x3 + -0x43d + 0x1f75 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xb9e * -0x25 + 0x4855b * -0x3 + 0x145619));
var __importDefault = this && this[t(0x1d5) + t(0x1cc)] || function (c) {
    const v = u;
    return c && c[v(0x1d1)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1c7c + 0x20b9 * 0x1 + -0x3b6a);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[u(0x1dc)] = !![], Object[t(0x1dd) + u(0x1ee)](exports, t(0x1d1), k);
const util_1 = require(u(0x1cf)), fs_1 = require('fs'), ChatFlow_1 = __importDefault(require(u(0x1e9) + t(0x1ea) + 'w')), AppError_1 = __importDefault(require(t(0x1d9) + u(0x1cb) + 'r')), writeFileAsync = (0x14b5 + 0xc47 * 0x2 + -0x2d43, util_1[t(0x1ed)])(fs_1[t(0x1d8)]), DeleteChatFlowService = async ({
        id: h,
        tenantId: i
    }) => {
        const w = t, x = u, j = {};
        j[w(0x1da)] = x(0x1d4) + x(0x1ef) + 'ND', j[x(0x1d6)] = w(0x1d2), j[x(0x1d0)] = w(0x1ce);
        const l = j, m = {};
        m['id'] = h, m[w(0x1e3)] = i;
        const n = {};
        n[w(0x1d3)] = m;
        const o = await ChatFlow_1[w(0x1db)][w(0x1e5)](n);
        if (!o)
            throw new AppError_1[(x(0x1db))](l[x(0x1da)], 0x921 + -0xd * -0x2ff + -0x2e80);
        const p = {};
        p[w(0x1d2)] = ![], p[x(0x1ce)] = !![], await o[x(0x1e4)](p);
        const q = {};
        q[w(0x1e7)] = [
            l[x(0x1d6)],
            l[x(0x1d0)]
        ], await o[x(0x1e6)](q);
    };
exports[t(0x1db)] = DeleteChatFlowService;