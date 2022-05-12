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
	render() {
        let html = `<p class="notes"><img src="modules/wfrp4e-night-of-blood/assets/icons/logo.png" 
			style="display: block;  margin-left: auto;  margin-right: auto;">
			
			
			</p><p class="notes">The PDF of Night of Blood is free from Cubicle 7 on <a href="https://www.drivethrurpg.com/product/259967/WFRP-Old-World-Adventures--Night-of-Blood">DriveThruRPG</a> and is <strong>needed to use this Foundry module.</strong><br/><br/>				
			
			Pressing Initialize will install Journals, Actors and Scenes into your world and place map pins on the maps.<br/><br/>
			
			Original Written by <b>Jim Bambra</b><br/>
			Original 4E Conversion by <b>Lindsay Law</b><br/>
			Special thanks to: <b>Russell Thurman (Moo Man)</b><br/><br/>
            Foundry Edition by <b>Stuart Kerrigan</b><br/>
			
			You can email us at <a href="mailto:perilousrealmpodcast@gmail.com">perilousrealmpodcast@gmail.com</a>3
			
			<p class="notes"><strong>Want to support us?</strong><br/><br/>
			
			This module is freeware, and always will be, and other free WFRP modules are planned. As the WFRP content now requires payment to Cubicle 7 there are some running costs so if you want to donate then the link below is provided.<br/><br/>
			
			<a href="https://paypal.me/perilousrealm?locale.x=en_GB"><img src="modules/wfrp4e-night-of-blood/paypal.png" style="display: block;  margin-left: auto; margin-right: auto;" alt="paypal" /></a><br/><br/>
			
			You can also listen to the <a href="https://anchor.fm/peril">Perilous Realm Podcast</a><br/><br/><a href="https://anchor.fm/peril"><img src="modules/wfrp4e-night-of-blood/peril.png" style="display: block;  margin-left: auto;  margin-right: auto;" alt="peril logo"></a> <br/><br/>Lastly do share with us at <a href="mailto:perilousrealmpodcast@gmail.com">perilousrealmpodcast@gmail.com</a> any streams or audio you have of your adventures in the Hooded Man Inn - if anyone is left to tell the tale.</p>`
			new game.wfrp4e.apps.ModuleInitializer("wfrp4e-night-of-blood", "WFRP4e Night of Blood Initialization",html).render(true);
	}
}