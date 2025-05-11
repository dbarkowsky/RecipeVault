import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  // If baseUrl contains a pathname after the domain, use this as the home link
  const url = location.href; // will include the 404
  const returnUrl = url.substring(0, url.lastIndexOf("/"));

  return (
    <article class="popover-hint">
      <h1>404</h1>
      <p>{i18n(cfg.locale).pages.error.notFound}</p>
      <a href={returnUrl}>{i18n(cfg.locale).pages.error.home}</a>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
