import memoize from 'just-memoize';
import { get, writable } from 'svelte/store';
import { Font, FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TTFLoader } from 'three/addons/loaders/TTFLoader.js';

const ttfLoader = new TTFLoader();
const fontLoader = new FontLoader();
export const fonts = writable({});
export const areFontsLoaded = writable(false);

console.log({ ttfLoader });
ttfLoader.reversed = true;

type FontsRecord = Record<string, Font>;
export const getFonts = (): FontsRecord => get(fonts);
export const getAreFontsLoaded = (): Boolean => get(areFontsLoaded);
const getFontName = (font: Font) => font.data.original_font_information.fullName.replace(/\s/g, '');

globalThis.getFonts = getFonts;

export const loadFonts = memoize(() => {
	const loadTtf = makeLoader(ttfLoader);
	const loadJson = makeLoader(fontLoader);

	const fontLoaders = Promise.all([
		loadJson('src\\styles\\fonts\\NewSpiritBold.json', 'NewSpiritBold'),
		loadJson('src\\styles\\fonts\\RocaBlack.json', 'RocaBlack'),
		loadJson('src\\styles\\fonts\\AdaminaRegular.json', 'AdamiaRegular'),
		loadJson('src\\styles\\fonts\\DollyProBold.json', 'DollyProBold'),
		loadJson('src\\styles\\fonts\\Filson Pro Medium_Regular.json', 'Filson Pro Medium_Regular'),
		loadJson('src\\styles\\fonts\\Massilia_Regular.json', 'Massilia_Regular'),
		loadJson('src\\styles\\fonts\\Sirenia Medium_Regular.json', 'Sirenia Medium_Regular'),
		loadJson('src\\styles\\fonts\\Gelica Regular_Regular.json', 'Gelica Regular_Regular'),
		loadJson(
			'src\\styles\\fonts\\AreaNormalExtraBoldRegular1.json',
			'AreaNormalExtraBold_Regular1'
		),
		// loadJson('src\\styles\\fonts\\AreaNormalExtraBoldRegular.json', 'AreaNormalExtraBoldRegular'),
		// loadJson('src\\styles\\fonts\\AreaNormalSemiBoldRegular1.json', 'AreaNormalSemiBoldRegular1'),
		// loadJson('src\\styles\\fonts\\AreaNormalSemiBoldRegular.json', 'AreaNormalSemiBoldRegular'),
		loadJson('src\\styles\\fonts\\AreaNormalThinRegular1.json', 'AreaNormalThinRegular1'),
		// loadJson('src\\styles\\fonts\\AreaNormalThinRegular.json', 'AreaNormalThinRegular'),
		loadJson('src\\styles\\fonts\\AreaNormalRegular1.json', 'AreaNormalRegular1')
		// loadJson('src\\styles\\fonts\\AreaNormalRegular2.json', 'AreaNormalRegular2'),
		// loadJson('src\\styles\\fonts\\AreaNormalRegular3.json', 'AreaNormalRegular3')

		// Felt Tip Woman Bold
		// Filson Pro Medium
		// LatienneProBold
		// TarifMedium
		// TarifBook
		// TarifLight
		// TarifExtraLight
		// TarifRegular
		// SuperiorTitleBlack
		// SuperiorTitleBold
		// SuperiorTitleMedium
		// SuperiorTitleRegular
		// SuperiorTitleLight
		// loadTtf('src\\styles\\fonts\\SuperiorTitleLight.ttf', 'SuperiorTitleLight'),
		// loadTtf('src\\styles\\fonts\\SuperiorTitleMedium.ttf', 'SuperiorTitleMedium'),
		// loadTtf('src\\styles\\fonts\\SuperiorTitleBold.ttf', 'SuperiorTitleBold'),
		// loadTtf('src\\styles\\fonts\\SuperiorTitleBlack.ttf', 'SuperiorTitleBlack'),
		// loadTtf('src\\styles\\fonts\\TarifExtraLight.ttf', 'TarifExtraLight')
		// loadTtf('src\\styles\\fonts\\TarifLight.ttf', 'TarifLight'),
		// loadTtf('src\\styles\\fonts\\TarifRegular.ttf', 'TarifRegular'),
		// loadTtf('src\\styles\\fonts\\TarifBook.ttf', 'TarifBook'),
		// loadTtf('src\\styles\\fonts\\TarifMedium.ttf', 'TarifMedium'),
		// loadTtf('src\\styles\\fonts\\LatienneProBold.ttf', 'LatienneProBold'),
		// loadTtf('src\\styles\\fonts\\FilsonProMedium.ttf', 'FilsonProMedium')
	]);

	fontLoaders.catch(console.error);

	fontLoaders.then((loadedFonts: any[]) => {
		console.log('fontStore loaded: ', loadedFonts);
		const _fonts = {} as Record<string, Font>;

		for (const font of loadedFonts) {
			_fonts[font.name] = fontLoader.parse(font.font);
		}

		_fonts.chordCardTitle = _fonts.NewSpiritBold;
		_fonts.chordCardBody0 = _fonts.AreaNormalRegular1;
		_fonts.chordCardBody1 = _fonts.AreaNormalThinRegular1;

		fonts.set(_fonts);
		areFontsLoaded.set(true);
		console.log('fontStore updated:', _fonts);
		return _fonts;
	});

	return fontLoaders;
});

const makeLoader = (loaderToUse) => (url: string, name: string) => {
	return new Promise((resolve, reject) => {
		const handleSuccess = (font: any) => resolve({ name, font });
		const handleError = (error: any) => ~~console.error({ error }) || reject(error);
		loaderToUse.load(url, handleSuccess);
	});
};
