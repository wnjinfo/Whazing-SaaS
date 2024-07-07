'use strict';
const aq = b, ar = b;
(function (c, d) {
    const ao = b, ap = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(ao(0x184)) / (0x3ba * -0x3 + -0x1 * 0x26ca + 0x48b * 0xb) * (-parseInt(ap(0x19c)) / (0xd0c + -0x22dd + -0x97 * -0x25)) + -parseInt(ap(0x19f)) / (0x7b * -0x21 + -0x215c + 0x189d * 0x2) * (-parseInt(ap(0x18d)) / (-0x1 * 0xdf3 + -0x7 * 0xf1 + 0x148e)) + parseInt(ap(0x18b)) / (0x641 * -0x2 + -0x1ec5 + 0xa3 * 0x44) + -parseInt(ap(0x186)) / (-0x51a + 0x231f + -0x7 * 0x449) + -parseInt(ap(0x189)) / (0x521 * -0x1 + -0xa2b + -0x1 * -0xf53) + parseInt(ao(0x17c)) / (0x1053 + 0x12d4 + 0xbb5 * -0x3) + parseInt(ao(0x17b)) / (-0x1eb8 + 0x5 * -0x383 + 0x3050);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * -0x7d1e + -0x13dc8 + 0x36bb0));
var __importDefault = this && this[aq(0x18f) + ar(0x1a4)] || function (c) {
    const as = aq;
    return c && c[as(0x192)] ? c : { 'default': c };
};
const k = {};
k[aq(0x19b)] = !![], Object[ar(0x196) + ar(0x187)](exports, aq(0x192), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1bd * 0x2 + -0x255 + 0x6 * 0x137);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const av = [
        'ls/AutoRep',
        '__importDe',
        'findOne',
        'age',
        '__esModule',
        'ls/Tenant',
        'ls/Ticket',
        'Wallet',
        'defineProp',
        'ANT_FOUND',
        'ERR_NO_TEN',
        '../../erro',
        'ls/Campaig',
        'value',
        '2gpwbzq',
        '../../mode',
        'where',
        '496110rKmRIG',
        'ls/Message',
        'ls/ApiMess',
        'ls/User',
        'tenantId',
        'fault',
        'ls/Whatsap',
        'ls/ChatFlo',
        '448200WdwwxA',
        '1044800qQHMMa',
        'destroy',
        'ls/ApiConf',
        'ls/Tag',
        'xCcKC',
        'rs/AppErro',
        'ls/Contact',
        'ls/Setting',
        '22751FqoNxS',
        'ls/FastRep',
        '646692LjQHDe',
        'erty',
        'ls/Queue',
        '1394939fPVkno',
        'Tag',
        '474170eEdNaS',
        'default',
        '4rAIFAK'
    ];
    a = function () {
        return av;
    };
    return a();
}
const AppError_1 = __importDefault(require(ar(0x199) + ar(0x181) + 'r')), Tenant_1 = __importDefault(require(aq(0x19d) + aq(0x193))), ApiConfig_1 = __importDefault(require(ar(0x19d) + aq(0x17e) + 'ig')), ApiMessage_1 = __importDefault(require(aq(0x19d) + ar(0x1a1) + aq(0x191))), AutoReply_1 = __importDefault(require(aq(0x19d) + aq(0x18e) + 'ly')), Campaign_1 = __importDefault(require(aq(0x19d) + ar(0x19a) + 'n')), ChatFlow_1 = __importDefault(require(ar(0x19d) + aq(0x1a6) + 'w')), ContactTag_1 = __importDefault(require(ar(0x19d) + ar(0x182) + ar(0x18a))), ContactWallet_1 = __importDefault(require(aq(0x19d) + ar(0x182) + aq(0x195))), Contact_1 = __importDefault(require(aq(0x19d) + aq(0x182))), FastReply_1 = __importDefault(require(aq(0x19d) + aq(0x185) + 'ly')), Message_1 = __importDefault(require(aq(0x19d) + aq(0x1a0))), Queue_1 = __importDefault(require(ar(0x19d) + aq(0x188))), Setting_1 = __importDefault(require(ar(0x19d) + ar(0x183))), Tag_1 = __importDefault(require(ar(0x19d) + aq(0x17f))), Ticket_1 = __importDefault(require(ar(0x19d) + aq(0x194))), User_1 = __importDefault(require(aq(0x19d) + aq(0x1a2))), Whatsapp_1 = __importDefault(require(aq(0x19d) + aq(0x1a5) + 'p')), AdminDeleteTenantService = async ({tenantId: M}) => {
        const at = ar, au = aq, N = {};
        N[at(0x180)] = at(0x198) + au(0x197);
        const O = N, P = {};
        P['id'] = M;
        const Q = {};
        Q[au(0x19e)] = P;
        const R = await Tenant_1[au(0x18c)][at(0x190)](Q);
        if (!R)
            throw new AppError_1[(at(0x18c))](O[at(0x180)], -0xd11 * -0x2 + 0x1 * -0x1269 + -0x625);
        const S = {};
        S[at(0x1a3)] = M;
        const T = {};
        T[at(0x19e)] = S, await ApiConfig_1[at(0x18c)][at(0x17d)](T);
        const U = {};
        U[au(0x1a3)] = M;
        const V = {};
        V[au(0x19e)] = U, await ApiMessage_1[au(0x18c)][au(0x17d)](V);
        const W = {};
        W[at(0x1a3)] = M;
        const X = {};
        X[at(0x19e)] = W, await AutoReply_1[at(0x18c)][au(0x17d)](X);
        const Y = {};
        Y[au(0x1a3)] = M;
        const Z = {};
        Z[at(0x19e)] = Y, await Campaign_1[at(0x18c)][at(0x17d)](Z);
        const a0 = {};
        a0[au(0x1a3)] = M;
        const a1 = {};
        a1[au(0x19e)] = a0, await ChatFlow_1[at(0x18c)][au(0x17d)](a1);
        const a2 = {};
        a2[at(0x1a3)] = M;
        const a3 = {};
        a3[au(0x19e)] = a2, await ContactTag_1[au(0x18c)][au(0x17d)](a3);
        const a4 = {};
        a4[at(0x1a3)] = M;
        const a5 = {};
        a5[at(0x19e)] = a4, await ContactWallet_1[at(0x18c)][au(0x17d)](a5);
        const a6 = {};
        a6[at(0x1a3)] = M;
        const a7 = {};
        a7[at(0x19e)] = a6, await Contact_1[at(0x18c)][au(0x17d)](a7);
        const a8 = {};
        a8[au(0x1a3)] = M;
        const a9 = {};
        a9[at(0x19e)] = a8, await FastReply_1[au(0x18c)][at(0x17d)](a9);
        const aa = {};
        aa[at(0x1a3)] = M;
        const ab = {};
        ab[at(0x19e)] = aa, await Message_1[au(0x18c)][au(0x17d)](ab);
        const ac = {};
        ac[au(0x1a3)] = M;
        const ad = {};
        ad[at(0x19e)] = ac, await Queue_1[at(0x18c)][au(0x17d)](ad);
        const ae = {};
        ae[at(0x1a3)] = M;
        const af = {};
        af[at(0x19e)] = ae, await Setting_1[at(0x18c)][at(0x17d)](af);
        const ag = {};
        ag[at(0x1a3)] = M;
        const ah = {};
        ah[au(0x19e)] = ag, await Tag_1[au(0x18c)][at(0x17d)](ah);
        const ai = {};
        ai[au(0x1a3)] = M;
        const aj = {};
        aj[at(0x19e)] = ai, await Ticket_1[au(0x18c)][au(0x17d)](aj);
        const ak = {};
        ak[au(0x1a3)] = M;
        const al = {};
        al[au(0x19e)] = ak, await User_1[au(0x18c)][at(0x17d)](al);
        const am = {};
        am[at(0x1a3)] = M;
        const an = {};
        an[at(0x19e)] = am, await Whatsapp_1[au(0x18c)][au(0x17d)](an), await R[at(0x17d)]();
    };
exports[ar(0x18c)] = AdminDeleteTenantService;