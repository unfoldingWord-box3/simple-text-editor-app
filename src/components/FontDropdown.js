import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function FontDropdown(props) {
  const {font, setFont} = props;

  const onFontClear = () => { setFont(''); };
  const onFontAwamiNastaliqRW = () => { setFont('AwamiNastaliqRW'); };
  const onFontHarmattanW = () => { setFont('HarmattanW'); };
  const onFontScheherazadeRW = () => { setFont('ScheherazadeRW'); };
  const onFontAwamiNastaliq = () => { setFont('AwamiNastaliq'); };
  const onFontHarmattan = () => { setFont('Harmattan'); };
  const onFontScheherazade = () => { setFont('Scheherazade'); };

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
              </Menu.Item> )}
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
                    onClick={onFontScheherazade}
                    className={`${
                      active ? 'menuitemhov' : 'menuitemnohov'
                    } group menuitem ${
                      font === "Scheherazade" ? 'on' : ''
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