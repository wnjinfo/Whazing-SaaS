'use strict';
const aq = b, ar = b;
function a() {
    const av = [
        'ls/ApiMess',
        'ls/Message',
        'Wallet',
        'ls/ApiConf',
        'defineProp',
        'ls/Tenant',
        'fault',
        'default',
        'rs/AppErro',
        'ls/Campaig',
        'ANT_FOUND',
        '../../erro',
        'Mcmou',
        'ls/Tag',
        'ls/Contact',
        '7YAJGLl',
        '8520PJilyC',
        'ls/Setting',
        '10755JOHeMW',
        '1qJXcqb',
        '1647994kGkMNA',
        'ls/AutoRep',
        'ls/Queue',
        '__importDe',
        'destroy',
        'value',
        '11301589OZWozh',
        'findOne',
        'ls/ChatFlo',
        'ls/Whatsap',
        'ERR_NO_TEN',
        '10QwRZso',
        'where',
        'Tag',
        '2561259hFPGFK',
        'tenantId',
        'ls/User',
        '8271714txDUri',
        '4GActco',
        '__esModule',
        'erty',
        'age',
        'ls/FastRep',
        '../../mode',
        '1050910MEFfiz',
        '36AcZeTO',
        '6771642fgBhhI',
        'ls/Ticket'
    ];
    a = function () {
        return av;
    };
    return a();
}
(function (c, d) {
    const ao = b, ap = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(ao(0x12e)) / (0x2e5 * 0x3 + 0x6c * 0x9 + -0xc7a) * (parseInt(ao(0x12f)) / (-0x2 * 0xc0b + -0x1bf * 0xd + 0x2ecb)) + -parseInt(ap(0x13d)) / (-0x1e3e + -0x1 * 0x1ca3 + 0x3ae4) + parseInt(ap(0x141)) / (-0x1b36 + -0x2f5 * 0xc + 0x3eb6) * (parseInt(ap(0x147)) / (-0xf08 + 0x1d64 + -0xe57)) + -parseInt(ao(0x119)) / (0x1d * 0x49 + -0x26f8 + 0x1 * 0x1eb9) * (-parseInt(ap(0x12a)) / (0xc3e + 0x21eb * -0x1 + 0x6 * 0x39e)) + -parseInt(ao(0x12b)) / (0x1b6d + -0x1b20 + -0x45) * (-parseInt(ap(0x12d)) / (0x1f4e + 0x14 + -0x1f59)) + -parseInt(ao(0x13a)) / (0x563 + 0x1 * -0x23b4 + 0x1e5b) * (-parseInt(ao(0x140)) / (-0x651 + -0x1ee2 + 0x253e)) + -parseInt(ao(0x118)) / (0x138a + -0xe01 + -0x5 * 0x119) * (parseInt(ao(0x135)) / (-0x2024 + 0x5 * 0x66f + 0x6));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1158f1 * 0x1 + 0x2 * -0x37255 + -0x4 * -0x278c));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x4f * -0x3d + -0x7 * 0x1f5 + 0x2 * 0x10cf);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[aq(0x132) + aq(0x121)] || function (c) {
    const as = ar;
    return c && c[as(0x142)] ? c : { 'default': c };
};
const k = {};
k[aq(0x134)] = !![], Object[aq(0x11f) + aq(0x143)](exports, aq(0x142), k);
const AppError_1 = __importDefault(require(ar(0x126) + aq(0x123) + 'r')), Tenant_1 = __importDefault(require(aq(0x146) + aq(0x120))), ApiConfig_1 = __importDefault(require(ar(0x146) + aq(0x11e) + 'ig')), ApiMessage_1 = __importDefault(require(ar(0x146) + ar(0x11b) + aq(0x144))), AutoReply_1 = __importDefault(require(aq(0x146) + ar(0x130) + 'ly')), Campaign_1 = __importDefault(require(aq(0x146) + aq(0x124) + 'n')), ChatFlow_1 = __importDefault(require(aq(0x146) + aq(0x137) + 'w')), ContactTag_1 = __importDefault(require(ar(0x146) + aq(0x129) + aq(0x13c))), ContactWallet_1 = __importDefault(require(aq(0x146) + ar(0x129) + ar(0x11d))), Contact_1 = __importDefault(require(aq(0x146) + aq(0x129))), FastReply_1 = __importDefault(require(ar(0x146) + aq(0x145) + 'ly')), Message_1 = __importDefault(require(aq(0x146) + ar(0x11c))), Queue_1 = __importDefault(require(ar(0x146) + ar(0x131))), Setting_1 = __importDefault(require(ar(0x146) + aq(0x12c))), Tag_1 = __importDefault(require(ar(0x146) + aq(0x128))), Ticket_1 = __importDefault(require(ar(0x146) + ar(0x11a))), User_1 = __importDefault(require(ar(0x146) + aq(0x13f))), Whatsapp_1 = __importDefault(require(ar(0x146) + ar(0x138) + 'p')), AdminDeleteTenantService = async ({tenantId: M}) => {
        const at = ar, au = aq, N = {};
        N[at(0x127)] = at(0x139) + at(0x125);
        const O = N, P = {};
        P['id'] = M;
        const Q = {};
        Q[au(0x13b)] = P;
        const R = await Tenant_1[au(0x122)][au(0x136)](Q);
        if (!R)
            throw new AppError_1[(at(0x122))](O[au(0x127)], -0x717 + 0xa31 * 0x3 + 0x15e8 * -0x1);
        const S = {};
        S[at(0x13e)] = M;
        const T = {};
        T[au(0x13b)] = S, await ApiConfig_1[au(0x122)][at(0x133)](T);
        const U = {};
        U[au(0x13e)] = M;
        const V = {};
        V[at(0x13b)] = U, await ApiMessage_1[au(0x122)][au(0x133)](V);
        const W = {};
        W[au(0x13e)] = M;
        const X = {};
        X[au(0x13b)] = W, await AutoReply_1[au(0x122)][au(0x133)](X);
        const Y = {};
        Y[at(0x13e)] = M;
        const Z = {};
        Z[au(0x13b)] = Y, await Campaign_1[au(0x122)][at(0x133)](Z);
        const a0 = {};
        a0[at(0x13e)] = M;
        const a1 = {};
        a1[at(0x13b)] = a0, await ChatFlow_1[at(0x122)][au(0x133)](a1);
        const a2 = {};
        a2[au(0x13e)] = M;
        const a3 = {};
        a3[at(0x13b)] = a2, await ContactTag_1[at(0x122)][at(0x133)](a3);
        const a4 = {};
        a4[at(0x13e)] = M;
        const a5 = {};
        a5[at(0x13b)] = a4, await ContactWallet_1[au(0x122)][au(0x133)](a5);
        const a6 = {};
        a6[au(0x13e)] = M;
        const a7 = {};
        a7[at(0x13b)] = a6, await Contact_1[at(0x122)][au(0x133)](a7);
        const a8 = {};
        a8[au(0x13e)] = M;
        const a9 = {};
        a9[at(0x13b)] = a8, await FastReply_1[au(0x122)][at(0x133)](a9);
        const aa = {};
        aa[au(0x13e)] = M;
        const ab = {};
        ab[at(0x13b)] = aa, await Message_1[at(0x122)][au(0x133)](ab);
        const ac = {};
        ac[at(0x13e)] = M;
        const ad = {};
        ad[au(0x13b)] = ac, await Queue_1[at(0x122)][at(0x133)](ad);
        const ae = {};
        ae[au(0x13e)] = M;
        const af = {};
        af[au(0x13b)] = ae, await Setting_1[at(0x122)][au(0x133)](af);
        const ag = {};
        ag[at(0x13e)] = M;
        const ah = {};
        ah[au(0x13b)] = ag, await Tag_1[au(0x122)][au(0x133)](ah);
        const ai = {};
        ai[at(0x13e)] = M;
        const aj = {};
        aj[at(0x13b)] = ai, await Ticket_1[at(0x122)][au(0x133)](aj);
        const ak = {};
        ak[au(0x13e)] = M;
        const al = {};
        al[au(0x13b)] = ak, await User_1[at(0x122)][au(0x133)](al);
        const am = {};
        am[au(0x13e)] = M;
        const an = {};
        an[at(0x13b)] = am, await Whatsapp_1[au(0x122)][at(0x133)](an), await R[au(0x133)]();
    };
exports[aq(0x122)] = AdminDeleteTenantService;