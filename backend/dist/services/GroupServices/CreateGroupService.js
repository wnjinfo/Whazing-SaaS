'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x19a)) / (0x1 * 0x1ec + -0x9 * -0x2f6 + 0x1 * -0x1c91) + parseInt(l(0x1a8)) / (-0x11 * 0x114 + -0x8d * 0x1 + -0x5 * -0x3c7) * (parseInt(l(0x196)) / (-0x1 * 0x8bc + -0x1c80 + 0x253f * 0x1)) + parseInt(l(0x198)) / (-0x1133 + 0x755 + 0x9e2) * (parseInt(l(0x1a3)) / (0x2 * -0x1125 + -0x1 * 0x49c + -0x9 * -0x453)) + parseInt(l(0x1aa)) / (-0x7 * 0x3c2 + 0x10f9 * -0x1 + 0x2b4d) * (parseInt(l(0x1a5)) / (-0x7 * 0x1af + 0x1fb9 + -0x13e9)) + -parseInt(m(0x1a9)) / (-0xe8d * 0x1 + 0xf7 + 0xd9e) + parseInt(m(0x199)) / (-0x11fc * -0x1 + -0x1 * -0x6be + -0x18b1) + -parseInt(m(0x1a1)) / (-0x2b0 + 0x1023 + -0x1 * 0xd69);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x5f789 * 0x1 + 0xad584 + -0xb023 * 0x10));
var __importDefault = this && this[n(0x1a7) + n(0x1ac)] || function (c) {
    const p = n;
    return c && c[p(0x19f)] ? c : { 'default': c };
};
const k = {};
k[n(0x1a2)] = !![], Object[n(0x1ab) + o(0x19c)](exports, o(0x19f), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xd92 + -0xcb9 * 0x3 + -0x1a2f * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const s = [
        'ls/Group',
        '63YXjQUV',
        'tenantId',
        '8bjiEGU',
        '1325970MMbqya',
        '134048teCRqY',
        'create',
        'erty',
        'group',
        'default',
        '__esModule',
        'userId',
        '5907100cTnuOS',
        'value',
        '798175fRABRk',
        '../../mode',
        '469wmJSjY',
        'isActive',
        '__importDe',
        '52004WqovuY',
        '619032hshoCY',
        '15144NIqlgO',
        'defineProp',
        'fault'
    ];
    a = function () {
        return s;
    };
    return a();
}
const Group_1 = __importDefault(require(o(0x1a4) + n(0x1ad))), CreateGruopService = async ({
        group: d,
        isActive: e,
        userId: f,
        tenantId: g
    }) => {
        const q = n, r = n, h = {};
        h[q(0x19d)] = d, h[r(0x1a6)] = e, h[r(0x1a0)] = f, h[q(0x197)] = g;
        const i = await Group_1[q(0x19e)][r(0x19b)](h);
        return i;
    };
exports[o(0x19e)] = CreateGruopService;