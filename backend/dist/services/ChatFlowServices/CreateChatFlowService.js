'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0x8d)) / (-0x1d * 0x97 + -0x1ac5 + 0x2be1) + parseInt(r(0x91)) / (-0x2454 + 0x15b0 * -0x1 + 0x3a06) + -parseInt(r(0x71)) / (-0x1 * 0x935 + 0x217 * 0xb + -0xdc5) + parseInt(q(0x82)) / (-0x1 * -0xc5f + -0x952 + -0x309) * (parseInt(q(0x7f)) / (-0x17c7 + 0x2c9 * -0x3 + 0x1 * 0x2027)) + parseInt(r(0x84)) / (-0x1320 + 0x1 * 0x1ea1 + -0xb7b) * (parseInt(r(0x9c)) / (0x1214 + 0x162d + 0x13 * -0x21e)) + parseInt(q(0x9b)) / (-0xdb1 + 0x1 * -0xa5d + 0x1816) + -parseInt(r(0x89)) / (0x1 * 0x1082 + 0x14c2 + 0x1 * -0x253b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xce75 * -0x1 + 0x71 * -0x13 + 0xeb10));
var __importDefault = this && this[s(0x8f) + t(0x79)] || function (c) {
    const u = s;
    return c && c[u(0x70)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xef7 * 0x1 + 0x1 * 0x6b9 + -0x44 * 0x50);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
function a() {
    const x = [
        'create',
        '761192WMOBsD',
        '91xRuiTt',
        'userId',
        'bxINE',
        'tenantId',
        'split',
        '__esModule',
        '132021gKTGZh',
        'util',
        'base64',
        'erty',
        'zYhbg',
        'media',
        'mediaUrl',
        'writeFile',
        'fault',
        'interactio',
        'VyNke',
        'swvCs',
        'promisify',
        'isActive',
        '665bhFKEt',
        'type',
        'defineProp',
        '2812BnNdRg',
        'fileName',
        '25458auHyON',
        'node',
        'zkZXP',
        'value',
        'gXlfK',
        '4094757kFhepH',
        'default',
        'public',
        'ls/ChatFlo',
        '210793fUGeZM',
        'MediaField',
        '__importDe',
        'nodeList',
        '310524UIhnZG',
        'name',
        '../../mode',
        'getTime',
        'data',
        'path',
        'join',
        'flow',
        'HMsLx'
    ];
    a = function () {
        return x;
    };
    return a();
}
k[t(0x87)] = !![], Object[t(0x81) + t(0x74)](exports, t(0x70), k);
const util_1 = require(t(0x72)), path_1 = require(t(0x96)), fs_1 = require('fs'), ChatFlow_1 = __importDefault(require(t(0x93) + t(0x8c) + 'w')), writeFileAsync = (0x2387 + -0x23f2 + 0x6b, util_1[s(0x7d)])(fs_1[s(0x78)]), CreateChatFlowService = async ({
        flow: d,
        userId: e,
        tenantId: f,
        name: g,
        isActive: h
    }) => {
        const v = t, w = t, i = {
                'HMsLx': function (m, n) {
                    return m === n;
                },
                'bxINE': v(0x85),
                'zkZXP': function (m, n) {
                    return m === n;
                },
                'zYhbg': w(0x8e),
                'VyNke': function (m, n, o, p) {
                    return m(n, o, p);
                },
                'gXlfK': w(0x8b),
                'swvCs': w(0x73)
            };
        for await (const m of d[w(0x90)]) {
            if (i[v(0x99)](m[v(0x80)], i[v(0x9e)]))
                for await (const n of m[w(0x7a) + 'ns']) {
                    if (i[w(0x86)](n[w(0x80)], i[v(0x75)]) && n[v(0x95)][v(0x76)]) {
                        const o = new Date()[w(0x94)]() + '-' + n[v(0x95)][w(0x92)];
                        await i[w(0x7b)](writeFileAsync, (0x59 + -0x79 + 0x10 * 0x2, path_1[v(0x97)])(__dirname, '..', '..', '..', i[w(0x88)], o), n[v(0x95)][v(0x76)][v(0xa0)](i[v(0x7c)])[-0xd21 * -0x1 + 0x1 * -0x2302 + 0x15e2 * 0x1], i[v(0x7c)]), delete n[w(0x95)][w(0x76)], n[v(0x95)][w(0x83)] = n[w(0x95)][w(0x92)], n[v(0x95)][w(0x77)] = o;
                    }
                }
        }
        const j = {};
        j[w(0x98)] = d, j[w(0x9d)] = e, j[w(0x9f)] = f, j[w(0x92)] = g, j[v(0x7e)] = h;
        const l = await ChatFlow_1[v(0x8a)][v(0x9a)](j);
        return l;
    };
exports[s(0x8a)] = CreateChatFlowService;