'use strict';
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(x(0x20c)) / (0x22d0 + 0x4d3 + 0xd36 * -0x3) * (parseInt(x(0x1f2)) / (0x26f5 + 0x50d * -0x7 + -0x398)) + -parseInt(x(0x1f9)) / (0x2233 * 0x1 + -0x4 * -0x47b + -0x341c) + -parseInt(x(0x1ff)) / (-0x1651 + -0x1f8c + 0x35e1 * 0x1) * (-parseInt(x(0x20f)) / (-0x1e7 + -0x7b9 * -0x3 + 0x309 * -0x7)) + parseInt(x(0x1f0)) / (0x56 * 0x65 + -0xcd * -0x5 + -0x25e9) * (parseInt(y(0x214)) / (-0x16c + 0x115 * 0x10 + 0x83 * -0x1f)) + -parseInt(y(0x1f5)) / (-0xa * 0x53 + 0x1dca + -0x1a84) * (-parseInt(x(0x1fe)) / (-0x87a + 0xc6c + 0x4d * -0xd)) + -parseInt(x(0x1f1)) / (-0x685 * -0x2 + 0x1d0 * -0x2 + -0x960) + parseInt(x(0x206)) / (-0x11 * 0x191 + -0x1 * 0x1417 + 0x2ec3) * (parseInt(x(0x205)) / (0x1c35 + 0x25 * -0x72 + -0x1 * 0xbaf));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x29 * -0x6507 + -0xc5445 + 0x2 * 0x1256e6));
function a() {
    const E = [
        'update',
        'findOne',
        '85mwtYYo',
        '__importDe',
        'where',
        'urlMessage',
        'rs/AppErro',
        '4427234mZTohq',
        'erty',
        'fault',
        'default',
        '6IsJark',
        '9408170LvfZxR',
        '33802BxXZWA',
        'authToken',
        '../../erro',
        '8HUtWzX',
        'OUND',
        'name',
        'Status',
        '1340367LeJfdh',
        'ls/ApiConf',
        'isActive',
        'tenantId',
        '../../mode',
        '2330937kFjTVQ',
        '130516sDnwSh',
        'userId',
        'GsKVu',
        'ERR_API_CO',
        'sessionId',
        'defineProp',
        '12VAYGfd',
        '14912810QdzZOB',
        'NFIG_NOT_F',
        'reload',
        'value',
        'urlService',
        '__esModule',
        '52uzcQik'
    ];
    a = function () {
        return E;
    };
    return a();
}
var __importDefault = this && this[z(0x210) + A(0x1ee)] || function (c) {
    const B = A;
    return c && c[B(0x20b)] ? c : { 'default': c };
};
const k = {};
k[z(0x209)] = !![], Object[A(0x204) + z(0x1ed)](exports, z(0x20b), k);
const AppError_1 = __importDefault(require(z(0x1f4) + A(0x213) + 'r')), ApiConfig_1 = __importDefault(require(z(0x1fd) + z(0x1fa) + 'ig')), UpdateApiConfigService = async ({
        apiData: g,
        apiId: h,
        tenantId: i
    }) => {
        const C = z, D = z, j = {};
        j[C(0x201)] = D(0x202) + C(0x207) + C(0x1f6);
        const l = j, m = {};
        m['id'] = h, m[D(0x1fc)] = i;
        const n = {};
        n[C(0x211)] = m;
        const o = await ApiConfig_1[C(0x1ef)][C(0x20e)](n);
        if (!o)
            throw new AppError_1[(C(0x1ef))](l[C(0x201)], 0x2 * 0x127d + 0x185 * 0x13 + -0x4045);
        const {
                name: p,
                sessionId: q,
                urlServiceStatus: r,
                urlMessageStatus: s,
                userId: t,
                authToken: u,
                isActive: v
            } = g, w = {};
        return w[C(0x1f7)] = p, w[D(0x203)] = q, w[D(0x20a) + C(0x1f8)] = r, w[C(0x212) + C(0x1f8)] = s, w[D(0x200)] = t, w[D(0x1f3)] = u, w[C(0x1fb)] = v, await o[C(0x20d)](w), await o[C(0x208)](), o;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2 * 0x463 + 0x1c4c + -0x1199);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[z(0x1ef)] = UpdateApiConfigService;