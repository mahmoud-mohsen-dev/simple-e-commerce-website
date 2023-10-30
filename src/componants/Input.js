import React from 'react'

function Input({theFunc, initialData}) {

    const search = (arr, eventValue, theFunc) => {
        const result = arr.filter(e => {
            const title = e.title.toLowerCase()
            const regex = new RegExp(eventValue.toLowerCase(), "g")
            return regex.test(title);
        })
        theFunc(result)
        return result
    }

    const onSearch = (event) => {
        search (initialData, event.target.value, theFunc)
    }

  return (
    <>
      <input
        placeholder="Enter your search shoes."
        type="text"
        className="search-input"
        onChange={onSearch}
      ></input>
    </>
  );
}

export default Input