'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x150e + -0xfca + -0x3cd);
        let h = e[f];
        return h;
    }, b(c, d);
}
const t = b, u = b;
function a() {
    const z = [
        'defineProp',
        'DATE',
        'DataTypes',
        'erty',
        'type',
        'Tags',
        '3079824yqWUtH',
        'allowNull',
        'CASCADE',
        'autoIncrem',
        '10rCeVbD',
        '4354072FFOKKp',
        '540378NgMGzw',
        'zpAnq',
        '5433974JObujR',
        'sequelize',
        'ent',
        'WwKKf',
        'createTabl',
        '2394524JDpose',
        'SlMLu',
        '3352632UoXNPk',
        'RESTRICT',
        'hHWPi',
        'primaryKey',
        'Contacts',
        '__esModule',
        'dropTable',
        '2lMeUBj',
        '11660XmNWjP',
        'value',
        'INTEGER',
        'exports',
        '9kAMkWV',
        'eboZP',
        'Tenants',
        'ContactTag',
        '402JcKwLJ',
        'PyTXR',
        'axdgi'
    ];
    a = function () {
        return z;
    };
    return a();
}
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0x177)) / (-0xf67 + 0x1 * 0x11f7 + -0x5 * 0x83) * (parseInt(s(0x187)) / (-0x120b * -0x1 + 0x95 * -0x2a + 0x669)) + parseInt(r(0x199)) / (0x490 + -0x21 * -0x1c + 0x829 * -0x1) + parseInt(r(0x180)) / (-0x1137 + 0x3d8 + -0x17 * -0x95) + parseInt(r(0x188)) / (-0x19bb + 0x219c + -0x3ee * 0x2) * (-parseInt(s(0x190)) / (-0x719 * -0x1 + -0x16f0 * -0x1 + 0xa01 * -0x3)) + -parseInt(r(0x179)) / (-0x73 * -0x49 + 0x1db6 + -0xb * 0x5ae) + parseInt(r(0x19e)) / (0x2360 + -0x2 * -0xb89 + -0x3a6a) * (-parseInt(r(0x18c)) / (-0x51c + -0xab3 + 0x4 * 0x3f6)) + -parseInt(r(0x19d)) / (-0x1 * -0x503 + -0x1c * -0xb3 + 0x188d * -0x1) * (parseInt(s(0x17e)) / (0x1 * 0x1378 + -0x2a * -0x57 + 0x1 * -0x21b3));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x15d57 + -0x9 * 0xffe4 + 0x15346e));
const q = {};
q[t(0x189)] = !![], Object[u(0x193) + u(0x196)](exports, t(0x185), q);
const sequelize_1 = require(u(0x17a));
module[u(0x18b)] = {
    'up': e => {
        const v = u, w = t, f = {};
        f[v(0x17f)] = w(0x18f) + 's', f[w(0x192)] = v(0x198), f[v(0x178)] = v(0x19b), f[v(0x18d)] = v(0x181), f[v(0x191)] = v(0x184), f[w(0x182)] = w(0x18e);
        const g = f, h = {};
        return h[v(0x197)] = sequelize_1[v(0x195)][w(0x18a)], h[v(0x19c) + v(0x17b)] = !![], h[w(0x183)] = !![], h[w(0x19a)] = ![], e[w(0x17d) + 'e'](g[w(0x17f)], {
            'id': h,
            'tagId': {
                'type': sequelize_1[w(0x195)][w(0x18a)],
                'references': {
                    'model': g[v(0x192)],
                    'key': 'id'
                },
                'onUpdate': g[v(0x178)],
                'onDelete': g[v(0x18d)],
                'allowNull': ![]
            },
            'contactId': {
                'type': sequelize_1[v(0x195)][v(0x18a)],
                'references': {
                    'model': g[v(0x191)],
                    'key': 'id'
                },
                'onUpdate': g[w(0x178)],
                'onDelete': g[v(0x178)],
                'allowNull': ![]
            },
            'tenantId': {
                'type': sequelize_1[v(0x195)][w(0x18a)],
                'references': {
                    'model': g[w(0x182)],
                    'key': 'id'
                },
                'onUpdate': g[w(0x178)],
                'onDelete': g[w(0x178)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[v(0x195)][w(0x194)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[v(0x195)][v(0x194)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const x = u, y = u, e = {};
        e[x(0x17c)] = y(0x18f) + 's';
        const f = e;
        return d[x(0x186)](f[y(0x17c)]);
    }
};