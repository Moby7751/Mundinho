onEvent("morejs.player.start_trading", (event) => { //Enlève les premiers trades (A utiliser juste pour le spellmonger)
    if (event.merchant.getName().getKey().includes("entity.minecraft.villager.mna.spellmonger")) {
        event.forEachOffers((o,i) => {
            if (i == 0) {
                o.disabled = true;
            };
        });
    };
});

onEvent("morejs.villager.trades", (event) => { //Enlève n'importe quel trade
	event.removeModdedTrades("immersiveengineering:machinist",1)
	event.removeModdedTrades("immersiveengineering:electrician",1)
});
