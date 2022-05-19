/* eslint-disable test-selectors/button */
/* eslint-disable test-selectors/onClick */
import React, { Fragment, useMemo } from 'react';
import { Menu, Transition } from '@headlessui/react';
import PropTypes from 'prop-types';

export default function FontSizeDropdown(fontSizeDropdownProps) {
  const { selectedFontSize, setSelectedFontSize } = fontSizeDropdownProps;

  const fontSizeArray = [
    { size: '0.75em', verbose: '75%', id: '1' },
    { size: '1.25em', verbose: '125%', id: '2' },
    { size: '1.5em', verbose: '150%', id: '3' },
    { size: '1em', verbose: 'default', id: '4' },
  ];

  // on click event for selecting font size
  const handleChangeSize = (event) => {
    setSelectedFontSize(event.target.value);
  };

  // Utilizing Graphite-enabled web fonts
  const FontSizes =
    fontSizeArray.map((fontSize, index) => (
      <Menu.Item key={index}>
        {({ active }) => (
          <button type="button" value={fontSize.size} onClick={handleChangeSize} className={`${active ? 'menuitemhov' : 'menuitemnohov'} group menuitem ${selectedFontSize === fontSize.size ? 'on' : ''}`}>
              ➤{fontSize.verbose}
          </button>
        )}
      </Menu.Item>
    ));

  /** Dropdown button indication when a font is set */
  const fontSizeDropdownOnOrOff = useMemo(() => (selectedFontSize === '1em' ? 'btnAll btnMiddle' : 'btnAll btnMiddle on'), [selectedFontSize]);

  /** Dropdown button indication of which font is set */
  const fontSizeDropdownPresentation = useMemo(() => (selectedFontSize === '1em' ? 'Size ⇩' : `${selectedFontSize} ⇩`), [selectedFontSize]);


  /** Return the Dropdown */
  return (
    <Menu as="div" className="dropdown">
      <div>
        <Menu.Button className={fontSizeDropdownOnOrOff}>
          {fontSizeDropdownPresentation}
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
            <span className="subheading group menuitem"><b>Font&nbsp;Size:</b></span>
            {FontSizes}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

FontSizeDropdown.propTypes = {
  /** Selected Font Size */
  selectedFontSize: PropTypes.string,
  /** Set Selected Font Size */
  setSelectedFontSize: PropTypes.func.isRequired,
};

FontSizeDropdown.defaultProps = {
  selectedFontSize: '1em',
};
