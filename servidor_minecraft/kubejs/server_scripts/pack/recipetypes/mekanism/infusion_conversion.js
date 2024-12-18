onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/mekanism/infusion_conversion/';
    const recipes = [
      {
        input: { ingredient: { item: 'botania:mana_diamond' } },
        output: { amount: 10, infuse_type: 'mekanism:diamond' },
        id: 'mekanism:infusion_conversion/diamond/from_dust'
      },
      {
        input: { ingredient: { item: 'botania:mana_diamond_block' } },
        output: { amount: 90, infuse_type: 'mekanism:diamond' },
        id: `${id_prefix}mana_diamond_from_block`
      },
      {
        input: { ingredient: { item: 'mekanism:ingot_refined_glowstone' } },
        output: { amount: 10, infuse_type: 'chroma:refined_glowstone' },
        id: `${id_prefix}refined_glowstone_from_ingot`
      },
      {
        input: { ingredient: { item: 'mekanism:block_refined_glowstone' } },
        output: { amount: 90, infuse_type: 'chroma:refined_glowstone' },
        id: `${id_prefix}refined_glowstone_from_block`
      },
      {
        input: { ingredient: { item: 'chroma:enriched_refined_glowstone' } },
        output: { amount: 80, infuse_type: 'chroma:refined_glowstone' },
        id: `${id_prefix}refined_glowstone_from_enriched`
      },
      {
        input: { ingredient: { item: 'chroma:essence_of_darkness' } },
        output: { amount: 10, infuse_type: 'chroma:essence_of_darkness' },
        id: `${id_prefix}essence_of_darkness`
      },
      {
        input: { ingredient: { item: 'chroma:enriched_essence_of_darkness' } },
        output: { amount: 80, infuse_type: 'chroma:essence_of_darkness' },
        id: `${id_prefix}essence_of_darkness_from_enriched`
      },
      {
        input: { ingredient: { item: 'chroma:lunaris_nova' } },
        output: { amount: 10, infuse_type: 'chroma:lunaris_nova' },
        id: `${id_prefix}lunaris_nova`
      },
      {
        input: { ingredient: { item: 'chroma:enriched_lunaris_nova' } },
        output: { amount: 80, infuse_type: 'chroma:lunaris_nova' },
        id: `${id_prefix}lunaris_nova_from_enriched`
      },
      {
        input: { ingredient: { item: 'chroma:marsova_ignis' } },
        output: { amount: 10, infuse_type: 'chroma:marsova_ignis' },
        id: `${id_prefix}marsova_ignis`
      },
      {
        input: { ingredient: { item: 'chroma:enriched_marsova_ignis' } },
        output: { amount: 80, infuse_type: 'chroma:marsova_ignis' },
        id: `${id_prefix}marsova_ignis_from_enriched`
      },
      {
        input: { ingredient: { item: 'chroma:enriched_compressed_steel' } },
        output: { amount: 80, infuse_type: 'chroma:compressed_steel' },
        id: `${id_prefix}compressed_steel_from_enriched`
      },
      {
        input: { ingredient: { item: 'powah:crystal_niotic' } },
        output: { amount: 10, infuse_type: 'chroma:niotic' },
        id: `${id_prefix}niotic_from_crystal`
      },
      {
        input: { ingredient: { item: 'powah:niotic_crystal_block' } },
        output: { amount: 90, infuse_type: 'chroma:niotic' },
        id: `${id_prefix}niotic_from_block`
      },
      {
        input: { ingredient: { item: 'chroma:enriched_niotic' } },
        output: { amount: 80, infuse_type: 'chroma:niotic' },
        id: `${id_prefix}niotic_from_enriched`
      },
      {
        input: { ingredient: { item: 'chroma:venustar_luminae' } },
        output: { amount: 10, infuse_type: 'chroma:venustar_luminae' },
        id: `${id_prefix}venustar_luminae`
      },
      {
        input: { ingredient: { item: 'chroma:enriched_venustar_luminae' } },
        output: { amount: 80, infuse_type: 'chroma:venustar_luminae' },
        id: `${id_prefix}venustar_luminae_from_enriched`
      },
      {
        input: { ingredient: { item: 'chroma:eternal_cryostella_polaris' } },
        output: { amount: 10, infuse_type: 'chroma:eternal_cryostella_polaris' },
        id: `${id_prefix}eternal_cryostella_polaris`
      },
      {
        input: { ingredient: { item: 'chroma:enriched_eternal_cryostella_polaris' } },
        output: { amount: 80, infuse_type: 'chroma:eternal_cryostella_polaris' },
        id: `${id_prefix}eternal_cryostella_polaris_from_enriched`
      },
    ]

    recipes.forEach((recipe) => {
        event.custom({
            type: 'mekanism:infusion_conversion',
            input: recipe.input,
            output: recipe.output
        }).id(recipe.id);
    });
});
