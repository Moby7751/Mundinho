onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/industrialforegoing/laser_drill_ore/';

    const endBiomes = {
        type: 'minecraft:worldgen/biome',
        values: end_biomes
    };

    const netherBiomes = {
        type: 'minecraft:worldgen/biome',
        values: nether_biomes
    };

    const netherAndEndBiomes = {
        type: 'minecraft:worldgen/biome',
        values: end_biomes.concat(nether_biomes)
    };

    const undergardenBiomes = {
        type: 'undergarden:worldgen/biome',
        values: undergarden_biomes
    };

    const blueskiesBiomes = {
        type: 'blue_skies:worldgen/biome',
        values: blueskies_biomes
    };

    const mythicBiomes = {
        type: 'mythicbotany:worldgen/biome',
        values: mythic_biomes
    };

    const glacioBiomes = {
        type: 'beyond_earth:worldgen/biome',
        values: glacio_biomes
    };

    const venusBiomes = {
        type: 'beyond_earth:worldgen/biome',
        values: venus_biomes
    };

    const marsBiomes = {
        type: 'beyond_earth:worldgen/biome',
        values: mars_biomes
    };

    const mercuryBiomes = {
        type: 'beyond_earth:worldgen/biome',
        values: mercury_biomes
    };

    const moonBiomes = {
        type: 'beyond_earth:worldgen/biome',
        values: moon_biomes
    };

    const orbitBiomes = {
        type: 'beyond_earth:worldgen/biome',
        values: orbit_biomes
    };

    const recipes = [
        {
            output: { item: 'rftoolsbase:dimensionalshard_nether' },
            rarity: [
                {
                    whitelist: endBiomes,
                    blacklist: {},
                    depth_min: 30,
                    depth_max: 60,
                    weight: 12
                },
                {
                    whitelist: netherBiomes,
                    blacklist: {},
                    depth_min: 7,
                    depth_max: 117,
                    weight: 12
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.white },
            id: `${id_prefix}dimensional_chunk`
        },
        {
            output: { item: 'evilcraft:dark_ore' },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 15,
                    depth_max: 45,
                    weight: 5
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.black },
            id: `${id_prefix}dark_gem`
        },
        {
            output: { tag: 'forge:ores/cinnabar' },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 30,
                    depth_max: 70,
                    weight: 2
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.pink },
            id: `${id_prefix}cinnabar`
        },
        {
            output: { tag: 'forge:raw_materials/zinc' },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 10,
                    depth_max: 40,
                    weight: 4
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.brown },
            id: `${id_prefix}zinc`
        },
        {
            output: { tag: 'forge:ores/apatite' },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 40,
                    depth_max: 80,
                    weight: 16
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 2
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.cyan },
            id: `${id_prefix}apatite`
        },
        {
            output: { item: 'mysticalagriculture:soulium_ore' },
            rarity: [
                {
                    whitelist: netherBiomes,
                    blacklist: {},
                    depth_min: 1,
                    depth_max: 20,
                    weight: 12
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.brown },
            id: `${id_prefix}soulium_ore`
        },
        {
            output: { item: 'undergarden:depthrock_cloggrum_ore' },
            rarity: [
                {
                    whitelist: undergardenBiomes,
                    blacklist: {},
                    depth_min: 5,
                    depth_max: 200,
                    weight: 20
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.brown },
            id: `${id_prefix}cloggrum_ore`
        },
        {
            output: { item: 'undergarden:shiverstone_froststeel_ore' },
            rarity: [
                {
                    whitelist: undergardenBiomes,
                    blacklist: {},
                    depth_min: 50,
                    depth_max: 100,
                    weight: 20
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.cyan },
            id: `${id_prefix}froststeel_ore`
        },
        {
            output: { item: 'undergarden:depthrock_utherium_ore'},
            rarity: [
                {
                    whitelist: undergardenBiomes,
                    blacklist: {},
                    depth_min: 5,
                    depth_max: 50,
                    weight: 20
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.orange },
            id: `${id_prefix}utherium_ore`
        },
        {
            output: { item: 'undergarden:depthrock_regalium_ore' },
            rarity: [
                {
                    whitelist: undergardenBiomes,
                    blacklist: {},
                    depth_min: 1,
                    depth_max: 10,
                    weight: 2
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.yellow },
            id: `${id_prefix}regalium_ore`
        },
        {
            output: { item: 'mythicbotany:elementium_ore' },
            rarity: [
                {
                    whitelist: mythicBiomes,
                    blacklist: {},
                    depth_min: 1,
                    depth_max: 10,
                    weight: 2
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.magenta },
            id: `${id_prefix}elementium_ore`
        },
        {
            output: { item: 'mythicbotany:dragonstone_ore' },
            rarity: [
                {
                    whitelist: mythicBiomes,
                    blacklist: {},
                    depth_min: 1,
                    depth_max: 10,
                    weight: 2
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.magenta },
            id: `${id_prefix}dragonstone_ore`
        },
        {
            output: { item: 'beyond_earth:glacio_ice_shard_ore' },
            rarity: [
                {
                    whitelist: glacioBiomes,
                    blacklist: {},
                    depth_min: 1,
                    depth_max: 56,
                    weight: 6
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.light_blue },
            id: `${id_prefix}glacio_ice_shard_ore`
        },
        {
            output: { item: 'beyond_earth:moon_ice_shard_ore' },
            rarity: [
                {
                    whitelist: moonBiomes,
                    blacklist: {},
                    depth_min: 1,
                    depth_max: 56,
                    weight: 6
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.light_blue },
            id: `${id_prefix}moon_ice_shard_ore`
        },
        {
            output: { item: 'beyond_earth:moon_desh_ore' },
            rarity: [
                {
                    whitelist: moonBiomes,
                    blacklist: {},
                    depth_min: 20,
                    depth_max: 60,
                    weight: 4
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.orange },
            id: `${id_prefix}moon_desh_ore`
        },
        {
            output: { item: 'beyond_earth:mars_ice_shard_ore' },
            rarity: [
                {
                    whitelist: marsBiomes,
                    blacklist: {},
                    depth_min: 1,
                    depth_max: 56,
                    weight: 6
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.light_blue },
            id: `${id_prefix}mars_ice_shard_ore`
        },
        {
            output: { item: 'beyond_earth:mars_ostrum_ore' },
            rarity: [
                {
                    whitelist: marsBiomes,
                    blacklist: {},
                    depth_min: 20,
                    depth_max: 60,
                    weight: 4
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.black },
            id: `${id_prefix}mars_ostrum_ore`
        },
        {
            output: { item: 'beyond_earth:venus_calorite_ore' },
            rarity: [
                {
                    whitelist: venusBiomes,
                    blacklist: {},
                    depth_min: 20,
                    depth_max: 60,
                    weight: 4
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.pink },
            id: `${id_prefix}venus_calorite_ore`
        },
        {
            output: { item: 'blue_skies:everbright_diopside_ore' },
            rarity: [
                {
                    whitelist: blueskiesBiomes,
                    blacklist: {},
                    depth_min: 1,
                    depth_max: 156,
                    weight: 6
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.lime },
            id: `${id_prefix}everbright_diopside_ore`
        },
        {
            output: { item: 'blue_skies:everdawn_diopside_ore' },
            rarity: [
                {
                    whitelist: blueskiesBiomes,
                    blacklist: {},
                    depth_min: 1,
                    depth_max: 156,
                    weight: 6
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.lime },
            id: `${id_prefix}everdawn_diopside_ore`
        },
        {
            output: { item: 'blue_skies:everbright_pyrope_ore' },
            rarity: [
                {
                    whitelist: blueskiesBiomes,
                    blacklist: {},
                    depth_min: 1,
                    depth_max: 156,
                    weight: 6
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.red },
            id: `${id_prefix}everbright_pyrope_ore`
        },
        {
            output: { item: 'blue_skies:everdawn_pyrope_ore' },
            rarity: [
                {
                    whitelist: blueskiesBiomes,
                    blacklist: {},
                    depth_min: 1,
                    depth_max: 156,
                    weight: 6
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.red },
            id: `${id_prefix}everdawn_pyrope_ore`
        },
        {
            output: { item: 'blue_skies:everbright_aquite_ore' },
            rarity: [
                {
                    whitelist: blueskiesBiomes,
                    blacklist: {},
                    depth_min: 1,
                    depth_max: 156,
                    weight: 6
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.light_blue },
            id: `${id_prefix}everbright_aquite_ore`
        },
        {
            output: { item: 'blue_skies:everdawn_aquite_ore' },
            rarity: [
                {
                    whitelist: blueskiesBiomes,
                    blacklist: {},
                    depth_min: 1,
                    depth_max: 156,
                    weight: 6
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.light_blue },
            id: `${id_prefix}everdawn_aquite_ore`
        },
        {
            output: { item: 'blue_skies:everbright_charoite_ore' },
            rarity: [
                {
                    whitelist: blueskiesBiomes,
                    blacklist: {},
                    depth_min: 1,
                    depth_max: 156,
                    weight: 6
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.purple },
            id: `${id_prefix}everbright_charoite_ore`
        },
        {
            output: { item: 'blue_skies:everdawn_charoite_ore' },
            rarity: [
                {
                    whitelist: blueskiesBiomes,
                    blacklist: {},
                    depth_min: 1,
                    depth_max: 156,
                    weight: 6
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.purple },
            id: `${id_prefix}everdawn_charoite_ore`
        },
        {
            output: { item: 'blue_skies:everbright_moonstone_ore' },
            rarity: [
                {
                    whitelist: blueskiesBiomes,
                    blacklist: {},
                    depth_min: 1,
                    depth_max: 156,
                    weight: 6
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.light_blue },
            id: `${id_prefix}everbright_moonstone_ore`
        },
        {
            output: { item: 'blue_skies:everdawn_moonstone_ore' },
            rarity: [
                {
                    whitelist: blueskiesBiomes,
                    blacklist: {},
                    depth_min: 1,
                    depth_max: 156,
                    weight: 6
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.light_blue },
            id: `${id_prefix}everdawn_moonstone_ore`
        },
        {
            output: { item: 'blue_skies:falsite_ore' },
            rarity: [
                {
                    whitelist: blueskiesBiomes,
                    blacklist: {},
                    depth_min: 1,
                    depth_max: 156,
                    weight: 4
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.purple },
            id: `${id_prefix}falsite_ore`
        },
        {
            output: { item: 'blue_skies:ventium_ore' },
            rarity: [
                {
                    whitelist: blueskiesBiomes,
                    blacklist: {},
                    depth_min: 1,
                    depth_max: 156,
                    weight: 4
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.red },
            id: `${id_prefix}ventium_ore`
        },
        {
            output: { item: 'blue_skies:horizonite_ore' },
            rarity: [
                {
                    whitelist: blueskiesBiomes,
                    blacklist: {},
                    depth_min: 1,
                    depth_max: 156,
                    weight: 4
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.orange },
            id: `${id_prefix}horizonite_ore`
        },
    ];
    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'industrialforegoing:laser_drill_ore',
                output: recipe.output,
                rarity: recipe.rarity,
                pointer: 0,
                catalyst: recipe.catalyst
            })
            .id(recipe.id);
    });
});
