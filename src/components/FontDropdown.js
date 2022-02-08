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


  return (
      <Menu as="div" className="relative inline-block text-left notff ff" style={{textAlign: "center"}}>
        <div>
          <Menu.Button className={(font === "" ? "btn" : "btn on")}>
            {(font === "" ? "Set Font ⇩" : font + " ⇩")}
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
                {(font === "" ? "" : <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={onFontClear}
                      className={`${
                        active ? 'menuitemhov' : 'menuitemnohov'
                      } group menuitem`}
                    >
                      ➤ Reset to Default Font
                    </button>
                  )}
                  </Menu.Item>
                )}
                <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={onFontAktabRW}
                    className={`${
                     active ? 'menuitemhov' : 'menuitemnohov'
                    } group menuitem ${
                     font === "AktabRW" ? 'on' : ''
                   }`}
                  >
                   ➤ Aktab 2.000
                 </button>
                 )}
                </Menu.Item>
                <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={onFontAlkalamiRW}
                    className={`${
                      active ? 'menuitemhov' : 'menuitemnohov'
                    } group menuitem ${
                      font === "AlkalamiRW" ? 'on' : ''
                    }`}
                  >
                    ➤ Alkalami 1.200
                  </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={onFontAlkalamiLW}
                    className={`${
                      active ? 'menuitemhov' : 'menuitemnohov'
                    } group menuitem ${
                      font === "AlkalamiLW" ? 'on' : ''
                    }`}
                  >
                    ➤ Alkalami Light 1.200
                  </button>
                )}
                </Menu.Item>
                <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={onFontAndikaRW}
                    className={`${
                      active ? 'menuitemhov' : 'menuitemnohov'
                    } group menuitem ${
                      font === "AndikaRW" ? 'on' : ''
                    }`}
                  >
                    ➤ Andika 6.001
                  </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={onFontAwamiNastaliqRW}
                      className={`${
                        active ? 'menuitemhov' : 'menuitemnohov'
                      } group menuitem ${
                        font === "AwamiNastaliqRW" ? 'on' : ''
                      }`}
                    >
                      ➤ Awami Nastaliq 2.200
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={onFontGentiumPlusRW}
                    className={`${
                      active ? 'menuitemhov' : 'menuitemnohov'
                    } group menuitem ${
                      font === "GentiumPlusRW" ? 'on' : ''
                    }`}
                  >
                    ➤ Gentium Plus 6.001
                  </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={onFontHarmattanW}
                      className={`${
                        active ? 'menuitemhov' : 'menuitemnohov'
                      } group menuitem ${
                        font === "HarmattanW" ? 'on' : ''
                      }`}
                    >
                      ➤ Harmattan 2.000
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={onFontLateefRW}
                    className={`${
                      active ? 'menuitemhov' : 'menuitemnohov'
                    } group menuitem ${
                      font === "LateefRW" ? 'on' : ''
                    }`}
                  >
                    ➤ LateefGR 1.200
                  </button>
                )}
                </Menu.Item>
                <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={onFontMingzatW}
                    className={`${
                      active ? 'menuitemhov' : 'menuitemnohov'
                    } group menuitem ${
                      font === "MingzatW" ? 'on' : ''
                    }`}
                  >
                    ➤ Mingzat 1.000
                  </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={onFontNarnoorW}
                    className={`${
                      active ? 'menuitemhov' : 'menuitemnohov'
                    } group menuitem ${
                      font === "NarnoorW" ? 'on' : ''
                    }`}
                  >
                    ➤ Narnoor 1.000
                  </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={onFontPadaukRW}
                    className={`${
                      active ? 'menuitemhov' : 'menuitemnohov'
                    } group menuitem ${
                      font === "PadaukRW" ? 'on' : ''
                    }`}
                  >
                    ➤ Padauk 5.000
                  </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={onFontScheherazadeRW}
                      className={`${
                        active ? 'menuitemhov' : 'menuitemnohov'
                      } group menuitem ${
                        font === "ScheherazadeRW" ? 'on' : ''
                      }`}
                    >
                      ➤ Scheherazade New 3.300
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={onFontTagmukayRW}
                    className={`${
                      active ? 'menuitemhov' : 'menuitemnohov'
                    } group menuitem ${
                      font === "TagmukayRW" ? 'on' : ''
                    }`}
                  >
                    ➤ Tagmukay 2.000
                  </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={onFontTaiHeritageProRW}
                    className={`${
                      active ? 'menuitemhov' : 'menuitemnohov'
                    } group menuitem ${
                      font === "TaiHeritageProRW" ? 'on' : ''
                    }`}
                  >
                    ➤ TaiHeritagePro 2.600
                  </button>
                  )}
                </Menu.Item>
            </div>
            <div className="px-1 py-1 ">
            <span className={'text-gray-900 group menuitem'}><b>If Locally Installed:</b></span>
              <Menu.Item>
              {({ active }) => (
                <button
                  onClick={onFontAktab}
                  className={`${
                    active ? 'menuitemhov' : 'menuitemnohov'
                  } group menuitem ${
                    font === "Aktab" ? 'on' : ''
                  }`}
                >
                  <span style={{ marginLeft: '.5rem' }}>➤ Aktab</span>
                </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={onFontAlkalami}
                    className={`${
                      active ? 'menuitemhov' : 'menuitemnohov'
                    } group menuitem ${
                      font === "Alkalami" ? 'on' : ''
                    }`}
                  >
                    <span style={{ marginLeft: '.5rem' }}>➤ Alkalami</span>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
              {({ active }) => (
                <button
                  onClick={onFontAlkalamiLight}
                  className={`${
                    active ? 'menuitemhov' : 'menuitemnohov'
                  } group menuitem ${
                    font === "AlkalamiLight" ? 'on' : ''
                  }`}
                >
                  <span style={{ marginLeft: '.5rem' }}>➤ Alkalami Light</span>
                </button>
              )}
              </Menu.Item>
              <Menu.Item>
              {({ active }) => (
                <button
                  onClick={onFontAndika}
                  className={`${
                    active ? 'menuitemhov' : 'menuitemnohov'
                  } group menuitem ${
                    font === "Andika" ? 'on' : ''
                  }`}
                >
                  <span style={{ marginLeft: '.5rem' }}>➤ Andika</span>
                </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={onFontAwamiNastaliq}
                    className={`${
                      active ? 'menuitemhov' : 'menuitemnohov'
                    } group menuitem ${
                      font === "AwamiNastaliq" ? 'on' : ''
                    }`}
                  >
                    <span style={{ marginLeft: '.5rem' }}>➤ Awami Nastaliq</span>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
              {({ active }) => (
                <button
                  onClick={onFontGentiumPlus}
                  className={`${
                    active ? 'menuitemhov' : 'menuitemnohov'
                  } group menuitem ${
                    font === "GentiumPlus" ? 'on' : ''
                  }`}
                >
                  <span style={{ marginLeft: '.5rem' }}>➤ Gentium Plus</span>
                </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={onFontHarmattan}
                    className={`${
                      active ? 'menuitemhov' : 'menuitemnohov'
                    } group menuitem ${
                      font === "Harmattan" ? 'on' : ''
                    }`}
                  >
                    <span style={{ marginLeft: '.5rem' }}>➤ Harmattan</span>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
              {({ active }) => (
                <button
                  onClick={onFontKhmerBusra}
                  className={`${
                    active ? 'menuitemhov' : 'menuitemnohov'
                  } group menuitem ${
                    font === "KhmerBusra" ? 'on' : ''
                  }`}
                >
                  <span style={{ marginLeft: '.5rem' }}>➤ Khmer Busra</span>
                </button>
                )}
              </Menu.Item>
              <Menu.Item>
              {({ active }) => (
                <button
                  onClick={onFontKhmerMondulkiri}
                  className={`${
                    active ? 'menuitemhov' : 'menuitemnohov'
                  } group menuitem ${
                    font === "KhmerMondulkiri" ? 'on' : ''
                  }`}
                >
                  <span style={{ marginLeft: '.5rem' }}>➤ Khmer Mondulkiri</span>
                </button>
                )}
              </Menu.Item>
              <Menu.Item>
              {({ active }) => (
                <button
                  onClick={onFontLateefGR}
                  className={`${
                    active ? 'menuitemhov' : 'menuitemnohov'
                  } group menuitem ${
                    font === "LateefGR" ? 'on' : ''
                  }`}
                >
                  <span style={{ marginLeft: '.5rem' }}>➤ LateefGR</span>
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
            {({ active }) => (
              <button
                onClick={onFontMingzat}
                className={`${
                  active ? 'menuitemhov' : 'menuitemnohov'
                } group menuitem ${
                  font === "Mingzat" ? 'on' : ''
                }`}
              >
                <span style={{ marginLeft: '.5rem' }}>➤ Mingzat</span>
              </button>
              )}
            </Menu.Item>
            <Menu.Item>
            {({ active }) => (
              <button
                onClick={onFontNarnoor}
                className={`${
                  active ? 'menuitemhov' : 'menuitemnohov'
                } group menuitem ${
                  font === "Narnoor" ? 'on' : ''
                }`}
              >
                <span style={{ marginLeft: '.5rem' }}>➤ Narnoor</span>
              </button>
              )}
            </Menu.Item>
            <Menu.Item>
            {({ active }) => (
              <button
                onClick={onFontPadauk}
                className={`${
                  active ? 'menuitemhov' : 'menuitemnohov'
                } group menuitem ${
                  font === "Padauk" ? 'on' : ''
                }`}
              >
                <span style={{ marginLeft: '.5rem' }}>➤ Padauk</span>
              </button>
              )}
            </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={onFontScheherazadeNew}
                    className={`${
                      active ? 'menuitemhov' : 'menuitemnohov'
                    } group menuitem ${
                      font === "ScheherazadeNew" ? 'on' : ''
                    }`}
                  >
                    <span style={{ marginLeft: '.5rem' }}>➤ Scheherazade New</span>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
              {({ active }) => (
                <button
                  onClick={onFontShimenkan}
                  className={`${
                    active ? 'menuitemhov' : 'menuitemnohov'
                  } group menuitem ${
                    font === "Shimenkan" ? 'on' : ''
                  }`}
                >
                  <span style={{ marginLeft: '.5rem' }}>➤ Shimenkan</span>
                </button>
                )}
              </Menu.Item>
              <Menu.Item>
              {({ active }) => (
                <button
                  onClick={onFontSophiaNubian}
                  className={`${
                    active ? 'menuitemhov' : 'menuitemnohov'
                  } group menuitem ${
                    font === "SophiaNubian" ? 'on' : ''
                  }`}
                >
                  <span style={{ marginLeft: '.5rem' }}>➤ Sophia Nubian</span>
                </button>
                )}
              </Menu.Item>
              <Menu.Item>
              {({ active }) => (
                <button
                  onClick={onFontTagmukay}
                  className={`${
                    active ? 'menuitemhov' : 'menuitemnohov'
                  } group menuitem ${
                    font === "Tagmukay" ? 'on' : ''
                  }`}
                >
                  <span style={{ marginLeft: '.5rem' }}>➤ Tagmukay</span>
                </button>
                )}
              </Menu.Item>
              <Menu.Item>
              {({ active }) => (
                <button
                  onClick={onFontTaiHeritagePro}
                  className={`${
                    active ? 'menuitemhov' : 'menuitemnohov'
                  } group menuitem ${
                    font === "TaiHeritagePro" ? 'on' : ''
                  }`}
                >
                  <span style={{ marginLeft: '.5rem' }}>➤ Tai Heritage Pro</span>
                </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
  )
}