import React from 'react'

const Background = () => {
  return (
    <>
      <section className="absolute -z-50 inset-0 overflow-hidden min-h-svh">
        <span className="bg-sky-100 w-[400px] h-[400px] rounded-full top-[0px] left-[300px] absolute" />
        <span className="bg-sky-100 w-[600px] h-[400px] rounded-full top-[50vh] right-[-200px] absolute" />
        <span className="bg-sky-100 w-[700px] h-[500px] rounded-full top-[70vh] left-[-350px] absolute" />
      </section>
      <section className="absolute -z-50 inset-0 overflow-hidden backdrop-blur-3xl min-h-svh"></section>
    </>
  )
}

export default Background
