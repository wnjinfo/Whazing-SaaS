'use strict';
function a() {
    const E = [
        'fault',
        'ContactsSe',
        'remove',
        'TmZaO',
        'ntacts',
        'params',
        '286AgCuSB',
        'xjdMO',
        'rvices/Del',
        '3402380BSsfSG',
        '287sWTkkE',
        'removeAll',
        'vice',
        '__importDe',
        '../errors/',
        'gsleA',
        'aignContac',
        'lcbff',
        'contactId',
        'index',
        '160919PNNbuO',
        'AppError',
        'rvices/Lis',
        'tenantId',
        '__esModule',
        'Mkhkg',
        'json',
        'profile',
        'ateCampaig',
        'defineProp',
        'tsService',
        'ontacts\x20de',
        'admin',
        'ERR_NO_PER',
        'nContactsS',
        'rvices/Cre',
        'tCampaignC',
        'yjVPc',
        'default',
        'status',
        '2257288ezaItZ',
        '9JFiVlD',
        'erty',
        'eteAllCamp',
        'MCFcq',
        'Campagin\x20C',
        'user',
        'MISSION',
        's/Campaign',
        '2064785ZIoHDM',
        '14127dmvGem',
        'ontact\x20del',
        'value',
        'message',
        'body',
        'ervice',
        'campaignId',
        'eted',
        '../service',
        'IEgGk',
        '30594xiVHru',
        'UGBFB',
        'ontactsSer',
        'store',
        'ZAmPm',
        'campaignCo',
        'leted',
        '12276900ummuGG',
        'ciPcT',
        'eteCampaig'
    ];
    a = function () {
        return E;
    };
    return a();
}
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x1e7)) / (0x185b + -0x5 * -0xa + -0x1 * 0x188c) + parseInt(r(0x1d9)) / (-0x17d0 + -0x877 + 0x2049) * (-parseInt(s(0x1bf)) / (-0x5 * 0x4a2 + -0xbb3 + 0x22e0)) + -parseInt(r(0x1dc)) / (-0x193 * -0x4 + -0x23 * -0x75 + -0x1647) + parseInt(r(0x1be)) / (0x391 * -0x1 + -0x703 * -0x2 + -0x1 * 0xa70) + -parseInt(s(0x1c9)) / (-0xa * 0x136 + -0xce2 + 0x1904) * (-parseInt(r(0x1dd)) / (0xa6 * 0x25 + 0x51b + 0x1 * -0x1d12)) + parseInt(s(0x1b5)) / (0xcf2 + -0x11cf + 0x4e5) + -parseInt(r(0x1b6)) / (0xc83 * 0x1 + -0x11bf + 0x1 * 0x545) * (-parseInt(s(0x1d0)) / (-0x1c48 + 0x4 * 0x455 + 0xafe));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x6a09a + -0xae5bd * -0x1 + -0xab461 * 0x1));
var __importDefault = this && this[t(0x1e0) + u(0x1d3)] || function (c) {
    const v = t;
    return c && c[v(0x1eb)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x19c3 * 0x1 + -0x1c96 + 0x488);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[u(0x1c1)] = !![], Object[u(0x1f0) + u(0x1b7)](exports, t(0x1eb), k), exports[u(0x1de)] = exports[u(0x1d5)] = exports[t(0x1e6)] = exports[u(0x1cc)] = void (-0x2119 * 0x1 + -0x1a43 + 0x3b5c);
const AppError_1 = __importDefault(require(t(0x1e1) + t(0x1e8))), CreateCampaignContactsService_1 = __importDefault(require(t(0x1c7) + t(0x1bd) + u(0x1d4) + t(0x1f6) + t(0x1ef) + u(0x1f5) + t(0x1c4))), ListCampaignContactsService_1 = __importDefault(require(t(0x1c7) + t(0x1bd) + u(0x1d4) + u(0x1e9) + t(0x1f7) + t(0x1cb) + u(0x1df))), DeleteCampaignContactsService_1 = __importDefault(require(u(0x1c7) + u(0x1bd) + u(0x1d4) + t(0x1db) + t(0x1d2) + u(0x1f5) + t(0x1c4))), DeleteAllCampaignContactsService_1 = __importDefault(require(u(0x1c7) + u(0x1bd) + u(0x1d4) + u(0x1db) + u(0x1b8) + t(0x1e3) + u(0x1f1))), store = async (e, f) => {
        const w = u, x = t, g = {};
        g[w(0x1ec)] = function (n, o) {
            return n !== o;
        }, g[w(0x1cd)] = w(0x1f3), g[x(0x1d1)] = x(0x1f4) + x(0x1bc);
        const h = g;
        if (h[x(0x1ec)](e[w(0x1bb)][x(0x1ee)], h[w(0x1cd)]))
            throw new AppError_1[(w(0x1f9))](h[w(0x1d1)], 0x1 * 0x10b3 + 0x2407 + -0x3327);
        const i = [...e[w(0x1c3)]], {campaignId: j} = e[x(0x1d8)], l = {};
        l[x(0x1ce) + x(0x1d7)] = i, l[x(0x1c5)] = j;
        const m = await (0x1 * -0x84f + -0x1129 + 0x1978, CreateCampaignContactsService_1[w(0x1f9)])(l);
        return f[w(0x1fa)](-0x135e + -0x1 * -0xedd + 0x549)[w(0x1ed)](m);
    };
exports[u(0x1cc)] = store;
const index = async (d, e) => {
    const y = u, z = t, {tenantId: f} = d[y(0x1bb)], {campaignId: g} = d[z(0x1d8)], h = {};
    h[z(0x1c5)] = g, h[z(0x1ea)] = f;
    const i = await (-0x2627 + -0x54 * 0x5c + -0x1 * -0x4457, ListCampaignContactsService_1[y(0x1f9)])(h);
    return e[y(0x1fa)](0x4c * -0x6a + 0xceb + 0x65 * 0x31)[y(0x1ed)](i);
};
exports[t(0x1e6)] = index;
const remove = async (f, g) => {
    const A = t, B = u, h = {};
    h[A(0x1da)] = function (p, q) {
        return p !== q;
    }, h[B(0x1b9)] = A(0x1f3), h[A(0x1d6)] = A(0x1f4) + A(0x1bc), h[B(0x1e4)] = A(0x1ba) + A(0x1c0) + A(0x1c6);
    const i = h, {tenantId: j} = f[B(0x1bb)];
    if (i[B(0x1da)](f[A(0x1bb)][A(0x1ee)], i[A(0x1b9)]))
        throw new AppError_1[(B(0x1f9))](i[B(0x1d6)], -0x2fe * -0x8 + 0x1 * -0xa7b + -0xbe2);
    const {
            campaignId: l,
            contactId: m
        } = f[B(0x1d8)], n = {};
    n[B(0x1c5)] = l, n[A(0x1e5)] = m, n[B(0x1ea)] = j, await (-0x1 * 0x18d3 + 0x11d9 * -0x1 + -0x4 * -0xaab, DeleteCampaignContactsService_1[B(0x1f9)])(n);
    const o = {};
    return o[A(0x1c2)] = i[A(0x1e4)], g[A(0x1fa)](-0x4 * -0x45e + -0x1c5 * -0xc + -0x25ec)[B(0x1ed)](o);
};
exports[t(0x1d5)] = remove;
const removeAll = async (f, g) => {
    const C = u, D = t, h = {};
    h[C(0x1f8)] = function (o, p) {
        return o !== p;
    }, h[D(0x1e2)] = C(0x1f3), h[D(0x1c8)] = C(0x1f4) + D(0x1bc), h[C(0x1ca)] = D(0x1ba) + C(0x1f2) + D(0x1cf);
    const i = h, {tenantId: j} = f[D(0x1bb)];
    if (i[C(0x1f8)](f[D(0x1bb)][C(0x1ee)], i[D(0x1e2)]))
        throw new AppError_1[(D(0x1f9))](i[D(0x1c8)], 0x5 * -0x1f7 + 0x7f8 + -0x1b7 * -0x2);
    const {campaignId: l} = f[D(0x1d8)], m = {};
    m[C(0x1c5)] = l, m[D(0x1ea)] = j, await (-0xb5 * -0x7 + -0xbc9 * -0x2 + -0x1c85, DeleteAllCampaignContactsService_1[D(0x1f9)])(m);
    const n = {};
    return n[C(0x1c2)] = i[D(0x1ca)], g[C(0x1fa)](0x200f + 0x1 * -0x92e + 0x1 * -0x1619)[D(0x1ed)](n);
};
exports[u(0x1de)] = removeAll;