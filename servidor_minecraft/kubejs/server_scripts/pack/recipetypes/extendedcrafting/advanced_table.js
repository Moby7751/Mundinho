onEvent("recipes", (event) => {
  const id_prefix = 'chroma:pack/extendedcrafting/table/';

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "CFGFC",
        "BDEDB",
        "ABCBA"
      ],
      "key": {
        "A": {
          "item": "chroma:dielectric_paste_block"
        },
        "B": {
          "item": "ae2:smooth_sky_stone_block"
        },
        "C": {
          "item": "powah:capacitor_hardened"
        },
        "D": {
          "item": "lazierae2:fluix_steel_ingot"
        },
        "E": {
          "item": "pneumaticcraft:transistor"
        },
        "F": {
          "item": "pneumaticcraft:capacitor"
        },
        "G": {
          "item": "mekanism:alloy_reinforced"
        }
      },
      "result": {
        "item": "ae2:controller"
      }
    }
  ).id('ae2:network/blocks/controller')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "FEGEF",
        "BDEDB",
        "ABHBA"
      ],
      "key": {
        "A": {
          "item": "powah:capacitor_hardened"
        },
        "B": {
          "item": "pneumaticcraft:compressed_bricks"
        },
        "C": {
          "item": "thermal:flux_drill",
        },
        "D": {
          "item": "mekanism:alloy_reinforced"
        },
        "E": {
          "item": "mekanism:elite_control_circuit"
        },
        "F": {
          "item": "pneumaticcraft:transistor"
        },
        "G": {
          "item": "rftoolsbase:machine_frame"
        },
        "H": {
          "item": "thermal:flux_saw"
        }
      },
      "result": {
        "item": "rftoolsbuilder:builder"
      }
    }
  ).id('rftoolsbuilder:builder')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCDA",
        "EFGFH",
        "IGJGI",
        "KFGFL",
        "AMNOA"
      ],
      "key": {
        "A": {
          "item": "pneumaticcraft:ingot_iron_compressed"
        },
        "B": {
          "item": "minecraft:bone"
        },
        "C": {
          "item": "pneumaticcraft:spawner_extractor"
        },
        "D": {
          "item": "minecraft:ghast_tear"
        },
        "E": {
          "item": "minecraft:rotten_flesh"
        },
        "F": {
          "item": "rftoolsbase:infused_diamond"
        },
        "G": {
          "item": "mekanism:elite_control_circuit"
        },
        "H": {
          "item": "minecraft:blaze_rod"
        },
        "I": {
          "item": "rftoolsbase:infused_enderpearl"
        },
        "J": {
          "item": "rftoolsbase:machine_frame"
        },
        "K": {
          "item": "minecraft:shulker_shell"
        },
        "L": {
          "item": "minecraft:wither_skeleton_skull"
        },
        "M": {
          "item": "minecraft:ender_pearl"
        },
        "N": {
          "item": "solarpanels:improved_energy_tablet"
        },
        "O": {
          "item": "minecraft:phantom_membrane"
        }
      },
      "result": {
        "item": "rftoolsutility:spawner"
      }
    }
  ).id('rftoolsutility:spawner')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "CFGHC",
        "IDJDI",
        "AIKIA"
      ],
      "key": {
        "A": {
          "item": "mna:decoration/transmuted_silver_block"
        },
        "B": {
          "item": "mna:decoration/vinteum_arcane_stone"
        },
        "C": {
          "item": "rftoolsbase:infused_diamond"
        },
        "D": {
          "item": "botania:gaia_ingot"
        },
        "E": {
          "item": "botania:rune_air"
        },
        "F": {
          "item": "botania:rune_fire"
        },
        "G": {
          "item": "rftoolsbase:machine_frame"
        },
        "H": {
          "item": "botania:rune_earth"
        },
        "I": {
          "item": "mna:decoration/redstone_arcane_stone"
        },
        "J": {
          "item": "botania:rune_water"
        },
        "K": {
          "item": "solarpanels:improved_energy_tablet"
        }
      },
      "result": {
        "item": "rftoolsutility:environmental_controller"
      }
    }
  ).id('rftoolsutility:environmental_controller')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDDDB",
        "EDFDE",
        "BDDDB",
        "ABGBA"
      ],
      "key": {
        "A": {
          "item": "ae2:matter_ball"
        },
        "B": {
          "item": "industrialforegoing:plastic"
        },
        "C": {
          "item": "industrialforegoing:common_black_hole_tank"
        },
        "D": {
          "item": "create:mechanical_crafter"
        },
        "E": {
          "item": "mekanism:elite_control_circuit"
        },
        "F": {
          "item": "industrialforegoing:machine_frame_pity"
        },
        "G": {
          "item": "solarpanels:improved_energy_tablet"
        }
      },
      "result": {
        "item": "industrialforegoing:dissolution_chamber"
      }
    }
  ).id("industrialforegoing:dissolution_chamber")

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "CDEDA",
        "FEGEH",
        "CDEDA",
        "AABAA"
      ],
      "key": {
        "A": {
          "item": "pneumaticcraft:ingot_iron_compressed"
        },
        "B": {
          "item": "solarpanels:improved_energy_tablet"
        },
        "C": {
          "item": "pneumaticcraft:heat_sink"
        },
        "D": {
          "item": "pneumaticcraft:printed_circuit_board"
        },
        "E": {
          "item": "pneumaticcraft:compressed_iron_gear"
        },
        "F": {
          "item": "mekanism:alloy_reinforced"
        },
        "G": {
          "item": "pneumaticcraft:turbine_rotor"
        },
        "H": {
          "item": "pneumaticcraft:advanced_pressure_tube"
        }
      },
      "result": {
        "item": "pneumaticcraft:flux_compressor"
      }
    }
  ).id('pneumaticcraft:flux_compressor')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        " ABA ",
        "ACDCA",
        "  E  ",
        "  E  ",
        "  E  "
      ],
      "key": {
        "A": {
          "item": "doom:argent_plate"
        },
        "B": {
          "item": "undergarden:regalium_block"
        },
        "C": {
          "item": "solarpanels:improved_energy_tablet"
        },
        "D": {
          "item": "mekanism:alloy_atomic"
        },
        "E": {
          "item": "mekanism:hdpe_stick"
        }
      },
      "result": {
        "item": "mekaevolution:plasma_pickaxe"
      }
    }
  ).id('mekaevolution:plasma_pickaxe')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AAAAA",
        "ABCBA",
        "ACDCA",
        "ABCBA",
        "AAAAA"
      ],
      "key": {
        "A": {
          "item": "mekanism:thermal_evaporation_block"
        },
        "B": {
          "item": "powah:thermoelectric_plate"
        },
        "C": {
          "item": "mekanism:ultimate_control_circuit"
        },
        "D": {
          "item": "mekanism:elite_fluid_tank"
        }
      },
      "result": {
        "item": "mekanism:thermal_evaporation_controller"
      }
    }
  ).id('mekanism:thermal_evaporation/controller')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "FEGEF",
        "BHEHB",
        "ABIBA"
      ],
      "key": {
        "A": {
          "item": "beyond_earth:compressed_desh"
        },
        "B": {
          "item": "lazierae2:fluix_steel_ingot"
        },
        "C": {
          "item": "ae2:charger"
        },
        "D": {
          "item": "mekanism:ultimate_control_circuit"
        },
        "E": {
          "item": "lazierae2:logic_unit"
        },
        "F": {
          "item": "lazierae2:parallel_processor"
        },
        "G": {
          "item": "industrialforegoing:machine_frame_simple"
        },
        "H": {
          "item": "ae2:dense_energy_cell"
        },
        "I": {
          "item": "lazierae2:growth_core"
        }
      },
      "result": {
        "item": "lazierae2:aggregator"
      }
    }
  ).id('lazierae2:aggregator')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "FEGEH",
        "BDIDB",
        "ABJBA"
      ],
      "key": {
        "A": {
          "item": "beyond_earth:compressed_desh"
        },
        "B": {
          "item": "lazierae2:fluix_steel_ingot"
        },
        "C": {
          "item": "ae2:logic_processor"
        },
        "D": {
          "item": "lazierae2:logic_unit"
        },
        "E": {
          "item": "ae2:inscriber"
        },
        "F": {
          "item": "ae2:calculation_processor"
        },
        "G": {
          "item": "industrialforegoing:machine_frame_simple"
        },
        "H": {
          "item": "ae2:engineering_processor"
        },
        "I": {
          "item": "lazierae2:universal_press"
        },
        "J": {
          "item": "lazierae2:parallel_processor"
        }
      },
      "result": {
        "item": "lazierae2:etcher"
      }
    }
  ).id('lazierae2:etcher')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "CFGFC",
        "BDEDB",
        "ABHBA"
      ],
      "key": {
        "A": {
          "item": "beyond_earth:compressed_desh"
        },
        "B": {
          "item": "lazierae2:fluix_steel_ingot"
        },
        "C": {
          "item": "minecraft:amethyst_shard"
        },
        "D": {
          "item": "lazierae2:logic_unit"
        },
        "E": {
          "item": "mekanism:ultimate_control_circuit"
        },
        "F": {
          "item": "lazierae2:parallel_processor"
        },
        "G": {
          "item": "industrialforegoing:machine_frame_simple"
        },
        "H": {
          "item": "mekanism:crusher"
        }
      },
      "result": {
        "item": "lazierae2:grinder"
      }
    }
  ).id('lazierae2:grinder')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "CEFEC",
        "BDEDB",
        "ABCBA"
      ],
      "key": {
        "A": {
          "item": "chroma:supra_catalyst"
        },
        "B": {
          "item": "pneumaticcraft:printed_circuit_board"
        },
        "C": {
          "item": "mekanism:elite_control_circuit"
        },
        "D": {
          "item": "undergarden:utherium_block"
        },
        "E": {
          "item": "create:mechanical_crafter"
        },
        "F": {
          "item": "extendedcrafting:frame"
        }
      },
      "result": {
        "item": "extendedcrafting:crafting_core"
      }
    }
  ).id('extendedcrafting:crafting_core')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "CEFEC",
        "BDEDB",
        "ABCBA"
      ],
      "key": {
        "A": {
          "item": "chroma:supra_catalyst"
        },
        "B": {
          "item": "pneumaticcraft:printed_circuit_board"
        },
        "C": {
          "item": "mekanism:elite_control_circuit"
        },
        "D": {
          "item": "undergarden:utherium_block"
        },
        "E": {
          "item": "ae2:singularity"
        },
        "F": {
          "item": "extendedcrafting:frame"
        }
      },
      "result": {
        "item": "extendedcrafting:compressor"
      }
    }
  ).id('extendedcrafting:compressor')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACDEA",
        "FGDGF",
        "AEDCA",
        "AABAA"
      ],
      "key": {
        "A": {
          "item": "biggerreactors:reactor_casing"
        },
        "B": {
          "item": "mekanism:ultimate_control_circuit"
        },
        "C": {
          "item": "powah:niotic_crystal_block"
        },
        "D": {
          "item": "biggerreactors:reactor_fuel_rod"
        },
        "E": {
          "item": "extendedcrafting:redstone_ingot_block"
        },
        "F": {
          "item": "minecraft:piston"
        },
        "G": {
          "item": "pneumaticcraft:module_expansion_card"
        }
      },
      "result": {
        "item": "biggerreactors:cyanite_reprocessor"
      }
    }
  ).id('biggerreactors:crafting/cyanite_reprocessor')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "CEFEC",
        "BDEDB",
        "ABCBA"
      ],
      "key": {
        "A": {
          "item": "beyond_earth:compressed_desh"
        },
        "B": {
          "item": "mekanism:hdpe_sheet"
        },
        "C": {
          "item": "solarpanels:spectral_energy_tablet"
        },
        "D": {
          "item": "mekaevolution:absolute_control_circuit"
        },
        "E": {
          "item": "chroma:absolute_alloy"
        },
        "F": {
          "item": "mekanism:ultimate_energy_cube"
        }
      },
      "result": {
        "item": "mekaevolution:absolute_energy_cube"
      }
    }
  ).id('mekaevolution:absolute_energy_cube')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABBBA",
        "BCDCB",
        "EFGHI",
        "BCDCB",
        "ABBBA"
      ],
      "key": {
        "A": {
          "item": "beyond_earth:wheel"
        },
        "B": {
          "item": "jaopca:beyond_earth_compresseds.tungsten"
        },
        "C": {
          "item": "chroma:carbon_fiber"
        },
        "D": {
          "item": "mekanism:ultimate_control_circuit"
        },
        "E": {
          "item": "xnet:antenna_dish"
        },
        "F": {
          "item": "mekanism:elite_fluid_tank"
        },
        "G": {
          "item": "create:white_seat"
        },
        "H": {
          "item": "mekanism:personal_barrel"
        },
        "I": {
          "item": "industrialforegoing:machine_frame_simple"
        }
      },
      "result": {
        "item": "beyond_earth:rover"
      }
    }
  ).id('beyond_earth:rover')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "FGHGF",
        "BDEDB",
        "ABCBA"
      ],
      "key": {
        "A": {
          "item": "lazierae2:parallel_processor"
        },
        "B": {
          "item": "chroma:nebula_frame"
        },
        "C": {
          "item": "chroma:supra_catalyst"
        },
        "D": {
          "item": "mekanism:ultimate_control_circuit"
        },
        "E": {
          "item": "biggerreactors:ludicrite_block"
        },
        "F": {
          "item": "powah:energy_cell_niotic"
        },
        "G": {
          "item": "lazierae2:logic_unit"
        },
        "H": {
          "item": "industrialforegoing:machine_frame_simple"
        }
      },
      "result": {
        "item": "chroma:nebula_extractor_tier_1"
      }
    }
  ).id(`${id_prefix}nebula_extractor_tier_1`)

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "FGHGF",
        "BDEDB",
        "ABIBA"
      ],
      "key": {
        "A": {
          "item": "botania:gaia_ingot"
        },
        "B": {
          "item": "chroma:skin_of_gaia"
        },
        "C": {
          "item": "botania:aura_ring_greater"
        },
        "D": {
          "item": "botania:elementium_ingot"
        },
        "E": {
          "item": "botania:dreamwood"
        },
        "F": {
          "item": "botania:natura_pylon"
        },
        "G": {
          "item": "botania:glimmering_livingwood"
        },
        "H": {
          "item": "industrialforegoing:machine_frame_advanced"
        },
        "I": {
          "item": "botania:alfheim_portal"
        }
      },
      "result": {
        "item": "botanicalmachinery:alfheim_market"
      }
    }
  ).id('botanicalmachinery:alfheim_market')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "FGHIF",
        "BDJDB",
        "ABKBA"
      ],
      "key": {
        "A": {
          "item": "botania:gaia_ingot"
        },
        "B": {
          "item": "chroma:skin_of_gaia"
        },
        "C": {
          "item": "botania:aura_ring_greater"
        },
        "D": {
          "item": "botania:elementium_ingot"
        },
        "E": {
          "item": "botania:mana_pearl"
        },
        "F": {
          "item": "botania:corporea_spark_master"
        },
        "G": {
          "item": "botania:manasteel_ingot"
        },
        "H": {
          "item": "industrialforegoing:machine_frame_advanced"
        },
        "I": {
          "item": "botania:mana_diamond"
        },
        "J": {
          "item": "botania:terrasteel_ingot"
        },
        "K": {
          "item": "botania:terra_plate"
        }
      },
      "result": {
        "item": "botanicalmachinery:industrial_agglomeration_factory"
      }
    }
  ).id('botanicalmachinery:industrial_agglomeration_factory')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "FEGEF",
        "BDEDB",
        "ABHBA"
      ],
      "key": {
        "A": {
          "item": "botania:gaia_ingot"
        },
        "B": {
          "item": "chroma:skin_of_gaia"
        },
        "C": {
          "item": "botania:mana_ring_greater"
        },
        "D": {
          "item": "botania:elementium_ingot"
        },
        "E": {
          "item": "botania:fabulous_pool"
        },
        "F": {
          "item": "botania:dragonstone"
        },
        "G": {
          "item": "industrialforegoing:machine_frame_advanced"
        },
        "H": {
          "item": "botanicalmachinery:mana_emerald_block"
        }
      },
      "result": {
        "item": "botanicalmachinery:mana_battery"
      }
    }
  ).id('botanicalmachinery:mana_battery')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "FGHGF",
        "BDIDB",
        "ABJBA"
      ],
      "key": {
        "A": {
          "item": "botania:gaia_ingot"
        },
        "B": {
          "item": "chroma:skin_of_gaia"
        },
        "C": {
          "item": "botania:aura_ring_greater"
        },
        "D": {
          "item": "botania:elementium_ingot"
        },
        "E": {
          "item": "botania:dandelifeon"
        },
        "F": {
          "item": "botania:magenta_petal_block"
        },
        "G": {
          "item": "botania:hydroangeas"
        },
        "H": {
          "item": "industrialforegoing:machine_frame_advanced"
        },
        "I": {
          "item": "industrialforegoing:common_black_hole_tank"
        },
        "J": {
          "item": "botania:apothecary_default"
        }
      },
      "result": {
        "item": "botanicalmachinery:mechanical_apothecary"
      }
    }
  ).id('botanicalmachinery:mechanical_apothecary')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "FEGEF",
        "BDEDB",
        "ABHBA"
      ],
      "key": {
        "A": {
          "item": "botania:gaia_ingot"
        },
        "B": {
          "item": "chroma:skin_of_gaia"
        },
        "C": {
          "item": "botania:aura_ring_greater"
        },
        "D": {
          "item": "botania:elementium_ingot"
        },
        "E": {
          "item": "botania:flask"
        },
        "F": {
          "item": "botania:brewery"
        },
        "G": {
          "item": "industrialforegoing:machine_frame_advanced"
        },
        "H": {
          "item": "botania:blaze_block"
        }
      },
      "result": {
        "item": "botanicalmachinery:mechanical_brewery"
      }
    }
  ).id('botanicalmachinery:mechanical_brewery')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "FGHGF",
        "BDEDB",
        "ABIBA"
      ],
      "key": {
        "A": {
          "item": "botania:gaia_ingot"
        },
        "B": {
          "item": "chroma:skin_of_gaia"
        },
        "C": {
          "item": "botania:aura_ring_greater"
        },
        "D": {
          "item": "botania:elementium_ingot"
        },
        "E": {
          "item": "botania:livingwood_log"
        },
        "F": {
          "item": "botania:avatar"
        },
        "G": {
          "item": "botania:livingrock"
        },
        "H": {
          "item": "industrialforegoing:machine_frame_advanced"
        },
        "I": {
          "item": "botania:floating_pure_daisy"
        }
      },
      "result": {
        "item": "botanicalmachinery:mechanical_daisy"
      }
    }
  ).id('botanicalmachinery:mechanical_daisy')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "FEGEH",
        "BDEDB",
        "ABIBA"
      ],
      "key": {
        "A": {
          "item": "botania:gaia_ingot"
        },
        "B": {
          "item": "chroma:skin_of_gaia"
        },
        "C": {
          "item": "botania:aura_ring_greater"
        },
        "D": {
          "item": "botania:elementium_ingot"
        },
        "E": {
          "item": "botania:fabulous_pool"
        },
        "F": {
          "item": "botania:alchemy_catalyst"
        },
        "G": {
          "item": "industrialforegoing:machine_frame_advanced"
        },
        "H": {
          "item": "botania:conjuration_catalyst"
        },
        "I": {
          "item": "botania:corporea_spark_master"
        }
      },
      "result": {
        "item": "botanicalmachinery:mechanical_mana_pool"
      }
    }
  ).id('botanicalmachinery:mechanical_mana_pool')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "FGHIF",
        "BDJDB",
        "ABKBA"
      ],
      "key": {
        "A": {
          "item": "botania:gaia_ingot"
        },
        "B": {
          "item": "chroma:skin_of_gaia"
        },
        "C": {
          "item": "botania:aura_ring_greater"
        },
        "D": {
          "item": "botania:elementium_ingot"
        },
        "E": {
          "item": "botania:rune_water"
        },
        "F": {
          "item": "botania:rune_envy"
        },
        "G": {
          "item": "botania:rune_fire"
        },
        "H": {
          "item": "industrialforegoing:machine_frame_advanced"
        },
        "I": {
          "item": "botania:rune_air"
        },
        "J": {
          "item": "botania:rune_earth"
        },
        "K": {
          "item": "botania:runic_altar"
        }
      },
      "result": {
        "item": "botanicalmachinery:mechanical_runic_altar"
      }
    }
  ).id('botanicalmachinery:mechanical_runic_altar')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AAAAA",
        "AABAA",
        "CBDBE",
        "FGBHF",
        "FFIFF"
      ],
      "key": {
        "A": {
          "item": "botania:elementium_ingot"
        },
        "B": {
          "item": "mythicbotany:mana_collector"
        },
        "C": {
          "item": "botania:rune_spring"
        },
        "D": {
          "item": "botania:terra_plate"
        },
        "E": {
          "item": "botania:rune_autumn"
        },
        "F": {
          "item": "botania:glimmering_dreamwood"
        },
        "G": {
          "item": "botania:rune_summer"
        },
        "H": {
          "item": "botania:rune_winter"
        },
        "I": {
          "item": "mythicbotany:asgard_rune"
        }
      },
      "result": {
        "item": "mythicbotany:mana_infuser"
      }
    }
  ).id('mythicbotany:mana_infuser')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "FGHGF",
        "BDEDB",
        "ABIBA"
      ],
      "key": {
        "A": {
          "item": "lazierae2:parallel_processor"
        },
        "B": {
          "item": "chroma:nebula_frame"
        },
        "C": {
          "item": "mythicbotany:helheim_rune"
        },
        "D": {
          "item": "mekaevolution:absolute_control_circuit"
        },
        "E": {
          "item": "mythicbotany:alfsteel_ingot"
        },
        "F": {
          "item": "powah:energy_cell_spirited"
        },
        "G": {
          "item": "lazierae2:logic_unit"
        },
        "H": {
          "item": "industrialforegoing:machine_frame_advanced"
        },
        "I": {
          "item": "mythicbotany:muspelheim_rune"
        }
      },
      "result": {
        "item": "chroma:nebula_extractor_tier_2"
      }
    }
  ).id(`${id_prefix}nebula_extractor_tier_2`)

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "FEGEF",
        "BDEDB",
        "ABFBA"
      ],
      "key": {
        "A": {
          "item": "beyond_earth:compressed_desh"
        },
        "B": {
          "item": "powah:crystal_spirited"
        },
        "C": {
          "item": "lazierae2:parallel_processor"
        },
        "D": {
          "item": "ae2:matter_ball"
        },
        "E": {
          "item": "mekanism:hdpe_sheet"
        },
        "F": {
          "item": "megacells:cell_component_16m"
        },
        "G": {
          "item": "chroma:absolute_alloy"
        }
      },
      "result": {
        "item": "megacells:cell_component_64m"
      }
    }
  ).id('megacells:cell_component_64m')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "FGHGF",
        "BDEDB",
        "ABFBA"
      ],
      "key": {
        "A": {
          "item": "beyond_earth:compressed_ostrum"
        },
        "B": {
          "item": "powah:crystal_nitro"
        },
        "C": {
          "item": "lazierae2:parallel_processor"
        },
        "D": {
          "item": "ae2:matter_ball"
        },
        "E": {
          "item": "mekanism:pellet_polonium"
        },
        "F": {
          "item": "megacells:cell_component_64m"
        },
        "G": {
          "item": "mekanism:pellet_plutonium"
        },
        "H": {
          "item": "chroma:supreme_alloy"
        }
      },
      "result": {
        "item": "megacells:cell_component_256m"
      }
    }
  ).id('megacells:cell_component_256m')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "CEFEC",
        "BDEDB",
        "ABCBA"
      ],
      "key": {
        "A": {
          "item": "beyond_earth:compressed_desh"
        },
        "B": {
          "item": "powah:crystal_spirited"
        },
        "C": {
          "item": "lazierae2:parallel_processor"
        },
        "D": {
          "item": "mekaevolution:absolute_control_circuit"
        },
        "E": {
          "item": "lazierae2:logic_unit"
        },
        "F": {
          "item": "ae2:crafting_unit"
        }
      },
      "result": {
        "item": "megacells:mega_crafting_unit"
      }
    }
  ).id('megacells:crafting/mega_crafting_unit')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "FGHGF",
        "BDEDB",
        "ABCBA"
      ],
      "key": {
        "A": {
          "item": "lazierae2:parallel_processor"
        },
        "B": {
          "item": "chroma:nebula_frame"
        },
        "C": {
          "item": "fluxnetworks:flux_block"
        },
        "D": {
          "item": "mekaevolution:supreme_control_circuit"
        },
        "E": {
          "item": "chroma:thermospiritium"
        },
        "F": {
          "item": "powah:energy_cell_nitro"
        },
        "G": {
          "item": "lazierae2:logic_unit"
        },
        "H": {
          "item": "industrialforegoing:machine_frame_supreme"
        }
      },
      "result": {
        "item": "chroma:nebula_extractor_tier_3"
      }
    }
  ).id(`${id_prefix}nebula_extractor_tier_3`)

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACDCA",
        "BDEDB",
        "ACDCA",
        "AABAA"
      ],
      "key": {
        "A": {
          "item": "draconicevolution:draconium_ingot"
        },
        "B": {
          "item": "draconicevolution:draconium_core"
        },
        "C": {
          "type": "forge:nbt",
          "item": "hostilenetworks:prediction",
          "count": 1,
          "nbt": "{data_model:{id:\"hostilenetworks:ender_dragon\"}}"
        },
        "D": {
          "item": "powah:crystal_nitro"
        },
        "E": {
          "item": "minecraft:nether_star"
        }
      },
      "result": {
        "item": "draconicevolution:wyvern_core"
      }
    }
  ).id('draconicevolution:components/wyvern_core')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AAAAA",
        "BCDCB",
        "EFGFE",
        "BBHBB",
        "BIBIB"
      ],
      "key": {
        "A": {
          "item": "solarpanels:light_absorbing_solar_element"
        },
        "B": {
          "item": "graveyard:dark_iron_ingot"
        },
        "C": {
          "item": "draconicevolution:wyvern_energy_core"
        },
        "D": {
          "item": "chroma:thermospiritium"
        },
        "E": {
          "item": "mekanism:ingot_refined_obsidian"
        },
        "F": {
          "item": "powah:capacitor_nitro"
        },
        "G": {
          "item": "solarpanels:singular_solar_panel"
        },
        "H": {
          "item": "solarpanels:light_absorbing_energy_tablet"
        },
        "I": {
          "item": "mekaevolution:cosmic_control_circuit"
        }
      },
      "result": {
        "item": "solarpanels:light_absorbing_solar_panel"
      }
    }
  ).id('solarpanels:light_absorbing_solar_panel')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACDCA",
        "EFGFE",
        "ACDCA",
        "AAHAA"
      ],
      "key": {
        "A": {
          "item": "extendedcrafting:black_iron_ingot"
        },
        "B": {
          "item": "packagedauto:me_package_component"
        },
        "C": {
          "item": "mekanism:ultimate_control_circuit"
        },
        "D": {
          "item": "lazierae2:parallel_processor"
        },
        "E": {
          "item": "extendedcrafting:enhanced_ender_catalyst"
        },
        "F": {
          "item": "ae2:energy_cell"
        },
        "G": {
          "item": "extendedcrafting:basic_auto_table"
        },
        "H": {
          "item": "lazierae2:logic_unit"
        }
      },
      "result": {
        "item": "packagedexcrafting:basic_crafter"
      }
    }
  ).id('packagedexcrafting:basic_crafter_ae')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACDCA",
        "EFGFE",
        "ACDCA",
        "AAHAA"
      ],
      "key": {
        "A": {
          "item": "extendedcrafting:black_iron_ingot"
        },
        "B": {
          "item": "packagedauto:me_package_component"
        },
        "C": {
          "item": "mekanism:ultimate_control_circuit"
        },
        "D": {
          "item": "lazierae2:parallel_processor"
        },
        "E": {
          "item": "extendedcrafting:enhanced_ender_catalyst"
        },
        "F": {
          "item": "ae2:energy_cell"
        },
        "G": {
          "item": "extendedcrafting:advanced_auto_table"
        },
        "H": {
          "item": "lazierae2:logic_unit"
        }
      },
      "result": {
        "item": "packagedexcrafting:advanced_crafter"
      }
    }
  ).id('packagedexcrafting:advanced_crafter_ae')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACDCA",
        "EFGFE",
        "ACDCA",
        "AAHAA"
      ],
      "key": {
        "A": {
          "item": "extendedcrafting:black_iron_ingot"
        },
        "B": {
          "item": "packagedauto:me_package_component"
        },
        "C": {
          "item": "mekanism:ultimate_control_circuit"
        },
        "D": {
          "item": "lazierae2:parallel_processor"
        },
        "E": {
          "item": "extendedcrafting:enhanced_ender_catalyst"
        },
        "F": {
          "item": "ae2:energy_cell"
        },
        "G": {
          "item": "extendedcrafting:elite_auto_table"
        },
        "H": {
          "item": "lazierae2:logic_unit"
        }
      },
      "result": {
        "item": "packagedexcrafting:elite_crafter"
      }
    }
  ).id('packagedexcrafting:elite_crafter_ae')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACDCA",
        "EFGFE",
        "ACDCA",
        "AAHAA"
      ],
      "key": {
        "A": {
          "item": "extendedcrafting:black_iron_ingot"
        },
        "B": {
          "item": "packagedauto:me_package_component"
        },
        "C": {
          "item": "mekanism:ultimate_control_circuit"
        },
        "D": {
          "item": "lazierae2:parallel_processor"
        },
        "E": {
          "item": "extendedcrafting:enhanced_ender_catalyst"
        },
        "F": {
          "item": "ae2:energy_cell"
        },
        "G": {
          "item": "extendedcrafting:ultimate_auto_table"
        },
        "H": {
          "item": "lazierae2:logic_unit"
        }
      },
      "result": {
        "item": "packagedexcrafting:ultimate_crafter"
      }
    }
  ).id('packagedexcrafting:ultimate_crafter_ae')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACDCA",
        "EFGFE",
        "ACDCA",
        "AAHAA"
      ],
      "key": {
        "A": {
          "item": "extendedcrafting:enhanced_ender_ingot"
        },
        "B": {
          "item": "packagedauto:me_package_component"
        },
        "C": {
          "item": "mekanism:ultimate_control_circuit"
        },
        "D": {
          "item": "lazierae2:parallel_processor"
        },
        "E": {
          "item": "extendedcrafting:redstone_catalyst"
        },
        "F": {
          "item": "ae2:energy_cell"
        },
        "G": {
          "item": "extendedcrafting:ender_crafter"
        },
        "H": {
          "item": "lazierae2:logic_unit"
        }
      },
      "result": {
        "item": "packagedexcrafting:ender_crafter"
      }
    }
  ).id('packagedexcrafting:ender_crafter_ae')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACDCA",
        "EFGFE",
        "ACDCA",
        "AAHAA"
      ],
      "key": {
        "A": {
          "item": "extendedcrafting:black_iron_ingot"
        },
        "B": {
          "item": "packagedauto:me_package_component"
        },
        "C": {
          "item": "mekanism:ultimate_control_circuit"
        },
        "D": {
          "item": "lazierae2:parallel_processor"
        },
        "E": {
          "item": "extendedcrafting:enhanced_ender_catalyst"
        },
        "F": {
          "item": "ae2:energy_cell"
        },
        "G": {
          "item": "extendedcrafting:crafting_core"
        },
        "H": {
          "item": "lazierae2:logic_unit"
        }
      },
      "result": {
        "item": "packagedexcrafting:combination_crafter"
      }
    }
  ).id('packagedexcrafting:combination_crafter_ae')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACDCA",
        "BDEDB",
        "ACDCA",
        "AABAA"
      ],
      "key": {
        "A": {
          "item": "pneumaticcraft:ingot_iron_compressed"
        },
        "B": {
          "item": "mekanism:ingot_refined_glowstone"
        },
        "C": {
          "item": "extendedcrafting:redstone_catalyst"
        },
        "D": {
          "item": "minecraft:crafting_table"
        },
        "E": {
          "item": "packagedauto:package_component"
        }
      },
      "result": {
        "item": "packagedauto:encoder"
      }
    }
  ).id('packagedauto:encoder')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACDCA",
        "BDEDB",
        "ACDCA",
        "AABAA"
      ],
      "key": {
        "A": {
          "item": "pneumaticcraft:ingot_iron_compressed"
        },
        "B": {
          "item": "extendedcrafting:redstone_ingot"
        },
        "C": {
          "item": "minecraft:piston"
        },
        "D": {
          "item": "minecraft:crafting_table"
        },
        "E": {
          "item": "packagedauto:me_package_component"
        }
      },
      "result": {
        "item": "packagedauto:packager"
      }
    }
  ).id('packagedauto:packager_ae')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACDCA",
        "BDEDB",
        "ACDCA",
        "AABAA"
      ],
      "key": {
        "A": {
          "item": "pneumaticcraft:ingot_iron_compressed"
        },
        "B": {
          "item": "minecraft:glowstone"
        },
        "C": {
          "item": "minecraft:piston"
        },
        "D": {
          "item": "minecraft:crafting_table"
        },
        "E": {
          "item": "packagedauto:me_package_component"
        }
      },
      "result": {
        "item": "packagedauto:packager_extension"
      }
    }
  ).id('packagedauto:packager_extension_ae')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACDCA",
        "BDEDB",
        "ACDCA",
        "AABAA"
      ],
      "key": {
        "A": {
          "item": "pneumaticcraft:ingot_iron_compressed"
        },
        "B": {
          "item": "extendedcrafting:redstone_ingot"
        },
        "C": {
          "item": "minecraft:hopper"
        },
        "D": {
          "tag": "forge:chests"
        },
        "E": {
          "item": "packagedauto:me_package_component"
        }
      },
      "result": {
        "item": "packagedauto:unpackager"
      }
    }
  ).id('packagedauto:unpackager_ae')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACDCA",
        "BDEDB",
        "ACDCA",
        "AABAA"
      ],
      "key": {
        "A": {
          "item": "pneumaticcraft:ingot_iron_compressed"
        },
        "B": {
          "item": "extendedcrafting:redstone_ingot"
        },
        "C": {
          "item": "minecraft:hopper"
        },
        "D": {
          "item": "minecraft:crafting_table"
        },
        "E": {
          "item": "packagedauto:me_package_component"
        }
      },
      "result": {
        "item": "packagedauto:crafter"
      }
    }
  ).id('packagedauto:crafter_ae')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACDCA",
        "BDEDB",
        "ACDCA",
        "AABAA"
      ],
      "key": {
        "A": {
          "item": "pneumaticcraft:ingot_iron_compressed"
        },
        "B": {
          "item": "minecraft:copper_ingot"
        },
        "C": {
          "item": "minecraft:piston"
        },
        "D": {
          "item": "minecraft:bucket"
        },
        "E": {
          "item": "packagedauto:me_package_component"
        }
      },
      "result": {
        "item": "packagedauto:fluid_package_filler"
      }
    }
  ).id('packagedauto:fluid_package_filler')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "CEFEC",
        "BDEDB",
        "ABCBA"
      ],
      "key": {
        "A": {
          "item": "extendedcrafting:crystaltine_catalyst"
        },
        "B": {
          "item": "chroma:nebula_frame"
        },
        "C": {
          "item": "draconicevolution:wyvern_core"
        },
        "D": {
          "item": "mekaevolution:cosmic_control_circuit"
        },
        "E": {
          "item": "chroma:cosmic_alloy"
        },
        "F": {
          "item": "industrialforegoing:machine_frame_supreme"
        }
      },
      "result": {
        "item": "chroma:nebula_extractor_tier_4"
      }
    }
  ).id(`${id_prefix}nebula_extractor_tier_4`)

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AAAAA",
        "BCCCB",
        "DEFED",
        "BBGBB",
        "BHBHB"
      ],
      "key": {
        "A": {
          "item": "solarpanels:photonic_solar_element"
        },
        "B": {
          "item": "graveyard:dark_iron_ingot"
        },
        "C": {
          "item": "chroma:infinite_alloy"
        },
        "D": {
          "item": "mekanism:ingot_refined_obsidian"
        },
        "E": {
          "item": "extendedcrafting:crystaltine_catalyst"
        },
        "F": {
          "item": "solarpanels:light_absorbing_solar_panel"
        },
        "G": {
          "item": "solarpanels:photonic_energy_tablet"
        },
        "H": {
          "item": "mekaevolution:infinite_control_circuit"
        }
      },
      "result": {
        "item": "solarpanels:photonic_solar_panel"
      }
    }
  ).id('solarpanels:photonic_solar_panel')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACDCA",
        "BDEDB",
        "ACDCA",
        "AABAA"
      ],
      "key": {
        "A": {
          "item": "draconicevolution:draconium_ingot"
        },
        "B": {
          "item": "mekaevolution:infinite_control_circuit"
        },
        "C": {
          "item": "solarpanels:photonic_energy_tablet"
        },
        "D": {
          "item": "draconicevolution:wyvern_energy_core"
        },
        "E": {
          "item": "draconicevolution:wyvern_core"
        }
      },
      "result": {
        "item": "draconicevolution:energy_core"
      }
    }
  ).id('draconicevolution:energy_core')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABBBA",
        "BCDCB",
        "BDEDB",
        "BCFCB",
        "ABBBA"
      ],
      "key": {
        "A": {
          "item": "powah:crystal_nitro"
        },
        "B": {
          "item": "beyond_earth:calorite_ingot"
        },
        "C": {
          "item": "mekaevolution:supreme_control_circuit"
        },
        "D": {
          "item": "mekanism:pellet_plutonium"
        },
        "E": {
          "item": "industrialforegoing:machine_frame_supreme"
        },
        "F": {
          "item": "industrialforegoing:advanced_black_hole_tank"
        }
      },
      "result": {
        "item": "industrialforegoing:supreme_black_hole_tank"
      }
    }
  ).id('industrialforegoing:supreme_black_hole_tank')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABBBA",
        "BCDCB",
        "BDEDB",
        "BCFCB",
        "ABBBA"
      ],
      "key": {
        "A": {
          "item": "powah:crystal_nitro"
        },
        "B": {
          "item": "beyond_earth:calorite_ingot"
        },
        "C": {
          "item": "mekaevolution:supreme_control_circuit"
        },
        "D": {
          "item": "mekanism:pellet_plutonium"
        },
        "E": {
          "item": "industrialforegoing:machine_frame_supreme"
        },
        "F": {
          "item": "industrialforegoing:advanced_black_hole_unit"
        }
      },
      "result": {
        "item": "industrialforegoing:supreme_black_hole_unit"
      }
    }
  ).id('industrialforegoing:supreme_black_hole_unit')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACCCA",
        "BCDCB",
        "ACCCA",
        "AABAA"
      ],
      "key": {
        "A": {
          "item": "mysticalagradditions:insanium_essence"
        },
        "B": {
          "item": "draconicevolution:dragon_heart"
        },
        "C": {
          "item": "draconicevolution:awakened_draconium_ingot"
        },
        "D": {
          "item": "mysticalagradditions:insanium_farmland"
        }
      },
      "result": {
        "item": "mysticalagradditions:awakened_draconium_crux"
      }
    }
  ).id('mysticalagradditions:awakened_draconium_crux')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACCCA",
        "BCDCB",
        "ACCCA",
        "AABAA"
      ],
      "key": {
        "A": {
          "item": "mysticalagradditions:insanium_essence"
        },
        "B": {
          "item": "powah:capacitor_nitro"
        },
        "C": {
          "item": "powah:crystal_nitro"
        },
        "D": {
          "item": "mysticalagradditions:insanium_farmland"
        }
      },
      "result": {
        "item": "mysticalagradditions:nitro_crystal_crux"
      }
    }
  ).id('mysticalagradditions:nitro_crystal_crux')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACCCA",
        "BCDCB",
        "ACCCA",
        "AABAA"
      ],
      "key": {
        "A": {
          "item": "mysticalagradditions:insanium_essence"
        },
        "B": {
          "item": "mythicbotany:alfsteel_pylon"
        },
        "C": {
          "item": "mythicbotany:alfsteel_ingot"
        },
        "D": {
          "item": "mysticalagradditions:insanium_farmland"
        }
      },
      "result": {
        "item": "chroma:alfsteel_crux"
      }
    }
  ).id(`${id_prefix}alfsteel_crux`)

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACCCA",
        "BCDCB",
        "ACCCA",
        "AABAA"
      ],
      "key": {
        "A": {
          "item": "mysticalagradditions:insanium_essence"
        },
        "B": {
          "item": "beyond_earth:ice_shard"
        },
        "C": {
          "item": "beyond_earth:calorite_ingot"
        },
        "D": {
          "item": "mysticalagradditions:insanium_farmland"
        }
      },
      "result": {
        "item": "chroma:calorite_crux"
      }
    }
  ).id(`${id_prefix}calorite_crux`)

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACCCA",
        "BCDCB",
        "ACCCA",
        "AABAA"
      ],
      "key": {
        "A": {
          "item": "mysticalagradditions:insanium_essence"
        },
        "B": {
          "item": "draconicevolution:draconium_core"
        },
        "C": {
          "item": "draconicevolution:draconium_ingot"
        },
        "D": {
          "item": "mysticalagradditions:insanium_farmland"
        }
      },
      "result": {
        "item": "chroma:draconium_crux"
      }
    }
  ).id(`${id_prefix}draconium_crux`)

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDDDB",
        "CDEDC",
        "BFDFB",
        "ABGBA"
      ],
      "key": {
        "A": {
          "item": "extendedcrafting:crystaltine_ingot"
        },
        "B": {
          "item": "mekanismgenerators:electromagnetic_coil"
        },
        "C": {
          "item": "create:electron_tube"
        },
        "D": {
          "item": "draconicevolution:awakened_draconium_ingot"
        },
        "E": {
          "item": "chroma:infinite_alloy"
        },
        "F": {
          "item": "extendedcrafting:redstone_ingot"
        },
        "G": {
          "item": "mekanism:module_magnetic_attraction_unit"
        }
      },
      "result": {
        "item": "chroma:accelerator_coil"
      }
    }
  ).id(`${id_prefix}accelerator_coil`)

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AAAAA",
        "BCCCB",
        "DEFED",
        "BBGBB",
        "BHIHB"
      ],
      "key": {
        "A": {
          "item": "solarpanels:creative_solar_element"
        },
        "B": {
          "item": "graveyard:dark_iron_ingot"
        },
        "C": {
          "item": "chroma:infinite_alloy"
        },
        "D": {
          "item": "mekanism:pellet_antimatter"
        },
        "E": {
          "item": "extendedcrafting:crystaltine_catalyst"
        },
        "F": {
          "item": "solarpanels:photonic_solar_panel"
        },
        "G": {
          "item": "solarpanels:creative_energy_tablet"
        },
        "H": {
          "item": "mekaevolution:infinite_control_circuit"
        },
        "I": {
          "item": "draconicevolution:chaotic_core"
        }
      },
      "result": {
        "item": "solarpanels:creative_solar_panel"
      }
    }
  ).id('solarpanels:creative_solar_panel')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCDE",
        "FGHIJ",
        "KLMNO",
        "P    ",
        "     "
      ],
      "key": {
        "A": {
          "item": "botania:white_petal"
        },
        "B": {
          "item": "botania:orange_petal"
        },
        "C": {
          "item": "botania:magenta_petal"
        },
        "D": {
          "item": "botania:light_blue_petal"
        },
        "E": {
          "item": "botania:yellow_petal"
        },
        "F": {
          "item": "botania:lime_petal"
        },
        "G": {
          "item": "botania:pink_petal"
        },
        "H": {
          "item": "botania:gray_petal"
        },
        "I": {
          "item": "botania:light_gray_petal"
        },
        "J": {
          "item": "botania:cyan_petal"
        },
        "K": {
          "item": "botania:purple_petal"
        },
        "L": {
          "item": "botania:blue_petal"
        },
        "M": {
          "item": "botania:brown_petal"
        },
        "N": {
          "item": "botania:green_petal"
        },
        "O": {
          "item": "botania:red_petal"
        },
        "P": {
          "item": "botania:black_petal"
        }
      },
      "result": {
        "item": "mysticalagriculture:mystical_flower_agglomeratio"
      }
    }
  ).id('mysticalagriculture:mystical_flower_agglomeratio')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACDCA",
        "BDEDB",
        "ACDCA",
        "AABAA"
      ],
      "key": {
        "A": {
          "item": "mysticalagriculture:imperium_essence"
        },
        "B": {
          "item": "mekanism:block_refined_glowstone"
        },
        "C": {
          "item": "mekanism:ingot_refined_glowstone"
        },
        "D": {
          "item": "mekanism:pellet_polonium"
        },
        "E": {
          "item": "chroma:imperium_seed_base"
        }
      },
      "result": {
        "item": "mysticalagriculture:refined_glowstone_seeds"
      }
    }
  ).id('mysticalagriculture:seed/infusion/refined_glowstone')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACDCA",
        "BDEDB",
        "ACDCA",
        "AABAA"
      ],
      "key": {
        "A": {
          "item": "mysticalagriculture:imperium_essence"
        },
        "B": {
          "item": "mekanism:block_refined_obsidian"
        },
        "C": {
          "item": "mekanism:ingot_refined_obsidian"
        },
        "D": {
          "item": "mekanism:pellet_polonium"
        },
        "E": {
          "item": "chroma:imperium_seed_base"
        }
      },
      "result": {
        "item": "mysticalagriculture:refined_obsidian_seeds"
      }
    }
  ).id('mysticalagriculture:seed/infusion/refined_obsidian')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AAAAA",
        "ABCBA",
        "ADEDA",
        "ABFBA",
        "AAAAA"
      ],
      "key": {
        "A": {
          "item": "tconstruct:hepatizon_ingot"
        },
        "B": {
          "item": "mysticalagriculture:supremium_essence"
        },
        "C": {
          "item": "tconstruct:cobalt_block"
        },
        "D": {
          "item": "minecraft:copper_block"
        },
        "E": {
          "item": "chroma:supremium_seed_base"
        },
        "F": {
          "item": "minecraft:quartz_block"
        }
      },
      "result": {
        "item": "mysticalagriculture:hepatizon_seeds"
      }
    }
  ).id('mysticalagriculture:seed/infusion/hepatizon')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "FEGEF",
        "BDEDB",
        "ABCBA"
      ],
      "key": {
        "A": {
          "item": "powah:reactor_niotic"
        },
        "B": {
          "item": "chroma:dielectric_paste_block"
        },
        "C": {
          "item": "mythicbotany:alfsteel_ingot"
        },
        "D": {
          "item": "mekaevolution:absolute_control_circuit"
        },
        "E": {
          "item": "chroma:absolute_alloy"
        },
        "F": {
          "item": "powah:capacitor_spirited"
        },
        "G": {
          "item": "industrialforegoing:machine_frame_advanced"
        }
      },
      "result": {
        "item": "powah:reactor_spirited",
        "count": 4
      }
    }
  ).id('powah:crafting/reactor_spirited')
});
