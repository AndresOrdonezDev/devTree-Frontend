import { useState } from "react"
import { social } from "../data/social"
import DevTreeInput from "../components/DevTreeInput"
import { isValidUrl } from "../utils"
import { toast } from "sonner"

export default function LinkTreeView() {

  const [devTreeSocial, setDevTreeSocial] = useState(social)

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedLinks = devTreeSocial.map(link => link.name === e.target.name ? { ...link, url: e.target.value } : link)
    setDevTreeSocial(updatedLinks)
  }

  const handleEnableLink = (name: string) => {

    const updatedLinkStatus = devTreeSocial.map(link => {
      if (link.name === name) {
        if (isValidUrl(link.url)) {
          return { ...link, enabled: !link.enabled }
        } else {
          toast.error('Ingrese una url válida')
        }
      }

      return link

    })
    setDevTreeSocial(updatedLinkStatus)
  }

  return (
    <>
      <div className="space-y-5">
        {devTreeSocial.map(item => (
          <DevTreeInput key={item.name} item={item} handleUrlChange={handleUrlChange} handleEnableLink={handleEnableLink} />
        ))}
      </div>
    </>
  )
}