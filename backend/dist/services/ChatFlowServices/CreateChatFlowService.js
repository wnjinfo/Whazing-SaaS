'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0x179)) / (-0x4ef + 0x1f7e + -0x1a8e) * (parseInt(r(0x164)) / (0xe55 + -0x16b4 + 0x861 * 0x1)) + -parseInt(r(0x153)) / (0x6dd + 0x26b1 + -0x2d8b) + parseInt(r(0x167)) / (0x12f2 + 0x5 * -0x769 + 0x1 * 0x121f) + parseInt(q(0x177)) / (0x22ea + 0x1819 * -0x1 + -0xacc) + -parseInt(r(0x166)) / (-0xf42 + 0x96c + 0x5dc) * (-parseInt(r(0x155)) / (0xd67 * -0x2 + 0x1503 + 0x1 * 0x5d2)) + -parseInt(r(0x14b)) / (-0x24c5 + -0x517 * 0x7 + 0x1 * 0x486e) + -parseInt(r(0x16e)) / (-0x14df + -0xdcd + 0x22b5);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2baee + -0x1 * 0x1d45b + 0x1e39f));
var __importDefault = this && this[s(0x162) + t(0x170)] || function (c) {
    const u = s;
    return c && c[u(0x165)] ? c : { 'default': c };
};
const k = {};
k[t(0x15e)] = !![], Object[t(0x149) + s(0x16d)](exports, t(0x165), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1dda + -0xb95 + 0x43f * -0x4);
        let h = e[f];
        return h;
    }, b(c, d);
}
const util_1 = require(t(0x157)), path_1 = require(s(0x150)), fs_1 = require('fs'), ChatFlow_1 = __importDefault(require(s(0x171) + t(0x15d) + 'w')), writeFileAsync = (-0x17fa + -0xf3d + 0x2737, util_1[s(0x161)])(fs_1[t(0x159)]), CreateChatFlowService = async ({
        flow: d,
        userId: e,
        tenantId: f,
        name: g,
        isActive: h
    }) => {
        const v = t, w = t, i = {
                'dMHyA': function (m, n) {
                    return m === n;
                },
                'zZBfJ': v(0x176),
                'FtKpb': function (m, n) {
                    return m === n;
                },
                'jSzTD': w(0x14f),
                'KYyAy': function (m, n, o, p) {
                    return m(n, o, p);
                },
                'qSAih': v(0x15b),
                'vcizX': v(0x14a)
            };
        for await (const m of d[v(0x174)]) {
            if (i[w(0x154)](m[w(0x168)], i[w(0x158)]))
                for await (const n of m[w(0x15f) + 'ns']) {
                    if (i[v(0x16a)](n[v(0x168)], i[v(0x16b)]) && n[v(0x172)][v(0x178)]) {
                        const o = new Date()[v(0x175)]() + '-' + n[w(0x172)][v(0x14e)];
                        await i[w(0x16f)](writeFileAsync, (-0x22f7 + 0x1dd1 + 0x526, path_1[v(0x14d)])(__dirname, '..', '..', '..', i[v(0x15c)], o), n[v(0x172)][v(0x178)][v(0x169)](i[w(0x160)])[-0x2527 + 0x176a + 0xdbe * 0x1], i[v(0x160)]), delete n[v(0x172)][v(0x178)], n[w(0x172)][w(0x151)] = n[w(0x172)][v(0x14e)], n[w(0x172)][v(0x15a)] = o;
                    }
                }
        }
        const j = {};
        j[v(0x173)] = d, j[v(0x152)] = e, j[w(0x16c)] = f, j[w(0x14e)] = g, j[w(0x163)] = h;
        const l = await ChatFlow_1[w(0x156)][w(0x14c)](j);
        return l;
    };
function a() {
    const x = [
        'qSAih',
        'ls/ChatFlo',
        'value',
        'interactio',
        'vcizX',
        'promisify',
        '__importDe',
        'isActive',
        '196dZoAmO',
        '__esModule',
        '336HZaTYU',
        '660448OXJVFZ',
        'type',
        'split',
        'FtKpb',
        'jSzTD',
        'tenantId',
        'erty',
        '1370925ozNUVY',
        'KYyAy',
        'fault',
        '../../mode',
        'data',
        'flow',
        'nodeList',
        'getTime',
        'node',
        '778325xNQevZ',
        'media',
        '3499jSTbIt',
        'defineProp',
        'base64',
        '2834504atohgJ',
        'create',
        'join',
        'name',
        'MediaField',
        'path',
        'fileName',
        'userId',
        '216117gGEwFB',
        'dMHyA',
        '12229aVQZsj',
        'default',
        'util',
        'zZBfJ',
        'writeFile',
        'mediaUrl',
        'public'
    ];
    a = function () {
        return x;
    };
    return a();
}
exports[t(0x156)] = CreateChatFlowService;