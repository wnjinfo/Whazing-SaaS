'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x1dd)) / (-0x785 + -0x46 * -0x1d + -0x68) * (parseInt(p(0x1ce)) / (-0x2059 + 0x1a4d + -0x32 * -0x1f)) + -parseInt(p(0x1dc)) / (-0x3 * 0x2d3 + 0xc15 + -0x399) + -parseInt(q(0x1d4)) / (-0xe5d + 0x2240 + -0x1 * 0x13df) * (-parseInt(p(0x1df)) / (-0x582 + 0x1 * 0x1416 + -0xe8f)) + -parseInt(q(0x1cb)) / (0x1 * -0x20b + -0xc47 * 0x1 + 0xe58) * (-parseInt(q(0x1e2)) / (0x1 * -0x123f + -0x608 * 0x2 + 0x1e56 * 0x1)) + parseInt(q(0x1d3)) / (-0xaa9 * -0x2 + 0x19c1 + -0x2f0b * 0x1) + parseInt(p(0x1d9)) / (-0x12a * 0x1a + -0x1468 + 0x32b5) + -parseInt(p(0x1ca)) / (0x139f + 0x8e * -0x3a + 0xc97) * (parseInt(q(0x1d5)) / (0x766 * -0x2 + -0x21 * 0x11f + 0x2 * 0x19eb));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x6eb1 * 0x1 + 0x2ee21 + 0x161));
function a() {
    const w = [
        'findOne',
        'mPcCS',
        '2216856QDvzfg',
        '953164IYXhQp',
        '1003783PPTWuG',
        'where',
        'defineProp',
        'fault',
        '1472580lFSsTX',
        '../../erro',
        'rs/AppErro',
        '727602hMofqA',
        '4508ghpiRp',
        'sGeneral',
        '5UpnftS',
        'default',
        'value',
        '128996IBYSNc',
        'ls/Setting',
        '__esModule',
        'update',
        'TING_FOUND',
        'key',
        '70VXThiR',
        '18dJtVmF',
        '../../mode',
        'erty',
        '138EHyKxz',
        'ERR_NO_SET',
        '__importDe'
    ];
    a = function () {
        return w;
    };
    return a();
}
var __importDefault = this && this[r(0x1d0) + r(0x1d8)] || function (c) {
    const t = r;
    return c && c[t(0x1e4)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x4c7 * 0x1 + 0x7e2 * 0x2 + 0x12c1 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[r(0x1e1)] = !![], Object[r(0x1d7) + s(0x1cd)](exports, s(0x1e4), k);
const AppError_1 = __importDefault(require(r(0x1da) + s(0x1db) + 'r')), SettingsGeneral_1 = __importDefault(require(s(0x1cc) + s(0x1e3) + r(0x1de))), UpdateSettingService = async ({
        key: g,
        value: h
    }) => {
        const u = r, v = r, i = {};
        i[u(0x1d2)] = u(0x1cf) + v(0x1e6);
        const j = i, l = {};
        l[v(0x1e7)] = g;
        const m = {};
        m[v(0x1d6)] = l;
        const n = await SettingsGeneral_1[v(0x1e0)][u(0x1d1)](m);
        if (!n)
            throw new AppError_1[(u(0x1e0))](j[u(0x1d2)], -0x2065 + 0x2a + 0x21cf);
        const o = {};
        return o[v(0x1e1)] = h, await n[v(0x1e5)](o), n;
    };
exports[r(0x1e0)] = UpdateSettingService;