onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/chroma/shaped/';
    const recipes = [
      {
        output: 'chroma:nebula_extractor_item_output',
          pattern: ['FEF', 'FCF', 'FFF'],
          key: {
              F: 'chroma:nebula_frame',
              E: 'mekanism:logistical_sorter',
              C: 'mekanism:personal_barrel'
          },
          id: `${id_prefix}nebula_extractor_item_output`
      },
      {
        output: 'chroma:nebula_extractor_energy_input',
          pattern: ['FFF', 'FCF', 'FFF'],
          key: {
              F: 'chroma:nebula_frame',
              C: Item.of('solarpanels:quantum_energy_tablet').ignoreNBT()
          },
          id: `${id_prefix}nebula_extractor_energy_input`
      },
      {
        output: 'chroma:nebula_drill_t1',
          pattern: ['FFF', 'UCU', ' U '],
          key: {
              F: 'chroma:nebula_frame',
              C: 'create:mechanical_drill',
              U: '#forge:ingots/regalium'
          },
          id: `${id_prefix}nebula_drill_t1`
      },
      {
        output: Item.of('chroma:nebula_frame', 4),
          pattern: ['FUF', 'UCU', 'FUF'],
          key: {
              F: 'mekanism:hdpe_sheet',
              C: 'chroma:carbon_fiber',
              U: 'mekanism:enriched_iron'
          },
          id: `${id_prefix}nebula_frame`
      },
      {
        output: 'chroma:nebula_extractor_t1_frame',
          pattern: ['FUF', 'FCF', 'FUF'],
          key: {
              F: 'mekanism:hdpe_sheet',
              C: '#forge:circuits/ultimate',
              U: '#forge:ingots/regalium'
          },
          id: `${id_prefix}nebula_extractor_t1_frame`
      },
      {
        output: 'chroma:nebula_extractor_t1_laser_support',
          pattern: ['AAA', 'UFU', 'FCF'],
          key: {
              F: 'mekanism:hdpe_sheet',
              C: '#forge:circuits/ultimate',
              U: '#forge:ingots/regalium',
              A: '#beyond_earth:compresseds/graphite'
          },
          id: `${id_prefix}nebula_extractor_t1_laser_support`
      },
      {
        output: 'chroma:nebula_extractor_t1_laser_top',
          pattern: ['AE ', 'AFU', 'AE '],
          key: {
              A: '#forge:alloys/ultimate',
              E: Item.of('solarpanels:quantum_energy_tablet').ignoreNBT(),
              F: '#industrialforegoing:machine_frame/simple',
              U: '#forge:ingots/regalium'
          },
          id: `${id_prefix}nebula_extractor_t1_laser_top`
      },
      {
        output: 'chroma:nebula_extractor_t2_frame',
          pattern: ['FUF', 'FCF', 'FUF'],
          key: {
              F: 'mekanism:hdpe_sheet',
              C: 'mekaevolution:absolute_control_circuit',
              U: '#forge:ingots/ostrum'
          },
          id: `${id_prefix}nebula_extractor_t2_frame`
      },
      {
        output: 'chroma:nebula_extractor_t2_laser_support',
          pattern: ['AAA', 'UFU', 'FCF'],
          key: {
              F: 'mekanism:hdpe_sheet',
              C: 'mekaevolution:absolute_control_circuit',
              U: '#forge:ingots/ostrum',
              A: '#beyond_earth:compresseds/graphite'
          },
          id: `${id_prefix}nebula_extractor_t2_laser_support`
      },
      {
        output: 'chroma:nebula_extractor_t2_laser_top',
          pattern: ['AE ', 'AFU', 'AE '],
          key: {
              A: 'chroma:absolute_alloy',
              E: Item.of('solarpanels:spectral_energy_tablet').ignoreNBT(),
              F: '#industrialforegoing:machine_frame/advanced',
              U: '#forge:ingots/ostrum'
          },
          id: `${id_prefix}nebula_extractor_t2_laser_top`
      },
      {
        output: 'chroma:nebula_drill_t2',
          pattern: ['FFF', 'UCU', ' U '],
          key: {
              F: 'chroma:nebula_frame',
              C: 'create:mechanical_drill',
              U: '#forge:ingots/ostrum'
          },
          id: `${id_prefix}nebula_drill_t2`
      },
      {
        output: 'chroma:void_miner_laser_core_t1',
          pattern: ['FGF', 'FCF', 'FGF'],
          key: {
              F: 'chroma:structure_frame',
              G: '#forge:glass',
              C: 'powah:capacitor_spirited'
          },
          id: `${id_prefix}void_miner_laser_core_t1`
      },
      {
        output: 'chroma:void_item_output_tier_1',
          pattern: ['FGF', 'GCG', 'FGF'],
          key: {
              F: 'chroma:absolute_alloy',
              G: 'chroma:void_miner_frame_tier1',
              C: 'mekanism:personal_barrel'
          },
          id: `${id_prefix}void_item_output_tier_1`
      },
      {
        output: 'chroma:energy_input_tier_1',
          pattern: ['FGF', 'GCG', 'FGF'],
          key: {
              F: 'mekaevolution:absolute_control_circuit',
              G: 'chroma:void_miner_frame_tier1',
              C: Item.of('solarpanels:spectral_energy_tablet').ignoreNBT()
          },
          id: `${id_prefix}energy_input_tier_1`
      },
      {
        output: Item.of('chroma:structure_frame', 4),
          pattern: ['FGF', 'GCG', 'FGF'],
          key: {
              F: 'powah:dielectric_paste',
              G: 'mekanism:hdpe_sheet',
              C: 'chemlib:tungsten'
          },
          id: `${id_prefix}structure_frame`
      },
      {
        output: 'chroma:energy_input_tier_2',
          pattern: ['FGF', 'GCG', 'FGF'],
          key: {
              F: 'mekaevolution:supreme_control_circuit',
              G: 'chroma:void_miner_frame_tier2',
              C: 'chroma:energy_input_tier_1'
          },
          id: `${id_prefix}energy_input_tier_2`
      },
      {
        output: 'chroma:void_item_output_tier_2',
          pattern: ['FGF', 'GCG', 'FGF'],
          key: {
              F: 'chroma:supreme_alloy',
              G: 'chroma:void_miner_frame_tier2',
              C: 'chroma:void_item_output_tier_1'
          },
          id: `${id_prefix}void_item_output_tier_2`
      },
      {
        output: 'chroma:void_miner_laser_core_t2',
          pattern: ['ABA', 'ACA', 'ABA'],
          key: {
              A: 'chroma:structure_frame',
              B: 'powah:capacitor_nitro',
              C: 'chroma:void_miner_laser_core_t1'
          },
          id: `${id_prefix}void_miner_laser_core_t2`
      },
      {
        output: 'chroma:nebula_extractor_t3_frame',
          pattern: ['FUF', 'FCF', 'FUF'],
          key: {
              F: 'mekanism:hdpe_sheet',
              C: 'mekaevolution:supreme_control_circuit',
              U: '#forge:ingots/calorite'
          },
          id: `${id_prefix}nebula_extractor_t3_frame`
      },
      {
        output: 'chroma:nebula_extractor_t3_laser_support',
          pattern: ['AAA', 'UFU', 'FCF'],
          key: {
              F: 'mekanism:hdpe_sheet',
              C: 'mekaevolution:supreme_control_circuit',
              U: '#forge:ingots/calorite',
              A: '#beyond_earth:compresseds/graphite'
          },
          id: `${id_prefix}nebula_extractor_t3_laser_support`
      },
      {
        output: 'chroma:nebula_extractor_t3_laser_top',
          pattern: ['AE ', 'AFU', 'AE '],
          key: {
              A: 'chroma:supreme_alloy',
              E: Item.of('solarpanels:singular_energy_tablet').ignoreNBT(),
              F: '#industrialforegoing:machine_frame/supreme',
              U: '#forge:ingots/calorite'
          },
          id: `${id_prefix}nebula_extractor_t3_laser_top`
      },
      {
        output: 'chroma:nebula_drill_t3',
          pattern: ['FFF', 'UCU', ' U '],
          key: {
              F: 'chroma:nebula_frame',
              C: 'create:mechanical_drill',
              U: '#forge:ingots/calorite'
          },
          id: `${id_prefix}nebula_drill_t3`
      },
      {
        output: 'chroma:energy_input_tier_3',
          pattern: ['FGF', 'GCG', 'FGF'],
          key: {
              F: 'mekaevolution:cosmic_control_circuit',
              G: 'chroma:void_miner_frame_tier3',
              C: 'chroma:energy_input_tier_2'
          },
          id: `${id_prefix}energy_input_tier_3`
      },
      {
        output: 'chroma:void_item_output_tier_3',
          pattern: ['FGF', 'GCG', 'FGF'],
          key: {
              F: 'chroma:cosmic_alloy',
              G: 'chroma:void_miner_frame_tier3',
              C: 'chroma:void_item_output_tier_2'
          },
          id: `${id_prefix}void_item_output_tier_3`
      },
      {
        output: 'chroma:void_miner_laser_core_t3',
          pattern: ['ABA', 'ACA', 'ABA'],
          key: {
              A: 'chroma:structure_frame',
              B: 'draconicevolution:wyvern_energy_core',
              C: 'chroma:void_miner_laser_core_t2'
          },
          id: `${id_prefix}void_miner_laser_core_t3`
      },
      {
        output: 'chroma:nebula_extractor_t4_frame',
          pattern: ['FUF', 'FCF', 'FUF'],
          key: {
              F: 'mekanism:hdpe_sheet',
              C: 'mekaevolution:cosmic_control_circuit',
              U: 'extendedcrafting:crystaltine_ingot'
          },
          id: `${id_prefix}nebula_extractor_t4_frame`
      },
      {
        output: 'chroma:nebula_extractor_t4_laser_support',
          pattern: ['AAA', 'UFU', 'FCF'],
          key: {
              F: 'mekanism:hdpe_sheet',
              C: 'mekaevolution:cosmic_control_circuit',
              U: 'extendedcrafting:crystaltine_ingot',
              A: '#beyond_earth:compresseds/graphite'
          },
          id: `${id_prefix}nebula_extractor_t4_laser_support`
      },
      {
        output: 'chroma:nebula_extractor_t4_laser_top',
          pattern: ['AE ', 'AFU', 'AE '],
          key: {
              A: 'chroma:cosmic_alloy',
              E: Item.of('solarpanels:light_absorbing_energy_tablet').ignoreNBT(),
              F: '#industrialforegoing:machine_frame/supreme',
              U: 'extendedcrafting:crystaltine_ingot'
          },
          id: `${id_prefix}nebula_extractor_t4_laser_top`
      },
      {
        output: 'chroma:nebula_drill_t4',
          pattern: ['FFF', 'UCU', ' U '],
          key: {
              F: 'chroma:nebula_frame',
              C: 'create:mechanical_drill',
              U: 'extendedcrafting:crystaltine_ingot'
          },
          id: `${id_prefix}nebula_drill_t4`
      },
      {
        output: 'chroma:energy_input_tier_4',
          pattern: ['FGF', 'GCG', 'FGF'],
          key: {
              F: 'mekaevolution:infinite_control_circuit',
              G: 'chroma:void_miner_frame_tier4',
              C: 'chroma:energy_input_tier_3'
          },
          id: `${id_prefix}energy_input_tier_4`
      },
      {
        output: 'chroma:void_item_output_tier_4',
          pattern: ['FGF', 'GCG', 'FGF'],
          key: {
              F: 'chroma:infinite_alloy',
              G: 'chroma:void_miner_frame_tier4',
              C: 'chroma:void_item_output_tier_3'
          },
          id: `${id_prefix}void_item_output_tier_4`
      },
      {
        output: 'chroma:void_miner_laser_core_t4',
          pattern: ['ABA', 'ACA', 'ABA'],
          key: {
              A: 'chroma:structure_frame',
              B: 'draconicevolution:draconic_energy_core',
              C: 'chroma:void_miner_laser_core_t3'
          },
          id: `${id_prefix}void_miner_laser_core_t4`
      },
      {
        output: 'chroma:accelerator_item_input',
          pattern: ['ABA', 'ACA', 'AAA'],
          key: {
              A: 'chroma:accelerator_frame',
              B: 'mekanism:qio_importer',
              C: 'draconicevolution:chaotic_core'
          },
          id: `${id_prefix}accelerator_item_input`
      },
      {
        output: 'chroma:accelerator_item_output',
          pattern: ['ABA', 'ACA', 'AAA'],
          key: {
              A: 'chroma:accelerator_frame',
              B: 'mekanism:qio_exporter',
              C: 'draconicevolution:chaotic_core'
          },
          id: `${id_prefix}accelerator_item_output`
      },
      {
        output: 'chroma:accelerator_energy_input',
          pattern: ['ABA', 'ACA', 'AAA'],
          key: {
              A: 'chroma:accelerator_frame',
              B: 'draconicevolution:reactor_injector',
              C: Item.of('mekaevolution:infinite_energy_cube').ignoreNBT()
          },
          id: `${id_prefix}accelerator_energy_input`
      },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
