onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/lazierae2/aggregator/';
    const recipes = [
      {
        output: { item: 'chroma:isolated_compressed_desh' },
        inputs: [
          { tag: 'beyond_earth:compresseds/desh' },
          { item: 'powah:crystal_spirited' },
          { item: 'chroma:carbon_fiber' }
        ],
        process_time: 120,
        energy_cost: 1500,
        id: `${id_prefix}isolated_compressed_desh`
      },
      {
        output: { item: 'mysticalagriculture:froststeel_seeds' },
        inputs: [
          { item: 'jaopca:mekanism_shards.froststeel', count: 64 },
          { item: 'mysticalagriculture:imperium_essence', count: 4 },
          { item: 'chroma:imperium_seed_base', count: 1 }
        ],
        process_time: 300,
        energy_cost: 1500,
        id: `${id_prefix}froststeel_seeds`
      },
      {
        output: { item: 'mysticalagriculture:signalum_seeds' },
        inputs: [
          { item: 'thermal:signalum_block', count: 4 },
          { item: 'mysticalagriculture:imperium_essence', count: 4 },
          { item: 'chroma:imperium_seed_base', count: 1 }
        ],
        process_time: 300,
        energy_cost: 1500,
        id: 'mysticalagriculture:seed/infusion/signalum'
      },
      {
        output: { item: 'mysticalagriculture:steel_seeds' },
        inputs: [
          { item: 'immersiveengineering:storage_steel', count: 4 },
          { item: 'mysticalagriculture:imperium_essence', count: 4 },
          { item: 'chroma:imperium_seed_base', count: 1 }
        ],
        process_time: 300,
        energy_cost: 1500,
        id: 'mysticalagriculture:seed/infusion/steel'
      },
      {
        output: { item: 'mysticalagriculture:forgotten_seeds' },
        inputs: [
          { item: 'undergarden:forgotten_block', count: 4 },
          { item: 'mysticalagriculture:imperium_essence', count: 4 },
          { item: 'chroma:imperium_seed_base', count: 1 }
        ],
        process_time: 300,
        energy_cost: 1500,
        id: `${id_prefix}forgotten_seeds`
      },
      {
        output: { item: 'mysticalagriculture:cloggrum_seeds' },
        inputs: [
          { item: 'jaopca:mekanism_shards.cloggrum', count: 64 },
          { item: 'mysticalagriculture:imperium_essence', count: 4 },
          { item: 'chroma:imperium_seed_base', count: 1 }
        ],
        process_time: 300,
        energy_cost: 1500,
        id: `${id_prefix}cloggrum_seeds`
      },
      {
        output: { item: 'mysticalagriculture:desh_seeds' },
        inputs: [
          { item: 'jaopca:mekanism_shards.desh', count: 64 },
          { item: 'mysticalagriculture:imperium_essence', count: 4 },
          { item: 'chroma:imperium_seed_base', count: 1 }
        ],
        process_time: 300,
        energy_cost: 1500,
        id: `${id_prefix}desh_seeds`
      },
      {
        output: { item: 'mysticalagriculture:invar_seeds' },
        inputs: [
          { item: 'thermal:invar_block', count: 4 },
          { item: 'mysticalagriculture:imperium_essence', count: 4 },
          { item: 'chroma:imperium_seed_base', count: 1 }
        ],
        process_time: 300,
        energy_cost: 1500,
        id: 'mysticalagriculture:seed/infusion/invar'
      },
      {
        output: { item: 'mysticalagriculture:rose_gold_seeds' },
        inputs: [
          { item: 'tconstruct:rose_gold_block', count: 4 },
          { item: 'mysticalagriculture:imperium_essence', count: 4 },
          { item: 'chroma:imperium_seed_base', count: 1 }
        ],
        process_time: 300,
        energy_cost: 1500,
        id: 'mysticalagriculture:seed/infusion/rose_gold'
      },
      {
        output: { item: 'mysticalagriculture:constantan_seeds' },
        inputs: [
          { item: 'thermal:constantan_block', count: 4 },
          { item: 'mysticalagriculture:imperium_essence', count: 4 },
          { item: 'chroma:imperium_seed_base', count: 1 }
        ],
        process_time: 300,
        energy_cost: 1500,
        id: 'mysticalagriculture:seed/infusion/constantan'
      },
      {
        output: { item: 'mysticalagriculture:electrum_seeds' },
        inputs: [
          { item: 'thermal:electrum_block', count: 4 },
          { item: 'mysticalagriculture:imperium_essence', count: 4 },
          { item: 'chroma:imperium_seed_base', count: 1 }
        ],
        process_time: 300,
        energy_cost: 1500,
        id: 'mysticalagriculture:seed/infusion/electrum'
      },
      {
        output: { item: 'mysticalagriculture:fluix_seeds' },
        inputs: [
          { item: 'ae2:fluix_block', count: 4 },
          { item: 'mysticalagriculture:imperium_essence', count: 4 },
          { item: 'chroma:imperium_seed_base', count: 1 }
        ],
        process_time: 300,
        energy_cost: 1500,
        id: 'mysticalagriculture:seed/infusion/fluix'
      },
      {
        output: { item: 'mysticalagriculture:utherium_seeds' },
        inputs: [
          { item: 'jaopca:mekanism_shards.utherium', count: 64 },
          { item: 'mysticalagriculture:imperium_essence', count: 4 },
          { item: 'chroma:imperium_seed_base', count: 1 }
        ],
        process_time: 300,
        energy_cost: 1500,
        id: `${id_prefix}utherium_seeds`
      },
      {
        output: { item: 'mysticalagriculture:regalium_seeds' },
        inputs: [
          { item: 'jaopca:mekanism_shards.regalium', count: 64 },
          { item: 'mysticalagriculture:imperium_essence', count: 4 },
          { item: 'chroma:imperium_seed_base', count: 1 }
        ],
        process_time: 300,
        energy_cost: 1500,
        id: `${id_prefix}regalium_seeds`
      },
      {
        output: { item: 'mysticalagriculture:lumium_seeds' },
        inputs: [
          { item: 'thermal:lumium_block', count: 4 },
          { item: 'mysticalagriculture:imperium_essence', count: 4 },
          { item: 'chroma:imperium_seed_base', count: 1 }
        ],
        process_time: 300,
        energy_cost: 1500,
        id: 'mysticalagriculture:seed/infusion/lumium'
      },
      {
        output: { item: 'mysticalagriculture:ostrum_seeds' },
        inputs: [
          { item: 'jaopca:mekanism_crystals.ostrum', count: 64 },
          { item: 'mysticalagriculture:supremium_essence', count: 4 },
          { item: 'chroma:supremium_seed_base', count: 1 }
        ],
        process_time: 300,
        energy_cost: 3000,
        id: `${id_prefix}ostrum_seeds`
      },
      {
        output: { item: 'create:polished_rose_quartz' },
        inputs: [
          { item: 'create:rose_quartz', count: 1 }
        ],
        process_time: 200,
        energy_cost: 3000,
        id: `${id_prefix}polished_rose_quartz`
      },
    ];

    recipes.forEach((recipe) => {
        let ingredients = [];

        recipe.inputs.forEach((input) => {
            ingredients.push(Ingredient.of(input));
        });

        event.custom({
            type: 'lazierae2:aggregator',
            output: recipe.output,
            input: ingredients,
            process_time: recipe.process_time,
            energy_cost: recipe.energy_cost,
        }).id(recipe.id);
    });
});
