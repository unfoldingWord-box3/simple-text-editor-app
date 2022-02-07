import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function FontDropdown(props) {
  const {font, setFont} = props;

  const onFontClear = () => { setFont(''); };
  const onFontAlkalamiRW = () => { setFont('AlkalamiRW'); };
  const onFontAlkalamiLW = () => { setFont('AlkalamiLW'); };
  const onFontAwamiNastaliqRW = () => { setFont('AwamiNastaliqRW'); };
  const onFontHarmattanW = () => { setFont('HarmattanW'); };
  const onFontLateefRW = () => { setFont('LateefRW'); };
  const onFontScheherazadeRW = () => { setFont('ScheherazadeRW'); };
  const onFontAlkalami = () => { setFont('Alkalami'); };
  const onFontAlkalamiLight = () => { setFont('AlkalamiLight'); };
  const onFontAwamiNastaliq = () => { setFont('AwamiNastaliq'); };
  const onFontHarmattan = () => { setFont('Harmattan'); };
  const onFontLateefGR = () => { setFont('LateefGR'); };
  const onFontScheherazadeNew = () => { setFont('ScheherazadeNew'); };

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
            </div>
            <div className="px-1 py-1 ">
            <span className={'text-gray-900 group menuitem'}><b>If Locally Installed:</b></span>
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
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
  )
}