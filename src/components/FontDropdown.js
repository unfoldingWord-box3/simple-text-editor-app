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

  /** Windows 11 system fonts if locally installed */
  const onFontAharoniBold = () => { setFont('AharoniBold'); };
  const onFontAldhabi = () => { setFont('Aldhabi'); };
  const onFontAndalus = () => { setFont('Andalus'); };
  const onFontAngsanaNew = () => { setFont('AngsanaNew'); };
  const onFontAngsanaUPC = () => { setFont('AngsanaUPC'); };
  const onFontAparajita = () => { setFont('Aparajita'); };
  const onFontArabicTypesetting = () => { setFont('ArabicTypesetting'); };
  const onFontArial = () => { setFont('Arial'); };
  const onFontArialBlack = () => { setFont('ArialBlack'); };
  const onFontArialNovaLight = () => { setFont('ArialNovaLight'); };
  const onFontBahnschrift = () => { setFont('Bahnschrift'); };
  const onFontBatang = () => { setFont('Batang'); };
  const onFontBIZUDGothic = () => { setFont('BIZUDGothic'); };
  const onFontBIZUDMinchoMedium = () => { setFont('BIZUDMinchoMedium'); };
  const onFontBrowalliaNew = () => { setFont('BrowalliaNew'); };
  const onFontBrowalliaUPC = () => { setFont('BrowalliaUPC'); };
  const onFontCalibriLight = () => { setFont('CalibriLight'); };
  const onFontCambria = () => { setFont('Cambria'); };
  const onFontCandaraLight = () => { setFont('CandaraLight'); };
  const onFontComicSansMS = () => { setFont('ComicSansMS'); };
  const onFontConsolas = () => { setFont('Consolas'); };
  const onFontConstantia = () => { setFont('Constantia'); };
  const onFontCorbelLight = () => { setFont('CorbelLight'); };
  const onFontCordiaNew = () => { setFont('CordiaNew'); };
  const onFontCordiaUPC = () => { setFont('CordiaUPC'); };
  const onFontCourierNew = () => { setFont('CourierNew'); };
  const onFontDaunPenh = () => { setFont('DaunPenh'); };
  const onFontDavid = () => { setFont('David'); };
  const onFontDengXianLight = () => { setFont('DengXianLight'); };
  const onFontDFKaiSB = () => { setFont('DFKaiSB'); };
  const onFontDilleniaUPC = () => { setFont('DilleniaUPC'); };
  const onFontDokChampa = () => { setFont('DokChampa'); };
  const onFontDotum = () => { setFont('Dotum'); };
  const onFontEbrima = () => { setFont('Ebrima'); };
  const onFontEstrangeloEdessa = () => { setFont('EstrangeloEdessa'); };
  const onFontEucrosiaUPC = () => { setFont('EucrosiaUPC'); };
  const onFontEuphemia = () => { setFont('Euphemia'); };
  const onFontFangSong = () => { setFont('FangSong'); };
  const onFontFranklinGothicMedium = () => { setFont('FranklinGothicMedium'); };
  const onFontFrankRuehl = () => { setFont('FrankRuehl'); };
  const onFontFreesiaUPC = () => { setFont('FreesiaUPC'); };
  const onFontGabriola = () => { setFont('Gabriola'); };
  const onFontGadugi = () => { setFont('Gadugi'); };
  const onFontGautami = () => { setFont('Gautami'); };
  const onFontGeorgia = () => { setFont('Georgia'); };
  const onFontGeorgiaProLight = () => { setFont('GeorgiaProLight'); };
  const onFontGillSansNovaLight = () => { setFont('GillSansNovaLight'); };
  const onFontGisha = () => { setFont('Gisha'); };
  const onFontGulim = () => { setFont('Gulim'); };
  const onFontGungsuh = () => { setFont('Gungsuh'); };
  const onFontImpact = () => { setFont('Impact'); };
  const onFontInkFree = () => { setFont('InkFree'); };
  const onFontIrisUPC = () => { setFont('IrisUPC'); };
  const onFontIskoolaPota = () => { setFont('IskoolaPota'); };
  const onFontJasmineUPC = () => { setFont('JasmineUPC'); };
  const onFontJavaneseText = () => { setFont('JavaneseText'); };
  const onFontKaiTi = () => { setFont('KaiTi'); };
  const onFontKalinga = () => { setFont('Kalinga'); };
  const onFontKartika = () => { setFont('Kartika'); };
  const onFontKhmerUI = () => { setFont('KhmerUI'); };
  const onFontKodchiangUPC = () => { setFont('KodchiangUPC'); };
  const onFontKokila = () => { setFont('Kokila'); };
  const onFontLaoUI = () => { setFont('LaoUI'); };
  const onFontLatha = () => { setFont('Latha'); };
  const onFontLeelawadee = () => { setFont('Leelawadee'); };
  const onFontLeelawadeeUI = () => { setFont('LeelawadeeUI'); };
  const onFontLevenimMT = () => { setFont('LevenimMT'); };
  const onFontLilyUPC = () => { setFont('LilyUPC'); };
  const onFontLucidaConsole = () => { setFont('LucidaConsole'); };
  const onFontLucidaSansUnicode = () => { setFont('LucidaSansUnicode'); };
  const onFontMalgunGothic = () => { setFont('MalgunGothic'); };
  const onFontMangal = () => { setFont('Mangal'); };
  const onFontMarlett = () => { setFont('Marlett'); };
  const onFontMeiryo = () => { setFont('Meiryo'); };
  const onFontMicrosoftHimalaya = () => { setFont('MicrosoftHimalaya'); };
  const onFontMicrosoftJhengHeiLight = () => { setFont('MicrosoftJhengHeiLight'); };
  const onFontMicrosoftNewTaiLue = () => { setFont('MicrosoftNewTaiLue'); };
  const onFontMicrosoftPhagsPa = () => { setFont('MicrosoftPhagsPa'); };
  const onFontMicrosoftSansSerif = () => { setFont('MicrosoftSansSerif'); };
  const onFontMicrosoftTaiLe = () => { setFont('MicrosoftTaiLe'); };
  const onFontMicrosoftUighur = () => { setFont('MicrosoftUighur'); };
  const onFontMicrosoftYaHeiLight = () => { setFont('MicrosoftYaHeiLight'); };
  const onFontMicrosoftYiBaiti = () => { setFont('MicrosoftYiBaiti'); };
  const onFontMingLiU = () => { setFont('MingLiU'); };
  const onFontMingLiUExtB = () => { setFont('MingLiUExtB'); };
  const onFontMiriam = () => { setFont('Miriam'); };
  const onFontMongolianBaiti = () => { setFont('MongolianBaiti'); };
  const onFontMoolBoran = () => { setFont('MoolBoran'); };
  const onFontMSGothic = () => { setFont('MSGothic'); };
  const onFontMSMincho = () => { setFont('MSMincho'); };
  const onFontMVBoli = () => { setFont('MVBoli'); };
  const onFontMyanmarText = () => { setFont('MyanmarText'); };
  const onFontNarkisim = () => { setFont('Narkisim'); };
  const onFontNeueHaasGrtskTPrUT = () => { setFont('NeueHaasGrtskTPrUT'); };
  const onFontNirmalaUISemilight = () => { setFont('NirmalaUISemilight'); };
  const onFontNyala = () => { setFont('Nyala'); };
  const onFontPalatinoLinotype = () => { setFont('PalatinoLinotype'); };
  const onFontPlantagenetCherokee = () => { setFont('PlantagenetCherokee'); };
  const onFontRaavi = () => { setFont('Raavi'); };
  const onFontRockwellNova = () => { setFont('RockwellNova'); };
  const onFontRod = () => { setFont('Rod'); };
  const onFontSakkalMajalla = () => { setFont('SakkalMajalla'); };
  const onFontSanskritText = () => { setFont('SanskritText'); };
  const onFontSegoePrint = () => { setFont('SegoePrint'); };
  const onFontSegoeScript = () => { setFont('SegoeScript'); };
  const onFontSegoeUILight = () => { setFont('SegoeUILight'); };
  const onFontSegoeUIVrblDsplyLght = () => { setFont('SegoeUIVrblDsplyLght'); };
  const onFontShonarBangla = () => { setFont('ShonarBangla'); };
  const onFontShruti = () => { setFont('Shruti'); };
  const onFontSimHei = () => { setFont('SimHei'); };
  const onFontSimplifiedArabic = () => { setFont('SimplifiedArabic'); };
  const onFontSimSun = () => { setFont('SimSun'); };
  const onFontSitkaBanner = () => { setFont('SitkaBanner'); };
  const onFontSylfaen = () => { setFont('Sylfaen'); };
  const onFontTahoma = () => { setFont('Tahoma'); };
  const onFontTimesNewRoman = () => { setFont('TimesNewRoman'); };
  const onFontTraditionalArabic = () => { setFont('TraditionalArabic'); };
  const onFontTrebuchetMS = () => { setFont('TrebuchetMS'); };
  const onFontTunga = () => { setFont('Tunga'); };
  const onFontUDDigiKyokashoNB = () => { setFont('UDDigiKyokashoNB'); };
  const onFontUrduTypesetting = () => { setFont('UrduTypesetting'); };
  const onFontUtsaah = () => { setFont('Utsaah'); };
  const onFontVani = () => { setFont('Vani'); };
  const onFontVerdana = () => { setFont('Verdana'); };
  const onFontVerdanaProLight = () => { setFont('VerdanaProLight'); };
  const onFontVijaya = () => { setFont('Vijaya'); };
  const onFontVrinda = () => { setFont('Vrinda'); };
  const onFontYuGothicLight = () => { setFont('YuGothicLight'); };
  const onFontYuMinchoLight = () => { setFont('YuMinchoLight'); };


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

  /** Windows 11 system fonts if locally installed */
  const AharoniBold = FontMenuItem('Aharoni Bold', onFontAharoniBold, 'AharoniBold')
  const Aldhabi = FontMenuItem('Aldhabi', onFontAldhabi, 'Aldhabi')
  const Andalus = FontMenuItem('Andalus', onFontAndalus, 'Andalus')
  const AngsanaNew = FontMenuItem('Angsana New', onFontAngsanaNew, 'AngsanaNew')
  const AngsanaUPC = FontMenuItem('AngsanaUPC', onFontAngsanaUPC, 'AngsanaUPC')
  const Aparajita = FontMenuItem('Aparajita', onFontAparajita, 'Aparajita')
  const ArabicTypesetting = FontMenuItem('Arabic Typesetting', onFontArabicTypesetting, 'ArabicTypesetting')
  const Arial = FontMenuItem('Arial', onFontArial, 'Arial')
  const ArialBlack = FontMenuItem('Arial Black', onFontArialBlack, 'ArialBlack')
  const ArialNovaLight = FontMenuItem('Arial Nova Light', onFontArialNovaLight, 'ArialNovaLight')
  const Bahnschrift = FontMenuItem('Bahnschrift', onFontBahnschrift, 'Bahnschrift')
  const Batang = FontMenuItem('Batang', onFontBatang, 'Batang')
  const BIZUDGothic = FontMenuItem('BIZ UDGothic', onFontBIZUDGothic, 'BIZUDGothic')
  const BIZUDMinchoMedium = FontMenuItem('BIZ UDMincho Medium', onFontBIZUDMinchoMedium, 'BIZUDMinchoMedium')
  const BrowalliaNew = FontMenuItem('Browallia New', onFontBrowalliaNew, 'BrowalliaNew')
  const BrowalliaUPC = FontMenuItem('BrowalliaUPC', onFontBrowalliaUPC, 'BrowalliaUPC')
  const CalibriLight = FontMenuItem('Calibri Light', onFontCalibriLight, 'CalibriLight')
  const Cambria = FontMenuItem('Cambria', onFontCambria, 'Cambria')
  const CandaraLight = FontMenuItem('Candara Light', onFontCandaraLight, 'CandaraLight')
  const ComicSansMS = FontMenuItem('Comic Sans MS', onFontComicSansMS, 'ComicSansMS')
  const Consolas = FontMenuItem('Consolas', onFontConsolas, 'Consolas')
  const Constantia = FontMenuItem('Constantia', onFontConstantia, 'Constantia')
  const CorbelLight = FontMenuItem('Corbel Light', onFontCorbelLight, 'CorbelLight')
  const CordiaNew = FontMenuItem('Cordia New', onFontCordiaNew, 'CordiaNew')
  const CordiaUPC = FontMenuItem('CordiaUPC', onFontCordiaUPC, 'CordiaUPC')
  const CourierNew = FontMenuItem('Courier New', onFontCourierNew, 'CourierNew')
  const DaunPenh = FontMenuItem('DaunPenh', onFontDaunPenh, 'DaunPenh')
  const David = FontMenuItem('David', onFontDavid, 'David')
  const DengXianLight = FontMenuItem('DengXian Light', onFontDengXianLight, 'DengXianLight')
  const DFKaiSB = FontMenuItem('DFKai-SB', onFontDFKaiSB, 'DFKaiSB')
  const DilleniaUPC = FontMenuItem('DilleniaUPC', onFontDilleniaUPC, 'DilleniaUPC')
  const DokChampa = FontMenuItem('DokChampa', onFontDokChampa, 'DokChampa')
  const Dotum = FontMenuItem('Dotum', onFontDotum, 'Dotum')
  const Ebrima = FontMenuItem('Ebrima', onFontEbrima, 'Ebrima')
  const EstrangeloEdessa = FontMenuItem('Estrangelo Edessa', onFontEstrangeloEdessa, 'EstrangeloEdessa')
  const EucrosiaUPC = FontMenuItem('EucrosiaUPC', onFontEucrosiaUPC, 'EucrosiaUPC')
  const Euphemia = FontMenuItem('Euphemia', onFontEuphemia, 'Euphemia')
  const FangSong = FontMenuItem('FangSong', onFontFangSong, 'FangSong')
  const FranklinGothicMedium = FontMenuItem('Franklin Gothic Medium', onFontFranklinGothicMedium, 'FranklinGothicMedium')
  const FrankRuehl = FontMenuItem('FrankRuehl', onFontFrankRuehl, 'FrankRuehl')
  const FreesiaUPC = FontMenuItem('FreesiaUPC', onFontFreesiaUPC, 'FreesiaUPC')
  const Gabriola = FontMenuItem('Gabriola', onFontGabriola, 'Gabriola')
  const Gadugi = FontMenuItem('Gadugi', onFontGadugi, 'Gadugi')
  const Gautami = FontMenuItem('Gautami', onFontGautami, 'Gautami')
  const Georgia = FontMenuItem('Georgia', onFontGeorgia, 'Georgia')
  const GeorgiaProLight = FontMenuItem('Georgia Pro Light', onFontGeorgiaProLight, 'GeorgiaProLight')
  const GillSansNovaLight = FontMenuItem('Gill Sans Nova Light', onFontGillSansNovaLight, 'GillSansNovaLight')
  const Gisha = FontMenuItem('Gisha', onFontGisha, 'Gisha')
  const Gulim = FontMenuItem('Gulim', onFontGulim, 'Gulim')
  const Gungsuh = FontMenuItem('Gungsuh', onFontGungsuh, 'Gungsuh')
  const Impact = FontMenuItem('Impact', onFontImpact, 'Impact')
  const InkFree = FontMenuItem('Ink Free', onFontInkFree, 'InkFree')
  const IrisUPC = FontMenuItem('IrisUPC', onFontIrisUPC, 'IrisUPC')
  const IskoolaPota = FontMenuItem('Iskoola Pota', onFontIskoolaPota, 'IskoolaPota')
  const JasmineUPC = FontMenuItem('JasmineUPC', onFontJasmineUPC, 'JasmineUPC')
  const JavaneseText = FontMenuItem('Javanese Text', onFontJavaneseText, 'JavaneseText')
  const KaiTi = FontMenuItem('KaiTi', onFontKaiTi, 'KaiTi')
  const Kalinga = FontMenuItem('Kalinga', onFontKalinga, 'Kalinga')
  const Kartika = FontMenuItem('Kartika', onFontKartika, 'Kartika')
  const KhmerUI = FontMenuItem('Khmer UI', onFontKhmerUI, 'KhmerUI')
  const KodchiangUPC = FontMenuItem('KodchiangUPC', onFontKodchiangUPC, 'KodchiangUPC')
  const Kokila = FontMenuItem('Kokila', onFontKokila, 'Kokila')
  const LaoUI = FontMenuItem('Lao UI', onFontLaoUI, 'LaoUI')
  const Latha = FontMenuItem('Latha', onFontLatha, 'Latha')
  const Leelawadee = FontMenuItem('Leelawadee', onFontLeelawadee, 'Leelawadee')
  const LeelawadeeUI = FontMenuItem('Leelawadee UI', onFontLeelawadeeUI, 'LeelawadeeUI')
  const LevenimMT = FontMenuItem('Levenim MT', onFontLevenimMT, 'LevenimMT')
  const LilyUPC = FontMenuItem('LilyUPC', onFontLilyUPC, 'LilyUPC')
  const LucidaConsole = FontMenuItem('Lucida Console', onFontLucidaConsole, 'LucidaConsole')
  const LucidaSansUnicode = FontMenuItem('Lucida Sans Unicode', onFontLucidaSansUnicode, 'LucidaSansUnicode')
  const MalgunGothic = FontMenuItem('Malgun Gothic', onFontMalgunGothic, 'MalgunGothic')
  const Mangal = FontMenuItem('Mangal', onFontMangal, 'Mangal')
  const Marlett = FontMenuItem('Marlett', onFontMarlett, 'Marlett')
  const Meiryo = FontMenuItem('Meiryo', onFontMeiryo, 'Meiryo')
  const MicrosoftHimalaya = FontMenuItem('Microsoft Himalaya', onFontMicrosoftHimalaya, 'MicrosoftHimalaya')
  const MicrosoftJhengHeiLight = FontMenuItem('Microsoft JhengHei Light', onFontMicrosoftJhengHeiLight, 'MicrosoftJhengHeiLight')
  const MicrosoftNewTaiLue = FontMenuItem('Microsoft New Tai Lue', onFontMicrosoftNewTaiLue, 'MicrosoftNewTaiLue')
  const MicrosoftPhagsPa = FontMenuItem('Microsoft PhagsPa', onFontMicrosoftPhagsPa, 'MicrosoftPhagsPa')
  const MicrosoftSansSerif = FontMenuItem('Microsoft Sans Serif', onFontMicrosoftSansSerif, 'MicrosoftSansSerif')
  const MicrosoftTaiLe = FontMenuItem('Microsoft Tai Le', onFontMicrosoftTaiLe, 'MicrosoftTaiLe')
  const MicrosoftUighur = FontMenuItem('Microsoft Uighur', onFontMicrosoftUighur, 'MicrosoftUighur')
  const MicrosoftYaHeiLight = FontMenuItem('Microsoft YaHei Light', onFontMicrosoftYaHeiLight, 'MicrosoftYaHeiLight')
  const MicrosoftYiBaiti = FontMenuItem('Microsoft Yi Baiti', onFontMicrosoftYiBaiti, 'MicrosoftYiBaiti')
  const MingLiU = FontMenuItem('MingLiU', onFontMingLiU, 'MingLiU')
  const MingLiUExtB = FontMenuItem('MingLiU-ExtB', onFontMingLiUExtB, 'MingLiUExtB')
  const Miriam = FontMenuItem('Miriam', onFontMiriam, 'Miriam')
  const MongolianBaiti = FontMenuItem('Mongolian Baiti', onFontMongolianBaiti, 'MongolianBaiti')
  const MoolBoran = FontMenuItem('MoolBoran', onFontMoolBoran, 'MoolBoran')
  const MSGothic = FontMenuItem('MS Gothic', onFontMSGothic, 'MSGothic')
  const MSMincho = FontMenuItem('MS Mincho', onFontMSMincho, 'MSMincho')
  const MVBoli = FontMenuItem('MV Boli', onFontMVBoli, 'MVBoli')
  const MyanmarText = FontMenuItem('Myanmar Text', onFontMyanmarText, 'MyanmarText')
  const Narkisim = FontMenuItem('Narkisim', onFontNarkisim, 'Narkisim')
  const NeueHaasGroteskTextProUltraThin = FontMenuItem('Neue Haas Grtsk T Pr UT', onFontNeueHaasGrtskTPrUT, 'NeueHaasGrtskTPrUT')
  const NirmalaUISemilight = FontMenuItem('Nirmala UI Semilight', onFontNirmalaUISemilight, 'NirmalaUISemilight')
  const Nyala = FontMenuItem('Nyala', onFontNyala, 'Nyala')
  const PalatinoLinotype = FontMenuItem('Palatino Linotype', onFontPalatinoLinotype, 'PalatinoLinotype')
  const PlantagenetCherokee = FontMenuItem('Plantagenet Cherokee', onFontPlantagenetCherokee, 'PlantagenetCherokee')
  const Raavi = FontMenuItem('Raavi', onFontRaavi, 'Raavi')
  const RockwellNova = FontMenuItem('Rockwell Nova', onFontRockwellNova, 'RockwellNova')
  const Rod = FontMenuItem('Rod', onFontRod, 'Rod')
  const SakkalMajalla = FontMenuItem('Sakkal Majalla', onFontSakkalMajalla, 'SakkalMajalla')
  const SanskritText = FontMenuItem('Sanskrit Text', onFontSanskritText, 'SanskritText')
  const SegoePrint = FontMenuItem('Segoe Print', onFontSegoePrint, 'SegoePrint')
  const SegoeScript = FontMenuItem('Segoe Script', onFontSegoeScript, 'SegoeScript')
  const SegoeUILight = FontMenuItem('Segoe UI Light', onFontSegoeUILight, 'SegoeUILight')
  const SegoeUIVariableDisplayLight = FontMenuItem('Segoe UI Vrbl Dsply Lght', onFontSegoeUIVrblDsplyLght, 'SegoeUIVrblDsplyLght')
  const ShonarBangla = FontMenuItem('Shonar Bangla', onFontShonarBangla, 'ShonarBangla')
  const Shruti = FontMenuItem('Shruti', onFontShruti, 'Shruti')
  const SimHei = FontMenuItem('SimHei', onFontSimHei, 'SimHei')
  const SimplifiedArabic = FontMenuItem('Simplified Arabic', onFontSimplifiedArabic, 'SimplifiedArabic')
  const SimSun = FontMenuItem('SimSun', onFontSimSun, 'SimSun')
  const SitkaBanner = FontMenuItem('Sitka Banner', onFontSitkaBanner, 'SitkaBanner')
  const Sylfaen = FontMenuItem('Sylfaen', onFontSylfaen, 'Sylfaen')
  const Tahoma = FontMenuItem('Tahoma', onFontTahoma, 'Tahoma')
  const TimesNewRoman = FontMenuItem('Times New Roman', onFontTimesNewRoman, 'TimesNewRoman')
  const TraditionalArabic = FontMenuItem('Traditional Arabic', onFontTraditionalArabic, 'TraditionalArabic')
  const TrebuchetMS = FontMenuItem('Trebuchet MS', onFontTrebuchetMS, 'TrebuchetMS')
  const Tunga = FontMenuItem('Tunga', onFontTunga, 'Tunga')
  const UDDigiKyokashoNB = FontMenuItem('UD Digi Kyokasho N-B', onFontUDDigiKyokashoNB, 'UDDigiKyokashoNB')
  const UrduTypesetting = FontMenuItem('Urdu Typesetting', onFontUrduTypesetting, 'UrduTypesetting')
  const Utsaah = FontMenuItem('Utsaah', onFontUtsaah, 'Utsaah')
  const Vani = FontMenuItem('Vani', onFontVani, 'Vani')
  const Verdana = FontMenuItem('Verdana', onFontVerdana, 'Verdana')
  const VerdanaProLight = FontMenuItem('Verdana Pro Light', onFontVerdanaProLight, 'VerdanaProLight')
  const Vijaya = FontMenuItem('Vijaya', onFontVijaya, 'Vijaya')
  const Vrinda = FontMenuItem('Vrinda', onFontVrinda, 'Vrinda')
  const YuGothicLight = FontMenuItem('Yu Gothic Light', onFontYuGothicLight, 'YuGothicLight')
  const YuMinchoLight = FontMenuItem('Yu Mincho Light', onFontYuMinchoLight, 'YuMinchoLight')

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
              {Aldhabi}
              {Andalus}
              {AngsanaNew}
              {AngsanaUPC}
              {Aparajita}
              {ArabicTypesetting}
              {Arial}
              {ArialBlack}
              {ArialNovaLight}
              {Bahnschrift}
              {Batang}
              {BIZUDGothic}
              {BIZUDMinchoMedium}
              {BrowalliaNew}
              {BrowalliaUPC}
              {CalibriLight}
              {Cambria}
              {CandaraLight}
              {ComicSansMS}
              {Consolas}
              {Constantia}
              {CorbelLight}
              {CordiaNew}
              {CordiaUPC}
              {CourierNew}
              {DaunPenh}
              {David}
              {DengXianLight}
              {DFKaiSB}
              {DilleniaUPC}
              {DokChampa}
              {Dotum}
              {Ebrima}
              {EstrangeloEdessa}
              {EucrosiaUPC}
              {Euphemia}
              {FangSong}
              {FranklinGothicMedium}
              {FrankRuehl}
              {FreesiaUPC}
              {Gabriola}
              {Gadugi}
              {Gautami}
              {Georgia}
              {GeorgiaProLight}
              {GillSansNovaLight}
              {Gisha}
              {Gulim}
              {Gungsuh}
              {Impact}
              {InkFree}
              {IrisUPC}
              {IskoolaPota}
              {JasmineUPC}
              {JavaneseText}
              {KaiTi}
              {Kalinga}
              {Kartika}
              {KhmerUI}
              {KodchiangUPC}
              {Kokila}
              {LaoUI}
              {Latha}
              {Leelawadee}
              {LeelawadeeUI}
              {LevenimMT}
              {LilyUPC}
              {LucidaConsole}
              {LucidaSansUnicode}
              {MalgunGothic}
              {Mangal}
              {Marlett}
              {Meiryo}
              {MicrosoftHimalaya}
              {MicrosoftJhengHeiLight}
              {MicrosoftNewTaiLue}
              {MicrosoftPhagsPa}
              {MicrosoftSansSerif}
              {MicrosoftTaiLe}
              {MicrosoftUighur}
              {MicrosoftYaHeiLight}
              {MicrosoftYiBaiti}
              {MingLiU}
              {MingLiUExtB}
              {Miriam}
              {MongolianBaiti}
              {MoolBoran}
              {MSGothic}
              {MSMincho}
              {MVBoli}
              {MyanmarText}
              {Narkisim}
              {NeueHaasGroteskTextProUltraThin}
              {NirmalaUISemilight}
              {Nyala}
              {PalatinoLinotype}
              {PlantagenetCherokee}
              {Raavi}
              {RockwellNova}
              {Rod}
              {SakkalMajalla}
              {SanskritText}
              {SegoePrint}
              {SegoeScript}
              {SegoeUILight}
              {SegoeUIVariableDisplayLight}
              {ShonarBangla}
              {Shruti}
              {SimHei}
              {SimplifiedArabic}
              {SimSun}
              {SitkaBanner}
              {Sylfaen}
              {Tahoma}
              {TimesNewRoman}
              {TraditionalArabic}
              {TrebuchetMS}
              {Tunga}
              {UDDigiKyokashoNB}
              {UrduTypesetting}
              {Utsaah}
              {Vani}
              {Verdana}
              {VerdanaProLight}
              {Vijaya}
              {Vrinda}
              {YuGothicLight}
              {YuMinchoLight}              
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
  )
}