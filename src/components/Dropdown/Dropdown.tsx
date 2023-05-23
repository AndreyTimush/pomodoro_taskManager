import React, { useEffect, useState } from "react";
import styles from "./dropdown.module.css";

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => {};

export function Dropdown({
  button,
  children,
  onClose = NOOP,
  isOpen,
  onOpen = NOOP,
}: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  };

  useEffect(() => {
    setIsDropdownOpen(isOpen);
  }, [isOpen]);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.button} onClick={handleOpen}>
          {button}
        </div>
        {isDropdownOpen && (
          <div className={styles.listContainer}>
            <div
              className={styles.list}
              onClick={() => setIsDropdownOpen(false)}
            >
              {children}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
