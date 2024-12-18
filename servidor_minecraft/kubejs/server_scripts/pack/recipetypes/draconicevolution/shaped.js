onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/draconicevolution/shaped/';
    const recipes = [
      {
        output: 'draconicevolution:draconium_core',
          pattern: ['DCD', 'CNC', 'DCD'],
          key: {
              D: '#forge:ingots/draconium',
              C: '#forge:ingots/calorite',
              N: 'powah:crystal_niotic'
          },
          id: 'draconicevolution:components/draconium_core'
      },
      {
        output: 'draconicevolution:wyvern_energy_core',
          pattern: ['DCD', 'CNC', 'DCD'],
          key: {
              D: '#forge:ingots/draconium',
              C: 'chroma:supreme_alloy',
              N: 'draconicevolution:draconium_core'
          },
          id: 'draconicevolution:components/wyvern_energy_core'
      },
      {
        output: 'draconicevolution:draconium_energy_module',
          pattern: ['NNN', 'ABA', 'NNN'],
          key: {
              A: 'draconicevolution:module_core',
              B: 'fluxnetworks:flux_core',
              N: 'powah:capacitor_nitro'
          },
          id: 'draconicevolution:modules/draconium_energy'
      },
      {
        output: 'draconicevolution:wyvern_shield_capacity_module',
          pattern: ['NCN', 'ABA', 'NCN'],
          key: {
              A: 'draconicevolution:module_core',
              B: '#forge:ingots/cloggrum',
              N: '#forge:ingots/draconium',
              C: '#forge:ingots/calorite'
          },
          id: 'draconicevolution:modules/wyvern_shield_capacity'
      },
      {
        output: 'draconicevolution:wyvern_shield_recovery_module',
          pattern: ['NCN', 'ABA', 'NCN'],
          key: {
              A: 'draconicevolution:module_core',
              B: '#forge:ingots/utherium',
              N: '#forge:ingots/draconium',
              C: '#forge:ingots/calorite'
          },
          id: 'draconicevolution:modules/wyvern_shield_recovery'
      },
      {
        output: Item.of('draconicevolution:energy_pylon', 2),
          pattern: ['IEI', 'CFC', 'ILI'],
          key: {
              I: '#forge:ingots/draconium',
              E: 'powah:ender_core',
              C: 'mekaevolution:infinite_control_circuit',
              F: 'draconicevolution:wyvern_core',
              L: 'lazierae2:logic_unit'
          },
          id: 'draconicevolution:energy_pylon'
      },
      {
        output: 'draconicevolution:particle_generator',
          pattern: ['ICI', 'CFC', 'ICI'],
          key: {
              I: 'powah:crystal_nitro',
              C: 'powah:crystal_blazing',
              F: 'draconicevolution:draconium_core'
          },
          id: 'draconicevolution:particle_generator'
      },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
