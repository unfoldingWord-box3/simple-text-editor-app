import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function FontDropdown(props) {
  const {font, setFont} = props;

  const graphiteEnabled = (navigator.userAgent.toLowerCase().indexOf('firefox') > -1 ? true : false);

  /** Graphite-enabled woff and woff2 fonts included */
  const onFontClear = () => { setFont(''); };
  const onFontAktabRW = () => { setFont('AktabRW'); };
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
  const onFontAktab = () => { setFont('Aktab'); };
  const onFontAlkalami = () => { setFont('Alkalami'); };
  const onFontAlkalamiLight = () => { setFont('AlkalamiLight'); };
  const onFontAndika = () => { setFont('Andika'); };
  const onFontAwamiNastaliq = () => { setFont('AwamiNastaliq'); };
  const onFontGentiumPlus = () => { setFont('GentiumPlus'); };
  const onFontHarmattan = () => { setFont('Harmattan'); };
  const onFontKhmerBusra = () => { setFont('KhmerBusra'); };
  const onFontKhmerMondulkiri = () => { setFont('KhmerMondulkiri'); };
  const onFontLateefGR = () => { setFont('LateefGR'); };
  const onFontMingzat = () => { setFont('Mingzat'); };
  const onFontNarnoor = () => { setFont('Narnoor'); };
  const onFontPadauk = () => { setFont('Padauk'); };
  const onFontScheherazadeNew = () => { setFont('ScheherazadeNew'); };
  const onFontShimenkan = () => { setFont('Shimenkan'); };
  const onFontSophiaNubian = () => { setFont('SophiaNubian'); };
  const onFontTagmukay = () => { setFont('Tagmukay'); };
  const onFontTaiHeritagePro = () => { setFont('TaiHeritagePro'); };

  /** Windows 11 and MacOS system fonts if locally installed */
  const onFontAharoniBold = () => { setFont('AharoniBold'); };
  const onFontAlBayan = () => { setFont('AlBayan'); };
  const onFontAlNile = () => { setFont('AlNile'); };
  const onFontAlTarikh = () => { setFont('AlTarikh'); };
  const onFontAldhabi = () => { setFont('Aldhabi'); };
  const onFontAmericanTypewriter = () => { setFont('AmericanTypewriter'); };
  const onFontAndaleMono = () => { setFont('AndaleMono'); };
  const onFontAndalus = () => { setFont('Andalus'); };
  const onFontAngsanaNew = () => { setFont('AngsanaNew'); };
  const onFontAngsanaUPC = () => { setFont('AngsanaUPC'); };
  const onFontAparajita = () => { setFont('Aparajita'); };
  const onFontAppleBraille = () => { setFont('AppleBraille'); };
  const onFontAppleCasual = () => { setFont('AppleCasual'); };
  const onFontAppleChancery = () => { setFont('AppleChancery'); };
  const onFontAppleGaramond = () => { setFont('AppleGaramond'); };
  const onFontAppleGothic = () => { setFont('AppleGothic'); };
  const onFontAppleLiGothic = () => { setFont('AppleLiGothic'); };
  const onFontAppleLiSung = () => { setFont('AppleLiSung'); };
  const onFontAppleMyungjo = () => { setFont('AppleMyungjo'); };
  const onFontAppleSDGothicNeoReg = () => { setFont('AppleSDGothicNeoReg'); };
  const onFontAquaKana = () => { setFont('AquaKana'); };
  const onFontArabicTypesetting = () => { setFont('ArabicTypesetting'); };
  const onFontArial = () => { setFont('Arial'); };
  const onFontArialBlack = () => { setFont('ArialBlack'); };
  const onFontArialHebrew = () => { setFont('ArialHebrew'); };
  const onFontArialNova = () => { setFont('ArialNova'); };
  const onFontAvenirBook = () => { setFont('AvenirBook'); };
  const onFontAvenirNext = () => { setFont('AvenirNext'); };
  const onFontAvenirRoman = () => { setFont('AvenirRoman'); };
  const onFontAyuthaya = () => { setFont('Ayuthaya'); };
  const onFontBaghdad = () => { setFont('Baghdad'); };
  const onFontBahnschrift = () => { setFont('Bahnschrift'); };
  const onFontBanglaMN = () => { setFont('BanglaMN'); };
  const onFontBanglaSangamMN = () => { setFont('BanglaSangamMN'); };
  const onFontBaskerville = () => { setFont('Baskerville'); };
  const onFontBatang = () => { setFont('Batang'); };
  const onFontBeijing = () => { setFont('Beijing'); };
  const onFontBeirut = () => { setFont('Beirut'); };
  const onFontBiauKai = () => { setFont('BiauKai'); };
  const onFontBigCaslon = () => { setFont('BigCaslon'); };
  const onFontBIZUDGothic = () => { setFont('BIZUDGothic'); };
  const onFontBIZUDMinchoMedium = () => { setFont('BIZUDMinchoMedium'); };
  const onFontBodoni72Book = () => { setFont('Bodoni72Book'); };
  const onFontBrowalliaNew = () => { setFont('BrowalliaNew'); };
  const onFontBrowalliaUPC = () => { setFont('BrowalliaUPC'); };
  const onFontBrushScript = () => { setFont('BrushScript'); };
  const onFontCalibri = () => { setFont('Calibri'); };
  const onFontCambria = () => { setFont('Cambria'); };
  const onFontCandara = () => { setFont('Candara'); };
  const onFontChalkboard = () => { setFont('Chalkboard'); };
  const onFontChalkboardSE = () => { setFont('ChalkboardSE'); };
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
  const onFontDecoTypeNaskh = () => { setFont('DecoTypeNaskh'); };
  const onFontDengXian = () => { setFont('DengXian'); };
  const onFontDevanagari = () => { setFont('Devanagari'); };
  const onFontDevanagariMT = () => { setFont('DevanagariMT'); };
  const onFontDevanagariSangamMN = () => { setFont('DevanagariSangamMN'); };
  const onFontDFKaiSB = () => { setFont('DFKai-SB'); };
  const onFontDidot = () => { setFont('Didot'); };
  const onFontDilleniaUPC = () => { setFont('DilleniaUPC'); };
  const onFontDiwanKufi = () => { setFont('DiwanKufi'); };
  const onFontDiwanThuluth = () => { setFont('DiwanThuluth'); };
  const onFontDokChampa = () => { setFont('DokChampa'); };
  const onFontDotum = () => { setFont('Dotum'); };
  const onFontEbrima = () => { setFont('Ebrima'); };
  const onFontEstrangeloEdessa = () => { setFont('EstrangeloEdessa'); };
  const onFontEucrosiaUPC = () => { setFont('EucrosiaUPC'); };
  const onFontEuphemia = () => { setFont('Euphemia'); };
  const onFontEuphemiaUCAS = () => { setFont('EuphemiaUCAS'); };
  const onFontFangSong = () => { setFont('FangSong'); };
  const onFontFarah = () => { setFont('Farah'); };
  const onFontFarisi = () => { setFont('Farisi'); };
  const onFontFranklinGothicMedium = () => { setFont('FranklinGothicMedium'); };
  const onFontFrankRuehl = () => { setFont('FrankRuehl'); };
  const onFontFreesiaUPC = () => { setFont('FreesiaUPC'); };
  const onFontFutura = () => { setFont('Futura'); };
  const onFontGabriola = () => { setFont('Gabriola'); };
  const onFontGadget = () => { setFont('Gadget'); };
  const onFontGadugi = () => { setFont('Gadugi'); };
  const onFontGalvji = () => { setFont('Galvji'); };
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
  const onFontGujarati = () => { setFont('Gujarati'); };
  const onFontGujaratiMT = () => { setFont('GujaratiMT'); };
  const onFontGujaratiSangamMN = () => { setFont('GujaratiSangamMN'); };
  const onFontGulim = () => { setFont('Gulim'); };
  const onFontGungSeoche = () => { setFont('GungSeoche'); };
  const onFontGungsuh = () => { setFont('Gungsuh'); };
  const onFontGurmukhi = () => { setFont('Gurmukhi'); };
  const onFontGurmukhiMN = () => { setFont('GurmukhiMN'); };
  const onFontGurmukhiMT = () => { setFont('GurmukhiMT'); };
  const onFontGurmukhiSangamMN = () => { setFont('GurmukhiSangamMN'); };
  const onFontHangangche = () => { setFont('Hangangche'); };
  const onFontHeadlineA = () => { setFont('HeadlineA'); };
  const onFontHei = () => { setFont('Hei'); };
  const onFontHelvetica = () => { setFont('Helvetica'); };
  const onFontHelveticaCY = () => { setFont('HelveticaCY'); };
  const onFontHelveticaNeue = () => { setFont('HelveticaNeue'); };
  const onFontHerculanum = () => { setFont('Herculanum'); };
  const onFontHiraginoKakuGothicPro = () => { setFont('HiraginoKakuGothicPro'); };
  const onFontHiraginoMaruGothicPro = () => { setFont('HiraginoMaruGothicPro'); };
  const onFontHiraginoMinchoPro = () => { setFont('HiraginoMinchoPro'); };
  const onFontHiraginoSansGBW3 = () => { setFont('HiraginoSansGBW3'); };
  const onFontHiraginoSansGBW6 = () => { setFont('HiraginoSansGBW6'); };
  const onFontHiraginoSansW0 = () => { setFont('HiraginoSansW0'); };
  const onFontHiraginoSansW1 = () => { setFont('HiraginoSansW1'); };
  const onFontHiraginoSansW2 = () => { setFont('HiraginoSansW2'); };
  const onFontHiraginoSansW3 = () => { setFont('HiraginoSansW3'); };
  const onFontHiraginoSansW4 = () => { setFont('HiraginoSansW4'); };
  const onFontHiraginoSansW5 = () => { setFont('HiraginoSansW5'); };
  const onFontHiraginoSansW6 = () => { setFont('HiraginoSansW6'); };
  const onFontHiraginoSansW7 = () => { setFont('HiraginoSansW7'); };
  const onFontHiraginoSansW8 = () => { setFont('HiraginoSansW8'); };
  const onFontHiraginoSansW9 = () => { setFont('HiraginoSansW9'); };
  const onFontHoeflerText = () => { setFont('HoeflerText'); };
  const onFontImpact = () => { setFont('Impact'); };
  const onFontInaiMathi = () => { setFont('InaiMathi'); };
  const onFontInkFree = () => { setFont('InkFree'); };
  const onFontIrisUPC = () => { setFont('IrisUPC'); };
  const onFontIskoolaPota = () => { setFont('IskoolaPota'); };
  const onFontITFDevanagariBook = () => { setFont('ITFDevanagariBook'); };
  const onFontITFDevanagariMarathiBk = () => { setFont('ITFDevanagariMarathiBk'); };
  const onFontJasmineUPC = () => { setFont('JasmineUPC'); };
  const onFontJavaneseText = () => { setFont('JavaneseText'); };
  const onFontJungGothic = () => { setFont('JungGothic'); };
  const onFontKai = () => { setFont('Kai'); };
  const onFontKailasa = () => { setFont('Kailasa'); };
  const onFontKaiTi = () => { setFont('KaiTi'); };
  const onFontKalinga = () => { setFont('Kalinga'); };
  const onFontKannadaMN = () => { setFont('KannadaMN'); };
  const onFontKannadaSangamMN = () => { setFont('KannadaSangamMN'); };
  const onFontKartika = () => { setFont('Kartika'); };
  const onFontKefaBold = () => { setFont('KefaBold'); };
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
  const onFontKrungthep = () => { setFont('Krungthep'); };
  const onFontKuenstlerScript = () => { setFont('KuenstlerScript'); };
  const onFontKufiStandardGK = () => { setFont('KufiStandardGK'); };
  const onFontLaoMN = () => { setFont('LaoMN'); };
  const onFontLaoSangamMN = () => { setFont('LaoSangamMN'); };
  const onFontLaoUI = () => { setFont('LaoUI'); };
  const onFontLastResort = () => { setFont('LastResort'); };
  const onFontLatha = () => { setFont('Latha'); };
  const onFontLeelawadee = () => { setFont('Leelawadee'); };
  const onFontLeelawadeeUI = () => { setFont('LeelawadeeUI'); };
  const onFontLevenimMT = () => { setFont('LevenimMT'); };
  const onFontLiHeiPro = () => { setFont('LiHeiPro'); };
  const onFontLilyUPC = () => { setFont('LilyUPC'); };
  const onFontLiSongPro = () => { setFont('LiSongPro'); };
  const onFontLucidaConsole = () => { setFont('LucidaConsole'); };
  const onFontLucidaGrande = () => { setFont('LucidaGrande'); };
  const onFontLucidaSans = () => { setFont('LucidaSans'); };
  const onFontLucidaSansUnicode = () => { setFont('LucidaSansUnicode'); };
  const onFontLuminari = () => { setFont('Luminari'); };
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
  const onFontMishafiGold = () => { setFont('MishafiGold'); };
  const onFontMishafi = () => { setFont('Mishafi'); };
  const onFontMonaco = () => { setFont('Monaco'); };
  const onFontMonacoCY = () => { setFont('MonacoCY'); };
  const onFontMongolianBaiti = () => { setFont('MongolianBaiti'); };
  const onFontMoolBoran = () => { setFont('MoolBoran'); };
  const onFontMSGothic = () => { setFont('MSGothic'); };
  const onFontMSMincho = () => { setFont('MSMincho'); };
  const onFontMshtakan = () => { setFont('Mshtakan'); };
  const onFontMuktaMahee = () => { setFont('MuktaMahee'); };
  const onFontMuna = () => { setFont('Muna'); };
  const onFontMVBoli = () => { setFont('MVBoli'); };
  const onFontMyanmarMN = () => { setFont('MyanmarMN'); };
  const onFontMyanmarSangamMN = () => { setFont('MyanmarSangamMN'); };
  const onFontMyanmarText = () => { setFont('MyanmarText'); };
  const onFontNadeem = () => { setFont('Nadeem'); };
  const onFontNarkisim = () => { setFont('Narkisim'); };
  const onFontNeueHaasGrotskTxtPro = () => { setFont('NeueHaasGrotskTxtPro'); };
  const onFontNewPeninim = () => { setFont('NewPeninim'); };
  const onFontNewPeninimMT = () => { setFont('NewPeninimMT'); };
  const onFontNewYork = () => { setFont('NewYork'); };
  const onFontNirmalaUI = () => { setFont('NirmalaUI'); };
  const onFontNISCGB18030 = () => { setFont('NISCGB18030'); };
  const onFontNotoNastaliqUrdu = () => { setFont('NotoNastaliqUrdu'); };
  const onFontNotoSansJavanese = () => { setFont('NotoSansJavanese'); };
  const onFontNotoSansKannada = () => { setFont('NotoSansKannada'); };
  const onFontNotoSansMyanmar = () => { setFont('NotoSansMyanmar'); };
  const onFontNotoSansOriya = () => { setFont('NotoSansOriya'); };
  const onFontNotoSerifMyanmar = () => { setFont('NotoSerifMyanmar'); };
  const onFontNyala = () => { setFont('Nyala'); };
  const onFontOptima = () => { setFont('Optima'); };
  const onFontOriyaMN = () => { setFont('OriyaMN'); };
  const onFontOriyaSangamMN = () => { setFont('OriyaSangamMN'); };
  const onFontOsaka = () => { setFont('Osaka'); };
  const onFontPalatino = () => { setFont('Palatino'); };
  const onFontPalatinoLinotype = () => { setFont('PalatinoLinotype'); };
  const onFontPapyrus = () => { setFont('Papyrus'); };
  const onFontPartyLETPlain = () => { setFont('PartyLETPlain'); };
  const onFontPCMyungjo = () => { setFont('PCMyungjo'); };
  const onFontPilgiche = () => { setFont('Pilgiche'); };
  const onFontPingFangHK = () => { setFont('PingFangHK'); };
  const onFontPingFangSC = () => { setFont('PingFangSC'); };
  const onFontPingFangTC = () => { setFont('PingFangTC'); };
  const onFontPlantagenetCherokee = () => { setFont('PlantagenetCherokee'); };
  const onFontPTMono = () => { setFont('PTMono'); };
  const onFontPTSans = () => { setFont('PTSans'); };
  const onFontPTSerif = () => { setFont('PTSerif'); };
  const onFontRaanana = () => { setFont('Raanana'); };
  const onFontRaavi = () => { setFont('Raavi'); };
  const onFontRockwell = () => { setFont('Rockwell'); };
  const onFontRockwellNova = () => { setFont('RockwellNova'); };
  const onFontRod = () => { setFont('Rod'); };
  const onFontSakkalMajalla = () => { setFont('SakkalMajalla'); };
  const onFontSana = () => { setFont('Sana'); };
  const onFontSand = () => { setFont('Sand'); };
  const onFontSanskritText = () => { setFont('SanskritText'); };
  const onFontSathu = () => { setFont('Sathu'); };
  const onFontSegoePrint = () => { setFont('SegoePrint'); };
  const onFontSegoeScript = () => { setFont('SegoeScript'); };
  const onFontSegoeUI = () => { setFont('SegoeUI'); };
  const onFontSeoul = () => { setFont('Seoul'); };
  const onFontShinMyungjoNeue = () => { setFont('ShinMyungjoNeue'); };
  const onFontShonarBangla = () => { setFont('ShonarBangla'); };
  const onFontShreeDevanagari714 = () => { setFont('ShreeDevanagari714'); };
  const onFontShruti = () => { setFont('Shruti'); };
  const onFontSignPainterHouseScript = () => { setFont('SignPainter-HouseScript'); };
  const onFontSilom = () => { setFont('Silom'); };
  const onFontSimHei = () => { setFont('SimHei'); };
  const onFontSimplifiedArabic = () => { setFont('SimplifiedArabic'); };
  const onFontSimSun = () => { setFont('SimSun'); };
  const onFontSinhalaMN = () => { setFont('SinhalaMN'); };
  const onFontSinhalaSangamMN = () => { setFont('SinhalaSangamMN'); };
  const onFontSitkaText = () => { setFont('SitkaText'); };
  const onFontSkia = () => { setFont('Skia'); };
  const onFontSnellRoundhand = () => { setFont('SnellRoundhand'); };
  const onFontSnellRoundhandBlack = () => { setFont('SnellRoundhandBlack'); };
  const onFontSongtiSC = () => { setFont('SongtiSC'); };
  const onFontSongtiTC = () => { setFont('SongtiTC'); };
  const onFontSTFangSong = () => { setFont('STFangSong'); };
  const onFontSTFangSong2 = () => { setFont('STFangSong2'); };
  const onFontSTHeiti = () => { setFont('STHeiti'); };
  const onFontSTKaiti = () => { setFont('STKaiti'); };
  const onFontSTSong = () => { setFont('STSong'); };
  const onFontSTIXGeneralRegular = () => { setFont('STIXGeneral-Regular'); };
  const onFontSukhumvitSetText = () => { setFont('SukhumvitSetText'); };
  const onFontSylfaen = () => { setFont('Sylfaen'); };
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
  const onFontTraditionalArabic = () => { setFont('TraditionalArabic'); };
  const onFontTrattatello = () => { setFont('Trattatello'); };
  const onFontTrebuchetMS = () => { setFont('TrebuchetMS'); };
  const onFontTunga = () => { setFont('Tunga'); };
  const onFontUDDigiKyokashoNR = () => { setFont('UDDigiKyokashoN-R'); };
  const onFontUrduTypesetting = () => { setFont('UrduTypesetting'); };
  const onFontUtsaah = () => { setFont('Utsaah'); };
  const onFontVani = () => { setFont('Vani'); };
  const onFontVerdana = () => { setFont('Verdana'); };
  const onFontVerdanaPro = () => { setFont('VerdanaPro'); };
  const onFontVijaya = () => { setFont('Vijaya'); };
  const onFontVrinda = () => { setFont('Vrinda'); };
  const onFontWaseem = () => { setFont('Waseem'); };
  const onFontYuGothic = () => { setFont('YuGothic'); };
  const onFontYuMincho = () => { setFont('YuMincho'); };
  const onFontZapfChancery = () => { setFont('ZapfChancery'); };
  const onFontZapfino = () => { setFont('Zapfino'); };
    
  const fontOnOrOff = (itemFont) => font === itemFont ? 'on' : ''
  const itemPresentation = (itemName) => "➤" + itemName

  function FontMenuItem(itemName, itemClick, itemFont, itemType) {

    const fontActive = fontOnOrOff(itemFont)
    const fontList = itemPresentation(itemName)

    return (
      <Menu.Item>
      {({ active }) => (
        <button  type="button" onClick={itemClick} className={`${ active ? 'menuitemhov' : 'menuitemnohov' } group menuitem ${fontActive}`}>
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
  const aktabRW = FontMenuItem('Aktab 2.000', onFontAktabRW, 'AktabRW')
  const alkalamiRW = FontMenuItem('Alkalami 1.200', onFontAlkalamiRW, 'AlkalamiRW')
  const alkalamiLW = FontMenuItem('Alkalami Light 1.200', onFontAlkalamiLW, 'AlkalamiLW')
  const andikaRW = FontMenuItem('Andika 6.001', onFontAndikaRW, 'AndikaRW')
  const awamiNastaliqRW = FontMenuItem('Awami Nastaliq 2.200', onFontAwamiNastaliqRW, 'AwamiNastaliqRW')
  const gentiumPlusRW = FontMenuItem('Gentium Plus 6.001', onFontGentiumPlusRW, 'GentiumPlusRW')
  const harmattanW = FontMenuItem('Harmattan 2.000', onFontHarmattanW, 'HarmattanW')
  const lateefRW = FontMenuItem('LateefGR 1.200', onFontLateefRW, 'LateefRW')
  const mingzatW = FontMenuItem('Mingzat 1.000', onFontMingzatW, 'MingzatW')
  const narnoorW = FontMenuItem('Narnoor 1.000', onFontNarnoorW, 'NarnoorW')
  const padaukRW = FontMenuItem('Padauk 5.000', onFontPadaukRW, 'PadaukRW')
  const scheherazadeRW = FontMenuItem('Scheherazade New 3.300', onFontScheherazadeRW, 'AScheherazadeRW')
  const tagmukayRW = FontMenuItem('Tagmukay 2.000', onFontTagmukayRW, 'TagmukayRW')
  const taiHeritageProRW = FontMenuItem('TaiHeritagePro 2.600', onFontTaiHeritageProRW, 'TaiHeritageProRW')

  /** Graphite-enabled fonts if locally installed */
  const aktab = FontMenuItem('Aktab', onFontAktab, 'Aktab')
  const alkalami = FontMenuItem('Alkalami', onFontAlkalami, 'Alkalami')
  const alkalamiLight = FontMenuItem('Alkalami Light', onFontAlkalamiLight, 'AlkalamiLight')
  const andika = FontMenuItem('Andika', onFontAndika, 'Andika')
  const awamiNastaliq = FontMenuItem('Awami Nastaliq', onFontAwamiNastaliq, 'AwamiNastaliq')
  const gentiumPlus = FontMenuItem('Gentium Plus', onFontGentiumPlus, 'GentiumPlus')
  const harmattan = FontMenuItem('Harmattan', onFontHarmattan, 'Harmattan')
  const khmerBusra = FontMenuItem('Khmer Busra', onFontKhmerBusra, 'KhmerBusra')
  const khmerMondulkiri = FontMenuItem('Khmer Mondulkiri', onFontKhmerMondulkiri, 'KhmerMondulkiri')
  const lateefGR = FontMenuItem('LateefGR', onFontLateefGR, 'LateefGR')
  const mingzat = FontMenuItem('Mingzat', onFontMingzat, 'Mingzat')
  const narnoor = FontMenuItem('Narnoor', onFontNarnoor, 'Narnoor')
  const padauk = FontMenuItem('Padauk', onFontPadauk, 'Padauk')
  const scheherazadeNew = FontMenuItem('Scheherazade New', onFontScheherazadeNew, 'ScheherazadeNew')
  const shimenkan = FontMenuItem('Shimenkan', onFontShimenkan, 'Shimenkan')
  const sophiaNubian = FontMenuItem('Sophia Nubian', onFontSophiaNubian, 'SophiaNubian')
  const tagmukay = FontMenuItem('Tagmukay', onFontTagmukay, 'Tagmukay')
  const taiHeritagePro = FontMenuItem('Tai Heritage Pro', onFontTaiHeritagePro, 'TaiHeritagePro')

  /** Windows 11 and MacOS system fonts if locally installed */
  const AharoniBold = FontMenuItem('Aharoni Bold', onFontAharoniBold, 'AharoniBold')
  const AlBayan = FontMenuItem('Al Bayan', onFontAlBayan, 'AlBayan')
  const AlNile = FontMenuItem('Al Nile', onFontAlNile, 'AlNile')
  const AlTarikh = FontMenuItem('Al Tarikh', onFontAlTarikh, 'AlTarikh')
  const Aldhabi = FontMenuItem('Aldhabi', onFontAldhabi, 'Aldhabi')
  const AmericanTypewriter = FontMenuItem('American Typewriter', onFontAmericanTypewriter, 'AmericanTypewriter')
  const AndaleMono = FontMenuItem('Andalé Mono', onFontAndaleMono, 'AndaleMono')
  const Andalus = FontMenuItem('Andalus', onFontAndalus, 'Andalus')
  const AngsanaNew = FontMenuItem('Angsana New', onFontAngsanaNew, 'AngsanaNew')
  const AngsanaUPC = FontMenuItem('AngsanaUPC', onFontAngsanaUPC, 'AngsanaUPC')
  const Aparajita = FontMenuItem('Aparajita', onFontAparajita, 'Aparajita')
  const AppleBraille = FontMenuItem('Apple Braille', onFontAppleBraille, 'AppleBraille')
  const AppleCasual = FontMenuItem('Apple Casual', onFontAppleCasual, 'AppleCasual')
  const AppleChancery = FontMenuItem('Apple Chancery', onFontAppleChancery, 'AppleChancery')
  const AppleGaramond = FontMenuItem('Apple Garamond', onFontAppleGaramond, 'AppleGaramond')
  const AppleGothic = FontMenuItem('Apple Gothic', onFontAppleGothic, 'AppleGothic')
  const AppleLiGothic = FontMenuItem('Apple LiGothic', onFontAppleLiGothic, 'AppleLiGothic')
  const AppleLiSung = FontMenuItem('Apple LiSung', onFontAppleLiSung, 'AppleLiSung')
  const AppleMyungjo = FontMenuItem('Apple Myungjo', onFontAppleMyungjo, 'AppleMyungjo')
  const AppleSDGothicNeoReg = FontMenuItem('Apple SD Gothic Neo Reg', onFontAppleSDGothicNeoReg, 'AppleSDGothicNeoReg')
  const AquaKana = FontMenuItem('AquaKana', onFontAquaKana, 'AquaKana')
  const ArabicTypesetting = FontMenuItem('Arabic Typesetting', onFontArabicTypesetting, 'ArabicTypesetting')
  const Arial = FontMenuItem('Arial', onFontArial, 'Arial')
  const ArialBlack = FontMenuItem('Arial Black', onFontArialBlack, 'ArialBlack')
  const ArialHebrew = FontMenuItem('Arial Hebrew', onFontArialHebrew, 'ArialHebrew')
  const ArialNova = FontMenuItem('Arial Nova', onFontArialNova, 'ArialNova')
  const AvenirBook = FontMenuItem('Avenir Book', onFontAvenirBook, 'AvenirBook')
  const AvenirNext = FontMenuItem('Avenir Next', onFontAvenirNext, 'AvenirNext')
  const AvenirRoman = FontMenuItem('Avenir Roman', onFontAvenirRoman, 'AvenirRoman')
  const Ayuthaya = FontMenuItem('Ayuthaya', onFontAyuthaya, 'Ayuthaya')
  const Baghdad = FontMenuItem('Baghdad', onFontBaghdad, 'Baghdad')
  const Bahnschrift = FontMenuItem('Bahnschrift', onFontBahnschrift, 'Bahnschrift')
  const BanglaMN = FontMenuItem('Bangla MN', onFontBanglaMN, 'BanglaMN')
  const BanglaSangamMN = FontMenuItem('Bangla Sangam MN', onFontBanglaSangamMN, 'BanglaSangamMN')
  const Baskerville = FontMenuItem('Baskerville', onFontBaskerville, 'Baskerville')
  const Batang = FontMenuItem('Batang', onFontBatang, 'Batang')
  const Beijing = FontMenuItem('Beijing', onFontBeijing, 'Beijing')
  const Beirut = FontMenuItem('Beirut', onFontBeirut, 'Beirut')
  const BiauKai = FontMenuItem('BiauKai', onFontBiauKai, 'BiauKai')
  const BigCaslon = FontMenuItem('Big Caslon', onFontBigCaslon, 'BigCaslon')
  const BIZUDGothic = FontMenuItem('BIZ UDGothic', onFontBIZUDGothic, 'BIZUDGothic')
  const BIZUDMinchoMedium = FontMenuItem('BIZ UDMincho Medium', onFontBIZUDMinchoMedium, 'BIZUDMinchoMedium')
  const Bodoni72Book = FontMenuItem('Bodoni 72 Book', onFontBodoni72Book, 'Bodoni72Book')
  const BrowalliaNew = FontMenuItem('Browallia New', onFontBrowalliaNew, 'BrowalliaNew')
  const BrowalliaUPC = FontMenuItem('BrowalliaUPC', onFontBrowalliaUPC, 'BrowalliaUPC')
  const BrushScript = FontMenuItem('Brush Script', onFontBrushScript, 'BrushScript')
  const Calibri = FontMenuItem('Calibri', onFontCalibri, 'Calibri')
  const Cambria = FontMenuItem('Cambria', onFontCambria, 'Cambria')
  const Candara = FontMenuItem('Candara', onFontCandara, 'Candara')
  const Chalkboard = FontMenuItem('Chalkboard', onFontChalkboard, 'Chalkboard')
  const ChalkboardSE = FontMenuItem('Chalkboard SE', onFontChalkboardSE, 'ChalkboardSE')
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
  const DecoTypeNaskh = FontMenuItem('DecoType Naskh', onFontDecoTypeNaskh, 'DecoTypeNaskh')
  const DengXian = FontMenuItem('DengXian', onFontDengXian, 'DengXian')
  const Devanagari = FontMenuItem('Devanagari', onFontDevanagari, 'Devanagari')
  const DevanagariMT = FontMenuItem('Devanagari MT', onFontDevanagariMT, 'DevanagariMT')
  const DevanagariSangamMN = FontMenuItem('Devanagari Sangam MN', onFontDevanagariSangamMN, 'DevanagariSangamMN')
  const DFKaiSB = FontMenuItem('DFKai-SB', onFontDFKaiSB, 'DFKaiSB')
  const Didot = FontMenuItem('Didot', onFontDidot, 'Didot')
  const DilleniaUPC = FontMenuItem('DilleniaUPC', onFontDilleniaUPC, 'DilleniaUPC')
  const DiwanKufi = FontMenuItem('Diwan Kufi', onFontDiwanKufi, 'DiwanKufi')
  const DiwanThuluth = FontMenuItem('Diwan Thuluth', onFontDiwanThuluth, 'DiwanThuluth')
  const DokChampa = FontMenuItem('DokChampa', onFontDokChampa, 'DokChampa')
  const Dotum = FontMenuItem('Dotum', onFontDotum, 'Dotum')
  const Ebrima = FontMenuItem('Ebrima', onFontEbrima, 'Ebrima')
  const EstrangeloEdessa = FontMenuItem('Estrangelo Edessa', onFontEstrangeloEdessa, 'EstrangeloEdessa')
  const EucrosiaUPC = FontMenuItem('EucrosiaUPC', onFontEucrosiaUPC, 'EucrosiaUPC')
  const Euphemia = FontMenuItem('Euphemia', onFontEuphemia, 'Euphemia')
  const EuphemiaUCAS = FontMenuItem('Euphemia UCAS', onFontEuphemiaUCAS, 'EuphemiaUCAS')
  const FangSong = FontMenuItem('FangSong', onFontFangSong, 'FangSong')
  const Farah = FontMenuItem('Farah', onFontFarah, 'Farah')
  const Farisi = FontMenuItem('Farisi', onFontFarisi, 'Farisi')
  const FranklinGothicMedium = FontMenuItem('Franklin Gothic Medium', onFontFranklinGothicMedium, 'FranklinGothicMedium')
  const FrankRuehl = FontMenuItem('FrankRuehl', onFontFrankRuehl, 'FrankRuehl')
  const FreesiaUPC = FontMenuItem('FreesiaUPC', onFontFreesiaUPC, 'FreesiaUPC')
  const Futura = FontMenuItem('Futura', onFontFutura, 'Futura')
  const Gabriola = FontMenuItem('Gabriola', onFontGabriola, 'Gabriola')
  const Gadget = FontMenuItem('Gadget', onFontGadget, 'Gadget')
  const Gadugi = FontMenuItem('Gadugi', onFontGadugi, 'Gadugi')
  const Galvji = FontMenuItem('Galvji', onFontGalvji, 'Galvji')
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
  const Gujarati = FontMenuItem('Gujarati', onFontGujarati, 'Gujarati')
  const GujaratiMT = FontMenuItem('Gujarati MT', onFontGujaratiMT, 'GujaratiMT')
  const GujaratiSangamMN = FontMenuItem('Gujarati Sangam MN', onFontGujaratiSangamMN, 'GujaratiSangamMN')
  const Gulim = FontMenuItem('Gulim', onFontGulim, 'Gulim')
  const GungSeoche = FontMenuItem('Gung Seoche', onFontGungSeoche, 'GungSeoche')
  const Gungsuh = FontMenuItem('Gungsuh', onFontGungsuh, 'Gungsuh')
  const Gurmukhi = FontMenuItem('Gurmukhi', onFontGurmukhi, 'Gurmukhi')
  const GurmukhiMN = FontMenuItem('Gurmukhi MN', onFontGurmukhiMN, 'GurmukhiMN')
  const GurmukhiMT = FontMenuItem('Gurmukhi MT', onFontGurmukhiMT, 'GurmukhiMT')
  const GurmukhiSangamMN = FontMenuItem('Gurmukhi Sangam MN', onFontGurmukhiSangamMN, 'GurmukhiSangamMN')
  const Hangangche = FontMenuItem('Hangangche', onFontHangangche, 'Hangangche')
  const HeadlineA = FontMenuItem('HeadlineA', onFontHeadlineA, 'HeadlineA')
  const Hei = FontMenuItem('Hei', onFontHei, 'Hei')
  const Helvetica = FontMenuItem('Helvetica', onFontHelvetica, 'Helvetica')
  const HelveticaCY = FontMenuItem('Helvetica CY', onFontHelveticaCY, 'HelveticaCY')
  const HelveticaNeue = FontMenuItem('Helvetica Neue', onFontHelveticaNeue, 'HelveticaNeue')
  const Herculanum = FontMenuItem('Herculanum', onFontHerculanum, 'Herculanum')
  const HiraginoKakuGothicPro = FontMenuItem('Hiragino Kaku Gothic Pro', onFontHiraginoKakuGothicPro, 'HiraginoKakuGothicPro')
  const HiraginoMaruGothicPro = FontMenuItem('Hiragino Maru Gothic Pro', onFontHiraginoMaruGothicPro, 'HiraginoMaruGothicPro')
  const HiraginoMinchoPro = FontMenuItem('Hiragino Mincho Pro', onFontHiraginoMinchoPro, 'HiraginoMinchoPro')
  const HiraginoSansGBW3 = FontMenuItem('Hiragino Sans GB W3', onFontHiraginoSansGBW3, 'HiraginoSansGBW3')
  const HiraginoSansGBW6 = FontMenuItem('Hiragino Sans GB W6', onFontHiraginoSansGBW6, 'HiraginoSansGBW6')
  const HiraginoSansW0 = FontMenuItem('Hiragino Sans W0', onFontHiraginoSansW0, 'HiraginoSansW0')
  const HiraginoSansW1 = FontMenuItem('Hiragino Sans W1', onFontHiraginoSansW1, 'HiraginoSansW1')
  const HiraginoSansW2 = FontMenuItem('Hiragino Sans W2', onFontHiraginoSansW2, 'HiraginoSansW2')
  const HiraginoSansW3 = FontMenuItem('Hiragino Sans W3', onFontHiraginoSansW3, 'HiraginoSansW3')
  const HiraginoSansW4 = FontMenuItem('Hiragino Sans W4', onFontHiraginoSansW4, 'HiraginoSansW4')
  const HiraginoSansW5 = FontMenuItem('Hiragino Sans W5', onFontHiraginoSansW5, 'HiraginoSansW5')
  const HiraginoSansW6 = FontMenuItem('Hiragino Sans W6', onFontHiraginoSansW6, 'HiraginoSansW6')
  const HiraginoSansW7 = FontMenuItem('Hiragino Sans W7', onFontHiraginoSansW7, 'HiraginoSansW7')
  const HiraginoSansW8 = FontMenuItem('Hiragino Sans W8', onFontHiraginoSansW8, 'HiraginoSansW8')
  const HiraginoSansW9 = FontMenuItem('Hiragino Sans W9', onFontHiraginoSansW9, 'HiraginoSansW9')
  const HoeflerText = FontMenuItem('Hoefler Text', onFontHoeflerText, 'HoeflerText')
  const Impact = FontMenuItem('Impact', onFontImpact, 'Impact')
  const InaiMathi = FontMenuItem('Inai Mathi', onFontInaiMathi, 'InaiMathi')
  const InkFree = FontMenuItem('Ink Free', onFontInkFree, 'InkFree')
  const IrisUPC = FontMenuItem('IrisUPC', onFontIrisUPC, 'IrisUPC')
  const IskoolaPota = FontMenuItem('Iskoola Pota', onFontIskoolaPota, 'IskoolaPota')
  const ITFDevanagariBook = FontMenuItem('ITF Devanagari Book', onFontITFDevanagariBook, 'ITFDevanagariBook')
  const ITFDevanagariMarathiBk = FontMenuItem('ITF Devanagari MarathiBk', onFontITFDevanagariMarathiBk, 'ITFDevanagariMarathiBk')
  const JasmineUPC = FontMenuItem('JasmineUPC', onFontJasmineUPC, 'JasmineUPC')
  const JavaneseText = FontMenuItem('Javanese Text', onFontJavaneseText, 'JavaneseText')
  const JungGothic = FontMenuItem('Jung Gothic', onFontJungGothic, 'JungGothic')
  const Kai = FontMenuItem('Kai', onFontKai, 'Kai')
  const Kailasa = FontMenuItem('Kailasa', onFontKailasa, 'Kailasa')
  const KaiTi = FontMenuItem('KaiTi', onFontKaiTi, 'KaiTi')
  const Kalinga = FontMenuItem('Kalinga', onFontKalinga, 'Kalinga')
  const KannadaMN = FontMenuItem('Kannada MN', onFontKannadaMN, 'KannadaMN')
  const KannadaSangamMN = FontMenuItem('Kannada Sangam MN', onFontKannadaSangamMN, 'KannadaSangamMN')
  const Kartika = FontMenuItem('Kartika', onFontKartika, 'Kartika')
  const KefaBold = FontMenuItem('Kefa Bold', onFontKefaBold, 'KefaBold')
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
  const Krungthep = FontMenuItem('Krungthep', onFontKrungthep, 'Krungthep')
  const KuenstlerScript = FontMenuItem('Kuenstler Script', onFontKuenstlerScript, 'KuenstlerScript')
  const KufiStandardGK = FontMenuItem('KufiStandard GK', onFontKufiStandardGK, 'KufiStandardGK')
  const LaoMN = FontMenuItem('Lao MN', onFontLaoMN, 'LaoMN')
  const LaoSangamMN = FontMenuItem('Lao Sangam MN', onFontLaoSangamMN, 'LaoSangamMN')
  const LaoUI = FontMenuItem('Lao UI', onFontLaoUI, 'LaoUI')
  const LastResort = FontMenuItem('LastResort', onFontLastResort, 'LastResort')
  const Latha = FontMenuItem('Latha', onFontLatha, 'Latha')
  const Leelawadee = FontMenuItem('Leelawadee', onFontLeelawadee, 'Leelawadee')
  const LeelawadeeUI = FontMenuItem('Leelawadee UI', onFontLeelawadeeUI, 'LeelawadeeUI')
  const LevenimMT = FontMenuItem('Levenim MT', onFontLevenimMT, 'LevenimMT')
  const LiHeiPro = FontMenuItem('LiHei Pro', onFontLiHeiPro, 'LiHeiPro')
  const LilyUPC = FontMenuItem('LilyUPC', onFontLilyUPC, 'LilyUPC')
  const LiSongPro = FontMenuItem('LiSong Pro', onFontLiSongPro, 'LiSongPro')
  const LucidaConsole = FontMenuItem('Lucida Console', onFontLucidaConsole, 'LucidaConsole')
  const LucidaGrande = FontMenuItem('Lucida Grande', onFontLucidaGrande, 'LucidaGrande')
  const LucidaSans = FontMenuItem('Lucida Sans', onFontLucidaSans, 'LucidaSans')
  const LucidaSansUnicode = FontMenuItem('Lucida Sans Unicode', onFontLucidaSansUnicode, 'LucidaSansUnicode')
  const Luminari = FontMenuItem('Luminari', onFontLuminari, 'Luminari')
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
  const MishafiGold = FontMenuItem('Mishafi Gold', onFontMishafiGold, 'MishafiGold')
  const Mishafi = FontMenuItem('Mishafi', onFontMishafi, 'Mishafi')
  const Monaco = FontMenuItem('Monaco', onFontMonaco, 'Monaco')
  const MonacoCY = FontMenuItem('Monaco CY', onFontMonacoCY, 'MonacoCY')
  const MongolianBaiti = FontMenuItem('Mongolian Baiti', onFontMongolianBaiti, 'MongolianBaiti')
  const MoolBoran = FontMenuItem('MoolBoran', onFontMoolBoran, 'MoolBoran')
  const MSGothic = FontMenuItem('MS Gothic', onFontMSGothic, 'MSGothic')
  const MSMincho = FontMenuItem('MS Mincho', onFontMSMincho, 'MSMincho')
  const Mshtakan = FontMenuItem('Mshtakan', onFontMshtakan, 'Mshtakan')
  const MuktaMahee = FontMenuItem('MuktaMahee', onFontMuktaMahee, 'MuktaMahee')
  const Muna = FontMenuItem('Muna', onFontMuna, 'Muna')
  const MVBoli = FontMenuItem('MV Boli', onFontMVBoli, 'MVBoli')
  const MyanmarMN = FontMenuItem('Myanmar MN', onFontMyanmarMN, 'MyanmarMN')
  const MyanmarSangamMN = FontMenuItem('Myanmar Sangam MN', onFontMyanmarSangamMN, 'MyanmarSangamMN')
  const MyanmarText = FontMenuItem('Myanmar Text', onFontMyanmarText, 'MyanmarText')
  const Nadeem = FontMenuItem('Nadeem', onFontNadeem, 'Nadeem')
  const Narkisim = FontMenuItem('Narkisim', onFontNarkisim, 'Narkisim')
  const NeueHaasGrotskTxtPro = FontMenuItem('Neue Haas Grotsk Txt Pro', onFontNeueHaasGrotskTxtPro, 'NeueHaasGrotskTxtPro')
  const NewPeninim = FontMenuItem('New Peninim', onFontNewPeninim, 'NewPeninim')
  const NewPeninimMT = FontMenuItem('New Peninim MT', onFontNewPeninimMT, 'NewPeninimMT')
  const NewYork = FontMenuItem('New York', onFontNewYork, 'NewYork')
  const NirmalaUI = FontMenuItem('Nirmala UI', onFontNirmalaUI, 'NirmalaUI')
  const NISCGB18030 = FontMenuItem('NISC GB18030', onFontNISCGB18030, 'NISCGB18030')
  const NotoNastaliqUrdu = FontMenuItem('Noto Nastaliq Urdu', onFontNotoNastaliqUrdu, 'NotoNastaliqUrdu')
  const NotoSansJavanese = FontMenuItem('Noto Sans Javanese', onFontNotoSansJavanese, 'NotoSansJavanese')
  const NotoSansKannada = FontMenuItem('Noto Sans Kannada', onFontNotoSansKannada, 'NotoSansKannada')
  const NotoSansMyanmar = FontMenuItem('Noto Sans Myanmar', onFontNotoSansMyanmar, 'NotoSansMyanmar')
  const NotoSansOriya = FontMenuItem('Noto Sans Oriya', onFontNotoSansOriya, 'NotoSansOriya')
  const NotoSerifMyanmar = FontMenuItem('Noto Serif Myanmar', onFontNotoSerifMyanmar, 'NotoSerifMyanmar')
  const Nyala = FontMenuItem('Nyala', onFontNyala, 'Nyala')
  const Optima = FontMenuItem('Optima', onFontOptima, 'Optima')
  const OriyaMN = FontMenuItem('Oriya MN', onFontOriyaMN, 'OriyaMN')
  const OriyaSangamMN = FontMenuItem('Oriya Sangam MN', onFontOriyaSangamMN, 'OriyaSangamMN')
  const Osaka = FontMenuItem('Osaka', onFontOsaka, 'Osaka')
  const Palatino = FontMenuItem('Palatino', onFontPalatino, 'Palatino')
  const PalatinoLinotype = FontMenuItem('Palatino Linotype', onFontPalatinoLinotype, 'PalatinoLinotype')
  const Papyrus = FontMenuItem('Papyrus', onFontPapyrus, 'Papyrus')
  const PartyLETPlain = FontMenuItem('Party LET Plain', onFontPartyLETPlain, 'PartyLETPlain')
  const PCMyungjo = FontMenuItem('PC Myungjo', onFontPCMyungjo, 'PCMyungjo')
  const Pilgiche = FontMenuItem('Pilgiche', onFontPilgiche, 'Pilgiche')
  const PingFangHK = FontMenuItem('PingFang HK', onFontPingFangHK, 'PingFangHK')
  const PingFangSC = FontMenuItem('PingFang SC', onFontPingFangSC, 'PingFangSC')
  const PingFangTC = FontMenuItem('PingFang TC', onFontPingFangTC, 'PingFangTC')
  const PlantagenetCherokee = FontMenuItem('Plantagenet Cherokee', onFontPlantagenetCherokee, 'PlantagenetCherokee')
  const PTMono = FontMenuItem('PT Mono', onFontPTMono, 'PTMono')
  const PTSans = FontMenuItem('PT Sans', onFontPTSans, 'PTSans')
  const PTSerif = FontMenuItem('PT Serif', onFontPTSerif, 'PTSerif')
  const Raanana = FontMenuItem('Raanana', onFontRaanana, 'Raanana')
  const Raavi = FontMenuItem('Raavi', onFontRaavi, 'Raavi')
  const Rockwell = FontMenuItem('Rockwell', onFontRockwell, 'Rockwell')
  const RockwellNova = FontMenuItem('Rockwell Nova', onFontRockwellNova, 'RockwellNova')
  const Rod = FontMenuItem('Rod', onFontRod, 'Rod')
  const SakkalMajalla = FontMenuItem('Sakkal Majalla', onFontSakkalMajalla, 'SakkalMajalla')
  const Sana = FontMenuItem('Sana', onFontSana, 'Sana')
  const Sand = FontMenuItem('Sand', onFontSand, 'Sand')
  const SanskritText = FontMenuItem('Sanskrit Text', onFontSanskritText, 'SanskritText')
  const Sathu = FontMenuItem('Sathu', onFontSathu, 'Sathu')
  const SegoePrint = FontMenuItem('Segoe Print', onFontSegoePrint, 'SegoePrint')
  const SegoeScript = FontMenuItem('Segoe Script', onFontSegoeScript, 'SegoeScript')
  const SegoeUI = FontMenuItem('Segoe UI', onFontSegoeUI, 'SegoeUI')
  const Seoul = FontMenuItem('Seoul', onFontSeoul, 'Seoul')
  const ShinMyungjoNeue = FontMenuItem('Shin Myungjo Neue', onFontShinMyungjoNeue, 'ShinMyungjoNeue')
  const ShonarBangla = FontMenuItem('Shonar Bangla', onFontShonarBangla, 'ShonarBangla')
  const ShreeDevanagari714 = FontMenuItem('Shree Devanagari 714', onFontShreeDevanagari714, 'ShreeDevanagari714')
  const Shruti = FontMenuItem('Shruti', onFontShruti, 'Shruti')
  const SignPainterHouseScript = FontMenuItem('SignPainter-HouseScript', onFontSignPainterHouseScript, 'SignPainterHouseScript')
  const Silom = FontMenuItem('Silom', onFontSilom, 'Silom')
  const SimHei = FontMenuItem('SimHei', onFontSimHei, 'SimHei')
  const SimplifiedArabic = FontMenuItem('Simplified Arabic', onFontSimplifiedArabic, 'SimplifiedArabic')
  const SimSun = FontMenuItem('SimSun', onFontSimSun, 'SimSun')
  const SinhalaMN = FontMenuItem('Sinhala MN', onFontSinhalaMN, 'SinhalaMN')
  const SinhalaSangamMN = FontMenuItem('Sinhala Sangam MN', onFontSinhalaSangamMN, 'SinhalaSangamMN')
  const SitkaText = FontMenuItem('Sitka Text', onFontSitkaText, 'SitkaText')
  const Skia = FontMenuItem('Skia', onFontSkia, 'Skia')
  const SnellRoundhand = FontMenuItem('Snell Roundhand', onFontSnellRoundhand, 'SnellRoundhand')
  const SnellRoundhandBlack = FontMenuItem('Snell Roundhand Black', onFontSnellRoundhandBlack, 'SnellRoundhandBlack')
  const SongtiSC = FontMenuItem('Songti SC', onFontSongtiSC, 'SongtiSC')
  const SongtiTC = FontMenuItem('Songti TC', onFontSongtiTC, 'SongtiTC')
  const STFangSong = FontMenuItem('ST FangSong', onFontSTFangSong, 'STFangSong')
  const STFangSong2 = FontMenuItem('ST FangSong 2', onFontSTFangSong2, 'STFangSong2')
  const STHeiti = FontMenuItem('ST Heiti', onFontSTHeiti, 'STHeiti')
  const STKaiti = FontMenuItem('ST Kaiti', onFontSTKaiti, 'STKaiti')
  const STSong = FontMenuItem('ST Song', onFontSTSong, 'STSong')
  const STIXGeneralRegular = FontMenuItem('STIXGeneral-Regular', onFontSTIXGeneralRegular, 'STIXGeneralRegular')
  const SukhumvitSetText = FontMenuItem('Sukhumvit Set Text', onFontSukhumvitSetText, 'SukhumvitSetText')
  const Sylfaen = FontMenuItem('Sylfaen', onFontSylfaen, 'Sylfaen')
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
  const TraditionalArabic = FontMenuItem('Traditional Arabic', onFontTraditionalArabic, 'TraditionalArabic')
  const Trattatello = FontMenuItem('Trattatello', onFontTrattatello, 'Trattatello')
  const TrebuchetMS = FontMenuItem('Trebuchet MS', onFontTrebuchetMS, 'TrebuchetMS')
  const Tunga = FontMenuItem('Tunga', onFontTunga, 'Tunga')
  const UDDigiKyokashoNR = FontMenuItem('UD Digi Kyokasho N-R', onFontUDDigiKyokashoNR, 'UDDigiKyokashoNR')
  const UrduTypesetting = FontMenuItem('Urdu Typesetting', onFontUrduTypesetting, 'UrduTypesetting')
  const Utsaah = FontMenuItem('Utsaah', onFontUtsaah, 'Utsaah')
  const Vani = FontMenuItem('Vani', onFontVani, 'Vani')
  const Verdana = FontMenuItem('Verdana', onFontVerdana, 'Verdana')
  const VerdanaPro = FontMenuItem('Verdana Pro', onFontVerdanaPro, 'VerdanaPro')
  const Vijaya = FontMenuItem('Vijaya', onFontVijaya, 'Vijaya')
  const Vrinda = FontMenuItem('Vrinda', onFontVrinda, 'Vrinda')
  const Waseem = FontMenuItem('Waseem', onFontWaseem, 'Waseem')
  const YuGothic = FontMenuItem('Yu Gothic', onFontYuGothic, 'YuGothic')
  const YuMincho = FontMenuItem('Yu Mincho', onFontYuMincho, 'YuMincho')
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
             <span className="text-gray-900 group menuitem"><b>Graphite-enabled:</b></span>
              {aktabRW}
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
              <span className="text-gray-900 group menuitem"><b>Graphite-enabled (local):</b></span>
              {aktab}
              {alkalami}
              {alkalamiLight}
              {andika}
              {awamiNastaliq}
              {gentiumPlus}
              {harmattan}
              {khmerBusra}
              {khmerMondulkiri}
              {lateefGR}
              {mingzat}
              {narnoor}
              {padauk}
              {scheherazadeNew}
              {shimenkan}
              {sophiaNubian}
              {tagmukay}
              {taiHeritagePro}
            </div>}
            <div className="px-1 py-1">
              <span className={'text-gray-900 group menuitem'}><b>If Locally Installed:</b></span>
              {AharoniBold}
              {AlBayan}
              {AlNile}
              {AlTarikh}
              {Aldhabi}
              {AmericanTypewriter}
              {AndaleMono}
              {Andalus}
              {AngsanaNew}
              {AngsanaUPC}
              {Aparajita}
              {AppleBraille}
              {AppleCasual}
              {AppleChancery}
              {AppleGaramond}
              {AppleGothic}
              {AppleLiGothic}
              {AppleLiSung}
              {AppleMyungjo}
              {AppleSDGothicNeoReg}
              {AquaKana}
              {ArabicTypesetting}
              {Arial}
              {ArialBlack}
              {ArialHebrew}
              {ArialNova}
              {AvenirBook}
              {AvenirNext}
              {AvenirRoman}
              {Ayuthaya}
              {Baghdad}
              {Bahnschrift}
              {BanglaMN}
              {BanglaSangamMN}
              {Baskerville}
              {Batang}
              {Beijing}
              {Beirut}
              {BiauKai}
              {BigCaslon}
              {BIZUDGothic}
              {BIZUDMinchoMedium}
              {Bodoni72Book}
              {BrowalliaNew}
              {BrowalliaUPC}
              {BrushScript}
              {Calibri}
              {Cambria}
              {Candara}
              {Chalkboard}
              {ChalkboardSE}
              {Chalkduster}
              {Charcoal}
              {CharcoalCY}
              {CharterRoman}
              {Chicago}
              {Cochin}
              {ComicSans}
              {ComicSansMS}
              {Consolas}
              {Constantia}
              {Cooper}
              {Copperplate}
              {Corbel}
              {CordiaNew}
              {CordiaUPC}
              {CorsivaHebrew}
              {Courier}
              {CourierNew}
              {Damascus}
              {DaunPenh}
              {David}
              {DecoTypeNaskh}
              {DengXian}
              {Devanagari}
              {DevanagariMT}
              {DevanagariSangamMN}
              {DFKaiSB}
              {Didot}
              {DilleniaUPC}
              {DiwanKufi}
              {DiwanThuluth}
              {DokChampa}
              {Dotum}
              {Ebrima}
              {EstrangeloEdessa}
              {EucrosiaUPC}
              {Euphemia}
              {EuphemiaUCAS}
              {FangSong}
              {Farah}
              {Farisi}
              {FranklinGothicMedium}
              {FrankRuehl}
              {FreesiaUPC}
              {Futura}
              {Gabriola}
              {Gadget}
              {Gadugi}
              {Galvji}
              {Gautami}
              {GB18030Bitmap}
              {GeezaPro}
              {Geezah}
              {Geneva}
              {GenevaCY}
              {Georgia}
              {GeorgiaPro}
              {GillSans}
              {GillSansNova}
              {Gisha}
              {Gujarati}
              {GujaratiMT}
              {GujaratiSangamMN}
              {Gulim}
              {GungSeoche}
              {Gungsuh}
              {Gurmukhi}
              {GurmukhiMN}
              {GurmukhiMT}
              {GurmukhiSangamMN}
              {Hangangche}
              {HeadlineA}
              {Hei}
              {Helvetica}
              {HelveticaCY}
              {HelveticaNeue}
              {Herculanum}
              {HiraginoKakuGothicPro}
              {HiraginoMaruGothicPro}
              {HiraginoMinchoPro}
              {HiraginoSansGBW3}
              {HiraginoSansGBW6}
              {HiraginoSansW0}
              {HiraginoSansW1}
              {HiraginoSansW2}
              {HiraginoSansW3}
              {HiraginoSansW4}
              {HiraginoSansW5}
              {HiraginoSansW6}
              {HiraginoSansW7}
              {HiraginoSansW8}
              {HiraginoSansW9}
              {HoeflerText}
              {Impact}
              {InaiMathi}
              {InkFree}
              {IrisUPC}
              {IskoolaPota}
              {ITFDevanagariBook}
              {ITFDevanagariMarathiBk}
              {JasmineUPC}
              {JavaneseText}
              {JungGothic}
              {Kai}
              {Kailasa}
              {KaiTi}
              {Kalinga}
              {KannadaMN}
              {KannadaSangamMN}
              {Kartika}
              {KefaBold}
              {Kefa}
              {Keyboard}
              {KhmerMN}
              {KhmerSangamMN}
              {KhmerUI}
              {KodchiangUPC}
              {KohinoorBangla}
              {KohinoorDevanagari}
              {KohinoorTelugu}
              {Kokila}
              {Kokonor}
              {Krungthep}
              {KuenstlerScript}
              {KufiStandardGK}
              {LaoMN}
              {LaoSangamMN}
              {LaoUI}
              {LastResort}
              {Latha}
              {Leelawadee}
              {LeelawadeeUI}
              {LevenimMT}
              {LiHeiPro}
              {LilyUPC}
              {LiSongPro}
              {LucidaConsole}
              {LucidaGrande}
              {LucidaSans}
              {LucidaSansUnicode}
              {Luminari}
              {MalayalamMN}
              {MalayalamSangamMN}
              {MalgunGothic}
              {Mangal}
              {MarkerFelt}
              {Marlett}
              {Meiryo}
              {Menlo}
              {MicrosoftHimalaya}
              {MicrosoftJhengHei}
              {MicrosoftNewTaiLue}
              {MicrosoftPhagsPa}
              {MicrosoftSansSerif}
              {MicrosoftTaiLe}
              {MicrosoftUighur}
              {MicrosoftYaHei}
              {MicrosoftYiBaiti}
              {MingLiU}
              {MingLiUExtB}
              {Miriam}
              {MishafiGold}
              {Mishafi}
              {Monaco}
              {MonacoCY}
              {MongolianBaiti}
              {MoolBoran}
              {MSGothic}
              {MSMincho}
              {Mshtakan}
              {MuktaMahee}
              {Muna}
              {MVBoli}
              {MyanmarMN}
              {MyanmarSangamMN}
              {MyanmarText}
              {Nadeem}
              {Narkisim}
              {NeueHaasGrotskTxtPro}
              {NewPeninim}
              {NewPeninimMT}
              {NewYork}
              {NirmalaUI}
              {NISCGB18030}
              {NotoNastaliqUrdu}
              {NotoSansJavanese}
              {NotoSansKannada}
              {NotoSansMyanmar}
              {NotoSansOriya}
              {NotoSerifMyanmar}
              {Nyala}
              {Optima}
              {OriyaMN}
              {OriyaSangamMN}
              {Osaka}
              {Palatino}
              {PalatinoLinotype}
              {Papyrus}
              {PartyLETPlain}
              {PCMyungjo}
              {Pilgiche}
              {PingFangHK}
              {PingFangSC}
              {PingFangTC}
              {PlantagenetCherokee}
              {PTMono}
              {PTSans}
              {PTSerif}
              {Raanana}
              {Raavi}
              {Rockwell}
              {RockwellNova}
              {Rod}
              {SakkalMajalla}
              {Sana}
              {Sand}
              {SanskritText}
              {Sathu}
              {SegoePrint}
              {SegoeScript}
              {SegoeUI}
              {Seoul}
              {ShinMyungjoNeue}
              {ShonarBangla}
              {ShreeDevanagari714}
              {Shruti}
              {SignPainterHouseScript}
              {Silom}
              {SimHei}
              {SimplifiedArabic}
              {SimSun}
              {SinhalaMN}
              {SinhalaSangamMN}
              {SitkaText}
              {Skia}
              {SnellRoundhand}
              {SnellRoundhandBlack}
              {SongtiSC}
              {SongtiTC}
              {STFangSong}
              {STFangSong2}
              {STHeiti}
              {STKaiti}
              {STSong}
              {STIXGeneralRegular}
              {SukhumvitSetText}
              {Sylfaen}
              {TaeGraphic}
              {Tahoma}
              {Taipei}
              {TamilMN}
              {TamilSangamMN}
              {Techno}
              {TeluguMN}
              {TeluguSangamMN}
              {Textile}
              {Thonburi}
              {Times}
              {TimesCY}
              {TimesNewRoman}
              {TimesRoman}
              {TraditionalArabic}
              {Trattatello}
              {TrebuchetMS}
              {Tunga}
              {UDDigiKyokashoNR}
              {UrduTypesetting}
              {Utsaah}
              {Vani}
              {Verdana}
              {VerdanaPro}
              {Vijaya}
              {Vrinda}
              {Waseem}
              {YuGothic}
              {YuMincho}
              {ZapfChancery}
              {Zapfino}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
  )
}