import React from "react"

import KeepInTouch from "../../KeepInTouch/KeepInTouch"
import FooterBreadcrumbs from "./FooterBreadcrumbs"
import FooterContent from "./FooterContent"
import FooterBase from "./FooterBase"

interface Props {}

const defaultProps = {}

const Footer: React.FC<Props> = () => (
  <>
    <KeepInTouch />
    <footer>
      <svg viewBox="0 0 1920 352" className="footer__top">
        <path
          d="M0 82.3c129.3 64.1 302.9 87.3 485.4 168.2 129.7 57.4 330.9 121.1 502.5 90.6 89.7-15.8 147.1-44.6 228-74.4 80.3-29.6 165.5-56.6 257.1-70.7 204.2-31.5 351.6-56.6 447-178.7V352H0V82.3z"
          fill="#1f1f5f"
        />
        <path
          d="M-1 41.7c131.1 70.3 308 96.8 493 185.6 131.4 63 335.4 132.9 509.3 99.4 90.9-17.4 149.1-49 231.1-81.6 81.4-32.4 176.8-54.2 269.6-69.7 189.6-31.6 323.3-66.7 418.8-175.4"
          fill="none"
          stroke="#1f1f5f"
          strokeWidth="2"
        />
      </svg>

      <FooterBreadcrumbs />

      <FooterContent />

      <FooterBase />
    </footer>
  </>
)

Footer.defaultProps = defaultProps

export default Footer
