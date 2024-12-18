onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/beyond_earth/shaped/';
    const recipes = [
        {
            output: 'beyond_earth_giselle_addon:gravity_normalizer',
            pattern: ['SSS', 'GBG', 'SSS'],
            key: {
                S: '#beyond_earth:compresseds/steel',
                G: Item.of('beyond_earth:space_boots', '{Damage:0}').ignoreNBT(),
                B: '#industrialforegoing:machine_frame/simple'
            },
            id: 'beyond_earth_giselle_addon:crafting/gravity_normalizer'
        },
        {
            output: 'beyond_earth_giselle_addon:oxygen_can',
            pattern: [' R ', 'POP', 'PPP'],
            key: {
                P: '#forge:plates/aluminum',
                O: 'beyond_earth:oxygen_tank',
                R: 'mekanism:hdpe_rod'
            },
            id: 'beyond_earth_giselle_addon:crafting/oxygen_can'
        },
        {
            output: Item.of('beyond_earth:wheel', 2),
            pattern: ['PBP', 'BRB', 'PBP'],
            key: {
                P: 'chroma:carbon_fiber',
                B: '#forge:dyes/black',
                R: 'mekanism:hdpe_rod'
            },
            id: 'beyond_earth:wheel'
        },
        {
            output: 'beyond_earth:engine_frame',
            pattern: ['PBP', 'BRB', 'PBP'],
            key: {
                P: '#beyond_earth:compresseds/steel',
                B: '#forge:ingots/ludicrite',
                R: '#mekanism:alloys/atomic'
            },
            id: 'beyond_earth:engine_frame'
        },
        {
            output: 'beyond_earth:oxygen_gear',
            pattern: [' P ', 'ARA', 'AEA'],
            key: {
                P: '#beyond_earth:compresseds/steel',
                A: '#forge:plates/aluminum',
                R: 'mekanism:hdpe_rod',
                E: 'mekanism:electrolytic_core'
            },
            id: 'beyond_earth:oxygen_gear'
        },
        {
            output: 'beyond_earth:compressor',
            pattern: ['OCO', 'PFP', 'HLH'],
            key: {
                O: '#beyond_earth:compresseds/refined_obsidian',
                C: '#forge:circuits/ultimate',
                F: '#industrialforegoing:machine_frame/simple',
                P: 'beyond_earth_giselle_addon:press_compressing_die',
                H: '#beyond_earth:compresseds/hop_graphite',
                L: '#beyond_earth:compresseds/ludicrite'
            },
            id: 'beyond_earth:compressor'
        },
        {
            output: 'beyond_earth:solar_panel',
            pattern: ['SSS', 'CFC', 'AUA'],
            key: {
                U: '#forge:circuits/ultimate',
                S: 'pneumaticcraft:solar_cell',
                C: '#beyond_earth:compresseds/steel',
                F: 'chroma:carbon_fiber',
                A: '#forge:plates/aluminum'
            },
            id: 'beyond_earth:solar_panel'
        },
        {
            output: 'beyond_earth:fuel_refinery',
            pattern: ['CUC', 'RFR', 'CTC'],
            key: {
                U: '#forge:circuits/ultimate',
                C: '#beyond_earth:compresseds/ludicrite',
                R: 'pneumaticcraft:refinery_output',
                F: '#industrialforegoing:machine_frame/simple',
                T: 'mekanism:elite_fluid_tank'
            },
            id: 'beyond_earth:fuel_refinery'
        },
        {
            output: 'beyond_earth:engine_fan',
            pattern: [' C ', 'CAC', ' C '],
            key: {
                C: '#beyond_earth:compresseds/steel',
                A: 'pneumaticcraft:turbine_rotor'
            },
            id: 'beyond_earth:engine_fan'
        },
        {
            output: 'beyond_earth:steel_engine',
            pattern: ['CAC', 'FTE', 'SBF'],
            key: {
                C: '#beyond_earth:compresseds/steel',
                A: '#forge:alloys/ultimate',
                F: 'chroma:carbon_fiber',
                T: 'mekanism:basic_chemical_tank',
                E: 'beyond_earth:engine_frame',
                S: '#beyond_earth:compresseds/titanium',
                B: 'beyond_earth:engine_fan'
            },
            id: 'beyond_earth:iron_engine'
        },
        {
            output: 'beyond_earth:steel_tank',
            pattern: ['FCF', 'CTC', 'FCF'],
            key: {
                C: '#beyond_earth:compresseds/steel',
                F: 'chroma:carbon_fiber',
                T: 'industrialforegoing:common_black_hole_tank'
            },
            id: 'beyond_earth:iron_tank'
        },
        {
            output: 'beyond_earth:rocket_fin',
            pattern: [' T ', 'FTF', 'CTC'],
            key: {
                C: '#beyond_earth:compresseds/steel',
                F: 'chroma:carbon_fiber',
                T: '#beyond_earth:compresseds/titanium'
            },
            id: 'beyond_earth:rocket_fin'
        },
        {
            output: 'beyond_earth:rocket_nose_cone',
            pattern: [' B ', ' C ', 'CFC'],
            key: {
                C: '#beyond_earth:compresseds/steel',
                F: 'chroma:carbon_fiber',
                B: 'powah:crystal_blazing'
            },
            id: 'beyond_earth:rocket_nose_cone'
        },
        {
            output: 'beyond_earth:oxygen_tank',
            pattern: ['RPR', 'ATA', 'ABA'],
            key: {
                R: 'thermal:red_rockwool',
                P: 'pneumaticcraft:pressure_gauge',
                A: '#forge:plates/aluminum',
                T: 'mekanism:basic_chemical_tank',
                B: 'pneumaticcraft:advanced_pressure_tube'
            },
            id: 'beyond_earth:oxygen_tank'
        },
        {
            output: 'beyond_earth:space_boots',
            pattern: ['FAF', 'F F'],
            key: {
                F: 'chroma:carbon_fiber',
                A: 'mekanism:hazmat_boots'
            },
            id: 'beyond_earth:space_boots'
        },
        {
            output: 'beyond_earth:space_pants',
            pattern: ['FFF', 'FAF', 'F F'],
            key: {
                F: 'chroma:carbon_fiber',
                A: 'mekanism:hazmat_pants'
            },
            id: 'beyond_earth:space_leggings'
        },
        {
            output: 'beyond_earth:space_suit',
            pattern: ['F F', 'OGO', 'FHF'],
            key: {
                F: 'chroma:carbon_fiber',
                O: 'beyond_earth:oxygen_tank',
                G: 'beyond_earth:oxygen_gear',
                H: 'mekanism:hazmat_gown'
            },
            id: 'beyond_earth:space_suit'
        },
        {
            output: 'beyond_earth:oxygen_mask',
            pattern: ['FFF', 'FAF'],
            key: {
                F: 'chroma:carbon_fiber',
                A: 'mekanism:scuba_mask'
            },
            id: 'beyond_earth:oxygen_mask'
        },
        {
            output: 'beyond_earth_giselle_addon:advanced_compressor',
            pattern: ['SSS', 'CMC', 'SBS'],
            key: {
                S: '#beyond_earth:compresseds/steel',
                C: 'powah:capacitor_spirited',
                M: 'beyond_earth:compressor',
                B: Item.of('powah:battery_spirited').weakNBT()
            },
            id: 'beyond_earth_giselle_addon:crafting/advanced_compressor'
        },
        {
            output: 'beyond_earth:desh_tank',
            pattern: ['CTC', 'TBT', 'CTC'],
            key: {
                C: '#beyond_earth:compresseds/desh',
                T: '#beyond_earth:compresseds/titanium',
                B: 'industrialforegoing:simple_black_hole_tank'
            },
            id: 'beyond_earth:gold_tank'
        },
        {
            output: 'beyond_earth:desh_engine',
            pattern: ['CAC', 'FTE', 'BPF'],
            key: {
                C: '#beyond_earth:compresseds/desh',
                A: 'chroma:absolute_alloy',
                F: 'chroma:carbon_fiber',
                T: 'mekanism:advanced_chemical_tank',
                E: 'beyond_earth:engine_frame',
                B: '#beyond_earth:compresseds/titanium',
                P: 'beyond_earth:engine_fan'
            },
            id: 'beyond_earth:gold_engine'
        },
        {
            output: 'chroma:desh_rocket_fin',
            pattern: ['CTC', 'FTF', 'CTC'],
            key: {
                C: '#beyond_earth:compresseds/desh',
                T: '#beyond_earth:compresseds/titanium',
                F: 'chroma:carbon_fiber'
            },
            id: `${id_prefix}desh_rocket_fin`
        },
        {
            output: 'chroma:desh_rocket_nose_cone',
            pattern: [' S ', ' C ', 'CFC'],
            key: {
                C: '#beyond_earth:compresseds/desh',
                S: 'powah:crystal_spirited',
                F: 'chroma:carbon_fiber'
            },
            id: `${id_prefix}desh_rocket_nose_cone`
        },
        {
            output: 'chroma:ostrum_rocket_fin',
            pattern: ['CTC', 'FTF', 'CTC'],
            key: {
                C: '#beyond_earth:compresseds/ostrum',
                T: '#beyond_earth:compresseds/titanium',
                F: 'chroma:carbon_fiber'
            },
            id: `${id_prefix}ostrum_rocket_fin`
        },
        {
            output: 'chroma:ostrum_rocket_nose_cone',
            pattern: [' S ', ' C ', 'CFC'],
            key: {
                C: '#beyond_earth:compresseds/ostrum',
                S: 'powah:crystal_nitro',
                F: 'chroma:carbon_fiber'
            },
            id: `${id_prefix}ostrum_rocket_nose_cone`
        },
        {
            output: 'beyond_earth:ostrum_tank',
            pattern: ['CTC', 'TBT', 'CTC'],
            key: {
                C: '#beyond_earth:compresseds/ostrum',
                T: '#beyond_earth:compresseds/titanium',
                B: 'industrialforegoing:advanced_black_hole_tank'
            },
            id: 'beyond_earth:diamond_tank'
        },
        {
            output: 'beyond_earth:ostrum_engine',
            pattern: ['CAC', 'FTE', 'BPF'],
            key: {
                C: '#beyond_earth:compresseds/ostrum',
                A: 'chroma:supreme_alloy',
                F: 'chroma:carbon_fiber',
                T: 'mekanism:elite_chemical_tank',
                E: 'beyond_earth:engine_frame',
                B: '#beyond_earth:compresseds/titanium',
                P: 'beyond_earth:engine_fan'
            },
            id: 'beyond_earth:diamond_engine'
        },

        {
            output: 'chroma:calorite_rocket_fin',
            pattern: ['CTC', 'FTF', 'CTC'],
            key: {
                C: '#beyond_earth:compresseds/calorite',
                T: '#beyond_earth:compresseds/titanium',
                F: 'chroma:carbon_fiber'
            },
            id: `${id_prefix}calorite_rocket_fin`
        },
        {
            output: 'chroma:calorite_rocket_nose_cone',
            pattern: [' S ', ' C ', 'CFC'],
            key: {
                C: '#beyond_earth:compresseds/calorite',
                S: '#forge:ingots/bismuth',
                F: 'chroma:carbon_fiber'
            },
            id: `${id_prefix}calorite_rocket_nose_cone`
        },
        {
            output: 'beyond_earth:calorite_tank',
            pattern: ['CTC', 'TBT', 'CTC'],
            key: {
                C: '#beyond_earth:compresseds/calorite',
                T: '#beyond_earth:compresseds/titanium',
                B: 'industrialforegoing:supreme_black_hole_tank'
            },
            id: 'beyond_earth:calorite_tank'
        },
        {
            output: 'beyond_earth:calorite_engine',
            pattern: ['CAC', 'FTE', 'BPF'],
            key: {
                C: '#beyond_earth:compresseds/calorite',
                A: 'chroma:cosmic_alloy',
                F: 'chroma:carbon_fiber',
                T: 'mekanism:ultimate_chemical_tank',
                E: 'beyond_earth:engine_frame',
                B: '#beyond_earth:compresseds/titanium',
                P: 'beyond_earth:engine_fan'
            },
            id: 'beyond_earth:calorite_engine'
        },
        {
            output: 'beyond_earth:oxygen_bubble_distributor',
            pattern: ['DCD', 'FOF', 'HHH'],
            key: {
                D: '#beyond_earth:compresseds/desh',
                C: '#forge:alloys/ultimate',
                F: 'beyond_earth:engine_fan',
                O: 'beyond_earth_giselle_addon:oxygen_can',
                H: '#beyond_earth:compresseds/hop_graphite'
            },
            id: 'beyond_earth:oxygen_bubble_distributor'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
