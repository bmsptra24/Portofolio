import React from 'react'

const Header = () => {
  return (
    <section className="w-full border">
      <header className="container mx-auto flex justify-between p-6 w-full">
        <p className="hover:font-semibold hover:-tracking-wider transition-all cursor-pointer hover:text-slate-950">
          Bima Saputra
        </p>
        <div className="flex gap-12">
          {['Profil', 'Blog', 'About me'].map((item, index) => (
            <p
              key={index}
              className="hover:underline cursor-pointer hover:text-slate-950"
            >
              {item}
            </p>
          ))}
        </div>
      </header>
    </section>
  )
}

export default Header
