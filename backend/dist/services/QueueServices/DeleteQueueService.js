'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0xff)) / (0x138c + 0x1 * -0x192b + -0x10 * -0x5a) * (-parseInt(o(0x104)) / (0x8c4 + -0x81 * 0x9 + -0x439)) + -parseInt(o(0x100)) / (0xf24 + -0x1379 * -0x1 + -0x229a) + -parseInt(p(0xee)) / (-0xfa8 * 0x1 + -0xd72 + 0xe8f * 0x2) + parseInt(p(0x105)) / (-0x17d3 * -0x1 + 0x2f * 0x3e + -0x2330) + parseInt(p(0x103)) / (0xf89 + 0x1b4b + -0x1567 * 0x2) * (parseInt(p(0xf4)) / (-0x2 * -0xb9c + -0x1b8f + -0x1 * -0x45e)) + parseInt(o(0xf7)) / (-0xd * -0xa0 + -0x314 * -0xa + 0x10 * -0x26e) + -parseInt(o(0xe8)) / (-0xc4d * -0x3 + -0x250d + 0x2f) * (parseInt(p(0xfb)) / (-0x1 * -0xf84 + 0xdcf + 0x341 * -0x9));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x768 * -0x41 + 0x89062 + -0x8b * 0xa49));
var __importDefault = this && this[q(0xeb) + r(0xf0)] || function (c) {
    const s = r;
    return c && c[s(0xf5)] ? c : { 'default': c };
};
const k = {};
k[q(0xfc)] = !![], Object[r(0xfe) + r(0xe7)](exports, r(0xf5), k);
const Queue_1 = __importDefault(require(q(0x101) + r(0xf9))), AppError_1 = __importDefault(require(r(0xf1) + q(0xf3) + 'r')), DeleteQueueService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = q, u = q, h = {};
        h[t(0x102)] = t(0xf8) + t(0xef), h[t(0xe9)] = u(0x106) + u(0xf2) + u(0xed);
        const i = h, j = {};
        j['id'] = f, j[u(0xec)] = g;
        const l = {};
        l[t(0xfd)] = j;
        const m = await Queue_1[u(0xea)][u(0xfa)](l);
        if (!m)
            throw new AppError_1[(t(0xea))](i[t(0x102)], -0x1938 + 0x56 * 0x62 + 0xe * -0x70);
        try {
            await m[u(0xf6)]();
        } catch (n) {
            throw new AppError_1[(t(0xea))](i[t(0xe9)], 0x1093 * -0x2 + -0x53 * -0x63 + 0x2a1);
        }
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xf63 + 0xb4b + -0x4ff * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const v = [
        'STS',
        '1953100YbQmxK',
        'UE_FOUND',
        'fault',
        '../../erro',
        'TICKET_EXI',
        'rs/AppErro',
        '112nIhtFu',
        '__esModule',
        'destroy',
        '4257576ZuQDis',
        'ERR_NO_QUE',
        'ls/Queue',
        'findOne',
        '25140odkobc',
        'value',
        'where',
        'defineProp',
        '29txapyB',
        '730755PFLljQ',
        '../../mode',
        'OdJqZ',
        '84108qBkNpE',
        '17886wdIVTJ',
        '323495TUfkqk',
        'ERR_QUEUE_',
        'erty',
        '108ZozAYy',
        'LtJzi',
        'default',
        '__importDe',
        'tenantId'
    ];
    a = function () {
        return v;
    };
    return a();
}
exports[r(0xea)] = DeleteQueueService;