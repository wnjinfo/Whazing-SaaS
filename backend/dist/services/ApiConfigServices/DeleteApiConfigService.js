'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x1c0)) / (0xae7 * -0x1 + 0xa7 * -0x7 + 0xf79 * 0x1) * (parseInt(o(0x1ba)) / (0x12a8 + -0xdc6 + -0xd0 * 0x6)) + parseInt(o(0x1c8)) / (-0x1ef * 0x7 + 0xf45 + 0x1b9 * -0x1) + parseInt(n(0x1c5)) / (-0xd44 + 0x21e4 * 0x1 + -0x149c) + parseInt(n(0x1ce)) / (-0xb88 * -0x3 + 0x12e1 + -0x3574) * (-parseInt(o(0x1b4)) / (-0xbfb * -0x1 + -0x1614 + 0xa1f)) + parseInt(n(0x1cd)) / (0x976 * 0x2 + -0x1139 * 0x2 + 0xf8d) + -parseInt(o(0x1bb)) / (-0x1d29 + -0x1 * 0x11a1 + 0x2ed2 * 0x1) + parseInt(n(0x1c1)) / (-0xa77 + -0x3 * 0xaf9 + -0x13 * -0x249);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x158849 + 0x3 * 0x648a1 + 0xe58ce));
var __importDefault = this && this[p(0x1b6) + p(0x1be)] || function (c) {
    const r = p;
    return c && c[r(0x1c6)] ? c : { 'default': c };
};
const k = {};
function a() {
    const u = [
        '5695936ZXyDdx',
        '__esModule',
        'default',
        '1093665gmmtcd',
        'rs/AppErro',
        'value',
        'erty',
        'where',
        '3281173QaFByG',
        '70cUyrBp',
        'defineProp',
        '127884kqkXxh',
        'ls/ApiConf',
        '__importDe',
        '../../erro',
        'findOne',
        'tenantId',
        '2110TmFDRO',
        '10449472BKhlID',
        'ERR_API_CO',
        'NFIG_NOT_F',
        'fault',
        'OUND',
        '607QDIIQY',
        '6769863cnPZNC',
        'LisXz',
        'destroy',
        '../../mode'
    ];
    a = function () {
        return u;
    };
    return a();
}
k[q(0x1ca)] = !![], Object[p(0x1cf) + q(0x1cb)](exports, p(0x1c6), k);
const AppError_1 = __importDefault(require(q(0x1b7) + p(0x1c9) + 'r')), ApiConfig_1 = __importDefault(require(p(0x1c4) + p(0x1b5) + 'ig')), DeleteApiConfigService = async ({
        apiId: f,
        tenantId: g
    }) => {
        const s = q, t = p, h = {};
        h[s(0x1c2)] = t(0x1bc) + s(0x1bd) + t(0x1bf);
        const i = h, j = {};
        j['id'] = f, j[s(0x1b9)] = g;
        const l = {};
        l[s(0x1cc)] = j;
        const m = await ApiConfig_1[t(0x1c7)][t(0x1b8)](l);
        if (!m)
            throw new AppError_1[(s(0x1c7))](i[t(0x1c2)], 0x3bd * -0x1 + 0x417 * -0x7 + -0x5 * -0x6ca);
        await m[s(0x1c3)]();
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x166 * -0x13 + -0x827 * 0x3 + 0x34bb);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[p(0x1c7)] = DeleteApiConfigService;