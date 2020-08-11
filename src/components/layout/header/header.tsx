import React, { useState, FunctionComponent } from "react";

export interface DropdownItem {
  label: string;
  description: string;
  icon: JSX.Element;
  href: string;
}

export interface MenuItemWithDropdown {
  label: string;
  dropdownItems: DropdownItem[];
}

export interface MenuItemWithoutDropdown {
  label: string;
  href: string;
}

export type MenuItem = MenuItemWithDropdown | MenuItemWithoutDropdown;

export interface Header {
  menuItems: MenuItem[];
  logo: JSX.Element;
}

export const FlyoutMenu: FunctionComponent<MenuItemWithDropdown> = ({
  label,
  dropdownItems,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => setIsOpen(!isOpen);

  /* Item active: "text-gray-900", Item inactive: "text-gray-500" */
  return (
    <div className="relative">
      <button
        onClick={toggleIsOpen}
        type="button"
        className="text-gray-500 group inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
      >
        <span>{label}</span>
        {/* Item active: "text-gray-600", Item inactive: "text-gray-400" */}
        <svg
          className="text-gray-400 h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={`${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
        } transition ease-in duration-150 absolute -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2`}
      >
        <div className="rounded-lg shadow-lg">
          <div className="rounded-lg shadow-xs overflow-hidden">
            <div className="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
              {dropdownItems.map(
                ({ label: text, description, href, icon }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                  >
                    {icon}
                    <div className="space-y-1">
                      <p className="text-base leading-6 font-medium text-gray-900">
                        {text}
                      </p>
                      <p className="text-sm leading-5 text-gray-500">
                        {description}
                      </p>
                    </div>
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MobileFlyoutMenu: FunctionComponent<MenuItemWithDropdown> = ({
  label,
  dropdownItems,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <div
        onClick={toggleIsOpen}
        className={`${
          isOpen ? "bg-gray-50" : ""
        } -m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150 text-base leading-6 font-medium text-gray-900 justify-between cursor-pointer`}
      >
        <div>{label}</div>
        <div>
          <svg
            className="text-gray-400 h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      {isOpen &&
        dropdownItems.map(({ label: text, href }, index) => (
          <a
            key={index}
            href={href}
            className="-m-3 pl-6 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
          >
            <div className="text-base leading-6 font-medium text-gray-900">
              {text}
            </div>
          </a>
        ))}
    </>
  );
};

const isMenuItemWithDropdown = (
  menuItem: MenuItem
): menuItem is MenuItemWithDropdown => {
  return (menuItem as MenuItemWithDropdown).dropdownItems !== undefined;
};

export const Header: FunctionComponent<Header> = ({ menuItems, logo }) => {
  const [mobileDrawerOn, setMobileDrawerOn] = useState(false);
  const toggleMobileDrawer = () => {
    setMobileDrawerOn(!mobileDrawerOn);
  };
  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="lg:w-0 lg:flex-1">
            <a href="/" className="flex">
              {logo}
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              onClick={toggleMobileDrawer}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            {menuItems.map((menuItem, index) =>
              isMenuItemWithDropdown(menuItem) ? (
                <FlyoutMenu {...menuItem} key={index} />
              ) : (
                <a
                  key={index}
                  href={menuItem.href}
                  className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
                >
                  {menuItem.label}
                </a>
              )
            )}
          </nav>
        </div>
      </div>
      {mobileDrawerOn && (
        <div
          className={`duration-100 ease-in absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50`}
        >
          <div className="rounded-lg shadow-lg">
            <div className="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5 space-y-6">
                <div className="flex items-center justify-between">
                  <div>{logo}</div>
                  <div className="-mr-2">
                    <button
                      onClick={toggleMobileDrawer}
                      type="button"
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div>
                  <nav className="grid row-gap-8">
                    {menuItems.map((menuItem, index) =>
                      isMenuItemWithDropdown(menuItem) ? (
                        <MobileFlyoutMenu {...menuItem} key={index} />
                      ) : (
                        <a
                          key={index}
                          href={menuItem.href}
                          className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
                        >
                          <div className="text-base leading-6 font-medium text-gray-900">
                            {menuItem.label}
                          </div>
                        </a>
                      )
                    )}
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
