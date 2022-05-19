/* eslint-disable test-selectors/button */
/* eslint-disable test-selectors/onClick */
import React, { Fragment, useMemo } from 'react';
import { Menu, Transition } from '@headlessui/react';
import PropTypes from 'prop-types';

import {
  useDetectFonts,
  useAssumeGraphite,
  fontList as fontsArray,
  graphiteEnabledFontList as graphiteEnabledFontsArray
} from 'font-detect-rhl';

import GraphiteEnabledWebFontsArray from '../embeddedWebFonts/GraphiteEnabledWebFonts.json';
import '../embeddedWebFonts/GraphiteEnabledWebFonts.css';

export default function FontDropdown(fontDropdownProps) {
  const { selectedFont, setSelectedFont } = fontDropdownProps;

  // on click event for selecting font
  const handleChange = (event) => {
    setSelectedFont(event.target.value);
  };

  // Should Graphite-enabled fonts be detected?
  const isGraphiteAssumed = useAssumeGraphite({});

  // Utilizing Graphite-enabled web fonts
  const GraphiteEnabledWebFonts =
    isGraphiteAssumed &&
    GraphiteEnabledWebFontsArray.map((font, index) => (
      <Menu.Item key={index}>
        {({ active }) => (
          <button type="button" value={font.id} onClick={handleChange} className={`${active ? 'menuitemhov' : 'menuitemnohov'} group menuitem ${selectedFont === font.id ? 'on' : ''}`}>
              ➤{font.name} {font.version}
          </button>
        )}
      </Menu.Item>
    ));

  // Detecting Graphite-enabled fonts
  const detectedGEFonts = useDetectFonts({ fonts: (isGraphiteAssumed ? graphiteEnabledFontsArray : []) });

  /** Assemble dropdown menu item buttons for detected Graphite-enable fonts */
  const detectedGEFontsComponents = isGraphiteAssumed && detectedGEFonts.map((font, index) => (
    <Menu.Item key={index}>
      {({ active }) => (
        <button type="button" value={font.name} onClick={handleChange} className={`${active ? 'menuitemhov' : 'menuitemnohov'} group menuitem ${selectedFont === font.name ? 'on' : ''}`}>
            ➤{font.name}
        </button>
      )}
    </Menu.Item>
  ));
  //Detecting fonts:
  const detectedFonts = useDetectFonts({ fonts: fontsArray });

  /** Assemble dropdown menu item buttons for detected fonts */
  const detectedFontsComponents = detectedFonts.map((font, index) => (
    <Menu.Item key={index}>
      {({ active }) => (
        <button type="button" value={font.name} onClick={handleChange} className={`${active ? 'menuitemhov' : 'menuitemnohov'} group menuitem ${selectedFont === font.name ? 'on' : ''}`}>
            ➤{font.name}
        </button>
      )}
    </Menu.Item>
  ));

  /** Dropdown button indication when a font is set */
  const fontDropdownOnOrOff = useMemo(() => (selectedFont === 'monospace' ? 'btnAll btnMiddle' : 'btnAll btnMiddle on'), [selectedFont]);

  /** Dropdown button indication of which font is set */
  const selectedFontShort = selectedFont.length > 10 ? selectedFont.substring(0, 7) + "..." : selectedFont
  const fontDropdownPresentation = useMemo(() => (selectedFont === 'monospace' ? 'Set Font ⇩' : `${selectedFontShort} ⇩`), [selectedFontShort]);

  //No fonts detected message for any group of fonts:
  const noneDetectedMsg = "-none detected-";

  /** Return the Dropdown */
  return (
    <Menu as="div" className="dropdown">
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
        <Menu.Items className="menuitemsall fontmenu">
          {isGraphiteAssumed && (
            <div className="subgroup">
              <span className="subheading group menuitem"><b>Graphite-enabled:</b></span>
              {GraphiteEnabledWebFonts}
            </div>
          )}
          {isGraphiteAssumed && (
            <div className="subgroup">
              <span className="subheading group menuitem">
                <b>
                  Graphite-enabled (local):
                  <em>{detectedGEFontsComponents.length === 0 && isGraphiteAssumed && noneDetectedMsg}</em>
                </b>
              </span>
              {detectedGEFontsComponents}
            </div>
          )}
          <div className="subgroup">
            <span className="subheading group menuitem">
              <b>
              Detected Fonts:
                <em>{detectedFontsComponents.length === 0 && noneDetectedMsg}</em>
              </b>
            </span>
            {detectedFontsComponents}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

FontDropdown.propTypes = {
  /** Selected Font */
  selectedFont: PropTypes.string,
  /** Set Selected Font */
  setSelectedFont: PropTypes.func.isRequired,
};

FontDropdown.defaultProps = {
  selectedFont: 'monospace',
};
