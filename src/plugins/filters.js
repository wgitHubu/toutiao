const filters = {
  dateFormat(val) {
    return '2022'
  },
  toUpper(str) {
    return str.toUpperCase()
  },
  toLower(str) {
    return str.toLowerCase()
  }
}

const registerFilters = (Vue) => {
  for (const name in filters) {
    Vue.filter(name, filters[name])
  }
}

export default registerFilters
