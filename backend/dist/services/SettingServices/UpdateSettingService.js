'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x1d1)) / (-0x2059 + 0xf * -0x254 + 0x4346) * (parseInt(p(0x1d3)) / (0x1c9 * -0xb + -0x14e9 * 0x1 + 0x288e)) + -parseInt(q(0x1db)) / (-0xa29 + 0x15ee + -0x1ae * 0x7) + parseInt(q(0x1d6)) / (-0x650 + -0x2207 + 0x285b) * (parseInt(q(0x1e1)) / (-0x3ff + -0x24d * -0xd + -0x19e5)) + -parseInt(p(0x1e0)) / (0x1 * 0x1843 + 0x1f54 + 0x239 * -0x19) + -parseInt(p(0x1d4)) / (-0xf3d + 0x11ca + -0x286) + -parseInt(q(0x1cb)) / (0x20d6 + 0x1 * 0x1ba5 + -0x3c73) + parseInt(p(0x1ce)) / (-0x1f5 + 0x2058 + -0x1e5a);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x65 * 0x30b9 + 0x7de5c * 0x1 + 0xab525 * 0x2));
var __importDefault = this && this[r(0x1dc) + s(0x1de)] || function (c) {
    const t = r;
    return c && c[t(0x1da)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xc69 + -0xb44 + 0xa6);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[r(0x1d5)] = !![], Object[r(0x1d7) + s(0x1dd)](exports, r(0x1da), k);
const Setting_1 = __importDefault(require(r(0x1cd) + s(0x1e2))), UpdateSettingService = async ({
        key: g,
        value: h,
        tenantId: i
    }) => {
        const u = r, v = r, j = {};
        j[u(0x1d9)] = g, j[v(0x1cf)] = i;
        const l = {};
        l[u(0x1d0)] = j;
        let m = await Setting_1[u(0x1d2)][v(0x1d8)](l);
        if (!m) {
            const n = {};
            n[u(0x1d9)] = g, n[v(0x1d5)] = h, n[u(0x1cf)] = i, m = await Setting_1[u(0x1d2)][u(0x1cc)](n);
        } else {
            const o = {};
            o[v(0x1d5)] = h, await m[v(0x1df)](o);
        }
        return m;
    };
exports[s(0x1d2)] = UpdateSettingService;
function a() {
    const w = [
        '3695gAcDAA',
        'default',
        '2Tpkfcj',
        '786744PqVKmM',
        'value',
        '28TQbBWK',
        'defineProp',
        'findOne',
        'key',
        '__esModule',
        '1670124pBFKmp',
        '__importDe',
        'erty',
        'fault',
        'update',
        '6442842tpElDr',
        '419285TazTVN',
        'ls/Setting',
        '919544ppbizk',
        'create',
        '../../mode',
        '17338725CDSWzt',
        'tenantId',
        'where'
    ];
    a = function () {
        return w;
    };
    return a();
}