'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x178)) / (-0xc44 + 0x674 + -0x1 * -0x5d1) * (parseInt(p(0x193)) / (0x1 * -0x1f6a + -0x849 + -0x7f1 * -0x5)) + -parseInt(p(0x182)) / (0x291 * 0x7 + -0x2e * -0x33 + -0xd * 0x216) * (-parseInt(p(0x191)) / (-0x10 * -0x1af + 0x1e95 + -0x3981)) + -parseInt(p(0x18a)) / (0x24a0 + 0xf5 * -0xe + 0x1c9 * -0xd) + parseInt(p(0x192)) / (-0x13f * 0x1b + -0x6d * -0x3 + 0x4 * 0x819) + -parseInt(p(0x17a)) / (-0x55d + 0x49 * 0x31 + -0x895) * (parseInt(o(0x176)) / (0x1 * 0x409 + -0xec2 * -0x2 + 0x2185 * -0x1)) + -parseInt(p(0x175)) / (-0x175b + 0x17be * 0x1 + -0x5a) + parseInt(o(0x181)) / (-0x19ee * 0x1 + -0x9be * 0x1 + 0x23b6);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xa211 * 0x4 + -0x39ae9 + 0x2e682));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x189f + 0x179b + 0x3 * -0xf97);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[q(0x17d) + r(0x17e)] || function (c) {
    const s = r;
    return c && c[s(0x18f)] ? c : { 'default': c };
};
function a() {
    const v = [
        'findOne',
        '11nlkGQz',
        'T_REPLY_FO',
        '70NLRqRL',
        'ERR_NO_FAS',
        'TfGRg',
        '__importDe',
        'fault',
        'tenantId',
        'destroy',
        '6960400ZCHSrQ',
        '9KCLRuF',
        '../../erro',
        'erty',
        'EPLY_EXIST',
        'ls/FastRep',
        'SbpOe',
        'default',
        'ERR_FAST_R',
        '641705BCbesv',
        '../../mode',
        'where',
        'UND',
        'rs/AppErro',
        '__esModule',
        'defineProp',
        '89368EnMHoD',
        '242064WyKDuy',
        '35142vpnkJb',
        'value',
        '1850355EhGBGA',
        '125136UPPusa'
    ];
    a = function () {
        return v;
    };
    return a();
}
const k = {};
k[r(0x194)] = !![], Object[r(0x190) + r(0x184)](exports, r(0x18f), k);
const AppError_1 = __importDefault(require(q(0x183) + q(0x18e) + 'r')), FastReply_1 = __importDefault(require(q(0x18b) + r(0x186) + 'ly')), DeleteFastReplyService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = r, u = r, h = {};
        h[t(0x187)] = t(0x17b) + u(0x179) + u(0x18d), h[u(0x17c)] = u(0x189) + u(0x185) + 'S';
        const i = h, j = {};
        j['id'] = f, j[t(0x17f)] = g;
        const l = {};
        l[u(0x18c)] = j;
        const m = await FastReply_1[u(0x188)][u(0x177)](l);
        if (!m)
            throw new AppError_1[(t(0x188))](i[u(0x187)], -0x343 * 0x2 + -0x225f + 0x2a79);
        try {
            await m[u(0x180)]();
        } catch (n) {
            throw new AppError_1[(t(0x188))](i[u(0x17c)], 0xf3f + -0x9d + -0xd0e);
        }
    };
exports[r(0x188)] = DeleteFastReplyService;