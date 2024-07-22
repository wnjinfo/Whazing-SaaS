'use strict';
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(z(0x1f8)) / (-0x25d7 + -0x2439 + 0x4a11) * (parseInt(A(0x1d5)) / (-0x1456 + -0xd * 0x133 + 0x23ef * 0x1)) + parseInt(z(0x1e9)) / (0xa * -0xbf + -0x7f7 + 0xf70) * (-parseInt(A(0x1b9)) / (0x2025 + -0x1fb2 * 0x1 + -0x6f)) + parseInt(A(0x1d2)) / (-0x277 * -0x9 + 0x1d94 + -0x2 * 0x19df) + -parseInt(A(0x1db)) / (-0xe * 0x116 + 0x1d38 + 0x4aa * -0x3) + -parseInt(z(0x1df)) / (0x533 * -0x7 + 0x79 + -0x23f3 * -0x1) * (-parseInt(z(0x1f1)) / (0xa3f + -0x45f + -0x44 * 0x16)) + -parseInt(z(0x1bf)) / (-0x4 * 0x35e + -0x1faa + 0x2d2b) * (-parseInt(A(0x1ea)) / (0x14b4 + -0x2 * -0xd69 + -0x2f7c)) + -parseInt(A(0x1d1)) / (-0x1906 * -0x1 + 0xd1e + -0x2619);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x12e0b8 + 0x7 * 0x20678 + 0x135acc));
var __importDefault = this && this[B(0x1d9) + B(0x1c9)] || function (c) {
    const D = C;
    return c && c[D(0x1bb)] ? c : { 'default': c };
};
const k = {};
function a() {
    const G = [
        'node',
        '../../mode',
        '165ZgLwCl',
        '30ePGoWH',
        'length',
        'xPboO',
        'promisify',
        'isActive',
        'join',
        'ls/ChatFlo',
        '14214728ljpmPl',
        'MsfKD',
        'T_FLOW_FOU',
        'update',
        'ZObKi',
        'flow',
        'erty',
        '5uSkKRd',
        'path',
        'data',
        'FGsOa',
        '35916ZMUfrF',
        'base64',
        '__esModule',
        'rLgjc',
        'szMcW',
        'util',
        '3936285StFZLr',
        'mediaUrl',
        'media',
        'IxHwm',
        'default',
        'writeFile',
        'type',
        'nodeList',
        'public',
        'interactio',
        'fault',
        'rs/AppErro',
        'split',
        'userId',
        'where',
        'value',
        'tenantId',
        'defineProp',
        '21387861VdHpsl',
        '4731515DXGaJO',
        'name',
        'findOne',
        '213818DATuVn',
        'JkmMJ',
        'vmBGK',
        'ERR_NO_CHA',
        '__importDe',
        'VabPU',
        '7027440WiGdhd',
        'tjwaR',
        'QysCT',
        'jDbdE',
        '7AXwnny',
        'celularTes',
        '../../erro',
        'attributes',
        'MediaField',
        'reload',
        'getTime',
        'YLdde'
    ];
    a = function () {
        return G;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1317 + 0x2f1 * 0x6 + 0x32a);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[C(0x1ce)] = !![], Object[C(0x1d0) + C(0x1f7)](exports, B(0x1bb), k);
const util_1 = require(B(0x1be)), path_1 = require(B(0x1f9)), fs_1 = require('fs'), ChatFlow_1 = __importDefault(require(C(0x1e8) + B(0x1f0) + 'w')), AppError_1 = __importDefault(require(C(0x1e1) + B(0x1ca) + 'r')), writeFileAsync = (0x1 * 0x2297 + -0x410 + -0x1e87, util_1[B(0x1ed)])(fs_1[C(0x1c4)]), UpdateChatFlowService = async ({
        chatFlowData: g,
        chatFlowId: h,
        tenantId: i
    }) => {
        const E = C, F = C, j = {
                'QysCT': E(0x1d3),
                'rLgjc': F(0x1f6),
                'MsfKD': E(0x1cc),
                'xPboO': E(0x1ee),
                'FGsOa': E(0x1e0) + 'te',
                'szMcW': E(0x1d8) + E(0x1f3) + 'ND',
                'VabPU': function (v, w) {
                    return v === w;
                },
                'JkmMJ': E(0x1e7),
                'vmBGK': function (v, w) {
                    return v === w;
                },
                'ZObKi': E(0x1e3),
                'IxHwm': function (v, w, x, y) {
                    return v(w, x, y);
                },
                'jDbdE': E(0x1c7),
                'YLdde': E(0x1ba),
                'tjwaR': function (v, w) {
                    return v - w;
                }
            }, {
                name: l,
                flow: m,
                userId: n,
                isActive: o,
                celularTeste: p
            } = g, q = {};
        q['id'] = h, q[F(0x1cf)] = i;
        const r = {};
        r[F(0x1cd)] = q, r[F(0x1e2)] = [
            'id',
            j[E(0x1dd)],
            j[E(0x1bc)],
            j[E(0x1f2)],
            j[E(0x1ec)],
            j[F(0x1fb)]
        ];
        const s = await ChatFlow_1[E(0x1c3)][F(0x1d4)](r);
        if (!s)
            throw new AppError_1[(E(0x1c3))](j[F(0x1bd)], 0x1 * -0x262b + 0x89 * -0x2e + 0x405d);
        for await (const v of m[E(0x1f6)][E(0x1c6)]) {
            if (j[F(0x1da)](v[F(0x1c5)], j[F(0x1d6)]))
                for await (const w of v[F(0x1c8) + 'ns']) {
                    if (j[E(0x1d7)](w[F(0x1c5)], j[E(0x1f5)]) && w[E(0x1fa)][E(0x1c1)]) {
                        const x = new Date()[E(0x1e5)]() + '-' + w[F(0x1fa)][E(0x1d3)];
                        await j[E(0x1c2)](writeFileAsync, (-0xde7 + 0x23a3 + -0x15bc, path_1[F(0x1ef)])(__dirname, '..', '..', '..', j[F(0x1de)], x), w[E(0x1fa)][F(0x1c1)][F(0x1cb)](j[F(0x1e6)])[-0x1 * 0x1597 + -0xf4 + -0x27 * -0x94], j[F(0x1e6)]), delete w[E(0x1fa)][F(0x1c1)], w[F(0x1fa)][E(0x1c0)] = x;
                    }
                    if (j[F(0x1da)](w[E(0x1c5)], j[F(0x1f5)]) && w[E(0x1fa)][F(0x1c0)]) {
                        const y = w[F(0x1fa)][F(0x1c0)][F(0x1cb)]('/');
                        w[E(0x1fa)][E(0x1c0)] = y[j[E(0x1dc)](y[E(0x1eb)], -0x1 * 0x265f + -0xb46 + -0x2 * -0x18d3)];
                    }
                }
        }
        const t = {};
        t[F(0x1d3)] = l, t[E(0x1f6)] = m[F(0x1f6)], t[F(0x1cc)] = n, t[F(0x1ee)] = m[E(0x1ee)], t[F(0x1e0) + 'te'] = m[E(0x1e0) + 'te'], await s[E(0x1f4)](t);
        const u = {};
        return u[F(0x1e2)] = [
            'id',
            j[E(0x1dd)],
            j[E(0x1bc)],
            j[F(0x1f2)],
            j[E(0x1ec)],
            j[E(0x1fb)]
        ], await s[F(0x1e4)](u), s;
    };
exports[B(0x1c3)] = UpdateChatFlowService;