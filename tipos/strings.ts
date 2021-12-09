(() => {
	const batman: string = 'Batman';
	const linernaVerde: string = 'Linterna Verde';
	const volcanNegro: string = `Héroe: volcan Negro`;

	console.log(`I'm ${batman}`);

	console.log(batman.toUpperCase());

	console.log(batman[10]?.toUpperCase() || 'No está presente');
})();
