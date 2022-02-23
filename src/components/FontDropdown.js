import { Menu, Transition } from '@headlessui/react'
import { Fragment, useCallback, useMemo } from 'react'

export default function FontDropdown(props) {
  const {font, setFont} = props;

  /** Test font availability. */
  const doesFontExist = useCallback((fontName) => {
    /** Create an in-memory Canvas element. */
    var canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    /** The text whose final pixel size will be measured */
    const text = "abcdefghijklmnopqrstuvwxyz0123456789";
    /** Baseline font; Must be available for the test to work. */
    context.font = "72px monospace";
    /** Get the size of text with the baseline font. */
    const baselineSize = context.measureText(text).width;
    /** Specify the font to test */
    context.font = "72px '" + fontName + "', monospace";
    /** Get the size of the text with the tested font. */
    const newSize = context.measureText(text).width;
    /** Remove the in-memory Canvas element. */
    canvas = null;

    console.log("doesFontExist ran");

    /** If the size of the two text instances differs, then font exists. */
    return (newSize === baselineSize ? false : true);
  }, []);

    /** Which of these Graphite-enabled fonts are locally installed? */
    const isAbyssinicaSIL = useMemo(() => doesFontExist('Abyssinica SIL'), [doesFontExist]);
    const isAkatab = useMemo(() => doesFontExist('Akatab'), [doesFontExist]);
    const isAlkalami = useMemo(() => doesFontExist('Alkalami'), [doesFontExist]);
    const isAlkalamiLight = useMemo(() => doesFontExist('Alkalami Light'), [doesFontExist]);
    const isAndika = useMemo(() => doesFontExist('Andika'), [doesFontExist]);
    const isAnnapurnaSIL = useMemo(() => doesFontExist('Annapurna SIL'), [doesFontExist]);
    const isApparatusSIL = useMemo(() => doesFontExist('Apparatus SIL'), [doesFontExist]);
    const isAwamiNastaliq = useMemo(() => doesFontExist('Awami Nastaliq'), [doesFontExist]);
    const isCharisSIL = useMemo(() => doesFontExist('Charis SIL'), [doesFontExist]);
    const isDaiBannaSILBook = useMemo(() => doesFontExist('Dai Banna SIL Book'), [doesFontExist]);
    const isDaiBannaSILLight = useMemo(() => doesFontExist('Dai Banna SIL Light'), [doesFontExist]);
    const isDoulosSIL = useMemo(() => doesFontExist('Doulos SIL'), [doesFontExist]);
    const isDoulosSILCipher = useMemo(() => doesFontExist('Doulos SIL Cipher'), [doesFontExist]);
    const isEzraSIL = useMemo(() => doesFontExist('Ezra SIL'), [doesFontExist]);
    const isEzraSILSR = useMemo(() => doesFontExist('Ezra SIL SR'), [doesFontExist]);
    const isGalatiaSIL = useMemo(() => doesFontExist('Galatia SIL'), [doesFontExist]);
    const isGentiumPlus = useMemo(() => doesFontExist('Gentium Plus'), [doesFontExist]);
    const isHarmattan = useMemo(() => doesFontExist('Harmattan'), [doesFontExist]);
    const isKhmerBusra = useMemo(() => doesFontExist('Khmer Busra'), [doesFontExist]);
    const isKhmerMondulkiri = useMemo(() => doesFontExist('Khmer Mondulkiri'), [doesFontExist]);
    const isLateefGR = useMemo(() => doesFontExist('LateefGR'), [doesFontExist]);
    const isMingzat = useMemo(() => doesFontExist('Mingzat'), [doesFontExist]);
    const isNamdhinggoSIL = useMemo(() => doesFontExist('Namdhinggo SIL'), [doesFontExist]);
    const isNarnoor = useMemo(() => doesFontExist('Narnoor'), [doesFontExist]);
    const isNuosuSIL = useMemo(() => doesFontExist('Nuosu SIL'), [doesFontExist]);
    const isPadauk = useMemo(() => doesFontExist('Padauk'), [doesFontExist]);
    const isScheherazadeNew = useMemo(() => doesFontExist('Scheherazade New'), [doesFontExist]);
    const isShimenkan = useMemo(() => doesFontExist('Shimenkan'), [doesFontExist]);
    const isSophiaNubian = useMemo(() => doesFontExist('Sophia Nubian'), [doesFontExist]);
    const isTagmukay = useMemo(() => doesFontExist('Tagmukay'), [doesFontExist]);
    const isTaiHeritagePro = useMemo(() => doesFontExist('Tai Heritage Pro'), [doesFontExist]);
    /** Are any Graphite-enabled fonts locally installed? */
    const isNoGEFonts = (!isAbyssinicaSIL || !isAkatab || !isAlkalami || !isAlkalamiLight || !isAndika || !isAnnapurnaSIL || !isApparatusSIL || !isAwamiNastaliq || !isCharisSIL || !isDaiBannaSILBook || !isDaiBannaSILLight || !isDoulosSIL || !isDoulosSILCipher || !isEzraSIL || !isEzraSILSR || !isGalatiaSIL || !isGentiumPlus || !isHarmattan || !isKhmerBusra || !isKhmerMondulkiri || !isLateefGR || !isMingzat || !isNamdhinggoSIL || !isNarnoor || !isNuosuSIL || !isPadauk || !isScheherazadeNew || !isShimenkan || !isSophiaNubian || !isTagmukay || !isTaiHeritagePro);

    /** Which of these Windows and MacOS system fonts are locally installed? */
    const isAdelleSansDevanagari = useMemo(() => doesFontExist('Adelle Sans Devanagari'), [doesFontExist]);
    const isAharoni = useMemo(() => doesFontExist('Aharoni'), [doesFontExist]);
    const isAlBayan = useMemo(() => doesFontExist('Al Bayan'), [doesFontExist]);
    const isAlFirat = useMemo(() => doesFontExist('Al Firat'), [doesFontExist]);
    const isAlKhalil = useMemo(() => doesFontExist('Al Khalil'), [doesFontExist]);
    const isAlNile = useMemo(() => doesFontExist('Al Nile'), [doesFontExist]);
    const isAlRafidain = useMemo(() => doesFontExist('Al Rafidain'), [doesFontExist]);
    const isAlRafidainAlFanni = useMemo(() => doesFontExist('Al Rafidain Al Fanni'), [doesFontExist]);
    const isAlTarikh = useMemo(() => doesFontExist('Al Tarikh'), [doesFontExist]);
    const isAldhabi = useMemo(() => doesFontExist('Aldhabi'), [doesFontExist]);
    const isAlgiers = useMemo(() => doesFontExist('Algiers'), [doesFontExist]);
    const isAmericanTypewriter = useMemo(() => doesFontExist('American Typewriter'), [doesFontExist]);
    const isAndaleMono = useMemo(() => doesFontExist('Andalé Mono'), [doesFontExist]);
    const isAndalus = useMemo(() => doesFontExist('Andalus'), [doesFontExist]);
    const isAngsanaNew = useMemo(() => doesFontExist('Angsana New'), [doesFontExist]);
    const isAngsanaUPC = useMemo(() => doesFontExist('AngsanaUPC'), [doesFontExist]);
    const isAnnaiMN = useMemo(() => doesFontExist('Annai MN'), [doesFontExist]);
    const isAparajita = useMemo(() => doesFontExist('Aparajita'), [doesFontExist]);
    const isAppleBraille = useMemo(() => doesFontExist('Apple Braille'), [doesFontExist]);
    const isAppleCasual = useMemo(() => doesFontExist('Apple Casual'), [doesFontExist]);
    const isAppleChancery = useMemo(() => doesFontExist('Apple Chancery'), [doesFontExist]);
    const isAppleGaramond = useMemo(() => doesFontExist('Apple Garamond'), [doesFontExist]);
    const isAppleGothic = useMemo(() => doesFontExist('Apple Gothic'), [doesFontExist]);
    const isAppleLiGothic = useMemo(() => doesFontExist('Apple LiGothic'), [doesFontExist]);
    const isAppleLiSung = useMemo(() => doesFontExist('Apple LiSung'), [doesFontExist]);
    const isAppleMyungjo = useMemo(() => doesFontExist('Apple Myungjo'), [doesFontExist]);
    const isAppleSDGothicNeo = useMemo(() => doesFontExist('Apple SD Gothic Neo'), [doesFontExist]);
    const isAquaKana = useMemo(() => doesFontExist('AquaKana'), [doesFontExist]);
    const isArabicTypesetting = useMemo(() => doesFontExist('Arabic Typesetting'), [doesFontExist]);
    const isArial = useMemo(() => doesFontExist('Arial'), [doesFontExist]);
    const isArialHebrew = useMemo(() => doesFontExist('Arial Hebrew'), [doesFontExist]);
    const isArialHebrewScholar = useMemo(() => doesFontExist('Arial Hebrew Scholar'), [doesFontExist]);
    const isArialNarrow = useMemo(() => doesFontExist('Arial Narrow'), [doesFontExist]);
    const isArialNova = useMemo(() => doesFontExist('Arial Nova'), [doesFontExist]);
    const isArialUnicodeMS = useMemo(() => doesFontExist('Arial Unicode MS'), [doesFontExist]);
    const isAvenir = useMemo(() => doesFontExist('Avenir'), [doesFontExist]);
    const isAyuthaya = useMemo(() => doesFontExist('Ayuthaya'), [doesFontExist]);
    const isBaghdad = useMemo(() => doesFontExist('Baghdad'), [doesFontExist]);
    const isBahnschrift = useMemo(() => doesFontExist('Bahnschrift'), [doesFontExist]);
    const isBaloo = useMemo(() => doesFontExist('Baloo'), [doesFontExist]);
    const isBalooBhai = useMemo(() => doesFontExist('Baloo Bhai'), [doesFontExist]);
    const isBalooBhaijaan = useMemo(() => doesFontExist('Baloo Bhaijaan'), [doesFontExist]);
    const isBalooBhaina = useMemo(() => doesFontExist('Baloo Bhaina'), [doesFontExist]);
    const isBalooChettan = useMemo(() => doesFontExist('Baloo Chettan'), [doesFontExist]);
    const isBalooDa = useMemo(() => doesFontExist('Baloo Da'), [doesFontExist]);
    const isBalooPaaji = useMemo(() => doesFontExist('Baloo Paaji'), [doesFontExist]);
    const isBalooTamma = useMemo(() => doesFontExist('Baloo Tamma'), [doesFontExist]);
    const isBalooTammudu = useMemo(() => doesFontExist('Baloo Tammudu'), [doesFontExist]);
    const isBalooThambi = useMemo(() => doesFontExist('Baloo Thambi'), [doesFontExist]);
    const isBanglaMN = useMemo(() => doesFontExist('Bangla MN'), [doesFontExist]);
    const isBanglaSangamMN = useMemo(() => doesFontExist('Bangla Sangam MN'), [doesFontExist]);
    const isBaoliSC = useMemo(() => doesFontExist('Baoli SC'), [doesFontExist]);
    const isBaoliTC = useMemo(() => doesFontExist('Baoli TC'), [doesFontExist]);
    const isBaskerville = useMemo(() => doesFontExist('Baskerville'), [doesFontExist]);
    const isBasra = useMemo(() => doesFontExist('Basra'), [doesFontExist]);
    const isBatang = useMemo(() => doesFontExist('Batang'), [doesFontExist]);
    const isBeijing = useMemo(() => doesFontExist('Beijing'), [doesFontExist]);
    const isBeirut = useMemo(() => doesFontExist('Beirut'), [doesFontExist]);
    const isBiauKai = useMemo(() => doesFontExist('BiauKai'), [doesFontExist]);
    const isBigCaslon = useMemo(() => doesFontExist('Big Caslon'), [doesFontExist]);
    const isBIZUDGothic = useMemo(() => doesFontExist('BIZ UDGothic'), [doesFontExist]);
    const isBIZUDMincho = useMemo(() => doesFontExist('BIZ UDMincho'), [doesFontExist]);
    const isBodoni72 = useMemo(() => doesFontExist('Bodoni 72'), [doesFontExist]);
    const isBraganza = useMemo(() => doesFontExist('Braganza'), [doesFontExist]);
    const isBrowalliaNew = useMemo(() => doesFontExist('Browallia New'), [doesFontExist]);
    const isBrowalliaUPC = useMemo(() => doesFontExist('BrowalliaUPC'), [doesFontExist]);
    const isBrushScript = useMemo(() => doesFontExist('Brush Script'), [doesFontExist]);
    const isCalibri = useMemo(() => doesFontExist('Calibri'), [doesFontExist]);
    const isCambayDevanagari = useMemo(() => doesFontExist('Cambay Devanagari'), [doesFontExist]);
    const isCambria = useMemo(() => doesFontExist('Cambria'), [doesFontExist]);
    const isCandara = useMemo(() => doesFontExist('Candara'), [doesFontExist]);
    const isCanela = useMemo(() => doesFontExist('Canela'), [doesFontExist]);
    const isCanelaDeck = useMemo(() => doesFontExist('Canela Deck'), [doesFontExist]);
    const isCapitals = useMemo(() => doesFontExist('Capitals'), [doesFontExist]);
    const isCenturyGothic = useMemo(() => doesFontExist('Century Gothic'), [doesFontExist]);
    const isCenturySchoolbook = useMemo(() => doesFontExist('Century Schoolbook'), [doesFontExist]);
    const isChalkboard = useMemo(() => doesFontExist('Chalkboard'), [doesFontExist]);
    const isChalkduster = useMemo(() => doesFontExist('Chalkduster'), [doesFontExist]);
    const isCharcoal = useMemo(() => doesFontExist('Charcoal'), [doesFontExist]);
    const isCharcoalCY = useMemo(() => doesFontExist('Charcoal CY'), [doesFontExist]);
    const isCharterRoman = useMemo(() => doesFontExist('Charter Roman'), [doesFontExist]);
    const isChicago = useMemo(() => doesFontExist('Chicago'), [doesFontExist]);
    const isCochin = useMemo(() => doesFontExist('Cochin'), [doesFontExist]);
    const isComicSans = useMemo(() => doesFontExist('Comic Sans'), [doesFontExist]);
    const isComicSansMS = useMemo(() => doesFontExist('Comic Sans MS'), [doesFontExist]);
    const isConsolas = useMemo(() => doesFontExist('Consolas'), [doesFontExist]);
    const isConstantia = useMemo(() => doesFontExist('Constantia'), [doesFontExist]);
    const isCooper = useMemo(() => doesFontExist('Cooper'), [doesFontExist]);
    const isCopperplate = useMemo(() => doesFontExist('Copperplate'), [doesFontExist]);
    const isCorbel = useMemo(() => doesFontExist('Corbel'), [doesFontExist]);
    const isCordiaNew = useMemo(() => doesFontExist('Cordia New'), [doesFontExist]);
    const isCordiaUPC = useMemo(() => doesFontExist('CordiaUPC'), [doesFontExist]);
    const isCorsivaHebrew = useMemo(() => doesFontExist('Corsiva Hebrew'), [doesFontExist]);
    const isCourier = useMemo(() => doesFontExist('Courier'), [doesFontExist]);
    const isCourierNew = useMemo(() => doesFontExist('Courier New'), [doesFontExist]);
    const isDamascus = useMemo(() => doesFontExist('Damascus'), [doesFontExist]);
    const isDaunPenh = useMemo(() => doesFontExist('DaunPenh'), [doesFontExist]);
    const isDavid = useMemo(() => doesFontExist('David'), [doesFontExist]);
    const isDearJoeFour = useMemo(() => doesFontExist('Dear Joe Four'), [doesFontExist]);
    const isDecoTypeNaskh = useMemo(() => doesFontExist('DecoType Naskh'), [doesFontExist]);
    const isDengXian = useMemo(() => doesFontExist('DengXian'), [doesFontExist]);
    const isDevanagari = useMemo(() => doesFontExist('Devanagari'), [doesFontExist]);
    const isDevanagariMT = useMemo(() => doesFontExist('Devanagari MT'), [doesFontExist]);
    const isDevanagariSangamMN = useMemo(() => doesFontExist('Devanagari Sangam MN'), [doesFontExist]);
    const isDFKaiSB = useMemo(() => doesFontExist('DFKai-SB'), [doesFontExist]);
    const isDidot = useMemo(() => doesFontExist('Didot'), [doesFontExist]);
    const isDijla = useMemo(() => doesFontExist('Dijla'), [doesFontExist]);
    const isDilleniaUPC = useMemo(() => doesFontExist('DilleniaUPC'), [doesFontExist]);
    const isDiwanKufi = useMemo(() => doesFontExist('Diwan Kufi'), [doesFontExist]);
    const isDiwanThuluth = useMemo(() => doesFontExist('Diwan Thuluth'), [doesFontExist]);
    const isDokChampa = useMemo(() => doesFontExist('DokChampa'), [doesFontExist]);
    const isDomaineDisplay = useMemo(() => doesFontExist('Domaine Display'), [doesFontExist]);
    const isDotum = useMemo(() => doesFontExist('Dotum'), [doesFontExist]);
    const isEbrima = useMemo(() => doesFontExist('Ebrima'), [doesFontExist]);
    const isEstrangeloEdessa = useMemo(() => doesFontExist('Estrangelo Edessa'), [doesFontExist]);
    const isEucrosiaUPC = useMemo(() => doesFontExist('EucrosiaUPC'), [doesFontExist]);
    const isEuphemia = useMemo(() => doesFontExist('Euphemia'), [doesFontExist]);
    const isEuphemiaUCAS = useMemo(() => doesFontExist('Euphemia UCAS'), [doesFontExist]);
    const isFangSong = useMemo(() => doesFontExist('FangSong'), [doesFontExist]);
    const isFarah = useMemo(() => doesFontExist('Farah'), [doesFontExist]);
    const isFarisi = useMemo(() => doesFontExist('Farisi'), [doesFontExist]);
    const isForgottenFuturist = useMemo(() => doesFontExist('Forgotten Futurist'), [doesFontExist]);
    const isFoundersGrotesk = useMemo(() => doesFontExist('Founders Grotesk'), [doesFontExist]);
    const isFranklinGothic = useMemo(() => doesFontExist('Franklin Gothic'), [doesFontExist]);
    const isFrankRuehl = useMemo(() => doesFontExist('FrankRuehl'), [doesFontExist]);
    const isFreesiaUPC = useMemo(() => doesFontExist('FreesiaUPC'), [doesFontExist]);
    const isFutura = useMemo(() => doesFontExist('Futura'), [doesFontExist]);
    const isGabriola = useMemo(() => doesFontExist('Gabriola'), [doesFontExist]);
    const isGadget = useMemo(() => doesFontExist('Gadget'), [doesFontExist]);
    const isGadugi = useMemo(() => doesFontExist('Gadugi'), [doesFontExist]);
    const isGalvji = useMemo(() => doesFontExist('Galvji'), [doesFontExist]);
    const isGaramond = useMemo(() => doesFontExist('Garamond'), [doesFontExist]);
    const isGautami = useMemo(() => doesFontExist('Gautami'), [doesFontExist]);
    const isGB18030Bitmap = useMemo(() => doesFontExist('GB18030 Bitmap'), [doesFontExist]);
    const isGeezaPro = useMemo(() => doesFontExist('Geeza Pro'), [doesFontExist]);
    const isGeezah = useMemo(() => doesFontExist('Geezah'), [doesFontExist]);
    const isGeneva = useMemo(() => doesFontExist('Geneva'), [doesFontExist]);
    const isGenevaCY = useMemo(() => doesFontExist('Geneva CY'), [doesFontExist]);
    const isGeorgia = useMemo(() => doesFontExist('Georgia'), [doesFontExist]);
    const isGeorgiaPro = useMemo(() => doesFontExist('Georgia Pro'), [doesFontExist]);
    const isGillSans = useMemo(() => doesFontExist('Gill Sans'), [doesFontExist]);
    const isGillSansNova = useMemo(() => doesFontExist('Gill Sans Nova'), [doesFontExist]);
    const isGisha = useMemo(() => doesFontExist('Gisha'), [doesFontExist]);
    const isGotu = useMemo(() => doesFontExist('Gotu'), [doesFontExist]);
    const isGraphik = useMemo(() => doesFontExist('Graphik'), [doesFontExist]);
    const isGujarati = useMemo(() => doesFontExist('Gujarati'), [doesFontExist]);
    const isGujaratiMT = useMemo(() => doesFontExist('Gujarati MT'), [doesFontExist]);
    const isGujaratiSangamMN = useMemo(() => doesFontExist('Gujarati Sangam MN'), [doesFontExist]);
    const isGulim = useMemo(() => doesFontExist('Gulim'), [doesFontExist]);
    const isGungSeoche = useMemo(() => doesFontExist('Gung Seoche'), [doesFontExist]);
    const isGungSeo = useMemo(() => doesFontExist('GungSeo'), [doesFontExist]);
    const isGungsuh = useMemo(() => doesFontExist('Gungsuh'), [doesFontExist]);
    const isGurmukhi = useMemo(() => doesFontExist('Gurmukhi'), [doesFontExist]);
    const isGurmukhiMN = useMemo(() => doesFontExist('Gurmukhi MN'), [doesFontExist]);
    const isGurmukhiMT = useMemo(() => doesFontExist('Gurmukhi MT'), [doesFontExist]);
    const isGurmukhiSangamMN = useMemo(() => doesFontExist('Gurmukhi Sangam MN'), [doesFontExist]);
    const isHangangche = useMemo(() => doesFontExist('Hangangche'), [doesFontExist]);
    const isHannotateSC = useMemo(() => doesFontExist('Hannotate SC'), [doesFontExist]);
    const isHannotateTC = useMemo(() => doesFontExist('Hannotate TC'), [doesFontExist]);
    const isHanziPenSC = useMemo(() => doesFontExist('HanziPen SC'), [doesFontExist]);
    const isHanziPenTC = useMemo(() => doesFontExist('HanziPen TC'), [doesFontExist]);
    const isHeadlineA = useMemo(() => doesFontExist('HeadlineA'), [doesFontExist]);
    const isHei = useMemo(() => doesFontExist('Hei'), [doesFontExist]);
    const isHeitiSC = useMemo(() => doesFontExist('Heiti SC'), [doesFontExist]);
    const isHelvetica = useMemo(() => doesFontExist('Helvetica'), [doesFontExist]);
    const isHelveticaCY = useMemo(() => doesFontExist('Helvetica CY'), [doesFontExist]);
    const isHelveticaNeue = useMemo(() => doesFontExist('Helvetica Neue'), [doesFontExist]);
    const isHerculanum = useMemo(() => doesFontExist('Herculanum'), [doesFontExist]);
    const isHiraginoKakuGothic = useMemo(() => doesFontExist('Hiragino Kaku Gothic'), [doesFontExist]);
    const isHiraginoKakuGothicPro = useMemo(() => doesFontExist('Hiragino Kaku Gothic Pro'), [doesFontExist]);
    const isHiraginoMaruGothicPro = useMemo(() => doesFontExist('Hiragino Maru Gothic Pro'), [doesFontExist]);
    const isHiraginoMinchoPro = useMemo(() => doesFontExist('Hiragino Mincho Pro'), [doesFontExist]);
    const isHiraginoSans = useMemo(() => doesFontExist('Hiragino Sans'), [doesFontExist]);
    const isHoeflerText = useMemo(() => doesFontExist('Hoefler Text'), [doesFontExist]);
    const isHopperScript = useMemo(() => doesFontExist('Hopper Script'), [doesFontExist]);
    const isImpact = useMemo(() => doesFontExist('Impact'), [doesFontExist]);
    const isInaiMathi = useMemo(() => doesFontExist('Inai Mathi'), [doesFontExist]);
    const isInkFree = useMemo(() => doesFontExist('Ink Free'), [doesFontExist]);
    const isIowanOldStyleTitling = useMemo(() => doesFontExist('Iowan Old Style Titling'), [doesFontExist]);
    const isIrisUPC = useMemo(() => doesFontExist('IrisUPC'), [doesFontExist]);
    const isIskoolaPota = useMemo(() => doesFontExist('Iskoola Pota'), [doesFontExist]);
    const isITCBodoni72 = useMemo(() => doesFontExist('ITC Bodoni 72'), [doesFontExist]);
    const isITFDevanagari = useMemo(() => doesFontExist('ITF Devanagari'), [doesFontExist]);
    const isITFDevanagariMarathi = useMemo(() => doesFontExist('ITF Devanagari Marathi'), [doesFontExist]);
    const isJaini = useMemo(() => doesFontExist('Jaini'), [doesFontExist]);
    const isJainiPurva = useMemo(() => doesFontExist('Jaini Purva'), [doesFontExist]);
    const isJasmineUPC = useMemo(() => doesFontExist('JasmineUPC'), [doesFontExist]);
    const isJavaneseText = useMemo(() => doesFontExist('Javanese Text'), [doesFontExist]);
    const isJungGothic = useMemo(() => doesFontExist('Jung Gothic'), [doesFontExist]);
    const isKai = useMemo(() => doesFontExist('Kai'), [doesFontExist]);
    const isKailasa = useMemo(() => doesFontExist('Kailasa'), [doesFontExist]);
    const isKaiTi = useMemo(() => doesFontExist('KaiTi'), [doesFontExist]);
    const isKaitiSC = useMemo(() => doesFontExist('Kaiti SC'), [doesFontExist]);
    const isKaitiTC = useMemo(() => doesFontExist('Kaiti TC'), [doesFontExist]);
    const isKalinga = useMemo(() => doesFontExist('Kalinga'), [doesFontExist]);
    const isKannadaMN = useMemo(() => doesFontExist('Kannada MN'), [doesFontExist]);
    const isKannadaSangamMN = useMemo(() => doesFontExist('Kannada Sangam MN'), [doesFontExist]);
    const isKartika = useMemo(() => doesFontExist('Kartika'), [doesFontExist]);
    const isKatari = useMemo(() => doesFontExist('Katari'), [doesFontExist]);
    const isKefa = useMemo(() => doesFontExist('Kefa'), [doesFontExist]);
    const isKeyboard = useMemo(() => doesFontExist('Keyboard'), [doesFontExist]);
    const isKhmerMN = useMemo(() => doesFontExist('Khmer MN'), [doesFontExist]);
    const isKhmerSangamMN = useMemo(() => doesFontExist('Khmer Sangam MN'), [doesFontExist]);
    const isKhmerUI = useMemo(() => doesFontExist('Khmer UI'), [doesFontExist]);
    const isKodchiangUPC = useMemo(() => doesFontExist('KodchiangUPC'), [doesFontExist]);
    const isKohinoorBangla = useMemo(() => doesFontExist('Kohinoor Bangla'), [doesFontExist]);
    const isKohinoorDevanagari = useMemo(() => doesFontExist('Kohinoor Devanagari'), [doesFontExist]);
    const isKohinoorTelugu = useMemo(() => doesFontExist('Kohinoor Telugu'), [doesFontExist]);
    const isKokila = useMemo(() => doesFontExist('Kokila'), [doesFontExist]);
    const isKokonor = useMemo(() => doesFontExist('Kokonor'), [doesFontExist]);
    const isKoufiAbjadi = useMemo(() => doesFontExist('Koufi Abjadi'), [doesFontExist]);
    const isKrungthep = useMemo(() => doesFontExist('Krungthep'), [doesFontExist]);
    const isKuenstlerScript = useMemo(() => doesFontExist('Kuenstler Script'), [doesFontExist]);
    const isKufiStandardGK = useMemo(() => doesFontExist('KufiStandard GK'), [doesFontExist]);
    const isLahoreGurmukhi = useMemo(() => doesFontExist('Lahore Gurmukhi'), [doesFontExist]);
    const isLaimoon = useMemo(() => doesFontExist('Laimoon'), [doesFontExist]);
    const isLaoMN = useMemo(() => doesFontExist('Lao MN'), [doesFontExist]);
    const isLaoSangamMN = useMemo(() => doesFontExist('Lao Sangam MN'), [doesFontExist]);
    const isLaoUI = useMemo(() => doesFontExist('Lao UI'), [doesFontExist]);
    const isLastResort = useMemo(() => doesFontExist('LastResort'), [doesFontExist]);
    const isLatha = useMemo(() => doesFontExist('Latha'), [doesFontExist]);
    const isLavaDevanagari = useMemo(() => doesFontExist('Lava Devanagari'), [doesFontExist]);
    const isLavaKannada = useMemo(() => doesFontExist('Lava Kannada'), [doesFontExist]);
    const isLavaTelugu = useMemo(() => doesFontExist('Lava Telugu'), [doesFontExist]);
    const isLeelawadee = useMemo(() => doesFontExist('Leelawadee'), [doesFontExist]);
    const isLeelawadeeUI = useMemo(() => doesFontExist('Leelawadee UI'), [doesFontExist]);
    const isLevenimMT = useMemo(() => doesFontExist('Levenim MT'), [doesFontExist]);
    const isLibianSC = useMemo(() => doesFontExist('Libian SC'), [doesFontExist]);
    const isLibianTC = useMemo(() => doesFontExist('Libian TC'), [doesFontExist]);
    const isLiHeiPro = useMemo(() => doesFontExist('LiHei Pro'), [doesFontExist]);
    const isLilyUPC = useMemo(() => doesFontExist('LilyUPC'), [doesFontExist]);
    const isLiSongPro = useMemo(() => doesFontExist('LiSong Pro'), [doesFontExist]);
    const isLucidaConsole = useMemo(() => doesFontExist('Lucida Console'), [doesFontExist]);
    const isLucidaGrande = useMemo(() => doesFontExist('Lucida Grande'), [doesFontExist]);
    const isLucidaSans = useMemo(() => doesFontExist('Lucida Sans'), [doesFontExist]);
    const isLucidaSansUnicode = useMemo(() => doesFontExist('Lucida Sans Unicode'), [doesFontExist]);
    const isLuminari = useMemo(() => doesFontExist('Luminari'), [doesFontExist]);
    const isMaku = useMemo(() => doesFontExist('Maku'), [doesFontExist]);
    const isMalayalamMN = useMemo(() => doesFontExist('Malayalam MN'), [doesFontExist]);
    const isMalayalamSangamMN = useMemo(() => doesFontExist('Malayalam Sangam MN'), [doesFontExist]);
    const isMalgunGothic = useMemo(() => doesFontExist('Malgun Gothic'), [doesFontExist]);
    const isMangal = useMemo(() => doesFontExist('Mangal'), [doesFontExist]);
    const isMarkerFelt = useMemo(() => doesFontExist('Marker Felt'), [doesFontExist]);
    const isMarlett = useMemo(() => doesFontExist('Marlett'), [doesFontExist]);
    const isMeiryo = useMemo(() => doesFontExist('Meiryo'), [doesFontExist]);
    const isMenlo = useMemo(() => doesFontExist('Menlo'), [doesFontExist]);
    const isMicrosoftHimalaya = useMemo(() => doesFontExist('Microsoft Himalaya'), [doesFontExist]);
    const isMicrosoftJhengHei = useMemo(() => doesFontExist('Microsoft JhengHei'), [doesFontExist]);
    const isMicrosoftNewTaiLue = useMemo(() => doesFontExist('Microsoft New Tai Lue'), [doesFontExist]);
    const isMicrosoftPhagsPa = useMemo(() => doesFontExist('Microsoft PhagsPa'), [doesFontExist]);
    const isMicrosoftSansSerif = useMemo(() => doesFontExist('Microsoft Sans Serif'), [doesFontExist]);
    const isMicrosoftTaiLe = useMemo(() => doesFontExist('Microsoft Tai Le'), [doesFontExist]);
    const isMicrosoftUighur = useMemo(() => doesFontExist('Microsoft Uighur'), [doesFontExist]);
    const isMicrosoftYaHei = useMemo(() => doesFontExist('Microsoft YaHei'), [doesFontExist]);
    const isMicrosoftYiBaiti = useMemo(() => doesFontExist('Microsoft Yi Baiti'), [doesFontExist]);
    const isMingLiU = useMemo(() => doesFontExist('MingLiU'), [doesFontExist]);
    const isMingLiUExtB = useMemo(() => doesFontExist('MingLiU-ExtB'), [doesFontExist]);
    const isMiriam = useMemo(() => doesFontExist('Miriam'), [doesFontExist]);
    const isMishafi = useMemo(() => doesFontExist('Mishafi'), [doesFontExist]);
    const isMishafiGold = useMemo(() => doesFontExist('Mishafi Gold'), [doesFontExist]);
    const isModak = useMemo(() => doesFontExist('Modak'), [doesFontExist]);
    const isMonaLisaSolidITCTT = useMemo(() => doesFontExist('Mona Lisa Solid ITC TT'), [doesFontExist]);
    const isMonaco = useMemo(() => doesFontExist('Monaco'), [doesFontExist]);
    const isMonacoCY = useMemo(() => doesFontExist('Monaco CY'), [doesFontExist]);
    const isMongolianBaiti = useMemo(() => doesFontExist('Mongolian Baiti'), [doesFontExist]);
    const isMonotypeLingWai = useMemo(() => doesFontExist('Monotype LingWai'), [doesFontExist]);
    const isMoolBoran = useMemo(() => doesFontExist('MoolBoran'), [doesFontExist]);
    const isMSGothic = useMemo(() => doesFontExist('MS Gothic'), [doesFontExist]);
    const isMSMincho = useMemo(() => doesFontExist('MS Mincho'), [doesFontExist]);
    const isMshtakan = useMemo(() => doesFontExist('Mshtakan'), [doesFontExist]);
    const isMukta = useMemo(() => doesFontExist('Mukta'), [doesFontExist]);
    const isMuktaMalar = useMemo(() => doesFontExist('Mukta Malar'), [doesFontExist]);
    const isMuktaVaani = useMemo(() => doesFontExist('Mukta Vaani'), [doesFontExist]);
    const isMuktaMahee = useMemo(() => doesFontExist('MuktaMahee'), [doesFontExist]);
    const isMuna = useMemo(() => doesFontExist('Muna'), [doesFontExist]);
    const isMVBoli = useMemo(() => doesFontExist('MV Boli'), [doesFontExist]);
    const isMyanmarMN = useMemo(() => doesFontExist('Myanmar MN'), [doesFontExist]);
    const isMyanmarSangamMN = useMemo(() => doesFontExist('Myanmar Sangam MN'), [doesFontExist]);
    const isMyanmarText = useMemo(() => doesFontExist('Myanmar Text'), [doesFontExist]);
    const isMyriadArabic = useMemo(() => doesFontExist('Myriad Arabic'), [doesFontExist]);
    const isNadeem = useMemo(() => doesFontExist('Nadeem'), [doesFontExist]);
    const isNanumBrushScript = useMemo(() => doesFontExist('Nanum Brush Script'), [doesFontExist]);
    const isNanumPenScript = useMemo(() => doesFontExist('Nanum Pen Script'), [doesFontExist]);
    const isNanumGothic = useMemo(() => doesFontExist('NanumGothic'), [doesFontExist]);
    const isNanumMyeongjo = useMemo(() => doesFontExist('NanumMyeongjo'), [doesFontExist]);
    const isNarkisim = useMemo(() => doesFontExist('Narkisim'), [doesFontExist]);
    const isNeueHaasGrotskTxtPro = useMemo(() => doesFontExist('Neue Haas Grotesk Text Pro'), [doesFontExist]);
    const isNewPeninim = useMemo(() => doesFontExist('New Peninim'), [doesFontExist]);
    const isNewPeninimMT = useMemo(() => doesFontExist('New Peninim MT'), [doesFontExist]);
    const isNewPeninimMTInclined = useMemo(() => doesFontExist('New Peninim MT Inclined'), [doesFontExist]);
    const isNewYork = useMemo(() => doesFontExist('New York'), [doesFontExist]);
    const isNirmalaUI = useMemo(() => doesFontExist('Nirmala UI'), [doesFontExist]);
    const isNisan = useMemo(() => doesFontExist('Nisan'), [doesFontExist]);
    const isNISCGB18030 = useMemo(() => doesFontExist('NISC GB18030'), [doesFontExist]);
    const isNoteworthy = useMemo(() => doesFontExist('Noteworthy'), [doesFontExist]);
    const isNotoNastaliqUrdu = useMemo(() => doesFontExist('Noto Nastaliq Urdu'), [doesFontExist]);
    const isNotoSansJavanese = useMemo(() => doesFontExist('Noto Sans Javanese'), [doesFontExist]);
    const isNotoSansKannada = useMemo(() => doesFontExist('Noto Sans Kannada'), [doesFontExist]);
    const isNotoSansMyanmar = useMemo(() => doesFontExist('Noto Sans Myanmar'), [doesFontExist]);
    const isNotoSansOriya = useMemo(() => doesFontExist('Noto Sans Oriya'), [doesFontExist]);
    const isNotoSerifKannada = useMemo(() => doesFontExist('Noto Serif Kannada'), [doesFontExist]);
    const isNotoSerifMyanmar = useMemo(() => doesFontExist('Noto Serif Myanmar'), [doesFontExist]);
    const isNyala = useMemo(() => doesFontExist('Nyala'), [doesFontExist]);
    const isOctoberDevanagari = useMemo(() => doesFontExist('October Devanagari'), [doesFontExist]);
    const isOctoberTamil = useMemo(() => doesFontExist('October Tamil'), [doesFontExist]);
    const isOptima = useMemo(() => doesFontExist('Optima'), [doesFontExist]);
    const isOriyaMN = useMemo(() => doesFontExist('Oriya MN'), [doesFontExist]);
    const isOriyaSangamMN = useMemo(() => doesFontExist('Oriya Sangam MN'), [doesFontExist]);
    const isOsaka = useMemo(() => doesFontExist('Osaka'), [doesFontExist]);
    const isOsakaMono = useMemo(() => doesFontExist('Osaka-Mono'), [doesFontExist]);
    const isPalatino = useMemo(() => doesFontExist('Palatino'), [doesFontExist]);
    const isPalatinoLinotype = useMemo(() => doesFontExist('Palatino Linotype'), [doesFontExist]);
    const isPapyrus = useMemo(() => doesFontExist('Papyrus'), [doesFontExist]);
    const isPCMyungjo = useMemo(() => doesFontExist('PC Myungjo'), [doesFontExist]);
    const isPhosphate = useMemo(() => doesFontExist('Phosphate'), [doesFontExist]);
    const isPilGi = useMemo(() => doesFontExist('PilGi'), [doesFontExist]);
    const isPilgiche = useMemo(() => doesFontExist('Pilgiche'), [doesFontExist]);
    const isPingFangHK = useMemo(() => doesFontExist('PingFang HK'), [doesFontExist]);
    const isPingFangSC = useMemo(() => doesFontExist('PingFang SC'), [doesFontExist]);
    const isPingFangTC = useMemo(() => doesFontExist('PingFang TC'), [doesFontExist]);
    const isPlantagenetCherokee = useMemo(() => doesFontExist('Plantagenet Cherokee'), [doesFontExist]);
    const isPortagoITCTT = useMemo(() => doesFontExist('PortagoITC TT'), [doesFontExist]);
    const isPrincetownLET = useMemo(() => doesFontExist('Princetown LET'), [doesFontExist]);
    const isProdukt = useMemo(() => doesFontExist('Produkt'), [doesFontExist]);
    const isProximaNova = useMemo(() => doesFontExist('Proxima Nova'), [doesFontExist]);
    const isPSLOrnanongPro = useMemo(() => doesFontExist('PSL Ornanong Pro'), [doesFontExist]);
    const isPTMono = useMemo(() => doesFontExist('PT Mono'), [doesFontExist]);
    const isPTSans = useMemo(() => doesFontExist('PT Sans'), [doesFontExist]);
    const isPTSansNarrow = useMemo(() => doesFontExist('PT Sans Narrow'), [doesFontExist]);
    const isPTSerif = useMemo(() => doesFontExist('PT Serif'), [doesFontExist]);
    const isPublicoHeadlineRoman = useMemo(() => doesFontExist('Publico Headline Roman'), [doesFontExist]);
    const isQuotesCaps = useMemo(() => doesFontExist('Quotes Caps'), [doesFontExist]);
    const isQuotesScript = useMemo(() => doesFontExist('Quotes Script'), [doesFontExist]);
    const isRaanana = useMemo(() => doesFontExist('Raanana'), [doesFontExist]);
    const isRaavi = useMemo(() => doesFontExist('Raavi'), [doesFontExist]);
    const isRaya = useMemo(() => doesFontExist('Raya'), [doesFontExist]);
    const isRockwell = useMemo(() => doesFontExist('Rockwell'), [doesFontExist]);
    const isRockwellNova = useMemo(() => doesFontExist('Rockwell Nova'), [doesFontExist]);
    const isRod = useMemo(() => doesFontExist('Rod'), [doesFontExist]);
    const isSakkalMajalla = useMemo(() => doesFontExist('Sakkal Majalla'), [doesFontExist]);
    const isSamaDevanagari = useMemo(() => doesFontExist('Sama Devanagari'), [doesFontExist]);
    const isSamaGujarati = useMemo(() => doesFontExist('Sama Gujarati'), [doesFontExist]);
    const isSamaGurmukhi = useMemo(() => doesFontExist('Sama Gurmukhi'), [doesFontExist]);
    const isSamaKannada = useMemo(() => doesFontExist('Sama Kannada'), [doesFontExist]);
    const isSamaMalayalam = useMemo(() => doesFontExist('Sama Malayalam'), [doesFontExist]);
    const isSamaTamil = useMemo(() => doesFontExist('Sama Tamil'), [doesFontExist]);
    const isSanFranciscoMono = useMemo(() => doesFontExist('San Francisco Mono'), [doesFontExist]);
    const isSana = useMemo(() => doesFontExist('Sana'), [doesFontExist]);
    const isSand = useMemo(() => doesFontExist('Sand'), [doesFontExist]);
    const isSanskritText = useMemo(() => doesFontExist('Sanskrit Text'), [doesFontExist]);
    const isSathu = useMemo(() => doesFontExist('Sathu'), [doesFontExist]);
    const isSauberScript = useMemo(() => doesFontExist('Sauber Script'), [doesFontExist]);
    const isSchoolHouseCursiveB = useMemo(() => doesFontExist('SchoolHouse Cursive B'), [doesFontExist]);
    const isSchoolHousePrintedA = useMemo(() => doesFontExist('SchoolHouse Printed A'), [doesFontExist]);
    const isSegoePrint = useMemo(() => doesFontExist('Segoe Print'), [doesFontExist]);
    const isSegoeScript = useMemo(() => doesFontExist('Segoe Script'), [doesFontExist]);
    const isSegoeUI = useMemo(() => doesFontExist('Segoe UI'), [doesFontExist]);
    const isSeoul = useMemo(() => doesFontExist('Seoul'), [doesFontExist]);
    const isSFArabic = useMemo(() => doesFontExist('SF Arabic'), [doesFontExist]);
    const isShinMyungjoNeue = useMemo(() => doesFontExist('Shin Myungjo Neue'), [doesFontExist]);
    const isShobhika = useMemo(() => doesFontExist('Shobhika'), [doesFontExist]);
    const isShonarBangla = useMemo(() => doesFontExist('Shonar Bangla'), [doesFontExist]);
    const isShreeDevanagari714 = useMemo(() => doesFontExist('Shree Devanagari 714'), [doesFontExist]);
    const isShruti = useMemo(() => doesFontExist('Shruti'), [doesFontExist]);
    const isSignPainter = useMemo(() => doesFontExist('SignPainter'), [doesFontExist]);
    const isSignPainterHouseScript = useMemo(() => doesFontExist('SignPainter-HouseScript'), [doesFontExist]);
    const isSilom = useMemo(() => doesFontExist('Silom'), [doesFontExist]);
    const isSimHei = useMemo(() => doesFontExist('SimHei'), [doesFontExist]);
    const isSimplifiedArabic = useMemo(() => doesFontExist('Simplified Arabic'), [doesFontExist]);
    const isSimSong = useMemo(() => doesFontExist('SimSong'), [doesFontExist]);
    const isSimSun = useMemo(() => doesFontExist('SimSun'), [doesFontExist]);
    const isSinhalaMN = useMemo(() => doesFontExist('Sinhala MN'), [doesFontExist]);
    const isSinhalaSangamMN = useMemo(() => doesFontExist('Sinhala Sangam MN'), [doesFontExist]);
    const isSitka = useMemo(() => doesFontExist('Sitka'), [doesFontExist]);
    const isSkia = useMemo(() => doesFontExist('Skia'), [doesFontExist]);
    const isSnellRoundhand = useMemo(() => doesFontExist('Snell Roundhand'), [doesFontExist]);
    const isSomer = useMemo(() => doesFontExist('Somer'), [doesFontExist]);
    const isSongtiSC = useMemo(() => doesFontExist('Songti SC'), [doesFontExist]);
    const isSongtiTC = useMemo(() => doesFontExist('Songti TC'), [doesFontExist]);
    const isSpotMono = useMemo(() => doesFontExist('Spot Mono'), [doesFontExist]);
    const isSTFangSong = useMemo(() => doesFontExist('ST FangSong'), [doesFontExist]);
    const isSTHeiti = useMemo(() => doesFontExist('ST Heiti'), [doesFontExist]);
    const isSTKaiti = useMemo(() => doesFontExist('ST Kaiti'), [doesFontExist]);
    const isSTSong = useMemo(() => doesFontExist('ST Song'), [doesFontExist]);
    const isSTXihei = useMemo(() => doesFontExist('ST Xihei'), [doesFontExist]);
    const isSTIXTwoText = useMemo(() => doesFontExist('STIX Two Text'), [doesFontExist]);
    const isSTIXGeneralRegular = useMemo(() => doesFontExist('STIXGeneral-Regular'), [doesFontExist]);
    const isStoneSansSemITCTT = useMemo(() => doesFontExist('Stone Sans Sem ITC TT'), [doesFontExist]);
    const isSukhumvitSetText = useMemo(() => doesFontExist('Sukhumvit Set Text'), [doesFontExist]);
    const isSylfaen = useMemo(() => doesFontExist('Sylfaen'), [doesFontExist]);
    const isSynchroLET = useMemo(() => doesFontExist('Synchro LET'), [doesFontExist]);
    const isTaeGraphic = useMemo(() => doesFontExist('Tae Graphic'), [doesFontExist]);
    const isTahoma = useMemo(() => doesFontExist('Tahoma'), [doesFontExist]);
    const isTaipei = useMemo(() => doesFontExist('Taipei'), [doesFontExist]);
    const isTamilMN = useMemo(() => doesFontExist('Tamil MN'), [doesFontExist]);
    const isTamilSangamMN = useMemo(() => doesFontExist('Tamil Sangam MN'), [doesFontExist]);
    const isTechno = useMemo(() => doesFontExist('Techno'), [doesFontExist]);
    const isTeluguMN = useMemo(() => doesFontExist('Telugu MN'), [doesFontExist]);
    const isTeluguSangamMN = useMemo(() => doesFontExist('Telugu Sangam MN'), [doesFontExist]);
    const isTextile = useMemo(() => doesFontExist('Textile'), [doesFontExist]);
    const isThonburi = useMemo(() => doesFontExist('Thonburi'), [doesFontExist]);
    const isTimes = useMemo(() => doesFontExist('Times'), [doesFontExist]);
    const isTimesCY = useMemo(() => doesFontExist('Times CY'), [doesFontExist]);
    const isTimesNewRoman = useMemo(() => doesFontExist('Times New Roman'), [doesFontExist]);
    const isTimesRoman = useMemo(() => doesFontExist('Times Roman'), [doesFontExist]);
    const isTiroBangla = useMemo(() => doesFontExist('Tiro Bangla'), [doesFontExist]);
    const isTiroDevanagariHindi = useMemo(() => doesFontExist('Tiro Devanagari Hindi'), [doesFontExist]);
    const isTiroDevanagariMarathi = useMemo(() => doesFontExist('Tiro Devanagari Marathi'), [doesFontExist]);
    const isTiroDevanagariSanskrit = useMemo(() => doesFontExist('Tiro Devanagari Sanskrit'), [doesFontExist]);
    const isTiroGurmukhi = useMemo(() => doesFontExist('Tiro Gurmukhi'), [doesFontExist]);
    const isTiroHindi = useMemo(() => doesFontExist('Tiro Hindi'), [doesFontExist]);
    const isTiroKannada = useMemo(() => doesFontExist('Tiro Kannada'), [doesFontExist]);
    const isTiroMarathi = useMemo(() => doesFontExist('Tiro Marathi'), [doesFontExist]);
    const isTiroSanskrit = useMemo(() => doesFontExist('Tiro Sanskrit'), [doesFontExist]);
    const isTiroTamil = useMemo(() => doesFontExist('Tiro Tamil'), [doesFontExist]);
    const isTiroTelugu = useMemo(() => doesFontExist('Tiro Telugu'), [doesFontExist]);
    const isToppanBunkyuGothic = useMemo(() => doesFontExist('Toppan Bunkyu Gothic'), [doesFontExist]);
    const isToppanBunkyuMincho = useMemo(() => doesFontExist('Toppan Bunkyu Mincho'), [doesFontExist]);
    const isTraditionalArabic = useMemo(() => doesFontExist('Traditional Arabic'), [doesFontExist]);
    const isTrattatello = useMemo(() => doesFontExist('Trattatello'), [doesFontExist]);
    const isTrebuchetMS = useMemo(() => doesFontExist('Trebuchet MS'), [doesFontExist]);
    const isTsukushiARoundGothic = useMemo(() => doesFontExist('Tsukushi A Round Gothic'), [doesFontExist]);
    const isTsukushiBRoundGothic = useMemo(() => doesFontExist('Tsukushi B Round Gothic'), [doesFontExist]);
    const isTunga = useMemo(() => doesFontExist('Tunga'), [doesFontExist]);
    const isTwCenMT = useMemo(() => doesFontExist('Tw Cen MT'), [doesFontExist]);
    const isUDDigiKyokasho = useMemo(() => doesFontExist('UD Digi Kyokasho'), [doesFontExist]);
    const isUrduTypesetting = useMemo(() => doesFontExist('Urdu Typesetting'), [doesFontExist]);
    const isUtsaah = useMemo(() => doesFontExist('Utsaah'), [doesFontExist]);
    const isVani = useMemo(() => doesFontExist('Vani'), [doesFontExist]);
    const isVerdana = useMemo(() => doesFontExist('Verdana'), [doesFontExist]);
    const isVerdanaPro = useMemo(() => doesFontExist('Verdana Pro'), [doesFontExist]);
    const isVijaya = useMemo(() => doesFontExist('Vijaya'), [doesFontExist]);
    const isVrinda = useMemo(() => doesFontExist('Vrinda'), [doesFontExist]);
    const isWaseem = useMemo(() => doesFontExist('Waseem'), [doesFontExist]);
    const isWawatiSC = useMemo(() => doesFontExist('Wawati SC'), [doesFontExist]);
    const isWawatiTC = useMemo(() => doesFontExist('Wawati TC'), [doesFontExist]);
    const isYaziji = useMemo(() => doesFontExist('Yaziji'), [doesFontExist]);
    const isYuGothic = useMemo(() => doesFontExist('Yu Gothic'), [doesFontExist]);
    const isYuKyokashoN = useMemo(() => doesFontExist('Yu Kyokasho N'), [doesFontExist]);
    const isYuMincho = useMemo(() => doesFontExist('Yu Mincho'), [doesFontExist]);
    const isYuantiSC = useMemo(() => doesFontExist('Yuanti SC'), [doesFontExist]);
    const isYuantiTC = useMemo(() => doesFontExist('Yuanti TC'), [doesFontExist]);
    const isYuppySC = useMemo(() => doesFontExist('Yuppy SC'), [doesFontExist]);
    const isZapfChancery = useMemo(() => doesFontExist('Zapf Chancery'), [doesFontExist]);
    const isZapfino = useMemo(() => doesFontExist('Zapfino'), [doesFontExist]);
    
    /** Should Graphite-enabled fonts be displayed? */
    const graphiteEnabled = (navigator.userAgent.toLowerCase().indexOf('firefox') > -1 ? true : false);
  
  /** Set font state for default font */
  const onFontClear = useCallback(() => { setFont(''); }, [setFont]);

  /** Set font state for Graphite-enabled woff and woff2 fonts provided */
  const onFontAkatabRW = useCallback(() => { setFont('AkatabRW'); }, [setFont]);
  const onFontAlkalamiLW = useCallback(() => { setFont('AlkalamiLW'); }, [setFont]);
  const onFontAlkalamiRW = useCallback(() => { setFont('AlkalamiRW'); }, [setFont]);
  const onFontAndikaRW = useCallback(() => { setFont('AndikaRW'); }, [setFont]);
  const onFontAwamiNastaliqRW = useCallback(() => { setFont('AwamiNastaliqRW'); }, [setFont]);
  const onFontGentiumPlusRW = useCallback(() => { setFont('GentiumPlusRW'); }, [setFont]);
  const onFontHarmattanW = useCallback(() => { setFont('HarmattanW'); }, [setFont]);
  const onFontLateefRW = useCallback(() => { setFont('LateefRW'); }, [setFont]);
  const onFontMingzatW = useCallback(() => { setFont('MingzatW'); }, [setFont]);
  const onFontNarnoorW = useCallback(() => { setFont('NarnoorW'); }, [setFont]);
  const onFontPadaukRW = useCallback(() => { setFont('PadaukRW'); }, [setFont]);
  const onFontScheherazadeRW = useCallback(() => { setFont('ScheherazadeRW'); }, [setFont]);
  const onFontTagmukayRW = useCallback(() => { setFont('TagmukayRW'); }, [setFont]);
  const onFontTaiHeritageProRW = useCallback(() => { setFont('TaiHeritageProRW'); }, [setFont]);

  /** Set font state for Graphite-enabled fonts, for use when locally detected */
  const onFontAbyssinicaSIL = useCallback(() => { setFont('AbyssinicaSIL'); }, [setFont]);
  const onFontAkatab = useCallback(() => { setFont('Akatab'); }, [setFont]);
  const onFontAlkalami = useCallback(() => { setFont('Alkalami'); }, [setFont]);
  const onFontAlkalamiLight = useCallback(() => { setFont('AlkalamiLight'); }, [setFont]);
  const onFontAndika = useCallback(() => { setFont('Andika'); }, [setFont]);
  const onFontAnnapurnaSIL = useCallback(() => { setFont('AnnapurnaSIL'); }, [setFont]);
  const onFontApparatusSIL = useCallback(() => { setFont('ApparatusSIL'); }, [setFont]);
  const onFontAwamiNastaliq = useCallback(() => { setFont('AwamiNastaliq'); }, [setFont]);
  const onFontCharisSIL = useCallback(() => { setFont('CharisSIL'); }, [setFont]);
  const onFontDaiBannaSILBook = useCallback(() => { setFont('DaiBannaSILBook'); }, [setFont]);
  const onFontDaiBannaSILLight = useCallback(() => { setFont('DaiBannaSILLight'); }, [setFont]);
  const onFontDoulosSIL = useCallback(() => { setFont('DoulosSIL'); }, [setFont]);
  const onFontDoulosSILCipher = useCallback(() => { setFont('DoulosSILCipher'); }, [setFont]);
  const onFontEzraSIL = useCallback(() => { setFont('EzraSIL'); }, [setFont]);
  const onFontEzraSILSR = useCallback(() => { setFont('EzraSILSR'); }, [setFont]);
  const onFontGalatiaSIL = useCallback(() => { setFont('GalatiaSIL'); }, [setFont]);
  const onFontGentiumPlus = useCallback(() => { setFont('GentiumPlus'); }, [setFont]);
  const onFontHarmattan = useCallback(() => { setFont('Harmattan'); }, [setFont]);
  const onFontKhmerBusra = useCallback(() => { setFont('KhmerBusra'); }, [setFont]);
  const onFontKhmerMondulkiri = useCallback(() => { setFont('KhmerMondulkiri'); }, [setFont]);
  const onFontLateefGR = useCallback(() => { setFont('LateefGR'); }, [setFont]);
  const onFontMingzat = useCallback(() => { setFont('Mingzat'); }, [setFont]);
  const onFontNamdhinggoSIL = useCallback(() => { setFont('NamdhinggoSIL'); }, [setFont]);
  const onFontNarnoor = useCallback(() => { setFont('Narnoor'); }, [setFont]);
  const onFontNuosuSIL = useCallback(() => { setFont('NuosuSIL'); }, [setFont]);
  const onFontPadauk = useCallback(() => { setFont('Padauk'); }, [setFont]);
  const onFontScheherazadeNew = useCallback(() => { setFont('ScheherazadeNew'); }, [setFont]);
  const onFontShimenkan = useCallback(() => { setFont('Shimenkan'); }, [setFont]);
  const onFontSophiaNubian = useCallback(() => { setFont('SophiaNubian'); }, [setFont]);
  const onFontTagmukay = useCallback(() => { setFont('Tagmukay'); }, [setFont]);
  const onFontTaiHeritagePro = useCallback(() => { setFont('TaiHeritagePro'); }, [setFont]);

  /** Set font state for these Windows and MacOS fonts, for use when locally detected */
  const onFontAdelleSansDevanagari = useCallback(() => { setFont('AdelleSansDevanagari'); }, [setFont]);
  const onFontAharoni = useCallback(() => { setFont('Aharoni'); }, [setFont]);
  const onFontAlBayan = useCallback(() => { setFont('AlBayan'); }, [setFont]);
  const onFontAlFirat = useCallback(() => { setFont('AlFirat'); }, [setFont]);
  const onFontAlKhalil = useCallback(() => { setFont('AlKhalil'); }, [setFont]);
  const onFontAlNile = useCallback(() => { setFont('AlNile'); }, [setFont]);
  const onFontAlRafidain = useCallback(() => { setFont('AlRafidain'); }, [setFont]);
  const onFontAlRafidainAlFanni = useCallback(() => { setFont('AlRafidainAlFanni'); }, [setFont]);
  const onFontAlTarikh = useCallback(() => { setFont('AlTarikh'); }, [setFont]);
  const onFontAldhabi = useCallback(() => { setFont('Aldhabi'); }, [setFont]);
  const onFontAlgiers = useCallback(() => { setFont('Algiers'); }, [setFont]);
  const onFontAmericanTypewriter = useCallback(() => { setFont('AmericanTypewriter'); }, [setFont]);
  const onFontAndaleMono = useCallback(() => { setFont('AndaleMono'); }, [setFont]);
  const onFontAndalus = useCallback(() => { setFont('Andalus'); }, [setFont]);
  const onFontAngsanaNew = useCallback(() => { setFont('AngsanaNew'); }, [setFont]);
  const onFontAngsanaUPC = useCallback(() => { setFont('AngsanaUPC'); }, [setFont]);
  const onFontAnnaiMN = useCallback(() => { setFont('AnnaiMN'); }, [setFont]);
  const onFontAparajita = useCallback(() => { setFont('Aparajita'); }, [setFont]);
  const onFontAppleBraille = useCallback(() => { setFont('AppleBraille'); }, [setFont]);
  const onFontAppleCasual = useCallback(() => { setFont('AppleCasual'); }, [setFont]);
  const onFontAppleChancery = useCallback(() => { setFont('AppleChancery'); }, [setFont]);
  const onFontAppleGaramond = useCallback(() => { setFont('AppleGaramond'); }, [setFont]);
  const onFontAppleGothic = useCallback(() => { setFont('AppleGothic'); }, [setFont]);
  const onFontAppleLiGothic = useCallback(() => { setFont('AppleLiGothic'); }, [setFont]);
  const onFontAppleLiSung = useCallback(() => { setFont('AppleLiSung'); }, [setFont]);
  const onFontAppleMyungjo = useCallback(() => { setFont('AppleMyungjo'); }, [setFont]);
  const onFontAppleSDGothicNeo = useCallback(() => { setFont('AppleSDGothicNeo'); }, [setFont]);
  const onFontAquaKana = useCallback(() => { setFont('AquaKana'); }, [setFont]);
  const onFontArabicTypesetting = useCallback(() => { setFont('ArabicTypesetting'); }, [setFont]);
  const onFontArial = useCallback(() => { setFont('Arial'); }, [setFont]);
  const onFontArialHebrew = useCallback(() => { setFont('ArialHebrew'); }, [setFont]);
  const onFontArialHebrewScholar = useCallback(() => { setFont('ArialHebrewScholar'); }, [setFont]);
  const onFontArialNarrow = useCallback(() => { setFont('ArialNarrow'); }, [setFont]);
  const onFontArialNova = useCallback(() => { setFont('ArialNova'); }, [setFont]);
  const onFontArialUnicodeMS = useCallback(() => { setFont('ArialUnicodeMS'); }, [setFont]);
  const onFontAvenir = useCallback(() => { setFont('Avenir'); }, [setFont]);
  const onFontAyuthaya = useCallback(() => { setFont('Ayuthaya'); }, [setFont]);
  const onFontBaghdad = useCallback(() => { setFont('Baghdad'); }, [setFont]);
  const onFontBahnschrift = useCallback(() => { setFont('Bahnschrift'); }, [setFont]);
  const onFontBaloo = useCallback(() => { setFont('Baloo'); }, [setFont]);
  const onFontBalooBhai = useCallback(() => { setFont('BalooBhai'); }, [setFont]);
  const onFontBalooBhaijaan = useCallback(() => { setFont('BalooBhaijaan'); }, [setFont]);
  const onFontBalooBhaina = useCallback(() => { setFont('BalooBhaina'); }, [setFont]);
  const onFontBalooChettan = useCallback(() => { setFont('BalooChettan'); }, [setFont]);
  const onFontBalooDa = useCallback(() => { setFont('BalooDa'); }, [setFont]);
  const onFontBalooPaaji = useCallback(() => { setFont('BalooPaaji'); }, [setFont]);
  const onFontBalooTamma = useCallback(() => { setFont('BalooTamma'); }, [setFont]);
  const onFontBalooTammudu = useCallback(() => { setFont('BalooTammudu'); }, [setFont]);
  const onFontBalooThambi = useCallback(() => { setFont('BalooThambi'); }, [setFont]);
  const onFontBanglaMN = useCallback(() => { setFont('BanglaMN'); }, [setFont]);
  const onFontBanglaSangamMN = useCallback(() => { setFont('BanglaSangamMN'); }, [setFont]);
  const onFontBaoliSC = useCallback(() => { setFont('BaoliSC'); }, [setFont]);
  const onFontBaoliTC = useCallback(() => { setFont('BaoliTC'); }, [setFont]);
  const onFontBaskerville = useCallback(() => { setFont('Baskerville'); }, [setFont]);
  const onFontBasra = useCallback(() => { setFont('Basra'); }, [setFont]);
  const onFontBatang = useCallback(() => { setFont('Batang'); }, [setFont]);
  const onFontBeijing = useCallback(() => { setFont('Beijing'); }, [setFont]);
  const onFontBeirut = useCallback(() => { setFont('Beirut'); }, [setFont]);
  const onFontBiauKai = useCallback(() => { setFont('BiauKai'); }, [setFont]);
  const onFontBigCaslon = useCallback(() => { setFont('BigCaslon'); }, [setFont]);
  const onFontBIZUDGothic = useCallback(() => { setFont('BIZUDGothic'); }, [setFont]);
  const onFontBIZUDMincho = useCallback(() => { setFont('BIZUDMincho'); }, [setFont]);
  const onFontBodoni72 = useCallback(() => { setFont('Bodoni72'); }, [setFont]);
  const onFontBraganza = useCallback(() => { setFont('Braganza'); }, [setFont]);
  const onFontBrowalliaNew = useCallback(() => { setFont('BrowalliaNew'); }, [setFont]);
  const onFontBrowalliaUPC = useCallback(() => { setFont('BrowalliaUPC'); }, [setFont]);
  const onFontBrushScript = useCallback(() => { setFont('BrushScript'); }, [setFont]);
  const onFontCalibri = useCallback(() => { setFont('Calibri'); }, [setFont]);
  const onFontCambayDevanagari = useCallback(() => { setFont('CambayDevanagari'); }, [setFont]);
  const onFontCambria = useCallback(() => { setFont('Cambria'); }, [setFont]);
  const onFontCandara = useCallback(() => { setFont('Candara'); }, [setFont]);
  const onFontCanela = useCallback(() => { setFont('Canela'); }, [setFont]);
  const onFontCanelaDeck = useCallback(() => { setFont('CanelaDeck'); }, [setFont]);
  const onFontCapitals = useCallback(() => { setFont('Capitals'); }, [setFont]);
  const onFontCenturyGothic = useCallback(() => { setFont('CenturyGothic'); }, [setFont]);
  const onFontCenturySchoolbook = useCallback(() => { setFont('CenturySchoolbook'); }, [setFont]);
  const onFontChalkboard = useCallback(() => { setFont('Chalkboard'); }, [setFont]);
  const onFontChalkduster = useCallback(() => { setFont('Chalkduster'); }, [setFont]);
  const onFontCharcoal = useCallback(() => { setFont('Charcoal'); }, [setFont]);
  const onFontCharcoalCY = useCallback(() => { setFont('CharcoalCY'); }, [setFont]);
  const onFontCharterRoman = useCallback(() => { setFont('CharterRoman'); }, [setFont]);
  const onFontChicago = useCallback(() => { setFont('Chicago'); }, [setFont]);
  const onFontCochin = useCallback(() => { setFont('Cochin'); }, [setFont]);
  const onFontComicSans = useCallback(() => { setFont('ComicSans'); }, [setFont]);
  const onFontComicSansMS = useCallback(() => { setFont('ComicSansMS'); }, [setFont]);
  const onFontConsolas = useCallback(() => { setFont('Consolas'); }, [setFont]);
  const onFontConstantia = useCallback(() => { setFont('Constantia'); }, [setFont]);
  const onFontCooper = useCallback(() => { setFont('Cooper'); }, [setFont]);
  const onFontCopperplate = useCallback(() => { setFont('Copperplate'); }, [setFont]);
  const onFontCorbel = useCallback(() => { setFont('Corbel'); }, [setFont]);
  const onFontCordiaNew = useCallback(() => { setFont('CordiaNew'); }, [setFont]);
  const onFontCordiaUPC = useCallback(() => { setFont('CordiaUPC'); }, [setFont]);
  const onFontCorsivaHebrew = useCallback(() => { setFont('CorsivaHebrew'); }, [setFont]);
  const onFontCourier = useCallback(() => { setFont('Courier'); }, [setFont]);
  const onFontCourierNew = useCallback(() => { setFont('CourierNew'); }, [setFont]);
  const onFontDamascus = useCallback(() => { setFont('Damascus'); }, [setFont]);
  const onFontDaunPenh = useCallback(() => { setFont('DaunPenh'); }, [setFont]);
  const onFontDavid = useCallback(() => { setFont('David'); }, [setFont]);
  const onFontDearJoeFour = useCallback(() => { setFont('DearJoeFour'); }, [setFont]);
  const onFontDecoTypeNaskh = useCallback(() => { setFont('DecoTypeNaskh'); }, [setFont]);
  const onFontDengXian = useCallback(() => { setFont('DengXian'); }, [setFont]);
  const onFontDevanagari = useCallback(() => { setFont('Devanagari'); }, [setFont]);
  const onFontDevanagariMT = useCallback(() => { setFont('DevanagariMT'); }, [setFont]);
  const onFontDevanagariSangamMN = useCallback(() => { setFont('DevanagariSangamMN'); }, [setFont]);
  const onFontDFKaiSB = useCallback(() => { setFont('DFKai-SB'); }, [setFont]);
  const onFontDidot = useCallback(() => { setFont('Didot'); }, [setFont]);
  const onFontDijla = useCallback(() => { setFont('Dijla'); }, [setFont]);
  const onFontDilleniaUPC = useCallback(() => { setFont('DilleniaUPC'); }, [setFont]);
  const onFontDiwanKufi = useCallback(() => { setFont('DiwanKufi'); }, [setFont]);
  const onFontDiwanThuluth = useCallback(() => { setFont('DiwanThuluth'); }, [setFont]);
  const onFontDokChampa = useCallback(() => { setFont('DokChampa'); }, [setFont]);
  const onFontDomaineDisplay = useCallback(() => { setFont('DomaineDisplay'); }, [setFont]);
  const onFontDotum = useCallback(() => { setFont('Dotum'); }, [setFont]);
  const onFontEbrima = useCallback(() => { setFont('Ebrima'); }, [setFont]);
  const onFontEstrangeloEdessa = useCallback(() => { setFont('EstrangeloEdessa'); }, [setFont]);
  const onFontEucrosiaUPC = useCallback(() => { setFont('EucrosiaUPC'); }, [setFont]);
  const onFontEuphemia = useCallback(() => { setFont('Euphemia'); }, [setFont]);
  const onFontEuphemiaUCAS = useCallback(() => { setFont('EuphemiaUCAS'); }, [setFont]);
  const onFontFangSong = useCallback(() => { setFont('FangSong'); }, [setFont]);
  const onFontFarah = useCallback(() => { setFont('Farah'); }, [setFont]);
  const onFontFarisi = useCallback(() => { setFont('Farisi'); }, [setFont]);
  const onFontForgottenFuturist = useCallback(() => { setFont('ForgottenFuturist'); }, [setFont]);
  const onFontFoundersGrotesk = useCallback(() => { setFont('FoundersGrotesk'); }, [setFont]);
  const onFontFranklinGothic = useCallback(() => { setFont('FranklinGothic'); }, [setFont]);
  const onFontFrankRuehl = useCallback(() => { setFont('FrankRuehl'); }, [setFont]);
  const onFontFreesiaUPC = useCallback(() => { setFont('FreesiaUPC'); }, [setFont]);
  const onFontFutura = useCallback(() => { setFont('Futura'); }, [setFont]);
  const onFontGabriola = useCallback(() => { setFont('Gabriola'); }, [setFont]);
  const onFontGadget = useCallback(() => { setFont('Gadget'); }, [setFont]);
  const onFontGadugi = useCallback(() => { setFont('Gadugi'); }, [setFont]);
  const onFontGalvji = useCallback(() => { setFont('Galvji'); }, [setFont]);
  const onFontGaramond = useCallback(() => { setFont('Garamond'); }, [setFont]);
  const onFontGautami = useCallback(() => { setFont('Gautami'); }, [setFont]);
  const onFontGB18030Bitmap = useCallback(() => { setFont('GB18030Bitmap'); }, [setFont]);
  const onFontGeezaPro = useCallback(() => { setFont('GeezaPro'); }, [setFont]);
  const onFontGeezah = useCallback(() => { setFont('Geezah'); }, [setFont]);
  const onFontGeneva = useCallback(() => { setFont('Geneva'); }, [setFont]);
  const onFontGenevaCY = useCallback(() => { setFont('GenevaCY'); }, [setFont]);
  const onFontGeorgia = useCallback(() => { setFont('Georgia'); }, [setFont]);
  const onFontGeorgiaPro = useCallback(() => { setFont('GeorgiaPro'); }, [setFont]);
  const onFontGillSans = useCallback(() => { setFont('GillSans'); }, [setFont]);
  const onFontGillSansNova = useCallback(() => { setFont('GillSansNova'); }, [setFont]);
  const onFontGisha = useCallback(() => { setFont('Gisha'); }, [setFont]);
  const onFontGotu = useCallback(() => { setFont('Gotu'); }, [setFont]);
  const onFontGraphik = useCallback(() => { setFont('Graphik'); }, [setFont]);
  const onFontGujarati = useCallback(() => { setFont('Gujarati'); }, [setFont]);
  const onFontGujaratiMT = useCallback(() => { setFont('GujaratiMT'); }, [setFont]);
  const onFontGujaratiSangamMN = useCallback(() => { setFont('GujaratiSangamMN'); }, [setFont]);
  const onFontGulim = useCallback(() => { setFont('Gulim'); }, [setFont]);
  const onFontGungSeoche = useCallback(() => { setFont('GungSeoche'); }, [setFont]);
  const onFontGungSeo = useCallback(() => { setFont('GungSeo'); }, [setFont]);
  const onFontGungsuh = useCallback(() => { setFont('Gungsuh'); }, [setFont]);
  const onFontGurmukhi = useCallback(() => { setFont('Gurmukhi'); }, [setFont]);
  const onFontGurmukhiMN = useCallback(() => { setFont('GurmukhiMN'); }, [setFont]);
  const onFontGurmukhiMT = useCallback(() => { setFont('GurmukhiMT'); }, [setFont]);
  const onFontGurmukhiSangamMN = useCallback(() => { setFont('GurmukhiSangamMN'); }, [setFont]);
  const onFontHangangche = useCallback(() => { setFont('Hangangche'); }, [setFont]);
  const onFontHannotateSC = useCallback(() => { setFont('HannotateSC'); }, [setFont]);
  const onFontHannotateTC = useCallback(() => { setFont('HannotateTC'); }, [setFont]);
  const onFontHanziPenSC = useCallback(() => { setFont('HanziPenSC'); }, [setFont]);
  const onFontHanziPenTC = useCallback(() => { setFont('HanziPenTC'); }, [setFont]);
  const onFontHeadlineA = useCallback(() => { setFont('HeadlineA'); }, [setFont]);
  const onFontHei = useCallback(() => { setFont('Hei'); }, [setFont]);
  const onFontHeitiSC = useCallback(() => { setFont('HeitiSC'); }, [setFont]);
  const onFontHelvetica = useCallback(() => { setFont('Helvetica'); }, [setFont]);
  const onFontHelveticaCY = useCallback(() => { setFont('HelveticaCY'); }, [setFont]);
  const onFontHelveticaNeue = useCallback(() => { setFont('HelveticaNeue'); }, [setFont]);
  const onFontHerculanum = useCallback(() => { setFont('Herculanum'); }, [setFont]);
  const onFontHiraginoKakuGothic = useCallback(() => { setFont('HiraginoKakuGothic'); }, [setFont]);
  const onFontHiraginoKakuGothicPro = useCallback(() => { setFont('HiraginoKakuGothicPro'); }, [setFont]);
  const onFontHiraginoMaruGothicPro = useCallback(() => { setFont('HiraginoMaruGothicPro'); }, [setFont]);
  const onFontHiraginoMinchoPro = useCallback(() => { setFont('HiraginoMinchoPro'); }, [setFont]);
  const onFontHiraginoSans = useCallback(() => { setFont('HiraginoSans'); }, [setFont]);
  const onFontHoeflerText = useCallback(() => { setFont('HoeflerText'); }, [setFont]);
  const onFontHopperScript = useCallback(() => { setFont('HopperScript'); }, [setFont]);
  const onFontImpact = useCallback(() => { setFont('Impact'); }, [setFont]);
  const onFontInaiMathi = useCallback(() => { setFont('InaiMathi'); }, [setFont]);
  const onFontInkFree = useCallback(() => { setFont('InkFree'); }, [setFont]);
  const onFontIowanOldStyleTitling = useCallback(() => { setFont('IowanOldStyleTitling'); }, [setFont]);
  const onFontIrisUPC = useCallback(() => { setFont('IrisUPC'); }, [setFont]);
  const onFontIskoolaPota = useCallback(() => { setFont('IskoolaPota'); }, [setFont]);
  const onFontITCBodoni72 = useCallback(() => { setFont('ITCBodoni72'); }, [setFont]);
  const onFontITFDevanagari = useCallback(() => { setFont('ITFDevanagari'); }, [setFont]);
  const onFontITFDevanagariMarathi = useCallback(() => { setFont('ITFDevanagariMarathi'); }, [setFont]);
  const onFontJaini = useCallback(() => { setFont('Jaini'); }, [setFont]);
  const onFontJainiPurva = useCallback(() => { setFont('JainiPurva'); }, [setFont]);
  const onFontJasmineUPC = useCallback(() => { setFont('JasmineUPC'); }, [setFont]);
  const onFontJavaneseText = useCallback(() => { setFont('JavaneseText'); }, [setFont]);
  const onFontJungGothic = useCallback(() => { setFont('JungGothic'); }, [setFont]);
  const onFontKai = useCallback(() => { setFont('Kai'); }, [setFont]);
  const onFontKailasa = useCallback(() => { setFont('Kailasa'); }, [setFont]);
  const onFontKaiTi = useCallback(() => { setFont('KaiTi'); }, [setFont]);
  const onFontKaitiSC = useCallback(() => { setFont('KaitiSC'); }, [setFont]);
  const onFontKaitiTC = useCallback(() => { setFont('KaitiTC'); }, [setFont]);
  const onFontKalinga = useCallback(() => { setFont('Kalinga'); }, [setFont]);
  const onFontKannadaMN = useCallback(() => { setFont('KannadaMN'); }, [setFont]);
  const onFontKannadaSangamMN = useCallback(() => { setFont('KannadaSangamMN'); }, [setFont]);
  const onFontKartika = useCallback(() => { setFont('Kartika'); }, [setFont]);
  const onFontKatari = useCallback(() => { setFont('Katari'); }, [setFont]);
  const onFontKefa = useCallback(() => { setFont('Kefa'); }, [setFont]);
  const onFontKeyboard = useCallback(() => { setFont('Keyboard'); }, [setFont]);
  const onFontKhmerMN = useCallback(() => { setFont('KhmerMN'); }, [setFont]);
  const onFontKhmerSangamMN = useCallback(() => { setFont('KhmerSangamMN'); }, [setFont]);
  const onFontKhmerUI = useCallback(() => { setFont('KhmerUI'); }, [setFont]);
  const onFontKodchiangUPC = useCallback(() => { setFont('KodchiangUPC'); }, [setFont]);
  const onFontKohinoorBangla = useCallback(() => { setFont('KohinoorBangla'); }, [setFont]);
  const onFontKohinoorDevanagari = useCallback(() => { setFont('KohinoorDevanagari'); }, [setFont]);
  const onFontKohinoorTelugu = useCallback(() => { setFont('KohinoorTelugu'); }, [setFont]);
  const onFontKokila = useCallback(() => { setFont('Kokila'); }, [setFont]);
  const onFontKokonor = useCallback(() => { setFont('Kokonor'); }, [setFont]);
  const onFontKoufiAbjadi = useCallback(() => { setFont('KoufiAbjadi'); }, [setFont]);
  const onFontKrungthep = useCallback(() => { setFont('Krungthep'); }, [setFont]);
  const onFontKuenstlerScript = useCallback(() => { setFont('KuenstlerScript'); }, [setFont]);
  const onFontKufiStandardGK = useCallback(() => { setFont('KufiStandardGK'); }, [setFont]);
  const onFontLahoreGurmukhi = useCallback(() => { setFont('LahoreGurmukhi'); }, [setFont]);
  const onFontLaimoon = useCallback(() => { setFont('Laimoon'); }, [setFont]);
  const onFontLaoMN = useCallback(() => { setFont('LaoMN'); }, [setFont]);
  const onFontLaoSangamMN = useCallback(() => { setFont('LaoSangamMN'); }, [setFont]);
  const onFontLaoUI = useCallback(() => { setFont('LaoUI'); }, [setFont]);
  const onFontLastResort = useCallback(() => { setFont('LastResort'); }, [setFont]);
  const onFontLatha = useCallback(() => { setFont('Latha'); }, [setFont]);
  const onFontLavaDevanagari = useCallback(() => { setFont('LavaDevanagari'); }, [setFont]);
  const onFontLavaKannada = useCallback(() => { setFont('LavaKannada'); }, [setFont]);
  const onFontLavaTelugu = useCallback(() => { setFont('LavaTelugu'); }, [setFont]);
  const onFontLeelawadee = useCallback(() => { setFont('Leelawadee'); }, [setFont]);
  const onFontLeelawadeeUI = useCallback(() => { setFont('LeelawadeeUI'); }, [setFont]);
  const onFontLevenimMT = useCallback(() => { setFont('LevenimMT'); }, [setFont]);
  const onFontLibianSC = useCallback(() => { setFont('LibianSC'); }, [setFont]);
  const onFontLibianTC = useCallback(() => { setFont('LibianTC'); }, [setFont]);
  const onFontLiHeiPro = useCallback(() => { setFont('LiHeiPro'); }, [setFont]);
  const onFontLilyUPC = useCallback(() => { setFont('LilyUPC'); }, [setFont]);
  const onFontLiSongPro = useCallback(() => { setFont('LiSongPro'); }, [setFont]);
  const onFontLucidaConsole = useCallback(() => { setFont('LucidaConsole'); }, [setFont]);
  const onFontLucidaGrande = useCallback(() => { setFont('LucidaGrande'); }, [setFont]);
  const onFontLucidaSans = useCallback(() => { setFont('LucidaSans'); }, [setFont]);
  const onFontLucidaSansUnicode = useCallback(() => { setFont('LucidaSansUnicode'); }, [setFont]);
  const onFontLuminari = useCallback(() => { setFont('Luminari'); }, [setFont]);
  const onFontMaku = useCallback(() => { setFont('Maku'); }, [setFont]);
  const onFontMalayalamMN = useCallback(() => { setFont('MalayalamMN'); }, [setFont]);
  const onFontMalayalamSangamMN = useCallback(() => { setFont('MalayalamSangamMN'); }, [setFont]);
  const onFontMalgunGothic = useCallback(() => { setFont('MalgunGothic'); }, [setFont]);
  const onFontMangal = useCallback(() => { setFont('Mangal'); }, [setFont]);
  const onFontMarkerFelt = useCallback(() => { setFont('MarkerFelt'); }, [setFont]);
  const onFontMarlett = useCallback(() => { setFont('Marlett'); }, [setFont]);
  const onFontMeiryo = useCallback(() => { setFont('Meiryo'); }, [setFont]);
  const onFontMenlo = useCallback(() => { setFont('Menlo'); }, [setFont]);
  const onFontMicrosoftHimalaya = useCallback(() => { setFont('MicrosoftHimalaya'); }, [setFont]);
  const onFontMicrosoftJhengHei = useCallback(() => { setFont('MicrosoftJhengHei'); }, [setFont]);
  const onFontMicrosoftNewTaiLue = useCallback(() => { setFont('MicrosoftNewTaiLue'); }, [setFont]);
  const onFontMicrosoftPhagsPa = useCallback(() => { setFont('MicrosoftPhagsPa'); }, [setFont]);
  const onFontMicrosoftSansSerif = useCallback(() => { setFont('MicrosoftSansSerif'); }, [setFont]);
  const onFontMicrosoftTaiLe = useCallback(() => { setFont('MicrosoftTaiLe'); }, [setFont]);
  const onFontMicrosoftUighur = useCallback(() => { setFont('MicrosoftUighur'); }, [setFont]);
  const onFontMicrosoftYaHei = useCallback(() => { setFont('MicrosoftYaHei'); }, [setFont]);
  const onFontMicrosoftYiBaiti = useCallback(() => { setFont('MicrosoftYiBaiti'); }, [setFont]);
  const onFontMingLiU = useCallback(() => { setFont('MingLiU'); }, [setFont]);
  const onFontMingLiUExtB = useCallback(() => { setFont('MingLiU-ExtB'); }, [setFont]);
  const onFontMiriam = useCallback(() => { setFont('Miriam'); }, [setFont]);
  const onFontMishafi = useCallback(() => { setFont('Mishafi'); }, [setFont]);
  const onFontMishafiGold = useCallback(() => { setFont('MishafiGold'); }, [setFont]);
  const onFontModak = useCallback(() => { setFont('Modak'); }, [setFont]);
  const onFontMonaLisaSolidITCTT = useCallback(() => { setFont('MonaLisaSolidITCTT'); }, [setFont]);
  const onFontMonaco = useCallback(() => { setFont('Monaco'); }, [setFont]);
  const onFontMonacoCY = useCallback(() => { setFont('MonacoCY'); }, [setFont]);
  const onFontMongolianBaiti = useCallback(() => { setFont('MongolianBaiti'); }, [setFont]);
  const onFontMonotypeLingWai = useCallback(() => { setFont('MonotypeLingWai'); }, [setFont]);
  const onFontMoolBoran = useCallback(() => { setFont('MoolBoran'); }, [setFont]);
  const onFontMSGothic = useCallback(() => { setFont('MSGothic'); }, [setFont]);
  const onFontMSMincho = useCallback(() => { setFont('MSMincho'); }, [setFont]);
  const onFontMshtakan = useCallback(() => { setFont('Mshtakan'); }, [setFont]);
  const onFontMukta = useCallback(() => { setFont('Mukta'); }, [setFont]);
  const onFontMuktaMalar = useCallback(() => { setFont('MuktaMalar'); }, [setFont]);
  const onFontMuktaVaani = useCallback(() => { setFont('MuktaVaani'); }, [setFont]);
  const onFontMuktaMahee = useCallback(() => { setFont('MuktaMahee'); }, [setFont]);
  const onFontMuna = useCallback(() => { setFont('Muna'); }, [setFont]);
  const onFontMVBoli = useCallback(() => { setFont('MVBoli'); }, [setFont]);
  const onFontMyanmarMN = useCallback(() => { setFont('MyanmarMN'); }, [setFont]);
  const onFontMyanmarSangamMN = useCallback(() => { setFont('MyanmarSangamMN'); }, [setFont]);
  const onFontMyanmarText = useCallback(() => { setFont('MyanmarText'); }, [setFont]);
  const onFontMyriadArabic = useCallback(() => { setFont('MyriadArabic'); }, [setFont]);
  const onFontNadeem = useCallback(() => { setFont('Nadeem'); }, [setFont]);
  const onFontNanumBrushScript = useCallback(() => { setFont('NanumBrushScript'); }, [setFont]);
  const onFontNanumPenScript = useCallback(() => { setFont('NanumPenScript'); }, [setFont]);
  const onFontNanumGothic = useCallback(() => { setFont('NanumGothic'); }, [setFont]);
  const onFontNanumMyeongjo = useCallback(() => { setFont('NanumMyeongjo'); }, [setFont]);
  const onFontNarkisim = useCallback(() => { setFont('Narkisim'); }, [setFont]);
  const onFontNeueHaasGrotskTxtPro = useCallback(() => { setFont('NeueHaasGrotskTxtPro'); }, [setFont]);
  const onFontNewPeninim = useCallback(() => { setFont('NewPeninim'); }, [setFont]);
  const onFontNewPeninimMT = useCallback(() => { setFont('NewPeninimMT'); }, [setFont]);
  const onFontNewPeninimMTInclined = useCallback(() => { setFont('NewPeninimMTInclined'); }, [setFont]);
  const onFontNewYork = useCallback(() => { setFont('NewYork'); }, [setFont]);
  const onFontNirmalaUI = useCallback(() => { setFont('NirmalaUI'); }, [setFont]);
  const onFontNisan = useCallback(() => { setFont('Nisan'); }, [setFont]);
  const onFontNISCGB18030 = useCallback(() => { setFont('NISCGB18030'); }, [setFont]);
  const onFontNoteworthy = useCallback(() => { setFont('Noteworthy'); }, [setFont]);
  const onFontNotoNastaliqUrdu = useCallback(() => { setFont('NotoNastaliqUrdu'); }, [setFont]);
  const onFontNotoSansJavanese = useCallback(() => { setFont('NotoSansJavanese'); }, [setFont]);
  const onFontNotoSansKannada = useCallback(() => { setFont('NotoSansKannada'); }, [setFont]);
  const onFontNotoSansMyanmar = useCallback(() => { setFont('NotoSansMyanmar'); }, [setFont]);
  const onFontNotoSansOriya = useCallback(() => { setFont('NotoSansOriya'); }, [setFont]);
  const onFontNotoSerifKannada = useCallback(() => { setFont('NotoSerifKannada'); }, [setFont]);
  const onFontNotoSerifMyanmar = useCallback(() => { setFont('NotoSerifMyanmar'); }, [setFont]);
  const onFontNyala = useCallback(() => { setFont('Nyala'); }, [setFont]);
  const onFontOctoberDevanagari = useCallback(() => { setFont('OctoberDevanagari'); }, [setFont]);
  const onFontOctoberTamil = useCallback(() => { setFont('OctoberTamil'); }, [setFont]);
  const onFontOptima = useCallback(() => { setFont('Optima'); }, [setFont]);
  const onFontOriyaMN = useCallback(() => { setFont('OriyaMN'); }, [setFont]);
  const onFontOriyaSangamMN = useCallback(() => { setFont('OriyaSangamMN'); }, [setFont]);
  const onFontOsaka = useCallback(() => { setFont('Osaka'); }, [setFont]);
  const onFontOsakaMono = useCallback(() => { setFont('Osaka-Mono'); }, [setFont]);
  const onFontPalatino = useCallback(() => { setFont('Palatino'); }, [setFont]);
  const onFontPalatinoLinotype = useCallback(() => { setFont('PalatinoLinotype'); }, [setFont]);
  const onFontPapyrus = useCallback(() => { setFont('Papyrus'); }, [setFont]);
  const onFontPCMyungjo = useCallback(() => { setFont('PCMyungjo'); }, [setFont]);
  const onFontPhosphate = useCallback(() => { setFont('Phosphate'); }, [setFont]);
  const onFontPilGi = useCallback(() => { setFont('PilGi'); }, [setFont]);
  const onFontPilgiche = useCallback(() => { setFont('Pilgiche'); }, [setFont]);
  const onFontPingFangHK = useCallback(() => { setFont('PingFangHK'); }, [setFont]);
  const onFontPingFangSC = useCallback(() => { setFont('PingFangSC'); }, [setFont]);
  const onFontPingFangTC = useCallback(() => { setFont('PingFangTC'); }, [setFont]);
  const onFontPlantagenetCherokee = useCallback(() => { setFont('PlantagenetCherokee'); }, [setFont]);
  const onFontPortagoITCTT = useCallback(() => { setFont('PortagoITCTT'); }, [setFont]);
  const onFontPrincetownLET = useCallback(() => { setFont('PrincetownLET'); }, [setFont]);
  const onFontProdukt = useCallback(() => { setFont('Produkt'); }, [setFont]);
  const onFontProximaNova = useCallback(() => { setFont('ProximaNova'); }, [setFont]);
  const onFontPSLOrnanongPro = useCallback(() => { setFont('PSLOrnanongPro'); }, [setFont]);
  const onFontPTMono = useCallback(() => { setFont('PTMono'); }, [setFont]);
  const onFontPTSans = useCallback(() => { setFont('PTSans'); }, [setFont]);
  const onFontPTSansNarrow = useCallback(() => { setFont('PTSansNarrow'); }, [setFont]);
  const onFontPTSerif = useCallback(() => { setFont('PTSerif'); }, [setFont]);
  const onFontPublicoHeadlineRoman = useCallback(() => { setFont('PublicoHeadlineRoman'); }, [setFont]);
  const onFontQuotesCaps = useCallback(() => { setFont('QuotesCaps'); }, [setFont]);
  const onFontQuotesScript = useCallback(() => { setFont('QuotesScript'); }, [setFont]);
  const onFontRaanana = useCallback(() => { setFont('Raanana'); }, [setFont]);
  const onFontRaavi = useCallback(() => { setFont('Raavi'); }, [setFont]);
  const onFontRaya = useCallback(() => { setFont('Raya'); }, [setFont]);
  const onFontRockwell = useCallback(() => { setFont('Rockwell'); }, [setFont]);
  const onFontRockwellNova = useCallback(() => { setFont('RockwellNova'); }, [setFont]);
  const onFontRod = useCallback(() => { setFont('Rod'); }, [setFont]);
  const onFontSakkalMajalla = useCallback(() => { setFont('SakkalMajalla'); }, [setFont]);
  const onFontSamaDevanagari = useCallback(() => { setFont('SamaDevanagari'); }, [setFont]);
  const onFontSamaGujarati = useCallback(() => { setFont('SamaGujarati'); }, [setFont]);
  const onFontSamaGurmukhi = useCallback(() => { setFont('SamaGurmukhi'); }, [setFont]);
  const onFontSamaKannada = useCallback(() => { setFont('SamaKannada'); }, [setFont]);
  const onFontSamaMalayalam = useCallback(() => { setFont('SamaMalayalam'); }, [setFont]);
  const onFontSamaTamil = useCallback(() => { setFont('SamaTamil'); }, [setFont]);
  const onFontSanFranciscoMono = useCallback(() => { setFont('SanFranciscoMono'); }, [setFont]);
  const onFontSana = useCallback(() => { setFont('Sana'); }, [setFont]);
  const onFontSand = useCallback(() => { setFont('Sand'); }, [setFont]);
  const onFontSanskritText = useCallback(() => { setFont('SanskritText'); }, [setFont]);
  const onFontSathu = useCallback(() => { setFont('Sathu'); }, [setFont]);
  const onFontSauberScript = useCallback(() => { setFont('SauberScript'); }, [setFont]);
  const onFontSchoolHouseCursiveB = useCallback(() => { setFont('SchoolHouseCursiveB'); }, [setFont]);
  const onFontSchoolHousePrintedA = useCallback(() => { setFont('SchoolHousePrintedA'); }, [setFont]);
  const onFontSegoePrint = useCallback(() => { setFont('SegoePrint'); }, [setFont]);
  const onFontSegoeScript = useCallback(() => { setFont('SegoeScript'); }, [setFont]);
  const onFontSegoeUI = useCallback(() => { setFont('SegoeUI'); }, [setFont]);
  const onFontSeoul = useCallback(() => { setFont('Seoul'); }, [setFont]);
  const onFontSFArabic = useCallback(() => { setFont('SFArabic'); }, [setFont]);
  const onFontShinMyungjoNeue = useCallback(() => { setFont('ShinMyungjoNeue'); }, [setFont]);
  const onFontShobhika = useCallback(() => { setFont('Shobhika'); }, [setFont]);
  const onFontShonarBangla = useCallback(() => { setFont('ShonarBangla'); }, [setFont]);
  const onFontShreeDevanagari714 = useCallback(() => { setFont('ShreeDevanagari714'); }, [setFont]);
  const onFontShruti = useCallback(() => { setFont('Shruti'); }, [setFont]);
  const onFontSignPainter = useCallback(() => { setFont('SignPainter'); }, [setFont]);
  const onFontSignPainterHouseScript = useCallback(() => { setFont('SignPainter-HouseScript'); }, [setFont]);
  const onFontSilom = useCallback(() => { setFont('Silom'); }, [setFont]);
  const onFontSimHei = useCallback(() => { setFont('SimHei'); }, [setFont]);
  const onFontSimplifiedArabic = useCallback(() => { setFont('SimplifiedArabic'); }, [setFont]);
  const onFontSimSong = useCallback(() => { setFont('SimSong'); }, [setFont]);
  const onFontSimSun = useCallback(() => { setFont('SimSun'); }, [setFont]);
  const onFontSinhalaMN = useCallback(() => { setFont('SinhalaMN'); }, [setFont]);
  const onFontSinhalaSangamMN = useCallback(() => { setFont('SinhalaSangamMN'); }, [setFont]);
  const onFontSitka = useCallback(() => { setFont('Sitka'); }, [setFont]);
  const onFontSkia = useCallback(() => { setFont('Skia'); }, [setFont]);
  const onFontSnellRoundhand = useCallback(() => { setFont('SnellRoundhand'); }, [setFont]);
  const onFontSomer = useCallback(() => { setFont('Somer'); }, [setFont]);
  const onFontSongtiSC = useCallback(() => { setFont('SongtiSC'); }, [setFont]);
  const onFontSongtiTC = useCallback(() => { setFont('SongtiTC'); }, [setFont]);
  const onFontSpotMono = useCallback(() => { setFont('SpotMono'); }, [setFont]);
  const onFontSTFangSong = useCallback(() => { setFont('STFangSong'); }, [setFont]);
  const onFontSTHeiti = useCallback(() => { setFont('STHeiti'); }, [setFont]);
  const onFontSTKaiti = useCallback(() => { setFont('STKaiti'); }, [setFont]);
  const onFontSTSong = useCallback(() => { setFont('STSong'); }, [setFont]);
  const onFontSTXihei = useCallback(() => { setFont('STXihei'); }, [setFont]);
  const onFontSTIXTwoText = useCallback(() => { setFont('STIXTwoText'); }, [setFont]);
  const onFontSTIXGeneralRegular = useCallback(() => { setFont('STIXGeneral-Regular'); }, [setFont]);
  const onFontStoneSansSemITCTT = useCallback(() => { setFont('StoneSansSemITCTT'); }, [setFont]);
  const onFontSukhumvitSetText = useCallback(() => { setFont('SukhumvitSetText'); }, [setFont]);
  const onFontSylfaen = useCallback(() => { setFont('Sylfaen'); }, [setFont]);
  const onFontSynchroLET = useCallback(() => { setFont('SynchroLET'); }, [setFont]);
  const onFontTaeGraphic = useCallback(() => { setFont('TaeGraphic'); }, [setFont]);
  const onFontTahoma = useCallback(() => { setFont('Tahoma'); }, [setFont]);
  const onFontTaipei = useCallback(() => { setFont('Taipei'); }, [setFont]);
  const onFontTamilMN = useCallback(() => { setFont('TamilMN'); }, [setFont]);
  const onFontTamilSangamMN = useCallback(() => { setFont('TamilSangamMN'); }, [setFont]);
  const onFontTechno = useCallback(() => { setFont('Techno'); }, [setFont]);
  const onFontTeluguMN = useCallback(() => { setFont('TeluguMN'); }, [setFont]);
  const onFontTeluguSangamMN = useCallback(() => { setFont('TeluguSangamMN'); }, [setFont]);
  const onFontTextile = useCallback(() => { setFont('Textile'); }, [setFont]);
  const onFontThonburi = useCallback(() => { setFont('Thonburi'); }, [setFont]);
  const onFontTimes = useCallback(() => { setFont('Times'); }, [setFont]);
  const onFontTimesCY = useCallback(() => { setFont('TimesCY'); }, [setFont]);
  const onFontTimesNewRoman = useCallback(() => { setFont('TimesNewRoman'); }, [setFont]);
  const onFontTimesRoman = useCallback(() => { setFont('TimesRoman'); }, [setFont]);
  const onFontTiroBangla = useCallback(() => { setFont('TiroBangla'); }, [setFont]);
  const onFontTiroDevanagariHindi = useCallback(() => { setFont('TiroDevanagariHindi'); }, [setFont]);
  const onFontTiroDevanagariMarathi = useCallback(() => { setFont('TiroDevanagariMarathi'); }, [setFont]);
  const onFontTiroDevanagariSanskrit = useCallback(() => { setFont('TiroDevanagariSanskrit'); }, [setFont]);
  const onFontTiroGurmukhi = useCallback(() => { setFont('TiroGurmukhi'); }, [setFont]);
  const onFontTiroHindi = useCallback(() => { setFont('TiroHindi'); }, [setFont]);
  const onFontTiroKannada = useCallback(() => { setFont('TiroKannada'); }, [setFont]);
  const onFontTiroMarathi = useCallback(() => { setFont('TiroMarathi'); }, [setFont]);
  const onFontTiroSanskrit = useCallback(() => { setFont('TiroSanskrit'); }, [setFont]);
  const onFontTiroTamil = useCallback(() => { setFont('TiroTamil'); }, [setFont]);
  const onFontTiroTelugu = useCallback(() => { setFont('TiroTelugu'); }, [setFont]);
  const onFontToppanBunkyuGothic = useCallback(() => { setFont('ToppanBunkyuGothic'); }, [setFont]);
  const onFontToppanBunkyuMincho = useCallback(() => { setFont('ToppanBunkyuMincho'); }, [setFont]);
  const onFontTraditionalArabic = useCallback(() => { setFont('TraditionalArabic'); }, [setFont]);
  const onFontTrattatello = useCallback(() => { setFont('Trattatello'); }, [setFont]);
  const onFontTrebuchetMS = useCallback(() => { setFont('TrebuchetMS'); }, [setFont]);
  const onFontTsukushiARoundGothic = useCallback(() => { setFont('TsukushiARoundGothic'); }, [setFont]);
  const onFontTsukushiBRoundGothic = useCallback(() => { setFont('TsukushiBRoundGothic'); }, [setFont]);
  const onFontTunga = useCallback(() => { setFont('Tunga'); }, [setFont]);
  const onFontTwCenMT = useCallback(() => { setFont('TwCenMT'); }, [setFont]);
  const onFontUDDigiKyokasho = useCallback(() => { setFont('UDDigiKyokasho'); }, [setFont]);
  const onFontUrduTypesetting = useCallback(() => { setFont('UrduTypesetting'); }, [setFont]);
  const onFontUtsaah = useCallback(() => { setFont('Utsaah'); }, [setFont]);
  const onFontVani = useCallback(() => { setFont('Vani'); }, [setFont]);
  const onFontVerdana = useCallback(() => { setFont('Verdana'); }, [setFont]);
  const onFontVerdanaPro = useCallback(() => { setFont('VerdanaPro'); }, [setFont]);
  const onFontVijaya = useCallback(() => { setFont('Vijaya'); }, [setFont]);
  const onFontVrinda = useCallback(() => { setFont('Vrinda'); }, [setFont]);
  const onFontWaseem = useCallback(() => { setFont('Waseem'); }, [setFont]);
  const onFontWawatiSC = useCallback(() => { setFont('WawatiSC'); }, [setFont]);
  const onFontWawatiTC = useCallback(() => { setFont('WawatiTC'); }, [setFont]);
  const onFontYaziji = useCallback(() => { setFont('Yaziji'); }, [setFont]);
  const onFontYuGothic = useCallback(() => { setFont('YuGothic'); }, [setFont]);
  const onFontYuKyokashoN = useCallback(() => { setFont('YuKyokashoN'); }, [setFont]);
  const onFontYuMincho = useCallback(() => { setFont('YuMincho'); }, [setFont]);
  const onFontYuantiSC = useCallback(() => { setFont('YuantiSC'); }, [setFont]);
  const onFontYuantiTC = useCallback(() => { setFont('YuantiTC'); }, [setFont]);
  const onFontYuppySC = useCallback(() => { setFont('YuppySC'); }, [setFont]);
  const onFontZapfChancery = useCallback(() => { setFont('ZapfChancery'); }, [setFont]);
  const onFontZapfino = useCallback(() => { setFont('Zapfino'); }, [setFont]);

  /** Identify the font currently set */
  const fontOnOrOff = useCallback((itemFont) => (font === itemFont ? 'on' : ''), [font]);

  /** Font Name display in dropdown menu */
  const itemPresentation = (itemName) => "➤" + itemName

  /** Assemble the menu item button for each font */
  const FontMenuItem = useCallback((itemName, itemClick, itemFont) => {

    const fontActive = fontOnOrOff(itemFont)
    const fontList = itemPresentation(itemName)

    console.log("FontMenuItem ran");
    
    return (
      <Menu.Item>
      {({ active }) => (
        <button  type="button" onClick={itemClick} className={`${ active ? 'menuitemhov' : 'menuitemnohov' } group menuitem ${fontActive}`}>
        {fontList}
      </button>
      )}
      </Menu.Item>
    )
  },[fontOnOrOff]);

  /** Dropdown button indication when a font is set */
  const fontDropdownOnOrOff = useMemo(() => (font === "" ? "btnAll btnRight" : "btnAll btnRight on"), [font]);

  /** Dropdown button indication of which font is set */
  const fontDropdownPresentation = useMemo(() => (font === "" ? "Set Font ⇩" : font + " ⇩"), [font]);

  /** Assemble menu items for Graphite-enabled woff and woff2 fonts provided */
  const defaultFont = useMemo(() => FontMenuItem('Default Font', onFontClear, ''), [FontMenuItem, onFontClear]);
  const akatabRW = useMemo(() => FontMenuItem('Akatab 2.000', onFontAkatabRW, 'AkatabRW'), [FontMenuItem, onFontAkatabRW]);
  const alkalamiRW = useMemo(() => FontMenuItem('Alkalami 1.200', onFontAlkalamiRW, 'AlkalamiRW'), [FontMenuItem, onFontAlkalamiRW]);
  const alkalamiLW = useMemo(() => FontMenuItem('Alkalami Light 1.200', onFontAlkalamiLW, 'AlkalamiLW'), [FontMenuItem, onFontAlkalamiLW]);
  const andikaRW = useMemo(() => FontMenuItem('Andika 6.101', onFontAndikaRW, 'AndikaRW'), [FontMenuItem, onFontAndikaRW]);
  const awamiNastaliqRW = useMemo(() => FontMenuItem('Awami Nastaliq 2.200', onFontAwamiNastaliqRW, 'AwamiNastaliqRW'), [FontMenuItem, onFontAwamiNastaliqRW]);
  const gentiumPlusRW = useMemo(() => FontMenuItem('Gentium Plus 6.101', onFontGentiumPlusRW, 'GentiumPlusRW'), [FontMenuItem, onFontGentiumPlusRW]);
  const harmattanW = useMemo(() => FontMenuItem('Harmattan 2.000', onFontHarmattanW, 'HarmattanW'), [FontMenuItem, onFontHarmattanW]);
  const lateefRW = useMemo(() => FontMenuItem('LateefGR 1.200', onFontLateefRW, 'LateefRW'), [FontMenuItem, onFontLateefRW]);
  const mingzatW = useMemo(() => FontMenuItem('Mingzat 1.000', onFontMingzatW, 'MingzatW'), [FontMenuItem, onFontMingzatW]);
  const narnoorW = useMemo(() => FontMenuItem('Narnoor 1.000', onFontNarnoorW, 'NarnoorW'), [FontMenuItem, onFontNarnoorW]);
  const padaukRW = useMemo(() => FontMenuItem('Padauk 5.000', onFontPadaukRW, 'PadaukRW'), [FontMenuItem, onFontPadaukRW]);
  const scheherazadeRW = useMemo(() => FontMenuItem('Scheherazade New 3.300', onFontScheherazadeRW, 'AScheherazadeRW'), [FontMenuItem, onFontScheherazadeRW]);
  const tagmukayRW = useMemo(() => FontMenuItem('Tagmukay 2.000', onFontTagmukayRW, 'TagmukayRW'), [FontMenuItem, onFontTagmukayRW]);
  const taiHeritageProRW = useMemo(() => FontMenuItem('TaiHeritagePro 2.600', onFontTaiHeritageProRW, 'TaiHeritageProRW'), [FontMenuItem, onFontTaiHeritageProRW]);
  
  /** Assemble menu items for Graphite-enabled fonts locally detected */
  const AbyssinicaSIL = useMemo(() => FontMenuItem('Abyssinica SIL', onFontAbyssinicaSIL, 'AbyssinicaSIL'), [FontMenuItem, onFontAbyssinicaSIL]);
  const Akatab = useMemo(() => FontMenuItem('Akatab', onFontAkatab, 'Akatab'), [FontMenuItem, onFontAkatab]);
  const Alkalami = useMemo(() => FontMenuItem('Alkalami', onFontAlkalami, 'Alkalami'), [FontMenuItem, onFontAlkalami]);
  const AlkalamiLight = useMemo(() => FontMenuItem('Alkalami Light', onFontAlkalamiLight, 'AlkalamiLight'), [FontMenuItem, onFontAlkalamiLight]);
  const Andika = useMemo(() => FontMenuItem('Andika', onFontAndika, 'Andika'), [FontMenuItem, onFontAndika]);
  const AnnapurnaSIL = useMemo(() => FontMenuItem('Annapurna SIL', onFontAnnapurnaSIL, 'AnnapurnaSIL'), [FontMenuItem, onFontAnnapurnaSIL]);
  const ApparatusSIL = useMemo(() => FontMenuItem('Apparatus SIL', onFontApparatusSIL, 'ApparatusSIL'), [FontMenuItem, onFontApparatusSIL]);
  const AwamiNastaliq = useMemo(() => FontMenuItem('Awami Nastaliq', onFontAwamiNastaliq, 'AwamiNastaliq'), [FontMenuItem, onFontAwamiNastaliq]);
  const CharisSIL = useMemo(() => FontMenuItem('Charis SIL', onFontCharisSIL, 'CharisSIL'), [FontMenuItem, onFontCharisSIL]);
  const DaiBannaSILBook = useMemo(() => FontMenuItem('Dai Banna SIL Book', onFontDaiBannaSILBook, 'DaiBannaSILBook'), [FontMenuItem, onFontDaiBannaSILBook]);
  const DaiBannaSILLight = useMemo(() => FontMenuItem('Dai Banna SIL Light', onFontDaiBannaSILLight, 'DaiBannaSILLight'), [FontMenuItem, onFontDaiBannaSILLight]);
  const DoulosSIL = useMemo(() => FontMenuItem('Doulos SIL', onFontDoulosSIL, 'DoulosSIL'), [FontMenuItem, onFontDoulosSIL]);
  const DoulosSILCipher = useMemo(() => FontMenuItem('Doulos SIL Cipher', onFontDoulosSILCipher, 'DoulosSILCipher'), [FontMenuItem, onFontDoulosSILCipher]);
  const EzraSIL = useMemo(() => FontMenuItem('Ezra SIL', onFontEzraSIL, 'EzraSIL'), [FontMenuItem, onFontEzraSIL]);
  const EzraSILSR = useMemo(() => FontMenuItem('Ezra SIL SR', onFontEzraSILSR, 'EzraSILSR'), [FontMenuItem, onFontEzraSILSR]);
  const GalatiaSIL = useMemo(() => FontMenuItem('Galatia SIL', onFontGalatiaSIL, 'GalatiaSIL'), [FontMenuItem, onFontGalatiaSIL]);
  const GentiumPlus = useMemo(() => FontMenuItem('Gentium Plus', onFontGentiumPlus, 'GentiumPlus'), [FontMenuItem, onFontGentiumPlus]);
  const Harmattan = useMemo(() => FontMenuItem('Harmattan', onFontHarmattan, 'Harmattan'), [FontMenuItem, onFontHarmattan]);
  const KhmerBusra = useMemo(() => FontMenuItem('Khmer Busra', onFontKhmerBusra, 'KhmerBusra'), [FontMenuItem, onFontKhmerBusra]);
  const KhmerMondulkiri = useMemo(() => FontMenuItem('Khmer Mondulkiri', onFontKhmerMondulkiri, 'KhmerMondulkiri'), [FontMenuItem, onFontKhmerMondulkiri]);
  const LateefGR = useMemo(() => FontMenuItem('LateefGR', onFontLateefGR, 'LateefGR'), [FontMenuItem, onFontLateefGR]);
  const Mingzat = useMemo(() => FontMenuItem('Mingzat', onFontMingzat, 'Mingzat'), [FontMenuItem, onFontMingzat]);
  const NamdhinggoSIL = useMemo(() => FontMenuItem('Namdhinggo SIL', onFontNamdhinggoSIL, 'NamdhinggoSIL'), [FontMenuItem, onFontNamdhinggoSIL]);
  const Narnoor = useMemo(() => FontMenuItem('Narnoor', onFontNarnoor, 'Narnoor'), [FontMenuItem, onFontNarnoor]);
  const NuosuSIL = useMemo(() => FontMenuItem('Nuosu SIL', onFontNuosuSIL, 'NuosuSIL'), [FontMenuItem, onFontNuosuSIL]);
  const Padauk = useMemo(() => FontMenuItem('Padauk', onFontPadauk, 'Padauk'), [FontMenuItem, onFontPadauk]);
  const ScheherazadeNew = useMemo(() => FontMenuItem('Scheherazade New', onFontScheherazadeNew, 'ScheherazadeNew'), [FontMenuItem, onFontScheherazadeNew]);
  const Shimenkan = useMemo(() => FontMenuItem('Shimenkan', onFontShimenkan, 'Shimenkan'), [FontMenuItem, onFontShimenkan]);
  const SophiaNubian = useMemo(() => FontMenuItem('Sophia Nubian', onFontSophiaNubian, 'SophiaNubian'), [FontMenuItem, onFontSophiaNubian]);
  const Tagmukay = useMemo(() => FontMenuItem('Tagmukay', onFontTagmukay, 'Tagmukay'), [FontMenuItem, onFontTagmukay]);
  const TaiHeritagePro = useMemo(() => FontMenuItem('Tai Heritage Pro', onFontTaiHeritagePro, 'TaiHeritagePro'), [FontMenuItem, onFontTaiHeritagePro]);

  /** Assemble menu items Windows and MacOS fonts locally detected */
  const AdelleSansDevanagari = useMemo(() => FontMenuItem('Adelle Sans Devanagari', onFontAdelleSansDevanagari, 'AdelleSansDevanagari'), [FontMenuItem, onFontAdelleSansDevanagari]);
  const Aharoni = useMemo(() => FontMenuItem('Aharoni', onFontAharoni, 'Aharoni'), [FontMenuItem, onFontAharoni]);
  const AlBayan = useMemo(() => FontMenuItem('Al Bayan', onFontAlBayan, 'AlBayan'), [FontMenuItem, onFontAlBayan]);
  const AlFirat = useMemo(() => FontMenuItem('Al Firat', onFontAlFirat, 'AlFirat'), [FontMenuItem, onFontAlFirat]);
  const AlKhalil = useMemo(() => FontMenuItem('Al Khalil', onFontAlKhalil, 'AlKhalil'), [FontMenuItem, onFontAlKhalil]);
  const AlNile = useMemo(() => FontMenuItem('Al Nile', onFontAlNile, 'AlNile'), [FontMenuItem, onFontAlNile]);
  const AlRafidain = useMemo(() => FontMenuItem('Al Rafidain', onFontAlRafidain, 'AlRafidain'), [FontMenuItem, onFontAlRafidain]);
  const AlRafidainAlFanni = useMemo(() => FontMenuItem('Al Rafidain Al Fanni', onFontAlRafidainAlFanni, 'AlRafidainAlFanni'), [FontMenuItem, onFontAlRafidainAlFanni]);
  const AlTarikh = useMemo(() => FontMenuItem('Al Tarikh', onFontAlTarikh, 'AlTarikh'), [FontMenuItem, onFontAlTarikh]);
  const Aldhabi = useMemo(() => FontMenuItem('Aldhabi', onFontAldhabi, 'Aldhabi'), [FontMenuItem, onFontAldhabi]);
  const Algiers = useMemo(() => FontMenuItem('Algiers', onFontAlgiers, 'Algiers'), [FontMenuItem, onFontAlgiers]);
  const AmericanTypewriter = useMemo(() => FontMenuItem('American Typewriter', onFontAmericanTypewriter, 'AmericanTypewriter'), [FontMenuItem, onFontAmericanTypewriter]);
  const AndaleMono = useMemo(() => FontMenuItem('Andalé Mono', onFontAndaleMono, 'AndaleMono'), [FontMenuItem, onFontAndaleMono]);
  const Andalus = useMemo(() => FontMenuItem('Andalus', onFontAndalus, 'Andalus'), [FontMenuItem, onFontAndalus]);
  const AngsanaNew = useMemo(() => FontMenuItem('Angsana New', onFontAngsanaNew, 'AngsanaNew'), [FontMenuItem, onFontAngsanaNew]);
  const AngsanaUPC = useMemo(() => FontMenuItem('AngsanaUPC', onFontAngsanaUPC, 'AngsanaUPC'), [FontMenuItem, onFontAngsanaUPC]);
  const AnnaiMN = useMemo(() => FontMenuItem('Annai MN', onFontAnnaiMN, 'AnnaiMN'), [FontMenuItem, onFontAnnaiMN]);
  const Aparajita = useMemo(() => FontMenuItem('Aparajita', onFontAparajita, 'Aparajita'), [FontMenuItem, onFontAparajita]);
  const AppleBraille = useMemo(() => FontMenuItem('Apple Braille', onFontAppleBraille, 'AppleBraille'), [FontMenuItem, onFontAppleBraille]);
  const AppleCasual = useMemo(() => FontMenuItem('Apple Casual', onFontAppleCasual, 'AppleCasual'), [FontMenuItem, onFontAppleCasual]);
  const AppleChancery = useMemo(() => FontMenuItem('Apple Chancery', onFontAppleChancery, 'AppleChancery'), [FontMenuItem, onFontAppleChancery]);
  const AppleGaramond = useMemo(() => FontMenuItem('Apple Garamond', onFontAppleGaramond, 'AppleGaramond'), [FontMenuItem, onFontAppleGaramond]);
  const AppleGothic = useMemo(() => FontMenuItem('Apple Gothic', onFontAppleGothic, 'AppleGothic'), [FontMenuItem, onFontAppleGothic]);
  const AppleLiGothic = useMemo(() => FontMenuItem('Apple LiGothic', onFontAppleLiGothic, 'AppleLiGothic'), [FontMenuItem, onFontAppleLiGothic]);
  const AppleLiSung = useMemo(() => FontMenuItem('Apple LiSung', onFontAppleLiSung, 'AppleLiSung'), [FontMenuItem, onFontAppleLiSung]);
  const AppleMyungjo = useMemo(() => FontMenuItem('Apple Myungjo', onFontAppleMyungjo, 'AppleMyungjo'), [FontMenuItem, onFontAppleMyungjo]);
  const AppleSDGothicNeo = useMemo(() => FontMenuItem('Apple SD Gothic Neo', onFontAppleSDGothicNeo, 'AppleSDGothicNeo'), [FontMenuItem, onFontAppleSDGothicNeo]);
  const AquaKana = useMemo(() => FontMenuItem('AquaKana', onFontAquaKana, 'AquaKana'), [FontMenuItem, onFontAquaKana]);
  const ArabicTypesetting = useMemo(() => FontMenuItem('Arabic Typesetting', onFontArabicTypesetting, 'ArabicTypesetting'), [FontMenuItem, onFontArabicTypesetting]);
  const Arial = useMemo(() => FontMenuItem('Arial', onFontArial, 'Arial'), [FontMenuItem, onFontArial]);
  const ArialHebrew = useMemo(() => FontMenuItem('Arial Hebrew', onFontArialHebrew, 'ArialHebrew'), [FontMenuItem, onFontArialHebrew]);
  const ArialHebrewScholar = useMemo(() => FontMenuItem('Arial Hebrew Scholar', onFontArialHebrewScholar, 'ArialHebrewScholar'), [FontMenuItem, onFontArialHebrewScholar]);
  const ArialNarrow = useMemo(() => FontMenuItem('Arial Narrow', onFontArialNarrow, 'ArialNarrow'), [FontMenuItem, onFontArialNarrow]);
  const ArialNova = useMemo(() => FontMenuItem('Arial Nova', onFontArialNova, 'ArialNova'), [FontMenuItem, onFontArialNova]);
  const ArialUnicodeMS = useMemo(() => FontMenuItem('Arial Unicode MS', onFontArialUnicodeMS, 'ArialUnicodeMS'), [FontMenuItem, onFontArialUnicodeMS]);
  const Avenir = useMemo(() => FontMenuItem('Avenir', onFontAvenir, 'Avenir'), [FontMenuItem, onFontAvenir]);
  const Ayuthaya = useMemo(() => FontMenuItem('Ayuthaya', onFontAyuthaya, 'Ayuthaya'), [FontMenuItem, onFontAyuthaya]);
  const Baghdad = useMemo(() => FontMenuItem('Baghdad', onFontBaghdad, 'Baghdad'), [FontMenuItem, onFontBaghdad]);
  const Bahnschrift = useMemo(() => FontMenuItem('Bahnschrift', onFontBahnschrift, 'Bahnschrift'), [FontMenuItem, onFontBahnschrift]);
  const Baloo = useMemo(() => FontMenuItem('Baloo', onFontBaloo, 'Baloo'), [FontMenuItem, onFontBaloo]);
  const BalooBhai = useMemo(() => FontMenuItem('Baloo Bhai', onFontBalooBhai, 'BalooBhai'), [FontMenuItem, onFontBalooBhai]);
  const BalooBhaijaan = useMemo(() => FontMenuItem('Baloo Bhaijaan', onFontBalooBhaijaan, 'BalooBhaijaan'), [FontMenuItem, onFontBalooBhaijaan]);
  const BalooBhaina = useMemo(() => FontMenuItem('Baloo Bhaina', onFontBalooBhaina, 'BalooBhaina'), [FontMenuItem, onFontBalooBhaina]);
  const BalooChettan = useMemo(() => FontMenuItem('Baloo Chettan', onFontBalooChettan, 'BalooChettan'), [FontMenuItem, onFontBalooChettan]);
  const BalooDa = useMemo(() => FontMenuItem('Baloo Da', onFontBalooDa, 'BalooDa'), [FontMenuItem, onFontBalooDa]);
  const BalooPaaji = useMemo(() => FontMenuItem('Baloo Paaji', onFontBalooPaaji, 'BalooPaaji'), [FontMenuItem, onFontBalooPaaji]);
  const BalooTamma = useMemo(() => FontMenuItem('Baloo Tamma', onFontBalooTamma, 'BalooTamma'), [FontMenuItem, onFontBalooTamma]);
  const BalooTammudu = useMemo(() => FontMenuItem('Baloo Tammudu', onFontBalooTammudu, 'BalooTammudu'), [FontMenuItem, onFontBalooTammudu]);
  const BalooThambi = useMemo(() => FontMenuItem('Baloo Thambi', onFontBalooThambi, 'BalooThambi'), [FontMenuItem, onFontBalooThambi]);
  const BanglaMN = useMemo(() => FontMenuItem('Bangla MN', onFontBanglaMN, 'BanglaMN'), [FontMenuItem, onFontBanglaMN]);
  const BanglaSangamMN = useMemo(() => FontMenuItem('Bangla Sangam MN', onFontBanglaSangamMN, 'BanglaSangamMN'), [FontMenuItem, onFontBanglaSangamMN]);
  const BaoliSC = useMemo(() => FontMenuItem('Baoli SC', onFontBaoliSC, 'BaoliSC'), [FontMenuItem, onFontBaoliSC]);
  const BaoliTC = useMemo(() => FontMenuItem('Baoli TC', onFontBaoliTC, 'BaoliTC'), [FontMenuItem, onFontBaoliTC]);
  const Baskerville = useMemo(() => FontMenuItem('Baskerville', onFontBaskerville, 'Baskerville'), [FontMenuItem, onFontBaskerville]);
  const Basra = useMemo(() => FontMenuItem('Basra', onFontBasra, 'Basra'), [FontMenuItem, onFontBasra]);
  const Batang = useMemo(() => FontMenuItem('Batang', onFontBatang, 'Batang'), [FontMenuItem, onFontBatang]);
  const Beijing = useMemo(() => FontMenuItem('Beijing', onFontBeijing, 'Beijing'), [FontMenuItem, onFontBeijing]);
  const Beirut = useMemo(() => FontMenuItem('Beirut', onFontBeirut, 'Beirut'), [FontMenuItem, onFontBeirut]);
  const BiauKai = useMemo(() => FontMenuItem('BiauKai', onFontBiauKai, 'BiauKai'), [FontMenuItem, onFontBiauKai]);
  const BigCaslon = useMemo(() => FontMenuItem('Big Caslon', onFontBigCaslon, 'BigCaslon'), [FontMenuItem, onFontBigCaslon]);
  const BIZUDGothic = useMemo(() => FontMenuItem('BIZ UDGothic', onFontBIZUDGothic, 'BIZUDGothic'), [FontMenuItem, onFontBIZUDGothic]);
  const BIZUDMincho = useMemo(() => FontMenuItem('BIZ UDMincho', onFontBIZUDMincho, 'BIZUDMincho'), [FontMenuItem, onFontBIZUDMincho]);
  const Bodoni72 = useMemo(() => FontMenuItem('Bodoni 72', onFontBodoni72, 'Bodoni72'), [FontMenuItem, onFontBodoni72]);
  const Braganza = useMemo(() => FontMenuItem('Braganza', onFontBraganza, 'Braganza'), [FontMenuItem, onFontBraganza]);
  const BrowalliaNew = useMemo(() => FontMenuItem('Browallia New', onFontBrowalliaNew, 'BrowalliaNew'), [FontMenuItem, onFontBrowalliaNew]);
  const BrowalliaUPC = useMemo(() => FontMenuItem('BrowalliaUPC', onFontBrowalliaUPC, 'BrowalliaUPC'), [FontMenuItem, onFontBrowalliaUPC]);
  const BrushScript = useMemo(() => FontMenuItem('Brush Script', onFontBrushScript, 'BrushScript'), [FontMenuItem, onFontBrushScript]);
  const Calibri = useMemo(() => FontMenuItem('Calibri', onFontCalibri, 'Calibri'), [FontMenuItem, onFontCalibri]);
  const CambayDevanagari = useMemo(() => FontMenuItem('Cambay Devanagari', onFontCambayDevanagari, 'CambayDevanagari'), [FontMenuItem, onFontCambayDevanagari]);
  const Cambria = useMemo(() => FontMenuItem('Cambria', onFontCambria, 'Cambria'), [FontMenuItem, onFontCambria]);
  const Candara = useMemo(() => FontMenuItem('Candara', onFontCandara, 'Candara'), [FontMenuItem, onFontCandara]);
  const Canela = useMemo(() => FontMenuItem('Canela', onFontCanela, 'Canela'), [FontMenuItem, onFontCanela]);
  const CanelaDeck = useMemo(() => FontMenuItem('Canela Deck', onFontCanelaDeck, 'CanelaDeck'), [FontMenuItem, onFontCanelaDeck]);
  const Capitals = useMemo(() => FontMenuItem('Capitals', onFontCapitals, 'Capitals'), [FontMenuItem, onFontCapitals]);
  const CenturyGothic = useMemo(() => FontMenuItem('Century Gothic', onFontCenturyGothic, 'CenturyGothic'), [FontMenuItem, onFontCenturyGothic]);
  const CenturySchoolbook = useMemo(() => FontMenuItem('Century Schoolbook', onFontCenturySchoolbook, 'CenturySchoolbook'), [FontMenuItem, onFontCenturySchoolbook]);
  const Chalkboard = useMemo(() => FontMenuItem('Chalkboard', onFontChalkboard, 'Chalkboard'), [FontMenuItem, onFontChalkboard]);
  const Chalkduster = useMemo(() => FontMenuItem('Chalkduster', onFontChalkduster, 'Chalkduster'), [FontMenuItem, onFontChalkduster]);
  const Charcoal = useMemo(() => FontMenuItem('Charcoal', onFontCharcoal, 'Charcoal'), [FontMenuItem, onFontCharcoal]);
  const CharcoalCY = useMemo(() => FontMenuItem('Charcoal CY', onFontCharcoalCY, 'CharcoalCY'), [FontMenuItem, onFontCharcoalCY]);
  const CharterRoman = useMemo(() => FontMenuItem('Charter Roman', onFontCharterRoman, 'CharterRoman'), [FontMenuItem, onFontCharterRoman]);
  const Chicago = useMemo(() => FontMenuItem('Chicago', onFontChicago, 'Chicago'), [FontMenuItem, onFontChicago]);
  const Cochin = useMemo(() => FontMenuItem('Cochin', onFontCochin, 'Cochin'), [FontMenuItem, onFontCochin]);
  const ComicSans = useMemo(() => FontMenuItem('Comic Sans', onFontComicSans, 'ComicSans'), [FontMenuItem, onFontComicSans]);
  const ComicSansMS = useMemo(() => FontMenuItem('Comic Sans MS', onFontComicSansMS, 'ComicSansMS'), [FontMenuItem, onFontComicSansMS]);
  const Consolas = useMemo(() => FontMenuItem('Consolas', onFontConsolas, 'Consolas'), [FontMenuItem, onFontConsolas]);
  const Constantia = useMemo(() => FontMenuItem('Constantia', onFontConstantia, 'Constantia'), [FontMenuItem, onFontConstantia]);
  const Cooper = useMemo(() => FontMenuItem('Cooper', onFontCooper, 'Cooper'), [FontMenuItem, onFontCooper]);
  const Copperplate = useMemo(() => FontMenuItem('Copperplate', onFontCopperplate, 'Copperplate'), [FontMenuItem, onFontCopperplate]);
  const Corbel = useMemo(() => FontMenuItem('Corbel', onFontCorbel, 'Corbel'), [FontMenuItem, onFontCorbel]);
  const CordiaNew = useMemo(() => FontMenuItem('Cordia New', onFontCordiaNew, 'CordiaNew'), [FontMenuItem, onFontCordiaNew]);
  const CordiaUPC = useMemo(() => FontMenuItem('CordiaUPC', onFontCordiaUPC, 'CordiaUPC'), [FontMenuItem, onFontCordiaUPC]);
  const CorsivaHebrew = useMemo(() => FontMenuItem('Corsiva Hebrew', onFontCorsivaHebrew, 'CorsivaHebrew'), [FontMenuItem, onFontCorsivaHebrew]);
  const Courier = useMemo(() => FontMenuItem('Courier', onFontCourier, 'Courier'), [FontMenuItem, onFontCourier]);
  const CourierNew = useMemo(() => FontMenuItem('Courier New', onFontCourierNew, 'CourierNew'), [FontMenuItem, onFontCourierNew]);
  const Damascus = useMemo(() => FontMenuItem('Damascus', onFontDamascus, 'Damascus'), [FontMenuItem, onFontDamascus]);
  const DaunPenh = useMemo(() => FontMenuItem('DaunPenh', onFontDaunPenh, 'DaunPenh'), [FontMenuItem, onFontDaunPenh]);
  const David = useMemo(() => FontMenuItem('David', onFontDavid, 'David'), [FontMenuItem, onFontDavid]);
  const DearJoeFour = useMemo(() => FontMenuItem('Dear Joe Four', onFontDearJoeFour, 'DearJoeFour'), [FontMenuItem, onFontDearJoeFour]);
  const DecoTypeNaskh = useMemo(() => FontMenuItem('DecoType Naskh', onFontDecoTypeNaskh, 'DecoTypeNaskh'), [FontMenuItem, onFontDecoTypeNaskh]);
  const DengXian = useMemo(() => FontMenuItem('DengXian', onFontDengXian, 'DengXian'), [FontMenuItem, onFontDengXian]);
  const Devanagari = useMemo(() => FontMenuItem('Devanagari', onFontDevanagari, 'Devanagari'), [FontMenuItem, onFontDevanagari]);
  const DevanagariMT = useMemo(() => FontMenuItem('Devanagari MT', onFontDevanagariMT, 'DevanagariMT'), [FontMenuItem, onFontDevanagariMT]);
  const DevanagariSangamMN = useMemo(() => FontMenuItem('Devanagari Sangam MN', onFontDevanagariSangamMN, 'DevanagariSangamMN'), [FontMenuItem, onFontDevanagariSangamMN]);
  const DFKaiSB = useMemo(() => FontMenuItem('DFKai-SB', onFontDFKaiSB, 'DFKaiSB'), [FontMenuItem, onFontDFKaiSB]);
  const Didot = useMemo(() => FontMenuItem('Didot', onFontDidot, 'Didot'), [FontMenuItem, onFontDidot]);
  const Dijla = useMemo(() => FontMenuItem('Dijla', onFontDijla, 'Dijla'), [FontMenuItem, onFontDijla]);
  const DilleniaUPC = useMemo(() => FontMenuItem('DilleniaUPC', onFontDilleniaUPC, 'DilleniaUPC'), [FontMenuItem, onFontDilleniaUPC]);
  const DiwanKufi = useMemo(() => FontMenuItem('Diwan Kufi', onFontDiwanKufi, 'DiwanKufi'), [FontMenuItem, onFontDiwanKufi]);
  const DiwanThuluth = useMemo(() => FontMenuItem('Diwan Thuluth', onFontDiwanThuluth, 'DiwanThuluth'), [FontMenuItem, onFontDiwanThuluth]);
  const DokChampa = useMemo(() => FontMenuItem('DokChampa', onFontDokChampa, 'DokChampa'), [FontMenuItem, onFontDokChampa]);
  const DomaineDisplay = useMemo(() => FontMenuItem('Domaine Display', onFontDomaineDisplay, 'DomaineDisplay'), [FontMenuItem, onFontDomaineDisplay]);
  const Dotum = useMemo(() => FontMenuItem('Dotum', onFontDotum, 'Dotum'), [FontMenuItem, onFontDotum]);
  const Ebrima = useMemo(() => FontMenuItem('Ebrima', onFontEbrima, 'Ebrima'), [FontMenuItem, onFontEbrima]);
  const EstrangeloEdessa = useMemo(() => FontMenuItem('Estrangelo Edessa', onFontEstrangeloEdessa, 'EstrangeloEdessa'), [FontMenuItem, onFontEstrangeloEdessa]);
  const EucrosiaUPC = useMemo(() => FontMenuItem('EucrosiaUPC', onFontEucrosiaUPC, 'EucrosiaUPC'), [FontMenuItem, onFontEucrosiaUPC]);
  const Euphemia = useMemo(() => FontMenuItem('Euphemia', onFontEuphemia, 'Euphemia'), [FontMenuItem, onFontEuphemia]);
  const EuphemiaUCAS = useMemo(() => FontMenuItem('Euphemia UCAS', onFontEuphemiaUCAS, 'EuphemiaUCAS'), [FontMenuItem, onFontEuphemiaUCAS]);
  const FangSong = useMemo(() => FontMenuItem('FangSong', onFontFangSong, 'FangSong'), [FontMenuItem, onFontFangSong]);
  const Farah = useMemo(() => FontMenuItem('Farah', onFontFarah, 'Farah'), [FontMenuItem, onFontFarah]);
  const Farisi = useMemo(() => FontMenuItem('Farisi', onFontFarisi, 'Farisi'), [FontMenuItem, onFontFarisi]);
  const ForgottenFuturist = useMemo(() => FontMenuItem('Forgotten Futurist', onFontForgottenFuturist, 'ForgottenFuturist'), [FontMenuItem, onFontForgottenFuturist]);
  const FoundersGrotesk = useMemo(() => FontMenuItem('Founders Grotesk', onFontFoundersGrotesk, 'FoundersGrotesk'), [FontMenuItem, onFontFoundersGrotesk]);
  const FranklinGothic = useMemo(() => FontMenuItem('Franklin Gothic', onFontFranklinGothic, 'FranklinGothic'), [FontMenuItem, onFontFranklinGothic]);
  const FrankRuehl = useMemo(() => FontMenuItem('FrankRuehl', onFontFrankRuehl, 'FrankRuehl'), [FontMenuItem, onFontFrankRuehl]);
  const FreesiaUPC = useMemo(() => FontMenuItem('FreesiaUPC', onFontFreesiaUPC, 'FreesiaUPC'), [FontMenuItem, onFontFreesiaUPC]);
  const Futura = useMemo(() => FontMenuItem('Futura', onFontFutura, 'Futura'), [FontMenuItem, onFontFutura]);
  const Gabriola = useMemo(() => FontMenuItem('Gabriola', onFontGabriola, 'Gabriola'), [FontMenuItem, onFontGabriola]);
  const Gadget = useMemo(() => FontMenuItem('Gadget', onFontGadget, 'Gadget'), [FontMenuItem, onFontGadget]);
  const Gadugi = useMemo(() => FontMenuItem('Gadugi', onFontGadugi, 'Gadugi'), [FontMenuItem, onFontGadugi]);
  const Galvji = useMemo(() => FontMenuItem('Galvji', onFontGalvji, 'Galvji'), [FontMenuItem, onFontGalvji]);
  const Garamond = useMemo(() => FontMenuItem('Garamond', onFontGaramond, 'Garamond'), [FontMenuItem, onFontGaramond]);
  const Gautami = useMemo(() => FontMenuItem('Gautami', onFontGautami, 'Gautami'), [FontMenuItem, onFontGautami]);
  const GB18030Bitmap = useMemo(() => FontMenuItem('GB18030 Bitmap', onFontGB18030Bitmap, 'GB18030Bitmap'), [FontMenuItem, onFontGB18030Bitmap]);
  const GeezaPro = useMemo(() => FontMenuItem('Geeza Pro', onFontGeezaPro, 'GeezaPro'), [FontMenuItem, onFontGeezaPro]);
  const Geezah = useMemo(() => FontMenuItem('Geezah', onFontGeezah, 'Geezah'), [FontMenuItem, onFontGeezah]);
  const Geneva = useMemo(() => FontMenuItem('Geneva', onFontGeneva, 'Geneva'), [FontMenuItem, onFontGeneva]);
  const GenevaCY = useMemo(() => FontMenuItem('Geneva CY', onFontGenevaCY, 'GenevaCY'), [FontMenuItem, onFontGenevaCY]);
  const Georgia = useMemo(() => FontMenuItem('Georgia', onFontGeorgia, 'Georgia'), [FontMenuItem, onFontGeorgia]);
  const GeorgiaPro = useMemo(() => FontMenuItem('Georgia Pro', onFontGeorgiaPro, 'GeorgiaPro'), [FontMenuItem, onFontGeorgiaPro]);
  const GillSans = useMemo(() => FontMenuItem('Gill Sans', onFontGillSans, 'GillSans'), [FontMenuItem, onFontGillSans]);
  const GillSansNova = useMemo(() => FontMenuItem('Gill Sans Nova', onFontGillSansNova, 'GillSansNova'), [FontMenuItem, onFontGillSansNova]);
  const Gisha = useMemo(() => FontMenuItem('Gisha', onFontGisha, 'Gisha'), [FontMenuItem, onFontGisha]);
  const Gotu = useMemo(() => FontMenuItem('Gotu', onFontGotu, 'Gotu'), [FontMenuItem, onFontGotu]);
  const Graphik = useMemo(() => FontMenuItem('Graphik', onFontGraphik, 'Graphik'), [FontMenuItem, onFontGraphik]);
  const Gujarati = useMemo(() => FontMenuItem('Gujarati', onFontGujarati, 'Gujarati'), [FontMenuItem, onFontGujarati]);
  const GujaratiMT = useMemo(() => FontMenuItem('Gujarati MT', onFontGujaratiMT, 'GujaratiMT'), [FontMenuItem, onFontGujaratiMT]);
  const GujaratiSangamMN = useMemo(() => FontMenuItem('Gujarati Sangam MN', onFontGujaratiSangamMN, 'GujaratiSangamMN'), [FontMenuItem, onFontGujaratiSangamMN]);
  const Gulim = useMemo(() => FontMenuItem('Gulim', onFontGulim, 'Gulim'), [FontMenuItem, onFontGulim]);
  const GungSeoche = useMemo(() => FontMenuItem('Gung Seoche', onFontGungSeoche, 'GungSeoche'), [FontMenuItem, onFontGungSeoche]);
  const GungSeo = useMemo(() => FontMenuItem('GungSeo', onFontGungSeo, 'GungSeo'), [FontMenuItem, onFontGungSeo]);
  const Gungsuh = useMemo(() => FontMenuItem('Gungsuh', onFontGungsuh, 'Gungsuh'), [FontMenuItem, onFontGungsuh]);
  const Gurmukhi = useMemo(() => FontMenuItem('Gurmukhi', onFontGurmukhi, 'Gurmukhi'), [FontMenuItem, onFontGurmukhi]);
  const GurmukhiMN = useMemo(() => FontMenuItem('Gurmukhi MN', onFontGurmukhiMN, 'GurmukhiMN'), [FontMenuItem, onFontGurmukhiMN]);
  const GurmukhiMT = useMemo(() => FontMenuItem('Gurmukhi MT', onFontGurmukhiMT, 'GurmukhiMT'), [FontMenuItem, onFontGurmukhiMT]);
  const GurmukhiSangamMN = useMemo(() => FontMenuItem('Gurmukhi Sangam MN', onFontGurmukhiSangamMN, 'GurmukhiSangamMN'), [FontMenuItem, onFontGurmukhiSangamMN]);
  const Hangangche = useMemo(() => FontMenuItem('Hangangche', onFontHangangche, 'Hangangche'), [FontMenuItem, onFontHangangche]);
  const HannotateSC = useMemo(() => FontMenuItem('Hannotate SC', onFontHannotateSC, 'HannotateSC'), [FontMenuItem, onFontHannotateSC]);
  const HannotateTC = useMemo(() => FontMenuItem('Hannotate TC', onFontHannotateTC, 'HannotateTC'), [FontMenuItem, onFontHannotateTC]);
  const HanziPenSC = useMemo(() => FontMenuItem('HanziPen SC', onFontHanziPenSC, 'HanziPenSC'), [FontMenuItem, onFontHanziPenSC]);
  const HanziPenTC = useMemo(() => FontMenuItem('HanziPen TC', onFontHanziPenTC, 'HanziPenTC'), [FontMenuItem, onFontHanziPenTC]);
  const HeadlineA = useMemo(() => FontMenuItem('HeadlineA', onFontHeadlineA, 'HeadlineA'), [FontMenuItem, onFontHeadlineA]);
  const Hei = useMemo(() => FontMenuItem('Hei', onFontHei, 'Hei'), [FontMenuItem, onFontHei]);
  const HeitiSC = useMemo(() => FontMenuItem('Heiti SC', onFontHeitiSC, 'HeitiSC'), [FontMenuItem, onFontHeitiSC]);
  const Helvetica = useMemo(() => FontMenuItem('Helvetica', onFontHelvetica, 'Helvetica'), [FontMenuItem, onFontHelvetica]);
  const HelveticaCY = useMemo(() => FontMenuItem('Helvetica CY', onFontHelveticaCY, 'HelveticaCY'), [FontMenuItem, onFontHelveticaCY]);
  const HelveticaNeue = useMemo(() => FontMenuItem('Helvetica Neue', onFontHelveticaNeue, 'HelveticaNeue'), [FontMenuItem, onFontHelveticaNeue]);
  const Herculanum = useMemo(() => FontMenuItem('Herculanum', onFontHerculanum, 'Herculanum'), [FontMenuItem, onFontHerculanum]);
  const HiraginoKakuGothic = useMemo(() => FontMenuItem('Hiragino Kaku Gothic', onFontHiraginoKakuGothic, 'HiraginoKakuGothic'), [FontMenuItem, onFontHiraginoKakuGothic]);
  const HiraginoKakuGothicPro = useMemo(() => FontMenuItem('Hiragino Kaku Gothic Pro', onFontHiraginoKakuGothicPro, 'HiraginoKakuGothicPro'), [FontMenuItem, onFontHiraginoKakuGothicPro]);
  const HiraginoMaruGothicPro = useMemo(() => FontMenuItem('Hiragino Maru Gothic Pro', onFontHiraginoMaruGothicPro, 'HiraginoMaruGothicPro'), [FontMenuItem, onFontHiraginoMaruGothicPro]);
  const HiraginoMinchoPro = useMemo(() => FontMenuItem('Hiragino Mincho Pro', onFontHiraginoMinchoPro, 'HiraginoMinchoPro'), [FontMenuItem, onFontHiraginoMinchoPro]);
  const HiraginoSans = useMemo(() => FontMenuItem('Hiragino Sans', onFontHiraginoSans, 'HiraginoSans'), [FontMenuItem, onFontHiraginoSans]);
  const HoeflerText = useMemo(() => FontMenuItem('Hoefler Text', onFontHoeflerText, 'HoeflerText'), [FontMenuItem, onFontHoeflerText]);
  const HopperScript = useMemo(() => FontMenuItem('Hopper Script', onFontHopperScript, 'HopperScript'), [FontMenuItem, onFontHopperScript]);
  const Impact = useMemo(() => FontMenuItem('Impact', onFontImpact, 'Impact'), [FontMenuItem, onFontImpact]);
  const InaiMathi = useMemo(() => FontMenuItem('Inai Mathi', onFontInaiMathi, 'InaiMathi'), [FontMenuItem, onFontInaiMathi]);
  const InkFree = useMemo(() => FontMenuItem('Ink Free', onFontInkFree, 'InkFree'), [FontMenuItem, onFontInkFree]);
  const IowanOldStyleTitling = useMemo(() => FontMenuItem('Iowan Old Style Titling', onFontIowanOldStyleTitling, 'IowanOldStyleTitling'), [FontMenuItem, onFontIowanOldStyleTitling]);
  const IrisUPC = useMemo(() => FontMenuItem('IrisUPC', onFontIrisUPC, 'IrisUPC'), [FontMenuItem, onFontIrisUPC]);
  const IskoolaPota = useMemo(() => FontMenuItem('Iskoola Pota', onFontIskoolaPota, 'IskoolaPota'), [FontMenuItem, onFontIskoolaPota]);
  const ITCBodoni72 = useMemo(() => FontMenuItem('ITC Bodoni 72', onFontITCBodoni72, 'ITCBodoni72'), [FontMenuItem, onFontITCBodoni72]);
  const ITFDevanagari = useMemo(() => FontMenuItem('ITF Devanagari', onFontITFDevanagari, 'ITFDevanagari'), [FontMenuItem, onFontITFDevanagari]);
  const ITFDevanagariMarathi = useMemo(() => FontMenuItem('ITF Devanagari Marathi', onFontITFDevanagariMarathi, 'ITFDevanagariMarathi'), [FontMenuItem, onFontITFDevanagariMarathi]);
  const Jaini = useMemo(() => FontMenuItem('Jaini', onFontJaini, 'Jaini'), [FontMenuItem, onFontJaini]);
  const JainiPurva = useMemo(() => FontMenuItem('Jaini Purva', onFontJainiPurva, 'JainiPurva'), [FontMenuItem, onFontJainiPurva]);
  const JasmineUPC = useMemo(() => FontMenuItem('JasmineUPC', onFontJasmineUPC, 'JasmineUPC'), [FontMenuItem, onFontJasmineUPC]);
  const JavaneseText = useMemo(() => FontMenuItem('Javanese Text', onFontJavaneseText, 'JavaneseText'), [FontMenuItem, onFontJavaneseText]);
  const JungGothic = useMemo(() => FontMenuItem('Jung Gothic', onFontJungGothic, 'JungGothic'), [FontMenuItem, onFontJungGothic]);
  const Kai = useMemo(() => FontMenuItem('Kai', onFontKai, 'Kai'), [FontMenuItem, onFontKai]);
  const Kailasa = useMemo(() => FontMenuItem('Kailasa', onFontKailasa, 'Kailasa'), [FontMenuItem, onFontKailasa]);
  const KaiTi = useMemo(() => FontMenuItem('KaiTi', onFontKaiTi, 'KaiTi'), [FontMenuItem, onFontKaiTi]);
  const KaitiSC = useMemo(() => FontMenuItem('Kaiti SC', onFontKaitiSC, 'KaitiSC'), [FontMenuItem, onFontKaitiSC]);
  const KaitiTC = useMemo(() => FontMenuItem('Kaiti TC', onFontKaitiTC, 'KaitiTC'), [FontMenuItem, onFontKaitiTC]);
  const Kalinga = useMemo(() => FontMenuItem('Kalinga', onFontKalinga, 'Kalinga'), [FontMenuItem, onFontKalinga]);
  const KannadaMN = useMemo(() => FontMenuItem('Kannada MN', onFontKannadaMN, 'KannadaMN'), [FontMenuItem, onFontKannadaMN]);
  const KannadaSangamMN = useMemo(() => FontMenuItem('Kannada Sangam MN', onFontKannadaSangamMN, 'KannadaSangamMN'), [FontMenuItem, onFontKannadaSangamMN]);
  const Kartika = useMemo(() => FontMenuItem('Kartika', onFontKartika, 'Kartika'), [FontMenuItem, onFontKartika]);
  const Katari = useMemo(() => FontMenuItem('Katari', onFontKatari, 'Katari'), [FontMenuItem, onFontKatari]);
  const Kefa = useMemo(() => FontMenuItem('Kefa', onFontKefa, 'Kefa'), [FontMenuItem, onFontKefa]);
  const Keyboard = useMemo(() => FontMenuItem('Keyboard', onFontKeyboard, 'Keyboard'), [FontMenuItem, onFontKeyboard]);
  const KhmerMN = useMemo(() => FontMenuItem('Khmer MN', onFontKhmerMN, 'KhmerMN'), [FontMenuItem, onFontKhmerMN]);
  const KhmerSangamMN = useMemo(() => FontMenuItem('Khmer Sangam MN', onFontKhmerSangamMN, 'KhmerSangamMN'), [FontMenuItem, onFontKhmerSangamMN]);
  const KhmerUI = useMemo(() => FontMenuItem('Khmer UI', onFontKhmerUI, 'KhmerUI'), [FontMenuItem, onFontKhmerUI]);
  const KodchiangUPC = useMemo(() => FontMenuItem('KodchiangUPC', onFontKodchiangUPC, 'KodchiangUPC'), [FontMenuItem, onFontKodchiangUPC]);
  const KohinoorBangla = useMemo(() => FontMenuItem('Kohinoor Bangla', onFontKohinoorBangla, 'KohinoorBangla'), [FontMenuItem, onFontKohinoorBangla]);
  const KohinoorDevanagari = useMemo(() => FontMenuItem('Kohinoor Devanagari', onFontKohinoorDevanagari, 'KohinoorDevanagari'), [FontMenuItem, onFontKohinoorDevanagari]);
  const KohinoorTelugu = useMemo(() => FontMenuItem('Kohinoor Telugu', onFontKohinoorTelugu, 'KohinoorTelugu'), [FontMenuItem, onFontKohinoorTelugu]);
  const Kokila = useMemo(() => FontMenuItem('Kokila', onFontKokila, 'Kokila'), [FontMenuItem, onFontKokila]);
  const Kokonor = useMemo(() => FontMenuItem('Kokonor', onFontKokonor, 'Kokonor'), [FontMenuItem, onFontKokonor]);
  const KoufiAbjadi = useMemo(() => FontMenuItem('Koufi Abjadi', onFontKoufiAbjadi, 'KoufiAbjadi'), [FontMenuItem, onFontKoufiAbjadi]);
  const Krungthep = useMemo(() => FontMenuItem('Krungthep', onFontKrungthep, 'Krungthep'), [FontMenuItem, onFontKrungthep]);
  const KuenstlerScript = useMemo(() => FontMenuItem('Kuenstler Script', onFontKuenstlerScript, 'KuenstlerScript'), [FontMenuItem, onFontKuenstlerScript]);
  const KufiStandardGK = useMemo(() => FontMenuItem('KufiStandard GK', onFontKufiStandardGK, 'KufiStandardGK'), [FontMenuItem, onFontKufiStandardGK]);
  const LahoreGurmukhi = useMemo(() => FontMenuItem('Lahore Gurmukhi', onFontLahoreGurmukhi, 'LahoreGurmukhi'), [FontMenuItem, onFontLahoreGurmukhi]);
  const Laimoon = useMemo(() => FontMenuItem('Laimoon', onFontLaimoon, 'Laimoon'), [FontMenuItem, onFontLaimoon]);
  const LaoMN = useMemo(() => FontMenuItem('Lao MN', onFontLaoMN, 'LaoMN'), [FontMenuItem, onFontLaoMN]);
  const LaoSangamMN = useMemo(() => FontMenuItem('Lao Sangam MN', onFontLaoSangamMN, 'LaoSangamMN'), [FontMenuItem, onFontLaoSangamMN]);
  const LaoUI = useMemo(() => FontMenuItem('Lao UI', onFontLaoUI, 'LaoUI'), [FontMenuItem, onFontLaoUI]);
  const LastResort = useMemo(() => FontMenuItem('LastResort', onFontLastResort, 'LastResort'), [FontMenuItem, onFontLastResort]);
  const Latha = useMemo(() => FontMenuItem('Latha', onFontLatha, 'Latha'), [FontMenuItem, onFontLatha]);
  const LavaDevanagari = useMemo(() => FontMenuItem('Lava Devanagari', onFontLavaDevanagari, 'LavaDevanagari'), [FontMenuItem, onFontLavaDevanagari]);
  const LavaKannada = useMemo(() => FontMenuItem('Lava Kannada', onFontLavaKannada, 'LavaKannada'), [FontMenuItem, onFontLavaKannada]);
  const LavaTelugu = useMemo(() => FontMenuItem('Lava Telugu', onFontLavaTelugu, 'LavaTelugu'), [FontMenuItem, onFontLavaTelugu]);
  const Leelawadee = useMemo(() => FontMenuItem('Leelawadee', onFontLeelawadee, 'Leelawadee'), [FontMenuItem, onFontLeelawadee]);
  const LeelawadeeUI = useMemo(() => FontMenuItem('Leelawadee UI', onFontLeelawadeeUI, 'LeelawadeeUI'), [FontMenuItem, onFontLeelawadeeUI]);
  const LevenimMT = useMemo(() => FontMenuItem('Levenim MT', onFontLevenimMT, 'LevenimMT'), [FontMenuItem, onFontLevenimMT]);
  const LibianSC = useMemo(() => FontMenuItem('Libian SC', onFontLibianSC, 'LibianSC'), [FontMenuItem, onFontLibianSC]);
  const LibianTC = useMemo(() => FontMenuItem('Libian TC', onFontLibianTC, 'LibianTC'), [FontMenuItem, onFontLibianTC]);
  const LiHeiPro = useMemo(() => FontMenuItem('LiHei Pro', onFontLiHeiPro, 'LiHeiPro'), [FontMenuItem, onFontLiHeiPro]);
  const LilyUPC = useMemo(() => FontMenuItem('LilyUPC', onFontLilyUPC, 'LilyUPC'), [FontMenuItem, onFontLilyUPC]);
  const LiSongPro = useMemo(() => FontMenuItem('LiSong Pro', onFontLiSongPro, 'LiSongPro'), [FontMenuItem, onFontLiSongPro]);
  const LucidaConsole = useMemo(() => FontMenuItem('Lucida Console', onFontLucidaConsole, 'LucidaConsole'), [FontMenuItem, onFontLucidaConsole]);
  const LucidaGrande = useMemo(() => FontMenuItem('Lucida Grande', onFontLucidaGrande, 'LucidaGrande'), [FontMenuItem, onFontLucidaGrande]);
  const LucidaSans = useMemo(() => FontMenuItem('Lucida Sans', onFontLucidaSans, 'LucidaSans'), [FontMenuItem, onFontLucidaSans]);
  const LucidaSansUnicode = useMemo(() => FontMenuItem('Lucida Sans Unicode', onFontLucidaSansUnicode, 'LucidaSansUnicode'), [FontMenuItem, onFontLucidaSansUnicode]);
  const Luminari = useMemo(() => FontMenuItem('Luminari', onFontLuminari, 'Luminari'), [FontMenuItem, onFontLuminari]);
  const Maku = useMemo(() => FontMenuItem('Maku', onFontMaku, 'Maku'), [FontMenuItem, onFontMaku]);
  const MalayalamMN = useMemo(() => FontMenuItem('Malayalam MN', onFontMalayalamMN, 'MalayalamMN'), [FontMenuItem, onFontMalayalamMN]);
  const MalayalamSangamMN = useMemo(() => FontMenuItem('Malayalam Sangam MN', onFontMalayalamSangamMN, 'MalayalamSangamMN'), [FontMenuItem, onFontMalayalamSangamMN]);
  const MalgunGothic = useMemo(() => FontMenuItem('Malgun Gothic', onFontMalgunGothic, 'MalgunGothic'), [FontMenuItem, onFontMalgunGothic]);
  const Mangal = useMemo(() => FontMenuItem('Mangal', onFontMangal, 'Mangal'), [FontMenuItem, onFontMangal]);
  const MarkerFelt = useMemo(() => FontMenuItem('Marker Felt', onFontMarkerFelt, 'MarkerFelt'), [FontMenuItem, onFontMarkerFelt]);
  const Marlett = useMemo(() => FontMenuItem('Marlett', onFontMarlett, 'Marlett'), [FontMenuItem, onFontMarlett]);
  const Meiryo = useMemo(() => FontMenuItem('Meiryo', onFontMeiryo, 'Meiryo'), [FontMenuItem, onFontMeiryo]);
  const Menlo = useMemo(() => FontMenuItem('Menlo', onFontMenlo, 'Menlo'), [FontMenuItem, onFontMenlo]);
  const MicrosoftHimalaya = useMemo(() => FontMenuItem('Microsoft Himalaya', onFontMicrosoftHimalaya, 'MicrosoftHimalaya'), [FontMenuItem, onFontMicrosoftHimalaya]);
  const MicrosoftJhengHei = useMemo(() => FontMenuItem('Microsoft JhengHei', onFontMicrosoftJhengHei, 'MicrosoftJhengHei'), [FontMenuItem, onFontMicrosoftJhengHei]);
  const MicrosoftNewTaiLue = useMemo(() => FontMenuItem('Microsoft New Tai Lue', onFontMicrosoftNewTaiLue, 'MicrosoftNewTaiLue'), [FontMenuItem, onFontMicrosoftNewTaiLue]);
  const MicrosoftPhagsPa = useMemo(() => FontMenuItem('Microsoft PhagsPa', onFontMicrosoftPhagsPa, 'MicrosoftPhagsPa'), [FontMenuItem, onFontMicrosoftPhagsPa]);
  const MicrosoftSansSerif = useMemo(() => FontMenuItem('Microsoft Sans Serif', onFontMicrosoftSansSerif, 'MicrosoftSansSerif'), [FontMenuItem, onFontMicrosoftSansSerif]);
  const MicrosoftTaiLe = useMemo(() => FontMenuItem('Microsoft Tai Le', onFontMicrosoftTaiLe, 'MicrosoftTaiLe'), [FontMenuItem, onFontMicrosoftTaiLe]);
  const MicrosoftUighur = useMemo(() => FontMenuItem('Microsoft Uighur', onFontMicrosoftUighur, 'MicrosoftUighur'), [FontMenuItem, onFontMicrosoftUighur]);
  const MicrosoftYaHei = useMemo(() => FontMenuItem('Microsoft YaHei', onFontMicrosoftYaHei, 'MicrosoftYaHei'), [FontMenuItem, onFontMicrosoftYaHei]);
  const MicrosoftYiBaiti = useMemo(() => FontMenuItem('Microsoft Yi Baiti', onFontMicrosoftYiBaiti, 'MicrosoftYiBaiti'), [FontMenuItem, onFontMicrosoftYiBaiti]);
  const MingLiU = useMemo(() => FontMenuItem('MingLiU', onFontMingLiU, 'MingLiU'), [FontMenuItem, onFontMingLiU]);
  const MingLiUExtB = useMemo(() => FontMenuItem('MingLiU-ExtB', onFontMingLiUExtB, 'MingLiUExtB'), [FontMenuItem, onFontMingLiUExtB]);
  const Miriam = useMemo(() => FontMenuItem('Miriam', onFontMiriam, 'Miriam'), [FontMenuItem, onFontMiriam]);
  const Mishafi = useMemo(() => FontMenuItem('Mishafi', onFontMishafi, 'Mishafi'), [FontMenuItem, onFontMishafi]);
  const MishafiGold = useMemo(() => FontMenuItem('Mishafi Gold', onFontMishafiGold, 'MishafiGold'), [FontMenuItem, onFontMishafiGold]);
  const Modak = useMemo(() => FontMenuItem('Modak', onFontModak, 'Modak'), [FontMenuItem, onFontModak]);
  const MonaLisaSolidITCTT = useMemo(() => FontMenuItem('Mona Lisa Solid ITC TT', onFontMonaLisaSolidITCTT, 'MonaLisaSolidITCTT'), [FontMenuItem, onFontMonaLisaSolidITCTT]);
  const Monaco = useMemo(() => FontMenuItem('Monaco', onFontMonaco, 'Monaco'), [FontMenuItem, onFontMonaco]);
  const MonacoCY = useMemo(() => FontMenuItem('Monaco CY', onFontMonacoCY, 'MonacoCY'), [FontMenuItem, onFontMonacoCY]);
  const MongolianBaiti = useMemo(() => FontMenuItem('Mongolian Baiti', onFontMongolianBaiti, 'MongolianBaiti'), [FontMenuItem, onFontMongolianBaiti]);
  const MonotypeLingWai = useMemo(() => FontMenuItem('Monotype LingWai', onFontMonotypeLingWai, 'MonotypeLingWai'), [FontMenuItem, onFontMonotypeLingWai]);
  const MoolBoran = useMemo(() => FontMenuItem('MoolBoran', onFontMoolBoran, 'MoolBoran'), [FontMenuItem, onFontMoolBoran]);
  const MSGothic = useMemo(() => FontMenuItem('MS Gothic', onFontMSGothic, 'MSGothic'), [FontMenuItem, onFontMSGothic]);
  const MSMincho = useMemo(() => FontMenuItem('MS Mincho', onFontMSMincho, 'MSMincho'), [FontMenuItem, onFontMSMincho]);
  const Mshtakan = useMemo(() => FontMenuItem('Mshtakan', onFontMshtakan, 'Mshtakan'), [FontMenuItem, onFontMshtakan]);
  const Mukta = useMemo(() => FontMenuItem('Mukta', onFontMukta, 'Mukta'), [FontMenuItem, onFontMukta]);
  const MuktaMalar = useMemo(() => FontMenuItem('Mukta Malar', onFontMuktaMalar, 'MuktaMalar'), [FontMenuItem, onFontMuktaMalar]);
  const MuktaVaani = useMemo(() => FontMenuItem('Mukta Vaani', onFontMuktaVaani, 'MuktaVaani'), [FontMenuItem, onFontMuktaVaani]);
  const MuktaMahee = useMemo(() => FontMenuItem('MuktaMahee', onFontMuktaMahee, 'MuktaMahee'), [FontMenuItem, onFontMuktaMahee]);
  const Muna = useMemo(() => FontMenuItem('Muna', onFontMuna, 'Muna'), [FontMenuItem, onFontMuna]);
  const MVBoli = useMemo(() => FontMenuItem('MV Boli', onFontMVBoli, 'MVBoli'), [FontMenuItem, onFontMVBoli]);
  const MyanmarMN = useMemo(() => FontMenuItem('Myanmar MN', onFontMyanmarMN, 'MyanmarMN'), [FontMenuItem, onFontMyanmarMN]);
  const MyanmarSangamMN = useMemo(() => FontMenuItem('Myanmar Sangam MN', onFontMyanmarSangamMN, 'MyanmarSangamMN'), [FontMenuItem, onFontMyanmarSangamMN]);
  const MyanmarText = useMemo(() => FontMenuItem('Myanmar Text', onFontMyanmarText, 'MyanmarText'), [FontMenuItem, onFontMyanmarText]);
  const MyriadArabic = useMemo(() => FontMenuItem('Myriad Arabic', onFontMyriadArabic, 'MyriadArabic'), [FontMenuItem, onFontMyriadArabic]);
  const Nadeem = useMemo(() => FontMenuItem('Nadeem', onFontNadeem, 'Nadeem'), [FontMenuItem, onFontNadeem]);
  const NanumBrushScript = useMemo(() => FontMenuItem('Nanum Brush Script', onFontNanumBrushScript, 'NanumBrushScript'), [FontMenuItem, onFontNanumBrushScript]);
  const NanumPenScript = useMemo(() => FontMenuItem('Nanum Pen Script', onFontNanumPenScript, 'NanumPenScript'), [FontMenuItem, onFontNanumPenScript]);
  const NanumGothic = useMemo(() => FontMenuItem('NanumGothic', onFontNanumGothic, 'NanumGothic'), [FontMenuItem, onFontNanumGothic]);
  const NanumMyeongjo = useMemo(() => FontMenuItem('NanumMyeongjo', onFontNanumMyeongjo, 'NanumMyeongjo'), [FontMenuItem, onFontNanumMyeongjo]);
  const Narkisim = useMemo(() => FontMenuItem('Narkisim', onFontNarkisim, 'Narkisim'), [FontMenuItem, onFontNarkisim]);
  const NeueHaasGrotskTxtPro = useMemo(() => FontMenuItem('Neue Haas Grotesk Text Pro', onFontNeueHaasGrotskTxtPro, 'NeueHaasGrotskTxtPro'), [FontMenuItem, onFontNeueHaasGrotskTxtPro]);
  const NewPeninim = useMemo(() => FontMenuItem('New Peninim', onFontNewPeninim, 'NewPeninim'), [FontMenuItem, onFontNewPeninim]);
  const NewPeninimMT = useMemo(() => FontMenuItem('New Peninim MT', onFontNewPeninimMT, 'NewPeninimMT'), [FontMenuItem, onFontNewPeninimMT]);
  const NewPeninimMTInclined = useMemo(() => FontMenuItem('New Peninim MT Inclined', onFontNewPeninimMTInclined, 'NewPeninimMTInclined'), [FontMenuItem, onFontNewPeninimMTInclined]);
  const NewYork = useMemo(() => FontMenuItem('New York', onFontNewYork, 'NewYork'), [FontMenuItem, onFontNewYork]);
  const NirmalaUI = useMemo(() => FontMenuItem('Nirmala UI', onFontNirmalaUI, 'NirmalaUI'), [FontMenuItem, onFontNirmalaUI]);
  const Nisan = useMemo(() => FontMenuItem('Nisan', onFontNisan, 'Nisan'), [FontMenuItem, onFontNisan]);
  const NISCGB18030 = useMemo(() => FontMenuItem('NISC GB18030', onFontNISCGB18030, 'NISCGB18030'), [FontMenuItem, onFontNISCGB18030]);
  const Noteworthy = useMemo(() => FontMenuItem('Noteworthy', onFontNoteworthy, 'Noteworthy'), [FontMenuItem, onFontNoteworthy]);
  const NotoNastaliqUrdu = useMemo(() => FontMenuItem('Noto Nastaliq Urdu', onFontNotoNastaliqUrdu, 'NotoNastaliqUrdu'), [FontMenuItem, onFontNotoNastaliqUrdu]);
  const NotoSansJavanese = useMemo(() => FontMenuItem('Noto Sans Javanese', onFontNotoSansJavanese, 'NotoSansJavanese'), [FontMenuItem, onFontNotoSansJavanese]);
  const NotoSansKannada = useMemo(() => FontMenuItem('Noto Sans Kannada', onFontNotoSansKannada, 'NotoSansKannada'), [FontMenuItem, onFontNotoSansKannada]);
  const NotoSansMyanmar = useMemo(() => FontMenuItem('Noto Sans Myanmar', onFontNotoSansMyanmar, 'NotoSansMyanmar'), [FontMenuItem, onFontNotoSansMyanmar]);
  const NotoSansOriya = useMemo(() => FontMenuItem('Noto Sans Oriya', onFontNotoSansOriya, 'NotoSansOriya'), [FontMenuItem, onFontNotoSansOriya]);
  const NotoSerifKannada = useMemo(() => FontMenuItem('Noto Serif Kannada', onFontNotoSerifKannada, 'NotoSerifKannada'), [FontMenuItem, onFontNotoSerifKannada]);
  const NotoSerifMyanmar = useMemo(() => FontMenuItem('Noto Serif Myanmar', onFontNotoSerifMyanmar, 'NotoSerifMyanmar'), [FontMenuItem, onFontNotoSerifMyanmar]);
  const Nyala = useMemo(() => FontMenuItem('Nyala', onFontNyala, 'Nyala'), [FontMenuItem, onFontNyala]);
  const OctoberDevanagari = useMemo(() => FontMenuItem('October Devanagari', onFontOctoberDevanagari, 'OctoberDevanagari'), [FontMenuItem, onFontOctoberDevanagari]);
  const OctoberTamil = useMemo(() => FontMenuItem('October Tamil', onFontOctoberTamil, 'OctoberTamil'), [FontMenuItem, onFontOctoberTamil]);
  const Optima = useMemo(() => FontMenuItem('Optima', onFontOptima, 'Optima'), [FontMenuItem, onFontOptima]);
  const OriyaMN = useMemo(() => FontMenuItem('Oriya MN', onFontOriyaMN, 'OriyaMN'), [FontMenuItem, onFontOriyaMN]);
  const OriyaSangamMN = useMemo(() => FontMenuItem('Oriya Sangam MN', onFontOriyaSangamMN, 'OriyaSangamMN'), [FontMenuItem, onFontOriyaSangamMN]);
  const Osaka = useMemo(() => FontMenuItem('Osaka', onFontOsaka, 'Osaka'), [FontMenuItem, onFontOsaka]);
  const OsakaMono = useMemo(() => FontMenuItem('Osaka-Mono', onFontOsakaMono, 'OsakaMono'), [FontMenuItem, onFontOsakaMono]);
  const Palatino = useMemo(() => FontMenuItem('Palatino', onFontPalatino, 'Palatino'), [FontMenuItem, onFontPalatino]);
  const PalatinoLinotype = useMemo(() => FontMenuItem('Palatino Linotype', onFontPalatinoLinotype, 'PalatinoLinotype'), [FontMenuItem, onFontPalatinoLinotype]);
  const Papyrus = useMemo(() => FontMenuItem('Papyrus', onFontPapyrus, 'Papyrus'), [FontMenuItem, onFontPapyrus]);
  const PCMyungjo = useMemo(() => FontMenuItem('PC Myungjo', onFontPCMyungjo, 'PCMyungjo'), [FontMenuItem, onFontPCMyungjo]);
  const Phosphate = useMemo(() => FontMenuItem('Phosphate', onFontPhosphate, 'Phosphate'), [FontMenuItem, onFontPhosphate]);
  const PilGi = useMemo(() => FontMenuItem('PilGi', onFontPilGi, 'PilGi'), [FontMenuItem, onFontPilGi]);
  const Pilgiche = useMemo(() => FontMenuItem('Pilgiche', onFontPilgiche, 'Pilgiche'), [FontMenuItem, onFontPilgiche]);
  const PingFangHK = useMemo(() => FontMenuItem('PingFang HK', onFontPingFangHK, 'PingFangHK'), [FontMenuItem, onFontPingFangHK]);
  const PingFangSC = useMemo(() => FontMenuItem('PingFang SC', onFontPingFangSC, 'PingFangSC'), [FontMenuItem, onFontPingFangSC]);
  const PingFangTC = useMemo(() => FontMenuItem('PingFang TC', onFontPingFangTC, 'PingFangTC'), [FontMenuItem, onFontPingFangTC]);
  const PlantagenetCherokee = useMemo(() => FontMenuItem('Plantagenet Cherokee', onFontPlantagenetCherokee, 'PlantagenetCherokee'), [FontMenuItem, onFontPlantagenetCherokee]);
  const PortagoITCTT = useMemo(() => FontMenuItem('PortagoITC TT', onFontPortagoITCTT, 'PortagoITCTT'), [FontMenuItem, onFontPortagoITCTT]);
  const PrincetownLET = useMemo(() => FontMenuItem('Princetown LET', onFontPrincetownLET, 'PrincetownLET'), [FontMenuItem, onFontPrincetownLET]);
  const Produkt = useMemo(() => FontMenuItem('Produkt', onFontProdukt, 'Produkt'), [FontMenuItem, onFontProdukt]);
  const ProximaNova = useMemo(() => FontMenuItem('Proxima Nova', onFontProximaNova, 'ProximaNova'), [FontMenuItem, onFontProximaNova]);
  const PSLOrnanongPro = useMemo(() => FontMenuItem('PSL Ornanong Pro', onFontPSLOrnanongPro, 'PSLOrnanongPro'), [FontMenuItem, onFontPSLOrnanongPro]);
  const PTMono = useMemo(() => FontMenuItem('PT Mono', onFontPTMono, 'PTMono'), [FontMenuItem, onFontPTMono]);
  const PTSans = useMemo(() => FontMenuItem('PT Sans', onFontPTSans, 'PTSans'), [FontMenuItem, onFontPTSans]);
  const PTSansNarrow = useMemo(() => FontMenuItem('PT Sans Narrow', onFontPTSansNarrow, 'PTSansNarrow'), [FontMenuItem, onFontPTSansNarrow]);
  const PTSerif = useMemo(() => FontMenuItem('PT Serif', onFontPTSerif, 'PTSerif'), [FontMenuItem, onFontPTSerif]);
  const PublicoHeadlineRoman = useMemo(() => FontMenuItem('Publico Headline Roman', onFontPublicoHeadlineRoman, 'PublicoHeadlineRoman'), [FontMenuItem, onFontPublicoHeadlineRoman]);
  const QuotesCaps = useMemo(() => FontMenuItem('Quotes Caps', onFontQuotesCaps, 'QuotesCaps'), [FontMenuItem, onFontQuotesCaps]);
  const QuotesScript = useMemo(() => FontMenuItem('Quotes Script', onFontQuotesScript, 'QuotesScript'), [FontMenuItem, onFontQuotesScript]);
  const Raanana = useMemo(() => FontMenuItem('Raanana', onFontRaanana, 'Raanana'), [FontMenuItem, onFontRaanana]);
  const Raavi = useMemo(() => FontMenuItem('Raavi', onFontRaavi, 'Raavi'), [FontMenuItem, onFontRaavi]);
  const Raya = useMemo(() => FontMenuItem('Raya', onFontRaya, 'Raya'), [FontMenuItem, onFontRaya]);
  const Rockwell = useMemo(() => FontMenuItem('Rockwell', onFontRockwell, 'Rockwell'), [FontMenuItem, onFontRockwell]);
  const RockwellNova = useMemo(() => FontMenuItem('Rockwell Nova', onFontRockwellNova, 'RockwellNova'), [FontMenuItem, onFontRockwellNova]);
  const Rod = useMemo(() => FontMenuItem('Rod', onFontRod, 'Rod'), [FontMenuItem, onFontRod]);
  const SakkalMajalla = useMemo(() => FontMenuItem('Sakkal Majalla', onFontSakkalMajalla, 'SakkalMajalla'), [FontMenuItem, onFontSakkalMajalla]);
  const SamaDevanagari = useMemo(() => FontMenuItem('Sama Devanagari', onFontSamaDevanagari, 'SamaDevanagari'), [FontMenuItem, onFontSamaDevanagari]);
  const SamaGujarati = useMemo(() => FontMenuItem('Sama Gujarati', onFontSamaGujarati, 'SamaGujarati'), [FontMenuItem, onFontSamaGujarati]);
  const SamaGurmukhi = useMemo(() => FontMenuItem('Sama Gurmukhi', onFontSamaGurmukhi, 'SamaGurmukhi'), [FontMenuItem, onFontSamaGurmukhi]);
  const SamaKannada = useMemo(() => FontMenuItem('Sama Kannada', onFontSamaKannada, 'SamaKannada'), [FontMenuItem, onFontSamaKannada]);
  const SamaMalayalam = useMemo(() => FontMenuItem('Sama Malayalam', onFontSamaMalayalam, 'SamaMalayalam'), [FontMenuItem, onFontSamaMalayalam]);
  const SamaTamil = useMemo(() => FontMenuItem('Sama Tamil', onFontSamaTamil, 'SamaTamil'), [FontMenuItem, onFontSamaTamil]);
  const SanFranciscoMono = useMemo(() => FontMenuItem('San Francisco Mono', onFontSanFranciscoMono, 'SanFranciscoMono'), [FontMenuItem, onFontSanFranciscoMono]);
  const Sana = useMemo(() => FontMenuItem('Sana', onFontSana, 'Sana'), [FontMenuItem, onFontSana]);
  const Sand = useMemo(() => FontMenuItem('Sand', onFontSand, 'Sand'), [FontMenuItem, onFontSand]);
  const SanskritText = useMemo(() => FontMenuItem('Sanskrit Text', onFontSanskritText, 'SanskritText'), [FontMenuItem, onFontSanskritText]);
  const Sathu = useMemo(() => FontMenuItem('Sathu', onFontSathu, 'Sathu'), [FontMenuItem, onFontSathu]);
  const SauberScript = useMemo(() => FontMenuItem('Sauber Script', onFontSauberScript, 'SauberScript'), [FontMenuItem, onFontSauberScript]);
  const SchoolHouseCursiveB = useMemo(() => FontMenuItem('SchoolHouse Cursive B', onFontSchoolHouseCursiveB, 'SchoolHouseCursiveB'), [FontMenuItem, onFontSchoolHouseCursiveB]);
  const SchoolHousePrintedA = useMemo(() => FontMenuItem('SchoolHouse Printed A', onFontSchoolHousePrintedA, 'SchoolHousePrintedA'), [FontMenuItem, onFontSchoolHousePrintedA]);
  const SegoePrint = useMemo(() => FontMenuItem('Segoe Print', onFontSegoePrint, 'SegoePrint'), [FontMenuItem, onFontSegoePrint]);
  const SegoeScript = useMemo(() => FontMenuItem('Segoe Script', onFontSegoeScript, 'SegoeScript'), [FontMenuItem, onFontSegoeScript]);
  const SegoeUI = useMemo(() => FontMenuItem('Segoe UI', onFontSegoeUI, 'SegoeUI'), [FontMenuItem, onFontSegoeUI]);
  const Seoul = useMemo(() => FontMenuItem('Seoul', onFontSeoul, 'Seoul'), [FontMenuItem, onFontSeoul]);
  const SFArabic = useMemo(() => FontMenuItem('SF Arabic', onFontSFArabic, 'SFArabic'), [FontMenuItem, onFontSFArabic]);
  const ShinMyungjoNeue = useMemo(() => FontMenuItem('Shin Myungjo Neue', onFontShinMyungjoNeue, 'ShinMyungjoNeue'), [FontMenuItem, onFontShinMyungjoNeue]);
  const Shobhika = useMemo(() => FontMenuItem('Shobhika', onFontShobhika, 'Shobhika'), [FontMenuItem, onFontShobhika]);
  const ShonarBangla = useMemo(() => FontMenuItem('Shonar Bangla', onFontShonarBangla, 'ShonarBangla'), [FontMenuItem, onFontShonarBangla]);
  const ShreeDevanagari714 = useMemo(() => FontMenuItem('Shree Devanagari 714', onFontShreeDevanagari714, 'ShreeDevanagari714'), [FontMenuItem, onFontShreeDevanagari714]);
  const Shruti = useMemo(() => FontMenuItem('Shruti', onFontShruti, 'Shruti'), [FontMenuItem, onFontShruti]);
  const SignPainter = useMemo(() => FontMenuItem('SignPainter', onFontSignPainter, 'SignPainter'), [FontMenuItem, onFontSignPainter]);
  const SignPainterHouseScript = useMemo(() => FontMenuItem('SignPainter-HouseScript', onFontSignPainterHouseScript, 'SignPainterHouseScript'), [FontMenuItem, onFontSignPainterHouseScript]);
  const Silom = useMemo(() => FontMenuItem('Silom', onFontSilom, 'Silom'), [FontMenuItem, onFontSilom]);
  const SimHei = useMemo(() => FontMenuItem('SimHei', onFontSimHei, 'SimHei'), [FontMenuItem, onFontSimHei]);
  const SimplifiedArabic = useMemo(() => FontMenuItem('Simplified Arabic', onFontSimplifiedArabic, 'SimplifiedArabic'), [FontMenuItem, onFontSimplifiedArabic]);
  const SimSong = useMemo(() => FontMenuItem('SimSong', onFontSimSong, 'SimSong'), [FontMenuItem, onFontSimSong]);
  const SimSun = useMemo(() => FontMenuItem('SimSun', onFontSimSun, 'SimSun'), [FontMenuItem, onFontSimSun]);
  const SinhalaMN = useMemo(() => FontMenuItem('Sinhala MN', onFontSinhalaMN, 'SinhalaMN'), [FontMenuItem, onFontSinhalaMN]);
  const SinhalaSangamMN = useMemo(() => FontMenuItem('Sinhala Sangam MN', onFontSinhalaSangamMN, 'SinhalaSangamMN'), [FontMenuItem, onFontSinhalaSangamMN]);
  const Sitka = useMemo(() => FontMenuItem('Sitka', onFontSitka, 'Sitka'), [FontMenuItem, onFontSitka]);
  const Skia = useMemo(() => FontMenuItem('Skia', onFontSkia, 'Skia'), [FontMenuItem, onFontSkia]);
  const SnellRoundhand = useMemo(() => FontMenuItem('Snell Roundhand', onFontSnellRoundhand, 'SnellRoundhand'), [FontMenuItem, onFontSnellRoundhand]);
  const Somer = useMemo(() => FontMenuItem('Somer', onFontSomer, 'Somer'), [FontMenuItem, onFontSomer]);
  const SongtiSC = useMemo(() => FontMenuItem('Songti SC', onFontSongtiSC, 'SongtiSC'), [FontMenuItem, onFontSongtiSC]);
  const SongtiTC = useMemo(() => FontMenuItem('Songti TC', onFontSongtiTC, 'SongtiTC'), [FontMenuItem, onFontSongtiTC]);
  const SpotMono = useMemo(() => FontMenuItem('Spot Mono', onFontSpotMono, 'SpotMono'), [FontMenuItem, onFontSpotMono]);
  const STFangSong = useMemo(() => FontMenuItem('ST FangSong', onFontSTFangSong, 'STFangSong'), [FontMenuItem, onFontSTFangSong]);
  const STHeiti = useMemo(() => FontMenuItem('ST Heiti', onFontSTHeiti, 'STHeiti'), [FontMenuItem, onFontSTHeiti]);
  const STKaiti = useMemo(() => FontMenuItem('ST Kaiti', onFontSTKaiti, 'STKaiti'), [FontMenuItem, onFontSTKaiti]);
  const STSong = useMemo(() => FontMenuItem('ST Song', onFontSTSong, 'STSong'), [FontMenuItem, onFontSTSong]);
  const STXihei = useMemo(() => FontMenuItem('ST Xihei', onFontSTXihei, 'STXihei'), [FontMenuItem, onFontSTXihei]);
  const STIXTwoText = useMemo(() => FontMenuItem('STIX Two Text', onFontSTIXTwoText, 'STIXTwoText'), [FontMenuItem, onFontSTIXTwoText]);
  const STIXGeneralRegular = useMemo(() => FontMenuItem('STIXGeneral-Regular', onFontSTIXGeneralRegular, 'STIXGeneralRegular'), [FontMenuItem, onFontSTIXGeneralRegular]);
  const StoneSansSemITCTT = useMemo(() => FontMenuItem('Stone Sans Sem ITC TT', onFontStoneSansSemITCTT, 'StoneSansSemITCTT'), [FontMenuItem, onFontStoneSansSemITCTT]);
  const SukhumvitSetText = useMemo(() => FontMenuItem('Sukhumvit Set Text', onFontSukhumvitSetText, 'SukhumvitSetText'), [FontMenuItem, onFontSukhumvitSetText]);
  const Sylfaen = useMemo(() => FontMenuItem('Sylfaen', onFontSylfaen, 'Sylfaen'), [FontMenuItem, onFontSylfaen]);
  const SynchroLET = useMemo(() => FontMenuItem('Synchro LET', onFontSynchroLET, 'SynchroLET'), [FontMenuItem, onFontSynchroLET]);
  const TaeGraphic = useMemo(() => FontMenuItem('Tae Graphic', onFontTaeGraphic, 'TaeGraphic'), [FontMenuItem, onFontTaeGraphic]);
  const Tahoma = useMemo(() => FontMenuItem('Tahoma', onFontTahoma, 'Tahoma'), [FontMenuItem, onFontTahoma]);
  const Taipei = useMemo(() => FontMenuItem('Taipei', onFontTaipei, 'Taipei'), [FontMenuItem, onFontTaipei]);
  const TamilMN = useMemo(() => FontMenuItem('Tamil MN', onFontTamilMN, 'TamilMN'), [FontMenuItem, onFontTamilMN]);
  const TamilSangamMN = useMemo(() => FontMenuItem('Tamil Sangam MN', onFontTamilSangamMN, 'TamilSangamMN'), [FontMenuItem, onFontTamilSangamMN]);
  const Techno = useMemo(() => FontMenuItem('Techno', onFontTechno, 'Techno'), [FontMenuItem, onFontTechno]);
  const TeluguMN = useMemo(() => FontMenuItem('Telugu MN', onFontTeluguMN, 'TeluguMN'), [FontMenuItem, onFontTeluguMN]);
  const TeluguSangamMN = useMemo(() => FontMenuItem('Telugu Sangam MN', onFontTeluguSangamMN, 'TeluguSangamMN'), [FontMenuItem, onFontTeluguSangamMN]);
  const Textile = useMemo(() => FontMenuItem('Textile', onFontTextile, 'Textile'), [FontMenuItem, onFontTextile]);
  const Thonburi = useMemo(() => FontMenuItem('Thonburi', onFontThonburi, 'Thonburi'), [FontMenuItem, onFontThonburi]);
  const Times = useMemo(() => FontMenuItem('Times', onFontTimes, 'Times'), [FontMenuItem, onFontTimes]);
  const TimesCY = useMemo(() => FontMenuItem('Times CY', onFontTimesCY, 'TimesCY'), [FontMenuItem, onFontTimesCY]);
  const TimesNewRoman = useMemo(() => FontMenuItem('Times New Roman', onFontTimesNewRoman, 'TimesNewRoman'), [FontMenuItem, onFontTimesNewRoman]);
  const TimesRoman = useMemo(() => FontMenuItem('Times Roman', onFontTimesRoman, 'TimesRoman'), [FontMenuItem, onFontTimesRoman]);
  const TiroBangla = useMemo(() => FontMenuItem('Tiro Bangla', onFontTiroBangla, 'TiroBangla'), [FontMenuItem, onFontTiroBangla]);
  const TiroDevanagariHindi = useMemo(() => FontMenuItem('Tiro Devanagari Hindi', onFontTiroDevanagariHindi, 'TiroDevanagariHindi'), [FontMenuItem, onFontTiroDevanagariHindi]);
  const TiroDevanagariMarathi = useMemo(() => FontMenuItem('Tiro Devanagari Marathi', onFontTiroDevanagariMarathi, 'TiroDevanagariMarathi'), [FontMenuItem, onFontTiroDevanagariMarathi]);
  const TiroDevanagariSanskrit = useMemo(() => FontMenuItem('Tiro Devanagari Sanskrit', onFontTiroDevanagariSanskrit, 'TiroDevanagariSanskrit'), [FontMenuItem, onFontTiroDevanagariSanskrit]);
  const TiroGurmukhi = useMemo(() => FontMenuItem('Tiro Gurmukhi', onFontTiroGurmukhi, 'TiroGurmukhi'), [FontMenuItem, onFontTiroGurmukhi]);
  const TiroHindi = useMemo(() => FontMenuItem('Tiro Hindi', onFontTiroHindi, 'TiroHindi'), [FontMenuItem, onFontTiroHindi]);
  const TiroKannada = useMemo(() => FontMenuItem('Tiro Kannada', onFontTiroKannada, 'TiroKannada'), [FontMenuItem, onFontTiroKannada]);
  const TiroMarathi = useMemo(() => FontMenuItem('Tiro Marathi', onFontTiroMarathi, 'TiroMarathi'), [FontMenuItem, onFontTiroMarathi]);
  const TiroSanskrit = useMemo(() => FontMenuItem('Tiro Sanskrit', onFontTiroSanskrit, 'TiroSanskrit'), [FontMenuItem, onFontTiroSanskrit]);
  const TiroTamil = useMemo(() => FontMenuItem('Tiro Tamil', onFontTiroTamil, 'TiroTamil'), [FontMenuItem, onFontTiroTamil]);
  const TiroTelugu = useMemo(() => FontMenuItem('Tiro Telugu', onFontTiroTelugu, 'TiroTelugu'), [FontMenuItem, onFontTiroTelugu]);
  const ToppanBunkyuGothic = useMemo(() => FontMenuItem('Toppan Bunkyu Gothic', onFontToppanBunkyuGothic, 'ToppanBunkyuGothic'), [FontMenuItem, onFontToppanBunkyuGothic]);
  const ToppanBunkyuMincho = useMemo(() => FontMenuItem('Toppan Bunkyu Mincho', onFontToppanBunkyuMincho, 'ToppanBunkyuMincho'), [FontMenuItem, onFontToppanBunkyuMincho]);
  const TraditionalArabic = useMemo(() => FontMenuItem('Traditional Arabic', onFontTraditionalArabic, 'TraditionalArabic'), [FontMenuItem, onFontTraditionalArabic]);
  const Trattatello = useMemo(() => FontMenuItem('Trattatello', onFontTrattatello, 'Trattatello'), [FontMenuItem, onFontTrattatello]);
  const TrebuchetMS = useMemo(() => FontMenuItem('Trebuchet MS', onFontTrebuchetMS, 'TrebuchetMS'), [FontMenuItem, onFontTrebuchetMS]);
  const TsukushiARoundGothic = useMemo(() => FontMenuItem('Tsukushi A Round Gothic', onFontTsukushiARoundGothic, 'TsukushiARoundGothic'), [FontMenuItem, onFontTsukushiARoundGothic]);
  const TsukushiBRoundGothic = useMemo(() => FontMenuItem('Tsukushi B Round Gothic', onFontTsukushiBRoundGothic, 'TsukushiBRoundGothic'), [FontMenuItem, onFontTsukushiBRoundGothic]);
  const Tunga = useMemo(() => FontMenuItem('Tunga', onFontTunga, 'Tunga'), [FontMenuItem, onFontTunga]);
  const TwCenMT = useMemo(() => FontMenuItem('Tw Cen MT', onFontTwCenMT, 'TwCenMT'), [FontMenuItem, onFontTwCenMT]);
  const UDDigiKyokasho = useMemo(() => FontMenuItem('UD Digi Kyokasho', onFontUDDigiKyokasho, 'UDDigiKyokasho'), [FontMenuItem, onFontUDDigiKyokasho]);
  const UrduTypesetting = useMemo(() => FontMenuItem('Urdu Typesetting', onFontUrduTypesetting, 'UrduTypesetting'), [FontMenuItem, onFontUrduTypesetting]);
  const Utsaah = useMemo(() => FontMenuItem('Utsaah', onFontUtsaah, 'Utsaah'), [FontMenuItem, onFontUtsaah]);
  const Vani = useMemo(() => FontMenuItem('Vani', onFontVani, 'Vani'), [FontMenuItem, onFontVani]);
  const Verdana = useMemo(() => FontMenuItem('Verdana', onFontVerdana, 'Verdana'), [FontMenuItem, onFontVerdana]);
  const VerdanaPro = useMemo(() => FontMenuItem('Verdana Pro', onFontVerdanaPro, 'VerdanaPro'), [FontMenuItem, onFontVerdanaPro]);
  const Vijaya = useMemo(() => FontMenuItem('Vijaya', onFontVijaya, 'Vijaya'), [FontMenuItem, onFontVijaya]);
  const Vrinda = useMemo(() => FontMenuItem('Vrinda', onFontVrinda, 'Vrinda'), [FontMenuItem, onFontVrinda]);
  const Waseem = useMemo(() => FontMenuItem('Waseem', onFontWaseem, 'Waseem'), [FontMenuItem, onFontWaseem]);
  const WawatiSC = useMemo(() => FontMenuItem('Wawati SC', onFontWawatiSC, 'WawatiSC'), [FontMenuItem, onFontWawatiSC]);
  const WawatiTC = useMemo(() => FontMenuItem('Wawati TC', onFontWawatiTC, 'WawatiTC'), [FontMenuItem, onFontWawatiTC]);
  const Yaziji = useMemo(() => FontMenuItem('Yaziji', onFontYaziji, 'Yaziji'), [FontMenuItem, onFontYaziji]);
  const YuGothic = useMemo(() => FontMenuItem('Yu Gothic', onFontYuGothic, 'YuGothic'), [FontMenuItem, onFontYuGothic]);
  const YuKyokashoN = useMemo(() => FontMenuItem('Yu Kyokasho N', onFontYuKyokashoN, 'YuKyokashoN'), [FontMenuItem, onFontYuKyokashoN]);
  const YuMincho = useMemo(() => FontMenuItem('Yu Mincho', onFontYuMincho, 'YuMincho'), [FontMenuItem, onFontYuMincho]);
  const YuantiSC = useMemo(() => FontMenuItem('Yuanti SC', onFontYuantiSC, 'YuantiSC'), [FontMenuItem, onFontYuantiSC]);
  const YuantiTC = useMemo(() => FontMenuItem('Yuanti TC', onFontYuantiTC, 'YuantiTC'), [FontMenuItem, onFontYuantiTC]);
  const YuppySC = useMemo(() => FontMenuItem('Yuppy SC', onFontYuppySC, 'YuppySC'), [FontMenuItem, onFontYuppySC]);
  const ZapfChancery = useMemo(() => FontMenuItem('Zapf Chancery', onFontZapfChancery, 'ZapfChancery'), [FontMenuItem, onFontZapfChancery]);
  const Zapfino = useMemo(() => FontMenuItem('Zapfino', onFontZapfino, 'Zapfino'), [FontMenuItem, onFontZapfino]);

  console.log("FontDropdown ran");

  /** Return the Dropdown */
  return (
      <Menu as="div" className="dropdown">
        <div>
          <Menu.Button className={fontDropdownOnOrOff}>
            {fontDropdownPresentation}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="menuitemsall">
            <div className="subgroup">
              {defaultFont}
            </div>
            {graphiteEnabled && <div className="subgroup">
             <span className="subheading group menuitem"><b>Graphite-enabled:</b></span>
              {akatabRW}
              {alkalamiRW}
              {alkalamiLW}
              {andikaRW}
              {awamiNastaliqRW}
              {gentiumPlusRW}
              {harmattanW}
              {lateefRW}
              {mingzatW}
              {narnoorW}
              {padaukRW}
              {scheherazadeRW}
              {tagmukayRW}
              {taiHeritageProRW}
            </div>}
            {graphiteEnabled && <div className="subgroup">
             <span className="subheading group menuitem"><b>Graphite-enabled (local):<em>{isNoGEFonts && ' -none detected-'}</em></b></span>
              {isAbyssinicaSIL && AbyssinicaSIL}
              {isAkatab && Akatab}
              {isAlkalami && Alkalami}
              {isAlkalamiLight && AlkalamiLight}
              {isAndika && Andika}
              {isAnnapurnaSIL && AnnapurnaSIL}
              {isApparatusSIL && ApparatusSIL}
              {isAwamiNastaliq && AwamiNastaliq}
              {isCharisSIL && CharisSIL}
              {isDaiBannaSILBook && DaiBannaSILBook}
              {isDaiBannaSILLight && DaiBannaSILLight}
              {isDoulosSIL && DoulosSIL}
              {isDoulosSILCipher && DoulosSILCipher}
              {isEzraSIL && EzraSIL}
              {isEzraSILSR && EzraSILSR}
              {isGalatiaSIL && GalatiaSIL}
              {isGentiumPlus && GentiumPlus}
              {isHarmattan && Harmattan}
              {isKhmerBusra && KhmerBusra}
              {isKhmerMondulkiri && KhmerMondulkiri}
              {isLateefGR && LateefGR}
              {isMingzat && Mingzat}
              {isNamdhinggoSIL && NamdhinggoSIL}
              {isNarnoor && Narnoor}
              {isNuosuSIL && NuosuSIL}
              {isPadauk && Padauk}
              {isScheherazadeNew && ScheherazadeNew}
              {isShimenkan && Shimenkan}
              {isSophiaNubian && SophiaNubian}
              {isTagmukay && Tagmukay}
              {isTaiHeritagePro && TaiHeritagePro}
            </div>}
            <div className="subgroup">
             <span className="subheading group menuitem"><b>Detected Fonts:</b></span>
              {isAdelleSansDevanagari && AdelleSansDevanagari}
              {isAharoni && Aharoni}
              {isAlBayan && AlBayan}
              {isAlFirat && AlFirat}
              {isAlKhalil && AlKhalil}
              {isAlNile && AlNile}
              {isAlRafidain && AlRafidain}
              {isAlRafidainAlFanni && AlRafidainAlFanni}
              {isAlTarikh && AlTarikh}
              {isAldhabi && Aldhabi}
              {isAlgiers && Algiers}
              {isAmericanTypewriter && AmericanTypewriter}
              {isAndaleMono && AndaleMono}
              {isAndalus && Andalus}
              {isAngsanaNew && AngsanaNew}
              {isAngsanaUPC && AngsanaUPC}
              {isAnnaiMN && AnnaiMN}
              {isAparajita && Aparajita}
              {isAppleBraille && AppleBraille}
              {isAppleCasual && AppleCasual}
              {isAppleChancery && AppleChancery}
              {isAppleGaramond && AppleGaramond}
              {isAppleGothic && AppleGothic}
              {isAppleLiGothic && AppleLiGothic}
              {isAppleLiSung && AppleLiSung}
              {isAppleMyungjo && AppleMyungjo}
              {isAppleSDGothicNeo && AppleSDGothicNeo}
              {isAquaKana && AquaKana}
              {isArabicTypesetting && ArabicTypesetting}
              {isArial && Arial}
              {isArialHebrew && ArialHebrew}
              {isArialHebrewScholar && ArialHebrewScholar}
              {isArialNarrow && ArialNarrow}
              {isArialNova && ArialNova}
              {isArialUnicodeMS && ArialUnicodeMS}
              {isAvenir && Avenir}
              {isAyuthaya && Ayuthaya}
              {isBaghdad && Baghdad}
              {isBahnschrift && Bahnschrift}
              {isBaloo && Baloo}
              {isBalooBhai && BalooBhai}
              {isBalooBhaijaan && BalooBhaijaan}
              {isBalooBhaina && BalooBhaina}
              {isBalooChettan && BalooChettan}
              {isBalooDa && BalooDa}
              {isBalooPaaji && BalooPaaji}
              {isBalooTamma && BalooTamma}
              {isBalooTammudu && BalooTammudu}
              {isBalooThambi && BalooThambi}
              {isBanglaMN && BanglaMN}
              {isBanglaSangamMN && BanglaSangamMN}
              {isBaoliSC && BaoliSC}
              {isBaoliTC && BaoliTC}
              {isBaskerville && Baskerville}
              {isBasra && Basra}
              {isBatang && Batang}
              {isBeijing && Beijing}
              {isBeirut && Beirut}
              {isBiauKai && BiauKai}
              {isBigCaslon && BigCaslon}
              {isBIZUDGothic && BIZUDGothic}
              {isBIZUDMincho && BIZUDMincho}
              {isBodoni72 && Bodoni72}
              {isBraganza && Braganza}
              {isBrowalliaNew && BrowalliaNew}
              {isBrowalliaUPC && BrowalliaUPC}
              {isBrushScript && BrushScript}
              {isCalibri && Calibri}
              {isCambayDevanagari && CambayDevanagari}
              {isCambria && Cambria}
              {isCandara && Candara}
              {isCanela && Canela}
              {isCanelaDeck && CanelaDeck}
              {isCapitals && Capitals}
              {isCenturyGothic && CenturyGothic}
              {isCenturySchoolbook && CenturySchoolbook}
              {isChalkboard && Chalkboard}
              {isChalkduster && Chalkduster}
              {isCharcoal && Charcoal}
              {isCharcoalCY && CharcoalCY}
              {isCharterRoman && CharterRoman}
              {isChicago && Chicago}
              {isCochin && Cochin}
              {isComicSans && ComicSans}
              {isComicSansMS && ComicSansMS}
              {isConsolas && Consolas}
              {isConstantia && Constantia}
              {isCooper && Cooper}
              {isCopperplate && Copperplate}
              {isCorbel && Corbel}
              {isCordiaNew && CordiaNew}
              {isCordiaUPC && CordiaUPC}
              {isCorsivaHebrew && CorsivaHebrew}
              {isCourier && Courier}
              {isCourierNew && CourierNew}
              {isDamascus && Damascus}
              {isDaunPenh && DaunPenh}
              {isDavid && David}
              {isDearJoeFour && DearJoeFour}
              {isDecoTypeNaskh && DecoTypeNaskh}
              {isDengXian && DengXian}
              {isDevanagari && Devanagari}
              {isDevanagariMT && DevanagariMT}
              {isDevanagariSangamMN && DevanagariSangamMN}
              {isDFKaiSB && DFKaiSB}
              {isDidot && Didot}
              {isDijla && Dijla}
              {isDilleniaUPC && DilleniaUPC}
              {isDiwanKufi && DiwanKufi}
              {isDiwanThuluth && DiwanThuluth}
              {isDokChampa && DokChampa}
              {isDomaineDisplay && DomaineDisplay}
              {isDotum && Dotum}
              {isEbrima && Ebrima}
              {isEstrangeloEdessa && EstrangeloEdessa}
              {isEucrosiaUPC && EucrosiaUPC}
              {isEuphemia && Euphemia}
              {isEuphemiaUCAS && EuphemiaUCAS}
              {isFangSong && FangSong}
              {isFarah && Farah}
              {isFarisi && Farisi}
              {isForgottenFuturist && ForgottenFuturist}
              {isFoundersGrotesk && FoundersGrotesk}
              {isFranklinGothic && FranklinGothic}
              {isFrankRuehl && FrankRuehl}
              {isFreesiaUPC && FreesiaUPC}
              {isFutura && Futura}
              {isGabriola && Gabriola}
              {isGadget && Gadget}
              {isGadugi && Gadugi}
              {isGalvji && Galvji}
              {isGaramond && Garamond}
              {isGautami && Gautami}
              {isGB18030Bitmap && GB18030Bitmap}
              {isGeezaPro && GeezaPro}
              {isGeezah && Geezah}
              {isGeneva && Geneva}
              {isGenevaCY && GenevaCY}
              {isGeorgia && Georgia}
              {isGeorgiaPro && GeorgiaPro}
              {isGillSans && GillSans}
              {isGillSansNova && GillSansNova}
              {isGisha && Gisha}
              {isGotu && Gotu}
              {isGraphik && Graphik}
              {isGujarati && Gujarati}
              {isGujaratiMT && GujaratiMT}
              {isGujaratiSangamMN && GujaratiSangamMN}
              {isGulim && Gulim}
              {isGungSeoche && GungSeoche}
              {isGungSeo && GungSeo}
              {isGungsuh && Gungsuh}
              {isGurmukhi && Gurmukhi}
              {isGurmukhiMN && GurmukhiMN}
              {isGurmukhiMT && GurmukhiMT}
              {isGurmukhiSangamMN && GurmukhiSangamMN}
              {isHangangche && Hangangche}
              {isHannotateSC && HannotateSC}
              {isHannotateTC && HannotateTC}
              {isHanziPenSC && HanziPenSC}
              {isHanziPenTC && HanziPenTC}
              {isHeadlineA && HeadlineA}
              {isHei && Hei}
              {isHeitiSC && HeitiSC}
              {isHelvetica && Helvetica}
              {isHelveticaCY && HelveticaCY}
              {isHelveticaNeue && HelveticaNeue}
              {isHerculanum && Herculanum}
              {isHiraginoKakuGothic && HiraginoKakuGothic}
              {isHiraginoKakuGothicPro && HiraginoKakuGothicPro}
              {isHiraginoMaruGothicPro && HiraginoMaruGothicPro}
              {isHiraginoMinchoPro && HiraginoMinchoPro}
              {isHiraginoSans && HiraginoSans}
              {isHoeflerText && HoeflerText}
              {isHopperScript && HopperScript}
              {isImpact && Impact}
              {isInaiMathi && InaiMathi}
              {isInkFree && InkFree}
              {isIowanOldStyleTitling && IowanOldStyleTitling}
              {isIrisUPC && IrisUPC}
              {isIskoolaPota && IskoolaPota}
              {isITCBodoni72 && ITCBodoni72}
              {isITFDevanagari && ITFDevanagari}
              {isITFDevanagariMarathi && ITFDevanagariMarathi}
              {isJaini && Jaini}
              {isJainiPurva && JainiPurva}
              {isJasmineUPC && JasmineUPC}
              {isJavaneseText && JavaneseText}
              {isJungGothic && JungGothic}
              {isKai && Kai}
              {isKailasa && Kailasa}
              {isKaiTi && KaiTi}
              {isKaitiSC && KaitiSC}
              {isKaitiTC && KaitiTC}
              {isKalinga && Kalinga}
              {isKannadaMN && KannadaMN}
              {isKannadaSangamMN && KannadaSangamMN}
              {isKartika && Kartika}
              {isKatari && Katari}
              {isKefa && Kefa}
              {isKeyboard && Keyboard}
              {isKhmerMN && KhmerMN}
              {isKhmerSangamMN && KhmerSangamMN}
              {isKhmerUI && KhmerUI}
              {isKodchiangUPC && KodchiangUPC}
              {isKohinoorBangla && KohinoorBangla}
              {isKohinoorDevanagari && KohinoorDevanagari}
              {isKohinoorTelugu && KohinoorTelugu}
              {isKokila && Kokila}
              {isKokonor && Kokonor}
              {isKoufiAbjadi && KoufiAbjadi}
              {isKrungthep && Krungthep}
              {isKuenstlerScript && KuenstlerScript}
              {isKufiStandardGK && KufiStandardGK}
              {isLahoreGurmukhi && LahoreGurmukhi}
              {isLaimoon && Laimoon}
              {isLaoMN && LaoMN}
              {isLaoSangamMN && LaoSangamMN}
              {isLaoUI && LaoUI}
              {isLastResort && LastResort}
              {isLatha && Latha}
              {isLavaDevanagari && LavaDevanagari}
              {isLavaKannada && LavaKannada}
              {isLavaTelugu && LavaTelugu}
              {isLeelawadee && Leelawadee}
              {isLeelawadeeUI && LeelawadeeUI}
              {isLevenimMT && LevenimMT}
              {isLibianSC && LibianSC}
              {isLibianTC && LibianTC}
              {isLiHeiPro && LiHeiPro}
              {isLilyUPC && LilyUPC}
              {isLiSongPro && LiSongPro}
              {isLucidaConsole && LucidaConsole}
              {isLucidaGrande && LucidaGrande}
              {isLucidaSans && LucidaSans}
              {isLucidaSansUnicode && LucidaSansUnicode}
              {isLuminari && Luminari}
              {isMaku && Maku}
              {isMalayalamMN && MalayalamMN}
              {isMalayalamSangamMN && MalayalamSangamMN}
              {isMalgunGothic && MalgunGothic}
              {isMangal && Mangal}
              {isMarkerFelt && MarkerFelt}
              {isMarlett && Marlett}
              {isMeiryo && Meiryo}
              {isMenlo && Menlo}
              {isMicrosoftHimalaya && MicrosoftHimalaya}
              {isMicrosoftJhengHei && MicrosoftJhengHei}
              {isMicrosoftNewTaiLue && MicrosoftNewTaiLue}
              {isMicrosoftPhagsPa && MicrosoftPhagsPa}
              {isMicrosoftSansSerif && MicrosoftSansSerif}
              {isMicrosoftTaiLe && MicrosoftTaiLe}
              {isMicrosoftUighur && MicrosoftUighur}
              {isMicrosoftYaHei && MicrosoftYaHei}
              {isMicrosoftYiBaiti && MicrosoftYiBaiti}
              {isMingLiU && MingLiU}
              {isMingLiUExtB && MingLiUExtB}
              {isMiriam && Miriam}
              {isMishafi && Mishafi}
              {isMishafiGold && MishafiGold}
              {isModak && Modak}
              {isMonaLisaSolidITCTT && MonaLisaSolidITCTT}
              {isMonaco && Monaco}
              {isMonacoCY && MonacoCY}
              {isMongolianBaiti && MongolianBaiti}
              {isMonotypeLingWai && MonotypeLingWai}
              {isMoolBoran && MoolBoran}
              {isMSGothic && MSGothic}
              {isMSMincho && MSMincho}
              {isMshtakan && Mshtakan}
              {isMukta && Mukta}
              {isMuktaMalar && MuktaMalar}
              {isMuktaVaani && MuktaVaani}
              {isMuktaMahee && MuktaMahee}
              {isMuna && Muna}
              {isMVBoli && MVBoli}
              {isMyanmarMN && MyanmarMN}
              {isMyanmarSangamMN && MyanmarSangamMN}
              {isMyanmarText && MyanmarText}
              {isMyriadArabic && MyriadArabic}
              {isNadeem && Nadeem}
              {isNanumBrushScript && NanumBrushScript}
              {isNanumPenScript && NanumPenScript}
              {isNanumGothic && NanumGothic}
              {isNanumMyeongjo && NanumMyeongjo}
              {isNarkisim && Narkisim}
              {isNeueHaasGrotskTxtPro && NeueHaasGrotskTxtPro}
              {isNewPeninim && NewPeninim}
              {isNewPeninimMT && NewPeninimMT}
              {isNewPeninimMTInclined && NewPeninimMTInclined}
              {isNewYork && NewYork}
              {isNirmalaUI && NirmalaUI}
              {isNisan && Nisan}
              {isNISCGB18030 && NISCGB18030}
              {isNoteworthy && Noteworthy}
              {isNotoNastaliqUrdu && NotoNastaliqUrdu}
              {isNotoSansJavanese && NotoSansJavanese}
              {isNotoSansKannada && NotoSansKannada}
              {isNotoSansMyanmar && NotoSansMyanmar}
              {isNotoSansOriya && NotoSansOriya}
              {isNotoSerifKannada && NotoSerifKannada}
              {isNotoSerifMyanmar && NotoSerifMyanmar}
              {isNyala && Nyala}
              {isOctoberDevanagari && OctoberDevanagari}
              {isOctoberTamil && OctoberTamil}
              {isOptima && Optima}
              {isOriyaMN && OriyaMN}
              {isOriyaSangamMN && OriyaSangamMN}
              {isOsaka && Osaka}
              {isOsakaMono && OsakaMono}
              {isPalatino && Palatino}
              {isPalatinoLinotype && PalatinoLinotype}
              {isPapyrus && Papyrus}
              {isPCMyungjo && PCMyungjo}
              {isPhosphate && Phosphate}
              {isPilGi && PilGi}
              {isPilgiche && Pilgiche}
              {isPingFangHK && PingFangHK}
              {isPingFangSC && PingFangSC}
              {isPingFangTC && PingFangTC}
              {isPlantagenetCherokee && PlantagenetCherokee}
              {isPortagoITCTT && PortagoITCTT}
              {isPrincetownLET && PrincetownLET}
              {isProdukt && Produkt}
              {isProximaNova && ProximaNova}
              {isPSLOrnanongPro && PSLOrnanongPro}
              {isPTMono && PTMono}
              {isPTSans && PTSans}
              {isPTSansNarrow && PTSansNarrow}
              {isPTSerif && PTSerif}
              {isPublicoHeadlineRoman && PublicoHeadlineRoman}
              {isQuotesCaps && QuotesCaps}
              {isQuotesScript && QuotesScript}
              {isRaanana && Raanana}
              {isRaavi && Raavi}
              {isRaya && Raya}
              {isRockwell && Rockwell}
              {isRockwellNova && RockwellNova}
              {isRod && Rod}
              {isSakkalMajalla && SakkalMajalla}
              {isSamaDevanagari && SamaDevanagari}
              {isSamaGujarati && SamaGujarati}
              {isSamaGurmukhi && SamaGurmukhi}
              {isSamaKannada && SamaKannada}
              {isSamaMalayalam && SamaMalayalam}
              {isSamaTamil && SamaTamil}
              {isSanFranciscoMono && SanFranciscoMono}
              {isSana && Sana}
              {isSand && Sand}
              {isSanskritText && SanskritText}
              {isSathu && Sathu}
              {isSauberScript && SauberScript}
              {isSchoolHouseCursiveB && SchoolHouseCursiveB}
              {isSchoolHousePrintedA && SchoolHousePrintedA}
              {isSegoePrint && SegoePrint}
              {isSegoeScript && SegoeScript}
              {isSegoeUI && SegoeUI}
              {isSeoul && Seoul}
              {isSFArabic && SFArabic}
              {isShinMyungjoNeue && ShinMyungjoNeue}
              {isShobhika && Shobhika}
              {isShonarBangla && ShonarBangla}
              {isShreeDevanagari714 && ShreeDevanagari714}
              {isShruti && Shruti}
              {isSignPainter && SignPainter}
              {isSignPainterHouseScript && SignPainterHouseScript}
              {isSilom && Silom}
              {isSimHei && SimHei}
              {isSimplifiedArabic && SimplifiedArabic}
              {isSimSong && SimSong}
              {isSimSun && SimSun}
              {isSinhalaMN && SinhalaMN}
              {isSinhalaSangamMN && SinhalaSangamMN}
              {isSitka && Sitka}
              {isSkia && Skia}
              {isSnellRoundhand && SnellRoundhand}
              {isSomer && Somer}
              {isSongtiSC && SongtiSC}
              {isSongtiTC && SongtiTC}
              {isSpotMono && SpotMono}
              {isSTFangSong && STFangSong}
              {isSTHeiti && STHeiti}
              {isSTKaiti && STKaiti}
              {isSTSong && STSong}
              {isSTXihei && STXihei}
              {isSTIXTwoText && STIXTwoText}
              {isSTIXGeneralRegular && STIXGeneralRegular}
              {isStoneSansSemITCTT && StoneSansSemITCTT}
              {isSukhumvitSetText && SukhumvitSetText}
              {isSylfaen && Sylfaen}
              {isSynchroLET && SynchroLET}
              {isTaeGraphic && TaeGraphic}
              {isTahoma && Tahoma}
              {isTaipei && Taipei}
              {isTamilMN && TamilMN}
              {isTamilSangamMN && TamilSangamMN}
              {isTechno && Techno}
              {isTeluguMN && TeluguMN}
              {isTeluguSangamMN && TeluguSangamMN}
              {isTextile && Textile}
              {isThonburi && Thonburi}
              {isTimes && Times}
              {isTimesCY && TimesCY}
              {isTimesNewRoman && TimesNewRoman}
              {isTimesRoman && TimesRoman}
              {isTiroBangla && TiroBangla}
              {isTiroDevanagariHindi && TiroDevanagariHindi}
              {isTiroDevanagariMarathi && TiroDevanagariMarathi}
              {isTiroDevanagariSanskrit && TiroDevanagariSanskrit}
              {isTiroGurmukhi && TiroGurmukhi}
              {isTiroHindi && TiroHindi}
              {isTiroKannada && TiroKannada}
              {isTiroMarathi && TiroMarathi}
              {isTiroSanskrit && TiroSanskrit}
              {isTiroTamil && TiroTamil}
              {isTiroTelugu && TiroTelugu}
              {isToppanBunkyuGothic && ToppanBunkyuGothic}
              {isToppanBunkyuMincho && ToppanBunkyuMincho}
              {isTraditionalArabic && TraditionalArabic}
              {isTrattatello && Trattatello}
              {isTrebuchetMS && TrebuchetMS}
              {isTsukushiARoundGothic && TsukushiARoundGothic}
              {isTsukushiBRoundGothic && TsukushiBRoundGothic}
              {isTunga && Tunga}
              {isTwCenMT && TwCenMT}
              {isUDDigiKyokasho && UDDigiKyokasho}
              {isUrduTypesetting && UrduTypesetting}
              {isUtsaah && Utsaah}
              {isVani && Vani}
              {isVerdana && Verdana}
              {isVerdanaPro && VerdanaPro}
              {isVijaya && Vijaya}
              {isVrinda && Vrinda}
              {isWaseem && Waseem}
              {isWawatiSC && WawatiSC}
              {isWawatiTC && WawatiTC}
              {isYaziji && Yaziji}
              {isYuGothic && YuGothic}
              {isYuKyokashoN && YuKyokashoN}
              {isYuMincho && YuMincho}
              {isYuantiSC && YuantiSC}
              {isYuantiTC && YuantiTC}
              {isYuppySC && YuppySC}
              {isZapfChancery && ZapfChancery}
              {isZapfino && Zapfino}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
  )
}