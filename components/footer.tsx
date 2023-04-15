import React, { memo, useState } from 'react'
import styles from './footer.module.css'
import Link from 'next/link'
import RegionsList from './regionsList'
import SecteursList from './secteursList'

const currentYear = new Date().getFullYear()

const Footer = () => {
  const [active, setActive] = useState(0)
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <ul className={`flex flex-col text-base lg:flex-row ${styles.tab}`}>
        <li className={`flex-1 ${active === 0 && styles.active}`}>
          <span
            className="text-center block py-2 px-4 bg-primary hover:bg-secondary text-white"
            onClick={() => setActive(0)}
          >
            Emplois par secteur / Jobs by sector
          </span>
        </li>
        <li className={`flex-1 ${active === 1 && styles.active}`}>
          <span
            className="text-center block py-2 px-4 bg-primary hover:bg-secondary text-white"
            onClick={() => setActive(1)}
          >
            Emplois par région / Jobs by region
          </span>
        </li>
        <li className={`flex-1 ${active === 2 && styles.active}`}>
          <span
            className="text-center block py-2 px-4 bg-primary hover:bg-secondary text-white"
            onClick={() => setActive(2)}
          >
            JobRapide / Contact
          </span>
        </li>
      </ul>
      {active === 0 && <SecteursList />}
      {active === 1 && <RegionsList />}
      <div className="text-center bg-secondary text-white py-2 text-xs">
        &copy; Copyright 2017 - {currentYear} | JobRapide | Tous Droits
        Réservés. | Développé par :&nbsp;
        <Link href="https://ktekdesign.com" target="_blank">
          KTEKDESIGN
        </Link>
      </div>
    </footer>
  )
}

export default memo(Footer)
