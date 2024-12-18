onEvent("recipes", (event) => {
    const id_prefix = 'chroma:pack/extendedcrafting/table/';

    event.custom(
      {
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "ABCDCBA",
          "BEFGFEB",
          "CFHIHFC",
          "JKLMNKJ",
          "CFHOHFC",
          "BEFPFEB",
          "ABCQCBA"
        ],
        "key": {
          "A": {
            "item": "mekanism:ultimate_control_circuit"
          },
          "B": {
            "item": "immersiveengineering:ingot_steel"
          },
          "C": {
            "item": "mekanism:hdpe_sheet"
          },
          "D": {
            "item": "mekanism:personal_chest"
          },
          "E": {
            "item": "mekanism:teleportation_core"
          },
          "F": {
            "item": "mekanism:alloy_atomic"
          },
          "G": {
            "item": "rftoolsbase:infused_diamond"
          },
          "H": {
            "item": "mekanism:logistical_sorter"
          },
          "I": {
            "item": "mekanism:robit"
          },
          "J": {
            "item": "solarpanels:improved_energy_tablet"
          },
          "K": {
            "item": "rftoolsbase:infused_enderpearl"
          },
          "L": {
            "item": "scannable:common_ores_module"
          },
          "M": {
            "item": "chroma:miner_core"
          },
          "N": {
            "item": "scannable:rare_ores_module"
          },
          "O": {
            "item": "scannable:block_module"
          },
          "P": {
            "item": "mna:mote_ender"
          },
          "Q": {
            "item": "mekanism:steel_casing"
          }
        },
        "result": {
          "item": "mekanism:digital_miner"
        }
      }
    ).id('mekanism:digital_miner')

    event.custom(
      {
        "type": "extendedcrafting:shaped_table",
        "pattern": [
          "AAAAAAA",
          "ABCDCBA",
          "AECFCEA",
          "AGCCCGA",
          "AHIIIHA",
          "JKILIKJ",
          "JJIMIJJ"
        ],
        "key": {
          "A": {
            "item": "doom:argent_energy"
          },
          "B": {
            "item": "doom:doom_helmet",
          },
          "C": {
            "item": "biggerreactors:blutonium_block"
          },
          "D": {
            "item": "immersiveengineering:revolver",
          },
          "E": {
            "item": "doom:doom_chestplate",
          },
          "F": {
            "item": "doom:rocket"
          },
          "G": {
            "item": "doom:doom_leggings",
          },
          "H": {
            "item": "doom:doom_boots",
          },
          "I": {
            "item": "doom:argent_plate"
          },
          "J": {
            "item": "mekanism:induction_casing"
          },
          "K": {
            "item": "mekanism:teleportation_core"
          },
          "L": {
            "item": "chroma:gun_table_heart"
          },
          "M": {
            "item": "mekaevolution:absolute_control_circuit"
          }
        },
        "result": {
          "item": "doom:gun_table"
        }
      }
    ).id('doom:gun_table')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCDCBA",
        "BCEFECB",
        "CEFGFEC",
        "DFGHGFD",
        "CEFGFEC",
        "BCEFECB",
        "ABCDCBA"
      ],
      "key": {
        "A": {
          "item": "mekanism:hdpe_sheet"
        },
        "B": {
          "item": "powah:capacitor_spirited"
        },
        "C": {
          "item": "beyond_earth:compressed_ostrum"
        },
        "D": {
          "item": "solarpanels:singular_energy_tablet"
        },
        "E": {
          "item": "mekaevolution:supreme_control_circuit"
        },
        "F": {
          "item": "chroma:supreme_alloy"
        },
        "G": {
          "item": "chroma:isolated_compressed_desh"
        },
        "H": {
          "item": "mekaevolution:absolute_energy_cube"
        }
      },
      "result": {
        "item": "mekaevolution:supreme_energy_cube"
      }
    }
  ).id('mekaevolution:supreme_energy_cube')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABCBAA",
        "ADDEDDA",
        "BDFGFDB",
        "CHIJKHC",
        "BDFLFDB",
        "MDDEDDM",
        "MMMNMMM"
      ],
      "key": {
        "A": {
          "item": "chroma:void_miner_frame_tier1"
        },
        "B": {
          "item": "mekanism:hdpe_sheet"
        },
        "C": {
          "item": "mekaevolution:absolute_control_circuit"
        },
        "D": {
          "item": "beyond_earth:desh_ingot"
        },
        "E": {
          "item": "powah:capacitor_spirited"
        },
        "F": {
          "item": "mythicbotany:dream_cherry"
        },
        "G": {
          "item": "mythicbotany:joetunheim_rune"
        },
        "H": {
          "item": "mythicbotany:alfsteel_ingot"
        },
        "I": {
          "item": "mythicbotany:asgard_rune"
        },
        "J": {
          "item": "industrialforegoing:machine_frame_advanced"
        },
        "K": {
          "item": "mythicbotany:midgard_rune"
        },
        "L": {
          "item": "mythicbotany:helheim_rune"
        },
        "M": {
          "item": "chroma:structure_frame"
        },
        "N": {
          "item": "industrialforegoing:laser_lens0"
        }
      },
      "result": {
        "item": "chroma:void_miner_tier_1"
      }
    }
  ).id(`${id_prefix}void_miner_tier_1`)

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABCBAA",
        "ADEFEDA",
        "BEGHGEB",
        "CFHIHFC",
        "BEGHGEB",
        "JDEFEDJ",
        "JJJKJJJ"
      ],
      "key": {
        "A": {
          "item": "chroma:void_miner_frame_tier2"
        },
        "B": {
          "item": "mekanism:hdpe_sheet"
        },
        "C": {
          "item": "mekaevolution:supreme_control_circuit"
        },
        "D": {
          "item": "fluxnetworks:flux_core"
        },
        "E": {
          "item": "powah:capacitor_nitro"
        },
        "F": {
          "item": "chroma:thermospiritium"
        },
        "G": {
          "item": "chroma:supreme_alloy"
        },
        "H": {
          "item": "mekanism:pellet_polonium"
        },
        "I": {
          "item": "chroma:void_miner_tier_1"
        },
        "J": {
          "item": "chroma:structure_frame"
        },
        "K": {
          "item": "industrialforegoing:laser_lens0"
        }
      },
      "result": {
        "item": "chroma:void_miner_tier_2"
      }
    }
  ).id(`${id_prefix}void_miner_tier_2`)

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCDCBA",
        "BEFGFEB",
        "CFHIHFC",
        "DGIJIGD",
        "CFHIHFC",
        "BEFGFEB",
        "ABCDCBA"
      ],
      "key": {
        "A": {
          "item": "powah:reactor_spirited"
        },
        "B": {
          "item": "powah:capacitor_nitro"
        },
        "C": {
          "item": "chroma:dielectric_paste_block"
        },
        "D": {
          "item": "mekaevolution:supreme_control_circuit"
        },
        "E": {
          "item": "fluxnetworks:flux_block"
        },
        "F": {
          "item": "mekanism:pellet_plutonium"
        },
        "G": {
          "item": "mekanism:pellet_polonium"
        },
        "H": {
          "item": "powah:crystal_nitro"
        },
        "I": {
          "item": "chroma:supreme_alloy"
        },
        "J": {
          "item": "industrialforegoing:machine_frame_supreme"
        }
      },
      "result": {
        "item": "powah:reactor_nitro",
        "count": 4
      }
    }
  ).id('powah:crafting/reactor_nitro')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCCCBA",
        "BDEFEDB",
        "GEHHHEG",
        "GFHIHFG",
        "GEHHHEG",
        "BDEFEDB",
        "ABCCCBA"
      ],
      "key": {
        "A": {
          "item": "draconicevolution:draconium_core"
        },
        "B": {
          "item": "powah:crystal_niotic"
        },
        "C": {
          "item": "powah:dielectric_rod_horizontal"
        },
        "D": {
          "item": "chroma:thermospiritium"
        },
        "E": {
          "item": "fluxnetworks:flux_block"
        },
        "F": {
          "item": "chroma:venustar_luminae"
        },
        "G": {
          "item": "powah:dielectric_rod"
        },
        "H": {
          "item": "botania:elf_glass"
        },
        "I": {
          "item": "industrialforegoing:machine_frame_supreme"
        }
      },
      "result": {
        "item": "draconicevolution:crafting_core"
      }
    }
  ).id('draconicevolution:crafting_core')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AAABAAA",
        "ACDEDCA",
        "ADFBFDA",
        "ABGHGBA",
        "ADFBFDA",
        "ACDEDCA",
        "AAABAAA"
      ],
      "key": {
        "A": {
          "item": "chemlib:tungsten_ingot"
        },
        "B": {
          "item": "chemlib:rhodium_ingot"
        },
        "C": {
          "item": "draconicevolution:wyvern_core"
        },
        "D": {
          "item": "chroma:cosmic_alloy"
        },
        "E": {
          "item": "mekanism:pellet_plutonium"
        },
        "F": {
          "item": "chroma:thermospiritium"
        },
        "G": {
          "item": "powah:capacitor_nitro"
        },
        "H": {
          "item": "mekanismgenerators:hohlraum"
        }
      },
      "result": {
        "item": "alchemistry:fusion_core"
      }
    }
  ).id('alchemistry:fusion_core')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCDCBA",
        "BCEFECB",
        "CEFGFEC",
        "DFGHGFD",
        "CEFGFEC",
        "BCEFECB",
        "ABCDCBA"
      ],
      "key": {
        "A": {
          "item": "draconicevolution:wyvern_energy_core"
        },
        "B": {
          "item": "powah:capacitor_nitro"
        },
        "C": {
          "item": "beyond_earth:compressed_calorite"
        },
        "D": {
          "item": "solarpanels:light_absorbing_energy_tablet"
        },
        "E": {
          "item": "mekaevolution:cosmic_control_circuit"
        },
        "F": {
          "item": "chroma:cosmic_alloy"
        },
        "G": {
          "item": "draconicevolution:wyvern_core"
        },
        "H": {
          "item": "mekaevolution:supreme_energy_cube"
        }
      },
      "result": {
        "item": "mekaevolution:cosmic_energy_cube"
      }
    }
  ).id('mekaevolution:cosmic_energy_cube')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABCBAA",
        "ADEDEDA",
        "BEFGFEB",
        "CDGHGDC",
        "BEFGFEB",
        "IDEDEDI",
        "IIIJIII"
      ],
      "key": {
        "A": {
          "item": "chroma:void_miner_frame_tier3"
        },
        "B": {
          "item": "mekanism:hdpe_sheet"
        },
        "C": {
          "item": "mekaevolution:cosmic_control_circuit"
        },
        "D": {
          "item": "beyond_earth:compressed_calorite"
        },
        "E": {
          "item": "chemlib:nobelium"
        },
        "F": {
          "item": "chroma:cosmic_alloy"
        },
        "G": {
          "item": "draconicevolution:wyvern_core"
        },
        "H": {
          "item": "chroma:void_miner_tier_2"
        },
        "I": {
          "item": "chroma:structure_frame"
        },
        "J": {
          "item": "industrialforegoing:laser_lens0"
        }
      },
      "result": {
        "item": "chroma:void_miner_tier_3"
      }
    }
  ).id(`${id_prefix}void_miner_tier_3`)

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABCBAA",
        "ADEFEDA",
        "BEGHGEB",
        "CFHIHFC",
        "BEGHGEB",
        "JDEFEDJ",
        "JJJKJJJ"
      ],
      "key": {
        "A": {
          "item": "chroma:void_miner_frame_tier4"
        },
        "B": {
          "item": "mekanism:hdpe_sheet"
        },
        "C": {
          "item": "mekanism:pellet_antimatter"
        },
        "D": {
          "item": "extendedcrafting:enhanced_ender_catalyst"
        },
        "E": {
          "item": "extendedcrafting:crystaltine_ingot"
        },
        "F": {
          "item": "mekaevolution:infinite_control_circuit"
        },
        "G": {
          "item": "chroma:infinite_alloy"
        },
        "H": {
          "item": "draconicevolution:awakened_core"
        },
        "I": {
          "item": "chroma:void_miner_tier_3"
        },
        "J": {
          "item": "chroma:structure_frame"
        },
        "K": {
          "item": "industrialforegoing:laser_lens0"
        }
      },
      "result": {
        "item": "chroma:void_miner_tier_4"
      }
    }
  ).id(`${id_prefix}void_miner_tier_4`)

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "  ABC  ",
        " DEFGH ",
        "IJKLMNO",
        "PQRSTUV",
        "WXYZabc",
        " defgh ",
        "  ijk  "
      ],
      "key": {
        "A": {
          "type": "forge:nbt",
          "item": "hostilenetworks:prediction",
          "count": 1,
          "nbt": "{data_model:{id:\"hostilenetworks:thermal/blitz\"}}"
        },
        "B": {
          "type": "forge:nbt",
          "item": "hostilenetworks:prediction",
          "count": 1,
          "nbt": "{data_model:{id:\"hostilenetworks:thermal/basalz\"}}"
        },
        "C": {
          "type": "forge:nbt",
          "item": "hostilenetworks:prediction",
          "count": 1,
          "nbt": "{data_model:{id:\"hostilenetworks:evoker\"}}"
        },
        "D": {
          "type": "forge:nbt",
          "item": "hostilenetworks:prediction",
          "count": 1,
          "nbt": "{data_model:{id:\"hostilenetworks:iron_golem\"}}"
        },
        "E": {
          "type": "forge:nbt",
          "item": "hostilenetworks:prediction",
          "count": 1,
          "nbt": "{data_model:{id:\"hostilenetworks:forgotten_guardian\"}}"
        },
        "F": {
          "type": "forge:nbt",
          "item": "hostilenetworks:prediction",
          "count": 1,
          "nbt": "{data_model:{id:\"hostilenetworks:creeper\"}}"
        },
        "G": {
          "type": "forge:nbt",
          "item": "hostilenetworks:prediction",
          "count": 1,
          "nbt": "{data_model:{id:\"hostilenetworks:guardian\"}}"
        },
        "H": {
          "type": "forge:nbt",
          "item": "hostilenetworks:prediction",
          "count": 1,
          "nbt": "{data_model:{id:\"hostilenetworks:squid\"}}"
        },
        "I": {
          "type": "forge:nbt",
          "item": "hostilenetworks:prediction",
          "count": 1,
          "nbt": "{data_model:{id:\"hostilenetworks:elder_guardian\"}}"
        },
        "J": {
          "type": "forge:nbt",
          "item": "hostilenetworks:prediction",
          "count": 1,
          "nbt": "{data_model:{id:\"hostilenetworks:zombified_piglin\"}}"
        },
        "K": {
          "type": "forge:nbt",
          "item": "hostilenetworks:prediction",
          "count": 1,
          "nbt": "{data_model:{id:\"hostilenetworks:shulker\"}}"
        },
        "L": {
          "type": "forge:nbt",
          "item": "hostilenetworks:prediction",
          "count": 1,
          "nbt": "{data_model:{id:\"hostilenetworks:enderman\"}}"
        },
        "M": {
          "type": "forge:nbt",
          "item": "hostilenetworks:prediction",
          "count": 1,
          "nbt": "{data_model:{id:\"hostilenetworks:ender_dragon\"}}"
        },
        "N": {
          "type": "forge:nbt",
          "item": "hostilenetworks:prediction",
          "count": 1,
          "nbt": "{data_model:{id:\"hostilenetworks:thermal/blizz\"}}"
        },
        "O": {
          "type": "forge:nbt",
          "item": "hostilenetworks:prediction",
          "count": 1,
          "nbt": "{data_model:{id:\"hostilenetworks:rabbit\"}}"
        },
        "P": {
          "type": "forge:nbt",
          "item": "hostilenetworks:prediction",
          "count": 1,
          "nbt": "{data_model:{id:\"hostilenetworks:blaze\"}}"
        },
        "Q": {
          "type": "forge:nbt",
          "item": "hostilenetworks:prediction",
          "count": 1,
          "nbt": "{data_model:{id:\"hostilenetworks:vindicator\"}}"
        },
        "R": {
          "type": "forge:nbt",
          "item": "hostilenetworks:prediction",
          "count": 1,
          "nbt": "{data_model:{id:\"hostilenetworks:wither_skeleton\"}}"
        },
        "S": {
          "type": "forge:nbt",
          "item": "hostilenetworks:prediction",
          "count": 1,
          "nbt": "{data_model:{id:\"hostilenetworks:sheep\"}}"
        },
        "T": {
          "type": "forge:nbt",
          "item": "hostilenetworks:prediction",
          "count": 1,
          "nbt": "{data_model:{id:\"hostilenetworks:wither\"}}"
        },
        "U": {
          "type": "forge:nbt",
          "item": "hostilenetworks:prediction",
          "count": 1,
          "nbt": "{data_model:{id:\"hostilenetworks:draconic_guardian\"}}"
        },
        "V": {
          "type": "forge:nbt",
          "item": "hostilenetworks:prediction",
          "count": 1,
          "nbt": "{data_model:{id:\"hostilenetworks:wraith\"}}"
        },
        "W": {
          "type": "forge:nbt",
          "item": "hostilenetworks:prediction",
          "count": 1,
          "nbt": "{data_model:{id:\"hostilenetworks:cod\"}}"
        },
        "X": {
          "type": "forge:nbt",
          "item": "hostilenetworks:prediction",
          "count": 1,
          "nbt": "{data_model:{id:\"hostilenetworks:drowned\"}}"
        },
        "Y": {
          "type": "forge:nbt",
          "item": "hostilenetworks:prediction",
          "count": 1,
          "nbt": "{data_model:{id:\"hostilenetworks:gaia\"}}"
        },
        "Z": {
          "type": "forge:nbt",
          "item": "hostilenetworks:prediction",
          "count": 1,
          "nbt": "{data_model:{id:\"hostilenetworks:spider\"}}"
        },
        "a": {
          "type": "forge:nbt",
          "item": "hostilenetworks:prediction",
          "count": 1,
          "nbt": "{data_model:{id:\"hostilenetworks:witch\"}}"
        },
        "b": {
          "type": "forge:nbt",
          "item": "hostilenetworks:prediction",
          "count": 1,
          "nbt": "{data_model:{id:\"hostilenetworks:skeleton\"}}"
        },
        "c": {
          "type": "forge:nbt",
          "item": "hostilenetworks:prediction",
          "count": 1,
          "nbt": "{data_model:{id:\"hostilenetworks:chicken\"}}"
        },
        "d": {
          "type": "forge:nbt",
          "item": "hostilenetworks:prediction",
          "count": 1,
          "nbt": "{data_model:{id:\"hostilenetworks:cow\"}}"
        },
        "e": {
          "type": "forge:nbt",
          "item": "hostilenetworks:prediction",
          "count": 1,
          "nbt": "{data_model:{id:\"hostilenetworks:phantom\"}}"
        },
        "f": {
          "type": "forge:nbt",
          "item": "hostilenetworks:prediction",
          "count": 1,
          "nbt": "{data_model:{id:\"hostilenetworks:slime\"}}"
        },
        "g": {
          "type": "forge:nbt",
          "item": "hostilenetworks:prediction",
          "count": 1,
          "nbt": "{data_model:{id:\"hostilenetworks:zombie\"}}"
        },
        "h": {
          "type": "forge:nbt",
          "item": "hostilenetworks:prediction",
          "count": 1,
          "nbt": "{data_model:{id:\"hostilenetworks:pig\"}}"
        },
        "i": {
          "type": "forge:nbt",
          "item": "hostilenetworks:prediction",
          "count": 1,
          "nbt": "{data_model:{id:\"hostilenetworks:magma_cube\"}}"
        },
        "j": {
          "type": "forge:nbt",
          "item": "hostilenetworks:prediction",
          "count": 1,
          "nbt": "{data_model:{id:\"hostilenetworks:ghast\"}}"
        },
        "k": {
          "type": "forge:nbt",
          "item": "hostilenetworks:prediction",
          "count": 1,
          "nbt": "{data_model:{id:\"hostilenetworks:rotwalker\"}}"
        }
      },
      "result": {
        "item": "chroma:ultimate_prediction"
      }
    }
  ).id(`${id_prefix}ultimate_prediction`)

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AAAAAAA",
        "ABCDCBA",
        "AEFGFEA",
        "ADGHGDA",
        "AEFGFEA",
        "ABCDCBA",
        "AAAAAAA"
      ],
      "key": {
        "A": {
          "item": "minecraft:pink_concrete"
        },
        "B": {
          "item": "forbidden_arcanus:smelter_prism"
        },
        "C": {
          "item": "extendedcrafting:crystaltine_block"
        },
        "D": {
          "item": "mysticalagradditions:creative_essence"
        },
        "E": {
          "item": "evilcraft:dark_power_gem"
        },
        "F": {
          "item": "mekaevolution:infinite_control_circuit"
        },
        "G": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:redstone\"}"
        },
        "H": {
          "item": "mekaevolution:infinite_energy_cube"
        }
      },
      "result": {
        "item": "chroma:piggy_energy_input"
      }
    }
  ).id(`${id_prefix}piggy_energy_input`)

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AAAAAAA",
        "ABCDCBA",
        "AEFGFEA",
        "ADGHGDA",
        "AEFGFEA",
        "ABCDCBA",
        "AAAAAAA"
      ],
      "key": {
        "A": {
          "item": "minecraft:pink_concrete"
        },
        "B": {
          "item": "mna:ender_disc"
        },
        "C": {
          "item": "extendedcrafting:crystaltine_block"
        },
        "D": {
          "item": "mysticalagradditions:creative_essence"
        },
        "E": {
          "item": "evilcraft:dark_power_gem"
        },
        "F": {
          "item": "mythicbotany:alfsteel_ingot"
        },
        "G": {
          "item": "chroma:infinite_alloy"
        },
        "H": {
          "item": "mekanism:qio_drive_supermassive"
        }
      },
      "result": {
        "item": "chroma:piggy_item_output"
      }
    }
  ).id(`${id_prefix}piggy_item_output`)
});
