import Image from "next/image"

const sideNavbar = () => {
  return (
    <div id="sideNavbar">
      <ul className="p-0 m-0 py-1">
        <li>
          <a href="#" className="flex items-center py-1 px-3 bg-[#2D323C] text-white">
            <figure className="mr-3">
              <Image src="/listIcon.svg" alt="dashboard-icon" width={18} height={18} />
            </figure>
            All
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center py-1 px-3 hover:bg-[#2D323C] text-[#a8b3cf]">
            <figure className="mr-3">
              <Image src="/listIcon.svg" alt="dashboard-icon" width={18} height={18} />
            </figure>
            All
          </a>
        </li>
      </ul>
    </div>
  )
}

export default sideNavbar