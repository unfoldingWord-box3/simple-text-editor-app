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
    return (
      <Menu.Item>
      {({ active }) => (
        <button
          onClick={itemClick}
          className={`${ active ? 'menuitemhov' : 'menuitemnohov' } group menuitem ${fontOnOrOff(itemFont)}`}
        >
        {itemPresentation(itemType, itemName)}
      </button>
      )}
      </Menu.Item>
    )
  }

  const fontDropdownOnOrOff = font === "" ? "btn" : "btn on"
  const fontDropdownPresentation = font === "" ? "Set Font ⇩" : font + " ⇩"

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
                {FontMenuItem('Default Font', onFontClear, '', '')}
                {FontMenuItem('Aktab 2.000', onFontAktabRW, 'AktabRW', 'woff')}
                {FontMenuItem('Alkalami 1.200', onFontAlkalamiRW, 'AlkalamiRW', 'woff')}
                {FontMenuItem('Alkalami Light 1.200', onFontAlkalamiLW, 'AlkalamiLW', 'woff')}
                {FontMenuItem('Andika 6.001', onFontAndikaRW, 'AndikaRW', 'woff2')}
                {FontMenuItem('Awami Nastaliq 2.200', onFontAwamiNastaliqRW, 'AwamiNastaliqRW', 'woff2')}
                {FontMenuItem('Gentium Plus 6.001', onFontGentiumPlusRW, 'GentiumPlusRW', 'woff2')}
                {FontMenuItem('Harmattan 2.000', onFontHarmattanW, 'HarmattanW', 'woff')}
                {FontMenuItem('LateefGR 1.200', onFontLateefRW, 'LateefRW', 'woff')}
                {FontMenuItem('Mingzat 1.000', onFontMingzatW, 'MingzatW', 'woff')}
                {FontMenuItem('Narnoor 1.000', onFontNarnoorW, 'NarnoorW', 'woff')}
                {FontMenuItem('Padauk 5.000', onFontPadaukRW, 'PadaukRW', 'woff2')}
                {FontMenuItem('Scheherazade New 3.300', onFontScheherazadeRW, 'AScheherazadeRW', 'woff2')}
                {FontMenuItem('Tagmukay 2.000', onFontTagmukayRW, 'TagmukayRW', 'woff')}
                {FontMenuItem('TaiHeritagePro 2.600', onFontTaiHeritageProRW, 'TaiHeritageProRW', 'woff')}
            </div>
            <div className="px-1 py-1 ">
            <span className={'text-gray-900 group menuitem'}><b>If Locally Installed:</b></span>
              {FontMenuItem('Aktab', onFontAktab, 'Aktab', 'local')}
              {FontMenuItem('Alkalami', onFontAlkalami, 'Alkalami', 'local')}
              {FontMenuItem('Alkalami Light', onFontAlkalamiLight, 'AlkalamiLight', 'local')}
              {FontMenuItem('Andika', onFontAndika, 'Andika', 'local')}
              {FontMenuItem('Awami Nastaliq', onFontAwamiNastaliq, 'AwamiNastaliq', 'local')}
              {FontMenuItem('Gentium Plus', onFontGentiumPlus, 'GentiumPlus', 'local')}
              {FontMenuItem('Harmattan', onFontHarmattan, 'Harmattan', 'local')}
              {FontMenuItem('Khmer Busra', onFontKhmerBusra, 'KhmerBusra', 'local')}
              {FontMenuItem('Khmer Mondulkiri', onFontKhmerMondulkiri, 'KhmerMondulkiri', 'local')}
              {FontMenuItem('LateefGR', onFontLateefGR, 'LateefGR', 'local')}
              {FontMenuItem('Mingzat', onFontMingzat, 'Mingzat', 'local')}
              {FontMenuItem('Narnoor', onFontNarnoor, 'Narnoor', 'local')}
              {FontMenuItem('Padauk', onFontPadauk, 'Padauk', 'local')}
              {FontMenuItem('Scheherazade New', onFontScheherazadeNew, 'ScheherazadeNew', 'local')}
              {FontMenuItem('Shimenkan', onFontShimenkan, 'Shimenkan', 'local')}
              {FontMenuItem('Sophia Nubian', onFontSophiaNubian, 'SophiaNubian', 'local')}
              {FontMenuItem('Tagmukay', onFontTagmukay, 'Tagmukay', 'local')}
              {FontMenuItem('Tai Heritage Pro', onFontTaiHeritagePro, 'TaiHeritagePro', 'local')}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
  )
}