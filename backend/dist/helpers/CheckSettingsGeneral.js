'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xa02 + -0xf10 * 0x1 + 0x641);
        let h = e[f];
        return h;
    }, b(c, d);
}
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x13b)) / (-0x668 * 0x4 + -0x2 * 0x41b + -0x1 * -0x21d7) + -parseInt(p(0x14a)) / (-0x222b * 0x1 + -0xa * 0x1a4 + -0x1 * -0x3295) * (parseInt(q(0x14e)) / (-0x1650 + -0x112d * 0x1 + 0x2780)) + parseInt(p(0x135)) / (0x107 + 0x1639 + -0x173c) + parseInt(p(0x13e)) / (0x2f3 + -0x46 * 0xc + 0x1e * 0x3) * (-parseInt(q(0x14f)) / (0x262d + 0x61f + 0x6 * -0x761)) + -parseInt(p(0x134)) / (-0x1c5e + 0x611 * 0x1 + -0x1654 * -0x1) * (parseInt(q(0x137)) / (-0x4 * 0x699 + -0x1 * -0x2659 + -0xbed * 0x1)) + parseInt(q(0x138)) / (-0x2 * -0x55d + -0x180 + -0xd * 0xb5) + parseInt(p(0x13d)) / (-0x146b * 0x1 + -0x192 * -0x4 + 0xe2d) * (parseInt(p(0x14b)) / (-0x39d * 0x4 + -0x13 * -0xfd + -0x448 * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x88076 + 0x36703 * 0x4 + -0xad405));
function a() {
    const w = [
        'defineProp',
        '10CQKEFJ',
        '5MTWcDw',
        '__esModule',
        'vLnAu',
        'findOne',
        'value',
        'ERR_NO_SET',
        '../models/',
        'neral',
        'fault',
        'where',
        'key',
        'SettingsGe',
        '486QkZPCB',
        '20782949SbXLkL',
        'AppError',
        'vaNYX',
        '10083KJRyfF',
        '7332186mbRFQm',
        'TING_FOUND',
        '__importDe',
        '6559YjVbsb',
        '2660168nUDVaP',
        '../errors/',
        '3376wmTGrO',
        '5425236hdMrlj',
        'erty',
        'default',
        '16416WFLwOj'
    ];
    a = function () {
        return w;
    };
    return a();
}
var __importDefault = this && this[r(0x133) + r(0x146)] || function (c) {
    const t = s;
    return c && c[t(0x13f)] ? c : { 'default': c };
};
const k = {};
k[r(0x142)] = !![], Object[r(0x13c) + s(0x139)](exports, r(0x13f), k);
const SettingsGeneral_1 = __importDefault(require(r(0x144) + r(0x149) + r(0x145))), AppError_1 = __importDefault(require(r(0x136) + r(0x14c))), CheckSettingsGeneral = async (f, g = null) => {
        const u = s, v = r, h = {};
        h[u(0x14d)] = function (n, o) {
            return n && o;
        }, h[u(0x140)] = v(0x143) + v(0x150);
        const i = h, j = {};
        j[u(0x148)] = f;
        const l = {};
        l[v(0x147)] = j;
        const m = await SettingsGeneral_1[u(0x13a)][u(0x141)](l);
        if (i[u(0x14d)](!m, !g))
            throw new AppError_1[(v(0x13a))](i[v(0x140)], -0xbd7 + -0x1b12 + 0x287d * 0x1);
        return m?.[v(0x142)] || g;
    };
exports[r(0x13a)] = CheckSettingsGeneral;