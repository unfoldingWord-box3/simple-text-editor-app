import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function FontDropdown(props) {
  const {font, setFont} = props;

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

  const fontDropdownOnOrOff = font === "" ? "btn" : "btn on"
  const fontDropdownPresentation = font === "" ? "Set Font ⇩" : font + " ⇩"

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


  return (
      <Menu as="div" className="relative inline-block text-left notff ff" style={{textAlign: "center"}}>
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
            <div className="px-1 py-1 ">
              {defaultFont}
            </div>
            <div className="px-1 py-1 ">
              <span className={'text-gray-900 group menuitem'}><b>Graphite-enabled:</b></span>
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
            </div>
            <div className="px-1 py-1 ">
              <span className={'text-gray-900 group menuitem'}><b>If Locally Installed:</b></span>
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
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
  )
}