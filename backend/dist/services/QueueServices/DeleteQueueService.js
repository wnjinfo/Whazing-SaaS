'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0xdc)) / (0x215c + 0x1ca7 + -0x3e02) * (parseInt(p(0xdb)) / (0x16cf + -0x20a6 + 0x9d9)) + -parseInt(o(0xc9)) / (-0x22b4 + -0xf36 * 0x1 + 0x31ed) * (-parseInt(p(0xe9)) / (0x864 + 0x1dce + -0x262e)) + parseInt(p(0xe3)) / (-0xdf * 0x3 + 0x1 * 0x37 + 0x26b) * (parseInt(o(0xdf)) / (0x4f5 + -0x1 * -0x214a + 0x5 * -0x7a5)) + parseInt(p(0xe1)) / (0x1302 + -0x2 * -0x74f + -0x2199) + parseInt(p(0xe7)) / (0x1 * 0x964 + -0xc40 + -0x14 * -0x25) * (-parseInt(o(0xe5)) / (0x148 * 0x1d + 0x40f * -0x9 + 0x2 * -0x4c)) + parseInt(o(0xd4)) / (0x1b2d + 0x6e1 * 0x4 + 0x337 * -0x11) * (parseInt(o(0xcf)) / (-0x8ec + -0x1e74 * -0x1 + -0x157d)) + parseInt(p(0xe2)) / (0x1160 + 0x1 * -0x1c10 + 0xabc) * (-parseInt(p(0xd9)) / (-0x170 * -0x1 + 0x1a * -0x25 + 0x25f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x10e564 + 0xcbb61 + 0x1 * 0xce0b2));
function a() {
    const v = [
        '4otueCP',
        '__esModule',
        'destroy',
        '1945929slaTXF',
        'ERR_NO_QUE',
        '__importDe',
        'oFjuY',
        'UE_FOUND',
        'ERR_QUEUE_',
        '351362YnGXEW',
        'erty',
        'findOne',
        '../../erro',
        'fault',
        '330gfduPI',
        'default',
        'where',
        'defineProp',
        'value',
        '1594749tNuUQY',
        'ls/Queue',
        '13706WAQVyJ',
        '131naNmkG',
        '../../mode',
        'tenantId',
        '11916SSvRVV',
        'EtKmn',
        '4332699PzPQMG',
        '276FlyBNN',
        '2595pGvcjv',
        'TICKET_EXI',
        '9WCnwVF',
        'rs/AppErro',
        '6861032uKEXhe',
        'STS'
    ];
    a = function () {
        return v;
    };
    return a();
}
var __importDefault = this && this[q(0xcb) + q(0xd3)] || function (c) {
    const s = r;
    return c && c[s(0xea)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x51 * -0x4c + -0x12aa + -0x499);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[q(0xd8)] = !![], Object[q(0xd7) + r(0xd0)](exports, r(0xea), k);
const Queue_1 = __importDefault(require(r(0xdd) + q(0xda))), AppError_1 = __importDefault(require(r(0xd2) + r(0xe6) + 'r')), DeleteQueueService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = r, u = r, h = {};
        h[t(0xe0)] = t(0xca) + u(0xcd), h[t(0xcc)] = t(0xce) + t(0xe4) + t(0xe8);
        const i = h, j = {};
        j['id'] = f, j[t(0xde)] = g;
        const l = {};
        l[t(0xd6)] = j;
        const m = await Queue_1[u(0xd5)][u(0xd1)](l);
        if (!m)
            throw new AppError_1[(t(0xd5))](i[u(0xe0)], 0x7b * -0x2 + 0x2563 * 0x1 + 0x22d9 * -0x1);
        try {
            await m[t(0xeb)]();
        } catch (n) {
            throw new AppError_1[(t(0xd5))](i[u(0xcc)], 0xc9 * 0x1 + -0xec + 0x1b7);
        }
    };
exports[r(0xd5)] = DeleteQueueService;