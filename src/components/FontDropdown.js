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
  const itemPresentation = (itemType, itemName) => (itemType === 'local' ? <span style={{ marginLeft: '.5rem' }}>➤ {itemName}</span> : "➤" + itemName)

  function FontMenuItem(itemName, itemClick, itemFont, itemType) {

    const fontActive = fontOnOrOff(itemFont)
    const fontList = itemPresentation(itemType, itemName)

    return (
      <Menu.Item>
      {({ active }) => (
        <button
          onClick={itemClick}
          className={`${ active ? 'menuitemhov' : 'menuitemnohov' } group menuitem ${fontActive}`}
        >
        {fontList}
      </button>
      )}
      </Menu.Item>
    )
  }

  const fontDropdownOnOrOff = font === "" ? "btn" : "btn on"
  const fontDropdownPresentation = font === "" ? "Set Font ⇩" : font + " ⇩"

  const defaultFont = FontMenuItem('Default Font', onFontClear, '', '')
  const aktabRW = FontMenuItem('Aktab 2.000', onFontAktabRW, 'AktabRW', 'woff')
  const alkalamiRW = FontMenuItem('Alkalami 1.200', onFontAlkalamiRW, 'AlkalamiRW', 'woff')
  const alkalamiLW = FontMenuItem('Alkalami Light 1.200', onFontAlkalamiLW, 'AlkalamiLW', 'woff')
  const andikaRW = FontMenuItem('Andika 6.001', onFontAndikaRW, 'AndikaRW', 'woff2')
  const awamiNastaliqRW = FontMenuItem('Awami Nastaliq 2.200', onFontAwamiNastaliqRW, 'AwamiNastaliqRW', 'woff2')
  const gentiumPlusRW = FontMenuItem('Gentium Plus 6.001', onFontGentiumPlusRW, 'GentiumPlusRW', 'woff2')
  const harmattanW = FontMenuItem('Harmattan 2.000', onFontHarmattanW, 'HarmattanW', 'woff')
  const lateefRW = FontMenuItem('LateefGR 1.200', onFontLateefRW, 'LateefRW', 'woff')
  const mingzatW = FontMenuItem('Mingzat 1.000', onFontMingzatW, 'MingzatW', 'woff')
  const narnoorW = FontMenuItem('Narnoor 1.000', onFontNarnoorW, 'NarnoorW', 'woff')
  const padaukRW = FontMenuItem('Padauk 5.000', onFontPadaukRW, 'PadaukRW', 'woff2')
  const scheherazadeRW = FontMenuItem('Scheherazade New 3.300', onFontScheherazadeRW, 'AScheherazadeRW', 'woff2')
  const tagmukayRW = FontMenuItem('Tagmukay 2.000', onFontTagmukayRW, 'TagmukayRW', 'woff')
  const taiHeritageProRW = FontMenuItem('TaiHeritagePro 2.600', onFontTaiHeritageProRW, 'TaiHeritageProRW', 'woff')

  const aktab = FontMenuItem('Aktab', onFontAktab, 'Aktab', 'local')
  const alkalami = FontMenuItem('Alkalami', onFontAlkalami, 'Alkalami', 'local')
  const alkalamiLight = FontMenuItem('Alkalami Light', onFontAlkalamiLight, 'AlkalamiLight', 'local')
  const andika = FontMenuItem('Andika', onFontAndika, 'Andika', 'local')
  const awamiNastaliq = FontMenuItem('Awami Nastaliq', onFontAwamiNastaliq, 'AwamiNastaliq', 'local')
  const gentiumPlus = FontMenuItem('Gentium Plus', onFontGentiumPlus, 'GentiumPlus', 'local')
  const harmattan = FontMenuItem('Harmattan', onFontHarmattan, 'Harmattan', 'local')
  const khmerBusra = FontMenuItem('Khmer Busra', onFontKhmerBusra, 'KhmerBusra', 'local')
  const khmerMondulkiri = FontMenuItem('Khmer Mondulkiri', onFontKhmerMondulkiri, 'KhmerMondulkiri', 'local')
  const lateefGR = FontMenuItem('LateefGR', onFontLateefGR, 'LateefGR', 'local')
  const mingzat = FontMenuItem('Mingzat', onFontMingzat, 'Mingzat', 'local')
  const narnoor = FontMenuItem('Narnoor', onFontNarnoor, 'Narnoor', 'local')
  const padauk = FontMenuItem('Padauk', onFontPadauk, 'Padauk', 'local')
  const scheherazadeNew = FontMenuItem('Scheherazade New', onFontScheherazadeNew, 'ScheherazadeNew', 'local')
  const shimenkan = FontMenuItem('Shimenkan', onFontShimenkan, 'Shimenkan', 'local')
  const sophiaNubian = FontMenuItem('Sophia Nubian', onFontSophiaNubian, 'SophiaNubian', 'local')
  const tagmukay = FontMenuItem('Tagmukay', onFontTagmukay, 'Tagmukay', 'local')
  const taiHeritagePro = FontMenuItem('Tai Heritage Pro', onFontTaiHeritagePro, 'TaiHeritagePro', 'local')


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