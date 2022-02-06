import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function FontDropdown() {

  const [value, setValue] = useState('')

  const onValueClear = () => { setValue(''); };
  const onValueAwamiNastaliqRW = () => { setValue('AwamiNastaliqRW'); };
  const onValueHarmattanW = () => { setValue('HarmattanW'); };
  const onValueScheherazadeRW = () => { setValue('ScheherazadeRW'); };
  const onValueAwamiNastaliq = () => { setValue('AwamiNastaliq'); };
  const onValueHarmattan = () => { setValue('Harmattan'); };
  const onValueScheherazade = () => { setValue('Scheherazade'); };

  return (
      <Menu as="div" className="relative inline-block text-left notff ff" style={{textAlign: "center"}}>
        <div>
          <Menu.Button className={(value === "" ? "btn" : "btn on")}>
            {(value === "" ? "Set Font ⇩" : value + " ⇩")}
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
                {(value === "" ? "" : <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={onValueClear}
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
                    onClick={onValueAwamiNastaliqRW}
                    className={`${
                      active ? 'menuitemhov' : 'menuitemnohov'
                    } group menuitem ${
                      value === "AwamiNastaliqRW" ? 'on' : ''
                    }`}
                  >
                    ➤ Awami Nastaliq 2.200
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={onValueHarmattanW}
                    className={`${
                      active ? 'menuitemhov' : 'menuitemnohov'
                    } group menuitem ${
                      value === "HarmattanW" ? 'on' : ''
                    }`}
                  >
                    ➤ Harmattan 2.000
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={onValueScheherazadeRW}
                    className={`${
                      active ? 'menuitemhov' : 'menuitemnohov'
                    } group menuitem ${
                      value === "ScheherazadeRW" ? 'on' : ''
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
                    onClick={onValueAwamiNastaliq}
                    className={`${
                      active ? 'menuitemhov' : 'menuitemnohov'
                    } group menuitem ${
                      value === "AwamiNastaliq" ? 'on' : ''
                    }`}
                  >
                    <span style={{ marginLeft: '.5rem' }}>➤ Awami Nastaliq</span>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={onValueHarmattan}
                    className={`${
                      active ? 'menuitemhov' : 'menuitemnohov'
                    } group menuitem ${
                      value === "Harmattan" ? 'on' : ''
                    }`}
                  >
                    <span style={{ marginLeft: '.5rem' }}>➤ Harmattan</span>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={onValueScheherazade}
                    className={`${
                      active ? 'menuitemhov' : 'menuitemnohov'
                    } group menuitem ${
                      value === "Scheherazade" ? 'on' : ''
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