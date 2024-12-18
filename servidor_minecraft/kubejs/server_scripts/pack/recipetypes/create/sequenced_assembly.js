onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/create/sequenced_assembly/';
    const recipes = [
        //Basic Sieving Factory
        {
            input: 'create:content_observer',
            outputs: ['chroma:basic_sieving_factory'],
            transitionalItem: 'chroma:incomplete_basic_sieving_factory_controller',
            loops: 3,
            sequence: [
                {
                    type: 'deploying',
                    input: ['chroma:incomplete_basic_sieving_factory_controller', 'create:brass_casing'],
                    output: 'chroma:incomplete_basic_sieving_factory_controller'
                },
                {
                    type: 'deploying',
                    input: ['chroma:incomplete_basic_sieving_factory_controller', 'create:electron_tube'],
                    output: 'chroma:incomplete_basic_sieving_factory_controller'
                },
                {
                    type: 'pressing',
                    input: ['chroma:incomplete_basic_sieving_factory_controller'],
                    output: 'chroma:incomplete_basic_sieving_factory_controller'
                },
                {
                    type: 'deploying',
                    input: ['chroma:incomplete_basic_sieving_factory_controller', 'create:precision_mechanism'],
                    output: 'chroma:incomplete_basic_sieving_factory_controller'
                },
                {
                    type: 'deploying',
                    input: ['chroma:incomplete_basic_sieving_factory_controller', 'create:brass_casing'],
                    output: 'chroma:incomplete_basic_sieving_factory_controller'
                },
                {
                    type: 'pressing',
                    input: ['chroma:incomplete_basic_sieving_factory_controller'],
                    output: 'chroma:incomplete_basic_sieving_factory_controller'
                }
            ],
            id: `${id_prefix}basic_sieving_factory`
        },
    ];

    recipes.forEach((recipe) => {
        let sequence = [];

        recipe.sequence.forEach((step) => {
            if (step.type == 'deploying') {
                sequence.push(event.recipes.create.deploying(step.output, step.input));
            } else if (step.type == 'cutting') {
                sequence.push(
                    event.recipes.create.cutting(step.output, step.input).processingTime(step.processingTime)
                );
            } else if (step.type == 'filling') {
                sequence.push(event.recipes.create.filling(step.output, step.input));
            } else if (step.type == 'pressing') {
                sequence.push(event.recipes.create.pressing(step.output, step.input));
            }
        });

        event.recipes.create
            .sequenced_assembly(recipe.outputs, recipe.input, sequence)
            .loops(recipe.loops)
            .transitionalItem(recipe.transitionalItem)
            .id(recipe.id);
    });
});
