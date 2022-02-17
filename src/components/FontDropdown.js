import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function FontDropdown(props) {
  const {font, setFont} = props;

  // Test font availability.
  function doesFontExist(fontName) {
    // Create an in-memory Canvas element.
    var canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    // The text whose final pixel size will be measured
    const text = "abcdefghijklmnopqrstuvwxyz0123456789";
    // Baseline font; Must be available for the test to work.
    context.font = "72px monospace";
    // Get the size of text with the baseline font.
    const baselineSize = context.measureText(text).width;
    // Specify the font to test
    context.font = "72px '" + fontName + "', monospace";
    // Get the size of the text with the tested font.
    const newSize = context.measureText(text).width;
    // Remove the in-memory Canvas element.
    canvas = null;
    // If the size of the two text instances differs, then font exists.
    return (newSize === baselineSize ? false : true);
  }

  // Which of these Graphite-enabled fonts are locally installed?
  const isAbyssinicaSIL = doesFontExist('Abyssinica SIL')
  const isAkatab = doesFontExist('Akatab')
  const isAlkalami = doesFontExist('Alkalami')
  const isAlkalamiLight = doesFontExist('Alkalami Light')
  const isAndika = doesFontExist('Andika')
  const isAnnapurnaSIL = doesFontExist('Annapurna SIL')
  const isApparatusSIL = doesFontExist('Apparatus SIL')
  const isAwamiNastaliq = doesFontExist('Awami Nastaliq')
  const isCharisSIL = doesFontExist('Charis SIL')
  const isDaiBannaSILBook = doesFontExist('Dai Banna SIL Book')
  const isDaiBannaSILLight = doesFontExist('Dai Banna SIL Light')
  const isDoulosSIL = doesFontExist('Doulos SIL')
  const isDoulosSILCipher = doesFontExist('Doulos SIL Cipher')
  const isEzraSIL = doesFontExist('Ezra SIL')
  const isEzraSILSR = doesFontExist('Ezra SIL SR')
  const isGalatiaSIL = doesFontExist('Galatia SIL')
  const isGentiumPlus = doesFontExist('Gentium Plus')
  const isHarmattan = doesFontExist('Harmattan')
  const isKhmerBusra = doesFontExist('Khmer Busra')
  const isKhmerMondulkiri = doesFontExist('Khmer Mondulkiri')
  const isLateefGR = doesFontExist('LateefGR')
  const isMingzat = doesFontExist('Mingzat')
  const isNamdhinggoSIL = doesFontExist('Namdhinggo SIL')
  const isNarnoor = doesFontExist('Narnoor')
  const isNuosuSIL = doesFontExist('Nuosu SIL')
  const isPadauk = doesFontExist('Padauk')
  const isScheherazadeNew = doesFontExist('Scheherazade New')
  const isShimenkan = doesFontExist('Shimenkan')
  const isSophiaNubian = doesFontExist('Sophia Nubian')
  const isTagmukay = doesFontExist('Tagmukay')
  const isTaiHeritagePro = doesFontExist('Tai Heritage Pro')
  // Are any Graphite-enabled fonts locally installed?
  const isNoGEFonts = (!isAbyssinicaSIL || !isAkatab || !isAlkalami || !isAlkalamiLight || !isAndika || !isAnnapurnaSIL || !isApparatusSIL || !isAwamiNastaliq || !isCharisSIL || !isDaiBannaSILBook || !isDaiBannaSILLight || !isDoulosSIL || !isDoulosSILCipher || !isEzraSIL || !isEzraSILSR || !isGalatiaSIL || !isGentiumPlus || !isHarmattan || !isKhmerBusra || !isKhmerMondulkiri || !isLateefGR || !isMingzat || !isNamdhinggoSIL || !isNarnoor || !isNuosuSIL || !isPadauk || !isScheherazadeNew || !isShimenkan || !isSophiaNubian || !isTagmukay || !isTaiHeritagePro);

  // Which of these Windows and MacOS system fonts are locally installed?
  const isAdelleSansDevanagari = doesFontExist('Adelle Sans Devanagari')
  const isAharoni = doesFontExist('Aharoni')
  const isAlBayan = doesFontExist('Al Bayan')
  const isAlFirat = doesFontExist('Al Firat')
  const isAlKhalil = doesFontExist('Al Khalil')
  const isAlNile = doesFontExist('Al Nile')
  const isAlRafidain = doesFontExist('Al Rafidain')
  const isAlRafidainAlFanni = doesFontExist('Al Rafidain Al Fanni')
  const isAlTarikh = doesFontExist('Al Tarikh')
  const isAldhabi = doesFontExist('Aldhabi')
  const isAlgiers = doesFontExist('Algiers')
  const isAmericanTypewriter = doesFontExist('American Typewriter')
  const isAndaleMono = doesFontExist('Andalé Mono')
  const isAndalus = doesFontExist('Andalus')
  const isAngsanaNew = doesFontExist('Angsana New')
  const isAngsanaUPC = doesFontExist('AngsanaUPC')
  const isAnnaiMN = doesFontExist('Annai MN')
  const isAparajita = doesFontExist('Aparajita')
  const isAppleBraille = doesFontExist('Apple Braille')
  const isAppleCasual = doesFontExist('Apple Casual')
  const isAppleChancery = doesFontExist('Apple Chancery')
  const isAppleGaramond = doesFontExist('Apple Garamond')
  const isAppleGothic = doesFontExist('Apple Gothic')
  const isAppleLiGothic = doesFontExist('Apple LiGothic')
  const isAppleLiSung = doesFontExist('Apple LiSung')
  const isAppleMyungjo = doesFontExist('Apple Myungjo')
  const isAppleSDGothicNeo = doesFontExist('Apple SD Gothic Neo')
  const isAquaKana = doesFontExist('AquaKana')
  const isArabicTypesetting = doesFontExist('Arabic Typesetting')
  const isArial = doesFontExist('Arial')
  const isArialHebrew = doesFontExist('Arial Hebrew')
  const isArialHebrewScholar = doesFontExist('Arial Hebrew Scholar')
  const isArialNarrow = doesFontExist('Arial Narrow')
  const isArialNova = doesFontExist('Arial Nova')
  const isArialUnicodeMS = doesFontExist('Arial Unicode MS')
  const isAvenir = doesFontExist('Avenir')
  const isAyuthaya = doesFontExist('Ayuthaya')
  const isBaghdad = doesFontExist('Baghdad')
  const isBahnschrift = doesFontExist('Bahnschrift')
  const isBaloo = doesFontExist('Baloo')
  const isBalooBhai = doesFontExist('Baloo Bhai')
  const isBalooBhaijaan = doesFontExist('Baloo Bhaijaan')
  const isBalooBhaina = doesFontExist('Baloo Bhaina')
  const isBalooChettan = doesFontExist('Baloo Chettan')
  const isBalooDa = doesFontExist('Baloo Da')
  const isBalooPaaji = doesFontExist('Baloo Paaji')
  const isBalooTamma = doesFontExist('Baloo Tamma')
  const isBalooTammudu = doesFontExist('Baloo Tammudu')
  const isBalooThambi = doesFontExist('Baloo Thambi')
  const isBanglaMN = doesFontExist('Bangla MN')
  const isBanglaSangamMN = doesFontExist('Bangla Sangam MN')
  const isBaoliSC = doesFontExist('Baoli SC')
  const isBaoliTC = doesFontExist('Baoli TC')
  const isBaskerville = doesFontExist('Baskerville')
  const isBasra = doesFontExist('Basra')
  const isBatang = doesFontExist('Batang')
  const isBeijing = doesFontExist('Beijing')
  const isBeirut = doesFontExist('Beirut')
  const isBiauKai = doesFontExist('BiauKai')
  const isBigCaslon = doesFontExist('Big Caslon')
  const isBIZUDGothic = doesFontExist('BIZ UDGothic')
  const isBIZUDMincho = doesFontExist('BIZ UDMincho')
  const isBodoni72 = doesFontExist('Bodoni 72')
  const isBraganza = doesFontExist('Braganza')
  const isBrowalliaNew = doesFontExist('Browallia New')
  const isBrowalliaUPC = doesFontExist('BrowalliaUPC')
  const isBrushScript = doesFontExist('Brush Script')
  const isCalibri = doesFontExist('Calibri')
  const isCambayDevanagari = doesFontExist('Cambay Devanagari')
  const isCambria = doesFontExist('Cambria')
  const isCandara = doesFontExist('Candara')
  const isCanela = doesFontExist('Canela')
  const isCanelaDeck = doesFontExist('Canela Deck')
  const isCapitals = doesFontExist('Capitals')
  const isCenturyGothic = doesFontExist('Century Gothic')
  const isCenturySchoolbook = doesFontExist('Century Schoolbook')
  const isChalkboard = doesFontExist('Chalkboard')
  const isChalkduster = doesFontExist('Chalkduster')
  const isCharcoal = doesFontExist('Charcoal')
  const isCharcoalCY = doesFontExist('Charcoal CY')
  const isCharterRoman = doesFontExist('Charter Roman')
  const isChicago = doesFontExist('Chicago')
  const isCochin = doesFontExist('Cochin')
  const isComicSans = doesFontExist('Comic Sans')
  const isComicSansMS = doesFontExist('Comic Sans MS')
  const isConsolas = doesFontExist('Consolas')
  const isConstantia = doesFontExist('Constantia')
  const isCooper = doesFontExist('Cooper')
  const isCopperplate = doesFontExist('Copperplate')
  const isCorbel = doesFontExist('Corbel')
  const isCordiaNew = doesFontExist('Cordia New')
  const isCordiaUPC = doesFontExist('CordiaUPC')
  const isCorsivaHebrew = doesFontExist('Corsiva Hebrew')
  const isCourier = doesFontExist('Courier')
  const isCourierNew = doesFontExist('Courier New')
  const isDamascus = doesFontExist('Damascus')
  const isDaunPenh = doesFontExist('DaunPenh')
  const isDavid = doesFontExist('David')
  const isDearJoeFour = doesFontExist('Dear Joe Four')
  const isDecoTypeNaskh = doesFontExist('DecoType Naskh')
  const isDengXian = doesFontExist('DengXian')
  const isDevanagari = doesFontExist('Devanagari')
  const isDevanagariMT = doesFontExist('Devanagari MT')
  const isDevanagariSangamMN = doesFontExist('Devanagari Sangam MN')
  const isDFKaiSB = doesFontExist('DFKai-SB')
  const isDidot = doesFontExist('Didot')
  const isDijla = doesFontExist('Dijla')
  const isDilleniaUPC = doesFontExist('DilleniaUPC')
  const isDiwanKufi = doesFontExist('Diwan Kufi')
  const isDiwanThuluth = doesFontExist('Diwan Thuluth')
  const isDokChampa = doesFontExist('DokChampa')
  const isDomaineDisplay = doesFontExist('Domaine Display')
  const isDotum = doesFontExist('Dotum')
  const isEbrima = doesFontExist('Ebrima')
  const isEstrangeloEdessa = doesFontExist('Estrangelo Edessa')
  const isEucrosiaUPC = doesFontExist('EucrosiaUPC')
  const isEuphemia = doesFontExist('Euphemia')
  const isEuphemiaUCAS = doesFontExist('Euphemia UCAS')
  const isFangSong = doesFontExist('FangSong')
  const isFarah = doesFontExist('Farah')
  const isFarisi = doesFontExist('Farisi')
  const isForgottenFuturist = doesFontExist('Forgotten Futurist')
  const isFoundersGrotesk = doesFontExist('Founders Grotesk')
  const isFranklinGothic = doesFontExist('Franklin Gothic')
  const isFrankRuehl = doesFontExist('FrankRuehl')
  const isFreesiaUPC = doesFontExist('FreesiaUPC')
  const isFutura = doesFontExist('Futura')
  const isGabriola = doesFontExist('Gabriola')
  const isGadget = doesFontExist('Gadget')
  const isGadugi = doesFontExist('Gadugi')
  const isGalvji = doesFontExist('Galvji')
  const isGaramond = doesFontExist('Garamond')
  const isGautami = doesFontExist('Gautami')
  const isGB18030Bitmap = doesFontExist('GB18030 Bitmap')
  const isGeezaPro = doesFontExist('Geeza Pro')
  const isGeezah = doesFontExist('Geezah')
  const isGeneva = doesFontExist('Geneva')
  const isGenevaCY = doesFontExist('Geneva CY')
  const isGeorgia = doesFontExist('Georgia')
  const isGeorgiaPro = doesFontExist('Georgia Pro')
  const isGillSans = doesFontExist('Gill Sans')
  const isGillSansNova = doesFontExist('Gill Sans Nova')
  const isGisha = doesFontExist('Gisha')
  const isGotu = doesFontExist('Gotu')
  const isGraphik = doesFontExist('Graphik')
  const isGujarati = doesFontExist('Gujarati')
  const isGujaratiMT = doesFontExist('Gujarati MT')
  const isGujaratiSangamMN = doesFontExist('Gujarati Sangam MN')
  const isGulim = doesFontExist('Gulim')
  const isGungSeoche = doesFontExist('Gung Seoche')
  const isGungSeo = doesFontExist('GungSeo')
  const isGungsuh = doesFontExist('Gungsuh')
  const isGurmukhi = doesFontExist('Gurmukhi')
  const isGurmukhiMN = doesFontExist('Gurmukhi MN')
  const isGurmukhiMT = doesFontExist('Gurmukhi MT')
  const isGurmukhiSangamMN = doesFontExist('Gurmukhi Sangam MN')
  const isHangangche = doesFontExist('Hangangche')
  const isHannotateSC = doesFontExist('Hannotate SC')
  const isHannotateTC = doesFontExist('Hannotate TC')
  const isHanziPenSC = doesFontExist('HanziPen SC')
  const isHanziPenTC = doesFontExist('HanziPen TC')
  const isHeadlineA = doesFontExist('HeadlineA')
  const isHei = doesFontExist('Hei')
  const isHeitiSC = doesFontExist('Heiti SC')
  const isHelvetica = doesFontExist('Helvetica')
  const isHelveticaCY = doesFontExist('Helvetica CY')
  const isHelveticaNeue = doesFontExist('Helvetica Neue')
  const isHerculanum = doesFontExist('Herculanum')
  const isHiraginoKakuGothic = doesFontExist('Hiragino Kaku Gothic')
  const isHiraginoKakuGothicPro = doesFontExist('Hiragino Kaku Gothic Pro')
  const isHiraginoMaruGothicPro = doesFontExist('Hiragino Maru Gothic Pro')
  const isHiraginoMinchoPro = doesFontExist('Hiragino Mincho Pro')
  const isHiraginoSans = doesFontExist('Hiragino Sans')
  const isHoeflerText = doesFontExist('Hoefler Text')
  const isHopperScript = doesFontExist('Hopper Script')
  const isImpact = doesFontExist('Impact')
  const isInaiMathi = doesFontExist('Inai Mathi')
  const isInkFree = doesFontExist('Ink Free')
  const isIowanOldStyleTitling = doesFontExist('Iowan Old Style Titling')
  const isIrisUPC = doesFontExist('IrisUPC')
  const isIskoolaPota = doesFontExist('Iskoola Pota')
  const isITCBodoni72 = doesFontExist('ITC Bodoni 72')
  const isITFDevanagari = doesFontExist('ITF Devanagari')
  const isITFDevanagariMarathi = doesFontExist('ITF Devanagari Marathi')
  const isJaini = doesFontExist('Jaini')
  const isJainiPurva = doesFontExist('Jaini Purva')
  const isJasmineUPC = doesFontExist('JasmineUPC')
  const isJavaneseText = doesFontExist('Javanese Text')
  const isJungGothic = doesFontExist('Jung Gothic')
  const isKai = doesFontExist('Kai')
  const isKailasa = doesFontExist('Kailasa')
  const isKaiTi = doesFontExist('KaiTi')
  const isKaitiSC = doesFontExist('Kaiti SC')
  const isKaitiTC = doesFontExist('Kaiti TC')
  const isKalinga = doesFontExist('Kalinga')
  const isKannadaMN = doesFontExist('Kannada MN')
  const isKannadaSangamMN = doesFontExist('Kannada Sangam MN')
  const isKartika = doesFontExist('Kartika')
  const isKatari = doesFontExist('Katari')
  const isKefa = doesFontExist('Kefa')
  const isKeyboard = doesFontExist('Keyboard')
  const isKhmerMN = doesFontExist('Khmer MN')
  const isKhmerSangamMN = doesFontExist('Khmer Sangam MN')
  const isKhmerUI = doesFontExist('Khmer UI')
  const isKodchiangUPC = doesFontExist('KodchiangUPC')
  const isKohinoorBangla = doesFontExist('Kohinoor Bangla')
  const isKohinoorDevanagari = doesFontExist('Kohinoor Devanagari')
  const isKohinoorTelugu = doesFontExist('Kohinoor Telugu')
  const isKokila = doesFontExist('Kokila')
  const isKokonor = doesFontExist('Kokonor')
  const isKoufiAbjadi = doesFontExist('Koufi Abjadi')
  const isKrungthep = doesFontExist('Krungthep')
  const isKuenstlerScript = doesFontExist('Kuenstler Script')
  const isKufiStandardGK = doesFontExist('KufiStandard GK')
  const isLahoreGurmukhi = doesFontExist('Lahore Gurmukhi')
  const isLaimoon = doesFontExist('Laimoon')
  const isLaoMN = doesFontExist('Lao MN')
  const isLaoSangamMN = doesFontExist('Lao Sangam MN')
  const isLaoUI = doesFontExist('Lao UI')
  const isLastResort = doesFontExist('LastResort')
  const isLatha = doesFontExist('Latha')
  const isLavaDevanagari = doesFontExist('Lava Devanagari')
  const isLavaKannada = doesFontExist('Lava Kannada')
  const isLavaTelugu = doesFontExist('Lava Telugu')
  const isLeelawadee = doesFontExist('Leelawadee')
  const isLeelawadeeUI = doesFontExist('Leelawadee UI')
  const isLevenimMT = doesFontExist('Levenim MT')
  const isLibianSC = doesFontExist('Libian SC')
  const isLibianTC = doesFontExist('Libian TC')
  const isLiHeiPro = doesFontExist('LiHei Pro')
  const isLilyUPC = doesFontExist('LilyUPC')
  const isLiSongPro = doesFontExist('LiSong Pro')
  const isLucidaConsole = doesFontExist('Lucida Console')
  const isLucidaGrande = doesFontExist('Lucida Grande')
  const isLucidaSans = doesFontExist('Lucida Sans')
  const isLucidaSansUnicode = doesFontExist('Lucida Sans Unicode')
  const isLuminari = doesFontExist('Luminari')
  const isMaku = doesFontExist('Maku')
  const isMalayalamMN = doesFontExist('Malayalam MN')
  const isMalayalamSangamMN = doesFontExist('Malayalam Sangam MN')
  const isMalgunGothic = doesFontExist('Malgun Gothic')
  const isMangal = doesFontExist('Mangal')
  const isMarkerFelt = doesFontExist('Marker Felt')
  const isMarlett = doesFontExist('Marlett')
  const isMeiryo = doesFontExist('Meiryo')
  const isMenlo = doesFontExist('Menlo')
  const isMicrosoftHimalaya = doesFontExist('Microsoft Himalaya')
  const isMicrosoftJhengHei = doesFontExist('Microsoft JhengHei')
  const isMicrosoftNewTaiLue = doesFontExist('Microsoft New Tai Lue')
  const isMicrosoftPhagsPa = doesFontExist('Microsoft PhagsPa')
  const isMicrosoftSansSerif = doesFontExist('Microsoft Sans Serif')
  const isMicrosoftTaiLe = doesFontExist('Microsoft Tai Le')
  const isMicrosoftUighur = doesFontExist('Microsoft Uighur')
  const isMicrosoftYaHei = doesFontExist('Microsoft YaHei')
  const isMicrosoftYiBaiti = doesFontExist('Microsoft Yi Baiti')
  const isMingLiU = doesFontExist('MingLiU')
  const isMingLiUExtB = doesFontExist('MingLiU-ExtB')
  const isMiriam = doesFontExist('Miriam')
  const isMishafi = doesFontExist('Mishafi')
  const isMishafiGold = doesFontExist('Mishafi Gold')
  const isModak = doesFontExist('Modak')
  const isMonaLisaSolidITCTT = doesFontExist('Mona Lisa Solid ITC TT')
  const isMonaco = doesFontExist('Monaco')
  const isMonacoCY = doesFontExist('Monaco CY')
  const isMongolianBaiti = doesFontExist('Mongolian Baiti')
  const isMonotypeLingWai = doesFontExist('Monotype LingWai')
  const isMoolBoran = doesFontExist('MoolBoran')
  const isMSGothic = doesFontExist('MS Gothic')
  const isMSMincho = doesFontExist('MS Mincho')
  const isMshtakan = doesFontExist('Mshtakan')
  const isMukta = doesFontExist('Mukta')
  const isMuktaMalar = doesFontExist('Mukta Malar')
  const isMuktaVaani = doesFontExist('Mukta Vaani')
  const isMuktaMahee = doesFontExist('MuktaMahee')
  const isMuna = doesFontExist('Muna')
  const isMVBoli = doesFontExist('MV Boli')
  const isMyanmarMN = doesFontExist('Myanmar MN')
  const isMyanmarSangamMN = doesFontExist('Myanmar Sangam MN')
  const isMyanmarText = doesFontExist('Myanmar Text')
  const isMyriadArabic = doesFontExist('Myriad Arabic')
  const isNadeem = doesFontExist('Nadeem')
  const isNanumBrushScript = doesFontExist('Nanum Brush Script')
  const isNanumPenScript = doesFontExist('Nanum Pen Script')
  const isNanumGothic = doesFontExist('NanumGothic')
  const isNanumMyeongjo = doesFontExist('NanumMyeongjo')
  const isNarkisim = doesFontExist('Narkisim')
  const isNeueHaasGrotskTxtPro = doesFontExist('Neue Haas Grotesk Text Pro')
  const isNewPeninim = doesFontExist('New Peninim')
  const isNewPeninimMT = doesFontExist('New Peninim MT')
  const isNewPeninimMTInclined = doesFontExist('New Peninim MT Inclined')
  const isNewYork = doesFontExist('New York')
  const isNirmalaUI = doesFontExist('Nirmala UI')
  const isNisan = doesFontExist('Nisan')
  const isNISCGB18030 = doesFontExist('NISC GB18030')
  const isNoteworthy = doesFontExist('Noteworthy')
  const isNotoNastaliqUrdu = doesFontExist('Noto Nastaliq Urdu')
  const isNotoSansJavanese = doesFontExist('Noto Sans Javanese')
  const isNotoSansKannada = doesFontExist('Noto Sans Kannada')
  const isNotoSansMyanmar = doesFontExist('Noto Sans Myanmar')
  const isNotoSansOriya = doesFontExist('Noto Sans Oriya')
  const isNotoSerifKannada = doesFontExist('Noto Serif Kannada')
  const isNotoSerifMyanmar = doesFontExist('Noto Serif Myanmar')
  const isNyala = doesFontExist('Nyala')
  const isOctoberDevanagari = doesFontExist('October Devanagari')
  const isOctoberTamil = doesFontExist('October Tamil')
  const isOptima = doesFontExist('Optima')
  const isOriyaMN = doesFontExist('Oriya MN')
  const isOriyaSangamMN = doesFontExist('Oriya Sangam MN')
  const isOsaka = doesFontExist('Osaka')
  const isOsakaMono = doesFontExist('Osaka-Mono')
  const isPalatino = doesFontExist('Palatino')
  const isPalatinoLinotype = doesFontExist('Palatino Linotype')
  const isPapyrus = doesFontExist('Papyrus')
  const isPCMyungjo = doesFontExist('PC Myungjo')
  const isPhosphate = doesFontExist('Phosphate')
  const isPilGi = doesFontExist('PilGi')
  const isPilgiche = doesFontExist('Pilgiche')
  const isPingFangHK = doesFontExist('PingFang HK')
  const isPingFangSC = doesFontExist('PingFang SC')
  const isPingFangTC = doesFontExist('PingFang TC')
  const isPlantagenetCherokee = doesFontExist('Plantagenet Cherokee')
  const isPortagoITCTT = doesFontExist('PortagoITC TT')
  const isPrincetownLET = doesFontExist('Princetown LET')
  const isProdukt = doesFontExist('Produkt')
  const isProximaNova = doesFontExist('Proxima Nova')
  const isPSLOrnanongPro = doesFontExist('PSL Ornanong Pro')
  const isPTMono = doesFontExist('PT Mono')
  const isPTSans = doesFontExist('PT Sans')
  const isPTSansNarrow = doesFontExist('PT Sans Narrow')
  const isPTSerif = doesFontExist('PT Serif')
  const isPublicoHeadlineRoman = doesFontExist('Publico Headline Roman')
  const isQuotesCaps = doesFontExist('Quotes Caps')
  const isQuotesScript = doesFontExist('Quotes Script')
  const isRaanana = doesFontExist('Raanana')
  const isRaavi = doesFontExist('Raavi')
  const isRaya = doesFontExist('Raya')
  const isRockwell = doesFontExist('Rockwell')
  const isRockwellNova = doesFontExist('Rockwell Nova')
  const isRod = doesFontExist('Rod')
  const isSakkalMajalla = doesFontExist('Sakkal Majalla')
  const isSamaDevanagari = doesFontExist('Sama Devanagari')
  const isSamaGujarati = doesFontExist('Sama Gujarati')
  const isSamaGurmukhi = doesFontExist('Sama Gurmukhi')
  const isSamaKannada = doesFontExist('Sama Kannada')
  const isSamaMalayalam = doesFontExist('Sama Malayalam')
  const isSamaTamil = doesFontExist('Sama Tamil')
  const isSanFranciscoMono = doesFontExist('San Francisco Mono')
  const isSana = doesFontExist('Sana')
  const isSand = doesFontExist('Sand')
  const isSanskritText = doesFontExist('Sanskrit Text')
  const isSathu = doesFontExist('Sathu')
  const isSauberScript = doesFontExist('Sauber Script')
  const isSchoolHouseCursiveB = doesFontExist('SchoolHouse Cursive B')
  const isSchoolHousePrintedA = doesFontExist('SchoolHouse Printed A')
  const isSegoePrint = doesFontExist('Segoe Print')
  const isSegoeScript = doesFontExist('Segoe Script')
  const isSegoeUI = doesFontExist('Segoe UI')
  const isSeoul = doesFontExist('Seoul')
  const isSFArabic = doesFontExist('SF Arabic')
  const isShinMyungjoNeue = doesFontExist('Shin Myungjo Neue')
  const isShobhika = doesFontExist('Shobhika')
  const isShonarBangla = doesFontExist('Shonar Bangla')
  const isShreeDevanagari714 = doesFontExist('Shree Devanagari 714')
  const isShruti = doesFontExist('Shruti')
  const isSignPainter = doesFontExist('SignPainter')
  const isSignPainterHouseScript = doesFontExist('SignPainter-HouseScript')
  const isSilom = doesFontExist('Silom')
  const isSimHei = doesFontExist('SimHei')
  const isSimplifiedArabic = doesFontExist('Simplified Arabic')
  const isSimSong = doesFontExist('SimSong')
  const isSimSun = doesFontExist('SimSun')
  const isSinhalaMN = doesFontExist('Sinhala MN')
  const isSinhalaSangamMN = doesFontExist('Sinhala Sangam MN')
  const isSitka = doesFontExist('Sitka')
  const isSkia = doesFontExist('Skia')
  const isSnellRoundhand = doesFontExist('Snell Roundhand')
  const isSomer = doesFontExist('Somer')
  const isSongtiSC = doesFontExist('Songti SC')
  const isSongtiTC = doesFontExist('Songti TC')
  const isSpotMono = doesFontExist('Spot Mono')
  const isSTFangSong = doesFontExist('ST FangSong')
  const isSTHeiti = doesFontExist('ST Heiti')
  const isSTKaiti = doesFontExist('ST Kaiti')
  const isSTSong = doesFontExist('ST Song')
  const isSTXihei = doesFontExist('ST Xihei')
  const isSTIXTwoText = doesFontExist('STIX Two Text')
  const isSTIXGeneralRegular = doesFontExist('STIXGeneral-Regular')
  const isStoneSansSemITCTT = doesFontExist('Stone Sans Sem ITC TT')
  const isSukhumvitSetText = doesFontExist('Sukhumvit Set Text')
  const isSylfaen = doesFontExist('Sylfaen')
  const isSynchroLET = doesFontExist('Synchro LET')
  const isTaeGraphic = doesFontExist('Tae Graphic')
  const isTahoma = doesFontExist('Tahoma')
  const isTaipei = doesFontExist('Taipei')
  const isTamilMN = doesFontExist('Tamil MN')
  const isTamilSangamMN = doesFontExist('Tamil Sangam MN')
  const isTechno = doesFontExist('Techno')
  const isTeluguMN = doesFontExist('Telugu MN')
  const isTeluguSangamMN = doesFontExist('Telugu Sangam MN')
  const isTextile = doesFontExist('Textile')
  const isThonburi = doesFontExist('Thonburi')
  const isTimes = doesFontExist('Times')
  const isTimesCY = doesFontExist('Times CY')
  const isTimesNewRoman = doesFontExist('Times New Roman')
  const isTimesRoman = doesFontExist('Times Roman')
  const isTiroBangla = doesFontExist('Tiro Bangla')
  const isTiroDevanagariHindi = doesFontExist('Tiro Devanagari Hindi')
  const isTiroDevanagariMarathi = doesFontExist('Tiro Devanagari Marathi')
  const isTiroDevanagariSanskrit = doesFontExist('Tiro Devanagari Sanskrit')
  const isTiroGurmukhi = doesFontExist('Tiro Gurmukhi')
  const isTiroHindi = doesFontExist('Tiro Hindi')
  const isTiroKannada = doesFontExist('Tiro Kannada')
  const isTiroMarathi = doesFontExist('Tiro Marathi')
  const isTiroSanskrit = doesFontExist('Tiro Sanskrit')
  const isTiroTamil = doesFontExist('Tiro Tamil')
  const isTiroTelugu = doesFontExist('Tiro Telugu')
  const isToppanBunkyuGothic = doesFontExist('Toppan Bunkyu Gothic')
  const isToppanBunkyuMincho = doesFontExist('Toppan Bunkyu Mincho')
  const isTraditionalArabic = doesFontExist('Traditional Arabic')
  const isTrattatello = doesFontExist('Trattatello')
  const isTrebuchetMS = doesFontExist('Trebuchet MS')
  const isTsukushiARoundGothic = doesFontExist('Tsukushi A Round Gothic')
  const isTsukushiBRoundGothic = doesFontExist('Tsukushi B Round Gothic')
  const isTunga = doesFontExist('Tunga')
  const isTwCenMT = doesFontExist('Tw Cen MT')
  const isUDDigiKyokasho = doesFontExist('UD Digi Kyokasho')
  const isUrduTypesetting = doesFontExist('Urdu Typesetting')
  const isUtsaah = doesFontExist('Utsaah')
  const isVani = doesFontExist('Vani')
  const isVerdana = doesFontExist('Verdana')
  const isVerdanaPro = doesFontExist('Verdana Pro')
  const isVijaya = doesFontExist('Vijaya')
  const isVrinda = doesFontExist('Vrinda')
  const isWaseem = doesFontExist('Waseem')
  const isWawatiSC = doesFontExist('Wawati SC')
  const isWawatiTC = doesFontExist('Wawati TC')
  const isYaziji = doesFontExist('Yaziji')
  const isYuGothic = doesFontExist('Yu Gothic')
  const isYuKyokashoN = doesFontExist('Yu Kyokasho N')
  const isYuMincho = doesFontExist('Yu Mincho')
  const isYuantiSC = doesFontExist('Yuanti SC')
  const isYuantiTC = doesFontExist('Yuanti TC')
  const isYuppySC = doesFontExist('Yuppy SC')
  const isZapfChancery = doesFontExist('Zapf Chancery')
  const isZapfino = doesFontExist('Zapfino')
        
  const graphiteEnabled = (navigator.userAgent.toLowerCase().indexOf('firefox') > -1 ? true : false);

  /** Graphite-enabled woff and woff2 fonts included */
  const onFontClear = () => { setFont(''); };
  const onFontAkatabRW = () => { setFont('AkatabRW'); };
  const onFontAlkalamiLW = () => { setFont('AlkalamiLW'); };
  const onFontAlkalamiRW = () => { setFont('AlkalamiRW'); };
  const onFontAndikaRW = () => { setFont('AndikaRW'); };
  const onFontAwamiNastaliqRW = () => { setFont('AwamiNastaliqRW'); };
  const onFontGentiumPlusRW = () => { setFont('GentiumPlusRW'); };
  const onFontHarmattanW = () => { setFont('HarmattanW'); };
  const onFontLateefRW = () => { setFont('LateefRW'); };
  const onFontMingzatW = () => { setFont('MingzatW'); };
  const onFontNarnoorW = () => { setFont('NarnoorW'); };
  const onFontPadaukRW = () => { setFont('PadaukRW'); };
  const onFontScheherazadeRW = () => { setFont('ScheherazadeRW'); };
  const onFontTagmukayRW = () => { setFont('TagmukayRW'); };
  const onFontTaiHeritageProRW = () => { setFont('TaiHeritageProRW'); };

  /** Graphite-enabled fonts if locally installed */
  const onFontAbyssinicaSIL = () => { setFont('AbyssinicaSIL'); };
  const onFontAkatab = () => { setFont('Akatab'); };
  const onFontAlkalami = () => { setFont('Alkalami'); };
  const onFontAlkalamiLight = () => { setFont('AlkalamiLight'); };
  const onFontAndika = () => { setFont('Andika'); };
  const onFontAnnapurnaSIL = () => { setFont('AnnapurnaSIL'); };
  const onFontApparatusSIL = () => { setFont('ApparatusSIL'); };
  const onFontAwamiNastaliq = () => { setFont('AwamiNastaliq'); };
  const onFontCharisSIL = () => { setFont('CharisSIL'); };
  const onFontDaiBannaSILBook = () => { setFont('DaiBannaSILBook'); };
  const onFontDaiBannaSILLight = () => { setFont('DaiBannaSILLight'); };
  const onFontDoulosSIL = () => { setFont('DoulosSIL'); };
  const onFontDoulosSILCipher = () => { setFont('DoulosSILCipher'); };
  const onFontEzraSIL = () => { setFont('EzraSIL'); };
  const onFontEzraSILSR = () => { setFont('EzraSILSR'); };
  const onFontGalatiaSIL = () => { setFont('GalatiaSIL'); };
  const onFontGentiumPlus = () => { setFont('GentiumPlus'); };
  const onFontHarmattan = () => { setFont('Harmattan'); };
  const onFontKhmerBusra = () => { setFont('KhmerBusra'); };
  const onFontKhmerMondulkiri = () => { setFont('KhmerMondulkiri'); };
  const onFontLateefGR = () => { setFont('LateefGR'); };
  const onFontMingzat = () => { setFont('Mingzat'); };
  const onFontNamdhinggoSIL = () => { setFont('NamdhinggoSIL'); };
  const onFontNarnoor = () => { setFont('Narnoor'); };
  const onFontNuosuSIL = () => { setFont('NuosuSIL'); };
  const onFontPadauk = () => { setFont('Padauk'); };
  const onFontScheherazadeNew = () => { setFont('ScheherazadeNew'); };
  const onFontShimenkan = () => { setFont('Shimenkan'); };
  const onFontSophiaNubian = () => { setFont('SophiaNubian'); };
  const onFontTagmukay = () => { setFont('Tagmukay'); };
  const onFontTaiHeritagePro = () => { setFont('TaiHeritagePro'); };

  /** Windows 11 and MacOS system fonts if locally installed */
  const onFontAdelleSansDevanagari = () => { setFont('AdelleSansDevanagari'); };
  const onFontAharoni = () => { setFont('Aharoni'); };
  const onFontAlBayan = () => { setFont('AlBayan'); };
  const onFontAlFirat = () => { setFont('AlFirat'); };
  const onFontAlKhalil = () => { setFont('AlKhalil'); };
  const onFontAlNile = () => { setFont('AlNile'); };
  const onFontAlRafidain = () => { setFont('AlRafidain'); };
  const onFontAlRafidainAlFanni = () => { setFont('AlRafidainAlFanni'); };
  const onFontAlTarikh = () => { setFont('AlTarikh'); };
  const onFontAldhabi = () => { setFont('Aldhabi'); };
  const onFontAlgiers = () => { setFont('Algiers'); };
  const onFontAmericanTypewriter = () => { setFont('AmericanTypewriter'); };
  const onFontAndaleMono = () => { setFont('AndaleMono'); };
  const onFontAndalus = () => { setFont('Andalus'); };
  const onFontAngsanaNew = () => { setFont('AngsanaNew'); };
  const onFontAngsanaUPC = () => { setFont('AngsanaUPC'); };
  const onFontAnnaiMN = () => { setFont('AnnaiMN'); };
  const onFontAparajita = () => { setFont('Aparajita'); };
  const onFontAppleBraille = () => { setFont('AppleBraille'); };
  const onFontAppleCasual = () => { setFont('AppleCasual'); };
  const onFontAppleChancery = () => { setFont('AppleChancery'); };
  const onFontAppleGaramond = () => { setFont('AppleGaramond'); };
  const onFontAppleGothic = () => { setFont('AppleGothic'); };
  const onFontAppleLiGothic = () => { setFont('AppleLiGothic'); };
  const onFontAppleLiSung = () => { setFont('AppleLiSung'); };
  const onFontAppleMyungjo = () => { setFont('AppleMyungjo'); };
  const onFontAppleSDGothicNeo = () => { setFont('AppleSDGothicNeo'); };
  const onFontAquaKana = () => { setFont('AquaKana'); };
  const onFontArabicTypesetting = () => { setFont('ArabicTypesetting'); };
  const onFontArial = () => { setFont('Arial'); };
  const onFontArialHebrew = () => { setFont('ArialHebrew'); };
  const onFontArialHebrewScholar = () => { setFont('ArialHebrewScholar'); };
  const onFontArialNarrow = () => { setFont('ArialNarrow'); };
  const onFontArialNova = () => { setFont('ArialNova'); };
  const onFontArialUnicodeMS = () => { setFont('ArialUnicodeMS'); };
  const onFontAvenir = () => { setFont('Avenir'); };
  const onFontAyuthaya = () => { setFont('Ayuthaya'); };
  const onFontBaghdad = () => { setFont('Baghdad'); };
  const onFontBahnschrift = () => { setFont('Bahnschrift'); };
  const onFontBaloo = () => { setFont('Baloo'); };
  const onFontBalooBhai = () => { setFont('BalooBhai'); };
  const onFontBalooBhaijaan = () => { setFont('BalooBhaijaan'); };
  const onFontBalooBhaina = () => { setFont('BalooBhaina'); };
  const onFontBalooChettan = () => { setFont('BalooChettan'); };
  const onFontBalooDa = () => { setFont('BalooDa'); };
  const onFontBalooPaaji = () => { setFont('BalooPaaji'); };
  const onFontBalooTamma = () => { setFont('BalooTamma'); };
  const onFontBalooTammudu = () => { setFont('BalooTammudu'); };
  const onFontBalooThambi = () => { setFont('BalooThambi'); };
  const onFontBanglaMN = () => { setFont('BanglaMN'); };
  const onFontBanglaSangamMN = () => { setFont('BanglaSangamMN'); };
  const onFontBaoliSC = () => { setFont('BaoliSC'); };
  const onFontBaoliTC = () => { setFont('BaoliTC'); };
  const onFontBaskerville = () => { setFont('Baskerville'); };
  const onFontBasra = () => { setFont('Basra'); };
  const onFontBatang = () => { setFont('Batang'); };
  const onFontBeijing = () => { setFont('Beijing'); };
  const onFontBeirut = () => { setFont('Beirut'); };
  const onFontBiauKai = () => { setFont('BiauKai'); };
  const onFontBigCaslon = () => { setFont('BigCaslon'); };
  const onFontBIZUDGothic = () => { setFont('BIZUDGothic'); };
  const onFontBIZUDMincho = () => { setFont('BIZUDMincho'); };
  const onFontBodoni72 = () => { setFont('Bodoni72'); };
  const onFontBraganza = () => { setFont('Braganza'); };
  const onFontBrowalliaNew = () => { setFont('BrowalliaNew'); };
  const onFontBrowalliaUPC = () => { setFont('BrowalliaUPC'); };
  const onFontBrushScript = () => { setFont('BrushScript'); };
  const onFontCalibri = () => { setFont('Calibri'); };
  const onFontCambayDevanagari = () => { setFont('CambayDevanagari'); };
  const onFontCambria = () => { setFont('Cambria'); };
  const onFontCandara = () => { setFont('Candara'); };
  const onFontCanela = () => { setFont('Canela'); };
  const onFontCanelaDeck = () => { setFont('CanelaDeck'); };
  const onFontCapitals = () => { setFont('Capitals'); };
  const onFontCenturyGothic = () => { setFont('CenturyGothic'); };
  const onFontCenturySchoolbook = () => { setFont('CenturySchoolbook'); };
  const onFontChalkboard = () => { setFont('Chalkboard'); };
  const onFontChalkduster = () => { setFont('Chalkduster'); };
  const onFontCharcoal = () => { setFont('Charcoal'); };
  const onFontCharcoalCY = () => { setFont('CharcoalCY'); };
  const onFontCharterRoman = () => { setFont('CharterRoman'); };
  const onFontChicago = () => { setFont('Chicago'); };
  const onFontCochin = () => { setFont('Cochin'); };
  const onFontComicSans = () => { setFont('ComicSans'); };
  const onFontComicSansMS = () => { setFont('ComicSansMS'); };
  const onFontConsolas = () => { setFont('Consolas'); };
  const onFontConstantia = () => { setFont('Constantia'); };
  const onFontCooper = () => { setFont('Cooper'); };
  const onFontCopperplate = () => { setFont('Copperplate'); };
  const onFontCorbel = () => { setFont('Corbel'); };
  const onFontCordiaNew = () => { setFont('CordiaNew'); };
  const onFontCordiaUPC = () => { setFont('CordiaUPC'); };
  const onFontCorsivaHebrew = () => { setFont('CorsivaHebrew'); };
  const onFontCourier = () => { setFont('Courier'); };
  const onFontCourierNew = () => { setFont('CourierNew'); };
  const onFontDamascus = () => { setFont('Damascus'); };
  const onFontDaunPenh = () => { setFont('DaunPenh'); };
  const onFontDavid = () => { setFont('David'); };
  const onFontDearJoeFour = () => { setFont('DearJoeFour'); };
  const onFontDecoTypeNaskh = () => { setFont('DecoTypeNaskh'); };
  const onFontDengXian = () => { setFont('DengXian'); };
  const onFontDevanagari = () => { setFont('Devanagari'); };
  const onFontDevanagariMT = () => { setFont('DevanagariMT'); };
  const onFontDevanagariSangamMN = () => { setFont('DevanagariSangamMN'); };
  const onFontDFKaiSB = () => { setFont('DFKai-SB'); };
  const onFontDidot = () => { setFont('Didot'); };
  const onFontDijla = () => { setFont('Dijla'); };
  const onFontDilleniaUPC = () => { setFont('DilleniaUPC'); };
  const onFontDiwanKufi = () => { setFont('DiwanKufi'); };
  const onFontDiwanThuluth = () => { setFont('DiwanThuluth'); };
  const onFontDokChampa = () => { setFont('DokChampa'); };
  const onFontDomaineDisplay = () => { setFont('DomaineDisplay'); };
  const onFontDotum = () => { setFont('Dotum'); };
  const onFontEbrima = () => { setFont('Ebrima'); };
  const onFontEstrangeloEdessa = () => { setFont('EstrangeloEdessa'); };
  const onFontEucrosiaUPC = () => { setFont('EucrosiaUPC'); };
  const onFontEuphemia = () => { setFont('Euphemia'); };
  const onFontEuphemiaUCAS = () => { setFont('EuphemiaUCAS'); };
  const onFontFangSong = () => { setFont('FangSong'); };
  const onFontFarah = () => { setFont('Farah'); };
  const onFontFarisi = () => { setFont('Farisi'); };
  const onFontForgottenFuturist = () => { setFont('ForgottenFuturist'); };
  const onFontFoundersGrotesk = () => { setFont('FoundersGrotesk'); };
  const onFontFranklinGothic = () => { setFont('FranklinGothic'); };
  const onFontFrankRuehl = () => { setFont('FrankRuehl'); };
  const onFontFreesiaUPC = () => { setFont('FreesiaUPC'); };
  const onFontFutura = () => { setFont('Futura'); };
  const onFontGabriola = () => { setFont('Gabriola'); };
  const onFontGadget = () => { setFont('Gadget'); };
  const onFontGadugi = () => { setFont('Gadugi'); };
  const onFontGalvji = () => { setFont('Galvji'); };
  const onFontGaramond = () => { setFont('Garamond'); };
  const onFontGautami = () => { setFont('Gautami'); };
  const onFontGB18030Bitmap = () => { setFont('GB18030Bitmap'); };
  const onFontGeezaPro = () => { setFont('GeezaPro'); };
  const onFontGeezah = () => { setFont('Geezah'); };
  const onFontGeneva = () => { setFont('Geneva'); };
  const onFontGenevaCY = () => { setFont('GenevaCY'); };
  const onFontGeorgia = () => { setFont('Georgia'); };
  const onFontGeorgiaPro = () => { setFont('GeorgiaPro'); };
  const onFontGillSans = () => { setFont('GillSans'); };
  const onFontGillSansNova = () => { setFont('GillSansNova'); };
  const onFontGisha = () => { setFont('Gisha'); };
  const onFontGotu = () => { setFont('Gotu'); };
  const onFontGraphik = () => { setFont('Graphik'); };
  const onFontGujarati = () => { setFont('Gujarati'); };
  const onFontGujaratiMT = () => { setFont('GujaratiMT'); };
  const onFontGujaratiSangamMN = () => { setFont('GujaratiSangamMN'); };
  const onFontGulim = () => { setFont('Gulim'); };
  const onFontGungSeoche = () => { setFont('GungSeoche'); };
  const onFontGungSeo = () => { setFont('GungSeo'); };
  const onFontGungsuh = () => { setFont('Gungsuh'); };
  const onFontGurmukhi = () => { setFont('Gurmukhi'); };
  const onFontGurmukhiMN = () => { setFont('GurmukhiMN'); };
  const onFontGurmukhiMT = () => { setFont('GurmukhiMT'); };
  const onFontGurmukhiSangamMN = () => { setFont('GurmukhiSangamMN'); };
  const onFontHangangche = () => { setFont('Hangangche'); };
  const onFontHannotateSC = () => { setFont('HannotateSC'); };
  const onFontHannotateTC = () => { setFont('HannotateTC'); };
  const onFontHanziPenSC = () => { setFont('HanziPenSC'); };
  const onFontHanziPenTC = () => { setFont('HanziPenTC'); };
  const onFontHeadlineA = () => { setFont('HeadlineA'); };
  const onFontHei = () => { setFont('Hei'); };
  const onFontHeitiSC = () => { setFont('HeitiSC'); };
  const onFontHelvetica = () => { setFont('Helvetica'); };
  const onFontHelveticaCY = () => { setFont('HelveticaCY'); };
  const onFontHelveticaNeue = () => { setFont('HelveticaNeue'); };
  const onFontHerculanum = () => { setFont('Herculanum'); };
  const onFontHiraginoKakuGothic = () => { setFont('HiraginoKakuGothic'); };
  const onFontHiraginoKakuGothicPro = () => { setFont('HiraginoKakuGothicPro'); };
  const onFontHiraginoMaruGothicPro = () => { setFont('HiraginoMaruGothicPro'); };
  const onFontHiraginoMinchoPro = () => { setFont('HiraginoMinchoPro'); };
  const onFontHiraginoSans = () => { setFont('HiraginoSans'); };
  const onFontHoeflerText = () => { setFont('HoeflerText'); };
  const onFontHopperScript = () => { setFont('HopperScript'); };
  const onFontImpact = () => { setFont('Impact'); };
  const onFontInaiMathi = () => { setFont('InaiMathi'); };
  const onFontInkFree = () => { setFont('InkFree'); };
  const onFontIowanOldStyleTitling = () => { setFont('IowanOldStyleTitling'); };
  const onFontIrisUPC = () => { setFont('IrisUPC'); };
  const onFontIskoolaPota = () => { setFont('IskoolaPota'); };
  const onFontITCBodoni72 = () => { setFont('ITCBodoni72'); };
  const onFontITFDevanagari = () => { setFont('ITFDevanagari'); };
  const onFontITFDevanagariMarathi = () => { setFont('ITFDevanagariMarathi'); };
  const onFontJaini = () => { setFont('Jaini'); };
  const onFontJainiPurva = () => { setFont('JainiPurva'); };
  const onFontJasmineUPC = () => { setFont('JasmineUPC'); };
  const onFontJavaneseText = () => { setFont('JavaneseText'); };
  const onFontJungGothic = () => { setFont('JungGothic'); };
  const onFontKai = () => { setFont('Kai'); };
  const onFontKailasa = () => { setFont('Kailasa'); };
  const onFontKaiTi = () => { setFont('KaiTi'); };
  const onFontKaitiSC = () => { setFont('KaitiSC'); };
  const onFontKaitiTC = () => { setFont('KaitiTC'); };
  const onFontKalinga = () => { setFont('Kalinga'); };
  const onFontKannadaMN = () => { setFont('KannadaMN'); };
  const onFontKannadaSangamMN = () => { setFont('KannadaSangamMN'); };
  const onFontKartika = () => { setFont('Kartika'); };
  const onFontKatari = () => { setFont('Katari'); };
  const onFontKefa = () => { setFont('Kefa'); };
  const onFontKeyboard = () => { setFont('Keyboard'); };
  const onFontKhmerMN = () => { setFont('KhmerMN'); };
  const onFontKhmerSangamMN = () => { setFont('KhmerSangamMN'); };
  const onFontKhmerUI = () => { setFont('KhmerUI'); };
  const onFontKodchiangUPC = () => { setFont('KodchiangUPC'); };
  const onFontKohinoorBangla = () => { setFont('KohinoorBangla'); };
  const onFontKohinoorDevanagari = () => { setFont('KohinoorDevanagari'); };
  const onFontKohinoorTelugu = () => { setFont('KohinoorTelugu'); };
  const onFontKokila = () => { setFont('Kokila'); };
  const onFontKokonor = () => { setFont('Kokonor'); };
  const onFontKoufiAbjadi = () => { setFont('KoufiAbjadi'); };
  const onFontKrungthep = () => { setFont('Krungthep'); };
  const onFontKuenstlerScript = () => { setFont('KuenstlerScript'); };
  const onFontKufiStandardGK = () => { setFont('KufiStandardGK'); };
  const onFontLahoreGurmukhi = () => { setFont('LahoreGurmukhi'); };
  const onFontLaimoon = () => { setFont('Laimoon'); };
  const onFontLaoMN = () => { setFont('LaoMN'); };
  const onFontLaoSangamMN = () => { setFont('LaoSangamMN'); };
  const onFontLaoUI = () => { setFont('LaoUI'); };
  const onFontLastResort = () => { setFont('LastResort'); };
  const onFontLatha = () => { setFont('Latha'); };
  const onFontLavaDevanagari = () => { setFont('LavaDevanagari'); };
  const onFontLavaKannada = () => { setFont('LavaKannada'); };
  const onFontLavaTelugu = () => { setFont('LavaTelugu'); };
  const onFontLeelawadee = () => { setFont('Leelawadee'); };
  const onFontLeelawadeeUI = () => { setFont('LeelawadeeUI'); };
  const onFontLevenimMT = () => { setFont('LevenimMT'); };
  const onFontLibianSC = () => { setFont('LibianSC'); };
  const onFontLibianTC = () => { setFont('LibianTC'); };
  const onFontLiHeiPro = () => { setFont('LiHeiPro'); };
  const onFontLilyUPC = () => { setFont('LilyUPC'); };
  const onFontLiSongPro = () => { setFont('LiSongPro'); };
  const onFontLucidaConsole = () => { setFont('LucidaConsole'); };
  const onFontLucidaGrande = () => { setFont('LucidaGrande'); };
  const onFontLucidaSans = () => { setFont('LucidaSans'); };
  const onFontLucidaSansUnicode = () => { setFont('LucidaSansUnicode'); };
  const onFontLuminari = () => { setFont('Luminari'); };
  const onFontMaku = () => { setFont('Maku'); };
  const onFontMalayalamMN = () => { setFont('MalayalamMN'); };
  const onFontMalayalamSangamMN = () => { setFont('MalayalamSangamMN'); };
  const onFontMalgunGothic = () => { setFont('MalgunGothic'); };
  const onFontMangal = () => { setFont('Mangal'); };
  const onFontMarkerFelt = () => { setFont('MarkerFelt'); };
  const onFontMarlett = () => { setFont('Marlett'); };
  const onFontMeiryo = () => { setFont('Meiryo'); };
  const onFontMenlo = () => { setFont('Menlo'); };
  const onFontMicrosoftHimalaya = () => { setFont('MicrosoftHimalaya'); };
  const onFontMicrosoftJhengHei = () => { setFont('MicrosoftJhengHei'); };
  const onFontMicrosoftNewTaiLue = () => { setFont('MicrosoftNewTaiLue'); };
  const onFontMicrosoftPhagsPa = () => { setFont('MicrosoftPhagsPa'); };
  const onFontMicrosoftSansSerif = () => { setFont('MicrosoftSansSerif'); };
  const onFontMicrosoftTaiLe = () => { setFont('MicrosoftTaiLe'); };
  const onFontMicrosoftUighur = () => { setFont('MicrosoftUighur'); };
  const onFontMicrosoftYaHei = () => { setFont('MicrosoftYaHei'); };
  const onFontMicrosoftYiBaiti = () => { setFont('MicrosoftYiBaiti'); };
  const onFontMingLiU = () => { setFont('MingLiU'); };
  const onFontMingLiUExtB = () => { setFont('MingLiU-ExtB'); };
  const onFontMiriam = () => { setFont('Miriam'); };
  const onFontMishafi = () => { setFont('Mishafi'); };
  const onFontMishafiGold = () => { setFont('MishafiGold'); };
  const onFontModak = () => { setFont('Modak'); };
  const onFontMonaLisaSolidITCTT = () => { setFont('MonaLisaSolidITCTT'); };
  const onFontMonaco = () => { setFont('Monaco'); };
  const onFontMonacoCY = () => { setFont('MonacoCY'); };
  const onFontMongolianBaiti = () => { setFont('MongolianBaiti'); };
  const onFontMonotypeLingWai = () => { setFont('MonotypeLingWai'); };
  const onFontMoolBoran = () => { setFont('MoolBoran'); };
  const onFontMSGothic = () => { setFont('MSGothic'); };
  const onFontMSMincho = () => { setFont('MSMincho'); };
  const onFontMshtakan = () => { setFont('Mshtakan'); };
  const onFontMukta = () => { setFont('Mukta'); };
  const onFontMuktaMalar = () => { setFont('MuktaMalar'); };
  const onFontMuktaVaani = () => { setFont('MuktaVaani'); };
  const onFontMuktaMahee = () => { setFont('MuktaMahee'); };
  const onFontMuna = () => { setFont('Muna'); };
  const onFontMVBoli = () => { setFont('MVBoli'); };
  const onFontMyanmarMN = () => { setFont('MyanmarMN'); };
  const onFontMyanmarSangamMN = () => { setFont('MyanmarSangamMN'); };
  const onFontMyanmarText = () => { setFont('MyanmarText'); };
  const onFontMyriadArabic = () => { setFont('MyriadArabic'); };
  const onFontNadeem = () => { setFont('Nadeem'); };
  const onFontNanumBrushScript = () => { setFont('NanumBrushScript'); };
  const onFontNanumPenScript = () => { setFont('NanumPenScript'); };
  const onFontNanumGothic = () => { setFont('NanumGothic'); };
  const onFontNanumMyeongjo = () => { setFont('NanumMyeongjo'); };
  const onFontNarkisim = () => { setFont('Narkisim'); };
  const onFontNeueHaasGrotskTxtPro = () => { setFont('NeueHaasGrotskTxtPro'); };
  const onFontNewPeninim = () => { setFont('NewPeninim'); };
  const onFontNewPeninimMT = () => { setFont('NewPeninimMT'); };
  const onFontNewPeninimMTInclined = () => { setFont('NewPeninimMTInclined'); };
  const onFontNewYork = () => { setFont('NewYork'); };
  const onFontNirmalaUI = () => { setFont('NirmalaUI'); };
  const onFontNisan = () => { setFont('Nisan'); };
  const onFontNISCGB18030 = () => { setFont('NISCGB18030'); };
  const onFontNoteworthy = () => { setFont('Noteworthy'); };
  const onFontNotoNastaliqUrdu = () => { setFont('NotoNastaliqUrdu'); };
  const onFontNotoSansJavanese = () => { setFont('NotoSansJavanese'); };
  const onFontNotoSansKannada = () => { setFont('NotoSansKannada'); };
  const onFontNotoSansMyanmar = () => { setFont('NotoSansMyanmar'); };
  const onFontNotoSansOriya = () => { setFont('NotoSansOriya'); };
  const onFontNotoSerifKannada = () => { setFont('NotoSerifKannada'); };
  const onFontNotoSerifMyanmar = () => { setFont('NotoSerifMyanmar'); };
  const onFontNyala = () => { setFont('Nyala'); };
  const onFontOctoberDevanagari = () => { setFont('OctoberDevanagari'); };
  const onFontOctoberTamil = () => { setFont('OctoberTamil'); };
  const onFontOptima = () => { setFont('Optima'); };
  const onFontOriyaMN = () => { setFont('OriyaMN'); };
  const onFontOriyaSangamMN = () => { setFont('OriyaSangamMN'); };
  const onFontOsaka = () => { setFont('Osaka'); };
  const onFontOsakaMono = () => { setFont('Osaka-Mono'); };
  const onFontPalatino = () => { setFont('Palatino'); };
  const onFontPalatinoLinotype = () => { setFont('PalatinoLinotype'); };
  const onFontPapyrus = () => { setFont('Papyrus'); };
  const onFontPCMyungjo = () => { setFont('PCMyungjo'); };
  const onFontPhosphate = () => { setFont('Phosphate'); };
  const onFontPilGi = () => { setFont('PilGi'); };
  const onFontPilgiche = () => { setFont('Pilgiche'); };
  const onFontPingFangHK = () => { setFont('PingFangHK'); };
  const onFontPingFangSC = () => { setFont('PingFangSC'); };
  const onFontPingFangTC = () => { setFont('PingFangTC'); };
  const onFontPlantagenetCherokee = () => { setFont('PlantagenetCherokee'); };
  const onFontPortagoITCTT = () => { setFont('PortagoITCTT'); };
  const onFontPrincetownLET = () => { setFont('PrincetownLET'); };
  const onFontProdukt = () => { setFont('Produkt'); };
  const onFontProximaNova = () => { setFont('ProximaNova'); };
  const onFontPSLOrnanongPro = () => { setFont('PSLOrnanongPro'); };
  const onFontPTMono = () => { setFont('PTMono'); };
  const onFontPTSans = () => { setFont('PTSans'); };
  const onFontPTSansNarrow = () => { setFont('PTSansNarrow'); };
  const onFontPTSerif = () => { setFont('PTSerif'); };
  const onFontPublicoHeadlineRoman = () => { setFont('PublicoHeadlineRoman'); };
  const onFontQuotesCaps = () => { setFont('QuotesCaps'); };
  const onFontQuotesScript = () => { setFont('QuotesScript'); };
  const onFontRaanana = () => { setFont('Raanana'); };
  const onFontRaavi = () => { setFont('Raavi'); };
  const onFontRaya = () => { setFont('Raya'); };
  const onFontRockwell = () => { setFont('Rockwell'); };
  const onFontRockwellNova = () => { setFont('RockwellNova'); };
  const onFontRod = () => { setFont('Rod'); };
  const onFontSakkalMajalla = () => { setFont('SakkalMajalla'); };
  const onFontSamaDevanagari = () => { setFont('SamaDevanagari'); };
  const onFontSamaGujarati = () => { setFont('SamaGujarati'); };
  const onFontSamaGurmukhi = () => { setFont('SamaGurmukhi'); };
  const onFontSamaKannada = () => { setFont('SamaKannada'); };
  const onFontSamaMalayalam = () => { setFont('SamaMalayalam'); };
  const onFontSamaTamil = () => { setFont('SamaTamil'); };
  const onFontSanFranciscoMono = () => { setFont('SanFranciscoMono'); };
  const onFontSana = () => { setFont('Sana'); };
  const onFontSand = () => { setFont('Sand'); };
  const onFontSanskritText = () => { setFont('SanskritText'); };
  const onFontSathu = () => { setFont('Sathu'); };
  const onFontSauberScript = () => { setFont('SauberScript'); };
  const onFontSchoolHouseCursiveB = () => { setFont('SchoolHouseCursiveB'); };
  const onFontSchoolHousePrintedA = () => { setFont('SchoolHousePrintedA'); };
  const onFontSegoePrint = () => { setFont('SegoePrint'); };
  const onFontSegoeScript = () => { setFont('SegoeScript'); };
  const onFontSegoeUI = () => { setFont('SegoeUI'); };
  const onFontSeoul = () => { setFont('Seoul'); };
  const onFontSFArabic = () => { setFont('SFArabic'); };
  const onFontShinMyungjoNeue = () => { setFont('ShinMyungjoNeue'); };
  const onFontShobhika = () => { setFont('Shobhika'); };
  const onFontShonarBangla = () => { setFont('ShonarBangla'); };
  const onFontShreeDevanagari714 = () => { setFont('ShreeDevanagari714'); };
  const onFontShruti = () => { setFont('Shruti'); };
  const onFontSignPainter = () => { setFont('SignPainter'); };
  const onFontSignPainterHouseScript = () => { setFont('SignPainter-HouseScript'); };
  const onFontSilom = () => { setFont('Silom'); };
  const onFontSimHei = () => { setFont('SimHei'); };
  const onFontSimplifiedArabic = () => { setFont('SimplifiedArabic'); };
  const onFontSimSong = () => { setFont('SimSong'); };
  const onFontSimSun = () => { setFont('SimSun'); };
  const onFontSinhalaMN = () => { setFont('SinhalaMN'); };
  const onFontSinhalaSangamMN = () => { setFont('SinhalaSangamMN'); };
  const onFontSitka = () => { setFont('Sitka'); };
  const onFontSkia = () => { setFont('Skia'); };
  const onFontSnellRoundhand = () => { setFont('SnellRoundhand'); };
  const onFontSomer = () => { setFont('Somer'); };
  const onFontSongtiSC = () => { setFont('SongtiSC'); };
  const onFontSongtiTC = () => { setFont('SongtiTC'); };
  const onFontSpotMono = () => { setFont('SpotMono'); };
  const onFontSTFangSong = () => { setFont('STFangSong'); };
  const onFontSTHeiti = () => { setFont('STHeiti'); };
  const onFontSTKaiti = () => { setFont('STKaiti'); };
  const onFontSTSong = () => { setFont('STSong'); };
  const onFontSTXihei = () => { setFont('STXihei'); };
  const onFontSTIXTwoText = () => { setFont('STIXTwoText'); };
  const onFontSTIXGeneralRegular = () => { setFont('STIXGeneral-Regular'); };
  const onFontStoneSansSemITCTT = () => { setFont('StoneSansSemITCTT'); };
  const onFontSukhumvitSetText = () => { setFont('SukhumvitSetText'); };
  const onFontSylfaen = () => { setFont('Sylfaen'); };
  const onFontSynchroLET = () => { setFont('SynchroLET'); };
  const onFontTaeGraphic = () => { setFont('TaeGraphic'); };
  const onFontTahoma = () => { setFont('Tahoma'); };
  const onFontTaipei = () => { setFont('Taipei'); };
  const onFontTamilMN = () => { setFont('TamilMN'); };
  const onFontTamilSangamMN = () => { setFont('TamilSangamMN'); };
  const onFontTechno = () => { setFont('Techno'); };
  const onFontTeluguMN = () => { setFont('TeluguMN'); };
  const onFontTeluguSangamMN = () => { setFont('TeluguSangamMN'); };
  const onFontTextile = () => { setFont('Textile'); };
  const onFontThonburi = () => { setFont('Thonburi'); };
  const onFontTimes = () => { setFont('Times'); };
  const onFontTimesCY = () => { setFont('TimesCY'); };
  const onFontTimesNewRoman = () => { setFont('TimesNewRoman'); };
  const onFontTimesRoman = () => { setFont('TimesRoman'); };
  const onFontTiroBangla = () => { setFont('TiroBangla'); };
  const onFontTiroDevanagariHindi = () => { setFont('TiroDevanagariHindi'); };
  const onFontTiroDevanagariMarathi = () => { setFont('TiroDevanagariMarathi'); };
  const onFontTiroDevanagariSanskrit = () => { setFont('TiroDevanagariSanskrit'); };
  const onFontTiroGurmukhi = () => { setFont('TiroGurmukhi'); };
  const onFontTiroHindi = () => { setFont('TiroHindi'); };
  const onFontTiroKannada = () => { setFont('TiroKannada'); };
  const onFontTiroMarathi = () => { setFont('TiroMarathi'); };
  const onFontTiroSanskrit = () => { setFont('TiroSanskrit'); };
  const onFontTiroTamil = () => { setFont('TiroTamil'); };
  const onFontTiroTelugu = () => { setFont('TiroTelugu'); };
  const onFontToppanBunkyuGothic = () => { setFont('ToppanBunkyuGothic'); };
  const onFontToppanBunkyuMincho = () => { setFont('ToppanBunkyuMincho'); };
  const onFontTraditionalArabic = () => { setFont('TraditionalArabic'); };
  const onFontTrattatello = () => { setFont('Trattatello'); };
  const onFontTrebuchetMS = () => { setFont('TrebuchetMS'); };
  const onFontTsukushiARoundGothic = () => { setFont('TsukushiARoundGothic'); };
  const onFontTsukushiBRoundGothic = () => { setFont('TsukushiBRoundGothic'); };
  const onFontTunga = () => { setFont('Tunga'); };
  const onFontTwCenMT = () => { setFont('TwCenMT'); };
  const onFontUDDigiKyokasho = () => { setFont('UDDigiKyokasho'); };
  const onFontUrduTypesetting = () => { setFont('UrduTypesetting'); };
  const onFontUtsaah = () => { setFont('Utsaah'); };
  const onFontVani = () => { setFont('Vani'); };
  const onFontVerdana = () => { setFont('Verdana'); };
  const onFontVerdanaPro = () => { setFont('VerdanaPro'); };
  const onFontVijaya = () => { setFont('Vijaya'); };
  const onFontVrinda = () => { setFont('Vrinda'); };
  const onFontWaseem = () => { setFont('Waseem'); };
  const onFontWawatiSC = () => { setFont('WawatiSC'); };
  const onFontWawatiTC = () => { setFont('WawatiTC'); };
  const onFontYaziji = () => { setFont('Yaziji'); };
  const onFontYuGothic = () => { setFont('YuGothic'); };
  const onFontYuKyokashoN = () => { setFont('YuKyokashoN'); };
  const onFontYuMincho = () => { setFont('YuMincho'); };
  const onFontYuantiSC = () => { setFont('YuantiSC'); };
  const onFontYuantiTC = () => { setFont('YuantiTC'); };
  const onFontYuppySC = () => { setFont('YuppySC'); };
  const onFontZapfChancery = () => { setFont('ZapfChancery'); };
  const onFontZapfino = () => { setFont('Zapfino'); };
          
  const fontOnOrOff = (itemFont) => font === itemFont ? 'on' : ''
  const itemPresentation = (itemName) => "➤" + itemName

  function FontMenuItem(itemName, itemClick, itemFont) {

    const fontActive = fontOnOrOff(itemFont)
    const fontList = itemPresentation(itemName)

    return (
      <Menu.Item>
      {({ active }) => (
        <button  type="button" onClick={itemClick} className={`${ active ? 'menuitemhov' : 'menuitemnohov' } text-left group menuitem ${fontActive}`}>
        {fontList}
      </button>
      )}
      </Menu.Item>
    )
  }

  const fontDropdownOnOrOff = font === "" ? "btnAll btnRight" : "btnAll btnRight on"
  const fontDropdownPresentation = font === "" ? "Set Font ⇩" : font + " ⇩"

  /** Graphite-enabled woff and woff2 fonts included */
  const defaultFont = FontMenuItem('Default Font', onFontClear, '')
  const akatabRW = FontMenuItem('Akatab 2.000', onFontAkatabRW, 'AkatabRW')
  const alkalamiRW = FontMenuItem('Alkalami 1.200', onFontAlkalamiRW, 'AlkalamiRW')
  const alkalamiLW = FontMenuItem('Alkalami Light 1.200', onFontAlkalamiLW, 'AlkalamiLW')
  const andikaRW = FontMenuItem('Andika 6.101', onFontAndikaRW, 'AndikaRW')
  const awamiNastaliqRW = FontMenuItem('Awami Nastaliq 2.200', onFontAwamiNastaliqRW, 'AwamiNastaliqRW')
  const gentiumPlusRW = FontMenuItem('Gentium Plus 6.101', onFontGentiumPlusRW, 'GentiumPlusRW')
  const harmattanW = FontMenuItem('Harmattan 2.000', onFontHarmattanW, 'HarmattanW')
  const lateefRW = FontMenuItem('LateefGR 1.200', onFontLateefRW, 'LateefRW')
  const mingzatW = FontMenuItem('Mingzat 1.000', onFontMingzatW, 'MingzatW')
  const narnoorW = FontMenuItem('Narnoor 1.000', onFontNarnoorW, 'NarnoorW')
  const padaukRW = FontMenuItem('Padauk 5.000', onFontPadaukRW, 'PadaukRW')
  const scheherazadeRW = FontMenuItem('Scheherazade New 3.300', onFontScheherazadeRW, 'AScheherazadeRW')
  const tagmukayRW = FontMenuItem('Tagmukay 2.000', onFontTagmukayRW, 'TagmukayRW')
  const taiHeritageProRW = FontMenuItem('TaiHeritagePro 2.600', onFontTaiHeritageProRW, 'TaiHeritageProRW')

  /** Graphite-enabled fonts if locally installed */
  const AbyssinicaSIL = FontMenuItem('Abyssinica SIL', onFontAbyssinicaSIL, 'AbyssinicaSIL')
  const Akatab = FontMenuItem('Akatab', onFontAkatab, 'Akatab')
  const Alkalami = FontMenuItem('Alkalami', onFontAlkalami, 'Alkalami')
  const AlkalamiLight = FontMenuItem('Alkalami Light', onFontAlkalamiLight, 'AlkalamiLight')
  const Andika = FontMenuItem('Andika', onFontAndika, 'Andika')
  const AnnapurnaSIL = FontMenuItem('Annapurna SIL', onFontAnnapurnaSIL, 'AnnapurnaSIL')
  const ApparatusSIL = FontMenuItem('Apparatus SIL', onFontApparatusSIL, 'ApparatusSIL')
  const AwamiNastaliq = FontMenuItem('Awami Nastaliq', onFontAwamiNastaliq, 'AwamiNastaliq')
  const CharisSIL = FontMenuItem('Charis SIL', onFontCharisSIL, 'CharisSIL')
  const DaiBannaSILBook = FontMenuItem('Dai Banna SIL Book', onFontDaiBannaSILBook, 'DaiBannaSILBook')
  const DaiBannaSILLight = FontMenuItem('Dai Banna SIL Light', onFontDaiBannaSILLight, 'DaiBannaSILLight')
  const DoulosSIL = FontMenuItem('Doulos SIL', onFontDoulosSIL, 'DoulosSIL')
  const DoulosSILCipher = FontMenuItem('Doulos SIL Cipher', onFontDoulosSILCipher, 'DoulosSILCipher')
  const EzraSIL = FontMenuItem('Ezra SIL', onFontEzraSIL, 'EzraSIL')
  const EzraSILSR = FontMenuItem('Ezra SIL SR', onFontEzraSILSR, 'EzraSILSR')
  const GalatiaSIL = FontMenuItem('Galatia SIL', onFontGalatiaSIL, 'GalatiaSIL')
  const GentiumPlus = FontMenuItem('Gentium Plus', onFontGentiumPlus, 'GentiumPlus')
  const Harmattan = FontMenuItem('Harmattan', onFontHarmattan, 'Harmattan')
  const KhmerBusra = FontMenuItem('Khmer Busra', onFontKhmerBusra, 'KhmerBusra')
  const KhmerMondulkiri = FontMenuItem('Khmer Mondulkiri', onFontKhmerMondulkiri, 'KhmerMondulkiri')
  const LateefGR = FontMenuItem('LateefGR', onFontLateefGR, 'LateefGR')
  const Mingzat = FontMenuItem('Mingzat', onFontMingzat, 'Mingzat')
  const NamdhinggoSIL = FontMenuItem('Namdhinggo SIL', onFontNamdhinggoSIL, 'NamdhinggoSIL')
  const Narnoor = FontMenuItem('Narnoor', onFontNarnoor, 'Narnoor')
  const NuosuSIL = FontMenuItem('Nuosu SIL', onFontNuosuSIL, 'NuosuSIL')
  const Padauk = FontMenuItem('Padauk', onFontPadauk, 'Padauk')
  const ScheherazadeNew = FontMenuItem('Scheherazade New', onFontScheherazadeNew, 'ScheherazadeNew')
  const Shimenkan = FontMenuItem('Shimenkan', onFontShimenkan, 'Shimenkan')
  const SophiaNubian = FontMenuItem('Sophia Nubian', onFontSophiaNubian, 'SophiaNubian')
  const Tagmukay = FontMenuItem('Tagmukay', onFontTagmukay, 'Tagmukay')
  const TaiHeritagePro = FontMenuItem('Tai Heritage Pro', onFontTaiHeritagePro, 'TaiHeritagePro')

  /** Windows 11 and MacOS system fonts if locally installed */
  const AdelleSansDevanagari = FontMenuItem('Adelle Sans Devanagari', onFontAdelleSansDevanagari, 'AdelleSansDevanagari')
  const Aharoni = FontMenuItem('Aharoni', onFontAharoni, 'Aharoni')
  const AlBayan = FontMenuItem('Al Bayan', onFontAlBayan, 'AlBayan')
  const AlFirat = FontMenuItem('Al Firat', onFontAlFirat, 'AlFirat')
  const AlKhalil = FontMenuItem('Al Khalil', onFontAlKhalil, 'AlKhalil')
  const AlNile = FontMenuItem('Al Nile', onFontAlNile, 'AlNile')
  const AlRafidain = FontMenuItem('Al Rafidain', onFontAlRafidain, 'AlRafidain')
  const AlRafidainAlFanni = FontMenuItem('Al Rafidain Al Fanni', onFontAlRafidainAlFanni, 'AlRafidainAlFanni')
  const AlTarikh = FontMenuItem('Al Tarikh', onFontAlTarikh, 'AlTarikh')
  const Aldhabi = FontMenuItem('Aldhabi', onFontAldhabi, 'Aldhabi')
  const Algiers = FontMenuItem('Algiers', onFontAlgiers, 'Algiers')
  const AmericanTypewriter = FontMenuItem('American Typewriter', onFontAmericanTypewriter, 'AmericanTypewriter')
  const AndaleMono = FontMenuItem('Andalé Mono', onFontAndaleMono, 'AndaleMono')
  const Andalus = FontMenuItem('Andalus', onFontAndalus, 'Andalus')
  const AngsanaNew = FontMenuItem('Angsana New', onFontAngsanaNew, 'AngsanaNew')
  const AngsanaUPC = FontMenuItem('AngsanaUPC', onFontAngsanaUPC, 'AngsanaUPC')
  const AnnaiMN = FontMenuItem('Annai MN', onFontAnnaiMN, 'AnnaiMN')
  const Aparajita = FontMenuItem('Aparajita', onFontAparajita, 'Aparajita')
  const AppleBraille = FontMenuItem('Apple Braille', onFontAppleBraille, 'AppleBraille')
  const AppleCasual = FontMenuItem('Apple Casual', onFontAppleCasual, 'AppleCasual')
  const AppleChancery = FontMenuItem('Apple Chancery', onFontAppleChancery, 'AppleChancery')
  const AppleGaramond = FontMenuItem('Apple Garamond', onFontAppleGaramond, 'AppleGaramond')
  const AppleGothic = FontMenuItem('Apple Gothic', onFontAppleGothic, 'AppleGothic')
  const AppleLiGothic = FontMenuItem('Apple LiGothic', onFontAppleLiGothic, 'AppleLiGothic')
  const AppleLiSung = FontMenuItem('Apple LiSung', onFontAppleLiSung, 'AppleLiSung')
  const AppleMyungjo = FontMenuItem('Apple Myungjo', onFontAppleMyungjo, 'AppleMyungjo')
  const AppleSDGothicNeo = FontMenuItem('Apple SD Gothic Neo', onFontAppleSDGothicNeo, 'AppleSDGothicNeo')
  const AquaKana = FontMenuItem('AquaKana', onFontAquaKana, 'AquaKana')
  const ArabicTypesetting = FontMenuItem('Arabic Typesetting', onFontArabicTypesetting, 'ArabicTypesetting')
  const Arial = FontMenuItem('Arial', onFontArial, 'Arial')
  const ArialHebrew = FontMenuItem('Arial Hebrew', onFontArialHebrew, 'ArialHebrew')
  const ArialHebrewScholar = FontMenuItem('Arial Hebrew Scholar', onFontArialHebrewScholar, 'ArialHebrewScholar')
  const ArialNarrow = FontMenuItem('Arial Narrow', onFontArialNarrow, 'ArialNarrow')
  const ArialNova = FontMenuItem('Arial Nova', onFontArialNova, 'ArialNova')
  const ArialUnicodeMS = FontMenuItem('Arial Unicode MS', onFontArialUnicodeMS, 'ArialUnicodeMS')
  const Avenir = FontMenuItem('Avenir', onFontAvenir, 'Avenir')
  const Ayuthaya = FontMenuItem('Ayuthaya', onFontAyuthaya, 'Ayuthaya')
  const Baghdad = FontMenuItem('Baghdad', onFontBaghdad, 'Baghdad')
  const Bahnschrift = FontMenuItem('Bahnschrift', onFontBahnschrift, 'Bahnschrift')
  const Baloo = FontMenuItem('Baloo', onFontBaloo, 'Baloo')
  const BalooBhai = FontMenuItem('Baloo Bhai', onFontBalooBhai, 'BalooBhai')
  const BalooBhaijaan = FontMenuItem('Baloo Bhaijaan', onFontBalooBhaijaan, 'BalooBhaijaan')
  const BalooBhaina = FontMenuItem('Baloo Bhaina', onFontBalooBhaina, 'BalooBhaina')
  const BalooChettan = FontMenuItem('Baloo Chettan', onFontBalooChettan, 'BalooChettan')
  const BalooDa = FontMenuItem('Baloo Da', onFontBalooDa, 'BalooDa')
  const BalooPaaji = FontMenuItem('Baloo Paaji', onFontBalooPaaji, 'BalooPaaji')
  const BalooTamma = FontMenuItem('Baloo Tamma', onFontBalooTamma, 'BalooTamma')
  const BalooTammudu = FontMenuItem('Baloo Tammudu', onFontBalooTammudu, 'BalooTammudu')
  const BalooThambi = FontMenuItem('Baloo Thambi', onFontBalooThambi, 'BalooThambi')
  const BanglaMN = FontMenuItem('Bangla MN', onFontBanglaMN, 'BanglaMN')
  const BanglaSangamMN = FontMenuItem('Bangla Sangam MN', onFontBanglaSangamMN, 'BanglaSangamMN')
  const BaoliSC = FontMenuItem('Baoli SC', onFontBaoliSC, 'BaoliSC')
  const BaoliTC = FontMenuItem('Baoli TC', onFontBaoliTC, 'BaoliTC')
  const Baskerville = FontMenuItem('Baskerville', onFontBaskerville, 'Baskerville')
  const Basra = FontMenuItem('Basra', onFontBasra, 'Basra')
  const Batang = FontMenuItem('Batang', onFontBatang, 'Batang')
  const Beijing = FontMenuItem('Beijing', onFontBeijing, 'Beijing')
  const Beirut = FontMenuItem('Beirut', onFontBeirut, 'Beirut')
  const BiauKai = FontMenuItem('BiauKai', onFontBiauKai, 'BiauKai')
  const BigCaslon = FontMenuItem('Big Caslon', onFontBigCaslon, 'BigCaslon')
  const BIZUDGothic = FontMenuItem('BIZ UDGothic', onFontBIZUDGothic, 'BIZUDGothic')
  const BIZUDMincho = FontMenuItem('BIZ UDMincho', onFontBIZUDMincho, 'BIZUDMincho')
  const Bodoni72 = FontMenuItem('Bodoni 72', onFontBodoni72, 'Bodoni72')
  const Braganza = FontMenuItem('Braganza', onFontBraganza, 'Braganza')
  const BrowalliaNew = FontMenuItem('Browallia New', onFontBrowalliaNew, 'BrowalliaNew')
  const BrowalliaUPC = FontMenuItem('BrowalliaUPC', onFontBrowalliaUPC, 'BrowalliaUPC')
  const BrushScript = FontMenuItem('Brush Script', onFontBrushScript, 'BrushScript')
  const Calibri = FontMenuItem('Calibri', onFontCalibri, 'Calibri')
  const CambayDevanagari = FontMenuItem('Cambay Devanagari', onFontCambayDevanagari, 'CambayDevanagari')
  const Cambria = FontMenuItem('Cambria', onFontCambria, 'Cambria')
  const Candara = FontMenuItem('Candara', onFontCandara, 'Candara')
  const Canela = FontMenuItem('Canela', onFontCanela, 'Canela')
  const CanelaDeck = FontMenuItem('Canela Deck', onFontCanelaDeck, 'CanelaDeck')
  const Capitals = FontMenuItem('Capitals', onFontCapitals, 'Capitals')
  const CenturyGothic = FontMenuItem('Century Gothic', onFontCenturyGothic, 'CenturyGothic')
  const CenturySchoolbook = FontMenuItem('Century Schoolbook', onFontCenturySchoolbook, 'CenturySchoolbook')
  const Chalkboard = FontMenuItem('Chalkboard', onFontChalkboard, 'Chalkboard')
  const Chalkduster = FontMenuItem('Chalkduster', onFontChalkduster, 'Chalkduster')
  const Charcoal = FontMenuItem('Charcoal', onFontCharcoal, 'Charcoal')
  const CharcoalCY = FontMenuItem('Charcoal CY', onFontCharcoalCY, 'CharcoalCY')
  const CharterRoman = FontMenuItem('Charter Roman', onFontCharterRoman, 'CharterRoman')
  const Chicago = FontMenuItem('Chicago', onFontChicago, 'Chicago')
  const Cochin = FontMenuItem('Cochin', onFontCochin, 'Cochin')
  const ComicSans = FontMenuItem('Comic Sans', onFontComicSans, 'ComicSans')
  const ComicSansMS = FontMenuItem('Comic Sans MS', onFontComicSansMS, 'ComicSansMS')
  const Consolas = FontMenuItem('Consolas', onFontConsolas, 'Consolas')
  const Constantia = FontMenuItem('Constantia', onFontConstantia, 'Constantia')
  const Cooper = FontMenuItem('Cooper', onFontCooper, 'Cooper')
  const Copperplate = FontMenuItem('Copperplate', onFontCopperplate, 'Copperplate')
  const Corbel = FontMenuItem('Corbel', onFontCorbel, 'Corbel')
  const CordiaNew = FontMenuItem('Cordia New', onFontCordiaNew, 'CordiaNew')
  const CordiaUPC = FontMenuItem('CordiaUPC', onFontCordiaUPC, 'CordiaUPC')
  const CorsivaHebrew = FontMenuItem('Corsiva Hebrew', onFontCorsivaHebrew, 'CorsivaHebrew')
  const Courier = FontMenuItem('Courier', onFontCourier, 'Courier')
  const CourierNew = FontMenuItem('Courier New', onFontCourierNew, 'CourierNew')
  const Damascus = FontMenuItem('Damascus', onFontDamascus, 'Damascus')
  const DaunPenh = FontMenuItem('DaunPenh', onFontDaunPenh, 'DaunPenh')
  const David = FontMenuItem('David', onFontDavid, 'David')
  const DearJoeFour = FontMenuItem('Dear Joe Four', onFontDearJoeFour, 'DearJoeFour')
  const DecoTypeNaskh = FontMenuItem('DecoType Naskh', onFontDecoTypeNaskh, 'DecoTypeNaskh')
  const DengXian = FontMenuItem('DengXian', onFontDengXian, 'DengXian')
  const Devanagari = FontMenuItem('Devanagari', onFontDevanagari, 'Devanagari')
  const DevanagariMT = FontMenuItem('Devanagari MT', onFontDevanagariMT, 'DevanagariMT')
  const DevanagariSangamMN = FontMenuItem('Devanagari Sangam MN', onFontDevanagariSangamMN, 'DevanagariSangamMN')
  const DFKaiSB = FontMenuItem('DFKai-SB', onFontDFKaiSB, 'DFKaiSB')
  const Didot = FontMenuItem('Didot', onFontDidot, 'Didot')
  const Dijla = FontMenuItem('Dijla', onFontDijla, 'Dijla')
  const DilleniaUPC = FontMenuItem('DilleniaUPC', onFontDilleniaUPC, 'DilleniaUPC')
  const DiwanKufi = FontMenuItem('Diwan Kufi', onFontDiwanKufi, 'DiwanKufi')
  const DiwanThuluth = FontMenuItem('Diwan Thuluth', onFontDiwanThuluth, 'DiwanThuluth')
  const DokChampa = FontMenuItem('DokChampa', onFontDokChampa, 'DokChampa')
  const DomaineDisplay = FontMenuItem('Domaine Display', onFontDomaineDisplay, 'DomaineDisplay')
  const Dotum = FontMenuItem('Dotum', onFontDotum, 'Dotum')
  const Ebrima = FontMenuItem('Ebrima', onFontEbrima, 'Ebrima')
  const EstrangeloEdessa = FontMenuItem('Estrangelo Edessa', onFontEstrangeloEdessa, 'EstrangeloEdessa')
  const EucrosiaUPC = FontMenuItem('EucrosiaUPC', onFontEucrosiaUPC, 'EucrosiaUPC')
  const Euphemia = FontMenuItem('Euphemia', onFontEuphemia, 'Euphemia')
  const EuphemiaUCAS = FontMenuItem('Euphemia UCAS', onFontEuphemiaUCAS, 'EuphemiaUCAS')
  const FangSong = FontMenuItem('FangSong', onFontFangSong, 'FangSong')
  const Farah = FontMenuItem('Farah', onFontFarah, 'Farah')
  const Farisi = FontMenuItem('Farisi', onFontFarisi, 'Farisi')
  const ForgottenFuturist = FontMenuItem('Forgotten Futurist', onFontForgottenFuturist, 'ForgottenFuturist')
  const FoundersGrotesk = FontMenuItem('Founders Grotesk', onFontFoundersGrotesk, 'FoundersGrotesk')
  const FranklinGothic = FontMenuItem('Franklin Gothic', onFontFranklinGothic, 'FranklinGothic')
  const FrankRuehl = FontMenuItem('FrankRuehl', onFontFrankRuehl, 'FrankRuehl')
  const FreesiaUPC = FontMenuItem('FreesiaUPC', onFontFreesiaUPC, 'FreesiaUPC')
  const Futura = FontMenuItem('Futura', onFontFutura, 'Futura')
  const Gabriola = FontMenuItem('Gabriola', onFontGabriola, 'Gabriola')
  const Gadget = FontMenuItem('Gadget', onFontGadget, 'Gadget')
  const Gadugi = FontMenuItem('Gadugi', onFontGadugi, 'Gadugi')
  const Galvji = FontMenuItem('Galvji', onFontGalvji, 'Galvji')
  const Garamond = FontMenuItem('Garamond', onFontGaramond, 'Garamond')
  const Gautami = FontMenuItem('Gautami', onFontGautami, 'Gautami')
  const GB18030Bitmap = FontMenuItem('GB18030 Bitmap', onFontGB18030Bitmap, 'GB18030Bitmap')
  const GeezaPro = FontMenuItem('Geeza Pro', onFontGeezaPro, 'GeezaPro')
  const Geezah = FontMenuItem('Geezah', onFontGeezah, 'Geezah')
  const Geneva = FontMenuItem('Geneva', onFontGeneva, 'Geneva')
  const GenevaCY = FontMenuItem('Geneva CY', onFontGenevaCY, 'GenevaCY')
  const Georgia = FontMenuItem('Georgia', onFontGeorgia, 'Georgia')
  const GeorgiaPro = FontMenuItem('Georgia Pro', onFontGeorgiaPro, 'GeorgiaPro')
  const GillSans = FontMenuItem('Gill Sans', onFontGillSans, 'GillSans')
  const GillSansNova = FontMenuItem('Gill Sans Nova', onFontGillSansNova, 'GillSansNova')
  const Gisha = FontMenuItem('Gisha', onFontGisha, 'Gisha')
  const Gotu = FontMenuItem('Gotu', onFontGotu, 'Gotu')
  const Graphik = FontMenuItem('Graphik', onFontGraphik, 'Graphik')
  const Gujarati = FontMenuItem('Gujarati', onFontGujarati, 'Gujarati')
  const GujaratiMT = FontMenuItem('Gujarati MT', onFontGujaratiMT, 'GujaratiMT')
  const GujaratiSangamMN = FontMenuItem('Gujarati Sangam MN', onFontGujaratiSangamMN, 'GujaratiSangamMN')
  const Gulim = FontMenuItem('Gulim', onFontGulim, 'Gulim')
  const GungSeoche = FontMenuItem('Gung Seoche', onFontGungSeoche, 'GungSeoche')
  const GungSeo = FontMenuItem('GungSeo', onFontGungSeo, 'GungSeo')
  const Gungsuh = FontMenuItem('Gungsuh', onFontGungsuh, 'Gungsuh')
  const Gurmukhi = FontMenuItem('Gurmukhi', onFontGurmukhi, 'Gurmukhi')
  const GurmukhiMN = FontMenuItem('Gurmukhi MN', onFontGurmukhiMN, 'GurmukhiMN')
  const GurmukhiMT = FontMenuItem('Gurmukhi MT', onFontGurmukhiMT, 'GurmukhiMT')
  const GurmukhiSangamMN = FontMenuItem('Gurmukhi Sangam MN', onFontGurmukhiSangamMN, 'GurmukhiSangamMN')
  const Hangangche = FontMenuItem('Hangangche', onFontHangangche, 'Hangangche')
  const HannotateSC = FontMenuItem('Hannotate SC', onFontHannotateSC, 'HannotateSC')
  const HannotateTC = FontMenuItem('Hannotate TC', onFontHannotateTC, 'HannotateTC')
  const HanziPenSC = FontMenuItem('HanziPen SC', onFontHanziPenSC, 'HanziPenSC')
  const HanziPenTC = FontMenuItem('HanziPen TC', onFontHanziPenTC, 'HanziPenTC')
  const HeadlineA = FontMenuItem('HeadlineA', onFontHeadlineA, 'HeadlineA')
  const Hei = FontMenuItem('Hei', onFontHei, 'Hei')
  const HeitiSC = FontMenuItem('Heiti SC', onFontHeitiSC, 'HeitiSC')
  const Helvetica = FontMenuItem('Helvetica', onFontHelvetica, 'Helvetica')
  const HelveticaCY = FontMenuItem('Helvetica CY', onFontHelveticaCY, 'HelveticaCY')
  const HelveticaNeue = FontMenuItem('Helvetica Neue', onFontHelveticaNeue, 'HelveticaNeue')
  const Herculanum = FontMenuItem('Herculanum', onFontHerculanum, 'Herculanum')
  const HiraginoKakuGothic = FontMenuItem('Hiragino Kaku Gothic', onFontHiraginoKakuGothic, 'HiraginoKakuGothic')
  const HiraginoKakuGothicPro = FontMenuItem('Hiragino Kaku Gothic Pro', onFontHiraginoKakuGothicPro, 'HiraginoKakuGothicPro')
  const HiraginoMaruGothicPro = FontMenuItem('Hiragino Maru Gothic Pro', onFontHiraginoMaruGothicPro, 'HiraginoMaruGothicPro')
  const HiraginoMinchoPro = FontMenuItem('Hiragino Mincho Pro', onFontHiraginoMinchoPro, 'HiraginoMinchoPro')
  const HiraginoSans = FontMenuItem('Hiragino Sans', onFontHiraginoSans, 'HiraginoSans')
  const HoeflerText = FontMenuItem('Hoefler Text', onFontHoeflerText, 'HoeflerText')
  const HopperScript = FontMenuItem('Hopper Script', onFontHopperScript, 'HopperScript')
  const Impact = FontMenuItem('Impact', onFontImpact, 'Impact')
  const InaiMathi = FontMenuItem('Inai Mathi', onFontInaiMathi, 'InaiMathi')
  const InkFree = FontMenuItem('Ink Free', onFontInkFree, 'InkFree')
  const IowanOldStyleTitling = FontMenuItem('Iowan Old Style Titling', onFontIowanOldStyleTitling, 'IowanOldStyleTitling')
  const IrisUPC = FontMenuItem('IrisUPC', onFontIrisUPC, 'IrisUPC')
  const IskoolaPota = FontMenuItem('Iskoola Pota', onFontIskoolaPota, 'IskoolaPota')
  const ITCBodoni72 = FontMenuItem('ITC Bodoni 72', onFontITCBodoni72, 'ITCBodoni72')
  const ITFDevanagari = FontMenuItem('ITF Devanagari', onFontITFDevanagari, 'ITFDevanagari')
  const ITFDevanagariMarathi = FontMenuItem('ITF Devanagari Marathi', onFontITFDevanagariMarathi, 'ITFDevanagariMarathi')
  const Jaini = FontMenuItem('Jaini', onFontJaini, 'Jaini')
  const JainiPurva = FontMenuItem('Jaini Purva', onFontJainiPurva, 'JainiPurva')
  const JasmineUPC = FontMenuItem('JasmineUPC', onFontJasmineUPC, 'JasmineUPC')
  const JavaneseText = FontMenuItem('Javanese Text', onFontJavaneseText, 'JavaneseText')
  const JungGothic = FontMenuItem('Jung Gothic', onFontJungGothic, 'JungGothic')
  const Kai = FontMenuItem('Kai', onFontKai, 'Kai')
  const Kailasa = FontMenuItem('Kailasa', onFontKailasa, 'Kailasa')
  const KaiTi = FontMenuItem('KaiTi', onFontKaiTi, 'KaiTi')
  const KaitiSC = FontMenuItem('Kaiti SC', onFontKaitiSC, 'KaitiSC')
  const KaitiTC = FontMenuItem('Kaiti TC', onFontKaitiTC, 'KaitiTC')
  const Kalinga = FontMenuItem('Kalinga', onFontKalinga, 'Kalinga')
  const KannadaMN = FontMenuItem('Kannada MN', onFontKannadaMN, 'KannadaMN')
  const KannadaSangamMN = FontMenuItem('Kannada Sangam MN', onFontKannadaSangamMN, 'KannadaSangamMN')
  const Kartika = FontMenuItem('Kartika', onFontKartika, 'Kartika')
  const Katari = FontMenuItem('Katari', onFontKatari, 'Katari')
  const Kefa = FontMenuItem('Kefa', onFontKefa, 'Kefa')
  const Keyboard = FontMenuItem('Keyboard', onFontKeyboard, 'Keyboard')
  const KhmerMN = FontMenuItem('Khmer MN', onFontKhmerMN, 'KhmerMN')
  const KhmerSangamMN = FontMenuItem('Khmer Sangam MN', onFontKhmerSangamMN, 'KhmerSangamMN')
  const KhmerUI = FontMenuItem('Khmer UI', onFontKhmerUI, 'KhmerUI')
  const KodchiangUPC = FontMenuItem('KodchiangUPC', onFontKodchiangUPC, 'KodchiangUPC')
  const KohinoorBangla = FontMenuItem('Kohinoor Bangla', onFontKohinoorBangla, 'KohinoorBangla')
  const KohinoorDevanagari = FontMenuItem('Kohinoor Devanagari', onFontKohinoorDevanagari, 'KohinoorDevanagari')
  const KohinoorTelugu = FontMenuItem('Kohinoor Telugu', onFontKohinoorTelugu, 'KohinoorTelugu')
  const Kokila = FontMenuItem('Kokila', onFontKokila, 'Kokila')
  const Kokonor = FontMenuItem('Kokonor', onFontKokonor, 'Kokonor')
  const KoufiAbjadi = FontMenuItem('Koufi Abjadi', onFontKoufiAbjadi, 'KoufiAbjadi')
  const Krungthep = FontMenuItem('Krungthep', onFontKrungthep, 'Krungthep')
  const KuenstlerScript = FontMenuItem('Kuenstler Script', onFontKuenstlerScript, 'KuenstlerScript')
  const KufiStandardGK = FontMenuItem('KufiStandard GK', onFontKufiStandardGK, 'KufiStandardGK')
  const LahoreGurmukhi = FontMenuItem('Lahore Gurmukhi', onFontLahoreGurmukhi, 'LahoreGurmukhi')
  const Laimoon = FontMenuItem('Laimoon', onFontLaimoon, 'Laimoon')
  const LaoMN = FontMenuItem('Lao MN', onFontLaoMN, 'LaoMN')
  const LaoSangamMN = FontMenuItem('Lao Sangam MN', onFontLaoSangamMN, 'LaoSangamMN')
  const LaoUI = FontMenuItem('Lao UI', onFontLaoUI, 'LaoUI')
  const LastResort = FontMenuItem('LastResort', onFontLastResort, 'LastResort')
  const Latha = FontMenuItem('Latha', onFontLatha, 'Latha')
  const LavaDevanagari = FontMenuItem('Lava Devanagari', onFontLavaDevanagari, 'LavaDevanagari')
  const LavaKannada = FontMenuItem('Lava Kannada', onFontLavaKannada, 'LavaKannada')
  const LavaTelugu = FontMenuItem('Lava Telugu', onFontLavaTelugu, 'LavaTelugu')
  const Leelawadee = FontMenuItem('Leelawadee', onFontLeelawadee, 'Leelawadee')
  const LeelawadeeUI = FontMenuItem('Leelawadee UI', onFontLeelawadeeUI, 'LeelawadeeUI')
  const LevenimMT = FontMenuItem('Levenim MT', onFontLevenimMT, 'LevenimMT')
  const LibianSC = FontMenuItem('Libian SC', onFontLibianSC, 'LibianSC')
  const LibianTC = FontMenuItem('Libian TC', onFontLibianTC, 'LibianTC')
  const LiHeiPro = FontMenuItem('LiHei Pro', onFontLiHeiPro, 'LiHeiPro')
  const LilyUPC = FontMenuItem('LilyUPC', onFontLilyUPC, 'LilyUPC')
  const LiSongPro = FontMenuItem('LiSong Pro', onFontLiSongPro, 'LiSongPro')
  const LucidaConsole = FontMenuItem('Lucida Console', onFontLucidaConsole, 'LucidaConsole')
  const LucidaGrande = FontMenuItem('Lucida Grande', onFontLucidaGrande, 'LucidaGrande')
  const LucidaSans = FontMenuItem('Lucida Sans', onFontLucidaSans, 'LucidaSans')
  const LucidaSansUnicode = FontMenuItem('Lucida Sans Unicode', onFontLucidaSansUnicode, 'LucidaSansUnicode')
  const Luminari = FontMenuItem('Luminari', onFontLuminari, 'Luminari')
  const Maku = FontMenuItem('Maku', onFontMaku, 'Maku')
  const MalayalamMN = FontMenuItem('Malayalam MN', onFontMalayalamMN, 'MalayalamMN')
  const MalayalamSangamMN = FontMenuItem('Malayalam Sangam MN', onFontMalayalamSangamMN, 'MalayalamSangamMN')
  const MalgunGothic = FontMenuItem('Malgun Gothic', onFontMalgunGothic, 'MalgunGothic')
  const Mangal = FontMenuItem('Mangal', onFontMangal, 'Mangal')
  const MarkerFelt = FontMenuItem('Marker Felt', onFontMarkerFelt, 'MarkerFelt')
  const Marlett = FontMenuItem('Marlett', onFontMarlett, 'Marlett')
  const Meiryo = FontMenuItem('Meiryo', onFontMeiryo, 'Meiryo')
  const Menlo = FontMenuItem('Menlo', onFontMenlo, 'Menlo')
  const MicrosoftHimalaya = FontMenuItem('Microsoft Himalaya', onFontMicrosoftHimalaya, 'MicrosoftHimalaya')
  const MicrosoftJhengHei = FontMenuItem('Microsoft JhengHei', onFontMicrosoftJhengHei, 'MicrosoftJhengHei')
  const MicrosoftNewTaiLue = FontMenuItem('Microsoft New Tai Lue', onFontMicrosoftNewTaiLue, 'MicrosoftNewTaiLue')
  const MicrosoftPhagsPa = FontMenuItem('Microsoft PhagsPa', onFontMicrosoftPhagsPa, 'MicrosoftPhagsPa')
  const MicrosoftSansSerif = FontMenuItem('Microsoft Sans Serif', onFontMicrosoftSansSerif, 'MicrosoftSansSerif')
  const MicrosoftTaiLe = FontMenuItem('Microsoft Tai Le', onFontMicrosoftTaiLe, 'MicrosoftTaiLe')
  const MicrosoftUighur = FontMenuItem('Microsoft Uighur', onFontMicrosoftUighur, 'MicrosoftUighur')
  const MicrosoftYaHei = FontMenuItem('Microsoft YaHei', onFontMicrosoftYaHei, 'MicrosoftYaHei')
  const MicrosoftYiBaiti = FontMenuItem('Microsoft Yi Baiti', onFontMicrosoftYiBaiti, 'MicrosoftYiBaiti')
  const MingLiU = FontMenuItem('MingLiU', onFontMingLiU, 'MingLiU')
  const MingLiUExtB = FontMenuItem('MingLiU-ExtB', onFontMingLiUExtB, 'MingLiUExtB')
  const Miriam = FontMenuItem('Miriam', onFontMiriam, 'Miriam')
  const Mishafi = FontMenuItem('Mishafi', onFontMishafi, 'Mishafi')
  const MishafiGold = FontMenuItem('Mishafi Gold', onFontMishafiGold, 'MishafiGold')
  const Modak = FontMenuItem('Modak', onFontModak, 'Modak')
  const MonaLisaSolidITCTT = FontMenuItem('Mona Lisa Solid ITC TT', onFontMonaLisaSolidITCTT, 'MonaLisaSolidITCTT')
  const Monaco = FontMenuItem('Monaco', onFontMonaco, 'Monaco')
  const MonacoCY = FontMenuItem('Monaco CY', onFontMonacoCY, 'MonacoCY')
  const MongolianBaiti = FontMenuItem('Mongolian Baiti', onFontMongolianBaiti, 'MongolianBaiti')
  const MonotypeLingWai = FontMenuItem('Monotype LingWai', onFontMonotypeLingWai, 'MonotypeLingWai')
  const MoolBoran = FontMenuItem('MoolBoran', onFontMoolBoran, 'MoolBoran')
  const MSGothic = FontMenuItem('MS Gothic', onFontMSGothic, 'MSGothic')
  const MSMincho = FontMenuItem('MS Mincho', onFontMSMincho, 'MSMincho')
  const Mshtakan = FontMenuItem('Mshtakan', onFontMshtakan, 'Mshtakan')
  const Mukta = FontMenuItem('Mukta', onFontMukta, 'Mukta')
  const MuktaMalar = FontMenuItem('Mukta Malar', onFontMuktaMalar, 'MuktaMalar')
  const MuktaVaani = FontMenuItem('Mukta Vaani', onFontMuktaVaani, 'MuktaVaani')
  const MuktaMahee = FontMenuItem('MuktaMahee', onFontMuktaMahee, 'MuktaMahee')
  const Muna = FontMenuItem('Muna', onFontMuna, 'Muna')
  const MVBoli = FontMenuItem('MV Boli', onFontMVBoli, 'MVBoli')
  const MyanmarMN = FontMenuItem('Myanmar MN', onFontMyanmarMN, 'MyanmarMN')
  const MyanmarSangamMN = FontMenuItem('Myanmar Sangam MN', onFontMyanmarSangamMN, 'MyanmarSangamMN')
  const MyanmarText = FontMenuItem('Myanmar Text', onFontMyanmarText, 'MyanmarText')
  const MyriadArabic = FontMenuItem('Myriad Arabic', onFontMyriadArabic, 'MyriadArabic')
  const Nadeem = FontMenuItem('Nadeem', onFontNadeem, 'Nadeem')
  const NanumBrushScript = FontMenuItem('Nanum Brush Script', onFontNanumBrushScript, 'NanumBrushScript')
  const NanumPenScript = FontMenuItem('Nanum Pen Script', onFontNanumPenScript, 'NanumPenScript')
  const NanumGothic = FontMenuItem('NanumGothic', onFontNanumGothic, 'NanumGothic')
  const NanumMyeongjo = FontMenuItem('NanumMyeongjo', onFontNanumMyeongjo, 'NanumMyeongjo')
  const Narkisim = FontMenuItem('Narkisim', onFontNarkisim, 'Narkisim')
  const NeueHaasGrotskTxtPro = FontMenuItem('Neue Haas Grotesk Text Pro', onFontNeueHaasGrotskTxtPro, 'NeueHaasGrotskTxtPro')
  const NewPeninim = FontMenuItem('New Peninim', onFontNewPeninim, 'NewPeninim')
  const NewPeninimMT = FontMenuItem('New Peninim MT', onFontNewPeninimMT, 'NewPeninimMT')
  const NewPeninimMTInclined = FontMenuItem('New Peninim MT Inclined', onFontNewPeninimMTInclined, 'NewPeninimMTInclined')
  const NewYork = FontMenuItem('New York', onFontNewYork, 'NewYork')
  const NirmalaUI = FontMenuItem('Nirmala UI', onFontNirmalaUI, 'NirmalaUI')
  const Nisan = FontMenuItem('Nisan', onFontNisan, 'Nisan')
  const NISCGB18030 = FontMenuItem('NISC GB18030', onFontNISCGB18030, 'NISCGB18030')
  const Noteworthy = FontMenuItem('Noteworthy', onFontNoteworthy, 'Noteworthy')
  const NotoNastaliqUrdu = FontMenuItem('Noto Nastaliq Urdu', onFontNotoNastaliqUrdu, 'NotoNastaliqUrdu')
  const NotoSansJavanese = FontMenuItem('Noto Sans Javanese', onFontNotoSansJavanese, 'NotoSansJavanese')
  const NotoSansKannada = FontMenuItem('Noto Sans Kannada', onFontNotoSansKannada, 'NotoSansKannada')
  const NotoSansMyanmar = FontMenuItem('Noto Sans Myanmar', onFontNotoSansMyanmar, 'NotoSansMyanmar')
  const NotoSansOriya = FontMenuItem('Noto Sans Oriya', onFontNotoSansOriya, 'NotoSansOriya')
  const NotoSerifKannada = FontMenuItem('Noto Serif Kannada', onFontNotoSerifKannada, 'NotoSerifKannada')
  const NotoSerifMyanmar = FontMenuItem('Noto Serif Myanmar', onFontNotoSerifMyanmar, 'NotoSerifMyanmar')
  const Nyala = FontMenuItem('Nyala', onFontNyala, 'Nyala')
  const OctoberDevanagari = FontMenuItem('October Devanagari', onFontOctoberDevanagari, 'OctoberDevanagari')
  const OctoberTamil = FontMenuItem('October Tamil', onFontOctoberTamil, 'OctoberTamil')
  const Optima = FontMenuItem('Optima', onFontOptima, 'Optima')
  const OriyaMN = FontMenuItem('Oriya MN', onFontOriyaMN, 'OriyaMN')
  const OriyaSangamMN = FontMenuItem('Oriya Sangam MN', onFontOriyaSangamMN, 'OriyaSangamMN')
  const Osaka = FontMenuItem('Osaka', onFontOsaka, 'Osaka')
  const OsakaMono = FontMenuItem('Osaka-Mono', onFontOsakaMono, 'OsakaMono')
  const Palatino = FontMenuItem('Palatino', onFontPalatino, 'Palatino')
  const PalatinoLinotype = FontMenuItem('Palatino Linotype', onFontPalatinoLinotype, 'PalatinoLinotype')
  const Papyrus = FontMenuItem('Papyrus', onFontPapyrus, 'Papyrus')
  const PCMyungjo = FontMenuItem('PC Myungjo', onFontPCMyungjo, 'PCMyungjo')
  const Phosphate = FontMenuItem('Phosphate', onFontPhosphate, 'Phosphate')
  const PilGi = FontMenuItem('PilGi', onFontPilGi, 'PilGi')
  const Pilgiche = FontMenuItem('Pilgiche', onFontPilgiche, 'Pilgiche')
  const PingFangHK = FontMenuItem('PingFang HK', onFontPingFangHK, 'PingFangHK')
  const PingFangSC = FontMenuItem('PingFang SC', onFontPingFangSC, 'PingFangSC')
  const PingFangTC = FontMenuItem('PingFang TC', onFontPingFangTC, 'PingFangTC')
  const PlantagenetCherokee = FontMenuItem('Plantagenet Cherokee', onFontPlantagenetCherokee, 'PlantagenetCherokee')
  const PortagoITCTT = FontMenuItem('PortagoITC TT', onFontPortagoITCTT, 'PortagoITCTT')
  const PrincetownLET = FontMenuItem('Princetown LET', onFontPrincetownLET, 'PrincetownLET')
  const Produkt = FontMenuItem('Produkt', onFontProdukt, 'Produkt')
  const ProximaNova = FontMenuItem('Proxima Nova', onFontProximaNova, 'ProximaNova')
  const PSLOrnanongPro = FontMenuItem('PSL Ornanong Pro', onFontPSLOrnanongPro, 'PSLOrnanongPro')
  const PTMono = FontMenuItem('PT Mono', onFontPTMono, 'PTMono')
  const PTSans = FontMenuItem('PT Sans', onFontPTSans, 'PTSans')
  const PTSansNarrow = FontMenuItem('PT Sans Narrow', onFontPTSansNarrow, 'PTSansNarrow')
  const PTSerif = FontMenuItem('PT Serif', onFontPTSerif, 'PTSerif')
  const PublicoHeadlineRoman = FontMenuItem('Publico Headline Roman', onFontPublicoHeadlineRoman, 'PublicoHeadlineRoman')
  const QuotesCaps = FontMenuItem('Quotes Caps', onFontQuotesCaps, 'QuotesCaps')
  const QuotesScript = FontMenuItem('Quotes Script', onFontQuotesScript, 'QuotesScript')
  const Raanana = FontMenuItem('Raanana', onFontRaanana, 'Raanana')
  const Raavi = FontMenuItem('Raavi', onFontRaavi, 'Raavi')
  const Raya = FontMenuItem('Raya', onFontRaya, 'Raya')
  const Rockwell = FontMenuItem('Rockwell', onFontRockwell, 'Rockwell')
  const RockwellNova = FontMenuItem('Rockwell Nova', onFontRockwellNova, 'RockwellNova')
  const Rod = FontMenuItem('Rod', onFontRod, 'Rod')
  const SakkalMajalla = FontMenuItem('Sakkal Majalla', onFontSakkalMajalla, 'SakkalMajalla')
  const SamaDevanagari = FontMenuItem('Sama Devanagari', onFontSamaDevanagari, 'SamaDevanagari')
  const SamaGujarati = FontMenuItem('Sama Gujarati', onFontSamaGujarati, 'SamaGujarati')
  const SamaGurmukhi = FontMenuItem('Sama Gurmukhi', onFontSamaGurmukhi, 'SamaGurmukhi')
  const SamaKannada = FontMenuItem('Sama Kannada', onFontSamaKannada, 'SamaKannada')
  const SamaMalayalam = FontMenuItem('Sama Malayalam', onFontSamaMalayalam, 'SamaMalayalam')
  const SamaTamil = FontMenuItem('Sama Tamil', onFontSamaTamil, 'SamaTamil')
  const SanFranciscoMono = FontMenuItem('San Francisco Mono', onFontSanFranciscoMono, 'SanFranciscoMono')
  const Sana = FontMenuItem('Sana', onFontSana, 'Sana')
  const Sand = FontMenuItem('Sand', onFontSand, 'Sand')
  const SanskritText = FontMenuItem('Sanskrit Text', onFontSanskritText, 'SanskritText')
  const Sathu = FontMenuItem('Sathu', onFontSathu, 'Sathu')
  const SauberScript = FontMenuItem('Sauber Script', onFontSauberScript, 'SauberScript')
  const SchoolHouseCursiveB = FontMenuItem('SchoolHouse Cursive B', onFontSchoolHouseCursiveB, 'SchoolHouseCursiveB')
  const SchoolHousePrintedA = FontMenuItem('SchoolHouse Printed A', onFontSchoolHousePrintedA, 'SchoolHousePrintedA')
  const SegoePrint = FontMenuItem('Segoe Print', onFontSegoePrint, 'SegoePrint')
  const SegoeScript = FontMenuItem('Segoe Script', onFontSegoeScript, 'SegoeScript')
  const SegoeUI = FontMenuItem('Segoe UI', onFontSegoeUI, 'SegoeUI')
  const Seoul = FontMenuItem('Seoul', onFontSeoul, 'Seoul')
  const SFArabic = FontMenuItem('SF Arabic', onFontSFArabic, 'SFArabic')
  const ShinMyungjoNeue = FontMenuItem('Shin Myungjo Neue', onFontShinMyungjoNeue, 'ShinMyungjoNeue')
  const Shobhika = FontMenuItem('Shobhika', onFontShobhika, 'Shobhika')
  const ShonarBangla = FontMenuItem('Shonar Bangla', onFontShonarBangla, 'ShonarBangla')
  const ShreeDevanagari714 = FontMenuItem('Shree Devanagari 714', onFontShreeDevanagari714, 'ShreeDevanagari714')
  const Shruti = FontMenuItem('Shruti', onFontShruti, 'Shruti')
  const SignPainter = FontMenuItem('SignPainter', onFontSignPainter, 'SignPainter')
  const SignPainterHouseScript = FontMenuItem('SignPainter-HouseScript', onFontSignPainterHouseScript, 'SignPainterHouseScript')
  const Silom = FontMenuItem('Silom', onFontSilom, 'Silom')
  const SimHei = FontMenuItem('SimHei', onFontSimHei, 'SimHei')
  const SimplifiedArabic = FontMenuItem('Simplified Arabic', onFontSimplifiedArabic, 'SimplifiedArabic')
  const SimSong = FontMenuItem('SimSong', onFontSimSong, 'SimSong')
  const SimSun = FontMenuItem('SimSun', onFontSimSun, 'SimSun')
  const SinhalaMN = FontMenuItem('Sinhala MN', onFontSinhalaMN, 'SinhalaMN')
  const SinhalaSangamMN = FontMenuItem('Sinhala Sangam MN', onFontSinhalaSangamMN, 'SinhalaSangamMN')
  const Sitka = FontMenuItem('Sitka', onFontSitka, 'Sitka')
  const Skia = FontMenuItem('Skia', onFontSkia, 'Skia')
  const SnellRoundhand = FontMenuItem('Snell Roundhand', onFontSnellRoundhand, 'SnellRoundhand')
  const Somer = FontMenuItem('Somer', onFontSomer, 'Somer')
  const SongtiSC = FontMenuItem('Songti SC', onFontSongtiSC, 'SongtiSC')
  const SongtiTC = FontMenuItem('Songti TC', onFontSongtiTC, 'SongtiTC')
  const SpotMono = FontMenuItem('Spot Mono', onFontSpotMono, 'SpotMono')
  const STFangSong = FontMenuItem('ST FangSong', onFontSTFangSong, 'STFangSong')
  const STHeiti = FontMenuItem('ST Heiti', onFontSTHeiti, 'STHeiti')
  const STKaiti = FontMenuItem('ST Kaiti', onFontSTKaiti, 'STKaiti')
  const STSong = FontMenuItem('ST Song', onFontSTSong, 'STSong')
  const STXihei = FontMenuItem('ST Xihei', onFontSTXihei, 'STXihei')
  const STIXTwoText = FontMenuItem('STIX Two Text', onFontSTIXTwoText, 'STIXTwoText')
  const STIXGeneralRegular = FontMenuItem('STIXGeneral-Regular', onFontSTIXGeneralRegular, 'STIXGeneralRegular')
  const StoneSansSemITCTT = FontMenuItem('Stone Sans Sem ITC TT', onFontStoneSansSemITCTT, 'StoneSansSemITCTT')
  const SukhumvitSetText = FontMenuItem('Sukhumvit Set Text', onFontSukhumvitSetText, 'SukhumvitSetText')
  const Sylfaen = FontMenuItem('Sylfaen', onFontSylfaen, 'Sylfaen')
  const SynchroLET = FontMenuItem('Synchro LET', onFontSynchroLET, 'SynchroLET')
  const TaeGraphic = FontMenuItem('Tae Graphic', onFontTaeGraphic, 'TaeGraphic')
  const Tahoma = FontMenuItem('Tahoma', onFontTahoma, 'Tahoma')
  const Taipei = FontMenuItem('Taipei', onFontTaipei, 'Taipei')
  const TamilMN = FontMenuItem('Tamil MN', onFontTamilMN, 'TamilMN')
  const TamilSangamMN = FontMenuItem('Tamil Sangam MN', onFontTamilSangamMN, 'TamilSangamMN')
  const Techno = FontMenuItem('Techno', onFontTechno, 'Techno')
  const TeluguMN = FontMenuItem('Telugu MN', onFontTeluguMN, 'TeluguMN')
  const TeluguSangamMN = FontMenuItem('Telugu Sangam MN', onFontTeluguSangamMN, 'TeluguSangamMN')
  const Textile = FontMenuItem('Textile', onFontTextile, 'Textile')
  const Thonburi = FontMenuItem('Thonburi', onFontThonburi, 'Thonburi')
  const Times = FontMenuItem('Times', onFontTimes, 'Times')
  const TimesCY = FontMenuItem('Times CY', onFontTimesCY, 'TimesCY')
  const TimesNewRoman = FontMenuItem('Times New Roman', onFontTimesNewRoman, 'TimesNewRoman')
  const TimesRoman = FontMenuItem('Times Roman', onFontTimesRoman, 'TimesRoman')
  const TiroBangla = FontMenuItem('Tiro Bangla', onFontTiroBangla, 'TiroBangla')
  const TiroDevanagariHindi = FontMenuItem('Tiro Devanagari Hindi', onFontTiroDevanagariHindi, 'TiroDevanagariHindi')
  const TiroDevanagariMarathi = FontMenuItem('Tiro Devanagari Marathi', onFontTiroDevanagariMarathi, 'TiroDevanagariMarathi')
  const TiroDevanagariSanskrit = FontMenuItem('Tiro Devanagari Sanskrit', onFontTiroDevanagariSanskrit, 'TiroDevanagariSanskrit')
  const TiroGurmukhi = FontMenuItem('Tiro Gurmukhi', onFontTiroGurmukhi, 'TiroGurmukhi')
  const TiroHindi = FontMenuItem('Tiro Hindi', onFontTiroHindi, 'TiroHindi')
  const TiroKannada = FontMenuItem('Tiro Kannada', onFontTiroKannada, 'TiroKannada')
  const TiroMarathi = FontMenuItem('Tiro Marathi', onFontTiroMarathi, 'TiroMarathi')
  const TiroSanskrit = FontMenuItem('Tiro Sanskrit', onFontTiroSanskrit, 'TiroSanskrit')
  const TiroTamil = FontMenuItem('Tiro Tamil', onFontTiroTamil, 'TiroTamil')
  const TiroTelugu = FontMenuItem('Tiro Telugu', onFontTiroTelugu, 'TiroTelugu')
  const ToppanBunkyuGothic = FontMenuItem('Toppan Bunkyu Gothic', onFontToppanBunkyuGothic, 'ToppanBunkyuGothic')
  const ToppanBunkyuMincho = FontMenuItem('Toppan Bunkyu Mincho', onFontToppanBunkyuMincho, 'ToppanBunkyuMincho')
  const TraditionalArabic = FontMenuItem('Traditional Arabic', onFontTraditionalArabic, 'TraditionalArabic')
  const Trattatello = FontMenuItem('Trattatello', onFontTrattatello, 'Trattatello')
  const TrebuchetMS = FontMenuItem('Trebuchet MS', onFontTrebuchetMS, 'TrebuchetMS')
  const TsukushiARoundGothic = FontMenuItem('Tsukushi A Round Gothic', onFontTsukushiARoundGothic, 'TsukushiARoundGothic')
  const TsukushiBRoundGothic = FontMenuItem('Tsukushi B Round Gothic', onFontTsukushiBRoundGothic, 'TsukushiBRoundGothic')
  const Tunga = FontMenuItem('Tunga', onFontTunga, 'Tunga')
  const TwCenMT = FontMenuItem('Tw Cen MT', onFontTwCenMT, 'TwCenMT')
  const UDDigiKyokasho = FontMenuItem('UD Digi Kyokasho', onFontUDDigiKyokasho, 'UDDigiKyokasho')
  const UrduTypesetting = FontMenuItem('Urdu Typesetting', onFontUrduTypesetting, 'UrduTypesetting')
  const Utsaah = FontMenuItem('Utsaah', onFontUtsaah, 'Utsaah')
  const Vani = FontMenuItem('Vani', onFontVani, 'Vani')
  const Verdana = FontMenuItem('Verdana', onFontVerdana, 'Verdana')
  const VerdanaPro = FontMenuItem('Verdana Pro', onFontVerdanaPro, 'VerdanaPro')
  const Vijaya = FontMenuItem('Vijaya', onFontVijaya, 'Vijaya')
  const Vrinda = FontMenuItem('Vrinda', onFontVrinda, 'Vrinda')
  const Waseem = FontMenuItem('Waseem', onFontWaseem, 'Waseem')
  const WawatiSC = FontMenuItem('Wawati SC', onFontWawatiSC, 'WawatiSC')
  const WawatiTC = FontMenuItem('Wawati TC', onFontWawatiTC, 'WawatiTC')
  const Yaziji = FontMenuItem('Yaziji', onFontYaziji, 'Yaziji')
  const YuGothic = FontMenuItem('Yu Gothic', onFontYuGothic, 'YuGothic')
  const YuKyokashoN = FontMenuItem('Yu Kyokasho N', onFontYuKyokashoN, 'YuKyokashoN')
  const YuMincho = FontMenuItem('Yu Mincho', onFontYuMincho, 'YuMincho')
  const YuantiSC = FontMenuItem('Yuanti SC', onFontYuantiSC, 'YuantiSC')
  const YuantiTC = FontMenuItem('Yuanti TC', onFontYuantiTC, 'YuantiTC')
  const YuppySC = FontMenuItem('Yuppy SC', onFontYuppySC, 'YuppySC')
  const ZapfChancery = FontMenuItem('Zapf Chancery', onFontZapfChancery, 'ZapfChancery')
  const Zapfino = FontMenuItem('Zapfino', onFontZapfino, 'Zapfino')  
        
  return (
      <Menu as="div" className="relative inline-block text-left" style={{textAlign: "center"}}>
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
          <Menu.Items className="menuitems">
            <div className="px-1 py-1">
              {defaultFont}
            </div>
            {graphiteEnabled && <div className="px-1 py-1">
             <span className="text-left text-gray-900 group menuitem"><b>Graphite-enabled:</b></span>
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
            {graphiteEnabled && <div className="px-1 py-1">
              <span className="text-left text-gray-900 group menuitem"><b>Graphite-enabled (local):<em>{isNoGEFonts && ' -none detected-'}</em></b></span>
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
            <div className="px-1 py-1">
              <span className={'text-left text-gray-900 group menuitem'}><b>Detected Fonts:</b></span>
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