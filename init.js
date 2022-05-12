Hooks.on("init", () => {
    game.settings.register("wfrp4e-night-of-blood", "initialized", {
    name: "Initialization",
    scope: "world",
    config: false,
    default: false,
    type: Boolean
    });

    game.settings.registerMenu("wfrp4e-night-of-blood", "init-dialog", {
        name: "WFRP4e Night of Blood Initialization",
        label : "Initialize",
        hint : "This will import content for the WFRP4e adventure Night of Blood Module",
        type : WFRP4eNightOfBloodInitialization,
        restricted: true
    })
})

Hooks.on("ready", () => {
    if (!game.settings.get("wfrp4e-night-of-blood", "initialized") && game.user.isGM)
    {
        new WFRP4eNightOfBloodInitialization().render(true)
    } 
})


class WFRP4eNightOfBloodInitialization extends FormApplication {
   async render() {
		let html = "";
		try { html = await (await fetch("https://www.stuartkerrigan.com/fvtt/nob/init.php")).text()
		}
		catch (err){
			html = `<p>Night of Blood is the classic Warhammer Fantasy Roleplay scenario, and an excellent introduction to the game. The scenario was written in 1987 by Jim Bambra and has been republished officially and unofficially for 1st Edition, 2nd Edition and 4th Edition.</p>`;
		}
        new game.wfrp4e.apps.ModuleInitializer("wfrp4e-night-of-blood", "WFRP4e Night of Blood",html).render(true);
    }
}