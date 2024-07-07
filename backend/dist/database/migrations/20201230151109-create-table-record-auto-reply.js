'use strict';
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(z(0xb9)) / (-0x25 * 0x3 + -0x74c * 0x2 + 0xf08) + -parseInt(z(0xc6)) / (-0x58 * -0x34 + -0xec0 + 0x1 * -0x31e) * (-parseInt(z(0xa7)) / (0x1fed + 0x7ce + -0x27b8)) + parseInt(A(0xb3)) / (0xb * 0x2e7 + -0x2520 + 0x537) * (-parseInt(A(0xb7)) / (-0x1 * -0x1803 + -0x1ab0 + 0x2b2)) + parseInt(A(0xa5)) / (-0x16a9 * -0x1 + -0x705 * -0x1 + 0x4 * -0x76a) + -parseInt(z(0xc1)) / (-0x1 * 0x24d4 + -0x15 * 0x6f + -0x2 * -0x16fb) * (-parseInt(A(0xb5)) / (0x2429 + 0x2193 + 0x22da * -0x2)) + -parseInt(A(0xaf)) / (-0x1477 * -0x1 + -0x209 * 0x1 + 0x1265 * -0x1) + parseInt(A(0xc5)) / (-0x4 * 0x151 + 0x1d9f + 0x81b * -0x3) * (parseInt(z(0xc7)) / (-0xd43 + -0x5 + 0xd53));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2 * -0x40eb5 + -0x7 * 0x63d1 + -0xbce8));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x25fd + 0x1 * -0x17c9 + 0x3e67);
        let h = e[f];
        return h;
    }, b(c, d);
}
const y = {};
y[B(0xab)] = !![], Object[C(0xa1) + C(0xa8)](exports, C(0xa3), y);
function a() {
    const H = [
        'LUHmP',
        'dropTable',
        'Contacts',
        '2098570KhNrRw',
        '1982TOsmjG',
        '33abZLjk',
        'zphaz',
        'defineProp',
        'lSpSF',
        '__esModule',
        'huREK',
        '1019664pqfvfh',
        'INTEGER',
        '246KcJzhV',
        'erty',
        'exports',
        'EomHl',
        'value',
        'qgphF',
        'restrict',
        'DATE',
        '1205775zzAGjv',
        'createTabl',
        'DataTypes',
        'autoIncrem',
        '4CrcstI',
        'STRING',
        '72aBZpBP',
        'Tickets',
        '2411885lBWlUA',
        'ogs',
        '215636MQnOkR',
        'allowNull',
        'type',
        'primaryKey',
        'sequelize',
        'CASCADE',
        'ent',
        'AutoReplyL',
        '198954CDdUSs'
    ];
    a = function () {
        return H;
    };
    return a();
}
const sequelize_1 = require(B(0xbd));
module[C(0xa9)] = {
    'up': j => {
        const D = C, E = B, k = {};
        k[D(0xaa)] = E(0xc0) + E(0xb8), k[D(0xa4)] = D(0xc4), k[E(0xc2)] = E(0xbe), k[D(0xac)] = D(0xad), k[D(0xa2)] = E(0xb6);
        const l = k, m = {};
        m[D(0xbb)] = sequelize_1[E(0xb1)][E(0xa6)], m[D(0xb2) + D(0xbf)] = !![], m[E(0xbc)] = !![], m[E(0xba)] = ![];
        const n = {};
        n[D(0xbb)] = sequelize_1[D(0xb1)][E(0xa6)], n[E(0xba)] = ![];
        const o = {};
        o[D(0xbb)] = sequelize_1[D(0xb1)][E(0xb4)], o[D(0xba)] = ![];
        const p = {};
        p[E(0xbb)] = sequelize_1[D(0xb1)][D(0xa6)], p[E(0xba)] = ![];
        const q = {};
        q[D(0xbb)] = sequelize_1[E(0xb1)][E(0xb4)], q[D(0xba)] = ![];
        const r = {};
        return r[D(0xbb)] = sequelize_1[E(0xb1)][D(0xb4)], r[E(0xba)] = ![], j[E(0xb0) + 'e'](l[E(0xaa)], {
            'id': m,
            'autoReplyId': n,
            'autoReplyName': o,
            'stepsReplyId': p,
            'stepsReplyMessage': q,
            'wordsReply': r,
            'contactId': {
                'type': sequelize_1[D(0xb1)][E(0xa6)],
                'references': {
                    'model': l[E(0xa4)],
                    'key': 'id'
                },
                'onUpdate': l[D(0xc2)],
                'onDelete': l[E(0xac)]
            },
            'ticketId': {
                'type': sequelize_1[E(0xb1)][D(0xa6)],
                'references': {
                    'model': l[D(0xa2)],
                    'key': 'id'
                },
                'onUpdate': l[E(0xc2)],
                'onDelete': l[E(0xac)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[D(0xb1)][E(0xae)](-0x9 * 0x1f3 + -0x4 * -0x62 + 0x1 * 0x1009),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[E(0xb1)][D(0xae)](-0xe06 + -0x11 * -0x1eb + -0x128f),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const F = B, G = B, e = {};
        e[F(0xc8)] = G(0xc0) + F(0xb8);
        const f = e;
        return d[F(0xc3)](f[F(0xc8)]);
    }
};