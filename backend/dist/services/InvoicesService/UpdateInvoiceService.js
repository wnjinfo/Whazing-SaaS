'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0x1aa)) / (0x923 * -0x2 + 0x251 * 0x9 + -0x292) * (parseInt(m(0x1a7)) / (0x1bf4 + 0x47 * 0x1 + 0x5a5 * -0x5)) + parseInt(m(0x19c)) / (-0x1450 + 0xf45 + 0x1 * 0x50e) + -parseInt(n(0x1a8)) / (0x36a * -0x9 + 0x139 * 0x6 + 0x38 * 0x6b) + -parseInt(m(0x1a1)) / (-0x15ca + -0x1 * 0xa63 + 0x2032) * (-parseInt(n(0x197)) / (-0xad7 * -0x2 + 0x24af + -0x3a57)) + -parseInt(n(0x199)) / (-0x218b * -0x1 + -0x1a * -0xa9 + -0x32ae) + parseInt(m(0x1a4)) / (0x259 * -0xd + -0x26 * 0x12 + 0x2139) + parseInt(m(0x1a5)) / (-0xdcb + -0x1609 + -0x1 * -0x23dd) * (parseInt(n(0x193)) / (-0xc18 * 0x1 + 0x35 * 0x73 + -0xbad));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xb874c + 0x46877 + -0x1 * -0xd51e8));
var __importDefault = this && this[o(0x1ab) + p(0x196)] || function (c) {
    const q = o;
    return c && c[q(0x1a3)] ? c : { 'default': c };
};
const k = {};
k[o(0x191)] = !![], Object[o(0x19f) + p(0x1a2)](exports, o(0x1a3), k);
function a() {
    const t = [
        '879ixzKEt',
        '__importDe',
        'value',
        'update',
        '40mCASJD',
        '../../erro',
        'N_FOUND',
        'fault',
        '6odxkjx',
        'cIbZT',
        '4679073nFAOWL',
        'ls/Invoice',
        'findByPk',
        '1997892OfqGXs',
        'default',
        'rs/AppErro',
        'defineProp',
        '../../mode',
        '823015CitrsG',
        'erty',
        '__esModule',
        '4392256VyeBSW',
        '109449XVGapW',
        'ERR_NO_PLA',
        '102GotWWe',
        '1234736AQBXZF',
        'status'
    ];
    a = function () {
        return t;
    };
    return a();
}
const AppError_1 = __importDefault(require(p(0x194) + o(0x19e) + 'r')), Invoices_1 = __importDefault(require(o(0x1a0) + p(0x19a) + 's')), UpdateInvoiceService = async e => {
        const r = p, s = p, f = {};
        f[r(0x198)] = r(0x1a6) + r(0x195);
        const g = f, {
                id: h,
                status: i
            } = e, j = await Invoices_1[s(0x19d)][s(0x19b)](h);
        if (!j)
            throw new AppError_1[(r(0x19d))](g[r(0x198)], -0x358 + -0x2091 + 0x15 * 0x1c9);
        const l = {};
        return l[s(0x1a9)] = i, await j[r(0x192)](l), j;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xc2b * 0x1 + 0xdbd + -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[p(0x19d)] = UpdateInvoiceService;