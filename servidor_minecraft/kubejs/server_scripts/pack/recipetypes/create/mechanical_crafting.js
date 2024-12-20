onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/create/mechanical_crafting/'
    const recipes = [
        {
            output: 'create:crushing_wheel',
            pattern: [' AAA ', 'AACAA', 'ACSCA', 'AACAA', ' AAA '],
            key: {
                A: 'create:andesite_alloy',
                C: 'create:andesite_casing',
                S: 'create:shaft'
            },
            id: 'create:mechanical_crafting/crushing_wheel'
        },
        {
            output: 'createoreexcavation:drilling_machine',
            pattern: ['IBCBI', 'BTSTB', 'LMEMP', 'BYYYB', 'IBABI'],
            key: {
                I: 'create:metal_girder',
                B: '#forge:storage_blocks/brass',
                C: 'create:copper_casing',
                T: 'create:electron_tube',
                S: 'create:spout',
                E: 'create:mechanical_drill',
                L: 'create:brass_casing',
                M: 'create:precision_mechanism',
                Y: '#forge:plates/obsidian',
                P: 'create:brass_tunnel',
                A: '#forge:plates/brass'
            },
            id: 'createoreexcavation:drilling_machine'
        },
        {
            output: 'createoreexcavation:extractor',
            pattern: ['IBCBI', 'BTSTB', 'LMEMP', 'BYYYB', 'IBABI'],
            key: {
                I: 'create:metal_girder',
                B: 'create:mechanical_pump',
                C: 'create:copper_casing',
                T: 'create:electron_tube',
                S: 'create:hose_pulley',
                E: 'create:mechanical_drill',
                L: 'create:brass_casing',
                M: 'create:precision_mechanism',
                Y: '#forge:plates/obsidian',
                P: 'create:copper_casing',
                A: '#forge:plates/brass'
            },
            id: 'createoreexcavation:extractor'
        },
        {
            output: Item.of('immersiveengineering:cokebrick', 3),
            pattern: ['CSC', 'SBS', 'CSC'],
            key: {
                C: 'minecraft:clay',
                S: 'tconstruct:seared_brick',
                B: '#forge:sandstone'
            },
            id: 'immersiveengineering:crafting/cokebrick'
        },
        {
            output: Item.of('immersiveengineering:blastbrick', 3),
            pattern: ['CSC', 'SBS', 'CSC'],
            key: {
                C: 'minecraft:nether_bricks',
                S: 'tconstruct:scorched_brick',
                B: 'minecraft:magma_block'
            },
            id: 'immersiveengineering:crafting/blastbrick'
        },
        {
            output: Item.of('immersiveengineering:alloybrick', 2),
            pattern: ['AB', 'BA'],
            key: {
                A: 'tconstruct:blazewood',
                B: 'tconstruct:seared_brick'
            },
            id: 'immersiveengineering:crafting/alloybrick'
        },
        {
            output: 'immersiveengineering:thermoelectric_generator',
            pattern: ['SCCCS', 'CEEEC', 'CENEC', 'CEEEC', 'SCCCS'],
            key: {
                S: '#forge:sheetmetals/steel',
                C: 'immersiveengineering:coil_lv',
                E: '#forge:plates/constantan',
                N: '#forge:ingots/netherite'
            },
            id: 'immersiveengineering:crafting/thermoelectric_generator'
        },
        {
            output: 'tiab:time_in_a_bottle',
            pattern: ['    B    ', '   BAB   ', '   GGG   ', '   GGG   ', '  SGCGS  ', ' SGGGGGS ', ' SGGTGGS ', ' SGGGGGS ', '  SSSSS  '],
            key: {
                S: '#forge:sheetmetals/steel',
                B: '#forge:ingots/brass',
                A: 'immersiveengineering:light_bulb',
                T: 'forbidden_arcanus:aureal_bottle',
                G: 'tconstruct:clear_glass',
                C: 'create:cuckoo_clock'
            },
            id: 'tiab:time_in_a_bottle'
        },
        {
            output: 'botania:terra_plate',
            pattern: ['LLL', 'WBF', 'EMA'],
            key: {
                B: 'botania:manasteel_block',
                L: 'minecraft:lapis_block',
                F: 'botania:rune_fire',
                A: 'botania:rune_air',
                M: 'botania:rune_mana',
                E: 'botania:rune_earth',
                W: 'botania:rune_water'
            },
            id: 'botania:terra_plate'
        },
        {
            output: 'chroma:coke',
            pattern: ['CCECC', 'CSBSC', 'EBRBE', 'CSBSC', 'CCECC'],
            key: {
                C: 'immersiveengineering:cokebrick',
                E: '#forge:storage_blocks/coal_coke',
                S: '#forge:plates/steel',
                B: 'immersiveengineering:heavy_engineering',
                R: 'immersiveengineering:rs_engineering'
            },
            id: `${id_prefix}coke`
        },
        {
            output: 'torchmaster:feral_flare_lantern',
            pattern: [' A ', 'DGD', ' A '],
            key: {
                A: '#forge:ingots/arcane_gold',
                D: 'evilcraft:obscured_glass',
                G: '#forge:dusts/glowstone'
            },
            id: 'torchmaster:feral_flare_lantern'
        },
        {
            output: 'torchmaster:dreadlamp',
            pattern: ['OOO', ' G ', 'OIO'],
            key: {
                O: 'forbidden_arcanus:processed_obsidian_block',
                G: 'minecraft:shroomlight',
                I: '#forge:dyes/black'
            },
            id: 'torchmaster:dreadlamp'
        },
        {
            output: 'torchmaster:dreadlamp',
            pattern: ['OOO', ' G ', 'OIO'],
            key: {
                O: 'forbidden_arcanus:processed_obsidian_block',
                G: 'minecraft:shroomlight',
                I: '#forge:dyes/black'
            },
            id: 'torchmaster:dreadlamp'
        },
        {
            output: 'torchmaster:megatorch',
            pattern: ['TTT', 'DLD', 'ALA'],
            key: {
                T: 'minecraft:torch',
                D: '#forge:gems/mana_diamond',
                L: 'blue_skies:maple_log',
                A: '#forge:storage_blocks/arcane_gold'
            },
            id: 'torchmaster:megatorch'
        },
        {
            output: Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:steel"}'),
            pattern: [' R ', 'SIS', ' R '],
            key: {
                R: 'immersiveengineering:wirecoil_redstone',
                S: '#forge:ingots/steel',
                I: 'ironjetpacks:basic_coil'
            },
            id: `${id_prefix}steel_cell`
        },
        {
            output: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:steel",Throttle:1.0d}'),
            pattern: ['SBS', 'SLS', 'TRT'],
            key: {
                S: '#forge:plates/steel',
                B: Item.of('ironjetpacks:capacitor', '{Id:"ironjetpacks:steel"}'),
                L: 'ironjetpacks:strap',
                T: Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:steel"}'),
                R: 'angelring:itemdiamondring'
            },
            id: `${id_prefix}steel_jetpack`
        },
        {
            output: 'chroma:mixed_tier_2_essence',
            pattern: ['ABCDEFG'],
            key: {
                A: 'mysticalagriculture:amethyst_essence',
                B: 'mysticalagriculture:sulfur_essence',
                C: 'mysticalagriculture:saltpeter_essence',
                D: 'mysticalagriculture:obsidian_essence',
                E: 'mysticalagriculture:nether_essence',
                F: 'mysticalagriculture:end_essence',
                G: 'mysticalagriculture:nature_essence'
            },
            id: `${id_prefix}mixed_tier_2_essence`
        },
        {
            output: 'chroma:mixed_tier_4_essence',
            pattern: ['ABCDEFGH'],
            key: {
                A: 'mysticalagriculture:refined_obsidian_essence',
                B: 'mysticalagriculture:fluix_essence',
                C: 'mysticalagriculture:hop_graphite_essence',
                D: 'mysticalagriculture:blazing_crystal_essence',
                E: 'mysticalagriculture:elementium_essence',
                F: 'mysticalagriculture:compressed_iron_essence',
                G: 'mysticalagriculture:forgotten_essence',
                H: 'mysticalagriculture:desh_essence'
            },
            id: `${id_prefix}mixed_tier_4_essence`
        },
        {
            output: 'chroma:mixed_tier_3_essence',
            pattern: ['ABCDEF'],
            key: {
                A: 'mysticalagriculture:amethyst_bronze_essence',
                B: 'mysticalagriculture:bronze_essence',
                C: 'mysticalagriculture:slimesteel_essence',
                D: 'mysticalagriculture:silicon_essence',
                E: 'mysticalagriculture:pig_iron_essence',
                F: 'mysticalagriculture:brass_essence'
            },
            id: `${id_prefix}mixed_tier_3_essence`
        },
        {
            output: 'chroma:shard_of_knowledge',
            pattern: ['      ', '   TTT', '  MMPV', ' MCMV ', 'MMMM  ', 'BBB   '],
            key: {
                T: 'create:electron_tube',
                M: 'create:precision_mechanism',
                P: 'tconstruct:pig_iron_block',
                V: 'mna:vinteum_block',
                C: 'mysticalagradditions:creative_essence',
                B: 'create:creative_blaze_cake'
            },
            id: `${id_prefix}shard_of_knowledge`
        },
        {
            output: 'doom:doom_helmet',
            pattern: ["AAAAAAA", 'ABBBBBA', 'ABBBBBA', 'AB   BA'],
            key: {
                A: 'doom:argent_plate',
                B: 'doom:argent_energy'
            },
            id: 'doom:doom_helmet'
        },
        {
            output: 'doom:doom_chestplate',
            pattern: ["AABBBAA", 'AABBBAA', ' ABBBA ', ' ABBBA ', ' ABBBA ', ' ABBBA ', ' AAAAA '],
            key: {
                A: 'doom:argent_plate',
                B: 'doom:argent_energy'
            },
            id: 'doom:doom_chestplate'
        },
        {
            output: 'doom:doom_leggings',
            pattern: ["AAAAAAA", 'AAAAAAA', 'AABBBAA', 'AAB BAA', 'AAB BAA', 'AAB BAA', 'AAB BAA'],
            key: {
                A: 'doom:argent_plate',
                B: 'doom:argent_energy'
            },
            id: 'doom:doom_leggings'
        },
        {
            output: 'doom:doom_boots',
            pattern: ["  B B  ", ' BB BB ', ' BB BB ', ' BA AB ', ' BA AB ', ' BA AB ', 'AAA AAA'],
            key: {
                A: 'doom:argent_plate',
                B: 'doom:argent_energy'
            },
            id: 'doom:doom_boots'
        },
        {
            output: 'doom:praetor_doom_helmet',
            pattern: ["AAAAAAA", 'ABBBBBA', 'ABBBBBA', 'AB   BA'],
            key: {
                B: 'doom:argent_plate',
                A: 'doom:argent_energy'
            },
            id: 'doom:praetor_doom_helmet'
        },
        {
            output: 'doom:praetor_doom_chestplate',
            pattern: ["AABBBAA", 'AABBBAA', ' ABBBA ', ' ABBBA ', ' ABBBA ', ' ABBBA ', ' AAAAA '],
            key: {
                B: 'doom:argent_plate',
                A: 'doom:argent_energy'
            },
            id: 'doom:praetor_doom_chestplate'
        },
        {
            output: 'doom:praetor_doom_leggings',
            pattern: ["AAAAAAA", 'AAAAAAA', 'AABBBAA', 'AAB BAA', 'AAB BAA', 'AAB BAA', 'AAB BAA'],
            key: {
                B: 'doom:argent_plate',
                A: 'doom:argent_energy'
            },
            id: 'doom:praetor_doom_leggings'
        },
        {
            output: 'doom:praetor_doom_boots',
            pattern: ["  B B  ", ' BB BB ', ' BB BB ', ' BA AB ', ' BA AB ', ' BA AB ', 'AAA AAA'],
            key: {
                B: 'doom:argent_plate',
                A: 'doom:argent_energy'
            },
            id: 'doom:praetor_doom_boots'
        },
        {
            output: 'doom:classic_doom_helmet',
            pattern: ["AAACAAA", 'ABBBBBA', 'ABBBBBA', 'AB   BA'],
            key: {
                B: 'doom:argent_plate',
                A: 'doom:argent_energy',
                C: 'doom:energy_cells'
            },
            id: 'doom:classic_doom_helmet'
        },
        {
            output: 'doom:classic_doom_chestplate',
            pattern: ["AABCBAA", 'AABBBAA', ' ABBBA ', ' ABBBA ', ' ABBBA ', ' ABBBA ', ' AAAAA '],
            key: {
                B: 'doom:argent_plate',
                A: 'doom:argent_energy',
                C: 'doom:energy_cells'
            },
            id: 'doom:classic_doom_chestplate'
        },
        {
            output: 'doom:classic_doom_leggings',
            pattern: ["AAACAAA", 'AAAAAAA', 'AABBBAA', 'AAB BAA', 'AAB BAA', 'AAB BAA', 'AAB BAA'],
            key: {
                B: 'doom:argent_plate',
                A: 'doom:argent_energy',
                C: 'doom:energy_cells'
            },
            id: 'doom:classic_doom_leggings'
        },
        {
            output: 'doom:classic_doom_boots',
            pattern: ["  B B  ", ' BB BB ', ' BB BB ', ' BA AB ', ' BA AB ', ' BA AB ', 'AAACAAA'],
            key: {
                B: 'doom:argent_plate',
                A: 'doom:argent_energy',
                C: 'doom:energy_cells'
            },
            id: 'doom:classic_doom_boots'
        },
    ];

    recipes.forEach((recipe) => {
        event.recipes.create.mechanical_crafting(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
