'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(q(0x182)) / (-0x16cf * -0x1 + 0x18ad + -0x2f7b) * (parseInt(q(0x1ae)) / (-0x1 * -0xb73 + -0x712 * 0x2 + 0x2b3 * 0x1)) + -parseInt(q(0x184)) / (-0x2066 * -0x1 + -0x151d + -0xb46) * (-parseInt(r(0x195)) / (0x5cf * -0x6 + 0x254b * -0x1 + 0x4829)) + parseInt(q(0x188)) / (0xf34 + 0x26e6 + -0x3615 * 0x1) * (parseInt(r(0x1a8)) / (-0x120b + -0x9 * -0x399 + -0xe50)) + parseInt(r(0x1b0)) / (0x18c5 + 0x17f8 + 0x3a * -0xd7) * (-parseInt(q(0x1a0)) / (0x1 * 0x8db + -0x62b + -0x2a8)) + -parseInt(q(0x187)) / (0x1c49 + -0x1 * 0xa33 + 0x1 * -0x120d) + parseInt(q(0x1a2)) / (0x150b + -0x55c * -0x1 + -0x1a5d) + -parseInt(q(0x18d)) / (-0x260c + -0x26e3 + -0x3b * -0x14e);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x724a9 * 0x2 + 0x50468 + -0x5ea14));
function a() {
    const x = [
        'flow',
        '324968btRLSq',
        'tenantId',
        'dGroN',
        'MglAt',
        '649793ldyDxM',
        'pnfdW',
        '6HjLWcE',
        'mediaUrl',
        'MediaField',
        '2740113Wtrszg',
        '5210WGOBUw',
        'base64',
        'erty',
        'promisify',
        'data',
        '12535501VvEYlk',
        'value',
        'path',
        'type',
        'userId',
        'writeFile',
        'qbZjv',
        'join',
        '2695268dHGRkb',
        '__importDe',
        'VdjEB',
        '__esModule',
        'defineProp',
        'split',
        'ls/ChatFlo',
        'default',
        'interactio',
        'nodeList',
        'fault',
        '216dRHKWZ',
        'media',
        '16621610aiAcUB',
        'node',
        '../../mode',
        'create',
        'isActive',
        'name',
        '6996xWBVMO',
        'jVjGi',
        'util',
        'getTime',
        'public',
        'fileName',
        '2iiqfMI'
    ];
    a = function () {
        return x;
    };
    return a();
}
var __importDefault = this && this[s(0x196) + s(0x19f)] || function (c) {
    const u = s;
    return c && c[u(0x198)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x1c3d + -0xa9 + -0x1a14);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[t(0x18e)] = !![], Object[t(0x199) + t(0x18a)](exports, s(0x198), k);
const util_1 = require(t(0x1aa)), path_1 = require(t(0x18f)), fs_1 = require('fs'), ChatFlow_1 = __importDefault(require(s(0x1a4) + s(0x19b) + 'w')), writeFileAsync = (0x1b24 + -0x11ba * -0x1 + -0x166f * 0x2, util_1[t(0x18b)])(fs_1[s(0x192)]), CreateChatFlowService = async ({
        flow: d,
        userId: e,
        tenantId: f,
        name: g,
        isActive: h
    }) => {
        const v = s, w = s, i = {
                'pnfdW': function (m, n) {
                    return m === n;
                },
                'VdjEB': v(0x1a3),
                'qbZjv': w(0x186),
                'MglAt': function (m, n, o, p) {
                    return m(n, o, p);
                },
                'dGroN': v(0x1ac),
                'jVjGi': w(0x189)
            };
        for await (const m of d[v(0x19e)]) {
            if (i[w(0x183)](m[w(0x190)], i[w(0x197)]))
                for await (const n of m[v(0x19d) + 'ns']) {
                    if (i[w(0x183)](n[v(0x190)], i[w(0x193)]) && n[w(0x18c)][v(0x1a1)]) {
                        const o = new Date()[w(0x1ab)]() + '-' + n[w(0x18c)][w(0x1a7)];
                        await i[w(0x181)](writeFileAsync, (-0x2215 + 0x9 * -0x139 + 0x2d16, path_1[v(0x194)])(__dirname, '..', '..', '..', i[v(0x180)], o), n[w(0x18c)][v(0x1a1)][w(0x19a)](i[w(0x1a9)])[0x511 * 0x2 + 0x1bec + -0x260d], i[w(0x1a9)]), delete n[v(0x18c)][v(0x1a1)], n[w(0x18c)][v(0x1ad)] = n[v(0x18c)][w(0x1a7)], n[v(0x18c)][w(0x185)] = o;
                    }
                }
        }
        const j = {};
        j[w(0x1af)] = d, j[w(0x191)] = e, j[v(0x1b1)] = f, j[w(0x1a7)] = g, j[w(0x1a6)] = h;
        const l = await ChatFlow_1[w(0x19c)][w(0x1a5)](j);
        return l;
    };
exports[t(0x19c)] = CreateChatFlowService;