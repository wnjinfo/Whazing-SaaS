'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(m(0x14a)) / (-0x26 * 0xfd + 0x10 * -0x183 + 0x3dbf) + -parseInt(m(0x14d)) / (0x1504 + 0x9f4 + -0x1ef6) + -parseInt(n(0x150)) / (-0x1d7b + 0x1 * -0x16de + -0x4 * -0xd17) * (-parseInt(n(0x13d)) / (-0x89b + -0x3f * -0x26 + -0xbb * 0x1)) + parseInt(m(0x151)) / (0x494 + 0x34c * 0x5 + -0x150b) * (parseInt(m(0x14f)) / (0x1c57 * 0x1 + 0x1bf * -0x10 + 0x1 * -0x61)) + -parseInt(n(0x149)) / (-0x916 * -0x3 + -0xc90 + -0xeab * 0x1) * (parseInt(n(0x146)) / (0x4bd + -0xe5f + 0x4d5 * 0x2)) + -parseInt(m(0x148)) / (0x177f + -0x213 * -0x11 + -0x3ab9) + -parseInt(n(0x153)) / (0xc4 * -0xb + 0x260f * -0x1 + 0x2e85);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xf33a3 + -0x43 * -0x1b9d + -0x89f9c * 0x1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2145 + 0xca5 + -0x2f * -0x77);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[o(0x154) + o(0x14b)] || function (c) {
    const q = p;
    return c && c[q(0x13b)] ? c : { 'default': c };
};
function a() {
    const t = [
        'where',
        '3506696JIiwcy',
        '../../../m',
        '../../../e',
        'rror',
        'destroy',
        'erty',
        'ERR_NO_STE',
        'rrors/AppE',
        'OUND',
        '8cFeYOh',
        'default',
        '6417630daiOAX',
        '5167841Bzcwhn',
        '533610eXhvcx',
        'fault',
        'TuSHB',
        '511752dXYmGq',
        'findOne',
        '426RrmLLF',
        '6lesbGH',
        '50840DNdoKI',
        'value',
        '3969430nfMOjW',
        '__importDe',
        'PS_REPLY_F',
        'defineProp',
        'sReplyActi',
        'odels/Step',
        '__esModule'
    ];
    a = function () {
        return t;
    };
    return a();
}
const k = {};
k[p(0x152)] = !![], Object[o(0x156) + p(0x142)](exports, o(0x13b), k);
const StepsReplyAction_1 = __importDefault(require(o(0x13e) + p(0x13a) + p(0x139) + 'on')), AppError_1 = __importDefault(require(p(0x13f) + o(0x144) + o(0x140))), DeleteStepsReplyActionService = async f => {
        const r = p, s = p, g = {};
        g[r(0x14c)] = r(0x143) + s(0x155) + s(0x145);
        const h = g, i = {};
        i['id'] = f;
        const j = {};
        j[s(0x13c)] = i;
        const l = await StepsReplyAction_1[r(0x147)][r(0x14e)](j);
        if (!l)
            throw new AppError_1[(r(0x147))](h[s(0x14c)], 0x20e9 + -0x1fb1 * 0x1 + -0x5c * -0x1);
        await l[s(0x141)]();
    };
exports[p(0x147)] = DeleteStepsReplyActionService;