'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x11d)) / (0x18b8 + 0x5ba * 0x4 + 0xa7 * -0x49) * (parseInt(q(0x128)) / (0x84 * 0x2 + 0x15ba + -0x16c0)) + -parseInt(p(0x118)) / (-0x15f6 + 0x1d7e + 0x181 * -0x5) + -parseInt(q(0x124)) / (-0x63f + 0x872 * -0x4 + -0x9 * -0x473) * (-parseInt(p(0x115)) / (0xe90 + 0x27e * 0xb + -0x29f5)) + -parseInt(p(0x129)) / (-0x2692 + -0x1ae + 0x2846) + -parseInt(q(0x121)) / (0x1 * -0x2033 + 0x229a + 0x98 * -0x4) + -parseInt(p(0x11c)) / (-0x2 * -0x5fb + -0xa31 * 0x1 + -0x1bd) + parseInt(q(0x125)) / (0xca5 + 0x1af8 + -0x4 * 0x9e5);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xa9ff + 0x1 * 0x28a9f + 0x50282));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1c36 + 0x21b0 + -0x467);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[r(0x11e) + s(0x12d)] || function (c) {
    const t = r;
    return c && c[t(0x11f)] ? c : { 'default': c };
};
const k = {};
k[s(0x116)] = !![], Object[r(0x12a) + s(0x12e)](exports, s(0x11f), k);
function a() {
    const w = [
        '1146309AjJTUk',
        'WNGyR',
        'update',
        'where',
        '2199192LLqzST',
        '1wiXkDb',
        '__importDe',
        '__esModule',
        'findOne',
        '3294557rOmqBz',
        'rs/AppErro',
        'TING_FOUND',
        '4316IPqRSL',
        '19069281tqCHeO',
        'ERR_NO_SET',
        '../../mode',
        '787578lVSPue',
        '6251064thfyDC',
        'defineProp',
        'default',
        '../../erro',
        'fault',
        'erty',
        'sGeneral',
        'key',
        '905tycfjN',
        'value',
        'ls/Setting'
    ];
    a = function () {
        return w;
    };
    return a();
}
const AppError_1 = __importDefault(require(s(0x12c) + s(0x122) + 'r')), SettingsGeneral_1 = __importDefault(require(s(0x127) + s(0x117) + s(0x113))), UpdateSettingService = async ({
        key: g,
        value: h
    }) => {
        const u = s, v = s, i = {};
        i[u(0x119)] = u(0x126) + v(0x123);
        const j = i, l = {};
        l[v(0x114)] = g;
        const m = {};
        m[u(0x11b)] = l;
        const n = await SettingsGeneral_1[u(0x12b)][v(0x120)](m);
        if (!n)
            throw new AppError_1[(u(0x12b))](j[u(0x119)], 0x1b5 + 0x973 + -0x994);
        const o = {};
        return o[u(0x116)] = h, await n[u(0x11a)](o), n;
    };
exports[s(0x12b)] = UpdateSettingService;