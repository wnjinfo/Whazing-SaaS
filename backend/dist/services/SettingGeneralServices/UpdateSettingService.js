'use strict';
const r = b, s = b;
function a() {
    const w = [
        '919899gabBfd',
        '__esModule',
        'fault',
        'erty',
        'value',
        '__importDe',
        '../../mode',
        'sGeneral',
        '1203695SUtMLO',
        '../../erro',
        'ERR_NO_SET',
        'key',
        '804zCtVMy',
        '279ifJgrT',
        '90vFkGCo',
        '18478aWqFpl',
        '17692360SKpUxQ',
        'findOne',
        '3694308Utbyno',
        'rs/AppErro',
        'pHxmo',
        'TING_FOUND',
        'defineProp',
        '60235vQFfzm',
        'update',
        'where',
        '257352NzqQbp',
        'ls/Setting',
        'default'
    ];
    a = function () {
        return w;
    };
    return a();
}
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x81)) / (0x217d + -0x18ab + -0x3d * 0x25) + -parseInt(q(0x73)) / (-0x11dc + 0x23 * 0x2b + -0xbfd * -0x1) * (-parseInt(q(0x72)) / (-0xa38 + -0x4e6 + -0x50b * -0x3)) + -parseInt(p(0x76)) / (-0xef7 + 0x1b5c + -0xc61) + parseInt(p(0x89)) / (0x2 * 0xe1d + -0x1b42 + -0xf3) + parseInt(q(0x8d)) / (-0x12a0 + -0x12b * 0x3 + 0x1627 * 0x1) * (parseInt(q(0x7b)) / (-0x469 * -0x2 + 0x36f + -0xc3a)) + -parseInt(p(0x7e)) / (0x12a * 0x7 + 0x1 * -0xedb + 0x6bd) * (parseInt(p(0x8e)) / (-0xfd2 + -0x5 * 0x4f7 + 0x2 * 0x1457)) + parseInt(p(0x74)) / (0x87 + 0x764 * 0x1 + -0x7e1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x12834 + -0x4 * 0x2eab6 + 0x1 * 0x15f8d8));
var __importDefault = this && this[r(0x86) + r(0x83)] || function (c) {
    const t = s;
    return c && c[t(0x82)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x14f + -0x2415 + 0x2 * 0x12eb);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[s(0x85)] = !![], Object[s(0x7a) + r(0x84)](exports, s(0x82), k);
const AppError_1 = __importDefault(require(s(0x8a) + s(0x77) + 'r')), SettingsGeneral_1 = __importDefault(require(s(0x87) + s(0x7f) + r(0x88))), UpdateSettingService = async ({
        key: g,
        value: h
    }) => {
        const u = r, v = r, i = {};
        i[u(0x78)] = v(0x8b) + v(0x79);
        const j = i, l = {};
        l[u(0x8c)] = g;
        const m = {};
        m[u(0x7d)] = l;
        const n = await SettingsGeneral_1[u(0x80)][u(0x75)](m);
        if (!n)
            throw new AppError_1[(u(0x80))](j[u(0x78)], -0x277 * 0x1 + -0x1c74 + -0x2f * -0xb1);
        const o = {};
        return o[u(0x85)] = h, await n[u(0x7c)](o), n;
    };
exports[r(0x80)] = UpdateSettingService;