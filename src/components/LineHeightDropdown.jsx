/* eslint-disable test-selectors/button, test-selectors/onClick */
import React, { Fragment, useMemo } from 'react';
import { Menu, Transition } from '@headlessui/react';
import PropTypes from 'prop-types';

export default function LineHeightDropdown(lineHeightDropdownProps) {
  const { selectedLineHeight, setSelectedLineHeight } = lineHeightDropdownProps;

  const lineHeightArray = [
    { size: '150%', verbose: '150%', id: '1' },
    { size: '200%', verbose: '200%', id: '2' },
    { size: '250%', verbose: '250%', id: '3' },
    { size: 'normal', verbose: 'default', id: '4' },
  ];

  // on click event for selecting line height
  const handleChangeLineHeight = (event) => {
    setSelectedLineHeight(event.target.value);
  };

  // Utilizing Graphite-enabled web fonts
  const LineHeights =
    lineHeightArray.map((lineHeight, index) => (
      <Menu.Item key={index}>
        {({ active }) => (
          <button type="button" value={lineHeight.size} onClick={handleChangeLineHeight} className={`${active ? 'menuitemhov' : 'menuitemnohov'} group menuitem ${selectedLineHeight === lineHeight.size ? 'on' : ''}`}>
              ➤{lineHeight.verbose}
          </button>
        )}
      </Menu.Item>
    ));

  /** Dropdown button indication when line height is set */
  const lineHeightDropdownOnOrOff = useMemo(() => (selectedLineHeight === 'normal' ? 'btnAll btnRight' : 'btnAll btnRight on'), [selectedLineHeight]);

  /** Dropdown button indication of which line height is set */
  const lineHeightDropdownPresentation = useMemo(() => (selectedLineHeight === 'normal' ? 'Height ⇩' : `${selectedLineHeight} ⇩`), [selectedLineHeight]);


  /** Return the Dropdown */
  return (
    <Menu as="div" className="dropdown">
      <div>
        <Menu.Button className={lineHeightDropdownOnOrOff}>
          {lineHeightDropdownPresentation}
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
        <Menu.Items className="menuitemsall">
          <div className="subgroup">
            <span className="subheading group menuitem"><b>Line&nbsp;Height:</b></span>
            {LineHeights}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

LineHeightDropdown.propTypes = {
  /** Selected Line Height */
  selectedLineHeight: PropTypes.string,
  /** Set Selected Line Height */
  setSelectedLineHeight: PropTypes.func.isRequired,
};

LineHeightDropdown.defaultProps = {
  selectedLineHeight: 'normal',
};
