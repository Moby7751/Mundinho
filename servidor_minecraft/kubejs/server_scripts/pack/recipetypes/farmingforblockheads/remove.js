// priority: 100

onEvent('recipes', (event) => {
    const idRemovals = [

    ];

    const outputRemovals = [
      'farmingforblockheads:market'
    ];

    idRemovals.forEach((id) => {
        event.remove({ id: id });
    });

    outputRemovals.forEach((output) => {
        event.remove({ output: output });
    });
});
