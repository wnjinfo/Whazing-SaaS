'use strict';
const L = b, M = b;
(function (c, d) {
    const J = b, K = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(J(0x145)) / (0x16a7 + 0x1c50 + -0x2 * 0x197b) + parseInt(K(0x13f)) / (0x2147 + -0x446 * -0x8 + -0x4375) + -parseInt(J(0x12a)) / (0x1da6 + 0x243c + -0x41df) * (parseInt(K(0x142)) / (0xf31 * -0x1 + 0x2 * -0xc54 + 0x5 * 0x7f9)) + parseInt(J(0x140)) / (0x138e + 0x11f3 * -0x2 + -0x47 * -0x3b) + -parseInt(J(0x13e)) / (0x1d8b + 0x43 * 0x18 + -0x23cd) * (parseInt(K(0x134)) / (-0x1 * 0x1812 + -0x1 * -0x168f + -0x2 * -0xc5)) + parseInt(J(0x128)) / (-0x2b1 * 0xe + -0x1 * -0x16ae + 0xf08) * (parseInt(K(0x14c)) / (-0x66d + -0x9 * -0x14f + -0x551)) + -parseInt(J(0x132)) / (0x4 * 0x35d + 0x2 * -0x9ef + -0xec * -0x7);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xde241 + -0x44b98 + -0x81ea));
const I = {};
I[L(0x12d)] = !![], Object[L(0x143) + M(0x131)](exports, L(0x150), I);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x7 * -0x12b + -0x1 * 0x471 + -0x56 * -0x29);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(L(0x130));
function a() {
    const R = [
        '4mOFDZl',
        'defineProp',
        'SET\x20NULL',
        '183046sBcjzD',
        'Whatsapps',
        'all',
        'createTabl',
        'pending',
        'primaryKey',
        'dropTable',
        '9nuofOg',
        'DATE',
        'allowNull',
        'ArBDO',
        '__esModule',
        'STRING',
        'qgAoP',
        'autoIncrem',
        '1172872OmbHex',
        'Users',
        '401817FWeTzB',
        'Campaigns',
        'TEXT',
        'value',
        'XCDJg',
        'CASCADE',
        'sequelize',
        'erty',
        '10070970DtrawH',
        'fsHfk',
        '21fyFhKX',
        'DataTypes',
        'JAqlE',
        'exports',
        'type',
        'ent',
        'Tenants',
        'INTEGER',
        'rDZrI',
        'Ohuaw',
        '49428xtYiNB',
        '2335256yErRHK',
        '1318010pmRPXt',
        'UUGcm'
    ];
    a = function () {
        return R;
    };
    return a();
}
module[L(0x137)] = {
    'up': g => {
        const N = L, O = M, h = {};
        h[N(0x14f)] = O(0x12b), h[O(0x13d)] = N(0x149), h[N(0x152)] = N(0x146), h[N(0x141)] = O(0x12f), h[O(0x13c)] = N(0x144), h[N(0x12e)] = O(0x129), h[N(0x136)] = N(0x13a);
        const i = h, j = {};
        j[O(0x138)] = sequelize_1[N(0x135)][N(0x13b)], j[N(0x14a)] = !![], j[N(0x153) + N(0x139)] = !![], j[O(0x14e)] = ![];
        const k = {};
        k[O(0x138)] = sequelize_1[O(0x135)][O(0x151)], k[N(0x14e)] = ![];
        const l = {};
        return l[N(0x138)] = sequelize_1[O(0x135)][N(0x14d)], l[N(0x14e)] = ![], Promise[O(0x147)]([g[O(0x148) + 'e'](i[O(0x14f)], {
                'id': j,
                'name': k,
                'start': l,
                'status': {
                    'type': sequelize_1[O(0x135)][O(0x151)],
                    'allowNull': ![],
                    'defaultValue': i[N(0x13d)]
                },
                'sessionId': {
                    'type': sequelize_1[O(0x135)][N(0x13b)],
                    'references': {
                        'model': i[O(0x152)],
                        'key': 'id'
                    },
                    'onUpdate': i[N(0x141)],
                    'onDelete': i[N(0x13c)]
                },
                'message1': {
                    'type': sequelize_1[O(0x135)][N(0x12c)],
                    'allowNull': ![]
                },
                'message2': {
                    'type': sequelize_1[O(0x135)][N(0x12c)],
                    'allowNull': ![]
                },
                'message3': {
                    'type': sequelize_1[O(0x135)][N(0x12c)],
                    'allowNull': ![]
                },
                'mediaUrl': {
                    'type': sequelize_1[O(0x135)][N(0x151)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'mediaType': {
                    'type': sequelize_1[O(0x135)][O(0x151)],
                    'allowNull': !![],
                    'defaultValue': null
                },
                'userId': {
                    'type': sequelize_1[N(0x135)][O(0x13b)],
                    'references': {
                        'model': i[O(0x12e)],
                        'key': 'id'
                    },
                    'onUpdate': i[N(0x141)],
                    'onDelete': i[N(0x13c)]
                },
                'tenantId': {
                    'type': sequelize_1[O(0x135)][N(0x13b)],
                    'references': {
                        'model': i[N(0x136)],
                        'key': 'id'
                    },
                    'onUpdate': i[O(0x141)],
                    'onDelete': i[N(0x141)],
                    'allowNull': ![],
                    'defaultValue': 0x1
                },
                'createdAt': {
                    'type': sequelize_1[O(0x135)][N(0x14d)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[N(0x135)][O(0x14d)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const P = M, Q = M, e = {};
        e[P(0x133)] = Q(0x12b);
        const f = e;
        return Promise[P(0x147)]([d[P(0x14b)](f[Q(0x133)])]);
    }
};